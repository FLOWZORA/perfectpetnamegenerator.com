/**
 * Unbiased randomisation.
 *
 * Every batch is produced by a full Fisher-Yates shuffle of the candidate pool
 * followed by taking the first N. Repeatedly picking a random index instead
 * would over-sample some names and can return the same name twice in one batch.
 */

/** Uniform integer in [0, max) - rejection sampling, so no modulo bias. */
function randomInt(max: number): number {
  const crypto = globalThis.crypto;
  if (crypto?.getRandomValues) {
    // Largest multiple of `max` that fits in a uint32; anything above is rejected.
    const limit = Math.floor(0x1_0000_0000 / max) * max;
    const buf = new Uint32Array(1);
    let value: number;
    do {
      crypto.getRandomValues(buf);
      value = buf[0];
    } while (value >= limit);
    return value % max;
  }
  return Math.floor(Math.random() * max);
}

/** Fisher-Yates (Durstenfeld) shuffle. Returns a new array; input untouched. */
export function shuffle<T>(input: readonly T[]): T[] {
  const out = input.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = randomInt(i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Shuffle, then take the first `count` - an unbiased sample without replacement. */
export function sample<T>(input: readonly T[], count: number): T[] {
  return shuffle(input).slice(0, count);
}
