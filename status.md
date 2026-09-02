# Rathore Chambers INC — Project Status

**Date:** 2026-05-13
**Business:** Rathore Chambers INC — Purchase & Sale of Agricultural Land (Krishi Bhumi) and Commercial Shops. Assists clients in identifying suitable properties, negotiating deals, and completing transactions smoothly.
**Repo path:** `D:\Sarthak\Coding\Work\KWTC\RathoreChambersINC`
**Git:** not yet initialized (`npm create astro` was run with `--no-git`)

---

## 1. User Decisions (from questionnaire)

| Question | Answer |
|---|---|
| Tech stack | **Astro** — chosen for prod SEO best practices (zero JS by default, sitemap, i18n, perfect Lighthouse) |
| Language | **Bilingual toggle** `en` (default, unprefixed `/`) + `hi` (prefixed `/hi/`) |
| Pages | **Multi-page site** — Home + Services hub + 2 service detail pages + About + Contact |
| Contact form | **WhatsApp + phone + email links** — form builds a `wa.me` link, no backend |
| Contact details | **Placeholders for now** — single source of truth in `src/config/site.ts` |
| Service area | **Generic / pan-India for now** — `SERVICE_AREAS = []` hides coverage section until filled |
| Visual style | **Trust & heritage + clearly digital** — deep forest/gold/cream palette executed with dark hero, grid lines, glows, reveal animations, mono labels. User was unsure, this combines both intents. |

---

## 2. Tech Stack

- **Astro 7.2.10** (static output), **Node >=22.12.0**, **TypeScript 6**
- `@astrojs/sitemap 3.7.4` with `i18n` alternates
- `@astrojs/check 0.9.10` for `astro check`
- **Fonts via `astro:assets` Font API** (self-hosted, subsetted, no third-party requests):
  - `Sora 600,700` latin → `--font-display` (headings, EN only)
  - `Inter 400,500,600` latin → `--font-sans` (body, EN)
  - `Noto Sans Devanagari 400,500,600,700` devanagari → `--font-deva` (all HI text)
  - `JetBrains Mono 500` latin → `--font-mono` (eyebrows, labels)
  - `html[lang^='hi']` flips `--ff-display/--ff-sans` to Deva-first so headings match.
- **Brand asset generation:** `satori 0.33 + sharp 0.35` in `scripts/generate-brand-assets.mjs` (devDeps only). Fetches TTFs from `cdn.jsdelivr.net/fontsource` at generate time, renders OG via satori→sharp.
- No Tailwind, no framework islands — pure Astro + scoped CSS.

### Scripts (`package.json`)

```json
"dev": "astro dev",
"build": "astro check && astro build",
"build:fast": "astro build",
"preview": "astro preview",
"check": "astro check",
"assets:brand": "node scripts/generate-brand-assets.mjs"
```

Astro config is `astro.config.ts` (not `.mjs`) so it can import `SITE.url`.

---

## 3. File Structure

```
astro.config.ts
src/
  config/site.ts          # SINGLE SOURCE OF TRUTH — all TODO placeholders
  i18n/
    ui.ts                 # ALL copy, en + hi, typed (hi : UI = typeof en)
    utils.ts              # LOCALES, localePath(), switchLocalePath(), route(), alternates helpers
  lib/seo.ts              # organizationSchema(), websiteSchema(), webPageSchema(), breadcrumbSchema(), faqSchema(), serviceSchema(), graph()
  styles/global.css       # Design tokens, reset, layout, buttons, cards, motifs, reveal
  layouts/BaseLayout.astro # <head> SEO: title, canonical, hreflang, OG, twitter, JSON-LD graph, Font preloads, Header/Footer/Fab/reveal script
  components/
    Icon.astro            # Inline 24x24 SVG set (29 names, stroke vs filled)
    Logo.astro            # 40x40 surveyed-plot mark (gradient vs mono)
    Header.astro          # Fixed header, transparent→solid on scroll, nav dropdown, lang toggle, mobile menu
    Footer.astro          # Dark, grid-lines, brand + 3 nav cols + disclaimer
    WhatsAppFab.astro     # Fixed bottom-right, reveals after 400px scroll
    Breadcrumbs.astro
    PageHero.astro        # Dark hero used by all inner pages
    CTABand.astro         # Dark CTA band (WA + phone + link)
    FAQAccordion.astro    # <details>/<summary>, no JS
    FeatureGrid.astro     # Icon card grid
    AudienceSplit.astro   # 2-col buyer/seller checklist
    NumberedGrid.astro    # Numbered watch-list grid
    EnquiryForm.astro     # WA-powered form (wa.me builder)
    EnquirySection.astro  # Aside (direct links) + EnquiryForm, used by service pages
  pages/
    [...lang]/index.astro                    # Home (hero + stats + services + why + process + faq + cta)
    [...lang]/services/index.astro          # Services hub
    [...lang]/services/agricultural-land.astro
    [...lang]/services/commercial-shops.astro
    [...lang]/about.astro
    [...lang]/contact.astro
    404.astro                                # Bilingual (both languages), noindex
    robots.txt.ts                            # → sitemap-index.xml
public/
  logo.svg, favicon.svg, favicon.ico (32), apple-touch-icon.png (180), og.png (1200x630)
scripts/generate-brand-assets.mjs
dist/  # built output (13 pages, sitemap-index.xml + sitemap-0.xml)
```

