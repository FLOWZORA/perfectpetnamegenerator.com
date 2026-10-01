/**
 * Server-side lookup for translated name meanings.
 *
 * The generator's client controller reads its meanings from the per-locale
 * payloads that build-data.mjs writes (public/data/<lang>/…). The starter names
 * baked into the page and the style showcases on the dog/cat pages are rendered
 * at build time, so they resolve their translations here instead, from the same
 * src/data/meanings/_parts/ chunks.
 *
 * Any meaning without a translation yet falls back to the English string.
 */
import { DEFAULT_LOCALE, type Lang } from '../i18n/config';

const parts = import.meta.glob<{ default: Record<string, string> }>(
  '../data/meanings/_parts/*.json',
  { eager: true }
);

const byLang = new Map<string, Record<string, string>>();
for (const [file, mod] of Object.entries(parts)) {
  const lang = file.slice(file.lastIndexOf('/') + 1).split('.')[0];
  byLang.set(lang, Object.assign(byLang.get(lang) ?? {}, mod.default));
}

/** The meaning string in `lang`, or the original if there is no translation. */
export function meaningIn(meaning: string, lang: Lang): string {
  if (lang === DEFAULT_LOCALE) return meaning;
  return byLang.get(lang)?.[meaning] ?? meaning;
}
