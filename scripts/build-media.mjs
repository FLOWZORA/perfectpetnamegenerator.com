/**
 * Converts the hero pet animations in scripts/media-src/*.gif to animated WebP
 * in public/media/. Run manually (`npm run media`) - the output is committed,
 * so a normal build does not need the converter.
 *
 * gif2webp (libwebp) beats libvips/sharp badly on animated output here, so this
 * shells out to the `gif2webp-bin` package rather than using sharp. `-min_size`
 * lets the encoder pick per-frame lossy/lossless for the smallest file.
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, readdirSync, statSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = path.join(root, 'scripts/media-src');
const outDir = path.join(root, 'public/media');
mkdirSync(outDir, { recursive: true });

const require = createRequire(import.meta.url);
let bin;
try {
  bin = require('gif2webp-bin');
} catch {
  console.error('Install the converter first:  npm i --no-save gif2webp-bin');
  process.exit(1);
}

for (const file of readdirSync(srcDir).filter((f) => f.endsWith('.gif'))) {
  const from = path.join(srcDir, file);
  const to = path.join(outDir, file.replace(/\.gif$/, '.webp'));
  execFileSync(bin, ['-min_size', '-m', '6', from, '-o', to], { stdio: 'inherit' });
  console.log(`${file}  ${statSync(from).size} -> ${statSync(to).size} bytes`);
}
