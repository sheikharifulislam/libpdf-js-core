import { CHAR_BACKSLASH, CHAR_PARENTHESIS_CLOSE, CHAR_PARENTHESIS_OPEN } from "#src/helpers/chars";
import type { ByteWriter } from "#src/io/byte-writer";
import type { PdfPrimitive } from "./pdf-primitive";

/**
 * Escape a PDF literal string for serialization.
 *
 * Handles:
 * - Backslash escaping for \, (, )
 * - Other bytes pass through unchanged
 */
function escapeLiteralString(bytes: Uint8Array): Uint8Array {
  // Pre-scan to count bytes needing escape
  let escapeCount = 0;

  for (const byte of bytes) {
    if (
      byte === CHAR_BACKSLASH ||
      byte === CHAR_PARENTHESIS_OPEN ||
      byte === CHAR_PARENTHESIS_CLOSE
    ) {
      escapeCount++;
    }
  }

  if (escapeCount === 0) {
    return bytes;
  }

  const result = new Uint8Array(bytes.length + escapeCount);
  let j = 0;

  for (const byte of bytes) {
    if (byte === CHAR_BACKSLASH) {
      result[j++] = CHAR_BACKSLASH;
      result[j++] = CHAR_BACKSLASH;
    } else if (byte === CHAR_PARENTHESIS_OPEN) {
      result[j++] = CHAR_BACKSLASH;
      result[j++] = CHAR_PARENTHESIS_OPEN;
    } else if (byte === CHAR_PARENTHESIS_CLOSE) {
      result[j++] = CHAR_BACKSLASH;
      result[j++] = CHAR_PARENTHESIS_CLOSE;
    } else {
      result[j++] = byte;
    }
  }

  return result;
}

/**
 * Convert bytes to hex string.
 */
function bytesToHex(bytes: Uint8Array): string {
  let hex = "";

  for (const byte of bytes) {
    hex += byte.toString(16).toUpperCase().padStart(2, "0");
  }

  return hex;
}

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
    // Remove whitespace
    const clean = hex.replace(/\s/g, "");

    // Pad odd-length with trailing 0
    const padded = clean.length % 2 === 1 ? `${clean}0` : clean;

    const bytes = new Uint8Array(padded.length / 2);
    for (let i = 0; i < bytes.length; i++) {
      bytes[i] = parseInt(padded.slice(i * 2, i * 2 + 2), 16);
    }

    return new PdfString(bytes, "hex");
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
