/**
 * English (default locale) — the reference dictionary.
 *
 * Every other file in this folder mirrors this shape exactly; `Dict` is derived
 * from here, so adding a key makes the compiler point at each translation that
 * still needs it.
 *
 * Conventions used by the `fill()` helper in ../index.ts:
 *   {{url:dog}}   → the localised path for a route key (dog, cat, pet, …)
 *   {{total}}     → a value passed in by the view (counts, year, email, …)
 * Strings ending in `Html` may contain markup; everything else is plain text.
 * FAQ answers must stay plain text: they are copied into FAQPage JSON-LD.
 */
const en = {
  common: {
    siteName: 'Perfect Pet Name Generator',
    skipLink: 'Skip to main content',
    themeToggle: 'Switch between light and dark theme',
    languageLabel: 'Language',
    languageNav: 'Choose a language',
    mainNav: 'Main',
    breadcrumb: 'Breadcrumb',
    home: 'Home',
  },

  nav: {
    dog: 'Dog Names',
    cat: 'Cat Names',
    pet: 'Pet Names',
    about: 'About',
  },

  footer: {
    blurb:
      'Free dog and cat name ideas with real meanings, out-loud pronunciation, and a checker that keeps a new name from clashing with your training commands.',
    headings: { generators: 'Generators', guides: 'Guides', site: 'Site', legal: 'Legal' },
    links: {
      home: 'Home',
      dog: 'Dog Name Generator',
      cat: 'Cat Name Generator',
      pet: 'Pet Name Generator',
      teach: 'Teaching a Name',
      avoid: 'Names to Avoid',
      pairs: 'Naming Two Pets',
      meanings: 'Name Meanings',
      about: 'About',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms and Conditions',
    },
    copyright:
      '© {{year}} Perfect Pet Name Generator. Name meanings are drawn from established linguistic and cultural sources; suggestions are offered for inspiration, not as professional training or veterinary advice.',
  },

  styles: {
    fantasy: 'Fantasy',
    funny: 'Funny',
    cute: 'Cute',
    strong: 'Strong',
    elegant: 'Elegant',
    classic: 'Classic',
    mythical: 'Mythical',
    food: 'Food-inspired',
    modern: 'Modern',
    unique: 'Unique',
  },

  generator: {
    speciesLegend: 'Species',
    speciesAny: 'Dogs and cats',
    speciesDog: 'Dog',
    speciesCat: 'Cat',

    genderLegend: 'Gender',
    genderAny: 'Any',
    genderMale: 'Male',
    genderFemale: 'Female',
    genderHint: 'Male and female selections also include unisex names.',

    styleLegend: 'Style',
    stylePickAny: '(pick any number)',
    styleHint:
      'With nothing selected, every style is in play. Selecting several returns names matching any one of them.',

    letterLabel: 'Starting letter',
    letterAny: 'Any letter',

    maxLenLabel: 'Max name length',
    maxLenAny: 'Any length',
    maxLenOption: '{{n}} letters or fewer',
    maxLenHint:
      'Useful for engraved ID tags, where the engraving area usually fits about 8 characters per line.',

    avoidLabel: 'Avoid names similar to…',
    avoidPlaceholder: 'Jake, Nora, Bo — family members, other pets, anything to steer clear of',
    avoidHtml:
      '<strong style="color: var(--c-text);">Why this matters:</strong> a pet learns its name as a distinct sound. A name that rhymes with a household name or a training cue makes both harder to learn — “Bo” blurs into “No”, “Kit” into “Sit”. Every suggestion is also checked against {{commandCount}} common {{commandKind}} ({{commandExamples}}…) automatically. Close matches are hidden; borderline ones are shown with a flag so you decide. What you type here is compared in your browser and never stored or sent anywhere.',
    commandKindDog: 'dog commands',
    commandKindCat: 'cat cues',

    optionsLegend: 'Options',
    excludeShown: 'Exclude names already shown',
    excludeShownHint: 'Every generate returns names you have not seen yet.',
    hideFlagged: 'Hide flagged names entirely',
    hideFlaggedHint:
      'Off by default, so you can see borderline clashes and judge them yourself.',
    pairMode: 'Naming two pets together?',
    pairModeHint:
      'Returns sets that share a style, sit close in length, and are not confusable with each other — for bonded pairs and littermates.',
    setSizeLabel: 'Names per set',
    setSize2: '2 — a bonded pair',
    setSize3: '3 — a littermate set',

    generate: 'Generate names',
    copyBatch: 'Copy this batch',
    startOver: 'Start over',
    ctaHint:
      'Get a random {{species}} name instantly — each press draws a fresh batch at random from the names that match your filters, so you can keep generating until one fits.',
    speciesWordDog: 'dog',
    speciesWordCat: 'cat',
    speciesWordAny: 'pet',

    resultsHeading: 'Name ideas',
    resultsAria: 'Generated pet names',
    statusInitialHtml:
      'A starter selection is below — press <strong>Generate names</strong> for a batch matched to your filters.',
    noscript:
      'The interactive generator needs JavaScript. The starter names below are shown in full, meanings included.',
    unisex: 'Unisex',
    male: 'Male',
    female: 'Female',
    meaningLabel: 'Meaning:',
  },

  /** Strings the client controller renders after the page has loaded. */
  runtime: {
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
  },

  home: {
    title: 'Pet Name Generator: Random Pet Names & Pet Name Tags',
    description:
      'Free random pet name generator for dogs and cats. Find unique pet names with meanings, audio pronunciation, cue checks, and sizing for custom pet name tags.',
    eyebrow: 'Free · No sign-up · {{total}} names',
    h1: 'Perfect Pet Name Generator',
    answerBox:
      'This free random pet name generator helps you choose the perfect pet name for dogs and cats. Set filters for style, gender, starting letter, or character length for engraved pet name tags. Every pet name returned includes an authentic meaning, speaks aloud on tap, and is checked against training commands and existing household names.',
    leadHtml:
      'Naming a dog? <a class="underline" style="color: var(--c-accent-on-soft);" href="{{url:dog}}">Use the dog name generator</a>. Naming a cat? <a class="underline" style="color: var(--c-accent-on-soft);" href="{{url:cat}}">Use the cat name generator</a>. Or generate across both below.',
    generator: {
      heading: 'Generate dog and cat names',
      intro:
        'Set as many or as few filters as you like, then generate. Every name arrives with its meaning attached.',
    },
    styles: {
      heading: 'Popular styles: fantasy and funny pet names',
      lead: 'All {{styleCount}} style filters above work the same way, but these two are the ones people come looking for by name.',
      fantasy: {
        heading: 'Fantasy pet names',
        html: '<p class="mt-2 text-[0.9375rem]">Looking for a fantasy pet name generator? Tick <strong>Fantasy</strong> in the style filter and the batch comes back from myth, epic fiction and science fiction — {{fantasyCount}} names running from Gandalf, Arwen and Thorin to Zelda, Kenobi and Toothless. Tick <strong>Mythical</strong> alongside it to widen the draw further with Odin, Athena, Fenrir and Freya.</p><p class="mt-2 text-[0.9375rem]">Fantasy names tend to run longer than the one- or two-syllable ideal, which is why pairing the pet name generator’s Fantasy filter with a five- or six-letter maximum is worth doing: Frodo carries across a park, Hercules gets shortened to Herc by week two whether you plan for it or not.</p>',
      },
      funny: {
        heading: 'Funny pet names',
        html: '<p class="mt-2 text-[0.9375rem]">Funny is the largest style here — {{funnyCount}} names running from Waffles, Gnocchi and Meatball to Bandit, Hooligan and Chonk. A funny pet name generator has one trap worth naming: the joke has to survive being shouted across a vet’s waiting room and written on a microchip form, so say a shortlist out loud at calling volume before you commit.</p><p class="mt-2 text-[0.9375rem]">Several of the funniest options have straight faces underneath — Loki is the Norse trickster god, Otis is Germanic for wealth — and the meaning sits on every card, so you can see what you are signing up for.</p>',
      },
    },
    different: {
      heading: 'Three things this generator does that most do not',
      cards: [
        {
          heading: 'Meanings you can actually read',
          body: 'Every name shows its origin and meaning on the card, always visible. No toggle, no account, no email wall. A name you will say ten times a day deserves to be a known quantity before you choose it.',
        },
        {
          heading: 'A conflict filter for your household',
          body: 'Type the names of family members and other pets and the generator removes suggestions that sound too close to them, alongside an automatic check against common training commands. This is the piece almost no other name tool offers.',
        },
        {
          heading: 'Names for two pets at once',
          body: 'Bonded pairs and littermates need names that sit together stylistically but stay clearly distinct out loud. Pair mode builds those sets for you and checks the names against each other, not just against your household.',
        },
      ],
    },
    pick: {
      heading: 'Pick your generator',
      dog: {
        heading: 'Dog Name Generator',
        body: '{{dogCount}} dog names with meanings, checked against {{dogCommandCount}} common commands including sit, stay, come and down.',
      },
      cat: {
        heading: 'Cat Name Generator',
        body: '{{catCount}} cat names with meanings, tuned for the sounds cats respond to and checked against the cues used in a cat household.',
      },
      pet: {
        heading: 'Names for a multi-pet home',
        body: 'Both species at once, plus guidance for naming a pet in a home that already has children, partners or other animals in it.',
      },
    },
    how: {
      heading: 'How the naming advice here is reasoned',
      html: '<p>The rules this tool applies are the ones professional trainers give: keep the name short, keep it distinct from cues, and stay consistent once you choose. A dog or cat learns a name as a sound pattern paired with attention and reward, not as a word with a meaning. That is why a name that overlaps with “no” or “sit” costs you real training time — the animal is being asked to separate two signals that arrive at their ear almost identically.</p><p>The meanings shown next to each name work the other way round: they matter to you, not to the pet. They are included because a name carries fifteen years of daily use, and knowing that Luna is Latin for moon or that Odin belongs to Norse mythology is the kind of detail that turns a shortlist into a decision. Meanings here come from documented linguistic and cultural sources, and no meaning is guessed at.</p><p>Nothing on this site requires an account. The conflict filter runs entirely in your browser, which is why the names you type into it never leave your device — see the <a href="{{url:privacy}}">privacy policy</a> for the specifics.</p>',
    },
    about: {
      heading: 'About this pet name generator',
      paragraphs: [
        'Perfect Pet Name Generator is a free pet name generator for dogs and cats, built to solve the parts of naming that only surface later rather than just to hand you a list of words. It draws on {{total}} names across {{styleCount}} styles. Every name it returns carries a documented meaning, a button that speaks it aloud in your browser, and an automatic check against the commands your pet has to learn. Nothing is gated: there is no sign-up, no email step and no paid tier on any feature, the household conflict filter and bonded-pair mode included.',
        'At its core this is a random name generator. Each time you press Generate, the names that match your filters are shuffled with a Fisher-Yates algorithm and a fresh batch is drawn, so every eligible name has an equal chance of appearing instead of the same few repeating. With no filters set, it works as a pure random dog name generator and random cat name generator. Add a style, a starting letter or a length limit and the draw stays random — it simply happens inside a smaller pool.',
        'The dog name generator is tuned for the way a dog actually learns a name. You can filter by male, female or unisex, by style, by starting letter, and by a maximum length that fits an engraved ID tag. The male and female views of the dog name generator both keep unisex names in the results, so a strong option is never lost to a rigid gender split. Each suggestion is checked against {{dogCommandCount}} common commands such as sit, stay, come, heel and down; names that sound too close are hidden, and borderline ones are shown with a flag so the final call stays yours.',
        'The cat name generator follows the same design but leans on the sounds cats respond to best: short names with bright, high-frequency notes like the “ee” in Mimi or the hard k in Kiko. Filter the cat name generator by male or female, by style, by letter or by length, and it steers clear of the cues used around a cat household. As with dogs, the male and female results in the cat name generator keep unisex names in the pool rather than dropping them.',
        'If you are completing pedigree paperwork, the tool doubles as a registered dog name generator. Registered names for the AKC, the Kennel Club and similar registries are long, formal and often themed around the kennel or the litter, while the call name you use at home stays short. Switch the length limit off and pick an elegant or classic style for the registered name, then run the generator again with a five- or six-letter limit to find the everyday call name that matches it.',
        'Styles are how most people narrow the list. Fantasy pulls from myth, epic fiction and science fiction; Funny is the largest category here and runs from Waffles and Meatball to Bandit and Hooligan; and cute, strong, elegant, classic, mythical, food-inspired, modern and unique filters sit alongside them. Select several at once and the generator returns names matching any one of them, which is the quickest way to widen a search that has become too narrow.',
        'Meanings are the other half of the tool, and they matter to you rather than to the animal. A name said ten times a day for fifteen years deserves to be a known quantity, so the origin and meaning of every name sit on the card in plain sight, never behind a toggle, an account or an email form. Meanings come from recorded etymologies, mythology and documented word origins, and where a meaning is not documented the name is left out rather than given an invented one.',
        'Every generated name has a Pronounce button that reads it aloud with the speech engine already built into your device. No audio is downloaded and no third-party text-to-speech service is contacted. This matters most for mythology-derived and non-English names, where the spelling gives little away about how the name is actually said, and hearing a shortlist at calling volume is the fastest way to catch a name that is awkward to shout across a park.',
        'The household conflict filter is the piece almost no other pet name generator has. Enter the names already in use at home — a partner, a child, another pet, even a nickname that gets shouted across the garden — and each suggestion is compared against them phonetically rather than by spelling, because “Kay” and “Stay” share no opening letters but collide completely out loud. Close matches are removed and borderline ones flagged, and everything you type is compared in your browser and never stored, logged or sent anywhere.',
        'Naming two pets at once is a different problem from naming one pet twice, so the generator has a pair mode. It returns sets of two or three names that share a style and sit within about two letters of the same length, then rejects any set whose names are phonetically close to each other. It is built for bonded pairs adopted together and for littermates that need a shared theme without answering to each other’s names.',
        'The whole site is static: no accounts, no database, no server-side processing of anything you enter. Start from the dog name generator, the cat name generator, or generate across both species with the tool above, and do the two things that head off naming regret — read the meaning, and say the name out loud before you decide.',
      ],
    },
    faqHeading: 'Frequently asked questions',
    faqs: [
      {
        q: 'What makes a good pet name?',
        a: 'A good pet name is one or two syllables, ends in a clear vowel or hard consonant sound, and does not resemble any word you use as a command. Short names carry better across a park or a room, and a distinct ending sound helps a dog or cat pick their name out of ordinary conversation. Meaning matters to you rather than to the animal, which is why every name here shows its origin.',
      },
      {
        q: 'Why should a pet name not sound like a training command?',
        a: 'A name that sounds like a command slows training, because the animal cannot tell the two cues apart. "Bo" and "no" or "Kit" and "sit" differ by a single sound, so a pet hears an ambiguous signal every time either is used. This generator checks each suggestion against common commands and against any household names you enter, hides the close matches, and flags borderline ones.',
      },
      {
        q: 'Is this pet name generator free, and do I need an account?',
        a: 'It is completely free and there is no account, sign-up or email step for any feature, including the conflict filter and bonded-pair mode. Every part of the tool runs in your browser against a static list of names. Nothing you type is stored or sent to a server.',
      },
      {
        q: 'Can I generate names for two pets adopted together?',
        a: 'Yes. Turn on "Naming two pets together?" and the generator returns sets of two or three names instead of a single list. Each set shares a style, sits within two letters of the same length, starts on a different sound, and passes the same phonetic check used for the conflict filter, so the pets do not respond to each other’s names.',
      },
      {
        q: 'What are good fantasy pet names?',
        a: 'Good fantasy pet names are recognisable from a story or a myth but still short enough to call across a garden — Gandalf, Arwen, Thorin, Zephyr and Zelda all manage both. The Fantasy filter holds {{fantasyCount}} of them, and ticking Mythical alongside it widens the draw with Odin, Athena, Fenrir and Freya. Longer picks get shortened in practice, so check the name still works at two syllables before you settle on it.',
      },
      {
        q: 'What are funny pet names?',
        a: 'Funny pet names are the ones whose humour comes from the gap between the name and the animal wearing it: Waffles, Meatball, Bandit, Chonk and Hooligan are the sort of thing the Funny filter returns, and there are {{funnyCount}} of them here. The only real test is whether the joke still lands when a vet calls it out in a waiting room, so say your shortlist aloud before deciding.',
      },
      {
        q: 'Where do the name meanings come from?',
        a: 'Meanings come from established linguistic and cultural sources rather than being invented for the tool: recorded etymologies, mythology, and documented word origins. They are shown in full next to every name, never hidden behind a toggle or an email form, so you can judge a name before committing to fifteen years of using it.',
      },
    ],
  },

  dog: {
    title: 'Pet Name Generator Dog: Random Dog Pet Names & Ideas',
    description:
      'Free pet name generator dog tool with meanings. Generate random dog pet names, hear audio, check training clashes, and filter sizes for pet name tags.',
    breadcrumb: 'Dog Names',
    h1: 'Dog Name Generator',
    answerBox:
      'A dog’s name should be one or two syllables and clearly distinct from commands. This pet name generator dog tool draws on {{dogCount}} dog names with documented meanings, speaks each aloud, filters male, female or unisex, checks {{dogCommandCount}} common commands, and formats names to fit engraved pet name tags.',
    generator: {
      heading: 'Generate dog names',
      intro:
        'Use this pet name generator dog tool to find random canine ideas by male, female, style, starting letter, or length for engraved pet name tags. Add household names to avoid, and the conflict filter handles the rest.',
    },
    prose: {
      heading: 'Why a dog’s name must not sound like a command',
      html: '<p>A dog learns a name as a sound, not as a word. When the name overlaps with a cue, every repetition teaches ambiguity instead of clarity — the dog hears something close to “no” and has to guess whether it is being called or corrected. The cost is measured in weeks of slower recall training, and recall is the command that matters most.</p><p>The commands checked automatically on this page are: {{dogCommands}}. Names too close to any of them are hidden from your results, and borderline matches are shown with a flag explaining the clash rather than silently dropped, because a rhyme you are aware of is easier to live with than one you discover in month three.</p><p>The same check runs against whatever you type into the “avoid names similar to” field. A dog in a house with a Jake will struggle with Jade; a second dog joining a Bailey will struggle with Hayley. That comparison happens in your browser and nothing you type is stored or transmitted.</p><h2>Naming two dogs, or a whole litter</h2><p>Two dogs in one home need names that are unmistakably different from each other. Pair mode builds sets that share a style and sit close in length — so they sound like they belong to the same household — while enforcing different opening sounds and running the same phonetic check between the two names. It works for bonded pairs adopted together and for littermates that need a cohesive theme.</p><h2>Registered names and names that fit an engraved ID tag</h2><p>Most engraved pet tags fit roughly eight characters per line before the text has to shrink, and a name competing for space with a phone number is the first thing to get cut. The maximum length filter exists for exactly this: set it to six or fewer and every suggestion will engrave cleanly alongside your contact details. The same control turns this into a workable registered dog name generator — switch the limit off for the long formal name your kennel club or AKC paperwork asks for, then set it back to five or six to find the short call name that goes on the tag and gets used every day.</p>',
    },
    showcase: {
      heading: 'Dog names by style, with meanings',
      lead: 'A sample from the full list. Use the generator above to filter the rest by gender, letter and length.',
      strong: 'Strong dog names',
      cute: 'Cute dog names',
      mythical: 'Mythical dog names',
    },
    more: {
      heading: 'Naming a different pet',
      html: '<p>Naming a cat instead? The <a href="{{url:cat}}">cat name generator</a> uses a cat-specific list and checks against the sounds cats actually respond to. Naming both, or something else entirely? The <a href="{{url:pet}}">general pet name generator</a> works across species, and the <a href="{{url:home}}">homepage</a> explains how the meanings, pronunciation and conflict checks fit together.</p>',
    },
    faqHeading: 'Dog name questions',
    faqs: [
      {
        q: 'How do I choose a dog name?',
        a: 'Choose a name of one or two syllables that ends in a vowel or a sharp consonant and shares no sound with your commands. Say it out loud at the volume you would use in a park before committing, test it against the words the dog already needs to learn, and keep it once chosen — changing a name mid-training resets the association.',
      },
      {
        q: 'Which dog names should I avoid?',
        a: 'Avoid names that rhyme with or closely resemble your training commands: {{dogCommandsShort}} and similar cues. Also avoid names that match a family member or another pet in the house, because a dog cannot separate two similar sounds coming from the same voice. The generator on this page removes both categories automatically.',
      },
      {
        q: 'Should a dog name be one or two syllables?',
        a: 'One or two syllables is the practical limit for a dog name. Short names cut through background noise and are easy to say sharply and consistently, which is what the dog is actually learning. Longer names are usually shortened in daily use anyway, so it is worth choosing the short form deliberately rather than letting it happen by accident.',
      },
      {
        q: 'Can I hear how a dog name is pronounced?',
        a: 'Yes. Every generated name has a Pronounce button that reads the name aloud using your browser’s built-in speech engine. It works offline once the page has loaded, sends nothing to a server, and needs no plugin. Hearing a name spoken is the fastest way to catch one that is awkward to call out.',
      },
      {
        q: 'How does the random dog name generator work, and can I filter male or female names?',
        a: 'The random dog name generator draws on {{dogCount}} dog names, each with a documented meaning and origin. Filters for gender — male, female or unisex — plus style, starting letter and maximum length narrow that pool, and every batch is drawn with a Fisher-Yates shuffle, so each matching name has an equal chance of appearing rather than the same handful repeating. The male and female filters both keep unisex names in the results.',
      },
    ],
  },

  cat: {
    title: 'Pet Name Generator Cat: Random Cat Pet Names & Ideas',
    description:
      'Free pet name generator cat tool with meanings. Discover random cat pet names, listen out loud, avoid cue clashes, and find names sized for pet name tags.',
    breadcrumb: 'Cat Names',
    h1: 'Cat Name Generator',
    answerBox:
      'A cat’s name should be short, carry bright high-frequency tones, and avoid correction cues. This pet name generator cat tool draws on {{catCount}} cat names with documented meanings, reads each aloud, and screens out cue clashes while finding names sized perfectly for lightweight cat pet name tags.',
    generator: {
      heading: 'Generate cat names',
      intro:
        'Use this pet name generator cat tool to filter random feline ideas by male, female, style, starting letter, or length for engraved pet name tags. Household conflict checks are applied automatically.',
    },
    prose: {
      heading: 'What makes a cat name work',
      html: '<p>Cats respond best to short names with high-frequency sounds. Their hearing range extends well above ours at the top end, and the sounds they discriminate most sharply are the bright ones — the “ee” in Mimi, the hard k in Kiko. Set the cat name generator to male or female if you want, pick a style, and every press of Generate returns a fresh random batch. A name built from low, soft sounds is not wrong, it simply has to compete harder for attention against everything else in the room.</p><p>The other half of the problem is separation. Cats distinguish their own name from similar-sounding words, but the distinction is fine-grained, and an ambiguous sound is usually met with indifference rather than a guess. The cues checked automatically on this page are: {{catCues}}. Anything from the name list that sits too close to one of them is removed before you see it.</p><h2>Naming two cats, or a litter of kittens</h2><p>Two cats in one home need names that a human can call distinctly under pressure and that the cats will not confuse with each other. Pair mode returns sets of two or three names that share a style and a rough length but open on different sounds, with the same phonetic check applied between the names themselves. For a litter, set the size to three and the theme holds across all of them.</p><h2>Short names for collar tags</h2><p>Cat tags are smaller than dog tags, and the engraving area is genuinely tight — six characters is a safe ceiling if the tag also carries a phone number. Set the maximum length filter to five or six and every suggestion will fit without the engraver shrinking the text to the point of illegibility. If you also need a longer registered or pedigree name for cat-association paperwork, turn the limit off for that and switch it back on for the short everyday call name.</p>',
    },
    showcase: {
      heading: 'Cat names by style, with meanings',
      lead: 'A sample from the full list. The generator above filters the rest by gender, letter and length.',
      elegant: 'Elegant cat names',
      mythical: 'Mythical cat names',
      food: 'Food-inspired cat names',
    },
    more: {
      heading: 'Naming a different pet',
      html: '<p>Naming a dog instead? The <a href="{{url:dog}}">dog name generator</a> checks against the full command list dogs are trained on. Naming both at once, or looking for something species-neutral? Use the <a href="{{url:pet}}">pet name generator</a>, or start from the <a href="{{url:home}}">homepage</a> for how the meanings, pronunciation and conflict filter work together.</p>',
    },
    faqHeading: 'Cat name questions',
    faqs: [
      {
        q: 'How do I choose a cat name?',
        a: 'Choose a short name with a sharp, high-frequency sound in it — cats hear high frequencies far better than low ones, which is why names containing an "ee" or a hard consonant get a response more reliably. Two syllables ending in a vowel work well. Filter the random cat name generator by male or female to match, test the name by calling it across a room, and keep generating until one fits.',
      },
      {
        q: 'Do cats actually learn their names?',
        a: 'Cats do learn their names, and research on domestic cats has shown they distinguish their own name from similar-sounding words. What they choose to do about it is a separate matter. Because the discrimination is real but fine-grained, a name that closely resembles a household word or another pet’s name genuinely muddies the signal.',
      },
      {
        q: 'Which cat names should I avoid?',
        a: 'Avoid names that resemble the sounds you already use around the house — {{catCues}} — and anything close to a family member’s name or another pet’s name. Cats are more likely to simply ignore an ambiguous sound than to guess at it, so a name that overlaps with a correction word tends to get tuned out entirely.',
      },
      {
        q: 'Can I hear the cat name pronounced before choosing it?',
        a: 'Yes. Each generated name has a Pronounce button that uses your browser’s built-in speech engine, with no plugin, account or audio download. This is particularly useful for mythology-derived and non-English names, where the spelling gives little away about how the name is actually said.',
      },
      {
        q: 'What if I am naming two kittens together?',
        a: 'Turn on "Naming two pets together?" and the generator returns matched sets rather than a single list. Each set shares a style and a similar length while starting on different sounds, so two kittens in the same home do not both come running — or both ignore you — when one name is called.',
      },
    ],
  },

  pet: {
    title: 'Pet Name Generator: Pet Names With Meanings & Tag Ideas',
    description:
      'Explore pet names with our free random pet name generator. Filter by style, letter, and pet name tags length, with phonetics and documented meanings.',
    breadcrumb: 'Pet Names',
    h1: 'Pet Names for Dogs and Cats',
    answerBox:
      'A pet name works best when short, distinct, and easy to call. This random pet name generator covers {{total}} dog and cat names across {{styleCount}} styles, shows documented meanings, reads names aloud, prevents household sound clashes, and sizes names for custom engraved pet name tags.',
    generator: {
      heading: 'Generate pet names',
      intro:
        'Switch between dogs, cats, or both at once. Use our random pet name generator filters for gender, style, letter, or pet name tags length with instant phonetics.',
    },
    prose: {
      heading: 'Naming a pet in a household that already has names in it',
      html: '<p>The most common naming mistake is choosing in isolation. A name that sounds great on its own can be a daily problem in a house with a Jack, a Zack, or a dog that already answers to Bailey. Animals respond to sound patterns, and two similar patterns in one home means both animals react to either name — or neither reacts reliably to their own.</p><p>The “avoid names similar to” field exists for this. Type in every name the household already uses — people, pets, even a nickname that gets called across the garden — and each suggestion is compared against all of them using a phonetic check rather than a spelling match. That distinction matters: “Kay” and “Stay” share no letters at the start but collide completely out loud.</p><h2>Naming two pets at the same time</h2><p>Two pets arriving together need names that belong to each other without being confusable with each other. Pair mode handles both halves: it groups names that share a style and sit within two letters of the same length, then rejects any pairing whose members are phonetically close. Set the size to three for a litter and the theme carries across all three names.</p><h2>Where these names and meanings come from</h2><p>Every name in the list carries a meaning drawn from documented linguistic and cultural sources — recorded etymologies, mythology, and established word origins. Nothing is estimated or invented to fill a gap, and the meaning is displayed next to the name rather than hidden behind a toggle or an email form. Read more about the approach on the <a href="{{url:about}}">about page</a>.</p><h2>Species-specific guidance</h2><p>For advice tuned to one animal, use the <a href="{{url:dog}}">dog name generator</a>, which checks names against the full list of training commands dogs learn, or the <a href="{{url:cat}}">cat name generator</a>, which covers the sound frequencies cats respond to best. The <a href="{{url:home}}">pet name generator on the homepage</a> generates across both, and covers the fantasy and funny styles in more detail.</p>',
    },
    faqHeading: 'Pet naming questions',
    faqs: [
      {
        q: 'What is the best way to pick a pet name?',
        a: 'Pick a short name that is easy to say sharply, distinct from every other name and command in the household, and one you are happy to say out loud in public. Work from a filtered list rather than a blank page, check the meaning before committing, and say the name aloud at calling volume before you decide.',
      },
      {
        q: 'How do I name a pet joining a house that already has pets?',
        a: 'Choose a name that shares no opening sound and no rhyme with the pets already there. Existing animals respond to their own names by reflex, and two similar names in one house means both come when either is called. Enter the current pets’ names in the "avoid names similar to" field and the generator removes the collisions.',
      },
      {
        q: 'Does the same naming advice apply to dogs and cats?',
        a: 'The core rule is the same for both — short, distinct, consistent — but the emphasis differs. Dogs need maximum separation from training commands, because commands are used constantly and the cost of ambiguity is slower recall. Cats respond most reliably to high-frequency sounds, and tend to ignore an ambiguous name rather than guess at it.',
      },
      {
        q: 'Can I use this generator for a pet that is not a dog or cat?',
        a: 'Yes, with a caveat: the {{total}} names here are curated for dogs and cats, and the automatic conflict check uses dog and cat cues. The names themselves — their meanings, sounds and styles — work perfectly well for a rabbit, a ferret or a horse. The length filter and the household conflict filter apply to any animal.',
      },
      {
        q: 'Is anything I type into the generator saved?',
        a: 'No. The generator is a static site with no accounts, no database and no server-side processing of your input. The names you type into the conflict filter are compared in your browser and discarded when you close the tab. The privacy policy sets out exactly what is and is not collected.',
      },
    ],
  },

  /**
   * Shared chrome for the four written guides. They are articles rather than
   * tool pages, so they carry a byline and a revision date.
   */
  guides: {
    bylineLabel: 'Perfect Pet Name Generator',
    updatedLabel: 'Updated {{updated}}',
    homeHeading: 'Naming guides',
    homeLead:
      'Choosing the word is the quick part. These four guides cover what happens around it — teaching the name, the names worth ruling out, naming two animals at once, and where the meanings on this site come from.',
    readMore: 'Read the guide',
  },

  /** The cookie banner. Shown only where consent is required. */
  consent: {
    title: 'Cookies on this site',
    bodyHtml:
      'We use cookies to measure how the site is used and to support it with advertising. Reject and the generator still works exactly as it does now — every filter, the conflict check and the pronunciation button run in your browser either way. The <a href="{{url:privacy}}">privacy policy</a> has the detail.',
    accept: 'Accept',
    reject: 'Reject',
    manage: 'Cookie settings',
    ariaLabel: 'Cookie consent',
  },

  teach: {
    title: 'How to Teach a Dog or Cat Its Name',
    description:
      'A four-stage method for teaching a puppy, dog, kitten or cat to respond to its name: how to charge the sound, how often to practise, and what quietly breaks it.',
    breadcrumb: 'Teaching a Name',
    h1: 'How to teach a dog or cat its name',
    keywords:
      'teach a dog its name, name recognition training, teach a puppy its name, teach a cat its name, poisoned cue',
    answerBox:
      'Teach a name by pairing the sound with something good before you ever ask for a response: say the name once, mark the moment the animal looks at you, reward, repeat. Five to ten repetitions, three times a day, in a quiet room is enough for most puppies and kittens to turn reliably inside a week. The name is a request for attention, never a correction, and the fastest way to lose it is to use it when you are annoyed.',
    card: {
      heading: 'Teaching the name',
      body: 'A four-stage protocol for getting a reliable head-turn, how long it should take, and the habits that quietly undo it.',
    },
    html: '<h2>What “knowing its name” actually means</h2><p>An animal does not learn its name as a label. It learns it as a sound that predicts something worth turning around for. That distinction is not academic — it decides the whole training method. You are not teaching the animal who it is; you are building a reflex in which one particular noise, out of everything else it hears in a day, reliably means <strong>look at me, something good is about to happen</strong>.</p><p>The practical consequence is that the name has one job: buying you the animal’s attention so you can ask for something else. Recall, a hand target, a leash clip, a look away from another dog — all of it starts with the head-turn. A name that only half works is not a naming problem, it is an attention problem, and it shows up in every other cue you teach afterwards.</p><h2>The four-stage method</h2><h3>Stage one: charge the sound</h3><p>Start in the quietest room in the house, with no other animals present and something the animal genuinely wants — small, soft, fast-to-eat treats for most dogs; a lick of wet food, a favourite feather wand, or a few seconds of chin scratching for cats. Say the name once, in a warm, level tone. The instant an ear flicks or the head moves towards you, mark it — a short “yes”, a click, or just the food appearing — and deliver the reward.</p><p>If nothing happens for two or three seconds, do not repeat the name. Make a different noise entirely — a kissy sound, a tap on the floor — and reward the turn that gets you. Repeating a name into an empty room is the single most common mistake, because what the animal learns is that the name can be ignored several times before anything happens.</p><h3>Stage two: add distance and angle</h3><p>Once the head-turn is instant, start varying where you are. Say the name from across the room, from behind, from a different height, sitting on the floor, standing up, from the next room. Each variation is genuinely new information to an animal: a cue learned only while you crouch in front of it often falls apart the first time you say it standing.</p><h3>Stage three: generalise it</h3><p>Move to the garden, then the hallway, then the pavement outside, then a quiet park. Distraction is the axis that matters, and it should go up slowly enough that you keep getting the turn. If you lose the response you have jumped too far; go back to the last place it worked and add difficulty in smaller steps. For an indoor cat, generalising means different rooms, different times of day, and — most usefully — practising while the cat is mildly occupied rather than asleep.</p><h3>Stage four: protect it</h3><p>Protecting the name is the stage most people skip, and the only one that runs forever. Every time the name is used and followed by something the animal dislikes, the reflex you built gets a little weaker. Keep rewarding the turn intermittently for the animal’s whole life — not every time, but often enough that the sound stays worth answering.</p><h2>How often, and for how long</h2><p>Sessions should be short and frequent: five to ten repetitions, two or three times a day, ending while the animal still wants more. Ten minutes of drilling is worse than ninety seconds done three times, because a tired or bored animal is learning that the name predicts tedium.</p><p>A puppy or kitten with no bad history usually turns reliably in a quiet room within three to seven days, and holds up under mild distraction after two to four weeks. An adult rescue with an unknown past can take longer, and an animal that has heard its old name shouted in anger may do better with a new one — which is a perfectly good reason to rename.</p><h2>What quietly breaks name recognition</h2><ul><li><strong>Using the name as a correction.</strong> “Bailey!” shouted across the room when something is being chewed teaches Bailey that the sound sometimes predicts trouble. Trainers call this a poisoned cue. Use “ah-ah”, “off”, or simply go and interrupt — anything but the name.</li><li><strong>Calling the name for things the animal hates.</strong> Nail trims, ear drops, the carrier, the bath, the end of a walk. Go and collect the animal instead, or teach a separate cue for it.</li><li><strong>Repeating it.</strong> “Bailey. Bailey. Bailey!” teaches that the first two are noise.</li><li><strong>Fifteen nicknames.</strong> Pick one name and one nickname at most until the response is solid. Bailey, Bay-Bay, Bailey-Boo and Mister B are four different sounds to an animal that knows none of them yet.</li><li><strong>A name that collides with a cue.</strong> If the name sounds like a command — {{dogCommandsShort}} and similar — the animal is asked to separate two nearly identical signals every day. This one is fixable before you commit, which is why the generators on this site check for it automatically.</li></ul><h2>Cats: same mechanism, different currency</h2><p>Cats learn name recognition the same way dogs do; published work on domestic cats has found they can distinguish their own name from similar-sounding words. What differs is the reward and the expectation. Food works, but so does a specific kind of attention, and the honest goal for most cats is an ear swivel and a look rather than a dog’s come-running recall.</p><p>Practise before meals rather than after, keep sessions under a minute, and stop at the first sign of a flicking tail. Cats also respond better to names with bright, high-frequency sounds — the long “ee” in Mimi, the hard k in Kiko — which is why short names carrying those notes tend to work best.</p><h2>Renaming a rescue or an adult animal</h2><p>Renaming is easier than people expect, because the old name was only ever a sound too. Bridge it for a week: say the new name immediately followed by the old one, reward the turn, and after a few days drop the old name. If the new name shares a vowel shape with the old one — Suki for Sushi, Mattie for Maggie — the bridge is shorter still, though it is worth being sure the old name carries no unhappy history before deliberately echoing it.</p>',
    faqHeading: 'Questions about teaching a name',
    faqs: [
      {
        q: 'How long does it take a puppy to learn its name?',
        a: 'Most puppies turn reliably towards their name in a quiet room within three to seven days of short, twice-daily sessions, and hold the response under mild distraction after two to four weeks. Progress depends far more on how consistently the name predicts something good than on the age of the puppy or the number of minutes spent practising.',
      },
      {
        q: 'Should I repeat my pet’s name if it does not respond?',
        a: 'No. Repeating the name teaches the animal that the first few are safe to ignore. If there is no response within two or three seconds, use a different sound such as a kissy noise or a tap on the floor, reward the turn you get, and make the next repetition easier by moving closer or removing a distraction.',
      },
      {
        q: 'Can I use my pet’s name to tell it off?',
        a: 'Avoid it. Using the name for corrections turns it into a signal that sometimes predicts trouble, which trainers call a poisoned cue, and the animal starts hesitating before it turns. Keep a separate interrupter such as "ah-ah" or "off" for unwanted behaviour, and leave the name reserved for asking for attention.',
      },
      {
        q: 'Do cats really learn their names?',
        a: 'Yes. Domestic cats can distinguish their own name from similar-sounding words, and they learn it through the same pairing process dogs do. The realistic goal differs: for most cats a reliable ear swivel and look is success, and sessions work best kept under a minute, run before meals rather than after, and stopped at the first sign of disinterest.',
      },
      {
        q: 'How do I rename a rescue dog or cat?',
        a: 'Bridge the two names for about a week: say the new name, immediately follow it with the old one, and reward the turn. After a few days drop the old name and reward the response to the new one alone. Renaming is usually straightforward, and it is genuinely worth doing if the previous name was used in anger.',
      },
    ],
    related: {
      heading: 'Where to go next',
      html: '<p>Still choosing? The <a href="{{url:dog}}">dog name generator</a> and the <a href="{{url:cat}}">cat name generator</a> both check every suggestion against the commands your animal has to learn, which removes the hardest version of this problem before it starts. Before you commit it is worth reading which <a href="{{url:avoid}}">names to avoid</a>, and if two animals are arriving together, how <a href="{{url:pairs}}">naming two pets</a> differs from naming one twice.</p>',
    },
  },

  avoid: {
    title: 'Pet Names to Avoid, and Why',
    description:
      'The categories of dog and cat name that cause problems later: command clashes, household collisions, names that shorten badly, and jokes that stop being funny.',
    breadcrumb: 'Names to Avoid',
    h1: 'Pet names to avoid, and why',
    keywords:
      'pet names to avoid, dog names to avoid, cat names to avoid, names that sound like commands, bad pet names',
    answerBox:
      'Avoid names that sound like a command you plan to teach, names that collide with a person or animal already in the house, names you would not want called out in a waiting room, and names whose short form you have not chosen deliberately. Almost every naming regret falls into one of those four, and all four are visible in about thirty seconds if you say a shortlist out loud before deciding.',
    card: {
      heading: 'Names to avoid',
      body: 'Four categories that cause trouble months later: command clashes, household collisions, bad short forms, and jokes with a short shelf life.',
    },
    html: '<h2>1. Names that sound like a command</h2><p>This is the one with a measurable cost. A dog learns cues as sound patterns, and two patterns that differ by a single sound are genuinely hard to tell apart — especially at distance, outdoors, over wind and traffic, from a voice that is raised. “Bo” against “no”, “Kit” against “sit”, “Kay” against “stay”, “Dan” against “down”, “Mo” against “no”: each of those pairs asks the animal to make a discrimination it has no reason to be good at.</p><p>What it costs is not the name, it is the cue. Every ambiguous repetition slows the command down, and the command it usually slows down is recall — the one that matters when a gate is left open. The commands worth checking against are the ones you will actually teach: {{dogCommandsShort}} and the rest of the basic set, plus whatever your household says without thinking, like “leave it”, “wait” or “off”.</p><p>Rhyme is the trap, not spelling. “Kay” and “stay” share no opening letter and collide completely out loud, which is why comparing names by how they are written misses most of the problem. The generators here compare phonetically instead, against {{dogCommandCount}} common commands.</p><h2>2. Names that collide with the household</h2><p>The second animal in a house is where this bites. A dog living with a Bailey will struggle with Hayley; a cat in a house with a Jake will struggle with Jade. Children’s names, a partner’s name, a grandparent who visits weekly, and the nickname that actually gets used all count — the household name that matters is the one shouted across the garden, not the one on the birth certificate.</p><p>Two animals with similar names is the worst version, because both learn to respond to an ambiguous sound and you lose the ability to address one of them. If you already have a Milo, cross off Miles, Marlo, Mylo and Nilo before you start.</p><h2>3. Names that shorten in a way you did not choose</h2><p>Long names get shortened. This is not a maybe: Hercules becomes Herc, Maximilian becomes Max, Bartholomew becomes Bart, usually within a fortnight and usually not by you. The name you end up using every day is the short form, so it is worth choosing it deliberately rather than discovering it.</p><p>Say the full name at calling volume ten times and listen to what your mouth does to it. If the result is a form you dislike, or one that collides with a command, the long name is the wrong choice however good it looks on paper. This is also the practical argument for the length filter on the generators: an engraved ID tag fits roughly eight characters per line before the text starts shrinking, and a name competing with a phone number is the part that gets cut.</p><h2>4. Jokes with a short shelf life</h2><p>Funny names are a legitimate category and there are {{funnyCount}} of them here, but the joke has to survive some specific tests. It will be read out by a receptionist in a full waiting room. It will be written on a microchip registration, an insurance policy and a boarding form. It will be shouted, by you, in a public park, possibly for several minutes, while people watch.</p><p>Names built on innuendo, a public figure, or a reference tied to one particular year tend to fail at least one of those. The funny names that hold up are the ones whose humour comes from the gap between the name and the animal — a chihuahua called Meatball, a vast placid cat called Chonk — because that gap does not date.</p><h2>Four smaller ones worth knowing</h2><ul><li><strong>Names that mean something unfortunate elsewhere.</strong> A name that reads beautifully in one language occasionally reads badly in another, and that is worth ten seconds of checking when the name has a foreign origin. Every name on this site shows its documented meaning for exactly this reason.</li><li><strong>Names that are hard to spell aloud.</strong> You will spell it to a vet, a groomer, an insurer and a boarding kennel. A name you have to spell twice each time is a small tax you pay for fifteen years.</li><li><strong>Reusing a previous pet’s name.</strong> Common, understandable, and worth thinking about twice: it invites a comparison the new animal cannot win, and it can make the name harder to say on the days it is hardest.</li><li><strong>Names ending in a soft, trailing sound.</strong> Names that fade out on a soft vowel or consonant carry poorly outdoors. A clear vowel or a crisp consonant at the end — the “-o” in Milo, the hard “-t” in Bandit — cuts through wind and distance far better.</li></ul><h2>The thirty-second test</h2><p>Before you commit, do this with the shortlist. Stand at one end of the house or garden and call each name three times at the volume you would use in a park. Then say it immediately after each command you plan to teach — “sit, Kit”, “stay, Kay” — and listen for the collision. Then imagine it read out by a stranger in a waiting room. Anything that survives all three is a name you can live with.</p>',
    faqHeading: 'Questions about names to avoid',
    faqs: [
      {
        q: 'Which dog names should I avoid?',
        a: 'Avoid names that rhyme with or closely resemble the commands you plan to teach — {{dogCommandsShort}} and similar cues — along with names close to a person or another animal already in the house. Also avoid long names whose short form you have not deliberately chosen, since the short form is what you will actually use every day.',
      },
      {
        q: 'Why does it matter if a pet name sounds like a command?',
        a: 'Because the animal learns both as sound patterns, and two patterns separated by a single sound are hard to tell apart at distance or outdoors. Every ambiguous repetition slows down the command rather than the name, and the command most often affected is recall, which is the one that matters most when it fails.',
      },
      {
        q: 'Can two pets in the same house have similar names?',
        a: 'It is best avoided. Similar names mean both animals respond to an ambiguous sound, so you lose the ability to address one of them specifically, and both take longer to learn their own name. Aim for different opening sounds and a clear difference in the vowel shape rather than just a different spelling.',
      },
      {
        q: 'Are long pet names a bad idea?',
        a: 'Not inherently, but they are almost always shortened in daily use, so the practical choice is the short form rather than the full one. Say the long name at calling volume several times, listen to what it collapses into, and check that the result is a name you like and one that does not clash with a command.',
      },
      {
        q: 'How do I know if a funny pet name will age well?',
        a: 'Test it in three places: read aloud by a receptionist in a full waiting room, written on a microchip and insurance form, and shouted by you in a public park. Jokes based on innuendo, a public figure or a single year usually fail one of those, while humour that comes from the mismatch between the name and the animal tends to last.',
      },
    ],
    related: {
      heading: 'Where to go next',
      html: '<p>The <a href="{{url:dog}}">dog name generator</a> and <a href="{{url:cat}}">cat name generator</a> apply the first two rules on this page automatically — enter your household names and every clash is removed or flagged. Once a name is chosen, <a href="{{url:teach}}">teaching it</a> takes about a week, and if you are naming two animals at once, <a href="{{url:pairs}}">naming two pets</a> covers the extra constraint.</p>',
    },
  },

  pairs: {
    title: 'Naming Two Pets Together',
    description:
      'Naming a bonded pair or a litter is not naming one pet twice: the three constraints that make paired names work, themes that hold up, and ones that backfire.',
    breadcrumb: 'Naming Two Pets',
    h1: 'Naming two pets together',
    keywords:
      'naming two pets, bonded pair names, littermate names, matching pet names, names for two dogs, names for two cats',
    answerBox:
      'Paired names need three things at once: a link that makes them read as a set, opening sounds that are clearly different, and lengths within about two letters of each other. The theme is the easy part and the one most people over-invest in; the distinctness is what decides whether you can call one animal without both arriving, and it is the constraint that gets ignored.',
    card: {
      heading: 'Naming two pets',
      body: 'Why bonded pairs and littermates need names that connect and separate at the same time, and the themes that manage both.',
    },
    html: '<h2>Why two is a different problem</h2><p>Naming one animal is a search for a name you like. Naming two is a constraint problem, and the constraints pull against each other: the names should belong together, and they should be impossible to confuse. Most paired names fail on the second, because the first is the fun one to think about.</p><p>The failure is specific and it is not subtle. Two animals whose names share an opening sound and a syllable count both learn to respond to something in between — you call one, both arrive, and neither is really answering its own name. In a household with two animals that is a daily cost, and it is worst exactly when it matters: at the door, at the gate, at feeding time.</p><h2>The three constraints</h2><h3>A link, kept light</h3><p>The connection can be much lighter than people assume. Same origin, same era, same field, same register: Nero and Cassius are obviously a pair without either being half of a matched joke. What you want to avoid is a link so tight that the two names become one unit — Salt and Pepper, Yin and Yang, Thing One and Thing Two — because that pairing travels badly if the animals are ever separated, and it is a real consideration for a bonded pair, where one may outlive the other by years.</p><h3>Different opening sounds</h3><p>This is the constraint that actually does the work. The first sound of a name carries most of the discrimination, so two names should not start on the same consonant or the same vowel shape. Bella and Bailey is the classic mistake: same opening, same length, same stress pattern. Bella and Otto is the same aesthetic register with none of the confusion.</p><p>Rhyme at the end is the second-order version of the same problem. Maisie and Daisy differ at the front but collapse into each other at any distance. Aim for names that differ at both ends if you can, and at the front at minimum.</p><h3>Similar length, similar rhythm</h3><p>Names within a letter or two of each other, ideally with the same syllable count, read as a deliberate set rather than an accident. Milo and Otis works; Milo and Bartholomew looks like two unrelated decisions, and in practice the long one gets shortened into something that may or may not still fit the pair.</p><h2>Themes that hold up</h2><p>The themes that survive are the ones with enough members to allow a proper search, and enough internal variety that you are not forced into two similar-sounding picks. Mythology from a single tradition, constellations, trees, spices, jazz musicians, mountains, rivers, painters, single-origin word groups — all of these give you dozens of candidates in the same register, which means you can afford to reject the ones that collide.</p><p>The themes that backfire are the closed pairs: two halves of a phrase, two characters who are always named together, or anything where one name is meaningless without the other. They are charming for a year and awkward afterwards.</p><h2>Littermates and bonded pairs</h2><p>Littermates arriving together are the cleanest case: you choose both names at once, so you can optimise the whole set rather than fitting a name around one that already exists. Use that. Run the constraints on the pair as a set, and be willing to drop a name you like for one that separates better.</p><p>Bonded pairs — animals adopted together who are already attached — carry one extra consideration. They will often be called, fed and moved as a unit by everyone around them, which makes the distinctness constraint more important rather than less, since the environment is already blurring them together. If one arrives already named, treat the existing name as fixed and search around it.</p><h2>Adding a second animal to an existing one</h2><p>Here the first name is a hard constraint, and the job is to find a second name that fits beside it without colliding. Take the existing name and rule out anything sharing its opening sound, anything that rhymes with it, and anything within one sound of it in the middle. Then look for the link — and be relaxed about it, because a loose thematic connection reads as intentional and a tight one is not worth the confusion it buys.</p><h2>Three or more</h2><p>Three names multiply the pairwise checks rather than adding to them: every name has to separate from every other name, not just from the last one you chose. In practice a theme with a wide field and three distinct opening sounds is the whole method, and it is worth writing the three names down and calling each one aloud with the other two in mind.</p><p>Pair mode in the generators on this site does exactly this — it builds sets of two or three that share a style, sit close in length, start on different sounds, and pass the same phonetic check against each other that the conflict filter runs against your household.</p>',
    faqHeading: 'Questions about naming two pets',
    faqs: [
      {
        q: 'Should two pets have matching names?',
        a: 'A light thematic link works well; a tight matched pair usually does not. Names from the same origin, era or field read as a deliberate set while staying independent, whereas two halves of a phrase such as Salt and Pepper stop making sense if the animals are ever separated, which matters most for a bonded pair where one may outlive the other.',
      },
      {
        q: 'What makes two pet names too similar?',
        a: 'Sharing an opening sound is the main problem, because the first sound carries most of the discrimination — Bella and Bailey is the classic example. Rhyming endings such as Maisie and Daisy are the second, since the names collapse into each other at distance. Aim for different opening sounds and, ideally, different endings too.',
      },
      {
        q: 'How do I name a second pet when the first is already named?',
        a: 'Treat the existing name as fixed and search around it. Rule out anything that shares its opening sound, anything that rhymes with it, and anything close to it in the middle, then look for a loose thematic link. A relaxed connection reads as intentional without buying any of the confusion a tight one does.',
      },
      {
        q: 'Do littermates need themed names?',
        a: 'They do not need a theme, but choosing both names at once is a genuine advantage worth using. Because neither name is fixed you can optimise the whole set for distinctness rather than fitting one name around another, which usually means being willing to drop a name you like for one that separates more cleanly.',
      },
      {
        q: 'How do I name three pets without confusing them?',
        a: 'Every name has to separate from every other name, so three names means three pairwise checks rather than two sequential choices. Pick a theme with a wide field, give each name a different opening sound, then write all three down and call each one aloud while thinking of the other two before deciding.',
      },
    ],
    related: {
      heading: 'Where to go next',
      html: '<p>Turn on pair mode in the <a href="{{url:pet}}">pet name generator</a> to have the sets built and checked for you, or use the <a href="{{url:dog}}">dog</a> and <a href="{{url:cat}}">cat</a> generators for a single species. It is worth reading the wider list of <a href="{{url:avoid}}">names to avoid</a> before you settle, and <a href="{{url:teach}}">teaching the names</a> afterwards is easier when the two are genuinely distinct.</p>',
    },
  },

  meanings: {
    title: 'Where the Name Meanings Come From',
    description:
      'How name meanings on this site are researched: which sources count, how disputed etymologies are handled, and why no name here has an invented meaning.',
    breadcrumb: 'Name Meanings',
    h1: 'Where the name meanings come from',
    keywords:
      'pet name meanings, name origins, dog name meanings, cat name meanings, editorial policy, name etymology',
    answerBox:
      'Every one of the {{total}} names on this site carries a meaning taken from a documented source: a recorded etymology, an attested mythological or literary figure, or a plain-language word origin. Where sources disagree, the entry says what it is rather than picking a winner. No meaning here is inferred from how a name sounds, and no name is listed with a meaning invented to fill the space.',
    card: {
      heading: 'Where meanings come from',
      body: 'The sourcing standard behind every name on this site: what counts as documented, how disagreements are handled, and how to report an error.',
    },
    html: '<h2>Why this page exists</h2><p>Name-meaning content is unusually easy to get wrong and unusually hard to check. A meaning invented in one place gets copied into a dozen others within a year, and after that it looks well attested simply because it appears everywhere. Since the meaning shown next to a name is one of the two things this site asks you to make a decision on, it seemed worth writing down what standard those meanings are held to.</p><h2>What counts as a source</h2><p>A name is only listed here if its meaning traces back to at least one of the following:</p><ul><li><strong>A recorded etymology.</strong> A name with a documented derivation in an established language — Hebrew, Greek, Latin, Old Norse, Germanic, Irish, Japanese and so on — where the root and its sense are attested rather than reconstructed from resemblance.</li><li><strong>An attested figure.</strong> Names from mythology, folklore, history or published fiction, where the meaning given is who or what the figure was rather than a claim about the word’s roots. Odin, Athena, Fenrir and Gandalf are described this way, because that is what is actually documented about them.</li><li><strong>A plain word origin.</strong> Names that are simply words — Pepper, Biscuit, Shadow, Willow — where the meaning is the ordinary sense of the word and its origin is recorded in general reference.</li><li><strong>A documented diminutive.</strong> Short forms whose parent name has a recorded meaning, stated as such: Abby is listed as a short form of Abigail, with Abigail’s meaning attached rather than a separate one of its own.</li></ul><h2>What does not count</h2><ul><li><strong>Sound-alike derivation.</strong> A name that resembles a word in some language is not thereby derived from it. Resemblance is how most invented etymologies start.</li><li><strong>Meaning by association.</strong> A name that is popular for black cats does not mean “black”, and a name common among large dogs does not mean “strong”.</li><li><strong>Circular sourcing.</strong> A meaning that appears only on name-listing sites, all of which appear to be repeating each other, is treated as unsourced.</li><li><strong>Invention.</strong> If no meaning can be documented, the name is left off the list rather than given a plausible-sounding one. This is the reason some perfectly good pet names are missing.</li></ul><h2>Disputed and multiple meanings</h2><p>Etymologies disagree more often than name lists admit. Names cross languages, pick up folk etymologies, and get reinterpreted by the cultures that borrow them, and there is frequently no single correct answer. Where sources conflict, the entry gives the best-attested reading and says what kind of thing it is — a short form, a mythological figure, a word in a particular language — rather than presenting one interpretation as settled fact.</p><p>The practical implication is on the <a href="{{url:terms}}">terms page</a> as well, and it is worth repeating here: no meaning on this site is claimed to be the definitive or only interpretation of a name. If a name’s meaning is important to you specifically — a memorial name, a name with religious or cultural significance, a name from a language you do not speak — verify it against a source you trust before you commit to it.</p><h2>Meanings are for you, not for the animal</h2><p>Worth stating plainly, because it changes how much weight the meaning should carry. An animal learns its name as a sound and has no access to what it means. The meaning matters because you will say the word several times a day for a decade or more, and because knowing that Luna is Latin for moon, or that Loki is the Norse trickster god, is often what turns a shortlist of six into a decision.</p><p>That is also why meanings here sit on the card in plain sight rather than behind a toggle, an account, or an email form. A meaning you have to work to see is a meaning you will not check.</p><h2>How the list is maintained</h2><p>The name list is a static file of {{dogCount}} dog names and {{catCount}} cat names — {{total}} unique names in total, since a name suitable for both species is stored once for each. Names are added in batches, and each addition has to arrive with a meaning attached; a name with no documented meaning does not go in and wait for one.</p><p>Corrections are the main way errors get found, and they are genuinely welcome. If a meaning here looks wrong, send the name and, where you have one, a source you consider reliable to <a href="mailto:{{email}}">{{email}}</a> or through the <a href="{{url:contact}}">contact page</a>. Corrections that hold up are applied to the data file, which is what every page in every language reads from, so a fix lands everywhere at once.</p>',
    faqHeading: 'Questions about name meanings',
    faqs: [
      {
        q: 'Where do the name meanings on this site come from?',
        a: 'Each meaning traces to a documented source: a recorded etymology in an established language, an attested figure from mythology, folklore, history or published fiction, a plain word origin, or a diminutive whose parent name has a recorded meaning. Names whose meanings cannot be documented are left off the list rather than given an invented one.',
      },
      {
        q: 'Are the name meanings guaranteed to be correct?',
        a: 'No, and no name-meaning source can honestly claim that. Etymologies are disputed, names cross languages and pick up new interpretations, and there is often no single settled answer. Each entry gives the best-attested reading, and if a name’s meaning matters to you specifically it is worth verifying against a source you trust before committing.',
      },
      {
        q: 'Why are some common pet names missing?',
        a: 'Usually because no meaning could be documented for them. A name is only added with a sourced meaning attached, so a popular name with nothing reliable behind it is left out rather than listed with a plausible-sounding guess. If you know a name that belongs here and can point to a source, it is worth sending in.',
      },
      {
        q: 'Does the meaning of a name affect my pet?',
        a: 'No. An animal learns its name as a sound pattern and has no access to what the word means. Meanings matter to the person choosing, who will say the word several times a day for a decade or more, which is why they are shown on every card rather than hidden behind a toggle or an account.',
      },
      {
        q: 'How do I report an incorrect name meaning?',
        a: 'Email the name and, if you have one, a source you consider reliable, and the entry will be checked. Corrections are applied to the single data file every page reads from, so an accepted fix appears across every generator and every language at once. Suggestions for names to add are welcome on the same terms.',
      },
    ],
    related: {
      heading: 'Where to go next',
      html: '<p>Every suggestion from the <a href="{{url:dog}}">dog</a>, <a href="{{url:cat}}">cat</a> and <a href="{{url:pet}}">general pet</a> generators shows its meaning on the card. The <a href="{{url:about}}">about page</a> covers how the rest of the tool is built, and the <a href="{{url:contact}}">contact page</a> is where corrections and additions go.</p>',
    },
  },

  about: {
    title: 'About the Perfect Pet Name Generator',
    description:
      'What this pet name generator does differently: documented meanings, out-loud pronunciation, a training-command conflict filter and bonded-pair mode.',
    breadcrumb: 'About',
    h1: 'About this generator',
    answerBox:
      'Perfect Pet Name Generator is a free tool that suggests dog and cat names filtered by style, gender, starting letter and length. Every suggestion shows its documented meaning, plays aloud on request, and is checked against your household names and common training commands — the last of which almost no other name generator does.',
    html: '<h2>Why this exists</h2><p>Most pet name generators return a list of words. That is the easy part of the problem. The hard parts are the ones that only surface later: discovering the name means something unfortunate, realising you cannot pronounce it confidently, or spending three months of recall training fighting a name that sounds like “no”.</p><p>This tool was built around those three failures, with {{total}} dog and cat names as the base list. It is deliberately a single-step tool — set filters, generate — rather than a multi-question quiz, because a style filter already captures what a quiz asks and does it in one screen.</p><h2>What it does differently</h2><h3>Meanings that are always visible</h3><p>Every name shows its origin and meaning on the card itself. Not behind a toggle, not behind an account, and never behind an email form. Meanings come from established linguistic and cultural sources — recorded etymologies, mythology, documented word origins — and where a meaning is not documented, no meaning is invented to fill the space.</p><h3>Pronunciation you can hear</h3><p>Each name has a Pronounce button that uses the speech engine already built into your browser. No audio files are downloaded, no third-party text-to-speech service is called, and nothing about your session is transmitted. It matters most for mythology-derived and non-English names, where spelling is a poor guide to sound.</p><h3>A conflict filter for real households</h3><p>This is the piece missing from every comparable tool we could find. Type in the names of family members and existing pets, and each suggestion is compared against them phonetically — using Soundex and edit-distance checks rather than exact spelling matches — alongside an automatic check against common training commands. Close matches are removed; borderline ones are shown with a flag explaining the clash, so the judgement stays yours.</p><p>The reasoning is straightforward: a dog or cat learns its name as a distinct sound pattern. A name that rhymes with a command or another household name gives the animal an ambiguous signal every time it is used, and ambiguity is what slows training down.</p><h3>Bonded pair and littermate mode</h3><p>Naming two pets together is a different problem from naming one twice. Pair mode returns sets of two or three names that share a style and sit close in length — so they read as a set — while starting on different sounds and passing the same phonetic check against each other. It covers bonded pairs adopted together and littermates that need a shared theme.</p><h2>How the tool is built</h2><p>It is a static site. There is no backend, no database, no login and no server-side processing of anything you type. The name list is a static file, and all filtering, shuffling, phonetic comparison and speech happens in your browser. Batches are drawn with a Fisher-Yates shuffle, so every name matching your filters has an equal chance of appearing rather than the same few surfacing repeatedly.</p><h2>What it deliberately does not do</h2><ul><li>No personality quiz — the style filter does the same job in one step.</li><li>No account, sign-up or email capture for any feature, including the conflict filter.</li><li>No photo upload or photo-based breed guessing.</li><li>No invented meanings. If a meaning is not documented, the name is not listed.</li></ul><h2>Get in touch</h2><p>Corrections to a name meaning, suggestions for names to add, or anything else: <a href="{{url:contact}}">the contact page</a> has the details. Start naming from the <a href="{{url:dog}}">dog</a>, <a href="{{url:cat}}">cat</a> or <a href="{{url:pet}}">general pet</a> generators.</p>',
  },

  contact: {
    title: 'Contact Perfect Pet Name Generator',
    description:
      'Get in touch about a name meaning correction, a name you would like added, or a question about the pet name generator. One email address, no contact form.',
    breadcrumb: 'Contact',
    h1: 'Contact',
    answerBoxHtml:
      'Email <a href="mailto:{{email}}" style="color: var(--c-accent-on-soft);">{{email}}</a> for anything to do with this site. There is no contact form, because this is a static site with no server to receive one — which also means nothing you send passes through a third-party form service.',
    html: '<h2>What to get in touch about</h2><ul><li><strong>A name meaning looks wrong.</strong> Send the name and, if you have one, a source. Meanings here are drawn from documented linguistic and cultural references, and corrections are genuinely welcome.</li><li><strong>A name is missing.</strong> Names are only added with a documented meaning attached, so a source helps.</li><li><strong>Something is broken.</strong> The browser and device you were using is the most useful detail — the pronunciation feature in particular depends on the speech engine your device ships with.</li><li><strong>Privacy questions.</strong> The <a href="{{url:privacy}}">privacy policy</a> covers what is and is not collected; anything it does not answer, ask.</li></ul><h2>Response times</h2><p>This is a small independent site, so replies are not instant. Expect a few days.</p><h2>What this site cannot help with</h2><p>Suggestions here are naming ideas, not professional advice. For training problems, behaviour concerns or anything to do with your animal’s health, speak to a qualified trainer, behaviourist or veterinarian. The <a href="{{url:terms}}">terms and conditions</a> set out the limits of what the tool offers.</p>',
  },

  privacy: {
    title: 'Privacy Policy | Perfect Pet Name Generator',
    description:
      'How this static pet name generator handles data: no accounts, nothing you type is stored, and all name filtering happens inside your own browser.',
    breadcrumb: 'Privacy Policy',
    h1: 'Privacy Policy',
    updatedLabel: 'Last updated: {{updated}}',
    answerBox:
      'This site has no user accounts and stores nothing you type. Perfect Pet Name Generator is a static website: the name generator, the conflict filter and the pronunciation feature all run entirely inside your own browser, and no input from them is ever transmitted or saved. Analytics and advertising cookies are used and are described in full below; where consent is required they stay switched off until you accept them.',
    html: '<h2>1. Who this policy covers</h2><p>This policy applies to perfectpetnamegenerator.com and every page on it. It describes what happens to information when you use the site.</p><h2>2. What we do not collect</h2><p>There are no accounts, logins, registrations or email sign-ups anywhere on this site, and no feature is gated behind providing an email address. We do not ask for, receive or store your name, address, phone number, payment details or any other personal identifier.</p><h3>The “avoid names similar to” field</h3><p>Anything you type into the “avoid names similar to” field — including family members’ names and existing pets’ names — is processed entirely on your own device. That text is compared against the name list by JavaScript running in your browser. It is never sent to a server, never written to storage, never logged, and it disappears the moment you close or reload the page. The same is true of every other filter you set.</p><h2>3. Information collected automatically</h2><h3>Hosting</h3><p>The site is hosted on Cloudflare Pages. Like any web host, Cloudflare processes standard technical request data such as IP address, user agent and requested URL in order to serve the page and protect the service from abuse. This is handled by Cloudflare under their own privacy terms, and we do not have access to an identifiable log of individual visitors.</p><h3>Analytics</h3><p>This site uses Google Analytics to understand aggregate usage — how many people visit, which pages they land on, and roughly where in the world they are. Google Analytics sets cookies and processes an anonymised form of your IP address to do this. The data we see is aggregate and statistical; it does not identify you personally, and it is not combined with anything you type into the generator (which, as above, never leaves your browser).</p><p>You can opt out of Google Analytics entirely using <a href="https://tools.google.com/dlpage/gaoptout" rel="nofollow noopener" target="_blank">Google’s browser opt-out add-on</a>, or by using your browser’s cookie controls or any standard content blocker. The generator works exactly the same either way.</p><h3>Advertising</h3><p>This site is supported by advertising served through Google AdSense. Google is a third-party vendor that uses cookies to serve ads here, and its use of advertising cookies enables Google and its partners to serve ads based on your visits to this site and to other sites on the internet. Google’s use of advertising cookies is governed by <a href="https://policies.google.com/technologies/ads" rel="nofollow noopener" target="_blank">Google’s advertising policies</a>, and the way Google uses data from sites that use its services is described at <a href="https://policies.google.com/technologies/partner-sites" rel="nofollow noopener" target="_blank">policies.google.com</a>.</p><p>You can opt out of personalised advertising at any time in <a href="https://www.google.com/settings/ads" rel="nofollow noopener" target="_blank">Google’s ad settings</a>, and out of third-party vendors’ use of cookies for personalised advertising at <a href="https://www.aboutads.info/choices/" rel="nofollow noopener" target="_blank">aboutads.info</a>. We receive no personally identifying information from advertising and cannot see who any individual ad was shown to.</p><h3>Your cookie choices</h3><p>Where consent is legally required — the EEA, the United Kingdom and Switzerland — analytics and advertising cookies stay switched off until you accept them, and a banner asks on your first visit. Rejecting takes one click and is offered as prominently as accepting. Your choice is stored in your own browser and can be changed at any time from the “Cookie settings” link in the footer. Nothing on this site is withheld from you for rejecting.</p><h2>4. Browser storage</h2><p>Two items are saved in your browser’s local storage: your light or dark theme preference, so the site does not flash the wrong colours on your next visit, and your cookie choice, so the banner does not ask again on every page. Both are single values, both stay on your device, and neither is ever transmitted. Clearing your browser data removes them. The language picker stores nothing — each language is a plain link to its own page. The list of names you have already been shown is held in memory only and is gone as soon as you close the tab.</p><h2>5. Third-party services</h2><p>The site loads its fonts, styles, name data and scripts from its own domain rather than from third-party CDNs. The pronunciation feature uses the speech engine already built into your operating system or browser; no audio is downloaded and no text-to-speech service is contacted. Aside from Cloudflare as host, and Google as the provider of the analytics and advertising described above, no third party receives data from your use of this site.</p><h2>6. Links to other sites</h2><p>Pages here may link to external sites. Those sites have their own privacy practices, and this policy does not cover them.</p><h2>7. Children</h2><p>This site is a general-audience naming tool and is not directed at children under 13. We do not knowingly collect personal information from anyone, children included — there is no mechanism on the site by which personal information could be submitted.</p><h2>8. Your rights</h2><p>Privacy laws including the GDPR and the CCPA give you rights to access, correct and delete personal data held about you. Because this site holds no personal data about you, there is nothing to retrieve or erase on our side. For the analytics data Google processes, use Google’s own controls linked above. Questions are welcome at the address below.</p><h2>9. Changes to this policy</h2><p>This policy will be updated if the site’s data practices change — a new analytics or advertising provider being the most likely reason. The “last updated” date at the top always reflects the current version.</p><h2>10. Contact</h2><p>Privacy questions can go to <a href="mailto:{{email}}">{{email}}</a>, or via the <a href="{{url:contact}}">contact page</a>.</p>',
  },

  terms: {
    title: 'Terms and Conditions | Perfect Pet Name Generator',
    description:
      'Terms for using the Perfect Pet Name Generator: a free tool whose names and meanings are provided as-is, for inspiration, with no guarantee of exclusivity.',
    breadcrumb: 'Terms and Conditions',
    h1: 'Terms and Conditions',
    updatedLabel: 'Last updated: {{updated}}',
    answerBox:
      'This tool is free to use and its output is provided as-is, for inspiration. Name suggestions and the meanings shown alongside them are offered in good faith from documented sources, but no meaning is guaranteed to be the definitive or only interpretation of a name. Using the site means accepting these terms.',
    html: '<h2>1. The service</h2><p>Perfect Pet Name Generator provides pet name suggestions, name meanings, pronunciation playback and phonetic conflict checking. It is free to use, requires no account, and is offered without any subscription, payment or registration; the site is funded by advertising instead.</p><h2>2. Name suggestions are inspiration, not advice</h2><p>Every name returned is a suggestion. Nothing here is professional training, behavioural or veterinary advice. The naming guidance on this site reflects widely accepted training principles, but your animal is an individual, and a qualified trainer, behaviourist or veterinarian is the right source for decisions about their care and training.</p><h2>3. Name meanings</h2><p>Meanings and origins are drawn from established linguistic and cultural sources and are presented in good faith. Names frequently carry different meanings across languages, regions and traditions, and etymologies are sometimes disputed among sources. No meaning shown here is claimed to be the definitive, complete or exclusive interpretation of a name. If you are choosing a name where meaning matters to you significantly, verify it against a source you trust before committing.</p><h2>4. The conflict filter</h2><p>The conflict filter compares names phonetically against common training commands and any words you enter. It is a helpful heuristic, not a guarantee. It cannot know every word your household uses, every accent that name will be spoken in, or how a particular animal will respond. Treat a clear result as a good sign, not as a promise.</p><h2>5. Availability</h2><p>The site is provided on an “as available” basis. It may be changed, interrupted or discontinued at any time without notice. Features that depend on your browser — the pronunciation playback in particular — depend on capabilities we do not control and may not work on every device.</p><h2>6. Acceptable use</h2><p>You may use the generator freely for personal and commercial purposes, including naming animals in a shelter, rescue or breeding context. You may not scrape, bulk-download or redistribute the underlying name and meaning database as a dataset or as a competing product, attempt to disrupt the site, or present the site as your own.</p><h2>7. Intellectual property</h2><p>Individual names are not owned by anyone and you are free to use any name you find here. The site’s design, written content, and the compiled name-and-meaning database as a collection remain the property of Perfect Pet Name Generator.</p><h2>8. No warranty and limitation of liability</h2><p>The site and its content are provided without warranties of any kind, express or implied, including accuracy, fitness for a particular purpose, and uninterrupted availability. To the fullest extent permitted by law, the operators of this site are not liable for any loss or damage arising from your use of it or from any naming decision you make using it.</p><h2>9. External links</h2><p>Links to third-party sites are provided for convenience. We are not responsible for their content, accuracy or practices.</p><h2>10. Changes to these terms</h2><p>These terms may be updated as the site changes. The “last updated” date above reflects the current version, and continued use of the site after a change means you accept it.</p><h2>11. Contact</h2><p>Questions about these terms: <a href="mailto:{{email}}">{{email}}</a>, or use the <a href="{{url:contact}}">contact page</a>. See also the <a href="{{url:privacy}}">privacy policy</a>.</p>',
  },

  /** Translated in the sitemap-visible pages only; 404/500 stay English. */
  schema: {
    appDescription:
      'Free dog and cat name generator with documented name meanings, browser-based pronunciation, a training-command conflict filter, and bonded-pair mode for naming two pets together.',
    features: [
      'Dog and cat name generator',
      'Documented meaning and origin for every name',
      'Pronunciation playback using the browser speech engine',
      'Conflict filter against training commands and household names',
      'Bonded pair and littermate naming mode',
      'Filters for gender, style, starting letter and maximum name length',
    ],
  },
};

export default en;
