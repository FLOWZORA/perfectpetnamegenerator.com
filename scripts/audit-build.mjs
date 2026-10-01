/**
 * Post-build audit of dist/: SEO tags, structured data, internal links and a
 * few accessibility invariants that are easy to regress.
 *
 * Run: npm run audit   (after npm run build)
 */
import { readFile, readdir, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');

const problems = [];
const notes = [];

/* Locale table drives the hreflang expectations, so adding a language to
   routes.json extends this audit automatically. */
const table = JSON.parse(
  await readFile(path.join(root, 'src/i18n/routes.json'), 'utf8')
);
const localeCodes = new Set(table.locales.map((l) => l.code));
const expectedHreflang = new Set([...localeCodes, 'x-default']);
const origin = 'https://perfectpetnamegenerator.com';
const hreflangGroups = [];
const fail = (page, msg) => problems.push(`${page}: ${msg}`);

async function htmlFiles(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await htmlFiles(full)));
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

const pages = await htmlFiles(dist);
const routes = new Set(
  pages.map((f) => {
    const rel = path.relative(dist, f).replace(/\\/g, '/');
    return rel === 'index.html' ? '/' : '/' + rel.replace(/index\.html$/, '').replace(/\.html$/, '/');
  })
);

const meta = (html, attr, value) => {
  const re = new RegExp(`<meta[^>]*${attr}=["']${value}["'][^>]*content=["']([^"']*)["']`, 'i');
  const alt = new RegExp(`<meta[^>]*content=["']([^"']*)["'][^>]*${attr}=["']${value}["']`, 'i');
  return html.match(re)?.[1] ?? html.match(alt)?.[1] ?? null;
};

console.log(`\nAuditing ${pages.length} built pages\n${'-'.repeat(60)}`);

