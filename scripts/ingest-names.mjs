/**
 * Merges pipe-delimited name batches into src/data/pet-name-data.json.
 *
 * Batch line format:  Name|gender|species|styles|meaning
 *   gender  m | f | n
 *   species d | c | b   (dog only, cat only, both)
 *   styles  comma-separated, from STYLES below
 *
 * Blank lines and lines starting with # are ignored.
 * Run: node scripts/ingest-names.mjs <batch-dir>
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const target = path.join(root, 'src/data/pet-name-data.json');
const batchDir = process.argv[2];
if (!batchDir) throw new Error('usage: node scripts/ingest-names.mjs <batch-dir>');

const STYLES = new Set([
  'cute', 'funny', 'strong', 'elegant', 'classic',
  'mythical', 'fantasy', 'food', 'unique', 'modern',
]);
const GENDER = { m: 'male', f: 'female', n: 'neutral' };

const data = JSON.parse(await readFile(target, 'utf8'));
const seen = {
  dog: new Map(data.dog_names.map((n) => [n.name.toLowerCase(), n])),
  cat: new Map(data.cat_names.map((n) => [n.name.toLowerCase(), n])),
};

const errors = [];
let added = { dog: 0, cat: 0 };
let dupes = 0;

const files = (await readdir(batchDir)).filter((f) => f.endsWith('.txt')).sort();
for (const file of files) {
  const text = await readFile(path.join(batchDir, file), 'utf8');
  text.split(/\r?\n/).forEach((raw, i) => {
    const line = raw.trim();
    if (!line || line.startsWith('#')) return;
    const where = `${file}:${i + 1}`;
    const parts = line.split('|');
    if (parts.length !== 5) return errors.push(`${where}: expected 5 fields, got ${parts.length} — "${line}"`);
    const [name, g, sp, styleStr, meaning] = parts.map((p) => p.trim());

    if (!/^[A-Z][A-Za-z'’. -]*$/.test(name)) errors.push(`${where}: bad name "${name}"`);
    if (!GENDER[g]) errors.push(`${where}: bad gender "${g}"`);
    if (!'dcb'.includes(sp) || sp.length !== 1) errors.push(`${where}: bad species "${sp}"`);
    if (!meaning || meaning.length < 8) errors.push(`${where}: meaning too short for "${name}"`);
    if (/\.$/.test(meaning)) errors.push(`${where}: meaning should not end in a period ("${name}")`);

    const styles = styleStr.split(',').map((s) => s.trim()).filter(Boolean);
    if (!styles.length) errors.push(`${where}: no styles for "${name}"`);
    for (const s of styles) if (!STYLES.has(s)) errors.push(`${where}: unknown style "${s}" on "${name}"`);
    if (errors.length) return;

    const entry = { name, gender: GENDER[g], styles, meaning };
    for (const species of sp === 'b' ? ['dog', 'cat'] : sp === 'd' ? ['dog'] : ['cat']) {
      const key = name.toLowerCase();
      if (seen[species].has(key)) { dupes++; continue; }
      seen[species].set(key, entry);
      data[`${species}_names`].push(entry);
      added[species]++;
    }
  });
}

if (errors.length) {
  console.error(`\n${errors.length} problem(s) — nothing written:`);
  for (const e of errors.slice(0, 40)) console.error('  ✗ ' + e);
  process.exit(1);
}

for (const key of ['dog_names', 'cat_names']) {
  data[key].sort((a, b) => a.name.localeCompare(b.name, 'en'));
}
data._meta.expansion_note =
  `${data.dog_names.length} dog names and ${data.cat_names.length} cat names, covering every style category so filters return meaningful results.`;

await writeFile(target, JSON.stringify(data, null, 2) + '\n');
console.log(`ingest: +${added.dog} dog, +${added.cat} cat (${dupes} duplicate(s) skipped)`);
console.log(`totals: ${data.dog_names.length} dog, ${data.cat_names.length} cat, ${data.dog_names.length + data.cat_names.length} entries`);
