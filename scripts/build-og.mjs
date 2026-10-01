/**
 * Renders the 1200x630 Open Graph / Twitter card image to public/og/default.png.
 * Run manually (`node scripts/build-og.mjs`) - the output is committed, so a
 * normal build does not need sharp.
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/og');
await mkdir(outDir, { recursive: true });

const serif = 'Georgia, Times New Roman, serif';
const sans = 'Segoe UI, Helvetica, Arial, sans-serif';

/** A paw print drawn as shapes - no emoji font dependency. */
function paw(x, y, scale, fill) {
  const c = (cx, cy, rx, ry, rot) =>
    `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill}" transform="rotate(${rot} ${cx} ${cy})"/>`;
  return `<g transform="translate(${x} ${y}) scale(${scale})">
    ${c(-30, -26, 13, 17, -18)}
    ${c(-2, -36, 13, 18, -5)}
    ${c(26, -28, 13, 17, 12)}
    ${c(46, -2, 12, 15, 30)}
    <path d="M -6 34 C -34 34 -46 16 -38 -2 C -30 -20 -8 -22 4 -22 C 18 -22 36 -14 40 4 C 44 24 26 36 6 34 Z" fill="${fill}"/>
  </g>`;
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fdfbf7"/>
      <stop offset="100%" stop-color="#f6eade"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="14" fill="#9c3a17"/>

  <g opacity="0.10">
    ${paw(1040, 170, 1.9, '#9c3a17')}
    ${paw(1110, 430, 1.2, '#79490a')}
  </g>

  ${paw(112, 132, 0.62, '#9c3a17')}

  <text x="176" y="146" font-family="${sans}" font-size="26" font-weight="600" fill="#83300f" letter-spacing="3">
    PERFECTPETNAMEGENERATOR.COM
  </text>

  <text x="80" y="290" font-family="${serif}" font-size="82" font-weight="700" fill="#1c1714">
    Perfect Pet Name
  </text>
  <text x="80" y="382" font-family="${serif}" font-size="82" font-weight="700" fill="#1c1714">
    Generator
  </text>

  <text x="80" y="452" font-family="${sans}" font-size="31" fill="#5f574e">
    Dog and cat names with real meanings and pronunciation.
  </text>

  <g font-family="${sans}" font-size="25" font-weight="600">
    <rect x="80" y="496" width="392" height="58" rx="29" fill="#ffffff" stroke="#e0d4c2" stroke-width="2"/>
    <text x="108" y="533" fill="#83300f">Avoids clashes with commands</text>

    <rect x="492" y="496" width="252" height="58" rx="29" fill="#ffffff" stroke="#e0d4c2" stroke-width="2"/>
    <text x="520" y="533" fill="#0c5a5e">Bonded-pair mode</text>

    <rect x="764" y="496" width="172" height="58" rx="29" fill="#ffffff" stroke="#e0d4c2" stroke-width="2"/>
    <text x="792" y="533" fill="#79490a">No sign-up</text>
  </g>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(path.join(outDir, 'default.png'));

const meta = await sharp(path.join(outDir, 'default.png')).metadata();
console.log(`build-og: public/og/default.png ${meta.width}x${meta.height}`);
