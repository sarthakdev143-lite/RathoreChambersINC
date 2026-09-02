import type { APIRoute } from 'astro';

import { SITE } from '../config/site';

/**
 * Served at /robots.txt. Points crawlers at the sitemap index that
 * @astrojs/sitemap generates during the build.
 */
export const GET: APIRoute = () => {
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${new URL('/sitemap-index.xml', SITE.url).href}`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
