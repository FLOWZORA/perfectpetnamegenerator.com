/**
 * Shared name-database counts, so page copy never drifts from the data.
 *
 * A name that suits both species is stored once per species, so the two
 * arrays overlap. `total` is the honest headline figure; `dogCount` and
 * `catCount` are what each species filter actually draws from.
 *
 * Everything is formatted for the requested language, because a four-figure
 * count reads as "1,470" in English and "1.470" in German.
 */
import data from '../data/pet-name-data.json';
import { formatNumber, localeOf, type Lang } from '../i18n/config';
import { SITE_EMAIL } from './schema';

/** Date the privacy policy and terms were last revised. */
const LAST_UPDATED = new Date('2026-09-10T00:00:00Z');

const unique = (...lists: { name: string }[][]) =>
  new Set(lists.flat().map((n) => n.name)).size;

const uniqueByStyle = (style: string) =>
  unique(
    data.dog_names.filter((n) => n.styles.includes(style)),
    data.cat_names.filter((n) => n.styles.includes(style))
  );

/** Style chips offered in the generator UI. */
export const STYLE_COUNT = 10;

/**
 * Every `{{placeholder}}` a translated string may reference. Passed straight
 * into `formatter(lang, vars)` by each view.
 */
export function contentVars(lang: Lang): Record<string, string | number> {
  const n = (value: number) => formatNumber(value, lang);
  return {
    total: n(unique(data.dog_names, data.cat_names)),
    dogCount: n(data.dog_names.length),
    catCount: n(data.cat_names.length),
    fantasyCount: n(uniqueByStyle('fantasy')),
    funnyCount: n(uniqueByStyle('funny')),
    styleCount: n(STYLE_COUNT),
    dogCommandCount: n(data.common_dog_commands.length),
    catCueCount: n(data.common_cat_commands_or_sounds.length),
    dogCommands: data.common_dog_commands.join(', '),
    dogCommandsShort: data.common_dog_commands.slice(0, 6).join(', '),
    catCues: data.common_cat_commands_or_sounds.join(', '),
    year: new Date().getFullYear(),
    email: SITE_EMAIL,
    updated: LAST_UPDATED.toLocaleDateString(localeOf(lang).htmlLang, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    }),
  };
}
