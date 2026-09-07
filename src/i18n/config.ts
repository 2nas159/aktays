export const locales = ["en", "tr", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeMeta: Record<
  Locale,
  { label: string; native: string; short: string; dir: "ltr" | "rtl" }
> = {
  en: { label: "English", native: "English", short: "EN", dir: "ltr" },
  tr: { label: "Turkish", native: "Türkçe", short: "TR", dir: "ltr" },
  ar: { label: "Arabic", native: "العربية", short: "AR", dir: "rtl" },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
