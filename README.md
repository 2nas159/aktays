# Aktays

Marketing site for **Aktays** — an independent design studio working in web design,
mobile app design and AI workflows.

Editorial, light, typography-led, with scroll-driven motion. Ships in **English,
Turkish and Arabic**, with full right-to-left support for Arabic.

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router, React 19) |
| Styling | Tailwind CSS v4 (CSS-first `@theme` tokens) |
| Motion | Framer Motion + Lenis smooth scroll |
| Language | TypeScript |

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run typecheck  # tsc --noEmit
```

`/` detects the visitor's language from `Accept-Language` (and remembers their
choice in a `NEXT_LOCALE` cookie), then redirects to `/en`, `/tr` or `/ar`.

## Editing the content

**Everything you'd want to change is in `src/content/`.** No component edits needed.

```
src/content/
  types.ts   the shape all three languages must satisfy
  en.ts      English copy
  tr.ts      Turkish copy
  ar.ts      Arabic copy
  index.ts   locale → content lookup
```

Change a headline, a service, a case study or the contact details in those files
and the site updates. Because every language is typed against `Content`, TypeScript
will tell you if one translation is missing a field — run `npm run typecheck`.

### Things you'll probably want to change first

| What | Where |
|---|---|
| Email, phone, social links | `contact` in each `src/content/*.ts` |
| Case studies | `work.projects` in each `src/content/*.ts` |
| Services and deliverables | `services.items` |
| Client quotes | `testimonials.items` |
| Studio numbers | `studio.stats` |
| Canonical domain | `NEXT_PUBLIC_SITE_URL` (optional — see below) |

> The six case studies, the client quotes and the stats are **placeholders**.
> Replace them before the site goes live.

### Adding a fourth language

1. Add the code to `locales` in `src/i18n/config.ts` and give it an entry in
   `localeMeta` (set `dir: "rtl"` for right-to-left scripts).
2. Copy `src/content/en.ts` to `src/content/<code>.ts` and translate it.
3. Register it in the `dictionaries` map in `src/content/index.ts`.

Routing, the language switcher, the sitemap and `hreflang` tags all read from that
list, so nothing else needs touching.

## Swapping in real project imagery

Case-study artwork is generated from each project's two-colour `palette`, so the
site looks complete without any assets. To use real images, replace the inner
markup of `src/components/ProjectVisual.tsx` with `next/image` — the wrapper
already handles aspect ratio, cropping and overflow:

```tsx
<Image src={project.image} alt="" fill className="object-cover" />
```

Then add an `image` field to `Project` in `src/content/types.ts`.

## Design system

Tokens live at the top of `src/app/globals.css`, in the Tailwind v4 `@theme` block:

- **Colour** — `canvas`, `paper`, `ink`, `ink-soft`, `muted`, `line`, `accent`
- **Type** — `--font-display` (Instrument Serif / Amiri), `--font-sans`
  (Inter Tight / IBM Plex Sans Arabic), `--font-mono` (JetBrains Mono)
- **Fluid scale** — `text-mega`, `text-display`, `text-h2`, `text-h3`,
  `text-lead`, `text-body`, `text-label`. Every size is a `clamp()`, so the page
  scales continuously instead of snapping at breakpoints.
- **Rhythm** — `--spacing-gutter`, `--spacing-section`

Arabic overrides the display scale and line-height in the `[dir="rtl"]` block —
Arabic sets on a taller line, so the Latin sizes would overflow.

Fonts load from Google Fonts via `<link>` in `src/app/[locale]/layout.tsx`. To
self-host, drop the files in `public/fonts` and swap in `next/font/local`.

## Motion

| Component | Behaviour |
|---|---|
| `SmoothScroll` | Lenis-driven scrolling, and routes `#anchor` clicks through it |
| `Preloader` | Counts to 100 and lifts a curtain — once per browser session |
| `RevealText` | Masked, word-by-word rise for headings |
| `Reveal` | Generic fade-and-rise on entering the viewport |
| `Magnetic` | Pulls a button toward the cursor |
| `Parallax` | Scroll-linked vertical drift |
| `Cursor` | Trailing ring that grows and can carry a label |
| `ScrollProgress` | Accent hairline across the top of the page |

`RevealText` splits on **words, never characters** — Arabic letters change shape
based on their neighbours, so a per-character split would break the joins.

Every one of these respects `prefers-reduced-motion`: Lenis and the preloader
switch off entirely, and the CSS collapses animation and transition durations.

## Accessibility & RTL notes

- `dir` is set per locale on `<html>`; layout uses logical properties
  (`ms-`/`me-`, `start`/`end`) so it mirrors without a second stylesheet.
- Latin wordmarks inside Arabic pages use `.isolate-ltr` so bidi doesn't
  reorder `Aktays.` into `.Aktays`.
- Arrow glyphs mirror via `.flip-rtl`.
- The nav inverts over dark sections using a scroll-spy on
  `[data-nav-theme="dark"]` rather than `mix-blend-difference`, which breaks
  when a parent animates on `transform`.
- Revealed text is present in the DOM at all times — the animation only affects
  its appearance, so it stays available to crawlers and screen readers.

## Deploying

Zero-config on Vercel: import the repo and deploy. Any Node host works too —
`npm run build && npm run start`.

### The canonical URL

`sitemap.xml`, `robots.txt` and the `metadataBase` for Open Graph tags all need
an absolute origin. It resolves in this order:

1. `NEXT_PUBLIC_SITE_URL`
2. `VERCEL_PROJECT_PRODUCTION_URL`, then `VERCEL_URL` — set by Vercel itself
3. `https://aktays.com`

So on Vercel you can leave it unset and previews still get correct canonicals.
A bare host (`aktays.com`) is accepted alongside a full origin, and a value that
can't be parsed is ignored with a warning in the build log instead of failing
the build — a malformed environment variable should not be able to take the
site down.
