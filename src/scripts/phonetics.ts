/**
 * Phonetic similarity used by the conflict filter and by bonded-pair mode.
 *
 * Two independent signals, because neither alone is enough:
 *   - Soundex catches same-sounding spellings ("Kai" / "Chi").
 *   - Levenshtein distance catches near-misses Soundex ignores because the
 *     first letter differs ("Bo" / "No", "Kit" / "Sit") - exactly the class of
 *     collision that matters for training, since a dog hears the vowel and the
 *     ending, not the spelling.
 *   - A rhyme check catches "Ray" / "Stay", which neither of the above flags.
 */

export type Severity = 'high' | 'medium';

/**
 * Why two words clash. A key rather than a sentence, so this module stays
 * free of display language; the UI looks the wording up in the page's
 * dictionary and fills in the clashing word.
 */
export type ReasonKey =
  | 'same'
  | 'oneSound'
  | 'veryClose'
  | 'almostIdentical'
  | 'rhymes'
  | 'similar';

export interface Conflict {
  severity: Severity;
  /** The avoid-list word or command that clashes. */
  against: string;
  /** Looked up in runtime.reasons to build the explanation shown in the UI. */
  reason: ReasonKey;
}

const VOWELS = 'aeiouy';

export function normalize(word: string): string {
  return word.toLowerCase().replace(/[^a-z]/g, '');
}

/** Standard American Soundex. */
export function soundex(word: string): string {
  const s = normalize(word);
  if (!s) return '';
  const code = (c: string): string => {
    if ('bfpv'.includes(c)) return '1';
    if ('cgjkqsxz'.includes(c)) return '2';
    if ('dt'.includes(c)) return '3';
    if (c === 'l') return '4';
    if ('mn'.includes(c)) return '5';
    if (c === 'r') return '6';
    return '';
  };
  let out = s[0].toUpperCase();
  let prev = code(s[0]);
  for (let i = 1; i < s.length && out.length < 4; i++) {
    const c = s[i];
    const digit = code(c);
    if (digit && digit !== prev) out += digit;
    // h and w are transparent: they do not reset the previous code.
    if (c !== 'h' && c !== 'w') prev = digit;
  }
  return out.padEnd(4, '0');
}

/** Levenshtein edit distance (iterative, two-row). */
export function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  let curr = new Array<number>(b.length + 1);
  for (let i = 1; i <= a.length; i++) {
    curr[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost);
    }
    [prev, curr] = [curr, prev];
  }
  return prev[b.length];
}

/**
 * Trailing rhyme unit: the final vowel cluster onward.
 * "stay" -> "ay", "brown" -> "own", "bandit" -> "it".
 * Anchoring on the START of the last vowel cluster (not the last vowel) keeps
 * "stay" and "ray" comparable, which a last-vowel scan misses because of the
 * trailing y.
 */
function rhymeTail(word: string): string {
  let start = -1;
  for (let i = 0; i < word.length; i++) {
    const isVowel = VOWELS.includes(word[i]);
    const prevIsVowel = i > 0 && VOWELS.includes(word[i - 1]);
    if (isVowel && !prevIsVowel) start = i;
  }
  return start === -1 ? word : word.slice(start);
}

/**
 * Compares one candidate name against one word to avoid.
 * Returns null when they are comfortably distinct.
 */
export function compareWords(name: string, other: string): Omit<Conflict, 'against'> | null {
  const a = normalize(name);
  const b = normalize(other);
  if (!a || !b) return null;

  if (a === b) {
    return { severity: 'high', reason: 'same' };
  }

  const dist = levenshtein(a, b);
  const maxLen = Math.max(a.length, b.length);
  const ratio = dist / maxLen;

  if (maxLen <= 4 && dist <= 1) {
    return { severity: 'high', reason: 'oneSound' };
  }
  if (ratio <= 0.25) {
    return { severity: 'high', reason: 'veryClose' };
  }
  // Soundex alone collides too readily on short words (it codes only the first
  // letter plus three consonants), so it only counts when the spellings are
  // also broadly similar - that is the respelling case it is good at.
  if (soundex(a) === soundex(b) && ratio <= 0.45) {
    return { severity: 'high', reason: 'almostIdentical' };
  }

  const tailA = rhymeTail(a);
  const tailB = rhymeTail(b);
  if (tailA.length >= 2 && tailA === tailB && maxLen <= 7) {
    return { severity: 'medium', reason: 'rhymes' };
  }
  if (ratio <= 0.4) {
    return { severity: 'medium', reason: 'similar' };
  }
  return null;
}

/**
 * Checks a name against every word to avoid, returning the worst conflict.
 * `high` conflicts are hidden by default; `medium` conflicts are shown with a
 * visible flag so the user makes the call.
 */
export function findConflict(name: string, avoidWords: readonly string[]): Conflict | null {
  let worst: Conflict | null = null;
  for (const other of avoidWords) {
    const hit = compareWords(name, other);
    if (!hit) continue;
    if (hit.severity === 'high') return { ...hit, against: other };
    if (!worst) worst = { ...hit, against: other };
  }
  return worst;
}

/** True when two generated names would be confusable with each other. */
export function namesClash(a: string, b: string): boolean {
  return compareWords(a, b) !== null;
}
