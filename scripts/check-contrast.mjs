/**
 * WCAG contrast audit for the palette in src/styles/global.css.
 * Parses the `@palette light` / `@palette dark` blocks and checks every
 * foreground/background pair the UI actually renders, in both modes.
 *
 * Run: npm run contrast   (exits non-zero on any failure)
 */
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const css = await readFile(path.join(root, 'src/styles/global.css'), 'utf8');

function extractBlock(label) {
  const start = css.indexOf(`/* @palette ${label} */`);
  const end = css.indexOf('/* @palette end */', start);
  if (start === -1 || end === -1) throw new Error(`Palette block "${label}" not found`);
  const chunk = css.slice(start, end);
  const vars = {};
  for (const m of chunk.matchAll(/(--c-[a-z-]+)\s*:\s*(#[0-9a-fA-F]{6})/g)) vars[m[1]] = m[2];
  return vars;
}

const srgb = (c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
function luminance(hex) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  return 0.2126 * srgb(r) + 0.7152 * srgb(g) + 0.0722 * srgb(b);
}
function ratio(fg, bg) {
  const [a, b] = [luminance(fg), luminance(bg)].sort((x, y) => y - x);
  return (a + 0.05) / (b + 0.05);
}

/** [foreground, background, description, minimum] — 4.5 for text, 3.0 for UI borders. */
const PAIRS = [
  ['--c-text', '--c-bg', 'body text on page background', 4.5],
  ['--c-text', '--c-surface', 'body text on card', 4.5],
  ['--c-text', '--c-raised', 'body text on raised panel', 4.5],
  ['--c-muted', '--c-bg', 'MUTED text on page background', 4.5],
  ['--c-muted', '--c-surface', 'MUTED text on card', 4.5],
  ['--c-muted', '--c-raised', 'MUTED text on raised panel', 4.5],
  ['--c-accent-ink', '--c-accent', 'button label on primary button', 4.5],
  ['--c-accent-ink', '--c-accent-hover', 'button label on hovered button', 4.5],
  ['--c-accent-on-soft', '--c-accent-soft', 'link/label on tinted background', 4.5],
  ['--c-accent-on-soft', '--c-bg', 'inline link on page background', 4.5],
  ['--c-accent-on-soft', '--c-surface', 'inline link on card', 4.5],
  ['--c-text', '--c-accent-soft', 'answer-box text on tint', 4.5],
  ['--c-dog', '--c-bg', 'dog accent text on page background', 4.5],
  ['--c-dog', '--c-surface', 'dog accent text on card', 4.5],
  ['--c-cat', '--c-bg', 'cat accent text on page background', 4.5],
  ['--c-cat', '--c-surface', 'cat accent text on card', 4.5],
  ['--c-flag', '--c-flag-soft', 'conflict-flag text on flag background', 4.5],
  ['--c-flag', '--c-surface', 'conflict-flag text on card', 4.5],
  ['--c-border-strong', '--c-surface', 'input border on card (UI, 3:1)', 3.0],
  ['--c-border-strong', '--c-bg', 'input border on page background (UI, 3:1)', 3.0],
  ['--c-accent', '--c-bg', 'accent border/graphic on background (UI, 3:1)', 3.0],
  ['--c-focus', '--c-bg', 'focus ring on page background (UI, 3:1)', 3.0],
  ['--c-focus', '--c-surface', 'focus ring on card (UI, 3:1)', 3.0],
];

let failures = 0;
for (const mode of ['light', 'dark']) {
  const vars = extractBlock(mode);
  console.log(`\n  ${mode.toUpperCase()} MODE`);
  for (const [fgVar, bgVar, desc, min] of PAIRS) {
    const fg = vars[fgVar];
    const bg = vars[bgVar];
    if (!fg || !bg) {
      console.log(`  ?  missing token ${!fg ? fgVar : bgVar} — ${desc}`);
      failures++;
      continue;
    }
    const r = ratio(fg, bg);
    const pass = r >= min;
    if (!pass) failures++;
    console.log(
      `  ${pass ? 'PASS' : 'FAIL'}  ${r.toFixed(2)}:1 (min ${min})  ${desc}  [${fg} on ${bg}]`
    );
  }
}

console.log(
  failures === 0
    ? '\nAll contrast pairs meet their WCAG minimum in both modes.\n'
    : `\n${failures} contrast failure(s).\n`
);
process.exit(failures === 0 ? 0 : 1);
