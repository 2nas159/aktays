import type { Locale } from "@/i18n/config";
import type { LegalContent, LegalDoc, LegalSlug } from "./types";
import { en } from "./en";
import { tr } from "./tr";
import { ar } from "./ar";

const dictionaries: Record<Locale, LegalContent> = { en, tr, ar };

export const legalSlugs: LegalSlug[] = ["privacy", "terms", "cookies", "accessibility"];

export function getLegal(locale: Locale): LegalContent {
  return dictionaries[locale];
}

export function getLegalDoc(locale: Locale, slug: string): LegalDoc | undefined {
  return dictionaries[locale].docs.find((doc) => doc.slug === slug);
}

export type { LegalContent, LegalDoc, LegalSlug };