for (const file of pages) {
  const html = await readFile(file, 'utf8');
  const route = path.relative(dist, file).replace(/\\/g, '/');
  const isNotFound = route === '404.html';

  /* --- title / description --- */
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
  const desc = meta(html, 'name', 'description');
  if (!title) fail(route, 'no <title>');
  else if (title.length > 60) fail(route, `title is ${title.length} chars (>60): "${title}"`);
  if (!desc) fail(route, 'no meta description');
  else if (desc.length > 160) fail(route, `description is ${desc.length} chars (>160)`);

  /* --- canonical --- */
  const canonical = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/)?.[1];
  if (!canonical) fail(route, 'no canonical link');

  /* --- Open Graph + Twitter --- */
  const required = {
    'og:title': meta(html, 'property', 'og:title'),
    'og:description': meta(html, 'property', 'og:description'),
    'og:url': meta(html, 'property', 'og:url'),
    'og:image': meta(html, 'property', 'og:image'),
    'og:image:width': meta(html, 'property', 'og:image:width'),
    'og:image:height': meta(html, 'property', 'og:image:height'),
    'og:type': meta(html, 'property', 'og:type'),
    'og:locale': meta(html, 'property', 'og:locale'),
    'og:site_name': meta(html, 'property', 'og:site_name'),
    'twitter:card': meta(html, 'name', 'twitter:card'),
    'twitter:title': meta(html, 'name', 'twitter:title'),
    'twitter:description': meta(html, 'name', 'twitter:description'),
    'twitter:image': meta(html, 'name', 'twitter:image'),
  };
  for (const [key, value] of Object.entries(required)) {
    if (!value) fail(route, `missing ${key}`);
  }
  if (required['twitter:card'] && required['twitter:card'] !== 'summary_large_image') {
    fail(route, `twitter:card is "${required['twitter:card']}", expected summary_large_image`);
  }
  if (required['og:image'] && !required['og:image'].startsWith('https://')) {
    fail(route, 'og:image is not an absolute URL');
  }
  if (required['og:image:width'] !== '1200' || required['og:image:height'] !== '630') {
    fail(route, 'og:image dimensions are not 1200x630');
  }

  /* --- headings --- */
  const h1s = html.match(/<h1[\s>]/g)?.length ?? 0;
  if (h1s !== 1) fail(route, `${h1s} <h1> elements (expected exactly 1)`);

  /* --- selects need a label --- */
  for (const tag of html.match(/<select[^>]*>/g) ?? []) {
    const id = tag.match(/id=["']([^"']+)["']/)?.[1];
    const hasAria = /aria-label=|aria-labelledby=/.test(tag);
    const hasLabel = id && new RegExp(`<label[^>]*for=["']${id}["']`).test(html);
    if (!hasAria && !hasLabel) fail(route, `<select> without a label: ${tag}`);
  }

  /* --- images need alt --- */
  for (const tag of html.match(/<img[^>]*>/g) ?? []) {
    if (!/alt=/.test(tag)) fail(route, `<img> without alt: ${tag.slice(0, 60)}`);
  }

  /* --- structured data --- */
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  const parsed = [];
  for (const [, raw] of schemas) {
    try {
      parsed.push(JSON.parse(raw));
    } catch (error) {
      fail(route, `invalid JSON-LD: ${error.message}`);
    }
  }
  const types = parsed.map((s) => s['@type']);

  if (/id="faq-heading"/.test(html) && !types.includes('FAQPage')) {
    fail(route, 'has FAQ content but no FAQPage schema');
  }
  const faq = parsed.find((s) => s['@type'] === 'FAQPage');
  if (faq) {
    const questionsInSchema = faq.mainEntity.length;
    const questionsInHtml = (html.match(/<summary/g) ?? []).length;
    if (questionsInSchema !== questionsInHtml) {
      fail(route, `FAQPage has ${questionsInSchema} questions but page shows ${questionsInHtml}`);
    }
    for (const entry of faq.mainEntity) {
      if (!entry.name || !entry.acceptedAnswer?.text) fail(route, 'FAQPage entry missing name/answer');
    }
  }

  /* No WebApplication/SoftwareApplication schema: Google's Software App rich
     result needs offers.price plus aggregateRating or review, and this site
     has no ratings, so a partial WebApplication only ever validates as an
     invalid item. Fail the build if one is reintroduced without a rating. */
  const app = parsed.find(
    (s) => s['@type'] === 'WebApplication' || s['@type'] === 'SoftwareApplication'
  );
  if (app && !app.aggregateRating && !app.review) {
    fail(route, `${app['@type']} schema without aggregateRating/review is an invalid item`);
  }

  /* --- internal links resolve --- */
  for (const [, href] of html.matchAll(/<a[^>]*href=["'](\/[^"'#?]*)["']/g)) {
    if (href.startsWith('/fonts/') || href.startsWith('/data/') || href.startsWith('/og/')) continue;
    if (!routes.has(href)) fail(route, `internal link 404: ${href}`);
  }

  /* --- render-blocking third-party resources ---
     canonical/og URLs are absolute by design; only fetched subresources count. */
  for (const [tag] of html.matchAll(/<link[^>]*>/g)) {
    const rel = tag.match(/rel=["']([^"']+)["']/)?.[1] ?? '';
    const href = tag.match(/href=["'](https?:\/\/[^"']+)["']/)?.[1];
    if (href && /stylesheet|preconnect|dns-prefetch|preload/.test(rel)) {
      fail(route, `external ${rel} resource: ${href}`);
    }
  }
  for (const [, url] of html.matchAll(/<script[^>]*src=["'](https?:\/\/[^"']+)["']/g)) {
    fail(route, `external script: ${url}`);
  }

  /* --- hreflang ---
     Every translated page must list every language in the set including
     itself, plus x-default, and each target must actually exist in dist. A
     one-way or dangling annotation is silently ignored by Google, so it is
     worth failing the build over. */
  const alts = [
    ...html.matchAll(
      /<link[^>]*rel=["']alternate["'][^>]*hreflang=["']([^"']+)["'][^>]*href=["']([^"']+)["']/g
    ),
  ].map(([, lang, href]) => ({ lang, href }));

  const noindex = /<meta[^>]*name=["']robots["'][^>]*noindex/i.test(html);
  if (!noindex) {
    const langs = alts.map((a) => a.lang);
    const missing = [...expectedHreflang].filter((l) => !langs.includes(l));
    if (missing.length) fail(route, `missing hreflang: ${missing.join(', ')}`);
    const dupes = langs.filter((l, i) => langs.indexOf(l) !== i);
    if (dupes.length) fail(route, `duplicate hreflang: ${[...new Set(dupes)].join(', ')}`);

    for (const alt of alts) {
      if (!alt.href.startsWith(origin)) {
        fail(route, `hreflang ${alt.lang} is not an absolute site URL: ${alt.href}`);
        continue;
      }
      const target = alt.href.slice(origin.length);
      if (!routes.has(target)) fail(route, `hreflang ${alt.lang} 404s: ${target}`);
    }

    // Self-reference: the page's own canonical must appear in its own set.
    if (canonical && !alts.some((a) => a.href === canonical && a.lang !== 'x-default')) {
      fail(route, 'hreflang set does not include a self-reference to the canonical URL');
    }

    hreflangGroups.push({ route, set: alts.map((a) => `${a.lang} ${a.href}`).sort() });
  } else if (alts.length) {
    fail(route, 'noindex page should not carry hreflang annotations');
  }

  /* --- html lang matches the URL's locale --- */
  const htmlLang = html.match(/<html[^>]*lang=["']([^"']+)["']/)?.[1];
  const urlLocale = route.split('/')[0];
  const expectedLang = localeCodes.has(urlLocale) ? urlLocale : 'en';
  if (htmlLang !== expectedLang) {
    fail(route, `<html lang="${htmlLang}"> but the URL sits under "${expectedLang}"`);
  }

  if (!isNotFound) {
    notes.push(
      `  ${route.padEnd(28)} title ${String(title.length).padStart(2)}  desc ${String(desc?.length ?? 0).padStart(3)}  schema: ${types.join(', ') || 'none'}`
    );
  }
}

/* --- hreflang reciprocity ---
   Pages in one translation group must all publish the identical set. If two
   differ, at least one points somewhere the others do not agree with. */
const groups = new Map();
for (const entry of hreflangGroups) {
  const key = entry.set.join('|');
  if (!groups.has(key)) groups.set(key, []);
  groups.get(key).push(entry.route);
}
const expectedGroupCount = Object.keys(table.routes).length;
if (groups.size !== expectedGroupCount) {
  fail(
    'hreflang',
    `expected ${expectedGroupCount} translation groups, found ${groups.size} distinct sets`
  );
}
for (const [, members] of groups) {
  if (members.length !== localeCodes.size) {
    fail(
      'hreflang',
      `group has ${members.length} pages, expected ${localeCodes.size}: ${members.join(', ')}`
    );
  }
}
notes.push(
  `  hreflang: ${groups.size} groups x ${localeCodes.size} languages, all reciprocal`
);

/* --- shared asset checks --- */
const fontPreload = await readFile(path.join(dist, 'index.html'), 'utf8');
if (!/rel=["']preload["'][^>]*fonts\/[^"']+\.woff2/.test(fontPreload)) {
  fail('index.html', 'font is not preloaded');
}
const css = (await readdir(path.join(dist, '_astro'))).filter((f) => f.endsWith('.css'));
for (const file of css) {
  const text = await readFile(path.join(dist, '_astro', file), 'utf8');
  if (text.includes('@font-face') && !text.includes('font-display:swap')) {
    fail(file, '@font-face without font-display: swap');
  }
}
try {
  const og = await stat(path.join(dist, 'og/default.png'));
  notes.push(`  og image: ${(og.size / 1024).toFixed(0)} KB`);
} catch {
  fail('og', 'public/og/default.png missing');
}

console.log(notes.join('\n'));
console.log('-'.repeat(60));
if (problems.length) {
  console.log(`\n${problems.length} problem(s):`);
  for (const p of problems) console.log(`  ✗ ${p}`);
  process.exit(1);
}
console.log('\nAll checks passed.\n');
