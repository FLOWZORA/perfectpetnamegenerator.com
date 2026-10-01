/**
 * Dictionary lookup and string interpolation.
 *
 * Translations are authored with two kinds of placeholder:
 *   {{url:dog}}  → resolved to the localised path for that route key, so a
 *                  translator never has to know what the Spanish slug is.
 *   {{total}}    → resolved from the `vars` a view passes in (counts, year…).
 *
 * An unknown {{var}} is left in place rather than blanked: a visible token in
 * a preview is easier to spot than a silently missing number.
 */
import { DEFAULT_LOCALE, pathFor, type Lang, type RouteKey } from './config';
import en from './ui/en';
import es from './ui/es';
import fr from './ui/fr';
import de from './ui/de';
import pt from './ui/pt';
import it from './ui/it';

export type Dict = typeof en;

const DICTS: Record<string, Dict> = { en, es, fr, de, pt, it };

export function useTranslations(lang: Lang): Dict {
  return DICTS[lang] ?? DICTS[DEFAULT_LOCALE]!;
}

export type Vars = Record<string, string | number>;

export function fill(template: string, lang: Lang, vars: Vars = {}): string {
  return template
    .replace(/\{\{url:(\w+)\}\}/g, (_, key: string) => pathFor(lang, key as RouteKey))
    .replace(/\{\{(\w+)\}\}/g, (whole, key: string) =>
      key in vars ? String(vars[key]) : whole
    );
}

/** `fill` with the language and page-level variables already bound. */
export function formatter(lang: Lang, vars: Vars = {}) {
  return (template: string, extra: Vars = {}) =>
    fill(template, lang, extra === vars ? vars : { ...vars, ...extra });
}
