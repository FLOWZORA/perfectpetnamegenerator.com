/**
 * Checks every translation against en.ts, the reference dictionary.
 *
 * The compiler already guarantees the *shape* matches (Dict is derived from
 * en.ts). What it cannot see is the content of the strings, which is where
 * translation actually goes wrong:
 *
 *   - a dropped {{placeholder}}, so a page renders "names" with no number
 *   - a translated {{url:dog}} key, which would resolve to nothing
 *   - a <title> over 60 chars or a description over 160, which the build
 *     audit only catches after a full render
 *   - unbalanced markup in a *Html string
 *
 * Run: npm run i18n
 */
import { readFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const uiDir = path.join(root, 'src/i18n/ui');

const TITLE_MAX = 60;
const DESC_MAX = 160;

const problems = [];
const fail = (lang, msg) => problems.push(`${lang}: ${msg}`);

/**
 * The dictionaries are plain object literals with no type annotations, so
 * rewriting the two module lines is enough to evaluate one as data.
 */
async function load(file) {
  const src = await readFile(file, 'utf8');
  const body = src
    .replace(/^\s*import\b.*$/gm, '')
    .replace(/^\s*const\s+\w+\s*=\s*\{/m, 'return {')
    .replace(/^\s*export\s+default\s+\w+;\s*$/m, '');
  if (!/\breturn \{/.test(body)) return null; // a stub re-exporting en
  return new Function(body)();
}

/** Every leaf string, keyed by its dotted path. */
function flatten(node, prefix = '', out = new Map()) {
  if (typeof node === 'string') {
    out.set(prefix, node);
    return out;
  }
  if (Array.isArray(node)) {
    node.forEach((item, i) => flatten(item, `${prefix}[${i}]`, out));
    return out;
  }
  if (node && typeof node === 'object') {
    for (const [key, value] of Object.entries(node)) {
      flatten(value, prefix ? `${prefix}.${key}` : key, out);
    }
  }
  return out;
}

const placeholders = (text) => (text.match(/\{\{[^}]+\}\}/g) ?? []).sort();
const tags = (text) => (text.match(/<\/?([a-z][a-z0-9]*)\b/gi) ?? []).map((t) => t.toLowerCase());

const files = (await readdir(uiDir)).filter((f) => f.endsWith('.ts'));
const en = flatten(await load(path.join(uiDir, 'en.ts')));

console.log(`\nChecking ${files.length - 1} translations against en.ts\n${'-'.repeat(60)}`);

for (const file of files.sort()) {
  const lang = path.basename(file, '.ts');
  if (lang === 'en') continue;

  const raw = await load(path.join(uiDir, file));
  if (!raw) {
    fail(lang, 'is a stub that re-exports English, not a translation');
    continue;
  }
  const dict = flatten(raw);
  const untranslated = [];

  for (const [key, reference] of en) {
    const value = dict.get(key);
    if (value === undefined) {
      fail(lang, `missing key: ${key}`);
      continue;
    }

    /* --- placeholders must survive translation verbatim --- */
    const want = placeholders(reference);
    const got = placeholders(value);
    if (want.join(',') !== got.join(',')) {
      fail(lang, `${key}: placeholders ${JSON.stringify(want)} became ${JSON.stringify(got)}`);
    }

    /* --- markup must survive too: same tags, same order --- */
    const wantTags = tags(reference);
    const gotTags = tags(value);
    if (wantTags.join(',') !== gotTags.join(',')) {
      fail(lang, `${key}: HTML tags differ from en (${wantTags.length} vs ${gotTags.length})`);
    }

    /* --- FAQ answers land in JSON-LD, so they must stay plain text --- */
    if (/\.faqs\[\d+\]\.a$/.test(key) && /<[a-z]/i.test(value)) {
      fail(lang, `${key}: FAQ answers must be plain text (found markup)`);
    }

    // A long string identical to English is usually an untranslated leftover.
    // The brand name is the deliberate exception.
    if (value === reference && reference.length > 25 && !reference.includes('Perfect Pet Name')) {
      untranslated.push(key);
    }
  }

  /* --- SEO limits, checked here so a bad title never reaches a build --- */
  for (const [key, value] of dict) {
    if (/(^|\.)title$/.test(key) && value.length > TITLE_MAX) {
      fail(lang, `${key} is ${value.length} chars (>${TITLE_MAX}): "${value}"`);
    }
    if (/(^|\.)description$/.test(key) && value.length > DESC_MAX) {
      fail(lang, `${key} is ${value.length} chars (>${DESC_MAX})`);
    }
  }

  const status = untranslated.length
    ? `still English: ${untranslated.join(', ')}`
    : 'fully translated';
  console.log(`  ${lang.padEnd(4)} ${String(dict.size).padStart(3)} strings   ${status}`);
}

console.log('-'.repeat(60));
if (problems.length) {
  console.log(`\n${problems.length} problem(s):`);
  for (const p of problems) console.log(`  x ${p}`);
  process.exit(1);
}
console.log('\nAll translations consistent.\n');
