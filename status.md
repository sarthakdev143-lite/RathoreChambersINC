# Rathore Chambers INC — Project Status

**Date:** 2026-10-16
**Business:** Rathore Chambers INC — Purchase & Sale of Agricultural Land (Krishi Bhumi) and Commercial Shops, plus a second vertical: IT Staff Augmentation (vetted developers/QA/DevOps on staff-augmentation, dedicated-team or project-based engagements). Assists clients in identifying suitable properties, negotiating deals, and completing transactions smoothly; assists companies in extending their engineering teams.
**Repo path:** `D:\Sarthak\Coding\Work\KWTC\RathoreChambersINC`
**Git:** branch `main`, remote `origin` → `https://github.com/sarthakdev143-lite/RathoreChambersINC` (**private**). `dist/`, `node_modules/`, `.astro/`, `.vercel/` ignored.
**Live:** https://rathore-chambers-inc.vercel.app — Vercel project `kwtc/rathore-chambers-inc`, GitHub repo connected, so **every push to `main` auto-deploys**.

**Status: built, deployed and verified.** A production incident (reported 2026-10-16) made the deployed site render blank — the CSP blocked Astro-inlined page scripts, leaving every `.reveal` section at `opacity: 0`. Fixed in code (scripts no longer inlined + reveal now fails visible), rebuilt and re-verified 2026-10-16 against the production CSP in headless Chrome (see sections 6 and 9). **Push to `main` to redeploy — Vercel auto-deploys on push.** Remaining work is client input, not code — real contact details and a real domain. See section 7.

---

## 1. User Decisions (from questionnaire)

| Question | Answer |
|---|---|
| Tech stack | **Astro** — chosen for prod SEO best practices (zero JS by default, sitemap, i18n, perfect Lighthouse) |
| Language | **Bilingual toggle** `en` (default, unprefixed `/`) + `hi` (prefixed `/hi/`) |
| Pages | **Multi-page site** — Home + Services hub + 2 service detail pages + About + Contact |
| Contact form | **Email only** — the form opens the visitor's mail app with the details pre-filled (`mailto:`), no backend |
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
    Icon.astro            # Inline 24x24 SVG set (37 names, stroke vs filled)
    Logo.astro            # 40x40 surveyed-plot mark (gradient vs mono)
    Header.astro          # Fixed header, transparent→solid on scroll, nav dropdown, lang toggle, mobile menu
    Footer.astro          # Dark, grid-lines, brand + 3 nav cols + disclaimer
    Breadcrumbs.astro
    PageHero.astro        # Dark hero used by all inner pages
    CTABand.astro         # Dark CTA band (email + contact link)
    FAQAccordion.astro    # <details>/<summary>, no JS
    FeatureGrid.astro     # Icon card grid
    AudienceSplit.astro   # 2-col buyer/seller checklist
    NumberedGrid.astro    # Numbered watch-list grid
    EnquiryForm.astro     # Mail-powered form (mailto: builder)
    EnquirySection.astro  # Aside (direct links) + EnquiryForm, used by service pages
  pages/
    [...lang]/index.astro                    # Home (hero + stats + services + why + process + faq + cta)
    [...lang]/services/index.astro          # Services hub
    [...lang]/services/agricultural-land.astro
    [...lang]/services/commercial-shops.astro
    [...lang]/services/it-staff-augmentation.astro  # IT vertical: terminal-mockup hero, engagement models, tech-stack badges, process, watch, own FAQ
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

**Contact details live in `src/config/site.ts` — the published set is deliberately minimal:**

- `SITE.url` → **now `https://rathore-chambers-inc.vercel.app`** (the live Vercel alias, so deployed pages reference themselves). Replace with the real domain once it points at Vercel, then rebuild + redeploy — it is baked into canonical, `og:url`, hreflang and the sitemap at build time.
- `SITE.foundingYear` → `''` (optional)
- `CONTACT.email` → **`hr@rathorechambers.com`** — the only contact address on the site. Phone and WhatsApp were **removed entirely** (2026-10-16, client request): no `wa.me`/`tel:` links, no WhatsApp FAB, no placeholder number anywhere.
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
- `npx astro build` → **15 page(s) built** in ~5.6s, no warnings (added the IT staff augmentation page, EN+HI). Routes confirmed in `dist/`:
  ```
  /index.html, /hi/index.html,
  /services/index.html, /hi/services/index.html,
  /services/agricultural-land/index.html, /hi/services/agricultural-land/index.html,
  /services/commercial-shops/index.html, /hi/services/commercial-shops/index.html,
  /services/it-staff-augmentation/index.html, /hi/services/it-staff-augmentation/index.html,
  /about/index.html, /hi/about/index.html,
  /contact/index.html, /hi/contact/index.html,
  /404.html, /robots.txt
  sitemap-index.xml, sitemap-0.xml (14 locs)
  ```
