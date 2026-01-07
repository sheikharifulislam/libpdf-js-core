/**
 * PDFPage - High-level wrapper for a PDF page.
 *
 * Provides convenient access to page properties and operations.
 * Obtained via `pdf.getPage(index)` or `pdf.getPages()`.
 *
 * @example
 * ```typescript
 * const pdf = await PDF.load(bytes);
 * const page = pdf.getPage(0);
 *
 * // Access page properties
 * console.log(`Size: ${page.width} x ${page.height}`);
 * console.log(`Rotation: ${page.rotation}`);
 *
 * // Get underlying objects for low-level access
 * const ref = page.ref;
 * const dict = page.dict;
 * ```
 */

import { AcroForm } from "#src/document/forms/acro-form";
import { AppearanceGenerator } from "#src/document/forms/appearance-generator";
import type {
  CheckboxField,
  DropdownField,
  FormField,
  ListBoxField,
  RadioField,
  TextField,
} from "#src/document/forms/fields";
import { TerminalField } from "#src/document/forms/fields/base";
import { PdfArray } from "#src/objects/pdf-array";
import { PdfDict } from "#src/objects/pdf-dict";
import { PdfName } from "#src/objects/pdf-name";
import { PdfNumber } from "#src/objects/pdf-number";
import { PdfRef } from "#src/objects/pdf-ref";
import { PdfStream } from "#src/objects/pdf-stream";
import type { PDFContext } from "./pdf-context";
import type { PDFEmbeddedPage } from "./pdf-embedded-page";

/**
 * A rectangle defined by [x1, y1, x2, y2] coordinates.
 */
export interface Rectangle {
  /** Left x coordinate */
  x1: number;
  /** Bottom y coordinate */
  y1: number;
  /** Right x coordinate */
  x2: number;
  /** Top y coordinate */
  y2: number;
}

/**
 * Options for drawing an embedded page.
 *
 * **Scale vs Width/Height Priority:**
 * - If `width` is specified, it takes precedence over `scale` for horizontal sizing
 * - If `height` is specified, it takes precedence over `scale` for vertical sizing
 * - If only `width` is specified, `height` is calculated to maintain aspect ratio
 * - If only `height` is specified, `width` is calculated to maintain aspect ratio
 * - If both `width` and `height` are specified, aspect ratio may not be preserved
 * - If neither `width` nor `height` is specified, `scale` is used (default: 1.0)
 */
export interface DrawPageOptions {
  /** X position from left edge (default: 0) */
  x?: number;
  /** Y position from bottom edge (default: 0) */
  y?: number;
  /**
   * Uniform scale factor (default: 1.0).
   * Ignored if `width` or `height` is specified.
   */
  scale?: number;
  /**
   * Target width in points.
   * Takes precedence over `scale`. If specified without `height`,
   * the aspect ratio is preserved.
   */
  width?: number;
  /**
   * Target height in points.
   * Takes precedence over `scale`. If specified without `width`,
   * the aspect ratio is preserved.
   */
  height?: number;
  /** Opacity 0-1 (default: 1.0, fully opaque) */
  opacity?: number;
  /** Draw as background behind existing content (default: false = foreground) */
  background?: boolean;
}

/**
 * Options for placing a form field widget on a page.
 */
export interface DrawFieldOptions {
  /** X position from left edge of page */
  x: number;
  /** Y position from bottom edge of page */
  y: number;
  /** Widget width in points */
  width: number;
  /** Widget height in points */
  height: number;
  /** Option value (required for radio groups, ignored for other types) */
  option?: string;
}

/**
 * PDFPage wraps a page dictionary with convenient accessors.
 */
export class PDFPage {
  /** The page reference */
  readonly ref: PdfRef;

  /** The page dictionary */
  readonly dict: PdfDict;

  /** The page index (0-based) */
  readonly index: number;

  /** Document context for registering objects */
  private readonly ctx?: PDFContext;

