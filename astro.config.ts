// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import { SITE } from './src/config/site';

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  trailingSlash: 'ignore',

  i18n: {
    locales: ['en', 'hi'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-IN', hi: 'hi-IN' },
      },
    }),
  ],

  // Self-hosted, subsetted, preloaded fonts. No third-party requests, no layout shift.
  fonts: [
    {
      name: 'Sora',
      cssVariable: '--font-display',
      provider: fontProviders.google(),
      weights: [600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
    {
      name: 'Inter',
      cssVariable: '--font-sans',
      provider: fontProviders.google(),
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
    {
      // Covers all Devanagari text on the Hindi side of the site.
      name: 'Noto Sans Devanagari',
      cssVariable: '--font-deva',
      provider: fontProviders.google(),
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['devanagari'],
      fallbacks: ['sans-serif'],
    },
    {
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      provider: fontProviders.google(),
      weights: [500],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['monospace'],
    },
  ],

  build: {
    inlineStylesheets: 'auto',
  },

  vite: {
    build: {
      /*
       * Astro inlines bundled <script> chunks smaller than this limit straight
       * into the HTML. The production CSP is `script-src 'self'` (see
       * vercel.json), which BLOCKS inline scripts — so when Astro inlined the
       * site's page scripts, every one of them stopped running and the reveal
       * observer left the whole page at opacity 0. Scripts must always be
       * emitted as external files; the stylesheet size heuristic is fine.
       */
      assetsInlineLimit: (filePath: string) => (filePath.endsWith('.js') ? false : undefined),
    },
  },
});
