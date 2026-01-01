/**
 * PDF formatting utilities.
 */

/**
 * Format a number for PDF output.
 *
 * - Integers are written without decimal point
 * - Reals use minimal precision (no trailing zeros)
 * - PDF spec recommends up to 5 decimal places
 */
export function formatPdfNumber(value: number): string {
  if (Number.isInteger(value)) {
    return value.toString();
  }

  // Use fixed precision, then strip trailing zeros
  let str = value.toFixed(5);

  // Remove trailing zeros and unnecessary decimal point
  str = str.replace(/\.?0+$/, "");

  // Handle edge case where we stripped everything after decimal
  if (str === "" || str === "-") {
    return "0";
  }

  return str;
}
