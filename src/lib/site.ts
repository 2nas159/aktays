const FALLBACK = "https://aktays.com";

/**
 * Resolves the canonical origin.
 *
 * This value feeds `new URL()` in `generateMetadata`, so a malformed one throws
 * during prerendering and takes the whole build down. A misconfigured
 * environment variable should never do that — anything unusable falls back to a
 * valid origin and says so in the build log.
 *
 * Accepts a bare host ("aktays.com") as well as a full origin, because a bare
 * host is what both a human and Vercel's own VERCEL_* variables tend to supply.
 */
function resolveSiteUrl(): string {
  // Server-only: nothing in the client bundle imports this, so the unprefixed
  // Vercel variables are readable here.
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_URL,
  ];

  for (const candidate of candidates) {
    const value = candidate?.trim();
    if (!value) continue;

    const withScheme = /^https?:\/\//i.test(value) ? value : `https://${value}`;

    try {
      return new URL(withScheme).toString().replace(/\/$/, "");
    } catch {
      console.warn(
        `[site] Ignoring unusable site URL ${JSON.stringify(value)}. ` +
          `Expected an absolute URL such as "https://aktays.com".`,
      );
    }
  }

  return FALLBACK;
}

export const siteUrl = resolveSiteUrl();
