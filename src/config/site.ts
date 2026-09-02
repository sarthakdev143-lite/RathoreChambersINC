/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH FOR BUSINESS DETAILS
 * ─────────────────────────────────────────────────────────────────────────────
 *  Every phone number, email, address and social link on the website is read
 *  from this file. Edit here and the whole site (including the SEO structured
 *  data that Google reads) updates.
 *
 *  Anything marked `TODO` is a placeholder. Replace it before going live.
 *  Leave a value as an empty string ('') to hide that item from the site.
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
   * TODO: Primary phone.
   *  - `e164`    : international format, digits + leading '+'. Used for tel: links.
   *  - `display` : how it is shown on screen. Format it however you like.
   */
  phone: {
    e164: '+919000000000',
    display: '+91 90000 00000',
  },

  /**
   * TODO: WhatsApp number — DIGITS ONLY, including country code, no '+' or spaces.
   * Example: Indian number 90000 00000 becomes '919000000000'.
   */
  whatsapp: '919000000000',

  /** TODO: your business email. */
  email: 'contact@rathorechambers.com',

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

export function isPlaceholderPhone(): boolean {
  return CONTACT.phone.e164 === '+919000000000' || (CONTACT.phone.e164 as string).includes('90000');
}
export function isPlaceholderWhatsapp(): boolean {
  return CONTACT.whatsapp === '919000000000' || (CONTACT.whatsapp as string).includes('90000');
}
export function isPlaceholderEmail(): boolean {
  return CONTACT.email === 'contact@rathorechambers.com' || (CONTACT.email as string).includes('example');
}

/** Builds a wa.me deep link with an optional pre-filled message. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${CONTACT.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
