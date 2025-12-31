import type { Scanner } from "#src/io/scanner";
import type {
  DelimiterToken,
  KeywordToken,
  NameToken,
  NumberToken,
  StringToken,
  Token,
} from "./token";

/**
 * PDF whitespace characters (PDF spec 7.2.2)
 */
const WHITESPACE = new Set([
  0x00, // NUL
  0x09, // TAB
  0x0a, // LF
  0x0d, // CR
  0x0c, // FF
  0x20, // SPACE
]);

/**
 * PDF delimiter characters (PDF spec 7.2.2)
 */
const DELIMITERS = new Set([
  0x28, // (
  0x29, // )
  0x3c, // <
  0x3e, // >
  0x5b, // [
  0x5d, // ]
  0x7b, // {
  0x7d, // }
  0x2f, // /
  0x25, // %
]);

/**
 * On-demand tokenizer for PDF syntax.
 *
 * Reads tokens one at a time from a Scanner, handling whitespace,
 * comments, and lenient parsing of malformed input.
 */
export class TokenReader {
  private cachedToken: Token | null = null;

  constructor(private scanner: Scanner) {}

  get position(): number {
    return this.scanner.position;
  }

  /**
   * Peek at the next token without consuming it.
   */
  peekToken(): Token {
    if (this.cachedToken === null) {
      this.cachedToken = this.readToken();
    }

    return this.cachedToken;
  }

  /**
   * Read and consume the next token.
   */
  nextToken(): Token {
    if (this.cachedToken !== null) {
      const token = this.cachedToken;

      this.cachedToken = null;

      return token;
    }

    return this.readToken();
  }

  /**
   * Skip whitespace and comments.
   */
  skipWhitespaceAndComments(): void {
    while (true) {
      const byte = this.scanner.peek();

      if (byte === -1) {
        return;
      }

      if (WHITESPACE.has(byte)) {
        this.scanner.advance();
        continue;
      }

      // Comment: % to end of line
      if (byte === 0x25) {
        this.scanner.advance();
        this.skipToEndOfLine();
        continue;
      }

      return;
    }
  }

  /**
   * Peek at the next raw byte (after skipping whitespace/comments).
   */
  peekByte(): number {
    this.skipWhitespaceAndComments();

    return this.scanner.peek();
  }

  private skipToEndOfLine(): void {
    while (true) {
      const byte = this.scanner.peek();

      if (byte === -1 || byte === 0x0a || byte === 0x0d) {
        return;
      }

      this.scanner.advance();
    }
  }

  private readToken(): Token {
    this.skipWhitespaceAndComments();

    const position = this.scanner.position;
    const byte = this.scanner.peek();

    if (byte === -1) {
      return { type: "eof", position };
    }

    // Name: /...
    if (byte === 0x2f) {
      return this.readName(position);
    }

    // Literal string: (...)
    if (byte === 0x28) {
      return this.readLiteralString(position);
    }

    // Hex string or dict delimiter: < or <<
    if (byte === 0x3c) {
      return this.readAngleBracket(position);
    }

    // Dict end or unexpected >
    if (byte === 0x3e) {
      return this.readClosingAngle(position);
    }

    // Array delimiters
    if (byte === 0x5b) {
      this.scanner.advance();

      return { type: "delimiter", value: "[", position };
    }

    if (byte === 0x5d) {
      this.scanner.advance();

      return { type: "delimiter", value: "]", position };
    }

    // Number: digit, +, -, or .
    if (this.isNumberStart(byte)) {
      return this.readNumber(position);
    }

    // Keyword or unknown
    return this.readKeyword(position);
  }

  private isNumberStart(byte: number): boolean {
    return (
      (byte >= 0x30 && byte <= 0x39) || // 0-9
      byte === 0x2b || // +
      byte === 0x2d || // -
      byte === 0x2e // .
    );
  }

  private isDigit(byte: number): boolean {
    return byte >= 0x30 && byte <= 0x39;
  }

  private isRegularChar(byte: number): boolean {
    return byte !== -1 && !WHITESPACE.has(byte) && !DELIMITERS.has(byte);
  }

