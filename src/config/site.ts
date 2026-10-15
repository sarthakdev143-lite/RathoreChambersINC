/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH FOR BUSINESS DETAILS
 * ─────────────────────────────────────────────────────────────────────────────
 *  Every email address, address and social link on the website is read from
 *  this file. Edit here and the whole site (including the SEO structured data
 *  that Google reads) updates.
 *
 *  Leave a value as an empty string ('') to hide that item from the site.
 *  There is deliberately NO phone or WhatsApp number: the business publishes
 *  exactly one email address and nothing else.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const SITE = {
  /**
   * Domain the site is served from — no trailing slash. Baked into canonical
   * URLs, og:url, hreflang and the sitemap at BUILD time, so rebuild and
   * redeploy after changing it.
   *
   * TODO: replace with the real domain once it points at Vercel. This holds the
   * Vercel production URL for now so the deployed pages reference themselves
   * rather than a domain that is not yet serving the site.
   */
  url: 'https://rathore-chambers-inc.vercel.app',

  name: 'Rathore Chambers INC',
  shortName: 'Rathore Chambers',

  /** TODO: year the business started. Used in "About" and structured data. */
  foundingYear: '',
} as const;

export const CONTACT = {
  /**
   * The only contact address published on the site — every "Email us" button,
   * the contact page, the footer, the enquiry form and the structured data
   * read this.
   */
  email: 'hr@rathorechambers.com',

  /**
   * TODO: office address. Used for the LocalBusiness structured data that powers
   * Google Maps / local search results, so keep it identical to your Google
   * Business Profile listing.
   */
  address: {
    street: '',
    locality: '', // city, e.g. 'Jaipur'
    region: '', // state, e.g. 'Rajasthan'
    postalCode: '',
    country: 'IN', // ISO country code
  },

  /** TODO: paste the share link from Google Maps. Leave '' to hide the map button. */
  mapUrl: '',

  /** Office hours, shown on the contact page and in structured data. */
  hours: {
    /** Days in schema.org format. */
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:30',
    closes: '19:00',
  },
} as const;

/** TODO: add your profile URLs. Empty strings are automatically hidden. */
export const SOCIAL = {
  facebook: '',
  instagram: '',
  linkedin: '',
  youtube: '',
  x: '',
} as const;

/**
 * Geographic area you serve. Powers the `areaServed` structured data and the
 * coverage section on the About page.
 * TODO: replace with your actual districts / cities for local SEO.
 * Leave the array empty to hide the coverage section.
 */
export const SERVICE_AREAS: string[] = [];

/**
 * Headline figures shown on the home page.
 *
 * ⚠️  These are intentionally EMPTY. Publishing invented numbers is a legal and
 *     reputational risk. Fill in only figures you can actually stand behind —
 *     the strip hides itself automatically while the values are empty.
 *
 * Example:
 *   { value: '12+', key: 'years' },
 */
export const STATS: { value: string; key: 'years' | 'deals' | 'districts' | 'clients' }[] = [];

/** Derived helpers — you should not need to edit anything below this line. */

export const hasAddress =
  Boolean(CONTACT.address.locality) || Boolean(CONTACT.address.street);

export const addressOneLine = [
  CONTACT.address.street,
  CONTACT.address.locality,
  CONTACT.address.region,
  CONTACT.address.postalCode,
]
  .filter(Boolean)
  .join(', ');

export const socialLinks = Object.entries(SOCIAL)
  .filter(([, href]) => Boolean(href))
  .map(([network, href]) => ({ network, href }));

/** Keeps a stubbed address out of the site and the structured data. */
export function isPlaceholderEmail(): boolean {
  return !CONTACT.email || CONTACT.email.includes('example');
}

/** Builds a mailto: link with an optional pre-filled subject line. */
export function emailLink(subject?: string): string {
  const base = `mailto:${CONTACT.email}`;
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
}
