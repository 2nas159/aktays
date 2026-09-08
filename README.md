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

## Pages

| Route | What it is |
|---|---|
| `/[locale]` | Homepage |
| `/[locale]/work` | Project index |
| `/[locale]/work/[slug]` | Case study — six of them, each prerendered per language |
| `/[locale]/services` | The four disciplines, engagement models, FAQ |
| `/[locale]/studio` | Story, principles, project rhythm, disciplines |
| `/[locale]/contact` | Enquiry form and direct details |
| `/[locale]/legal` | Index of the four legal documents |
| `/[locale]/legal/[slug]` | `privacy`, `terms`, `cookies`, `accessibility` |
| `/api/contact` | Form handler (POST only) |

Every page is prerendered as static HTML in all three languages — 48 URLs in the
sitemap, plus the API route.

## Editing the content

**Everything you'd want to change is in `src/content/`.** No component edits needed.

```
src/content/
  types.ts      shape of the homepage content
  en|tr|ar.ts   homepage copy
  index.ts      locale → content lookup

  pages/        work index, case studies, services, studio, contact
    types.ts
    en|tr|ar.ts
    index.ts

  legal/        privacy, terms, cookies, accessibility
    types.ts
    en|tr|ar.ts
    index.ts
```

Company registration details are **not** in the language files — they are
identical in every language, so they live once in `src/lib/company.ts`.

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
| Case study long-form copy | `work.studies` in each `src/content/pages/*.ts` |
| Services FAQ and pricing | `services.faq` / `services.engagements` |
| Legal document text | `src/content/legal/*.ts` |
| Company registration details | `src/lib/company.ts` |

> The six case studies, the client quotes and the stats are **placeholders**.
> Replace them before the site goes live.

## The contact form

`POST /api/contact` validates the submission server-side, rate-limits by IP, and
sends the enquiry through [Resend](https://resend.com).

Set three environment variables to turn delivery on (see `.env.example`):

| Variable | Notes |
|---|---|
| `RESEND_API_KEY` | From the Resend dashboard. |
| `CONTACT_FROM_EMAIL` | Must be on a domain verified in Resend, e.g. `Aktays <hello@aktays.com>`. |
| `CONTACT_TO_EMAIL` | Where enquiries land. Defaults to the address in `company.ts`. |

**Without them the form still works** — it returns a clear "not connected"
message pointing the visitor at your email address, and logs the submission to
the server so no enquiry is silently lost. That means the site is safe to deploy
before you have a Resend account.

What the endpoint does:

- **Validates on the server**, not just in the browser — required fields, a
  sane email shape, a minimum message length. Field errors come back keyed by
  field so the form can mark the right inputs.
- **Rate-limits** to 5 submissions per IP per 10 minutes. The counter is held in
  module memory, so on serverless it is per-instance — enough to stop a naive
  flood, not a determined attacker. Move it to Vercel KV or Upstash if the form
  ever gets targeted.
- **Traps bots** with a hidden `website` field. If it is filled the endpoint
  returns success and sends nothing, so the bot learns nothing.
- **Escapes all input** before it goes into the HTML email.
- **Sets `reply_to`** to the sender, so hitting reply answers the person.
- **Caps field lengths** before processing, so a huge payload cannot be used to
  inflate an email.

## Legal pages

Four documents, in all three languages, written for **Turkish (KVKK) and EU
(GDPR)** law, and reflecting what this site actually does rather than boilerplate
— one functional cookie, no analytics, and no third-party requests at all,
since the typefaces are self-hosted.

⚠ **Two things before these go live:**

1. **Fill in `src/lib/company.ts`.** The registered name, address, trade registry
   number, tax office and tax number are bracketed placeholders and render as
   such on the page.
2. **Have a lawyer read them.** These are carefully written and specific to this
   site, but they are not legal advice, and the KVKK registration obligations
   (VERBİS) depend on facts about your business that are not visible from here.

If you add analytics later, the Cookie Policy stops being true — it currently
states plainly that the site runs none.

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

## Typefaces

Fonts are **self-hosted** — served from this origin, not a font CDN. Loading a
page makes no third-party request at all, so no visitor IP is disclosed to
Google or anyone else. This is a GDPR/KVKK consideration as much as a
performance one, and the legal pages state it as fact.

```
public/fonts/          14 woff2 files, 511 KB total
src/app/fonts.css      generated @font-face rules
```

Faces are split by `unicode-range`, so a visitor downloads only the scripts they
actually read:

| Visitor | Downloads |
|---|---|
| English / Turkish | Instrument Serif + Inter Tight latin — ~84 KB |
| Arabic | IBM Plex Sans Arabic + Amiri arabic — ~150 KB |

The Arabic families ship the **arabic subset only**. Latin characters inside
Arabic pages fall through the font stack to Inter Tight and Instrument Serif,
which are already loaded — so nothing is downloaded twice.

`src/app/[locale]/layout.tsx` preloads just the two faces the current locale
paints with first; everything else is fetched lazily if the range matches.

Only weight 400 is used by the design. Weight 600 is included so a real
`<strong>` has a genuine bold face — `font-synthesis-weight` is disabled, so a
faux bold would otherwise render identically to regular.

**To change a typeface**, install the `@fontsource/<family>` package, copy the
woff2 files into `public/fonts`, and add matching `@font-face` blocks to
`src/app/fonts.css` (copy the `unicode-range` values from the package's own CSS
rather than typing them by hand). Then update the family names in the `@theme`
block of `globals.css`.

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