  private readNumber(position: number): NumberToken | KeywordToken {
    const start = this.scanner.position;
    let hasDecimal = false;
    let hasDigit = false;
    let isNegative = false;

    // Handle leading sign
    const firstByte = this.scanner.peek();

    if (firstByte === 0x2b || firstByte === 0x2d) {
      isNegative = firstByte === 0x2d;
      this.scanner.advance();

      // Handle double negative (lenient) - if multiple negatives, ignore all
      // This matches PDFBox behavior: --5 → 5, ---5 → 5
      if (this.scanner.peek() === 0x2d) {
        isNegative = false;

        while (this.scanner.peek() === 0x2d) {
          this.scanner.advance();
        }
      }
    }

    // Track where digits start (after signs)
    const digitsStart = this.scanner.position;

    // Handle leading decimal
    if (this.scanner.peek() === 0x2e) {
      hasDecimal = true;
      this.scanner.advance();
    }

    // Read digits
    while (true) {
      const byte = this.scanner.peek();

      if (this.isDigit(byte)) {
        hasDigit = true;
        this.scanner.advance();
        continue;
      }

      if (byte === 0x2e && !hasDecimal) {
        hasDecimal = true;
        this.scanner.advance();
        continue;
      }

      break;
    }

    // Read any trailing digits after decimal
    if (hasDecimal) {
      while (this.isDigit(this.scanner.peek())) {
        hasDigit = true;
        this.scanner.advance();
      }
    }

    const end = this.scanner.position;

    // If we didn't get any digits, this might be a keyword starting with +/-/.
    if (!hasDigit) {
      // Read rest as keyword
      while (this.isRegularChar(this.scanner.peek())) {
        this.scanner.advance();
      }

      const fullText = this.extractText(start, this.scanner.position);

      return { type: "keyword", value: fullText, position };
    }

    // Extract just the numeric part (without multiple signs)
    const numericText = this.extractText(digitsStart, end);
    let value = parseFloat(numericText);

    if (isNegative) {
      value = -value;
    }

    const isInteger = !hasDecimal && Number.isInteger(value);

    return { type: "number", value, isInteger, position };
  }

  private readName(position: number): NameToken {
    // Skip the leading /
    this.scanner.advance();

    const bytes: number[] = [];

    while (true) {
      const byte = this.scanner.peek();

      if (!this.isRegularChar(byte)) {
        break;
      }

      this.scanner.advance();

      // Handle # hex escape
      if (byte === 0x23) {
        const hex1 = this.scanner.peek();

        if (this.isHexDigit(hex1)) {
          this.scanner.advance();

          const hex2 = this.scanner.peek();

          if (this.isHexDigit(hex2)) {
            this.scanner.advance();

            const value = (this.hexValue(hex1) << 4) | this.hexValue(hex2);

            bytes.push(value);
            continue;
          }

          // Lone hex digit after # - treat literally
          bytes.push(0x23);
          bytes.push(hex1);
          continue;
        }

        // Lone # - treat literally
        bytes.push(0x23);
        continue;
      }

      bytes.push(byte);
    }

    const value = new TextDecoder().decode(new Uint8Array(bytes));

    return { type: "name", value, position };
  }

  private readLiteralString(position: number): StringToken {
    // Skip opening (
    this.scanner.advance();

    const bytes: number[] = [];
    let parenDepth = 1;

    while (parenDepth > 0) {
      const byte = this.scanner.peek();

      if (byte === -1) {
        // Unterminated string - return what we have
        break;
      }

      this.scanner.advance();

      if (byte === 0x28) {
        // Nested (
        parenDepth++;
        bytes.push(byte);
        continue;
      }

      if (byte === 0x29) {
        // Closing )
        parenDepth--;

        if (parenDepth > 0) {
          bytes.push(byte);
        }

        continue;
      }

      if (byte === 0x5c) {
        // Escape sequence
        const escaped = this.readEscapeSequence();

        if (escaped !== null) {
          if (Array.isArray(escaped)) {
            bytes.push(...escaped);
          } else {
            bytes.push(escaped);
          }
        }

        continue;
      }

      // Normalize line endings to LF
      if (byte === 0x0d) {
        // Check for CRLF
        if (this.scanner.peek() === 0x0a) {
          this.scanner.advance();
        }

        bytes.push(0x0a);
        continue;
      }

      bytes.push(byte);
    }

    return {
      type: "string",
      value: new Uint8Array(bytes),
      format: "literal",
      position,
    };
  }