- **Re-verified 2026-09-09** after adding the IT staff augmentation vertical: `npx astro check` → 0 errors/0 warnings/0 hints (31 files); `npx astro build` → 15 pages in ~5.6s. Verified in-browser (Chrome, both `en` and `hi`) — hero terminal mockup, engagement-model cards, tech-stack badge grid, process steps, "what determines success" grid, page-specific FAQ, and the enquiry form's pre-selected "IT staff augmentation requirement" option all render correctly; nav submenu and footer both list all three services; the home page's third service card wraps correctly in the 2-col grid.
- Verified: title/canonical/hreflang on agri-land page, JSON-LD parses with 6 graph nodes, HI `<html lang="hi-IN">` + `og:locale hi_IN`, sitemap alternates, `robots.txt` correct, `og.png` renders (logo, headline, Devanagari, pills).
- `dist/` is gitignored (build artefact, regenerate with `npm run build`). The five generated `public/` assets **are** committed, so a fresh clone does not need network access to `assets:brand`.
- **Re-verified 2026-09-02:** `npm run build` → 0 errors / 0 warnings / 0 hints (30 files), 13 pages in 2.27s. Payload audit: **0 `.js` files emitted** and no `<script src>` in any page (the 4 scripts on the home page are all inline — header scroll state, mobile menu, reveal observer, FAB), 4 subsetted `.woff2` in `dist/_astro/fonts/`, 656 KB total.
- **⚠️ Superseded 2026-10-16 — the "0 `.js` files, all inline" audit above was the bug, not an optimisation:** the production CSP (`script-src 'self'`) blocks inline scripts, so every inlined page script silently stopped running on the deployed site. See section 9, "Never let Astro inline page scripts".
- **Re-verified 2026-10-16 (after the blank-page fix):** `npm run build` → 0 errors / 0 warnings / 0 hints, 15 pages. All 15 built HTML files contain **zero inline executable scripts** — 2–3 external same-origin scripts each (4 emitted in `dist/_astro/*.js`, 0.2–0.8 kB), which the CSP allows. `dist/` served behind the exact `vercel.json` CSP in headless Chrome: home + contact render completely, all 22 `.reveal` sections visible after scrolling, header scroll state works, 0 console errors, 0 CSP violations, 0 failed requests.
- **Re-verified 2026-10-16 (email-only contact, after the WhatsApp/phone removal):** `npm run check` → 0 errors / 0 warnings / 0 hints (30 files); `npm run build` → 15 pages. Audit of `dist/`: `wa.me`, `919000000000`, `contact@rathorechambers.com` and `tel:+` appear **nowhere**; `hr@rathorechambers.com` on every page (header CTA, footer, contact page, JSON-LD); 3 external same-origin JS chunks, still 0 inline module scripts. Served behind the exact (tightened, no `https://wa.me`) `vercel.json` CSP in headless Chrome: home 22/22 reveals visible, contact page shows a single Email channel card, header CTA reads "Email us -> mailto:hr@rathorechambers.com", form carries `data-email="hr@rathorechambers.com"`, 0 console errors, 0 CSP violations, 0 failed requests.

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
| 13 | README with fill-in-the-blanks + deploy instructions | ✅ done |
| 14 | `git init` + initial commit | ✅ done |

**README.md** (replaced the Astro scaffold default) is written for the *business owner* as primary audience, not a developer. Sections: pre-launch checklist (the four steps — fill `site.ts`, read the copy in `ui.ts`, regenerate brand assets, build), local development + command table, deploying (Netlify/Vercel/CF Pages with build command + `NODE_VERSION=22`, GitHub Pages `base` caveat, cPanel/FTP, optional cache headers), post-launch checklist (Search Console + `sitemap-index.xml`, Google Business Profile NAP match, test WA on a real phone, social preview, Rich Results Test, analytics), project structure, and a "notes for whoever works on this next" block carrying the gotchas from section 9 so they survive without this file.

