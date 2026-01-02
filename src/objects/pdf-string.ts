import { CHAR_PARENTHESIS_CLOSE, CHAR_PARENTHESIS_OPEN } from "#src/helpers/chars";
import { bytesToHex, escapeLiteralString, hexToBytes } from "#src/helpers/strings";
import type { ByteWriter } from "#src/io/byte-writer";
import type { PdfPrimitive } from "./pdf-primitive";

/**
 * PDF string object.
 *
 * In PDF: `(Hello World)` (literal) or `<48656C6C6F>` (hex)
 *
 * Stores raw bytes — decode with `.asString()` when needed.
 */
export class PdfString implements PdfPrimitive {
  get type(): "string" {
    return "string";
  }

  constructor(
    readonly bytes: Uint8Array,
    readonly format: "literal" | "hex" = "literal",
  ) {}

  /**
   * Decode bytes as a string.
   * Uses UTF-8 by default. For proper PDF text decoding,
   * higher-level code should check for BOM and use appropriate encoding.
   */
  asString(): string {
    return new TextDecoder("utf-8").decode(this.bytes);
  }

  /**
   * Create a PdfString from a JavaScript string (encodes as UTF-8).
   */
  static fromString(str: string): PdfString {
    const bytes = new TextEncoder().encode(str);
    return new PdfString(bytes, "literal");
  }

  /**
   * Create a PdfString from a hex string (e.g., "48656C6C6F").
   * Whitespace is ignored. Odd-length strings are padded with 0.
   */
  static fromHex(hex: string): PdfString {
    return new PdfString(hexToBytes(hex), "hex");
  }

  toBytes(writer: ByteWriter): void {
    if (this.format === "hex") {
      writer.writeAscii(`<${bytesToHex(this.bytes)}>`);
    } else {
      // Literal format
      writer.writeByte(CHAR_PARENTHESIS_OPEN);
      writer.writeBytes(escapeLiteralString(this.bytes));
      writer.writeByte(CHAR_PARENTHESIS_CLOSE);
    }
  }
}