  private readEscapeSequence(): number | number[] | null {
    const byte = this.scanner.peek();

    if (byte === -1) {
      return null;
    }

    this.scanner.advance();

    switch (byte) {
      case 0x6e:
        return 0x0a; // \n -> LF
      case 0x72:
        return 0x0d; // \r -> CR
      case 0x74:
        return 0x09; // \t -> TAB
      case 0x62:
        return 0x08; // \b -> BS
      case 0x66:
        return 0x0c; // \f -> FF
      case 0x28:
        return 0x28; // \( -> (
      case 0x29:
        return 0x29; // \) -> )
      case 0x5c:
        return 0x5c; // \\ -> \
      case 0x0d:
        // Line continuation: \ at end of line
        if (this.scanner.peek() === 0x0a) {
          this.scanner.advance();
        }

        return null;
      case 0x0a:
        // Line continuation
        return null;
      default:
        // Check for octal
        if (byte >= 0x30 && byte <= 0x37) {
          return this.readOctalEscape(byte);
        }

        // Unknown escape - return literal character
        return byte;
    }
  }

  private readOctalEscape(firstDigit: number): number {
    let value = firstDigit - 0x30;
    let digits = 1;

    while (digits < 3) {
      const byte = this.scanner.peek();

      if (byte < 0x30 || byte > 0x37) {
        break;
      }

      this.scanner.advance();

      value = (value << 3) | (byte - 0x30);
      digits++;
    }

    return value & 0xff;
  }

  private readAngleBracket(position: number): StringToken | DelimiterToken {
    this.scanner.advance(); // Skip first <

    // Check for <<
    if (this.scanner.peek() === 0x3c) {
      this.scanner.advance();

      return { type: "delimiter", value: "<<", position };
    }

    // Hex string
    return this.readHexString(position);
  }

  private readHexString(position: number): StringToken {
    const bytes: number[] = [];
    let pendingNibble: number | null = null;

    while (true) {
      const byte = this.scanner.peek();

      if (byte === -1 || byte === 0x3e) {
        // EOF or >
        if (byte === 0x3e) {
          this.scanner.advance();
        }

        break;
      }

      this.scanner.advance();

      // Skip whitespace inside hex string
      if (WHITESPACE.has(byte)) {
        continue;
      }

      if (this.isHexDigit(byte)) {
        const nibble = this.hexValue(byte);

        if (pendingNibble === null) {
          pendingNibble = nibble;
        } else {
          bytes.push((pendingNibble << 4) | nibble);
          pendingNibble = null;
        }
      }

      // Invalid character - skip with warning (lenient)
      // TODO: Add warning callback
    }

    // Odd number of hex digits - pad with 0
    if (pendingNibble !== null) {
      bytes.push(pendingNibble << 4);
    }

    return {
      type: "string",
      value: new Uint8Array(bytes),
      format: "hex",
      position,
    };
  }

  private readClosingAngle(position: number): DelimiterToken {
    this.scanner.advance(); // Skip first >

    // Check for >>
    if (this.scanner.peek() === 0x3e) {
      this.scanner.advance();

      return { type: "delimiter", value: ">>", position };
    }

    // Lone > - shouldn't happen in valid PDF, but handle it
    // Return as >> anyway since > alone isn't valid
    return { type: "delimiter", value: ">>", position };
  }

  private readKeyword(position: number): KeywordToken {
    const start = this.scanner.position;

    while (this.isRegularChar(this.scanner.peek())) {
      this.scanner.advance();
    }

    const value = this.extractText(start, this.scanner.position);

    return { type: "keyword", value, position };
  }

  private isHexDigit(byte: number): boolean {
    return (
      (byte >= 0x30 && byte <= 0x39) || // 0-9
      (byte >= 0x41 && byte <= 0x46) || // A-F
      (byte >= 0x61 && byte <= 0x66) // a-f
    );
  }

  private hexValue(byte: number): number {
    if (byte >= 0x30 && byte <= 0x39) {
      return byte - 0x30;
    }

    if (byte >= 0x41 && byte <= 0x46) {
      return byte - 0x41 + 10;
    }

    return byte - 0x61 + 10;
  }

  private extractText(start: number, end: number): string {
    const bytes = this.scanner.bytes.subarray(start, end);

    return new TextDecoder().decode(bytes);
  }
}
