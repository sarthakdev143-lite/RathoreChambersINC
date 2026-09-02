/**
 * Generates every static brand asset in `public/` from the definitions below.
 *
 *   node scripts/generate-brand-assets.mjs      (or: npm run assets:brand)
 *
 * Re-run this after changing the logo, the colours, or the OG image wording.
 * Requires network access the first time so it can fetch the fonts that Satori
 * needs to convert the OG image text into vector paths.
 *
 * Outputs:
 *   public/logo.svg             — full mark, used in structured data
 *   public/favicon.svg          — simplified mark for small sizes
 *   public/favicon.ico          — 32×32, for older browsers
 *   public/apple-touch-icon.png — 180×180, iOS home screen
 *   public/og.png               — 1200×630 social preview card
 */

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import satori from 'satori';
import sharp from 'sharp';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC_DIR = join(ROOT, 'public');

/* ------------------------------------------------------------------ brand */

const BRAND = {
  name: 'Rathore Chambers',
  suffix: 'INC',
  tagline: 'Purchase & sale of agricultural land and commercial shops',
  devanagari: 'कृषि भूमि · व्यावसायिक दुकानें',
  pills: ['Title verified', 'Fair negotiation', 'Registry to handover'],
  ink: '#0a1310',
  inkDeep: '#060c0a',
  forest: '#226551',
  forestDeep: '#0f2c22',
  gold: '#c9a227',
  goldLight: '#dcb741',
  cream: '#fbfaf7',
};

/** Full logo mark — a surveyed plot with one quadrant staked out in gold. */
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" role="img" aria-label="${BRAND.name} ${BRAND.suffix}">
  <defs>
    <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${BRAND.forest}"/>
      <stop offset="100%" stop-color="${BRAND.forestDeep}"/>
    </linearGradient>
  </defs>
  <rect width="40" height="40" rx="10" fill="url(#lg)"/>
  <g transform="rotate(45 20 20)">
    <path d="M20 11h9v9h-9z" fill="${BRAND.gold}"/>
    <path d="M11 11h18v18H11z" fill="none" stroke="${BRAND.cream}" stroke-width="1.6" stroke-linejoin="round" opacity=".92"/>
    <path d="M20 11v18M11 20h18" stroke="${BRAND.cream}" stroke-width="1.6" stroke-linecap="round" opacity=".62"/>
  </g>
</svg>`;

/** Heavier strokes and no rotation-thin edges, so it survives 16×16. */
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
  <defs>
    <linearGradient id="fg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${BRAND.forest}"/>
      <stop offset="100%" stop-color="${BRAND.forestDeep}"/>
    </linearGradient>
  </defs>
  <rect width="40" height="40" rx="9" fill="url(#fg)"/>
  <g transform="rotate(45 20 20)">
    <path d="M20 10h10v10H20z" fill="${BRAND.gold}"/>
    <path d="M10 10h20v20H10z" fill="none" stroke="${BRAND.cream}" stroke-width="2.6" stroke-linejoin="round"/>
    <path d="M20 10v20M10 20h20" stroke="${BRAND.cream}" stroke-width="2.2" stroke-linecap="round" opacity=".75"/>
  </g>
</svg>`;

/* ------------------------------------------------------------------ fonts */

const FONTS = [
  {
    name: 'Sora',
    weight: 700,
    url: 'https://cdn.jsdelivr.net/fontsource/fonts/sora@latest/latin-700-normal.ttf',
  },
  {
    name: 'Inter',
    weight: 400,
    url: 'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.ttf',
  },
  {
    name: 'Inter',
    weight: 500,
    url: 'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-500-normal.ttf',
  },
  {
    name: 'NotoDeva',
    weight: 500,
    url: 'https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-devanagari@latest/devanagari-500-normal.ttf',
  },
];

async function loadFonts() {
  return Promise.all(
    FONTS.map(async (font) => {
      const response = await fetch(font.url);
      if (!response.ok) {
        throw new Error(`Could not download ${font.name} ${font.weight}: HTTP ${response.status}`);
      }
      return {
        name: font.name,
        weight: font.weight,
        style: 'normal',
        data: await response.arrayBuffer(),
      };
    }),
  );
}

/* --------------------------------------------------------------- helpers */

const el = (type, style, children) => ({ type, props: { style, children } });

/** `src`/`width`/`height` are real props on <img>, not style keys. */
const img = (src, size) => ({ type: 'img', props: { src, width: size, height: size } });

/** Wraps a PNG in a single-image ICO container. */
function pngToIco(png, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // image type: icon
  header.writeUInt16LE(1, 4); // image count

  const entry = Buffer.alloc(16);
  entry.writeUInt8(size >= 256 ? 0 : size, 0); // width  (0 means 256)
  entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
  entry.writeUInt8(0, 2); // palette size
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // colour planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(png.length, 8); // payload size
  entry.writeUInt32LE(header.length + entry.length, 12); // payload offset

  return Buffer.concat([header, entry, png]);
}

