import type { Locale } from "@/i18n/config";
import type { Content } from "./types";
import { en } from "./en";
import { tr } from "./tr";
import { ar } from "./ar";

const dictionaries: Record<Locale, Content> = { en, tr, ar };

export function getContent(locale: Locale): Content {
  return dictionaries[locale];
}

export type { Content };
