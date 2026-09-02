import { ui, type UI } from './ui';

export const LOCALES = ['en', 'hi'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

/** BCP-47 tags used for <html lang>, hreflang and og:locale. */
export const LOCALE_TAGS: Record<Locale, string> = {
  en: 'en-IN',
  hi: 'hi-IN',
};

export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  hi: 'हिन्दी',
};

/** Short label for the header toggle. */
export const LOCALE_SHORT: Record<Locale, string> = {
  en: 'EN',
  hi: 'हि',
};

/**
 * Paths returned by every page's `getStaticPaths()`.
 * `lang: undefined` produces the un-prefixed English route (`/about`),
 * `lang: 'hi'` produces the Hindi route (`/hi/about`).
 */
export function localePaths() {
  return LOCALES.map((locale) => ({
    params: { lang: locale === DEFAULT_LOCALE ? undefined : locale },
    props: { locale },
  }));
}

/** Narrows an unknown value to a supported locale, falling back to the default. */
export function toLocale(value: unknown): Locale {
  return LOCALES.includes(value as Locale) ? (value as Locale) : DEFAULT_LOCALE;
}

/**
 * Builds an absolute-from-root, locale-aware path.
 *   localePath('en', 'services')          -> '/services'
 *   localePath('hi', 'services')          -> '/hi/services'
 *   localePath('hi', '/')                 -> '/hi'
 *   localePath('en', 'services/land')     -> '/services/land'
 */
export function localePath(locale: Locale, path = '/'): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  if (!clean) return prefix || '/';
  return `${prefix}/${clean}`;
}

/**
 * Given the current pathname, returns the equivalent pathname in another locale.
 * Used by the language toggle so visitors stay on the same page when switching.
 */
export function switchLocalePath(currentPathname: string, target: Locale): string {
  const segments = currentPathname.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean);

  if (segments.length && LOCALES.includes(segments[0] as Locale)) {
    segments.shift();
  }

  return localePath(target, segments.join('/'));
}

/** Returns the translation dictionary for a locale. */
export function useTranslations(locale: Locale): UI {
  return ui[locale];
}

/** Canonical route keys -> path segment. Keeps URLs consistent across the site. */
export const ROUTES = {
  home: '/',
  services: 'services',
  agriculturalLand: 'services/agricultural-land',
  commercialShops: 'services/commercial-shops',
  about: 'about',
  contact: 'contact',
} as const;

export type RouteKey = keyof typeof ROUTES;

export function route(locale: Locale, key: RouteKey): string {
  return localePath(locale, ROUTES[key]);
}
