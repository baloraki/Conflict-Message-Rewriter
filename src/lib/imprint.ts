const FALLBACK = "[NOT SET]";

export interface ImprintContactData {
  name: string;
  street: string;
  city: string;
  country: string;
  /** Base64-encoded email address for use with ObfuscatedEmail. */
  emailEncoded: string;
}

/**
 * Returns imprint contact data sourced from environment variables.
 *
 * Required env vars:
 *   IMPRINT_NAME    – full name of the responsible person / operator
 *   IMPRINT_STREET  – street and house number
 *   IMPRINT_CITY    – postal code and city
 *   IMPRINT_COUNTRY – country
 *   IMPRINT_EMAIL   – plain e-mail address (encoded to base64 at runtime)
 */
export function getImprintContactData(): ImprintContactData {
  const email = process.env.IMPRINT_EMAIL || FALLBACK;
  const emailEncoded = Buffer.from(email).toString("base64");

  return {
    name: process.env.IMPRINT_NAME ?? FALLBACK,
    street: process.env.IMPRINT_STREET ?? FALLBACK,
    city: process.env.IMPRINT_CITY ?? FALLBACK,
    country: process.env.IMPRINT_COUNTRY ?? FALLBACK,
    emailEncoded,
  };
}