/* -------------------------------------------------------------- OG image */

function ogTree(logoDataUri) {
  return el(
    'div',
    {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '1200px',
      height: '630px',
      padding: '72px',
      backgroundColor: BRAND.ink,
      backgroundImage: `radial-gradient(circle at 12% 0%, ${BRAND.forest}cc 0%, transparent 55%), radial-gradient(circle at 95% 100%, ${BRAND.gold}33 0%, transparent 50%)`,
      fontFamily: 'Inter',
    },
    [
      // ── header: mark + wordmark
      el('div', { display: 'flex', alignItems: 'center' }, [
        img(logoDataUri, 76),
        el(
          'div',
          { display: 'flex', flexDirection: 'column', marginLeft: '22px' },
          [
            el(
              'div',
              {
                display: 'flex',
                fontFamily: 'Sora',
                fontWeight: 700,
                fontSize: '38px',
                color: BRAND.cream,
                letterSpacing: '-0.02em',
              },
              [
                el('span', {}, BRAND.name),
                el('span', { color: BRAND.gold, marginLeft: '10px' }, BRAND.suffix),
              ],
            ),
            el(
              'div',
              {
                fontSize: '17px',
                color: '#fbfaf799',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                marginTop: '6px',
              },
              'Property advisory',
            ),
          ],
        ),
      ]),

      // ── headline
      el('div', { display: 'flex', flexDirection: 'column' }, [
        el(
          'div',
          {
            display: 'flex',
            fontFamily: 'Sora',
            fontWeight: 700,
            fontSize: '60px',
            lineHeight: 1.14,
            letterSpacing: '-0.03em',
            color: BRAND.cream,
            maxWidth: '900px',
          },
          BRAND.tagline,
        ),
        el(
          'div',
          {
            fontFamily: 'NotoDeva',
            fontWeight: 500,
            fontSize: '30px',
            color: BRAND.goldLight,
            marginTop: '22px',
          },
          BRAND.devanagari,
        ),
      ]),

      // ── footer pills
      el(
        'div',
        { display: 'flex', alignItems: 'center' },
        BRAND.pills.map((label, index) =>
          el(
            'div',
            {
              display: 'flex',
              alignItems: 'center',
              padding: '10px 22px',
              marginRight: index === BRAND.pills.length - 1 ? '0' : '14px',
              borderRadius: '999px',
              border: '1px solid #fbfaf72e',
              backgroundColor: '#fbfaf70d',
              fontSize: '21px',
              fontWeight: 500,
              color: '#fbfaf7cc',
            },
            label,
          ),
        ),
      ),
    ],
  );
}

/* ------------------------------------------------------------------ main */

async function main() {
  await mkdir(PUBLIC_DIR, { recursive: true });

  // 1. Vector assets
  await writeFile(join(PUBLIC_DIR, 'logo.svg'), logoSvg, 'utf8');
  await writeFile(join(PUBLIC_DIR, 'favicon.svg'), faviconSvg, 'utf8');
  console.log('✓ logo.svg, favicon.svg');

  // 2. Raster icons
  const faviconBuffer = Buffer.from(faviconSvg);

  const appleIcon = await sharp(faviconBuffer, { density: 700 })
    .resize(180, 180)
    .flatten({ background: BRAND.inkDeep })
    .png()
    .toBuffer();
  await writeFile(join(PUBLIC_DIR, 'apple-touch-icon.png'), appleIcon);
  console.log('✓ apple-touch-icon.png (180×180)');

  const icoPng = await sharp(faviconBuffer, { density: 700 }).resize(32, 32).png().toBuffer();
  await writeFile(join(PUBLIC_DIR, 'favicon.ico'), pngToIco(icoPng, 32));
  console.log('✓ favicon.ico (32×32)');

  // 3. Social card — text is rendered to paths by Satori, so it looks identical
  //    everywhere regardless of what fonts the viewer has.
  console.log('… downloading fonts for the OG image');
  const fonts = await loadFonts();

  const logoDataUri = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString('base64')}`;
  const svg = await satori(ogTree(logoDataUri), { width: 1200, height: 630, fonts });

  const og = await sharp(Buffer.from(svg)).png({ quality: 90 }).toBuffer();
  await writeFile(join(PUBLIC_DIR, 'og.png'), og);
  console.log('✓ og.png (1200×630)');

  console.log('\nAll brand assets written to public/');
}

main().catch((error) => {
  console.error('\nBrand asset generation failed:\n', error);
  process.exit(1);
});
