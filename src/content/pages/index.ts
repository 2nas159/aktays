import type { Locale } from "@/i18n/config";
import type { PagesContent } from "./types";
import { en } from "./en";
import { tr } from "./tr";
import { ar } from "./ar";

const dictionaries: Record<Locale, PagesContent> = { en, tr, ar };

export function getPages(locale: Locale): PagesContent {
  return dictionaries[locale];
}

export type { PagesContent };