**Remaining work — all of it is client input or post-deploy, none of it is code:**

| Item | Owner | Notes |
|---|---|---|
| Complete remaining contact details in `src/config/site.ts` | **client** | Email is set (`hr@rathorechambers.com`). Still empty: `CONTACT.address`, `CONTACT.mapUrl`, `SOCIAL` — each hides itself until filled. |
| Review copy in `src/i18n/ui.ts` | **client** | Especially FAQ answers on fees/timelines and the per-service process steps — written without knowing their actual workflow. |
| Fill `SERVICE_AREAS` | client | Empty array hides the coverage section; filling it is worth real local-SEO value. |
| Fill `STATS` (or leave empty) | client | Leaving empty is a legitimate final answer — do not invent numbers. |
| Set real domain in `SITE.url`, then rebuild | client/dev | Currently the Vercel alias, so the live pages reference themselves correctly. Baked in at build time — rebuild + redeploy after changing. |
| Decide whether the `.vercel.app` URL should be indexable | **dev/client** | `robots.txt` currently allows all and canonical points at the Vercel domain, so Google may index it. If the real domain is coming, add `X-Robots-Tag: noindex` for the Vercel host first to avoid duplicate-content and redirect cleanup later. |
| Submit `sitemap-index.xml` to Search Console | post-deploy | |
| Lighthouse / PageSpeed on the live URL | post-deploy | Not run locally. Static proxies verified instead: 4 small external JS files (0.2–0.8 kB, same-origin so the CSP allows them), no inline executable scripts, self-hosted subsetted fonts with 2 preloads per locale, ~656 KB total `dist/`, 20–36 KB per page. |
| Optional: `public/_headers` / `vercel.json` cache headers | dev | Deliberately not added — depends on host, and filenames are already fingerprinted. Documented in README. |
| Optional: analytics | dev | Add to `<head>` in `BaseLayout.astro`; README suggests a cookieless provider to avoid a cookie banner. |
| Optional: `git remote add origin …` + push | client/dev | No remote configured yet. |

---

## 8. How to Continue

The build phase is finished — there is no pending code task. If you are picking this up:

1. **Re-verify first:** `npm run build` (expect *0 errors* and *13 pages*). First run on a new machine needs network so Astro can cache the four fonts.
2. **Read `README.md`** — it is now the authoritative fill-in-the-blanks + deploy guide. This file is the *engineering* history; the README is what the client uses.
3. **If asked to launch:** the real blocker is client input, not code. Get the contact details, put them in `src/config/site.ts:1`, set `SITE.url` to the real domain, rebuild, then deploy `dist/` to any static host.
4. **Preview before deploying:** `npm run preview`, then check `http://localhost:4321` and `/hi/` — this serves the real build output, unlike `dev`.
5. **If changing brand:** edit `BRAND` in `scripts/generate-brand-assets.mjs:31` and run `npm run assets:brand` (needs network), then rebuild.
6. **If adding a page:** create it under `src/pages/[...lang]/`, copy `getStaticPaths()` from a sibling page, and add copy to **both** `en` and `hi` in `src/i18n/ui.ts` — a missing Hindi key is a type error, so `npm run check` will catch it.

---

## 9. Key Design Decisions & Gotchas

