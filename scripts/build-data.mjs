/**
 * Splits src/data/pet-name-data.json into per-species payloads in public/data/,
 * so the lazily-loaded generator fetches only the species it needs.
 *
 * For every non-English locale it also writes a local: public/data/<lang>/<species>.json,
 * identical to the English payload except that each name's `meaning` is replaced
 * with its translation from src/data/meanings/_parts/. Any meaning without a
 * translation yet falls back to the English string, so a partly-translated
 * locale still builds and reads sensibly.
 *
 * Run automatically by `npm run dev` and `npm run build` (prebuild).
 */
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = path.join(root, 'src/data/pet-name-data.json');
const partsDir = path.join(root, 'src/data/meanings/_parts');
const outDir = path.join(root, 'public/data');

/** Every locale except English (which stays at the un-prefixed path). */
const LOCALES = ['es', 'fr', 'de', 'pt', 'it'];

const data = JSON.parse(await readFile(src, 'utf8'));
await mkdir(outDir, { recursive: true });

const base = {
  dog: { species: 'dog', commands: data.common_dog_commands, names: data.dog_names },
  cat: { species: 'cat', commands: data.common_cat_commands_or_sounds, names: data.cat_names },
};

for (const [species, payload] of Object.entries(base)) {
  for (const n of payload.names) {
    if (!n.meaning) throw new Error(`Missing meaning for ${species} name "${n.name}" - refusing to build.`);
  }
  await writeFile(path.join(outDir, `${species}.json`), JSON.stringify(payload));
  console.log(`build-data: ${species}.json - ${payload.names.length} names, ${payload.commands.length} commands`);
}

/** Merge every _parts/<lang>.*.json chunk into one { english: translated } map. */
const partFiles = (await readdir(partsDir)).filter((f) => f.endsWith('.json'));
async function meaningDict(lang) {
  const dict = {};
  for (const file of partFiles.filter((f) => f.slice(0, f.indexOf('.')) === lang).sort()) {
    Object.assign(dict, JSON.parse(await readFile(path.join(partsDir, file), 'utf8')));
  }
  return dict;
}

for (const lang of LOCALES) {
  const dict = await meaningDict(lang);
  await mkdir(path.join(outDir, lang), { recursive: true });
  let translated = 0;
  let total = 0;
  for (const [species, payload] of Object.entries(base)) {
    const names = payload.names.map((n) => {
      total++;
      const hit = dict[n.meaning];
      if (hit) translated++;
      return { ...n, meaning: hit ?? n.meaning };
    });
    await writeFile(
      path.join(outDir, lang, `${species}.json`),
      JSON.stringify({ ...payload, names })
    );
  }
  const pct = Math.round((translated / total) * 100);
  console.log(`build-data: ${lang}/ - ${translated}/${total} meanings translated (${pct}%)`);
}
