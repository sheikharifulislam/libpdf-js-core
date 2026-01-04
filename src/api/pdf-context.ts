/**
 * PDFContext - Central context object for PDF document operations.
 *
 * Provides shared access to the registry, catalog, page tree, and other
 * document infrastructure. Passed to subsystems (forms, attachments, fonts)
 * instead of multiple separate arguments.
 *
 * @internal This is an internal class, not part of the public API.
 */

import type { ObjectRegistry } from "#src/document/object-registry";
import type { PdfObject } from "#src/objects/pdf-object";
import type { PdfRef } from "#src/objects/pdf-ref";
import type { ParsedDocument } from "#src/parser/document-parser";
import type { PDFCatalog } from "./pdf-catalog";
import type { PDFPageTree } from "./pdf-page-tree";

/**
 * Central context for PDF document operations.
 *
 * Encapsulates all the shared state and services that subsystems need:
 * - Object registry for tracking and resolving objects
 * - Catalog for document-level structures
 * - Page tree for page access
 * - Parsed document for raw access when needed
 */
export class PDFContext {
  /** Object registry for tracking refs and objects */
  readonly registry: ObjectRegistry;

  /** Document catalog wrapper */
  readonly catalog: PDFCatalog;

  /** Page tree for page access and manipulation */
  readonly pages: PDFPageTree;

  /** The parsed document (for version, trailer, etc.) */
  readonly parsed: ParsedDocument;

  constructor(
    registry: ObjectRegistry,
    catalog: PDFCatalog,
    pages: PDFPageTree,
    parsed: ParsedDocument,
  ) {
    this.registry = registry;
    this.catalog = catalog;
    this.pages = pages;
    this.parsed = parsed;
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // Object Operations (delegated to registry)
  // ─────────────────────────────────────────────────────────────────────────────

  /**
   * Register a new object, assigning it a reference.
   */
  register(obj: PdfObject): PdfRef {
    return this.registry.register(obj);
  }

  /**
   * Resolve an object by reference (async, fetches if needed).
   */
  resolve(ref: PdfRef): Promise<PdfObject | null> {
    return this.registry.resolve(ref);
  }

  /**
   * Get an object by reference (sync, only if already loaded).
   */
  getObject(ref: PdfRef): PdfObject | null {
    return this.registry.getObject(ref);
  }

  /**
   * Get the reference for an object.
   */
  getRef(obj: PdfObject): PdfRef | null {
    return this.registry.getRef(obj);
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // Warnings
  // ─────────────────────────────────────────────────────────────────────────────

  /**
   * Add a warning message.
   */
  addWarning(message: string): void {
    this.registry.addWarning(message);
  }

  /**
   * Get all warnings.
   */
  get warnings(): string[] {
    return this.registry.warnings;
  }
}
