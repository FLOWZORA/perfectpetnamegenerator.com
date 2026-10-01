/**
 * Locale table and URL helpers.
 *
 * The single source of truth is routes.json, which astro.config.mjs also reads
 * (with readFileSync, so no bundler behaviour is assumed at config-load time).
 * Keeping the slugs in one file is what stops the sitemap, the hreflang tags
 * and the generated routes from drifting apart.
 *
 * English is the default locale and lives at the root: "/dog-names/". Every
 * other locale is prefixed and may use a translated slug:
 * "/es/nombres-de-perros/".
 */
import table from './routes.json';

export interface Locale {
  /** hreflang value and URL prefix. */
  code: string;
  htmlLang: string;
  ogLocale: string;
  /** Endonym, shown in the language picker. */
  label: string;
  dir: 'ltr' | 'rtl';
}

export const LOCALES = table.locales as Locale[];
export const DEFAULT_LOCALE = table.defaultLocale;

export type Lang = string;
/** Route identity, stable across languages. Slugs vary; these keys do not. */
export type RouteKey = keyof typeof table.routes;

const ROUTES = table.routes as Record<string, Record<string, string>>;

export const ROUTE_KEYS = Object.keys(ROUTES) as RouteKey[];
export const LANGS = LOCALES.map((l) => l.code);
/** Every locale except the default, i.e. the ones that get a URL prefix. */
export const PREFIXED_LANGS = LANGS.filter((code) => code !== DEFAULT_LOCALE);

const LOCALE_BY_CODE = new Map(LOCALES.map((l) => [l.code, l]));

export function localeOf(lang: Lang): Locale {
  return LOCALE_BY_CODE.get(lang) ?? LOCALE_BY_CODE.get(DEFAULT_LOCALE)!;
}

export function isLang(value: string): boolean {
  return LOCALE_BY_CODE.has(value);
}

/** Slug for a route in one language, without slashes. Empty for the homepage. */
export function slugFor(lang: Lang, key: RouteKey): string {
  const row = ROUTES[key];
  return row?.[lang] ?? row?.[DEFAULT_LOCALE] ?? '';
}

/**
 * Absolute site path, with leading and trailing slash, e.g. "/es/contacto/".
 * The site is built with trailingSlash: 'always', so every path here has one.
 */
export function pathFor(lang: Lang, key: RouteKey): string {
  const prefix = lang === DEFAULT_LOCALE ? '' : `/${lang}`;
  const slug = slugFor(lang, key);
  return `${prefix}/${slug ? `${slug}/` : ''}` || '/';
}

/** Every language's URL for one route, for hreflang and the language picker. */
export function alternatesFor(key: RouteKey): { lang: Lang; path: string; locale: Locale }[] {
  return LOCALES.map((locale) => ({
    lang: locale.code,
    path: pathFor(locale.code, key),
    locale,
  }));
}

/**
 * Language of a URL, from its first path segment. Used by components that are
 * rendered outside a page's own props (nothing relies on it today, but the
 * header would break silently without it if a page forgot to pass `lang`).
 */
export function getLangFromUrl(url: URL): Lang {
  const first = url.pathname.split('/').filter(Boolean)[0];
  return first && isLang(first) ? first : DEFAULT_LOCALE;
}

/** Route a pathname belongs to, or null if it is not one of ours (404, 500). */
export function getRouteKeyFromPath(pathname: string): RouteKey | null {
  const segments = pathname.split('/').filter(Boolean);
  const lang = segments[0] && isLang(segments[0]) ? segments.shift()! : DEFAULT_LOCALE;
  const slug = segments.join('/');
  for (const key of ROUTE_KEYS) {
    if (slugFor(lang, key) === slug) return key;
  }
  return null;
}

/** Locale-aware thousands separators, so counts read naturally in prose. */
export function formatNumber(value: number, lang: Lang): string {
  return value.toLocaleString(localeOf(lang).htmlLang);
}
