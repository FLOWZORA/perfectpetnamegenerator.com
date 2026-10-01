/**
 * Perfect Pet Name Generator - client controller.
 *
 * Loaded as a lazy chunk by generator-entry.ts, so none of this (nor the name
 * data it fetches) sits in any page's initial payload.
 *
 * Everything here runs in the browser against static JSON. Nothing the user
 * types - the avoid list especially - is stored or sent anywhere.
 */
import { sample, shuffle } from './shuffle';
import { findConflict, namesClash, normalize, type Conflict } from './phonetics';
import { fill, readStrings, type RuntimeStrings } from './strings';

interface PetName {
  name: string;
  gender: 'male' | 'female' | 'neutral';
  styles: string[];
  meaning: string;
}
interface SpeciesPayload {
  species: 'dog' | 'cat';
  commands: string[];
  names: PetName[];
}
type Species = 'dog' | 'cat' | 'any';

interface Candidate extends PetName {
  species: 'dog' | 'cat';
  conflict: Conflict | null;
}

const BATCH_SIZE = 12;
const PAIR_SETS = 6;

const cache = new Map<string, Promise<SpeciesPayload>>();
/**
 * `lang` picks the payload with translated meanings (public/data/<lang>/…);
 * the empty string means English, which sits at the un-prefixed path.
 */
function loadSpecies(species: 'dog' | 'cat', lang: string): Promise<SpeciesPayload> {
  const key = `${lang}:${species}`;
  let hit = cache.get(key);
  if (!hit) {
    const url = lang ? `/data/${lang}/${species}.json` : `/data/${species}.json`;
    hit = fetch(url).then((r) => {
      if (!r.ok) throw new Error(`Could not load ${species} names (${r.status})`);
      return r.json() as Promise<SpeciesPayload>;
    });
    cache.set(key, hit);
  }
  return hit;
}

/* ------------------------------------------------------------------ *
 * Small DOM helpers
 * ------------------------------------------------------------------ */
function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className?: string,
  text?: string
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text; // never innerHTML: user input flows through here
  return node;
}

