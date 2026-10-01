/**
 * Runtime strings for the client controller.
 *
 * Generator.astro serialises the current page's `runtime` dictionary into the
 * section's data-png-i18n attribute, where the HTML escaping is the
 * template's job rather than ours. Reading it from the DOM keeps the
 * generator chunk byte-identical across all eight languages — only the small
 * JSON blob in the page differs — so a visitor switching language does not
 * re-download the controller.
 *
 * The English defaults below are a safety net, not a second translation: they
 * only surface if the blob is missing or unparseable, which would mean the
 * page is already broken.
 */
import type { ReasonKey } from './phonetics';

export interface RuntimeStrings {
  pronounce: string;
  pronounceAria: string;
  notSupported: string;
  bootError: string;

  conflictHtml: string;
  reasons: Record<ReasonKey, string>;

  dogBadge: string;
  catBadge: string;

  whyTogether: string;
  inStyle: string;
  matchedInStyle: string;
  joiner: string;

  finding: string;
  loadError: string;

  emptyHeading: string;
  emptyLead: string;
  emptyGeneric: string;
  emptyStartOver: string;
  emptyReasons: {
    gender: string;
    style: string;
    letter: string;
    length: string;
    shown: string;
    conflict: string;
    pair: string;
  };

  noSets: string;
  noMatches: string;
  setsStatus: string;
  pairOne: string;
  pairMany: string;
  setOne: string;
  setMany: string;

  statusNamesOne: string;
  statusNamesMany: string;
  statusHidden: string;
  statusFlagged: string;

  copied: string;
  copyBlocked: string;
  clearedShown: string;

  /** Card labels shared with the server-rendered starter names. */
  unisex: string;
  male: string;
  female: string;
  meaningLabel: string;

  styles: Record<string, string>;
  copyBatch: string;
}

const FALLBACK: RuntimeStrings = {
  pronounce: '🔊 Pronounce',
  pronounceAria: 'Hear {{name}} pronounced out loud',
  notSupported: 'Not supported here',
  bootError: 'The generator could not load. Please refresh the page.',
  conflictHtml: 'Training conflict: this name {{reason}}.',
  reasons: {
    same: 'is the same word as “{{word}}”',
    oneSound: 'is one sound away from “{{word}}”',
    veryClose: 'is very close to “{{word}}”',
    almostIdentical: 'sounds almost identical to “{{word}}”',
    rhymes: 'rhymes with “{{word}}”',
    similar: 'is similar to “{{word}}”',
  },
  dogBadge: 'Dog',
  catBadge: 'Cat',
  whyTogether:
    'Why these work together: {{style}}, {{lengths}} letters, different opening sounds, and not confusable with each other.',
  inStyle: '{{styles}} in style',
  matchedInStyle: 'matched in style',
  joiner: ' and ',
  finding: 'Finding names…',
  loadError: 'Could not load the name list. Check your connection and try again.',
  emptyHeading: 'No names matched those filters',
  emptyLead:
    'The narrowest filter here is {{reason}}. Widen that one first — the rest of your choices can stay.',
  emptyGeneric: 'Try removing one filter — the rest of your choices can stay.',
  emptyStartOver: 'Use “Start over” below to clear the already-shown list.',
  emptyReasons: {
    gender: 'the gender filter',
    style: 'that combination of styles',
    letter: 'the starting letter',
    length: 'the maximum name length',
    shown: '“exclude names already shown” — you have seen every match',
    conflict: 'the conflict filter, which removed every remaining match',
    pair: 'bonded-pair mode, which needs several compatible names to build a set',
  },
  noSets: 'No compatible sets for those filters.',
  noMatches: 'No matches.',
  setsStatus:
    '{{count}} {{word}} that sound good together and are not confusable with each other.',
  pairOne: 'pair',
  pairMany: 'pairs',
  setOne: 'set',
  setMany: 'sets',
  statusNamesOne: '1 name from {{pool}} matching your filters',
  statusNamesMany: '{{count}} names from {{pool}} matching your filters',
  statusHidden: '{{count}} hidden by the conflict filter',
  statusFlagged: '{{count}} flagged as a possible training clash',
  copied: 'Copied',
  copyBlocked: 'Copying is blocked in this browser — select the names manually.',
  clearedShown: 'Cleared the already-shown list. Every name is back in the pool.',
  unisex: 'Unisex',
  male: 'Male',
  female: 'Female',
  meaningLabel: 'Meaning:',
  styles: {},
  copyBatch: 'Copy this batch',
};

/** Reads the blob a Generator section carries. Falls back to English. */
export function readStrings(root: HTMLElement): RuntimeStrings {
  const raw = root.dataset.pngI18n;
  if (!raw) return FALLBACK;
  try {
    return { ...FALLBACK, ...(JSON.parse(raw) as RuntimeStrings) };
  } catch {
    return FALLBACK;
  }
}

/** Substitutes {{name}} placeholders. Unknown ones are left visible. */
export function fill(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (whole, key: string) =>
    key in vars ? String(vars[key]) : whole
  );
}