**i18n routing:** `src/pages/[...lang]/**` with `getStaticPaths()` returning `localePaths()` (`lang: undefined` → EN at `/`, `lang: 'hi'` → `/hi/`). `astro.config.ts` has `i18n: { locales: ['en','hi'], defaultLocale: 'en', routing: { prefixDefaultLocale: false } }`. The scaffold's `src/pages/index.astro` was deleted (it shadowed `[...lang]` with a warning).

---

## 4. SEO & Correctness Details

- **Head (BaseLayout):** canonical (except 404), `hreflang` en-IN/hi-IN/x-default (→ EN), `og:*` + `og:locale` + `og:locale:alternate`, `twitter:card` summary_large_image, `theme-color #0a1310`, `robots` index/follow (noindex on 404), favicon + apple-touch-icon, Font preloads per locale (EN preloads display+sans, HI preloads deva).
- **JSON-LD `@graph`:** `RealEstateAgent` (#organization) + `WebSite` + `WebPage` on every page, plus per-page: `BreadcrumbList`, `Service` (services + service detail), `FAQPage` (home + service detail subsets), `ContactPage`, `AboutPage`. `ORG_ID`/`WEBSITE_ID` cross-reference. `postalAddress`, `hasMap`, `areaServed`, `sameAs` are conditional on config being filled. Validated: parses as JSON, no errors.
- **Sitemap:** `@astrojs/sitemap` with `i18n` alternates. Outputs `sitemap-index.xml` → `sitemap-0.xml` (12 URLs). `robots.txt` points to `sitemap-index.xml`. **Note:** 404 is correctly excluded from sitemap by Astro.
- **Fonts:** self-hosted, subsetted, no CLS. Checked: HI page renders Devanagari correctly (og.png visually verified).
- **Accessibility:** skip link, `dir="ltr"` (both locales are LTR), `<details>` FAQ is keyboard/searchable, `focus-visible`, `prefers-reduced-motion` disables animations/scroll-behavior.

---

## 5. Content & Placeholders

**All placeholders are in `src/config/site.ts` — TODO comments mark them:**

- `SITE.url` → `https://www.rathorechambers.com` (replace with real domain before launch; used for canonical + sitemap)
- `SITE.foundingYear` → `''` (optional)
- `CONTACT.phone.e164` → `+919000000000` / display `+91 90000 00000`
- `CONTACT.whatsapp` → `919000000000` (digits only, with country code, no `+`)
- `CONTACT.email` → `contact@rathorechambers.com`
- `CONTACT.address` → all empty (`street`, `locality`, `region`, `postalCode` empty → `hasAddress` false, address hidden, LocalBusiness address omitted from schema until filled — keep identical to Google Business Profile)
- `CONTACT.mapUrl` → `''` (Google Maps share link, hides button if empty)
- `CONTACT.hours` → Mon–Sat 09:30–19:00, Sunday by appointment (localized day names on contact page via `Intl.DateTimeFormat`)
- `SOCIAL` → all `''` (hidden automatically)
- `SERVICE_AREAS: []` → hides coverage section on About; fill with district/city names for local SEO
- `STATS: []` → intentionally empty (publishing invented numbers is legal/reputational risk; strip hides itself while empty)

**Copy:** `src/i18n/ui.ts` — `en` is source of truth, `hi` typed as `UI = typeof en` so missing keys are type errors. FAQ answers are honest/non-legal-advice (e.g., "can anyone buy agri land?" explains state-wise variation). Footer disclaimer says not legal/tax/investment advice.

---

## 6. Build Status

- `npx astro check` → **0 errors, 0 warnings, 0 hints** (30 files). Previous 6 `ts(2698)` spread errors fixed by ternary `...cond ? {k:v} : {}` pattern (empty `''` from `as const` can't be spread with `&&`).
- `npx astro build` → **13 page(s) built** in ~2.5s, no warnings. Routes confirmed in `dist/`:
  ```
  /index.html, /hi/index.html,
  /services/index.html, /hi/services/index.html,
  /services/agricultural-land/index.html, /hi/services/agricultural-land/index.html,
  /services/commercial-shops/index.html, /hi/services/commercial-shops/index.html,
  /about/index.html, /hi/about/index.html,
  /contact/index.html, /hi/contact/index.html,
  /404.html, /robots.txt
  sitemap-index.xml, sitemap-0.xml (12 locs)
  ```
- Verified: title/canonical/hreflang on agri-land page, JSON-LD parses with 6 graph nodes, HI `<html lang="hi-IN">` + `og:locale hi_IN`, sitemap alternates, `robots.txt` correct, `og.png` renders (logo, headline, Devanagari, pills).
- `dist/` is present but **not committed** (no git yet). `public/` icons + `og.png` are generated and present.

---

## 7. TODO — Remaining Work

From `TodoWrite` tracker:

| # | Task | Status |
|---|---|---|
| 1 | Scaffold Astro + sitemap | ✅ done |
| 2 | Site config placeholders | ✅ done |
| 3 | i18n dictionary + helpers | ✅ done |
| 4 | Global CSS design system | ✅ done |
| 5 | BaseLayout SEO head | ✅ done |
| 6 | Header + Footer | ✅ done |
| 7 | Shared components | ✅ done |
| 8 | Home page | ✅ done |
| 9 | Services, Agri Land, Commercial Shops, About, Contact | ✅ done (build proves) |
| 10 | WA form + FAB | ✅ done |
| 11 | robots.txt, favicon/logo SVG, 404, OG image | ✅ done (script generates all 5) |
| 12 | Build and verify | ✅ done (check + build pass, manual SEO verification done) |
| 13 | **README with fill-in-the-blanks + deploy instructions** | ⏳ **PENDING — next task** |

**README should cover:**
- Prereqs (`node >=22.12.0`)
- `npm install`, `npm run dev` (note `AGENTS.md` says `astro dev --background` / `astro dev stop|status|logs` for background mode)
- Editing `src/config/site.ts` (all TODOs), `SERVICE_AREAS`, `STATS`, `src/i18n/ui.ts` copy review
- `npm run assets:brand` after logo/color/OG wording changes (requires network for fonts)
- `npm run check` + `npm run build` / `build:fast`
- Deploy: any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, cPanel) — upload `dist/`; set custom domain to `SITE.url`; ensure `SITE.url` has no trailing slash
- Optional: `astro add` for adapters if SSR needed (currently `output: "static"`)

**Other pending / nice-to-have (not in original tracker):**
- `git init`, `.gitignore` (should ignore `dist/`, `node_modules/`, `.astro/`), initial commit
- Fill real contact details before launch (otherwise WA links go to placeholder number)
- Consider adding `public/_headers` or `vercel.json` caching if deploying to Netlify/Vercel
- Lighthouse / PageSpeed check on `npm run preview` (expected 100s; no JS islands)
- Optional: add `src/pages/sitemap.xml.ts` override if custom sitemap filtering needed (not needed now)
- Optional: add analytics (e.g., Plausible/GA) — add script in `BaseLayout.astro` head

---

## 8. How to Continue

1. **Read `src/config/site.ts:1` and `src/i18n/ui.ts:1`** — they document what to edit.
2. **Run** `npm run check` and `npm run build:fast` to re-verify.
3. **Write `README.md`** per section 7 (deploy instructions must mention `SITE.url` and `public/` assets).
4. **Create `.gitignore`** and `git init` if the user wants version control.
5. **Preview:** `npm run preview` or `npx astro preview` then open `http://localhost:4321` and `/hi/`.
6. **If changing brand:** edit `BRAND` in `scripts/generate-brand-assets.mjs:17` and run `npm run assets:brand`, then rebuild.

---

## 9. Key Design Decisions & Gotchas

- **No Tailwind** — custom CSS variables in `src/styles/global.css:1` for full control; `surface-dark` flips semantic tokens.
- **Icons are inline SVG** — `src/components/Icon.astro:1` has no deps; `name` prop is typed.
- **Spread fix:** `src/lib/seo.ts` must use `...cond ? {k:v} : {}` not `...cond && {k:v}` because `as const` makes `''` a non-object type.
- **Unused import fix:** `src/pages/[...lang]/index.astro` had `whatsappLink` removed (hint).
- **BaseLayout `noindex` prop** added for 404 to suppress canonical/hreflang and set `robots noindex`.
- **OG image:** `scripts/generate-brand-assets.mjs` `ogTree()` uses `flex` display explicitly (satori requires it) and `img()` helper for `src` (not style). Previous bug was `src` in style object → "Image source is not provided".
- **Favicon ICO:** manually wrapped PNG in ICO container (`pngToIco()`), since `sharp` cannot write `.ico`.
- **Stats strip hidden when `STATS` empty** — intentional; don't invent numbers.

---

## 10. Verification Commands

```bash
npm run check          # type-check (should be 0 errors)
npm run build:fast     # build without re-checking types
npm run build          # check + build (package.json default)
npm run assets:brand   # regenerate public/logo.svg, favicon.*, og.png (needs network)
npx astro dev --background; npx astro dev logs; npx astro dev stop  # per AGENTS.md
```

Inspect SEO:
```bash
# Check title/canonical/hreflang + JSON-LD validity
python3 -c "import re,json,pathlib; h=pathlib.Path('dist/services/agricultural-land/index.html').read_text(); print(re.findall(r'<title>.*?</title>|<link rel=\"canonical\"[^>]*>|<link rel=\"alternate\"[^>]*>', h)); m=re.search(r'<script type=\"application/ld\+json\">(.*?)</script>', h, re.S); print(json.loads(m.group(1))['@graph'][0]['@type'])"
Get-Content dist\sitemap-0.xml
Get-Content dist\robots.txt
```

---

*This file is the handoff to the next AI. Keep it updated as tasks complete.*
