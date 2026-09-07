/**
 * Legal and registration details, referenced by the legal pages and the
 * contact page. Kept out of the per-language content files because these
 * values are identical in every language — edit them once here.
 *
 * ⚠ The bracketed values are placeholders. Replace them with the real
 * registration details before the legal pages go live.
 */
export const company = {
  tradingName: "Aktays",
  legalName: "[Registered company name]",
  addressLines: ["[Street address]", "[District], Istanbul", "Türkiye"],
  registrationNumber: "[Trade registry number]",
  taxOffice: "[Tax office]",
  taxNumber: "[Tax number]",
  email: "hello@aktays.com",
  privacyEmail: "privacy@aktays.com",
  phone: "+90 000 000 00 00",
  /** ISO date shown as the "last updated" stamp on every legal document. */
  legalLastUpdated: "2026-09-07",
} as const;
