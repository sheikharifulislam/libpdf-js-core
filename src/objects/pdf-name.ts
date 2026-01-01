import { CHAR_HASH, DELIMITERS, WHITESPACE } from "#src/helpers/chars";
import type { ByteWriter } from "#src/io/byte-writer";
import type { PdfPrimitive } from "./pdf-primitive";

// Characters that need hex escaping in names (PDF 1.7 spec 7.3.5)
// These are: whitespace, delimiters (), <>, [], {}, /, %, #
// Plus anything outside printable ASCII (33-126)
const NAME_NEEDS_ESCAPE = new Set([...WHITESPACE, ...DELIMITERS, CHAR_HASH]);

/**
 * Escape a PDF name for serialization.
 *
 * Uses #XX hex escaping for:
 * - Bytes outside printable ASCII (33-126)
 * - Delimiter characters
 * - The # character itself
 */
function escapeName(name: string): string {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(name);

  let result = "";

  for (const byte of bytes) {
    if (byte < 33 || byte > 126 || NAME_NEEDS_ESCAPE.has(byte)) {
      // Use hex escape
      result += `#${byte.toString(16).toUpperCase().padStart(2, "0")}`;
    } else {
      result += String.fromCharCode(byte);
    }
  }

  return result;
}

/**
 * PDF name object (interned).
 *
 * In PDF: `/Type`, `/Page`, `/Length`
 *
 * Names are interned — `PdfName.of("Type") === PdfName.of("Type")`.
 * Use `.of()` to get or create instances.
 */
export class PdfName implements PdfPrimitive {
  get type(): "name" {
    return "name";
  }

  private static cache = new Map<string, PdfName>();

  private constructor(readonly value: string) {}

  /**
   * Get or create an interned PdfName for the given string.
   * The leading `/` should NOT be included.
   */
  static of(name: string): PdfName {
    let cached = PdfName.cache.get(name);

    if (!cached) {
      cached = new PdfName(name);

      PdfName.cache.set(name, cached);
    }

    return cached;
  }

  toBytes(writer: ByteWriter): void {
    writer.writeAscii(`/${escapeName(this.value)}`);
  }

  // Common PDF names (pre-cached)
  static readonly Type = PdfName.of("Type");
  static readonly Page = PdfName.of("Page");
  static readonly Pages = PdfName.of("Pages");
  static readonly Catalog = PdfName.of("Catalog");
  static readonly Count = PdfName.of("Count");
  static readonly Kids = PdfName.of("Kids");
  static readonly Parent = PdfName.of("Parent");
  static readonly MediaBox = PdfName.of("MediaBox");
  static readonly Resources = PdfName.of("Resources");
  static readonly Contents = PdfName.of("Contents");
  static readonly Length = PdfName.of("Length");
  static readonly Filter = PdfName.of("Filter");
  static readonly FlateDecode = PdfName.of("FlateDecode");
}