  constructor(ref: PdfRef, dict: PdfDict, index: number, ctx?: PDFContext) {
    this.ref = ref;
    this.dict = dict;
    this.index = index;
    this.ctx = ctx;
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // Page Dimensions
  // ─────────────────────────────────────────────────────────────────────────────

  /**
   * Get the MediaBox (page boundary).
   *
   * Returns the effective MediaBox, accounting for inheritance from parent pages.
   * If no MediaBox is found, returns a default US Letter size.
   */
  getMediaBox(): Rectangle {
    return this.getBox("MediaBox") ?? { x1: 0, y1: 0, x2: 612, y2: 792 };
  }

  /**
   * Get the CropBox (visible region).
   *
   * Falls back to MediaBox if CropBox is not defined.
   */
  getCropBox(): Rectangle {
    return this.getBox("CropBox") ?? this.getMediaBox();
  }

  /**
   * Get the BleedBox (printing bleed area).
   *
   * Falls back to CropBox if BleedBox is not defined.
   */
  getBleedBox(): Rectangle {
    return this.getBox("BleedBox") ?? this.getCropBox();
  }

  /**
   * Get the TrimBox (intended page dimensions after trimming).
   *
   * Falls back to CropBox if TrimBox is not defined.
   */
  getTrimBox(): Rectangle {
    return this.getBox("TrimBox") ?? this.getCropBox();
  }

  /**
   * Get the ArtBox (meaningful content area).
   *
   * Falls back to CropBox if ArtBox is not defined.
   */
  getArtBox(): Rectangle {
    return this.getBox("ArtBox") ?? this.getCropBox();
  }

  /**
   * Page width in points (based on MediaBox).
   *
   * Accounts for page rotation - if rotated 90 or 270 degrees,
   * returns the height of the MediaBox instead.
   */
  get width(): number {
    const box = this.getMediaBox();
    const rotation = this.rotation;

    if (rotation === 90 || rotation === 270) {
      return Math.abs(box.y2 - box.y1);
    }

    return Math.abs(box.x2 - box.x1);
  }

  /**
   * Page height in points (based on MediaBox).
   *
   * Accounts for page rotation - if rotated 90 or 270 degrees,
   * returns the width of the MediaBox instead.
   */
  get height(): number {
    const box = this.getMediaBox();
    const rotation = this.rotation;

    if (rotation === 90 || rotation === 270) {
      return Math.abs(box.x2 - box.x1);
    }

    return Math.abs(box.y2 - box.y1);
  }

  /**
   * Whether the page is in landscape orientation.
   *
   * A page is landscape when its width is greater than its height.
   * This accounts for page rotation.
   */
  get isLandscape(): boolean {
    return this.width > this.height;
  }

  /**
   * Whether the page is in portrait orientation.
   *
   * A page is portrait when its height is greater than or equal to its width.
   * This accounts for page rotation.
   */
  get isPortrait(): boolean {
    return this.height >= this.width;
  }

  /**
   * Page rotation in degrees (0, 90, 180, or 270).
   */
  get rotation(): 0 | 90 | 180 | 270 {
    const rotate = this.dict.get("Rotate");

    if (rotate instanceof PdfNumber) {
      const value = rotate.value % 360;
      // Normalize to 0, 90, 180, 270

      if (value === 90 || value === -270) {
        return 90;
      }

      if (value === 180 || value === -180) {
        return 180;
      }

      if (value === 270 || value === -90) {
        return 270;
      }
    }

    return 0;
  }

  /**
   * Set the page rotation.
   *
   * @param degrees - Rotation in degrees (must be 0, 90, 180, or 270)
   */
  setRotation(degrees: 0 | 90 | 180 | 270): void {
    if (degrees === 0) {
      this.dict.delete("Rotate");
    } else {
      this.dict.set("Rotate", PdfNumber.of(degrees));
    }
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // Resources
  // ─────────────────────────────────────────────────────────────────────────────

  /**
   * Get the page's Resources dictionary.
   *
   * Creates an empty one if it doesn't exist.
   */
  getResources(): PdfDict {
    let resources = this.dict.get("Resources");

    if (!(resources instanceof PdfDict)) {
      resources = new PdfDict();

      this.dict.set("Resources", resources);
    }

    return resources;
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // Drawing
  // ─────────────────────────────────────────────────────────────────────────────

  /**
   * Draw an embedded page onto this page.
   *
   * The embedded page (created via `pdf.embedPage()`) is drawn as a Form XObject.
   * By default, it's drawn in the foreground (on top of existing content).
   * Use `{ background: true }` to draw behind existing content.
   *
   * @param embedded - The embedded page to draw
   * @param options - Drawing options (position, scale, opacity, background)
   *
   * @example
   * ```typescript
   * // Draw a watermark centered on each page
   * const watermark = await pdf.embedPage(watermarkPdf, 0);
   *
   * for (const page of await pdf.getPages()) {
   *   page.drawPage(watermark, {
   *     x: (page.width - watermark.width) / 2,
   *     y: (page.height - watermark.height) / 2,
   *     opacity: 0.5,
   *   });
   * }
   *
   * // Draw as a background
   * page.drawPage(letterhead, { background: true });
   * ```
   */
  drawPage(embedded: PDFEmbeddedPage, options: DrawPageOptions = {}): void {
    const x = options.x ?? 0;
    const y = options.y ?? 0;

    // Calculate scale
    let scaleX = options.scale ?? 1;
    let scaleY = options.scale ?? 1;

    if (options.width !== undefined) {
      scaleX = options.width / embedded.width;
    }

    if (options.height !== undefined) {
      scaleY = options.height / embedded.height;
    }

    // If only width or height specified, maintain aspect ratio
    if (options.width !== undefined && options.height === undefined) {
      scaleY = scaleX;
    } else if (options.height !== undefined && options.width === undefined) {
      scaleX = scaleY;
    }

    // Add XObject to resources
    const xobjectName = this.addXObjectResource(embedded.ref);

    // Build content stream operators
    const ops: string[] = [];
    ops.push("q"); // Save graphics state

    // Set opacity if needed (via ExtGState)
    if (options.opacity !== undefined && options.opacity < 1) {
      const gsName = this.addGraphicsState({ ca: options.opacity, CA: options.opacity });
      ops.push(`/${gsName} gs`);
    }

    // Apply transformation matrix: [scaleX 0 0 scaleY x y]
    // Account for the embedded page's BBox origin
    const translateX = x - embedded.box.x1 * scaleX;
    const translateY = y - embedded.box.y1 * scaleY;
    ops.push(
      `${this.formatNumber(scaleX)} 0 0 ${this.formatNumber(scaleY)} ${this.formatNumber(translateX)} ${this.formatNumber(translateY)} cm`,
    );

    // Draw the XObject
    ops.push(`/${xobjectName} Do`);

    ops.push("Q"); // Restore graphics state

    const contentOps = ops.join("\n");

    if (options.background) {
      this.prependContent(contentOps);
    } else {
      this.appendContent(contentOps);
    }
  }

  /**
   * Draw a form field widget on this page.
   *
   * Creates a widget annotation for the field and adds it to both the field's
   * /Kids array and this page's /Annots array. The widget is sized and positioned
   * according to the options.
   *
   * For radio groups, the `option` parameter is required and specifies which
   * radio option this widget represents.
   *
   * @param field - The form field to draw
   * @param options - Position, size, and option settings
   * @throws {Error} If page has no context (not attached to a document)
   * @throws {Error} If field is not a terminal field
   * @throws {Error} If field is a signature field (use form.createSignatureField)
   * @throws {Error} If field is a radio group and option is not specified
   * @throws {Error} If radio option is invalid for the field
   *
   * @example
   * ```typescript
   * // Text field
   * await page.drawField(nameField, { x: 100, y: 700, width: 200, height: 24 });
   *
   * // Checkbox
   * await page.drawField(agreeBox, { x: 100, y: 650, width: 18, height: 18 });
   *
   * // Radio group - each option needs its own widget
   * await page.drawField(paymentRadio, { x: 100, y: 550, width: 16, height: 16, option: "Credit" });
   * await page.drawField(paymentRadio, { x: 100, y: 520, width: 16, height: 16, option: "PayPal" });
   * ```
   */
  async drawField(field: FormField, options: DrawFieldOptions): Promise<void> {
    if (!this.ctx) {
      throw new Error("Cannot draw field on page without context");
    }

    // Validate that field is a terminal field
    if (!(field instanceof TerminalField)) {
      throw new Error(`Cannot draw non-terminal field "${field.name}"`);
    }

    // Signature fields use merged field+widget model and are created via createSignatureField
    if (field.type === "signature") {
      throw new Error(
        `Signature fields cannot be drawn with drawField. ` +
          `Use form.createSignatureField() which creates the widget automatically.`,
      );
    }

    // Validate radio group option requirement
    if (field.type === "radio") {
      if (!options.option) {
        throw new Error(`Radio group "${field.name}" requires option parameter in drawField`);
      }

      // Validate option exists
      const radioField = field as RadioField;
      const availableOptions = radioField.getOptions();

      // For new radio fields, options might be in /Opt array
      const fieldDict = field.acroField();
      const optArray = fieldDict.getArray("Opt");

      if (optArray) {
        const optValues: string[] = [];

        for (let i = 0; i < optArray.length; i++) {
          const item = optArray.at(i);

          if (item?.type === "string") {
            optValues.push((item as unknown as { asString(): string }).asString());
          }
        }

        if (!optValues.includes(options.option)) {
          throw new Error(
            `Invalid option "${options.option}" for radio group "${field.name}". Available: ${optValues.join(", ")}`,
          );
        }
      } else if (availableOptions.length > 0 && !availableOptions.includes(options.option)) {
        throw new Error(
          `Invalid option "${options.option}" for radio group "${field.name}". Available: ${availableOptions.join(", ")}`,
        );
      }
    }

    // Create widget annotation dictionary
    const widgetDict = this.buildWidgetDict(field, options);

    // Add widget to field's /Kids array
    const widget = field.addWidget(widgetDict);

    // Add widget ref to page's /Annots array
    if (!widget.ref) {
      throw new Error("Widget annotation must have a reference");
    }
    this.addAnnotation(widget.ref);

    // Generate appearance stream for the widget
    await this.generateWidgetAppearance(field, widget, options);
  }

  /**
   * Build a widget annotation dictionary for a field.
   */
  private buildWidgetDict(field: TerminalField, options: DrawFieldOptions): PdfDict {
    const { x, y, width, height } = options;

    const fieldRef = field.getRef();
    if (!fieldRef) {
      throw new Error("Field must be registered before adding widgets");
    }

    // Create basic widget dict
    const widgetDict = PdfDict.of({
      Type: PdfName.of("Annot"),
      Subtype: PdfName.of("Widget"),
      Rect: new PdfArray([
        PdfNumber.of(x),
        PdfNumber.of(y),
        PdfNumber.of(x + width),
        PdfNumber.of(y + height),
      ]),
      P: this.ref,
      Parent: fieldRef,
      F: PdfNumber.of(4), // Print flag
    });

    // Get field's styling metadata
    const fieldDict = field.acroField();

    // Build MK (appearance characteristics) dictionary
    const mk = new PdfDict();
    let hasMk = false;

    // Background color
    const bg = fieldDict.getArray("_BG");

    if (bg) {
      mk.set("BG", bg);
      hasMk = true;
    }

    // Border color
    const bc = fieldDict.getArray("_BC");

    if (bc) {
      mk.set("BC", bc);
      hasMk = true;
    }

    // Rotation
    const r = fieldDict.getNumber("_R");

    if (r) {
      mk.set("R", r);
      hasMk = true;
    }

    if (hasMk) {
      widgetDict.set("MK", mk);
    }

    // Border style
    const bw = fieldDict.getNumber("_BW");

    if (bw) {
      const bs = PdfDict.of({
        W: bw,
        S: PdfName.of("S"), // Solid
      });
      widgetDict.set("BS", bs);
    }

    // For radio buttons, set the appearance state
    if (field.type === "radio" && options.option) {
      const radioField = field as RadioField;
      const currentValue = radioField.getValue();

      // Set appearance state to option value if selected, otherwise "Off"
      widgetDict.set("AS", PdfName.of(currentValue === options.option ? options.option : "Off"));
    }

    // For checkboxes, set the appearance state
    if (field.type === "checkbox") {
      const checkboxField = field as CheckboxField;
      const isChecked = checkboxField.isChecked();
      const onValue = checkboxField.getOnValue();
      widgetDict.set("AS", PdfName.of(isChecked ? onValue : "Off"));
    }

    return widgetDict;
  }

  /**
   * Generate appearance stream for a widget.
   */
  private async generateWidgetAppearance(
    field: TerminalField,
    widget: import("#src/document/forms/widget-annotation").WidgetAnnotation,
    options: DrawFieldOptions,
  ): Promise<void> {
    if (!this.ctx) {
      return;
    }

    // We need access to AcroForm for appearance generation
    // Load it via catalog
    const catalogDict = this.ctx.catalog.getDict();
    const acroForm = await AcroForm.load(catalogDict, this.ctx.registry);

    if (!acroForm) {
      return;
    }

    const generator = new AppearanceGenerator(acroForm, this.ctx.registry);

    switch (field.type) {
      case "text": {
        const textField = field as TextField;
        const stream = generator.generateTextAppearance(textField, widget);
        widget.setNormalAppearance(stream);
        break;
      }

      case "checkbox": {
        const checkboxField = field as CheckboxField;
        const onValue = checkboxField.getOnValue();
        const { on, off } = generator.generateCheckboxAppearance(checkboxField, widget, onValue);
        widget.setNormalAppearance(on, onValue);
        widget.setNormalAppearance(off, "Off");
        break;
      }

      case "radio": {
        const radioField = field as RadioField;
        // options.option is validated in drawField() before reaching here
        if (!options.option) {
          throw new Error("Radio field requires an option value");
        }
        const { selected, off } = generator.generateRadioAppearance(
          radioField,
          widget,
          options.option,
        );
        widget.setNormalAppearance(selected, options.option);
        widget.setNormalAppearance(off, "Off");
        break;
      }

      case "dropdown": {
        const dropdownField = field as DropdownField;
        const stream = generator.generateDropdownAppearance(dropdownField, widget);
        widget.setNormalAppearance(stream);
        break;
      }

      case "listbox": {
        const listboxField = field as ListBoxField;
        const stream = generator.generateListBoxAppearance(listboxField, widget);
        widget.setNormalAppearance(stream);
        break;
      }
    }
  }

  /**
   * Add an annotation reference to the page's /Annots array.
   */
  private addAnnotation(annotRef: PdfRef): void {
    let annots = this.dict.getArray("Annots");

    if (!annots) {
      annots = new PdfArray([]);
      this.dict.set("Annots", annots);
    }

    annots.push(annotRef);
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // Internal Helpers
  // ─────────────────────────────────────────────────────────────────────────────

  /**
   * Add an XObject reference to the page's resources.
   * Returns the name assigned to the XObject.
   */
  private addXObjectResource(ref: PdfRef): string {
    const resources = this.getResources();
    let xobjects = resources.get("XObject");

    if (!(xobjects instanceof PdfDict)) {
      xobjects = new PdfDict();
      resources.set("XObject", xobjects);
    }

    // Generate unique name
    const name = this.generateUniqueName(xobjects, "Fm");
    xobjects.set(name, ref);

    return name;
  }

  /**
   * Add a graphics state to the page's resources.
   * Returns the name assigned to the ExtGState.
   */
  private addGraphicsState(params: { ca?: number; CA?: number }): string {
    const resources = this.getResources();
    let extGState = resources.get("ExtGState");

    if (!(extGState instanceof PdfDict)) {
      extGState = new PdfDict();
      resources.set("ExtGState", extGState);
    }

    // Create the graphics state dict
    const gsDict = new PdfDict();

    if (params.ca !== undefined) {
      gsDict.set("ca", PdfNumber.of(params.ca)); // Stroke opacity
    }

    if (params.CA !== undefined) {
      gsDict.set("CA", PdfNumber.of(params.CA)); // Fill opacity
    }

    // Generate unique name
    const name = this.generateUniqueName(extGState, "GS");
    extGState.set(name, gsDict);

    return name;
  }

  /**
   * Generate a unique name not already in the dictionary.
   */
  private generateUniqueName(dict: PdfDict, prefix: string): string {
    let counter = 0;
    let name = `${prefix}${counter}`;

    while (dict.has(name)) {
      counter++;
      name = `${prefix}${counter}`;
    }

    return name;
  }

  /**
   * Format a number for PDF content stream (avoid unnecessary decimals).
   */
  private formatNumber(n: number): string {
    // Round to 4 decimal places to avoid floating point noise
    const rounded = Math.round(n * 10000) / 10000;

    // Use integer if possible
    if (Number.isInteger(rounded)) {
      return String(rounded);
    }

    return rounded.toString();
  }

  /**
   * Create and register a content stream.
   */
  private createContentStream(content: string): PdfRef | PdfStream {
    const bytes = new TextEncoder().encode(content);
    const stream = new PdfStream([], bytes);

    // If we have a context, register the stream and return a ref
    if (this.ctx) {
      return this.ctx.register(stream);
    }

    // Otherwise return the stream directly (for new pages not yet in a document)
    return stream;
  }

  /**
   * Prepend content to the page's content stream (for background drawing).
   */
  private prependContent(content: string): void {
    const existingContents = this.dict.get("Contents");
    const newContent = this.createContentStream(`${content}\n`);

    if (!existingContents) {
      // No existing content - just set our stream
      this.dict.set("Contents", newContent);
    } else if (existingContents instanceof PdfRef) {
      // Reference to a stream - wrap in array with our content first
      this.dict.set("Contents", new PdfArray([newContent, existingContents]));
    } else if (existingContents instanceof PdfStream) {
      // Direct stream - wrap in array with our content first
      this.dict.set("Contents", new PdfArray([newContent, existingContents]));
    } else if (existingContents instanceof PdfArray) {
      // Array of streams/refs - prepend our stream
      existingContents.insert(0, newContent);
    }
  }

  /**
   * Append content to the page's content stream (for foreground drawing).
   */
  private appendContent(content: string): void {
    const existingContents = this.dict.get("Contents");
    const newContent = this.createContentStream(`\n${content}`);

    if (!existingContents) {
      // No existing content - just set our stream
      this.dict.set("Contents", newContent);
    } else if (existingContents instanceof PdfRef) {
      // Reference to a stream - wrap in array with existing first, then our content
      this.dict.set("Contents", new PdfArray([existingContents, newContent]));
    } else if (existingContents instanceof PdfStream) {
      // Direct stream - wrap in array with existing first, then our content
      this.dict.set("Contents", new PdfArray([existingContents, newContent]));
    } else if (existingContents instanceof PdfArray) {
      // Array of streams/refs - append our stream
      existingContents.push(newContent);
    }
  }

  /**
   * Get a box (MediaBox, CropBox, etc.) from the page dictionary.
   */
  private getBox(name: string): Rectangle | null {
    const box = this.dict.get(name);

    if (!(box instanceof PdfArray) || box.length < 4) {
      return null;
    }

    const x1 = box.at(0);
    const y1 = box.at(1);
    const x2 = box.at(2);
    const y2 = box.at(3);

    if (
      !(x1 instanceof PdfNumber) ||
      !(y1 instanceof PdfNumber) ||
      !(x2 instanceof PdfNumber) ||
      !(y2 instanceof PdfNumber)
    ) {
      return null;
    }

    return {
      x1: x1.value,
      y1: y1.value,
      x2: x2.value,
      y2: y2.value,
    };
  }
}
