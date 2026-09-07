"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeMeta, type Locale } from "@/i18n/config";

/**
 * Swaps the leading locale segment while keeping the rest of the path.
 * States are drawn with opacity rather than colour so the control stays legible
 * inside the difference-blended header on both light and dark sections.
 */
export default function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname() || `/${current}`;

  const hrefFor = (locale: Locale) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  };

  return (
    <div className="flex items-center gap-1.5">
      {locales.map((locale, index) => (
        <span key={locale} className="flex items-center gap-1.5">
          {index > 0 ? <span aria-hidden className="select-none opacity-30">/</span> : null}
          <Link
            href={hrefFor(locale)}
            hrefLang={locale}
            aria-label={localeMeta[locale].label}
            aria-current={locale === current ? "true" : undefined}
            className={`label transition-opacity duration-300 hover:opacity-100 ${
              locale === current ? "opacity-100" : "opacity-45"
            }`}
            onClick={() => {
              document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=31536000;samesite=lax`;
            }}
          >
            {localeMeta[locale].short}
          </Link>
        </span>
      ))}
    </div>
  );
}