export function init(root: HTMLElement, generateImmediately = false): void {
  const form = root.querySelector<HTMLFormElement>('[data-png-form]');
  const results = root.querySelector<HTMLElement>('[data-png-results]');
  const status = root.querySelector<HTMLElement>('[data-png-status]');
  if (!form || !results || !status) return;

  const pageSpecies = (root.dataset.species as Species) ?? 'any';
  // Empty for English (and any locale whose payload has not been built),
  // otherwise the URL prefix for the translated payload.
  const dataLang = root.dataset.pngLang && root.dataset.pngLang !== 'en' ? root.dataset.pngLang : '';
  const txt: RuntimeStrings = readStrings(root);
  const styleLabel = (key: string): string => txt.styles[key] ?? key;
  const shown = new Set<string>();
  let speech: typeof import('./speech') | null = null;

  const pairToggle = form.querySelector<HTMLInputElement>('[data-png-pair]');
  const pairOptions = root.querySelector<HTMLElement>('[data-png-pair-options]');
  const resetShown = root.querySelector<HTMLButtonElement>('[data-png-reset-shown]');
  const copyBatch = root.querySelector<HTMLButtonElement>('[data-png-copy]');

  /* ---------------- form state ---------------- */
  function selectedSpecies(): Species {
    if (pageSpecies !== 'any') return pageSpecies;
    const picked = form!.querySelector<HTMLInputElement>('input[name="species"]:checked');
    return (picked?.value as Species) ?? 'any';
  }
  function selectedStyles(): string[] {
    return Array.from(
      form!.querySelectorAll<HTMLInputElement>('input[name="style"]:checked')
    ).map((i) => i.value);
  }
  /** Works for inputs, selects and radio groups (RadioNodeList exposes .value). */
  function fieldValue(name: string): string {
    const node = form!.elements.namedItem(name);
    if (node && 'value' in node) return String((node as { value: unknown }).value ?? '');
    return '';
  }
  function isChecked(selector: string): boolean {
    return form!.querySelector<HTMLInputElement>(selector)?.checked ?? false;
  }

  /** Words the user typed, split on commas/spaces, plus the species command list. */
  function avoidWords(commands: string[]): { user: string[]; all: string[] } {
    const user = fieldValue('avoid')
      .split(/[,\n;]+/)
      .flatMap((chunk) => chunk.split(/\s+/))
      .map((w) => w.trim())
      .filter((w) => normalize(w).length > 1);
    return { user, all: [...user, ...commands] };
  }

  /* ---------------- pipeline ---------------- */
  interface Funnel {
    afterGender: number;
    afterStyle: number;
    afterLetter: number;
    afterLength: number;
    afterShown: number;
    hiddenByConflict: number;
    flagged: number;
  }

  function buildPool(payloads: SpeciesPayload[]): { pool: Candidate[]; funnel: Funnel; commands: string[] } {
    const gender = fieldValue('gender') || 'any';
    const styles = selectedStyles();
    const letter = fieldValue('letter');
    const maxLenRaw = fieldValue('maxlen');
    const maxLen = maxLenRaw ? Number(maxLenRaw) : 0;
    const excludeShown = isChecked('[data-png-exclude-shown]');
    const hideFlagged = isChecked('[data-png-hide-flagged]');
    const commands = payloads.flatMap((p) => p.commands);
    const { all: avoid } = avoidWords(commands);

    const funnel: Funnel = {
      afterGender: 0,
      afterStyle: 0,
      afterLetter: 0,
      afterLength: 0,
      afterShown: 0,
      hiddenByConflict: 0,
      flagged: 0,
    };

    let rows = payloads.flatMap((p) => p.names.map((n) => ({ ...n, species: p.species })));

    if (gender !== 'any') rows = rows.filter((n) => n.gender === gender || n.gender === 'neutral');
    funnel.afterGender = rows.length;

    if (styles.length) rows = rows.filter((n) => n.styles.some((s) => styles.includes(s)));
    funnel.afterStyle = rows.length;

    if (letter) rows = rows.filter((n) => n.name[0].toUpperCase() === letter.toUpperCase());
    funnel.afterLetter = rows.length;

    if (maxLen) rows = rows.filter((n) => n.name.length <= maxLen);
    funnel.afterLength = rows.length;

    if (excludeShown) rows = rows.filter((n) => !shown.has(n.name));
    funnel.afterShown = rows.length;

    const pool: Candidate[] = [];
    for (const row of rows) {
      const conflict = avoid.length ? findConflict(row.name, avoid) : null;
      if (conflict?.severity === 'high') {
        funnel.hiddenByConflict++;
        continue;
      }
      if (conflict && hideFlagged) {
        funnel.hiddenByConflict++;
        continue;
      }
      if (conflict) funnel.flagged++;
      pool.push({ ...row, conflict });
    }
    return { pool, funnel, commands };
  }

  /**
   * Bonded-pair / littermate sets: names that share a style, sit within two
   * characters of each other in length, open on different sounds, and are not
   * phonetically confusable with each other (same check as the conflict filter).
   */
  function buildSets(pool: Candidate[], size: number): Candidate[][] {
    const order = shuffle(pool);
    const used = new Set<string>();
    const sets: Candidate[][] = [];

    for (const seed of order) {
      if (sets.length >= PAIR_SETS) break;
      if (used.has(seed.name)) continue;
      const group = [seed];
      for (const mate of order) {
        if (group.length >= size) break;
        if (used.has(mate.name) || group.includes(mate)) continue;
        const fits = group.every(
          (member) =>
            member.styles.some((s) => mate.styles.includes(s)) &&
            Math.abs(member.name.length - mate.name.length) <= 2 &&
            member.name[0].toLowerCase() !== mate.name[0].toLowerCase() &&
            !namesClash(member.name, mate.name)
        );
        if (fits) group.push(mate);
      }
      if (group.length === size) {
        group.forEach((m) => used.add(m.name));
        sets.push(group);
      }
    }
    return sets;
  }

  function sharedStyles(group: Candidate[]): string[] {
    return group[0].styles.filter((s) => group.every((m) => m.styles.includes(s)));
  }

  /* ---------------- rendering ---------------- */
  function pronounceButton(name: string): HTMLButtonElement {
    const button = el('button', 'btn btn-ghost', txt.pronounce);
    button.type = 'button';
    button.setAttribute('aria-label', fill(txt.pronounceAria, { name }));
    button.addEventListener('click', async () => {
      if (!speech) {
        speech = await import('./speech'); // its own chunk, on first use
        speech.warmUp();
      }
      if (!speech.isSupported()) {
        button.textContent = txt.notSupported;
        button.disabled = true;
        return;
      }
      speech.speak(name);
    });
    return button;
  }

  function flagNote(conflict: Conflict): HTMLElement {
    const note = el(
      'p',
      'mt-3 flex gap-2 items-start rounded-lg px-3 py-2 text-[0.8125rem] leading-snug'
    );
    note.style.background = 'var(--c-flag-soft)';
    note.style.color = 'var(--c-flag)';
    note.style.border = '1px solid var(--c-flag-border)';
    const icon = el('span', '', '⚠');
    icon.setAttribute('aria-hidden', 'true');
    const reason = fill(txt.reasons[conflict.reason] ?? conflict.reason, {
      word: conflict.against,
    });
    const text = el('span', '', fill(txt.conflictHtml, { reason }));
    note.append(icon, text);
    return note;
  }

  function nameCard(item: Candidate, mixed: boolean): HTMLElement {
    const card = el('li', 'card p-5 flex flex-col');

    const head = el('div', 'flex items-start justify-between gap-3');
    const heading = el('h3', 'text-2xl leading-tight', item.name);
    head.append(heading);

    const badges = el('div', 'flex flex-wrap gap-1.5 justify-end');
    if (mixed) {
      const sp = el(
        'span',
        'text-[0.6875rem] font-semibold uppercase tracking-wide',
        item.species === 'dog' ? txt.dogBadge : txt.catBadge
      );
      sp.style.color = item.species === 'dog' ? 'var(--c-dog)' : 'var(--c-cat)';
      badges.append(sp);
    }
    head.append(badges);
    card.append(head);

    const meta = el(
      'p',
      'hint mt-1',
      [
        item.gender === 'neutral' ? txt.unisex : item.gender === 'male' ? txt.male : txt.female,
        ...item.styles.map(styleLabel),
      ].join(' · ')
    );
    card.append(meta);

    const meaning = el('p', 'mt-3 text-[0.9375rem] grow');
    const label = el('span', 'font-semibold', `${txt.meaningLabel} `);
    meaning.append(label, document.createTextNode(item.meaning));
    card.append(meaning);

    if (item.conflict) card.append(flagNote(item.conflict));

    const actions = el('div', 'mt-4');
    actions.append(pronounceButton(item.name));
    card.append(actions);
    return card;
  }

  function setCard(group: Candidate[], mixed: boolean): HTMLElement {
    const card = el('li', 'card p-5');
    const row = el('div', 'flex flex-wrap items-baseline gap-x-3 gap-y-1');
    group.forEach((member, i) => {
      if (i > 0) {
        const amp = el('span', 'text-xl', '&');
        amp.style.color = 'var(--c-muted)';
        row.append(amp);
      }
      row.append(el('h3', 'text-2xl leading-tight', member.name));
    });
    card.append(row);

    const shared = sharedStyles(group);
    const style = shared.length
      ? fill(txt.inStyle, {
          styles: shared.map(styleLabel).join(txt.joiner).toLocaleLowerCase(),
        })
      : txt.matchedInStyle;
    const why = el(
      'p',
      'hint mt-2',
      fill(txt.whyTogether, {
        style,
        lengths: group.map((m) => m.name.length).join(txt.joiner),
      })
    );
    card.append(why);

    const list = el('ul', 'mt-3 space-y-3');
    for (const member of group) {
      const item = el('li', '');
      const line = el('p', 'text-[0.9375rem]');
      const badge = member.species === 'dog' ? txt.dogBadge : txt.catBadge;
      line.append(
        el('span', 'font-semibold', `${member.name}${mixed ? ` (${badge})` : ''}: `)
      );
      line.append(document.createTextNode(member.meaning));
      item.append(line);
      if (member.conflict) item.append(flagNote(member.conflict));
      const actions = el('div', 'mt-2');
      actions.append(pronounceButton(member.name));
      item.append(actions);
      list.append(item);
    }
    card.append(list);
    return card;
  }

  function emptyState(funnel: Funnel, pairMode: boolean): HTMLElement {
    const box = el('div', 'card p-6');
    box.append(el('h3', 'text-xl', txt.emptyHeading));
    const r = txt.emptyReasons;
    let reason: string | null = null;
    if (funnel.afterGender === 0) reason = r.gender;
    else if (funnel.afterStyle === 0) reason = r.style;
    else if (funnel.afterLetter === 0) reason = r.letter;
    else if (funnel.afterLength === 0) reason = r.length;
    else if (funnel.afterShown === 0) reason = r.shown;
    else if (funnel.hiddenByConflict > 0) reason = r.conflict;
    else if (pairMode) reason = r.pair;

    box.append(
      el('p', 'mt-2', reason ? fill(txt.emptyLead, { reason }) : txt.emptyGeneric)
    );
    if (funnel.afterShown === 0 && funnel.afterLength > 0) {
      box.append(el('p', 'hint mt-2', txt.emptyStartOver));
    }
    return box;
  }

  function renderStatus(message: string): void {
    status!.textContent = message;
  }

  /* ---------------- main action ---------------- */
  let lastBatch: string[] = [];

  async function generate(): Promise<void> {
    const species = selectedSpecies();
    renderStatus(txt.finding);
    let payloads: SpeciesPayload[];
    try {
      payloads =
        species === 'any'
          ? await Promise.all([loadSpecies('dog', dataLang), loadSpecies('cat', dataLang)])
          : [await loadSpecies(species, dataLang)];
    } catch (error) {
      renderStatus(txt.loadError);
      return;
    }

    const { pool, funnel } = buildPool(payloads);
    const pairMode = pairToggle?.checked ?? false;
    const setSize = Number(fieldValue('setsize') || 2);
    const mixed = species === 'any';

    results!.replaceChildren();
    results!.classList.remove('sm:grid-cols-2', 'lg:grid-cols-3');

    if (pairMode) {
      const sets = buildSets(pool, setSize);
      if (!sets.length) {
        results!.append(emptyState(funnel, true));
        renderStatus(txt.noSets);
        return;
      }
      results!.classList.add('sm:grid-cols-2');
      const frag = document.createDocumentFragment();
      for (const group of sets) {
        group.forEach((m) => shown.add(m.name));
        frag.append(setCard(group, mixed));
      }
      results!.append(frag);
      lastBatch = sets.map((g) => g.map((m) => `${m.name} — ${m.meaning}`).join(' & ')).flat();
      const one = setSize === 2 ? txt.pairOne : txt.setOne;
      const many = setSize === 2 ? txt.pairMany : txt.setMany;
      renderStatus(
        fill(txt.setsStatus, {
          count: sets.length,
          word: sets.length === 1 ? one : many,
        })
      );
      return;
    }

    const batch = sample(pool, BATCH_SIZE);
    if (!batch.length) {
      results!.append(emptyState(funnel, false));
      renderStatus(txt.noMatches);
      return;
    }

    results!.classList.add('sm:grid-cols-2', 'lg:grid-cols-3');
    const frag = document.createDocumentFragment();
    for (const item of batch) {
      shown.add(item.name);
      frag.append(nameCard(item, mixed));
    }
    results!.append(frag);
    lastBatch = batch.map((b) => `${b.name} — ${b.meaning}`);

    const bits = [
      batch.length === 1
        ? fill(txt.statusNamesOne, { pool: pool.length })
        : fill(txt.statusNamesMany, { count: batch.length, pool: pool.length }),
    ];
    if (funnel.hiddenByConflict) {
      bits.push(fill(txt.statusHidden, { count: funnel.hiddenByConflict }));
    }
    if (funnel.flagged) bits.push(fill(txt.statusFlagged, { count: funnel.flagged }));
    renderStatus(`${bits.join(' · ')}.`);
  }

  /* ---------------- wiring ---------------- */
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    void generate();
  });

  pairToggle?.addEventListener('change', () => {
    if (pairOptions) pairOptions.hidden = !pairToggle.checked;
  });

  resetShown?.addEventListener('click', () => {
    shown.clear();
    renderStatus(txt.clearedShown);
  });

  copyBatch?.addEventListener('click', async () => {
    if (!lastBatch.length) return;
    try {
      await navigator.clipboard.writeText(lastBatch.join('\n'));
      copyBatch.textContent = txt.copied;
      setTimeout(() => (copyBatch.textContent = txt.copyBatch), 1800);
    } catch {
      renderStatus(txt.copyBlocked);
    }
  });

  root.dataset.ready = 'true';
  if (generateImmediately) void generate();
}
