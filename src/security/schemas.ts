/**
 * Zod schemas for PDF encryption dictionary validation.
 *
 * These schemas provide type-safe parsing of encryption parameters
 * with proper validation and TypeScript type inference.
 */

import { z } from "zod";

// ─────────────────────────────────────────────────────────────────────────────
// Core Encryption Schemas
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Valid encryption versions (V entry).
 *
 * - 1: 40-bit RC4 (PDF 1.1)
 * - 2: 40-128 bit RC4 (PDF 1.4)
 * - 3: Unpublished (rare)
 * - 4: AES-128 or RC4 with crypt filters (PDF 1.5)
 * - 5: AES-256 (PDF 2.0)
 */
export const VersionSchema = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
]);
export type Version = z.infer<typeof VersionSchema>;

/**
 * Valid encryption revisions (R entry).
 *
 * - 2: V=1, 40-bit RC4
 * - 3: V=2, 40-128 bit RC4
 * - 4: V=4, AES-128 or RC4
 * - 5: V=5, AES-256 (draft, Adobe Extension Level 3)
 * - 6: V=5, AES-256 (final, ISO 32000-2)
 */
export const RevisionSchema = z.union([
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
  z.literal(6),
]);
export type Revision = z.infer<typeof RevisionSchema>;

// ─────────────────────────────────────────────────────────────────────────────
// Crypt Filter Schemas (V4+)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Crypt filter methods (CFM entry).
 *
 * - None: Identity (no encryption)
 * - V2: RC4
 * - AESV2: AES-128
 * - AESV3: AES-256
 */
export const CryptFilterMethodSchema = z.enum(["None", "V2", "AESV2", "AESV3"]);
export type CryptFilterMethod = z.infer<typeof CryptFilterMethodSchema>;

/**
 * Authentication events (AuthEvent entry).
 *
 * - DocOpen: Authentication when document is opened
 * - EFOpen: Authentication when embedded file is accessed
 */
export const AuthEventSchema = z.enum(["DocOpen", "EFOpen"]);
export type AuthEvent = z.infer<typeof AuthEventSchema>;

/**
 * Complete crypt filter configuration.
 */
export const CryptFilterSchema = z.object({
  cfm: CryptFilterMethodSchema,
  authEvent: AuthEventSchema.optional(),
  length: z.number().optional(),
});
export type CryptFilter = z.infer<typeof CryptFilterSchema>;

// ─────────────────────────────────────────────────────────────────────────────
// Algorithm Schema
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Supported encryption algorithms.
 *
 * - RC4: Legacy stream cipher (R2-R4)
 * - AES-128: AES with 128-bit key (R4)
 * - AES-256: AES with 256-bit key (R5-R6)
 */
export const EncryptionAlgorithmSchema = z.enum(["RC4", "AES-128", "AES-256"]);
export type EncryptionAlgorithm = z.infer<typeof EncryptionAlgorithmSchema>;
