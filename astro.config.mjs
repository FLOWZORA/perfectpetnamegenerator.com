// @ts-check
import { readFileSync, statSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * routes.json is the single source of truth for locales and slugs. It is read
 * here with readFileSync rather than imported, because integration config is
 * evaluated before the bundler exists and a JSON import would be a gamble.
 * src/i18n/config.ts reads the same file, so the sitemap, the hreflang tags
 * and the generated routes cannot drift apart.
 */
const table = JSON.parse(
  readFileSync(new URL('./src/i18n/routes.json', import.meta.url), 'utf8')
);
const { defaultLocale, locales, routes } = table;

/** Mirror of pathFor() in src/i18n/config.ts. */
const pathFor = (lang, key) => {
  const prefix = lang === defaultLocale ? '' : `/${lang}`;
  const slug = routes[key][lang] ?? routes[key][defaultLocale];
  return `${prefix}/${slug ? `${slug}/` : ''}` || '/';
};

/**
 * Per-route lastmod, taken from the mtimes of the sources that actually
 * produce a page: its view, the locale's copy file, the route table, and -
 * for the four generator pages, whose copy quotes live name counts - the name
 * data itself.
 *
 * Deliberately NOT `new Date()`. A build-time timestamp claims every one of
 * the 72 URLs changed on every deploy, which is false; Google's documented
 * response to lastmod it cannot trust is to ignore the field site-wide, so a
 * blanket timestamp costs the recrawl hint it was meant to provide. Shared
 * chrome (BaseLayout, Header, Footer) is excluded on purpose: a nav or footer
 * tweak is not a content change worth re-dating all 72 pages for.
 */
const VIEW_OF = {
  home: 'Home',
  dog: 'Dog',
  cat: 'Cat',
  pet: 'Pet',
  teach: 'Guide',
  avoid: 'Guide',
  pairs: 'Guide',
  meanings: 'Guide',
  about: 'About',
  contact: 'Contact',
  privacy: 'Privacy',
  terms: 'Terms',
};
const COUNTS_IN_COPY = new Set(['home', 'dog', 'cat', 'pet']);

const mtime = (relative) =>
  statSync(new URL(relative, import.meta.url)).mtime.getTime();

const lastmodFor = (lang, key) => {
  const sources = [
    `./src/views/${VIEW_OF[key]}.astro`,
    `./src/i18n/ui/${lang}.ts`,
    './src/i18n/routes.json',
  ];
  if (COUNTS_IN_COPY.has(key)) sources.push('./src/data/pet-name-data.json');
  return new Date(Math.max(...sources.map(mtime)));
};

const PRIORITY = {
  home: 1.0,
  dog: 0.9,
  cat: 0.9,
  pet: 0.9,
  teach: 0.7,
  avoid: 0.7,
  pairs: 0.7,
  meanings: 0.6,
  about: 0.5,
  contact: 0.5,
  privacy: 0.3,
  terms: 0.3,
};

/**
 * Every localised path mapped to its route key and to the full set of
 * hreflang alternates for that route. Google wants each URL in the set to
 * list every URL in the set, itself included, plus x-default.
 */
const byPath = new Map();
for (const key of Object.keys(routes)) {
  const links = [
    ...locales.map((locale) => ({
      lang: locale.code,
      url: pathFor(locale.code, key),
    })),
    { lang: 'x-default', url: pathFor(defaultLocale, key) },
  ];
  for (const locale of locales) {
    byPath.set(pathFor(locale.code, key), {
      key,
      links,
      lastmod: lastmodFor(locale.code, key),
    });
  }
}

export default defineConfig({
  site: 'https://perfectpetnamegenerator.com',
  output: 'static',
  trailingSlash: 'always',
  // The whole stylesheet is ~27 KB (~6 KB over the wire) and single-file, so
  // inlining it into every page removes one render-blocking request on the
  // critical path. Cheaper than a round-trip for a site this small; the tiny
  // per-page duplication is well worth the faster first paint.
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      changefreq: 'monthly',
      // Required for the <xhtml:link rel="alternate" hreflang> entries below.
      namespaces: { xhtml: true },
      serialize(item) {
        const url = new URL(item.url);
        const entry = byPath.get(url.pathname);
        if (!entry) return item;
        return {
          ...item,
          lastmod: entry.lastmod,
          priority: PRIORITY[entry.key] ?? 0.3,
          links: entry.links.map((link) => ({
            lang: link.lang,
            url: new URL(link.url, url.origin).href,
          })),
        };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    // No legacy audience: this is a new site. Targeting current browsers keeps
    // esbuild from emitting down-level helpers and polyfill shims most visitors
    // will never need. es2022 is Baseline-wide (Chrome/Edge/Firefox/Safari all
    // shipped it by 2022).
    build: { cssCodeSplit: false, target: 'es2022' },
    esbuild: { target: 'es2022' },
  },
});
