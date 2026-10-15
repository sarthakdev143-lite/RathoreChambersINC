# Rathore Chambers INC — Website

Bilingual (English + Hindi) marketing website for **Rathore Chambers INC** — purchase
and sale of agricultural land (कृषि भूमि) and commercial shops.

Built with [Astro](https://astro.build) as a **fully static site**: no server, no
database, no JavaScript framework. Enquiries are handled by a `mailto:` link and
a form that opens the visitor's own mail app, so the site can be hosted anywhere
for free and there is nothing to maintain or patch.

| | |
|---|---|
| **Pages** | 6 per language (Home, Services, Agricultural land, Commercial shops, About, Contact) + 404 |
| **Languages** | English at `/`, Hindi at `/hi/` |
| **Output** | Static HTML in `dist/` |
| **Enquiries** | `mailto:` links + a form that pre-fills the visitor's email app — no backend |

---

## 1. Before you go live — the checklist

Everything that needs your input is marked with a `TODO` comment in the source.
Work through these four steps in order.

### Step 1 — Fill in your business details

Open **`src/config/site.ts`**. This one file is the single source of truth: every
email address, map link and social profile on the website is read from it,
including the hidden structured data that Google uses to build your search
listing. There is deliberately **no phone or WhatsApp field** — the site
publishes a single email address and nothing else.

| Setting | What to put there |
|---|---|
| `SITE.url` | Your real domain, **with no trailing slash** — e.g. `https://www.rathorechambers.com`. Used for canonical URLs and the sitemap, so getting it wrong will hurt search rankings. |
| `SITE.foundingYear` | The year the business started, e.g. `'2012'`. Leave empty to omit. |
| `CONTACT.email` | The only contact address published on the site — every "Email us" button, the enquiry form, the footer and the contact page read it. Currently `hr@rathorechambers.com`. |
| `CONTACT.address` | Street, city (`locality`), state (`region`) and PIN code. Keep this **identical to your Google Business Profile** — mismatched addresses weaken local search results. |
| `CONTACT.mapUrl` | The share link from Google Maps. |
| `CONTACT.hours` | Opening days and times. Already set to Mon–Sat, 09:30–19:00. |
| `SOCIAL` | Facebook / Instagram / LinkedIn / YouTube / X profile URLs. |
| `SERVICE_AREAS` | The districts or cities you actually work in, e.g. `['Jaipur', 'Dausa', 'Tonk']`. Important for local SEO. |
| `STATS` | Headline figures for the home page — see the warning below. |

**Anything left as an empty string hides itself automatically.** The address block,
map button, social icons and coverage section simply do not render until you fill
them in, and they are omitted from the structured data too. Nothing will look
broken or half-finished.

> **`STATS` is deliberately left empty.** Publishing invented numbers ("500+ deals
> closed") is a real legal and reputational risk. Fill in only figures you can
> stand behind if challenged. While the array is empty the whole strip hides
> itself, which is a perfectly good outcome.

### Step 2 — Read the copy

Open **`src/i18n/ui.ts`**. All the website's text, in both languages, lives here —
nothing is hard-coded into the pages.

The writing is deliberately careful and non-promissory, but it was written without
knowing exactly how you work. **Please read it before launch**, particularly:

- the **FAQ answers** about fees, timelines and who can buy agricultural land;
- the **process steps** on each service page — change them if your actual workflow differs;
- the **About** page, which describes your approach.

The English (`en`) block is the source of truth for the structure. The Hindi (`hi`)
block is type-checked against it, so if you add a key to `en` and forget the Hindi
translation, `npm run check` will tell you exactly which key is missing.

### Step 3 — Regenerate the brand assets (only if you change the branding)

The logo, favicons and social-preview image in `public/` are all generated from a
single definition block. If you change the colours, the tagline or the wording on
the social preview card, edit the `BRAND` object at the top of
**`scripts/generate-brand-assets.mjs`** and then run:

```sh
npm run assets:brand
```

That rewrites all five files: `logo.svg`, `favicon.svg`, `favicon.ico`,
`apple-touch-icon.png` and `og.png` (the 1200×630 image people see when your link
is shared on WhatsApp, Facebook or LinkedIn). **This step needs an internet
connection** — it downloads the fonts required to turn the preview card's text
into vector shapes.

If you are not changing the branding, skip this. The generated files are already
in `public/`.

### Step 4 — Build and check

```sh
npm run build
```

This type-checks the whole project and then writes the finished website to
`dist/`. It must report **0 errors** before you deploy.

---

## 2. Running it on your machine

You need [Node.js](https://nodejs.org) **22.12 or newer**. Check with `node -v`.

```sh
npm install     # once, to download dependencies
npm run dev     # start the local preview at http://localhost:4321
```

Open `http://localhost:4321` for English and `http://localhost:4321/hi/` for Hindi.
Edits to any file appear in the browser immediately. Press `Ctrl+C` to stop.

The first `dev` or `build` on a new machine needs internet access so Astro can
download and cache the four web fonts. After that it works offline.

### All commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Local preview server with live reload |
| `npm run check` | Type-check only — catches missing translations and bad prop names |
| `npm run build` | `check` + build to `dist/` — **use this before deploying** |
| `npm run build:fast` | Build without type-checking (quicker, for iterating) |
| `npm run preview` | Serve the built `dist/` locally, exactly as it will be in production |
| `npm run assets:brand` | Regenerate the logo, favicons and social preview image |

Always run `npm run preview` (not just `dev`) as the final check before deploying —
it serves the real built output, so it catches anything that only breaks in a
production build.

---

## 3. Deploying

`npm run build` produces a folder of plain HTML, CSS, images and fonts in `dist/`.
There is no server-side code, so **any** static host will do, and most are free at
this traffic level.

Whichever host you pick, two things matter:

1. **`SITE.url` in `src/config/site.ts` must match the domain you actually serve
   from** (no trailing slash), and you must rebuild after changing it. It is baked
   into the canonical URLs, the `hreflang` tags and the sitemap at build time.
2. Point the domain's DNS at the host, then wait for the HTTPS certificate to be
   issued before submitting anything to Google.

### Netlify / Vercel / Cloudflare Pages (recommended)

Connect the Git repository and use:

- **Build command:** `npm run build`
- **Publish / output directory:** `dist`
- **Node version:** 22 or newer — set `NODE_VERSION=22` in the host's environment
  variables if it defaults to something older

Every push then rebuilds and redeploys automatically. All three also give you a
free HTTPS certificate and a global CDN.

### GitHub Pages

Use the official action — see
[Astro's GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/).
If the site will live at `https://user.github.io/repo-name/` rather than on its own
domain, you must also set `base: '/repo-name'` in `astro.config.ts`.

### Traditional hosting (cPanel, FTP, shared hosting)

Run `npm run build` on your own machine and upload the **contents** of `dist/`
into the web root (usually `public_html/`). Re-upload after every content change.
No Node.js is needed on the server.

### Optional: cache headers

Astro fingerprints its CSS, font and image filenames, so those can be cached
forever while the HTML stays fresh. Netlify and Cloudflare Pages read a
`public/_headers` file; Vercel reads `vercel.json`. This is a minor optimisation —
the site is fast without it.

---

## 4. After launch

- **Google Search Console** — add the property, then submit
  `https://yourdomain.com/sitemap-index.xml`. Both languages are listed in the
  sitemap with the correct `hreflang` alternates.
- **Google Business Profile** — create or claim the listing. Make sure the name
  and address match `src/config/site.ts` character for character.
- **Send a test enquiry.** Click an "Email us" button on the live site and confirm
  your mail app opens with the details pre-filled, then check that
  `hr@rathorechambers.com` actually receives it.
- **Check the social preview** by pasting your URL into WhatsApp or
  [Facebook's Sharing Debugger](https://developers.facebook.com/tools/debug/).
- **Structured data** — paste a page URL into
  [Google's Rich Results Test](https://search.google.com/test/rich-results) to
  confirm the business, breadcrumb and FAQ markup is read correctly.
- **Analytics** (optional) — add the snippet to the `<head>` in
  `src/layouts/BaseLayout.astro`. A cookieless option such as Plausible or Fathom
  keeps the site fast and avoids needing a cookie banner.

---

## 5. How the project is organised

```
astro.config.ts              Astro settings: domain, i18n routing, fonts, sitemap
src/
  config/site.ts             <- YOUR BUSINESS DETAILS (start here)
  i18n/
    ui.ts                    <- ALL WEBSITE COPY, English + Hindi
    utils.ts                 Locale helpers: URL building, language switching
  lib/seo.ts                 Structured-data (JSON-LD) builders
  styles/global.css          Design tokens — colours, type scale, spacing
  layouts/BaseLayout.astro   The <head>: title, canonical, hreflang, OG tags, JSON-LD
  components/                Header, Footer, hero, cards, FAQ, enquiry form, ...
  pages/
    [...lang]/               Every page, rendered once per language
    404.astro                Bilingual, excluded from search engines
    robots.txt.ts            Generated robots.txt pointing at the sitemap
public/                      Generated brand assets — do not edit by hand
scripts/
  generate-brand-assets.mjs  Creates everything in public/ from one BRAND object
dist/                        Build output (not committed)
```

**How the two languages work.** Pages live under `src/pages/[...lang]/`, and each
one is built twice: once for English at `/about`, once for Hindi at `/hi/about`.
English has no prefix because it is the default locale. To add a page, create it
under `[...lang]/`, copy the `getStaticPaths()` block from an existing page, and
add its text to both `en` and `hi` in `src/i18n/ui.ts`.

### Notes for whoever works on this next

- **No Tailwind, no React.** Styling is CSS custom properties in
  `src/styles/global.css` plus scoped `<style>` blocks. Adding the `surface-dark`
  class to a section flips the semantic colour tokens for a dark band.
- **Icons are inline SVG** in `src/components/Icon.astro` — no icon library. The
  `name` prop is typed, so a typo is a build error.
- **Fonts are self-hosted and subsetted** via Astro's Font API, and preloaded per
  locale. `html[lang^="hi"]` swaps the display and body fonts to Noto Sans
  Devanagari so Hindi headings match the layout.
- **In `src/lib/seo.ts`, conditional keys must be spread as `...cond ? { k: v } : {}`**,
  not `...cond && { k: v }`. The config is declared `as const`, which makes an
  empty string a non-spreadable type and produces a `ts(2698)` error.
- **`sharp` cannot write `.ico` files**, so `generate-brand-assets.mjs` wraps a
  PNG in an ICO container by hand in `pngToIco()`.
- **Satori (the OG image renderer) requires an explicit `display: 'flex'`** on
  every container, and image sources must be passed as the `src` attribute rather
  than in the style object.
- The site is `output: 'static'`. If it ever needs server-side rendering — a real
  form backend, say — run `npx astro add netlify` (or `vercel`, `node`) to switch.

---

## 6. Content notice

Website content is © Rathore Chambers INC. The footer states that the site is
informational and not legal, tax or investment advice — please keep that notice in
place, and keep the FAQ answers factual about how title verification and
state-wise agricultural land rules actually work.
