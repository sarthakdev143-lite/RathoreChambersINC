import { SITE, CONTACT, SERVICE_AREAS, socialLinks, hasAddress, isPlaceholderEmail } from '../config/site';
import { LOCALE_TAGS, LOCALES, localePath, ROUTES, type Locale, type RouteKey } from '../i18n/utils';
import { ui } from '../i18n/ui';

/** Stable @id values so the graph nodes cross-reference each other correctly. */
export const ORG_ID = `${SITE.url}/#organization`;
export const WEBSITE_ID = `${SITE.url}/#website`;

/** Turns a root-relative path into an absolute URL. */
export function abs(path: string): string {
  return new URL(path, SITE.url).href;
}

/** Absolute URL for a route in a given locale. */
export function absRoute(locale: Locale, key: RouteKey): string {
  return abs(localePath(locale, ROUTES[key]));
}

/** hreflang alternates for a route, plus x-default pointing at English. */
export function alternates(key: RouteKey) {
  const list = LOCALES.map((locale) => ({
    hreflang: LOCALE_TAGS[locale],
    href: absRoute(locale, key),
  }));

  return [...list, { hreflang: 'x-default', href: absRoute('en', key) }];
}

function postalAddress() {
  if (!hasAddress) return undefined;

  return {
    '@type': 'PostalAddress',
    ...(CONTACT.address.street ? { streetAddress: CONTACT.address.street } : {}),
    ...(CONTACT.address.locality ? { addressLocality: CONTACT.address.locality } : {}),
    ...(CONTACT.address.region ? { addressRegion: CONTACT.address.region } : {}),
    ...(CONTACT.address.postalCode ? { postalCode: CONTACT.address.postalCode } : {}),
    addressCountry: CONTACT.address.country,
  };
}

function openingHours() {
  return [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [...CONTACT.hours.days],
      opens: CONTACT.hours.opens,
      closes: CONTACT.hours.closes,
    },
  ];
}

/**
 * The business itself. `RealEstateAgent` is a LocalBusiness subtype, which is
 * what Google uses for local property search results.
 */
export function organizationSchema(locale: Locale) {
  const t = ui[locale];

  return {
    '@type': 'RealEstateAgent',
    '@id': ORG_ID,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    description: t.meta.home.description,
    image: abs('/og.png'),
    logo: {
      '@type': 'ImageObject',
      '@id': `${SITE.url}/#logo`,
      url: abs('/logo.svg'),
      contentUrl: abs('/logo.svg'),
      caption: SITE.name,
    },
    ...(isPlaceholderEmail() ? {} : { email: CONTACT.email }),
    knowsLanguage: LOCALES.map((l) => LOCALE_TAGS[l]),
    priceRange: '$$',
    ...(SITE.foundingYear ? { foundingDate: SITE.foundingYear } : {}),
    ...(postalAddress() ? { address: postalAddress() } : {}),
    ...(CONTACT.mapUrl ? { hasMap: CONTACT.mapUrl } : {}),
    ...(SERVICE_AREAS.length
      ? { areaServed: SERVICE_AREAS.map((name) => ({ '@type': 'AdministrativeArea', name })) }
      : {}),
    openingHoursSpecification: openingHours(),
    ...(socialLinks.length ? { sameAs: socialLinks.map((s) => s.href) } : {}),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: t.services.title,
      itemListElement: t.services.items.map((item) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: item.title,
          description: item.summary,
          url: absRoute(locale, item.key as RouteKey),
        },
      })),
    },
  };
}

export function websiteSchema(locale: Locale) {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    publisher: { '@id': ORG_ID },
    inLanguage: LOCALE_TAGS[locale],
  };
}

export function webPageSchema(opts: {
  locale: Locale;
  url: string;
  title: string;
  description: string;
}) {
  return {
    '@type': 'WebPage',
    '@id': `${opts.url}#webpage`,
    url: opts.url,
    name: opts.title,
    description: opts.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    inLanguage: LOCALE_TAGS[opts.locale],
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(entries: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: entries.map((entry) => ({
      '@type': 'Question',
      name: entry.q,
      acceptedAnswer: { '@type': 'Answer', text: entry.a },
    })),
  };
}

export function serviceSchema(opts: {
  locale: Locale;
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  return {
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    serviceType: opts.serviceType,
    provider: { '@id': ORG_ID },
    ...(SERVICE_AREAS.length
      ? { areaServed: SERVICE_AREAS.map((name) => ({ '@type': 'AdministrativeArea', name })) }
      : {}),
    availableLanguage: LOCALES.map((l) => ({
      '@type': 'Language',
      name: l === 'en' ? 'English' : 'Hindi',
      alternateName: LOCALE_TAGS[l],
    })),
  };
}

/** Wraps every node for a page into one @graph document. */
export function graph(nodes: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}
