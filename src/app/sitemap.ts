import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { getContent } from "@/content";
import { legalSlugs } from "@/content/legal";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Paths are identical across locales, so build them once from any locale.
  const paths = [
    "",
    "/work",
    "/services",
    "/studio",
    "/contact",
    "/legal",
    ...getContent("en").work.projects.map((project) => `/work/${project.slug}`),
    ...legalSlugs.map((slug) => `/legal/${slug}`),
  ];

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteUrl}/${locale}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : path.startsWith("/legal") ? 0.3 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((code) => [code, `${siteUrl}/${code}${path}`]),
        ),
      },
    })),
  );
}
