import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { isLocale, locales, localeMeta } from "@/i18n/config";
import { getContent } from "@/content";
import { siteUrl } from "@/lib/site";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { meta } = getContent(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(locales.map((code) => [code, `/${code}`])),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      locale,
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const { dir } = localeMeta[locale];

  const preloadedFonts =
    dir === "rtl"
      ? ["ibm-plex-sans-arabic-arabic-400-normal.woff2", "amiri-arabic-400-normal.woff2"]
      : ["inter-tight-latin-400-normal.woff2", "instrument-serif-latin-400-normal.woff2"];

  return (
    <html lang={locale} dir={dir} className="grain">
      <head>
        {/*
          Take scroll restoration off the browser before it can act. On a hard
          load or reload it would otherwise drop you back at your previous
          offset — which on a page with an intro curtain and scroll-triggered
          reveals means landing mid-article, under the preloader, with
          everything above you never having animated in. This has to run inline
          in <head>: a React effect can fire after the browser has restored.
          Client-side back/forward is unaffected — the App Router restores that
          itself from history state.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: "if('scrollRestoration' in history)history.scrollRestoration='manual';",
          }}
        />
        {/* Preload only the faces this locale paints with immediately. The rest
            are matched by unicode-range and fetched only if actually needed. */}
        {preloadedFonts.map((file) => (
          <link
            key={file}
            rel="preload"
            as="font"
            type="font/woff2"
            href={`/fonts/${file}`}
            crossOrigin="anonymous"
          />
        ))}
        <meta name="theme-color" content="#f2f0ea" />
      </head>
      <body>
        <SmoothScroll />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