- **No Tailwind** — custom CSS variables in `src/styles/global.css:1` for full control; `surface-dark` flips semantic tokens.
- **Icons are inline SVG** — `src/components/Icon.astro:1` has no deps; `name` prop is typed.
- **Spread fix:** `src/lib/seo.ts` must use `...cond ? {k:v} : {}` not `...cond && {k:v}` because `as const` makes `''` a non-object type.
- **⚠️ Contact is email-only — do not re-add phone/WhatsApp without asking.** On 2026-10-16 the client asked to remove all numbers and keep a single address, `hr@rathorechambers.com`. `CONTACT.phone`, `CONTACT.whatsapp`, `whatsappLink()`, `isPlaceholderWhatsapp()`, the `whatsappCard`/`phoneCard` copy, the WhatsApp FAB, every `wa.me`/`tel:` link and the green `btn--wa` style were deleted. The enquiry form now assembles its fields into a `mailto:...?subject=&body=` URL and does `window.location.href = url` (`window.open` on a `mailto:` is often blocked). The CSP in `vercel.json` no longer allows `https://wa.me`.
- **BaseLayout `noindex` prop** added for 404 to suppress canonical/hreflang and set `robots noindex`.
- **OG image:** `scripts/generate-brand-assets.mjs` `ogTree()` uses `flex` display explicitly (satori requires it) and `img()` helper for `src` (not style). Previous bug was `src` in style object → "Image source is not provided".
- **Favicon ICO:** manually wrapped PNG in ICO container (`pngToIco()`), since `sharp` cannot write `.ico`.
- **Stats strip hidden when `STATS` empty** — intentional; don't invent numbers.
- **⚠️ Scoped styles cannot reach into `Icon.astro` / `Logo.astro`.** Astro appends its `data-astro-cid-*` attribute to *every* compound selector in a scoped `<style>`, bare element selectors included. Neither `Icon.astro` nor `Logo.astro` has a `<style>` block, so their rendered elements carry no cid and any parent rule targeting them — `.foo svg`, or a class handed over as `<Icon class="bar" />` — compiles to `svg[cid]` / `.bar[cid]` and silently never matches. 17 selectors were dead this way. Reach them with `:global()` nested under a scope-carrying ancestor, e.g. `.burger :global(.burger__close)`, and **verify against the compiled CSS in `dist/_astro/*.css`**, not the source.
- **Services are data-driven from `t.services.items`.** The home page's service-card grid, the `/services` hub's offer list, and `organizationSchema()`'s `hasOfferCatalog` all map over this one array — adding a new route to `ROUTES`/`RouteKey`, a nav/footer entry, and an item to `services.items` (both `en` and `hi`) is enough to make it show up everywhere; no per-page wiring needed beyond the item's own detail page. When a 3rd item was added for IT staff augmentation, `services.title/sub` and the home `servicesTitle/sub` copy ("two things" / "one of those two") also had to be reworded — check any hardcoded count language when changing the number of items.
- **⚠️ The header must have a dark section behind it.** `.site-header` is `position: fixed` and transparent until `.is-scrolled`, drawing cream text. `<main>` therefore must NOT be offset — `main > section:first-child { padding-top: var(--header-h) }` in `global.css` lets the dark hero flow up behind it instead. Offsetting `<main>` puts cream text on the cream page background and makes the wordmark, nav and language toggle invisible until the first scroll. Any new top-level page must open with a full-bleed `surface-dark` hero.
- **⚠️ Never let Astro inline page scripts — the deployed CSP silently kills them; and the reveal effect must fail *visible*.** `vercel.json` sends `script-src 'self'`, which blocks inline scripts. Astro inlines any bundled `<script>` chunk under `build.assetsInlineLimit` (default 4 kB) straight into the HTML — so between 2026-09-02 and 2026-10-15 every page script was inlined, the browser refused to execute them ("Refused to execute inline script…"), and the `.reveal` observer in `BaseLayout.astro` never added `is-visible`. With CSS hiding `.reveal` at `opacity: 0`, almost every section below the hero rendered blank on the deployed site while the HTML source looked perfect. Two defences are now in place — do not remove either: (a) `astro.config.ts` overrides `vite.build.assetsInlineLimit` to never inline `.js` (stylesheets keep the default size heuristic); (b) `global.css` hides `.reveal` only under `html.js`, a class the reveal script adds when it arms itself, and it reveals everything already on screen in the same frame — a blocked or failed script now leaves the page fully visible instead of blank. **After any build, check:** `Get-ChildItem dist -Recurse -Filter *.html | Select-String '<script type="module">'` must return nothing (all module scripts must have `src`). And remember **`astro dev` / `astro preview` do NOT send the `vercel.json` headers** — that is why three weeks of local verification missed this incident. Reproduce production with a local server that sends the CSP header (a scratch harness doing exactly this, with a headless-Chrome check, lives in `%TEMP%\opencode\rcinc-verify` on the machine that fixed this).
- **⚠️ The Vercel Node version comes from `package.json` `engines.node` (`>=22.12.0`) — never add `nodeVersion` to `vercel.json`.** It is not a valid property: Vercel rejects the *entire* deployment with "Schema verification failed", and because the Git integration runs the same validation, every pushed auto-deploy failed silently from 2026-10-15 (when commit `4519cea` added it) until it was removed. When deploys stall, check for invalid `vercel.json` keys before suspecting the Git integration.

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
