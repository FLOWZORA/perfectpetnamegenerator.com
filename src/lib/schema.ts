/** JSON-LD builders. Kept in one place so every page emits consistent shapes. */
import { DEFAULT_LOCALE, LOCALES, localeOf, pathFor, type Lang, type RouteKey } from '../i18n/config';

export const SITE_URL = 'https://perfectpetnamegenerator.com';
export const SITE_NAME = 'Perfect Pet Name Generator';
export const SITE_EMAIL = 'hello@perfectpetnamegenerator.com';

export interface FaqItem {
  question: string;
  /** Plain text. Answers state their conclusion in the first sentence. */
  answer: string;
}

const absolute = (lang: Lang, key: RouteKey) => `${SITE_URL}${pathFor(lang, key)}`;

/**
 * No WebApplication/SoftwareApplication schema. Google's Software App rich
 * result requires `offers.price` plus an `aggregateRating` or `review`, and
 * this site has no rating system; a partial implementation is only ever
 * reported as an invalid item, and a fabricated rating risks a manual action.
 */
export function faqSchema(items: FaqItem[], lang: Lang = DEFAULT_LOCALE) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: localeOf(lang).htmlLang,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

/** Trail entries name a route key; the localised URL is resolved from it. */
export function breadcrumbSchema(
  trail: { name: string; key: RouteKey }[],
  lang: Lang = DEFAULT_LOCALE
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: absolute(lang, crumb.key),
    })),
  };
}

/**
 * The WebSite entity, homepage only. Separate from the Organization node and
 * linked to it by @id, so the site and its publisher are one connected graph
 * rather than two loose facts.
 *
 * No `potentialAction`/SearchAction: that markup describes a site search
 * results URL, and this site has no search page to point one at.
 */
export function websiteSchema(lang: Lang = DEFAULT_LOCALE) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    inLanguage: localeOf(lang).htmlLang,
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/og/default.png`,
    email: SITE_EMAIL,
    description:
      'An independent, free pet naming resource: dog and cat names with documented meanings, ' +
      'browser-based pronunciation, and a phonetic check against training commands.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: SITE_EMAIL,
      url: `${SITE_URL}${pathFor(DEFAULT_LOCALE, 'contact')}`,
      availableLanguage: LOCALES.map((locale) => locale.htmlLang),
    },
  };
}

/**
 * The four written guides. Not generator pages: they are articles, and Google
 * expects an Article node with real publication dates on them.
 *
 * Dates are hard-coded rather than taken from file mtimes. A build timestamp
 * would claim every guide was revised on every deploy, which is the same lie
 * the sitemap deliberately avoids telling.
 */
export interface ArticleDates {
  published: string;
  modified: string;
}

export function articleSchema(
  {
    headline,
    description,
    key,
    dates,
    lang = DEFAULT_LOCALE,
  }: {
    headline: string;
    description: string;
    key: RouteKey;
    dates: ArticleDates;
    lang?: Lang;
  }
) {
  const url = absolute(lang, key);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    inLanguage: localeOf(lang).htmlLang,
    datePublished: dates.published,
    dateModified: dates.modified,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    author: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    isAccessibleForFree: true,
  };
}
