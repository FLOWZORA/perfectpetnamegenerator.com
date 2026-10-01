/**
 * Français. Mirrors the shape of ./en.ts exactly.
 *
 * Placeholders ({{total}}, {{url:dog}}, …) and the markup inside `*Html`
 * strings must survive translation untouched. FAQ answers stay plain text
 * because they are copied into FAQPage JSON-LD.
 *
 * The training commands the tool checks are English words, because the name
 * list is English. The copy says so rather than pretending otherwise, and
 * points at the avoid field for commands in the reader's own language.
 */
const fr = {
  common: {
    siteName: 'Générateur Parfait de Noms pour Animaux',
    skipLink: 'Aller au contenu principal',
    themeToggle: 'Basculer entre le thème clair et le thème sombre',
    languageLabel: 'Langue',
    languageNav: 'Choisir une langue',
    mainNav: 'Principal',
    breadcrumb: 'Fil d’Ariane',
    home: 'Accueil',
  },

  nav: {
    dog: 'Noms de chien',
    cat: 'Noms de chat',
    pet: 'Noms d’animaux',
    about: 'À propos',
  },

  footer: {
    blurb:
      'Des idées de noms de chien et de chat avec de vraies significations, une prononciation à voix haute et un vérificateur qui évite qu’un nouveau nom entre en conflit avec vos ordres de dressage.',
    headings: { generators: 'Générateurs', guides: 'Guides', site: 'Site', legal: 'Mentions légales' },
    links: {
      home: 'Accueil',
      dog: 'Générateur de noms de chien',
      cat: 'Générateur de noms de chat',
      pet: 'Générateur de noms d’animaux',
      teach: 'Apprendre son nom',
      avoid: 'Noms à éviter',
      pairs: 'Nommer deux animaux',
      meanings: 'Signification des noms',
      about: 'À propos',
      contact: 'Contact',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions générales',
    },
    copyright:
      '© {{year}} Perfect Pet Name Generator. Les significations proviennent de sources linguistiques et culturelles établies ; les suggestions sont proposées à titre d’inspiration, et non comme un conseil professionnel de dressage ou vétérinaire.',
  },

  styles: {
    fantasy: 'Fantasy',
    funny: 'Drôle',
    cute: 'Mignon',
    strong: 'Fort',
    elegant: 'Élégant',
    classic: 'Classique',
    mythical: 'Mythologique',
    food: 'Gourmand',
    modern: 'Moderne',
    unique: 'Unique',
  },

  generator: {
    speciesLegend: 'Espèce',
    speciesAny: 'Chiens et chats',
    speciesDog: 'Chien',
    speciesCat: 'Chat',

    genderLegend: 'Sexe',
    genderAny: 'Peu importe',
    genderMale: 'Mâle',
    genderFemale: 'Femelle',
    genderHint: 'Les choix mâle et femelle incluent aussi les noms mixtes.',

    styleLegend: 'Style',
    stylePickAny: '(autant que vous voulez)',
    styleHint:
      'Si rien n’est sélectionné, tous les styles sont pris en compte. En cocher plusieurs renvoie les noms correspondant à l’un d’entre eux.',

    letterLabel: 'Première lettre',
    letterAny: 'Toutes les lettres',

    maxLenLabel: 'Longueur maximale',
    maxLenAny: 'Toutes les longueurs',
    maxLenOption: '{{n}} lettres ou moins',
    maxLenHint:
      'Utile pour les médailles gravées, dont la zone de gravure tient environ 8 caractères par ligne.',

    avoidLabel: 'Éviter les noms proches de…',
    avoidPlaceholder: 'Jake, Nora, Bo — membres de la famille, autres animaux, tout ce qu’il faut éviter',
    avoidHtml:
      '<strong style="color: var(--c-text);">Pourquoi c’est important :</strong> un animal apprend son nom comme un son distinct. Un nom qui rime avec celui d’un proche ou avec un ordre rend les deux plus difficiles à apprendre — « Bo » se confond avec « No », « Kit » avec « Sit ». Chaque suggestion est aussi comparée automatiquement à {{commandCount}} {{commandKind}} courants ({{commandExamples}}…). Les correspondances nettes sont masquées ; les cas limites sont signalés pour que vous décidiez. Ce que vous saisissez ici est comparé dans votre navigateur et n’est jamais enregistré ni envoyé où que ce soit.',
    commandKindDog: 'ordres de dressage en anglais',
    commandKindCat: 'appels pour chats en anglais',

    optionsLegend: 'Options',
    excludeShown: 'Exclure les noms déjà affichés',
    excludeShownHint: 'Chaque génération renvoie des noms que vous n’avez pas encore vus.',
    hideFlagged: 'Masquer entièrement les noms signalés',
    hideFlaggedHint:
      'Désactivé par défaut, pour que vous voyiez les conflits limites et en jugiez vous-même.',
    pairMode: 'Vous nommez deux animaux en même temps ?',
    pairModeHint:
      'Renvoie des ensembles qui partagent un style, ont des longueurs proches et ne se confondent pas entre eux — pour les paires inséparables et les portées.',
    setSizeLabel: 'Noms par ensemble',
    setSize2: '2 — une paire',
    setSize3: '3 — une portée',

    generate: 'Générer des noms',
    copyBatch: 'Copier cette série',
    startOver: 'Tout recommencer',
    ctaHint:
      'Obtenez instantanément un nom de {{species}} au hasard — chaque clic tire une nouvelle série parmi les noms qui correspondent à vos filtres, alors continuez jusqu’à trouver le bon.',
    speciesWordDog: 'chien',
    speciesWordCat: 'chat',
    speciesWordAny: 'animal',

    resultsHeading: 'Idées de noms',
    resultsAria: 'Noms d’animaux générés',
    statusInitialHtml:
      'Une première sélection se trouve ci-dessous — appuyez sur <strong>Générer des noms</strong> pour une série adaptée à vos filtres.',
    noscript:
      'Le générateur interactif nécessite JavaScript. Les noms de départ ci-dessous sont affichés en entier, significations comprises.',
    unisex: 'Mixte',
    male: 'Mâle',
    female: 'Femelle',
    meaningLabel: 'Signification :',
  },

  /** Strings the client controller renders after the page has loaded. */
  runtime: {
    pronounce: '🔊 Prononcer',
    pronounceAria: 'Écouter la prononciation de {{name}} à voix haute',
    notSupported: 'Indisponible ici',
    bootError: 'Le générateur n’a pas pu être chargé. Rechargez la page.',

    conflictHtml: 'Conflit avec le dressage : ce nom {{reason}}.',
    reasons: {
      same: 'est le même mot que « {{word}} »',
      oneSound: 'n’est qu’à un son de « {{word}} »',
      veryClose: 'est très proche de « {{word}} »',
      almostIdentical: 'sonne presque comme « {{word}} »',
      rhymes: 'rime avec « {{word}} »',
      similar: 'ressemble à « {{word}} »',
    },

    dogBadge: 'Chien',
    catBadge: 'Chat',

    whyTogether:
      'Pourquoi ils fonctionnent ensemble : {{style}}, {{lengths}} lettres, des sons d’attaque différents, et aucun risque de les confondre.',
    inStyle: 'style {{styles}}',
    matchedInStyle: 'style assorti',
    joiner: ' et ',

    finding: 'Recherche de noms…',
    loadError: 'Impossible de charger la liste de noms. Vérifiez votre connexion et réessayez.',

    emptyHeading: 'Aucun nom ne correspond à ces filtres',
    emptyLead:
      'Le filtre le plus restrictif ici est {{reason}}. Élargissez celui-là d’abord — le reste de vos choix peut rester.',
    emptyGeneric: 'Essayez de retirer un filtre — le reste de vos choix peut rester.',
    emptyStartOver:
      'Utilisez « Tout recommencer » ci-dessous pour vider la liste des noms déjà affichés.',
    emptyReasons: {
      gender: 'le filtre de sexe',
      style: 'cette combinaison de styles',
      letter: 'la première lettre',
      length: 'la longueur maximale du nom',
      shown: '« exclure les noms déjà affichés » — vous avez vu toutes les correspondances',
      conflict: 'le filtre de conflits, qui a écarté toutes les correspondances restantes',
      pair: 'le mode paire, qui a besoin de plusieurs noms compatibles pour former un ensemble',
    },

    noSets: 'Aucun ensemble compatible avec ces filtres.',
    noMatches: 'Aucune correspondance.',
    setsStatus:
      '{{count}} {{word}} qui sonnent bien ensemble et ne se confondent pas entre eux.',
    pairOne: 'paire',
    pairMany: 'paires',
    setOne: 'ensemble',
    setMany: 'ensembles',

    statusNamesOne: '1 nom sur {{pool}} correspondant à vos filtres',
    statusNamesMany: '{{count}} noms sur {{pool}} correspondant à vos filtres',
    statusHidden: '{{count}} masqués par le filtre de conflits',
    statusFlagged: '{{count}} signalés comme conflit possible avec le dressage',

    copied: 'Copié',
    copyBlocked: 'La copie est bloquée dans ce navigateur — sélectionnez les noms à la main.',
    clearedShown:
      'Liste des noms affichés vidée. Tous les noms sont de nouveau disponibles.',
  },

  home: {
    title: 'Générateur de Noms pour Animaux | Chiens et Chats',
    description:
      'Générateur de noms pour animaux gratuit. Générez des noms de chien et de chat avec de vraies significations, écoutez-les et évitez les conflits d’ordres.',
    eyebrow: 'Gratuit · Sans inscription · {{total}} noms',
    h1: 'Générateur de noms pour animaux',
    answerBox:
      'Ce générateur de noms pour animaux gratuit crée au hasard des noms de chien et de chat selon les filtres que vous définissez : style, sexe, première lettre et longueur. Chaque nom affiche une signification documentée, se prononce d’une simple pression, et est vérifié pour ne pas entrer en conflit avec vos ordres de dressage ni avec les noms déjà utilisés à la maison.',
    leadHtml:
      'Vous nommez un chien ? <a class="underline" style="color: var(--c-accent-on-soft);" href="{{url:dog}}">Utilisez le générateur de noms de chien</a>. Un chat ? <a class="underline" style="color: var(--c-accent-on-soft);" href="{{url:cat}}">Utilisez le générateur de noms de chat</a>. Ou générez pour les deux ci-dessous.',
    generator: {
      heading: 'Générer des noms de chien et de chat',
      intro:
        'Définissez autant de filtres que vous voulez, ou aucun, puis générez. Chaque nom arrive avec sa signification.',
    },
    styles: {
      heading: 'Styles populaires : noms fantasy et noms drôles',
      lead: 'Les {{styleCount}} filtres de style ci-dessus fonctionnent tous de la même façon, mais ces deux-là sont ceux que l’on vient chercher par leur nom.',
      fantasy: {
        heading: 'Noms fantasy pour animaux',
        html: '<p class="mt-2 text-[0.9375rem]">Vous cherchez un générateur de noms fantasy ? Cochez <strong>Fantasy</strong> dans le filtre de style et la série revient de la mythologie, de la fiction épique et de la science-fiction — {{fantasyCount}} noms allant de Gandalf, Arwen et Thorin à Zelda, Kenobi et Krokmou. Cochez <strong>Mythologique</strong> en plus pour élargir encore le tirage avec Odin, Athéna, Fenrir et Freya.</p><p class="mt-2 text-[0.9375rem]">Les noms fantasy dépassent souvent l’idéal d’une ou deux syllabes, et c’est pourquoi il vaut la peine d’associer le filtre Fantasy à un maximum de cinq ou six lettres : Frodo porte d’un bout à l’autre d’un parc, tandis qu’Hercule deviendra Herc dès la deuxième semaine, que vous l’ayez prévu ou non.</p>',
      },
      funny: {
        heading: 'Noms drôles pour animaux',
        html: '<p class="mt-2 text-[0.9375rem]">Drôle est le style le plus fourni ici — {{funnyCount}} noms allant de Waffles, Gnocchi et Meatball à Bandit, Hooligan et Chonk. Un générateur de noms drôles comporte un piège qu’il faut nommer : la blague doit survivre au fait d’être criée dans une salle d’attente vétérinaire et écrite sur un formulaire de puce électronique. Dites donc votre liste à voix haute, au volume d’un appel, avant de vous décider.</p><p class="mt-2 text-[0.9375rem]">Plusieurs des options les plus drôles cachent un visage sérieux — Loki est le dieu farceur nordique, Otis signifie « richesse » en germanique — et la signification figure sur chaque fiche, pour que vous sachiez exactement ce que vous choisissez.</p>',
      },
    },
    different: {
      heading: 'Trois choses que fait ce générateur et que la plupart ne font pas',
      cards: [
        {
          heading: 'Des significations vraiment lisibles',
          body: 'Chaque nom affiche son origine et sa signification sur la fiche, toujours visibles. Pas de bouton à déplier, pas de compte, pas de mur d’adresse e-mail. Un nom que vous direz dix fois par jour mérite d’être connu avant d’être choisi.',
        },
        {
          heading: 'Un filtre de conflits pour votre foyer',
          body: 'Saisissez les noms des membres de la famille et des autres animaux : le générateur retire les suggestions qui sonnent trop proche, en plus d’une vérification automatique face aux ordres de dressage courants. C’est la pièce que presque aucun autre outil de noms ne propose.',
        },
        {
          heading: 'Des noms pour deux animaux à la fois',
          body: 'Les paires inséparables et les portées ont besoin de noms qui s’accordent en style tout en restant nettement distincts à l’oreille. Le mode paire construit ces ensembles et compare les noms entre eux, pas seulement à ceux de votre foyer.',
        },
      ],
    },
    pick: {
      heading: 'Choisissez votre générateur',
      dog: {
        heading: 'Générateur de noms de chien',
        body: '{{dogCount}} noms de chien avec significations, vérifiés face à {{dogCommandCount}} ordres courants dont sit, stay, come et down.',
      },
      cat: {
        heading: 'Générateur de noms de chat',
        body: '{{catCount}} noms de chat avec significations, calibrés sur les sons auxquels les chats réagissent et vérifiés face aux appels d’un foyer avec chat.',
      },
      pet: {
        heading: 'Des noms pour un foyer à plusieurs animaux',
        body: 'Les deux espèces à la fois, plus des repères pour nommer un animal dans une maison où vivent déjà des enfants, un conjoint ou d’autres animaux.',
      },
    },
    how: {
      heading: 'Le raisonnement derrière les conseils de ce site',
      html: '<p>Les règles appliquées ici sont celles que donnent les éducateurs professionnels : un nom court, nettement distinct des ordres, et constant une fois choisi. Un chien ou un chat apprend un nom comme un motif sonore associé à l’attention et à la récompense, non comme un mot porteur de sens. C’est pourquoi un nom qui recoupe « no » ou « sit » vous coûte du temps de dressage bien réel : vous demandez à l’animal de séparer deux signaux qui parviennent à son oreille de façon presque identique.</p><p>Les significations affichées à côté de chaque nom fonctionnent en sens inverse : elles comptent pour vous, pas pour l’animal. Elles figurent ici parce qu’un nom porte quinze ans d’usage quotidien, et savoir que Luna signifie « lune » en latin ou qu’Odin appartient à la mythologie nordique est le genre de détail qui transforme une liste en décision. Les significations viennent de sources linguistiques et culturelles documentées, et aucune n’est devinée.</p><p>Rien sur ce site ne demande de compte. Le filtre de conflits fonctionne entièrement dans votre navigateur, et c’est pourquoi les noms que vous y saisissez ne quittent jamais votre appareil — voyez la <a href="{{url:privacy}}">politique de confidentialité</a> pour le détail.</p>',
    },
    about: {
      heading: 'À propos de ce générateur de noms d’animaux',
      paragraphs: [
        'Perfect Pet Name Generator est un générateur de noms d’animaux gratuit pour chiens et chats, conçu pour régler les aspects du choix d’un nom qui n’apparaissent que plus tard, et pas seulement pour vous donner une liste de mots. Il s’appuie sur {{total}} noms répartis en {{styleCount}} styles. Chaque nom proposé porte une signification documentée, un bouton qui le prononce à voix haute dans votre navigateur et une vérification automatique face aux ordres que votre animal doit apprendre. Rien n’est verrouillé : aucune inscription, aucune étape par e-mail, aucune version payante sur aucune fonction, y compris le filtre de conflits du foyer et le mode duo.',
        'Au fond, c’est un générateur de noms aléatoire. À chaque appui sur Générer, les noms qui correspondent à vos filtres sont mélangés avec un algorithme de Fisher-Yates et une nouvelle série est tirée, si bien que chaque nom éligible a une chance égale d’apparaître au lieu de voir revenir toujours les mêmes. Sans aucun filtre, il fonctionne comme un pur générateur de noms de chien aléatoire et générateur de noms de chat aléatoire. Ajoutez un style, une lettre initiale ou une limite de longueur et le tirage reste aléatoire : il se fait simplement dans un ensemble plus restreint.',
        'Le générateur de noms de chien est réglé sur la façon dont un chien apprend réellement un nom. Vous pouvez filtrer par mâle, femelle ou unisexe, par style, par lettre initiale et par une longueur maximale qui tient sur une médaille gravée. Les vues mâle et femelle du générateur de noms de chien conservent les noms unisexes dans les résultats, pour ne jamais perdre une bonne option à cause d’une séparation de genre trop rigide. Chaque suggestion est comparée à {{dogCommandCount}} ordres courants comme sit, stay, come, heel et down ; les noms trop proches sont masqués, et les cas limites sont signalés par un indicateur pour que la décision finale reste la vôtre.',
        'Le générateur de noms de chat suit la même logique, mais s’appuie sur les sons auxquels les chats réagissent le mieux : des noms courts aux sonorités vives et aiguës, comme le « i » de Mimi ou le k dur de Kiko. Filtrez le générateur de noms de chat par mâle ou femelle, par style, par lettre ou par longueur, et il évite les mots employés dans un foyer avec chat. Comme pour les chiens, les résultats mâle et femelle du générateur de noms de chat gardent les noms unisexes dans l’ensemble plutôt que de les écarter.',
        'Si vous remplissez des papiers de pedigree, l’outil sert aussi de générateur de noms de chien enregistrés. Les noms enregistrés pour l’AKC, le Kennel Club et les registres similaires sont longs, formels et souvent construits autour d’un thème d’élevage ou de portée, tandis que le nom d’appel utilisé à la maison reste court. Désactivez la limite de longueur et choisissez un style élégant ou classique pour le nom enregistré, puis relancez le générateur avec une limite de cinq ou six lettres pour trouver le nom d’appel quotidien qui l’accompagne.',
        'Les styles sont la façon dont la plupart des gens réduisent la liste. Fantasy puise dans le mythe, la fiction épique et la science-fiction ; Drôle est la catégorie la plus fournie et va de Waffles et Meatball à Bandit et Hooligan ; et à côté figurent les filtres mignon, fort, élégant, classique, mythique, inspiré de la nourriture, moderne et unique. Sélectionnez-en plusieurs à la fois et le générateur renvoie les noms correspondant à l’un quelconque d’entre eux, ce qui est le moyen le plus rapide d’élargir une recherche devenue trop étroite.',
        'Les significations sont l’autre moitié de l’outil, et elles comptent pour vous plutôt que pour l’animal. Un nom prononcé dix fois par jour pendant quinze ans mérite d’être une valeur connue, aussi l’origine et le sens de chaque nom figurent-ils en clair sur la fiche, jamais derrière un menu déroulant, un compte ou un formulaire d’e-mail. Les significations proviennent d’étymologies attestées, de la mythologie et d’origines de mots documentées, et lorsqu’une signification n’est pas documentée, le nom est écarté plutôt que doté d’un sens inventé.',
        'Chaque nom généré possède un bouton Prononcer qui le lit à voix haute avec le moteur vocal déjà intégré à votre appareil. Aucun fichier audio n’est téléchargé et aucun service tiers de synthèse vocale n’est contacté. Cela compte surtout pour les noms d’origine mythologique et non anglophones, où l’orthographe renseigne peu sur la prononciation réelle, et écouter une liste courte au volume d’un appel est le moyen le plus rapide de repérer un nom difficile à crier à travers un parc.',
        'Le filtre de conflits du foyer est l’élément que presque aucun autre générateur de noms d’animaux ne propose. Saisissez les noms déjà utilisés à la maison — un conjoint, un enfant, un autre animal, voire un surnom lancé à travers le jardin — et chaque suggestion est comparée à eux phonétiquement plutôt que par l’orthographe, car « Kay » et « Stay » ne partagent aucune lettre initiale mais se confondent totalement à l’oreille. Les correspondances nettes sont retirées et les cas limites signalés, et tout ce que vous saisissez est comparé dans votre navigateur et n’est jamais stocké, journalisé ni envoyé où que ce soit.',
        'Nommer deux animaux à la fois est un problème différent de nommer deux fois un seul animal ; le générateur dispose donc d’un mode duo. Il renvoie des ensembles de deux ou trois noms qui partagent un style et restent à environ deux lettres de la même longueur, puis rejette tout ensemble dont les noms sont phonétiquement proches les uns des autres. Il est pensé pour les duos inséparables adoptés ensemble et pour les portées qui ont besoin d’un thème commun sans répondre au nom l’un de l’autre.',
        'Tout le site est statique : pas de comptes, pas de base de données, aucun traitement serveur de ce que vous saisissez. Commencez par le générateur de noms de chien, le générateur de noms de chat, ou générez pour les deux espèces avec l’outil ci-dessus, et faites les deux choses qui évitent de regretter un nom : lisez la signification, et prononcez le nom à voix haute avant de décider.',
      ],
    },
    faqHeading: 'Questions fréquentes',
    faqs: [
      {
        q: 'Qu’est-ce qui fait un bon nom d’animal ?',
        a: 'Un bon nom d’animal fait une ou deux syllabes, se termine par une voyelle claire ou une consonne franche, et ne ressemble à aucun mot que vous utilisez comme ordre. Les noms courts portent mieux à travers un parc ou une pièce, et une finale distincte aide le chien ou le chat à repérer son nom dans une conversation ordinaire. La signification compte pour vous plus que pour l’animal, et c’est pourquoi chaque nom ici affiche son origine.',
      },
      {
        q: 'Pourquoi un nom d’animal ne doit-il pas ressembler à un ordre ?',
        a: 'Un nom qui sonne comme un ordre ralentit le dressage, parce que l’animal ne distingue pas les deux signaux. « Bo » et « no », ou « Kit » et « sit », ne diffèrent que d’un son : l’animal reçoit donc un signal ambigu chaque fois que l’un ou l’autre est utilisé. Ce générateur compare chaque suggestion aux ordres courants et aux noms de votre foyer que vous saisissez, masque les correspondances nettes et signale les cas limites.',
      },
      {
        q: 'Ce générateur de noms est-il gratuit ? Faut-il un compte ?',
        a: 'Il est entièrement gratuit et aucune fonction ne demande de compte, d’inscription ou d’adresse e-mail, y compris le filtre de conflits et le mode paire. Tout fonctionne dans votre navigateur, à partir d’une liste de noms statique. Rien de ce que vous saisissez n’est enregistré ni envoyé à un serveur.',
      },
      {
        q: 'Puis-je générer des noms pour deux animaux adoptés ensemble ?',
        a: 'Oui. Activez « Vous nommez deux animaux en même temps ? » et le générateur renvoie des ensembles de deux ou trois noms au lieu d’une simple liste. Chaque ensemble partage un style, reste à deux lettres près de la même longueur, commence par un son différent et passe la même vérification phonétique que le filtre de conflits, pour que les animaux ne répondent pas au nom de l’autre.',
      },
      {
        q: 'Quels sont les bons noms fantasy pour un animal ?',
        a: 'Les bons noms fantasy se reconnaissent d’une histoire ou d’un mythe tout en restant assez courts pour être appelés d’un bout à l’autre du jardin : Gandalf, Arwen, Thorin, Zephyr et Zelda réussissent les deux. Le filtre Fantasy en contient {{fantasyCount}}, et cocher Mythologique en plus élargit le tirage avec Odin, Athéna, Fenrir et Freya. Les noms longs finissent raccourcis dans la pratique : vérifiez que le nom tient encore en deux syllabes avant de trancher.',
      },
      {
        q: 'Qu’est-ce qu’un nom drôle pour un animal ?',
        a: 'Les noms drôles sont ceux dont l’humour naît de l’écart entre le nom et l’animal qui le porte : Waffles, Meatball, Bandit, Chonk et Hooligan sont le genre de résultats que renvoie le filtre Drôle, et il y en a {{funnyCount}} ici. Le seul vrai test est de savoir si la blague fonctionne encore quand un vétérinaire l’appelle dans une salle d’attente, alors lisez votre liste à voix haute avant de décider.',
      },
      {
        q: 'D’où viennent les significations des noms ?',
        a: 'Les significations proviennent de sources linguistiques et culturelles établies plutôt que d’être inventées pour l’outil : étymologies attestées, mythologie et origines de mots documentées. Elles sont affichées en entier à côté de chaque nom, jamais cachées derrière un bouton ou un formulaire, pour que vous puissiez juger un nom avant de vous engager pour quinze ans.',
      },
    ],
  },

  dog: {
    title: 'Générateur de Noms de Chien avec Significations',
    description:
      'Générateur de noms de chien gratuit avec significations et prononciation. Filtrez par style, sexe, lettre et longueur, et évitez les conflits d’ordres.',
    breadcrumb: 'Noms de chien',
    h1: 'Générateur de noms de chien',
    answerBox:
      'Le nom d’un chien doit faire une ou deux syllabes et se distinguer nettement de chaque ordre que vous comptez lui apprendre. Ce générateur s’appuie sur {{dogCount}} noms de chien aux significations documentées, prononce chacun d’eux à voix haute et retire automatiquement les suggestions qui ressemblent à {{dogCommandCount}} ordres courants — pour que le nom choisi n’entre pas en concurrence avec les mots que votre chien doit apprendre.',
    generator: {
      heading: 'Générer des noms de chien',
      intro:
        'Filtrez par style, sexe, première lettre ou longueur adaptée à une médaille. Ajoutez les noms du foyer à éviter, et le filtre de conflits s’occupe du reste.',
    },
    prose: {
      heading: 'Pourquoi le nom d’un chien ne doit pas ressembler à un ordre',
      html: '<p>Un chien apprend un nom comme un son, non comme un mot. Quand le nom recoupe un signal, chaque répétition enseigne l’ambiguïté au lieu de la clarté : le chien entend quelque chose de proche de « no » et doit deviner s’il est appelé ou corrigé. Le coût se mesure en semaines de rappel plus lent à installer, et le rappel est l’ordre qui compte le plus.</p><p>Les ordres vérifiés automatiquement sur cette page sont : {{dogCommands}}. Ils sont en anglais parce que la liste de noms l’est ; si vous éduquez en français, saisissez vos propres ordres dans le champ ci-dessous et ils seront comparés de la même manière. Les noms trop proches de l’un d’eux sont retirés de vos résultats, et les correspondances limites sont affichées avec une mention expliquant le conflit plutôt que supprimées en silence, car une rime dont on a conscience est plus facile à vivre qu’une rime découverte au troisième mois.</p><p>La même vérification s’applique à ce que vous saisissez dans le champ « éviter les noms proches de ». Un chien dans une maison où vit un Jake aura du mal avec Jade ; un second chien rejoignant une Bailey aura du mal avec Hayley. Cette comparaison a lieu dans votre navigateur et rien de ce que vous saisissez n’est enregistré ni transmis.</p><h2>Nommer deux chiens, ou toute une portée</h2><p>Deux chiens dans un même foyer ont besoin de noms indubitablement différents l’un de l’autre. Le mode paire construit des ensembles qui partagent un style et des longueurs proches — pour qu’ils sonnent comme appartenant à la même maison — tout en imposant des sons d’attaque différents et en appliquant la même vérification phonétique entre les deux noms. Cela vaut pour les paires adoptées ensemble comme pour les portées qui ont besoin d’un thème cohérent.</p><h2>Des noms qui tiennent sur une médaille gravée</h2><p>La plupart des médailles gravées tiennent environ huit caractères par ligne avant que le texte doive rétrécir, et un nom qui dispute la place à un numéro de téléphone est le premier à passer à la trappe. Le filtre de longueur maximale existe exactement pour cela : réglez-le sur six ou moins et chaque suggestion se gravera proprement à côté de vos coordonnées.</p>',
    },
    showcase: {
      heading: 'Noms de chien par style, avec significations',
      lead: 'Un échantillon de la liste complète. Utilisez le générateur ci-dessus pour filtrer le reste par sexe, lettre et longueur.',
      strong: 'Noms de chien forts',
      cute: 'Noms de chien mignons',
      mythical: 'Noms de chien mythologiques',
    },
    more: {
      heading: 'Nommer un autre animal',
      html: '<p>C’est un chat ? Le <a href="{{url:cat}}">générateur de noms de chat</a> utilise une liste spécifique et vérifie les sons auxquels les chats réagissent réellement. Les deux, ou tout autre chose ? Le <a href="{{url:pet}}">générateur de noms d’animaux</a> fonctionne toutes espèces confondues, et la <a href="{{url:home}}">page d’accueil</a> explique comment s’articulent les significations, la prononciation et les vérifications de conflit.</p>',
    },
    faqHeading: 'Questions sur les noms de chien',
    faqs: [
      {
        q: 'Comment choisir un nom de chien ?',
        a: 'Choisissez un nom d’une ou deux syllabes qui se termine par une voyelle ou une consonne franche et ne partage aucun son avec vos ordres. Dites-le à voix haute au volume que vous emploieriez dans un parc avant de vous décider, confrontez-le aux mots que le chien doit déjà apprendre, et gardez-le une fois choisi : changer de nom en plein dressage remet l’association à zéro.',
      },
      {
        q: 'Quels noms de chien faut-il éviter ?',
        a: 'Évitez les noms qui riment avec vos ordres de dressage ou leur ressemblent de près : {{dogCommandsShort}} et signaux similaires. Évitez aussi ceux qui correspondent à un membre de la famille ou à un autre animal de la maison, car un chien ne peut pas séparer deux sons proches venant de la même voix. Le générateur de cette page retire automatiquement ces deux catégories.',
      },
      {
        q: 'Un nom de chien doit-il faire une ou deux syllabes ?',
        a: 'Une ou deux syllabes est la limite pratique pour un nom de chien. Les noms courts percent le bruit de fond et se disent facilement de façon nette et constante, ce qui est précisément ce que le chien apprend. Les noms longs finissent de toute façon raccourcis à l’usage : autant choisir délibérément la forme courte plutôt que de la subir.',
      },
      {
        q: 'Puis-je entendre la prononciation d’un nom de chien ?',
        a: 'Oui. Chaque nom généré comporte un bouton Prononcer qui le lit à voix haute avec le moteur vocal intégré à votre navigateur. Il fonctionne hors ligne une fois la page chargée, n’envoie rien à un serveur et ne demande aucun module. Entendre un nom prononcé est le moyen le plus rapide de repérer celui qui est malcommode à appeler.',
      },
      {
        q: 'Combien de noms de chien contient ce générateur ?',
        a: 'Le générateur s’appuie sur {{dogCount}} noms de chien, chacun avec une signification et une origine documentées. Les filtres de sexe, de style, de première lettre et de longueur maximale réduisent cet ensemble, et la série affichée est tirée avec un mélange de Fisher-Yates, pour que chaque nom correspondant ait une chance égale d’apparaître au lieu de voir revenir toujours les mêmes.',
      },
    ],
  },

  cat: {
    title: 'Générateur de Noms de Chat avec Significations',
    description:
      'Générateur de noms de chat gratuit avec significations documentées et prononciation. Filtrez par style, sexe, lettre et longueur, sans conflit à la maison.',
    breadcrumb: 'Noms de chat',
    h1: 'Générateur de noms de chat',
    answerBox:
      'Le nom d’un chat doit être court, contenir un son aigu comme un « i » ou une consonne franche, et rester nettement distinct des mots employés pour le reprendre ou l’appeler. Ce générateur s’appuie sur {{catCount}} noms de chat aux significations documentées, lit chacun d’eux à voix haute et écarte ceux qui entrent en conflit avec les noms du foyer ou les appels que le chat entend déjà au quotidien.',
    generator: {
      heading: 'Générer des noms de chat',
      intro:
        'Filtrez par style, sexe, première lettre ou longueur adaptée à une médaille. Ajoutez les noms déjà utilisés chez vous et le filtre de conflits les évitera.',
    },
    prose: {
      heading: 'Ce qui fait qu’un nom de chat fonctionne',
      html: '<p>Les chats réagissent le mieux aux noms courts contenant des sons aigus. Leur audition s’étend bien au-dessus de la nôtre dans les hautes fréquences, et les sons qu’ils distinguent le plus nettement sont les sons clairs : le « i » de Mimi, le k dur de Kiko. Un nom fait de sons graves et doux n’est pas une erreur, il doit simplement lutter davantage pour capter l’attention face à tout le reste de la pièce.</p><p>L’autre moitié du problème est la séparation. Les chats distinguent leur nom de mots au son proche, mais la distinction est fine, et un son ambigu est le plus souvent accueilli par l’indifférence plutôt que par une supposition. Les appels vérifiés automatiquement sur cette page sont : {{catCues}}. Tout nom de la liste trop proche de l’un d’eux est retiré avant que vous le voyiez.</p><h2>Nommer deux chats, ou une portée de chatons</h2><p>Deux chats dans un même foyer ont besoin de noms qu’un humain puisse appeler distinctement sous la pression et que les chats ne confondront pas entre eux. Le mode paire renvoie des ensembles de deux ou trois noms qui partagent un style et une longueur voisine mais commencent par des sons différents, avec la même vérification phonétique appliquée entre les noms eux-mêmes. Pour une portée, réglez la taille sur trois et le thème tient sur les trois.</p><h2>Des noms courts pour les médailles de collier</h2><p>Les médailles pour chat sont plus petites que celles pour chien, et la zone de gravure est vraiment serrée : six caractères est un plafond sûr si la médaille porte aussi un numéro de téléphone. Réglez la longueur maximale sur cinq ou six et chaque suggestion tiendra sans que le graveur doive rétrécir le texte jusqu’à l’illisible.</p>',
    },
    showcase: {
      heading: 'Noms de chat par style, avec significations',
      lead: 'Un échantillon de la liste complète. Le générateur ci-dessus filtre le reste par sexe, lettre et longueur.',
      elegant: 'Noms de chat élégants',
      mythical: 'Noms de chat mythologiques',
      food: 'Noms de chat gourmands',
    },
    more: {
      heading: 'Nommer un autre animal',
      html: '<p>C’est un chien ? Le <a href="{{url:dog}}">générateur de noms de chien</a> vérifie la liste complète des ordres sur lesquels les chiens sont éduqués. Les deux à la fois, ou quelque chose de neutre ? Utilisez le <a href="{{url:pet}}">générateur de noms d’animaux</a>, ou partez de la <a href="{{url:home}}">page d’accueil</a> pour voir comment s’articulent significations, prononciation et filtre de conflits.</p>',
    },
    faqHeading: 'Questions sur les noms de chat',
    faqs: [
      {
        q: 'Comment choisir un nom de chat ?',
        a: 'Choisissez un nom court contenant un son aigu et net : les chats entendent bien mieux les hautes fréquences que les basses, ce qui explique que les noms comportant un « i » ou une consonne franche obtiennent une réponse plus fiable. Deux syllabes terminées par une voyelle fonctionnent bien. Testez le nom en l’appelant d’un bout à l’autre d’une pièce avant de décider.',
      },
      {
        q: 'Les chats apprennent-ils vraiment leur nom ?',
        a: 'Les chats apprennent bien leur nom, et des recherches sur le chat domestique ont montré qu’ils le distinguent de mots au son proche. Ce qu’ils décident d’en faire est une autre affaire. Comme cette discrimination est réelle mais fine, un nom très proche d’un mot du foyer ou du nom d’un autre animal brouille véritablement le signal.',
      },
      {
        q: 'Quels noms de chat faut-il éviter ?',
        a: 'Évitez les noms qui ressemblent aux sons déjà employés dans la maison — {{catCues}} — et tout ce qui approche le nom d’un proche ou d’un autre animal. Un chat a davantage tendance à ignorer un son ambigu qu’à tenter une supposition : un nom qui recoupe un mot de correction finit donc par être complètement filtré.',
      },
      {
        q: 'Puis-je entendre le nom du chat avant de le choisir ?',
        a: 'Oui. Chaque nom généré comporte un bouton Prononcer qui utilise le moteur vocal intégré à votre navigateur, sans module, sans compte et sans téléchargement audio. C’est particulièrement utile pour les noms issus de la mythologie et les noms non francophones, où l’orthographe renseigne mal sur la prononciation réelle.',
      },
      {
        q: 'Et si je nomme deux chatons en même temps ?',
        a: 'Activez « Vous nommez deux animaux en même temps ? » et le générateur renverra des ensembles assortis plutôt qu’une simple liste. Chaque ensemble partage un style et une longueur voisine tout en commençant par des sons différents, de sorte que deux chatons du même foyer n’accourent pas tous les deux — ni ne vous ignorent tous les deux — quand un nom est appelé.',
      },
    ],
  },

  pet: {
    title: 'Noms d’Animaux avec Significations',
    description:
      'Des noms pour un foyer qui en compte déjà. Chacun affiche sa signification, se prononce à voix haute et est vérifié face à votre famille et vos animaux.',
    breadcrumb: 'Noms d’animaux',
    h1: 'Noms d’animaux pour chiens et chats',
    answerBox:
      'Un nom d’animal fonctionne quand il est court, facile à dire nettement, et différent de tous les autres noms et ordres déjà employés à la maison. Ce générateur couvre {{total}} noms de chien et de chat répartis en {{styleCount}} styles, affiche la signification documentée de chacun, le lit à voix haute et écarte ceux qui entreraient en collision avec votre famille, vos autres animaux ou vos signaux de dressage.',
    generator: {
      heading: 'Générer des noms d’animaux',
      intro:
        'Passez des chiens aux chats, ou aux deux à la fois. Les filtres, les significations, la prononciation et le vérificateur de conflits fonctionnent de la même façon pour toutes les espèces.',
    },
    prose: {
      heading: 'Nommer un animal dans un foyer où il y a déjà des noms',
      html: '<p>L’erreur la plus courante est de choisir isolément. Un nom qui sonne très bien seul peut devenir un problème quotidien dans une maison avec un Jack, un Zack, ou un chien qui répond déjà à Bailey. Les animaux réagissent à des motifs sonores, et deux motifs proches dans un même foyer signifient que les deux animaux réagissent à l’un ou l’autre nom — ou qu’aucun ne réagit de façon fiable au sien.</p><p>Le champ « éviter les noms proches de » existe pour cela. Saisissez tous les noms déjà utilisés à la maison — personnes, animaux, jusqu’au surnom que l’on crie dans le jardin — et chaque suggestion est comparée à l’ensemble par une vérification phonétique, non par une correspondance orthographique. La distinction compte : « Kay » et « Stay » ne partagent aucune lettre au début, mais se percutent totalement à l’oreille.</p><h2>Nommer deux animaux en même temps</h2><p>Deux animaux qui arrivent ensemble ont besoin de noms qui se répondent sans se confondre. Le mode paire s’occupe des deux moitiés : il regroupe des noms partageant un style et restant à deux lettres près de la même longueur, puis rejette toute paire dont les membres sont phonétiquement proches. Réglez la taille sur trois pour une portée et le thème tient sur les trois noms.</p><h2>D’où viennent ces noms et ces significations</h2><p>Chaque nom de la liste porte une signification tirée de sources linguistiques et culturelles documentées : étymologies attestées, mythologie et origines de mots établies. Rien n’est estimé ni inventé pour combler un vide, et la signification s’affiche à côté du nom plutôt que derrière un bouton ou un formulaire. Vous pouvez en lire davantage sur la démarche sur la <a href="{{url:about}}">page à propos</a>.</p><h2>Conseils par espèce</h2><p>Pour des conseils adaptés à un animal précis, utilisez le <a href="{{url:dog}}">générateur de noms de chien</a>, qui confronte les noms à la liste complète des ordres de dressage, ou le <a href="{{url:cat}}">générateur de noms de chat</a>, qui couvre les fréquences auxquelles les chats réagissent le mieux. Le <a href="{{url:home}}">générateur de noms d’animaux de la page d’accueil</a> génère pour les deux espèces et traite plus en détail les styles fantasy et drôle.</p>',
    },
    faqHeading: 'Questions sur le choix d’un nom',
    faqs: [
      {
        q: 'Quelle est la meilleure façon de choisir un nom d’animal ?',
        a: 'Choisissez un nom court, facile à dire nettement, différent de tous les autres noms et ordres du foyer, et que vous êtes à l’aise de prononcer en public. Travaillez à partir d’une liste filtrée plutôt que d’une page blanche, vérifiez la signification avant de vous engager, et dites le nom à voix haute au volume d’un appel avant de décider.',
      },
      {
        q: 'Comment nommer un animal qui rejoint une maison où il y en a déjà ?',
        a: 'Choisissez un nom qui ne partage ni son d’attaque ni rime avec les animaux déjà présents. Les animaux en place réagissent à leur nom par réflexe, et deux noms proches dans une maison font accourir les deux dès que l’un est appelé. Saisissez les noms des animaux actuels dans le champ « éviter les noms proches de » et le générateur retirera les collisions.',
      },
      {
        q: 'Les mêmes conseils valent-ils pour les chiens et les chats ?',
        a: 'La règle de fond est la même — court, distinct, constant — mais l’accent diffère. Les chiens ont besoin d’un écart maximal avec les ordres de dressage, car les ordres servent en permanence et le coût de l’ambiguïté est un rappel plus lent. Les chats réagissent le plus sûrement aux sons aigus et ont tendance à ignorer un nom ambigu plutôt qu’à tenter une supposition.',
      },
      {
        q: 'Puis-je utiliser ce générateur pour un animal autre qu’un chien ou un chat ?',
        a: 'Oui, avec une réserve : les {{total}} noms proposés ici sont sélectionnés pour les chiens et les chats, et la vérification automatique des conflits utilise des signaux canins et félins. Les noms eux-mêmes — leurs significations, leurs sonorités, leurs styles — conviennent parfaitement à un lapin, un furet ou un cheval. Le filtre de longueur et le filtre de conflits du foyer valent pour n’importe quel animal.',
      },
      {
        q: 'Ce que je saisis dans le générateur est-il enregistré ?',
        a: 'Non. Le générateur est un site statique sans compte, sans base de données et sans traitement de vos saisies côté serveur. Les noms que vous entrez dans le filtre de conflits sont comparés dans votre navigateur et abandonnés dès que vous fermez l’onglet. La politique de confidentialité précise exactement ce qui est collecté et ce qui ne l’est pas.',
      },
    ],
  },

  /**
   * Éléments communs aux quatre guides. Ce sont des articles et non des pages
   * d’outil : ils portent donc une signature et une date de révision.
   */
  guides: {
    bylineLabel: 'Perfect Pet Name Generator',
    updatedLabel: 'Mis à jour le {{updated}}',
    homeHeading: 'Guides de nommage',
    homeLead:
      'Choisir le mot est la partie rapide. Ces quatre guides couvrent tout ce qui l’entoure : apprendre le nom à l’animal, les noms à écarter, nommer deux animaux à la fois, et d’où viennent les significations de ce site.',
    readMore: 'Lire le guide',
  },

  /** Bandeau cookies. Affiché uniquement là où le consentement est requis. */
  consent: {
    title: 'Cookies sur ce site',
    bodyHtml:
      'Nous utilisons des cookies pour mesurer l’usage du site et pour le financer par la publicité. Si vous refusez, le générateur fonctionne exactement comme maintenant : tous les filtres, la vérification des conflits et le bouton de prononciation s’exécutent dans votre navigateur dans les deux cas. La <a href="{{url:privacy}}">politique de confidentialité</a> donne le détail.',
    accept: 'Accepter',
    reject: 'Refuser',
    manage: 'Paramètres des cookies',
    ariaLabel: 'Consentement aux cookies',
  },

  teach: {
    title: 'Apprendre son nom à un chien ou à un chat',
    description:
      'Une méthode en quatre étapes pour qu’un chiot ou un chaton réponde à son nom : charger le son, à quelle fréquence pratiquer, et ce qui l’abîme sans bruit.',
    breadcrumb: 'Apprendre le nom',
    h1: 'Apprendre son nom à un chien ou à un chat',
    keywords:
      'apprendre son nom à un chien, reconnaissance du nom, apprendre son nom à un chiot, apprendre son nom à un chat, signal contaminé',
    answerBox:
      'Apprenez le nom en associant le son à quelque chose d’agréable avant même d’attendre une réponse : dites le nom une fois, marquez l’instant où l’animal vous regarde, récompensez, recommencez. Cinq à dix répétitions, trois fois par jour, dans une pièce calme, suffisent à la plupart des chiots et chatons pour tourner la tête de façon fiable en une semaine. Le nom est une demande d’attention, jamais une correction, et le plus sûr moyen de le perdre est de l’employer quand on est agacé.',
    card: {
      heading: 'Apprendre le nom',
      body: 'Un protocole en quatre étapes pour obtenir un mouvement de tête fiable, le temps que cela prend, et les habitudes qui le défont sans bruit.',
    },
    html: '<h2>Ce que « connaître son nom » veut vraiment dire</h2><p>Un animal n’apprend pas son nom comme une étiquette. Il l’apprend comme un son qui annonce quelque chose qui vaut la peine de se retourner. Cette distinction n’a rien d’académique : elle détermine toute la méthode. Vous ne lui apprenez pas qui il est ; vous construisez un réflexe où un bruit précis, parmi tout ce qu’il entend dans une journée, signifie de façon fiable <strong>regarde-moi, il va se passer quelque chose de bien</strong>.</p><p>La conséquence pratique est que le nom n’a qu’une fonction : vous acheter l’attention de l’animal pour pouvoir lui demander autre chose. Le rappel, un contact avec la main, l’attache de la laisse, détourner le regard d’un autre chien : tout commence par ce mouvement de tête. Un nom qui ne fonctionne qu’à moitié n’est pas un problème de nom, c’est un problème d’attention, et il ressurgit dans tous les autres signaux que vous enseignerez ensuite.</p><h2>La méthode en quatre étapes</h2><h3>Étape un : charger le son</h3><p>Commencez dans la pièce la plus calme de la maison, sans autre animal présent, avec quelque chose que l’animal désire vraiment : de petites friandises molles et vite avalées pour la plupart des chiens ; une léchée de pâtée, une canne à plumes ou quelques secondes de grattouilles sous le menton pour les chats. Dites le nom une fois, d’un ton chaleureux et posé. Dès qu’une oreille bouge ou que la tête pivote vers vous, marquez-le — un « oui » bref, un clic, ou simplement la friandise qui apparaît — et donnez la récompense.</p><p>Si rien ne se passe au bout de deux ou trois secondes, ne répétez pas le nom. Faites un bruit complètement différent — un bruit de bisou, une tape sur le sol — et récompensez le mouvement obtenu. Répéter un nom dans le vide est l’erreur la plus courante, car ce que l’animal apprend, c’est que le nom peut être ignoré plusieurs fois avant que quoi que ce soit n’arrive.</p><h3>Étape deux : varier la distance et l’angle</h3><p>Une fois le mouvement de tête immédiat, changez votre position. Dites le nom depuis l’autre bout de la pièce, de derrière, depuis une autre hauteur, assis par terre, debout, depuis la pièce voisine. Chaque variation est une information réellement nouvelle pour un animal : un signal appris uniquement pendant que vous êtes accroupi devant lui s’effondre souvent la première fois que vous le dites debout.</p><h3>Étape trois : généraliser</h3><p>Passez au jardin, puis au couloir, puis au trottoir, puis à un parc calme. La distraction est l’axe qui compte, et elle doit monter assez lentement pour que vous continuiez d’obtenir la réponse. Si vous la perdez, vous avez sauté trop loin : revenez au dernier endroit qui fonctionnait et augmentez la difficulté par plus petits pas. Pour un chat d’intérieur, généraliser veut dire des pièces différentes, des moments différents, et — le plus utile — s’entraîner quand le chat est légèrement occupé plutôt qu’endormi.</p><h3>Étape quatre : le protéger</h3><p>Protéger le nom est l’étape que presque tout le monde saute, et la seule qui dure toujours. Chaque fois que le nom est suivi de quelque chose que l’animal déteste, le réflexe construit s’affaiblit un peu. Continuez à récompenser la réponse de façon intermittente toute la vie de l’animal : pas à chaque fois, mais assez souvent pour que ce son continue de mériter une réponse.</p><h2>À quelle fréquence, et combien de temps</h2><p>Les séances doivent être courtes et fréquentes : cinq à dix répétitions, deux ou trois fois par jour, en s’arrêtant tant que l’animal en veut encore. Dix minutes de bourrage valent moins bien que quatre-vingt-dix secondes répétées trois fois, car un animal fatigué ou lassé apprend que le nom annonce l’ennui.</p><p>Un chiot ou un chaton sans passif difficile se retourne de façon fiable dans une pièce calme en trois à sept jours, et tient sous distraction légère au bout de deux à quatre semaines. Un adulte adopté au passé inconnu peut mettre plus longtemps, et un animal qui a entendu son ancien nom crié avec colère se portera parfois mieux avec un nouveau — ce qui est une très bonne raison de le rebaptiser.</p><h2>Ce qui abîme la reconnaissance du nom</h2><ul><li><strong>Utiliser le nom comme correction.</strong> « Bailey ! » crié depuis l’autre bout de la pièce pendant qu’il mâchonne quelque chose apprend à Bailey que ce son annonce parfois des ennuis. Les éducateurs parlent de signal contaminé. Utilisez « eh-eh », « laisse », ou allez simplement interrompre : tout sauf le nom.</li><li><strong>Appeler par le nom pour ce que l’animal déteste.</strong> La coupe des griffes, les gouttes auriculaires, la caisse de transport, le bain, la fin de la promenade. Allez le chercher, ou enseignez un signal distinct pour cela.</li><li><strong>Le répéter.</strong> « Bailey. Bailey. Bailey ! » apprend que les deux premiers sont du bruit.</li><li><strong>Quinze surnoms.</strong> Choisissez un nom et un surnom au maximum tant que la réponse n’est pas solide. Bailey, Bay-Bay, Bailey-Boo et Monsieur B sont quatre sons différents pour un animal qui n’en connaît encore aucun.</li><li><strong>Un nom qui entre en collision avec un ordre.</strong> Si le nom ressemble à un commandement — {{dogCommandsShort}} et consorts — on demande chaque jour à l’animal de séparer deux signaux presque identiques. Cela se règle avant de choisir, et c’est pourquoi les générateurs de ce site le vérifient automatiquement.</li></ul><h2>Les chats : même mécanisme, autre monnaie</h2><p>Les chats apprennent la reconnaissance du nom comme les chiens ; des travaux publiés sur le chat domestique ont montré qu’ils distinguent leur propre nom de mots qui lui ressemblent. Ce qui change, c’est la récompense et l’attente. La nourriture fonctionne, mais un certain type d’attention aussi, et l’objectif honnête pour la plupart des chats est une oreille qui pivote et un regard, pas le rappel au galop d’un chien.</p><p>Entraînez-vous avant les repas plutôt qu’après, gardez les séances sous la minute, et arrêtez au premier battement de queue. Les chats répondent aussi mieux aux noms comportant des sons clairs et aigus — le « i » long de Mimi, le k dur de Kiko — ce qui explique que les noms courts portant ces notes fonctionnent souvent le mieux.</p><h2>Rebaptiser un animal adopté ou adulte</h2><p>Changer de nom est plus facile qu’on ne le croit, car l’ancien nom n’était lui aussi qu’un son. Faites un pont pendant une semaine : dites le nouveau nom immédiatement suivi de l’ancien, récompensez la réponse, puis abandonnez l’ancien au bout de quelques jours. Si le nouveau nom partage la forme vocalique de l’ancien — Suki pour Sushi, Mattie pour Maggie — le pont est encore plus court, même s’il vaut mieux s’assurer que l’ancien nom ne charrie aucune histoire pénible avant de le répéter volontairement.</p>',
    faqHeading: 'Questions sur l’apprentissage du nom',
    faqs: [
      {
        q: 'Combien de temps faut-il à un chiot pour apprendre son nom ?',
        a: 'La plupart des chiots se retournent de façon fiable vers leur nom dans une pièce calme en trois à sept jours, avec de courtes séances deux fois par jour, et tiennent sous distraction légère après deux à quatre semaines. Les progrès dépendent bien plus de la constance avec laquelle le nom annonce quelque chose d’agréable que de l’âge du chiot ou du nombre de minutes passées.',
      },
      {
        q: 'Faut-il répéter le nom de son animal s’il ne répond pas ?',
        a: 'Non. Le répéter lui apprend que les premières fois peuvent être ignorées sans conséquence. S’il n’y a pas de réponse en deux ou trois secondes, utilisez un autre son, comme un bruit de bisou ou une tape sur le sol, récompensez le mouvement obtenu, et facilitez la répétition suivante en vous rapprochant ou en retirant une distraction.',
      },
      {
        q: 'Puis-je utiliser le nom de mon animal pour le gronder ?',
        a: 'Évitez-le. Employer le nom pour corriger en fait un signal qui annonce parfois des ennuis, ce que les éducateurs appellent un signal contaminé, et l’animal se met à hésiter avant de se retourner. Gardez un interrupteur distinct comme "eh-eh" ou "laisse" pour le comportement indésirable, et réservez le nom à la demande d’attention.',
      },
      {
        q: 'Les chats apprennent-ils vraiment leur nom ?',
        a: 'Oui. Les chats domestiques distinguent leur propre nom de mots qui lui ressemblent, et ils l’apprennent par le même processus d’association que les chiens. L’objectif réaliste diffère : chez la plupart des chats, une oreille qui pivote et un regard constituent déjà une réussite, et les séances marchent mieux sous la minute, avant les repas, et arrêtées au premier signe de désintérêt.',
      },
      {
        q: 'Comment renommer un chien ou un chat adopté ?',
        a: 'Faites un pont pendant une semaine environ : dites le nouveau nom, enchaînez immédiatement avec l’ancien, et récompensez la réponse. Après quelques jours, abandonnez l’ancien et récompensez la réponse au nouveau seul. Renommer est généralement simple, et cela vaut vraiment la peine si le nom précédent était employé avec colère.',
      },
    ],
    related: {
      heading: 'Où aller ensuite',
      html: '<p>Encore en train de choisir ? Le <a href="{{url:dog}}">générateur de noms de chien</a> et le <a href="{{url:cat}}">générateur de noms de chat</a> confrontent chaque suggestion aux ordres que votre animal devra apprendre, ce qui élimine d’emblée la pire version de ce problème. Avant de vous décider, lisez quels <a href="{{url:avoid}}">noms éviter</a> et, si deux animaux arrivent ensemble, en quoi <a href="{{url:pairs}}">nommer deux animaux</a> diffère de nommer une fois deux fois.</p>',
    },
  },

  avoid: {
    title: 'Noms d’animaux à éviter, et pourquoi',
    description:
      'Les noms de chien et de chat qui posent problème plus tard : collisions avec les ordres, avec la maisonnée, diminutifs subis et blagues périssables.',
    breadcrumb: 'Noms à éviter',
    h1: 'Noms d’animaux à éviter, et pourquoi',
    keywords:
      'noms d’animaux à éviter, noms de chien à éviter, noms de chat à éviter, noms qui ressemblent aux ordres, mauvais noms d’animaux',
    answerBox:
      'Évitez les noms qui ressemblent à un ordre que vous comptez enseigner, ceux qui entrent en collision avec une personne ou un animal déjà présent, ceux que vous n’aimeriez pas entendre appeler dans une salle d’attente, et ceux dont vous n’avez pas choisi vous-même la forme courte. Presque tous les regrets de nommage relèvent d’une de ces quatre catégories, et les quatre se voient en une trentaine de secondes si l’on dit sa liste à voix haute avant de trancher.',
    card: {
      heading: 'Noms à éviter',
      body: 'Quatre catégories qui posent problème des mois plus tard : collisions avec les ordres, avec la maisonnée, diminutifs subis et blagues périssables.',
    },
    html: '<h2>1. Les noms qui ressemblent à un ordre</h2><p>C’est celle dont le coût est mesurable. Un chien apprend les signaux comme des motifs sonores, et deux motifs séparés par un seul son sont réellement difficiles à distinguer, surtout à distance, dehors, par-dessus le vent et la circulation, avec une voix élevée. « Bo » contre « no », « Kit » contre « sit », « Kay » contre « stay », « Dan » contre « down » : chacune de ces paires demande à l’animal une discrimination qu’il n’a aucune raison de réussir.</p><p>Ce que cela coûte, ce n’est pas le nom, c’est l’ordre. Chaque répétition ambiguë ralentit le commandement, et celui qui est le plus souvent ralenti est le rappel — précisément celui qui compte quand un portail reste ouvert. Les ordres à vérifier sont ceux que vous allez vraiment enseigner : {{dogCommandsShort}} et le reste du répertoire de base, plus ce que votre maisonnée dit sans y penser, comme « laisse », « attends » ou « pas bouger ».</p><p>Le piège, c’est la rime, pas l’orthographe. « Kay » et « stay » ne partagent aucune lettre initiale et se confondent complètement à l’oral, ce qui explique que comparer les noms par leur écriture rate l’essentiel du problème. Les générateurs d’ici comparent phonétiquement, face à {{dogCommandCount}} ordres courants.</p><h2>2. Les noms qui entrent en collision avec la maisonnée</h2><p>C’est avec le deuxième animal que cela mord. Un chien qui vit avec un Bailey aura du mal avec Hayley ; un chat dans une maison avec un Jake aura du mal avec Jade. Les prénoms des enfants, celui du conjoint, celui de la grand-mère qui vient chaque semaine et le surnom réellement employé comptent tous : le nom qui compte est celui qu’on crie dans le jardin, pas celui de l’état civil.</p><p>Deux animaux aux noms proches est la pire version, car tous deux apprennent à répondre à un son ambigu et vous perdez la possibilité de vous adresser à un seul. Si vous avez déjà un Milo, rayez Miles, Marlo, Mylo et Nilo avant même de commencer.</p><h2>3. Les noms qui se raccourcissent d’une façon que vous n’avez pas choisie</h2><p>Les noms longs sont raccourcis. Ce n’est pas un peut-être : Hercule devient Herc, Maximilien devient Max, Barthélemy devient Barth, en général en quinze jours et en général pas par vous. Le nom que vous emploierez chaque jour est la forme courte ; autant la choisir délibérément plutôt que la découvrir.</p><p>Dites le nom entier dix fois au volume d’un appel et écoutez ce que votre bouche en fait. Si le résultat est une forme qui vous déplaît, ou qui entre en collision avec un ordre, le nom long est le mauvais choix, si beau soit-il sur le papier. C’est aussi l’argument pratique du filtre de longueur des générateurs : une médaille gravée accepte environ huit caractères par ligne avant que le texte ne rétrécisse, et ce qui saute, c’est le nom qui rivalise avec le numéro de téléphone.</p><h2>4. Les blagues à courte durée de vie</h2><p>Les noms drôles sont une catégorie légitime et il y en a {{funnyCount}} ici, mais la blague doit passer des épreuves précises. Elle sera lue à voix haute par une secrétaire dans une salle d’attente pleine. Elle sera écrite sur un enregistrement de puce, un contrat d’assurance et une fiche de pension. Elle sera criée, par vous, dans un parc public, peut-être plusieurs minutes durant, sous le regard des autres.</p><p>Les noms bâtis sur un sous-entendu, une personnalité publique ou une référence liée à une seule année échouent en général à l’une de ces épreuves. Les noms drôles qui tiennent sont ceux dont l’humour naît de l’écart entre le nom et l’animal — un chihuahua appelé Boulette, un énorme chat placide appelé Chonk — parce que cet écart ne vieillit pas.</p><h2>Quatre points plus petits mais utiles</h2><ul><li><strong>Les noms qui signifient quelque chose de malheureux ailleurs.</strong> Un nom magnifique dans une langue se lit parfois très mal dans une autre, et cela mérite dix secondes de vérification quand le nom a une origine étrangère. Tous les noms de ce site affichent leur signification documentée, précisément pour cela.</li><li><strong>Les noms difficiles à épeler à voix haute.</strong> Vous l’épellerez au vétérinaire, au toiletteur, à l’assureur et à la pension. Un nom qu’il faut épeler deux fois à chaque appel est un petit impôt payé pendant quinze ans.</li><li><strong>Reprendre le nom d’un animal précédent.</strong> C’est courant, compréhensible, et cela mérite d’y réfléchir à deux fois : cela invite à une comparaison que le nouvel animal ne peut pas gagner, et peut rendre le nom plus difficile à dire les jours où il l’est déjà.</li><li><strong>Les noms qui finissent sur un son doux qui s’éteint.</strong> Les noms qui s’évanouissent sur une voyelle ou une consonne molle portent mal en extérieur. Une voyelle nette ou une consonne sèche à la fin — le « -o » de Milo, le « -t » dur de Bandit — traverse bien mieux le vent et la distance.</li></ul><h2>Le test des trente secondes</h2><p>Avant de trancher, faites ceci avec votre liste. Placez-vous à un bout de la maison ou du jardin et appelez chaque nom trois fois au volume que vous prendriez dans un parc. Puis dites-le juste après chaque ordre que vous comptez enseigner — « sit, Kit », « stay, Kay » — et écoutez la collision. Enfin, imaginez-le lu à voix haute par un inconnu dans une salle d’attente. Ce qui survit aux trois est un nom avec lequel vous pouvez vivre.</p>',
    faqHeading: 'Questions sur les noms à éviter',
    faqs: [
      {
        q: 'Quels noms de chien faut-il éviter ?',
        a: 'Évitez les noms qui riment avec les ordres que vous comptez enseigner ou qui leur ressemblent de près — {{dogCommandsShort}} et signaux similaires — ainsi que les noms proches de ceux d’une personne ou d’un autre animal déjà présent. Évitez aussi les noms longs dont vous n’avez pas choisi la forme courte, puisque c’est elle que vous emploierez chaque jour.',
      },
      {
        q: 'Pourquoi est-ce gênant qu’un nom ressemble à un ordre ?',
        a: 'Parce que l’animal apprend les deux comme des motifs sonores, et deux motifs séparés par un seul son sont difficiles à distinguer à distance ou en extérieur. Chaque répétition ambiguë ralentit l’ordre plus que le nom, et l’ordre le plus souvent touché est le rappel, celui qui compte le plus quand il échoue.',
      },
      {
        q: 'Deux animaux d’une même maison peuvent-ils avoir des noms proches ?',
        a: 'Mieux vaut l’éviter. Avec des noms proches, les deux animaux répondent à un son ambigu, vous perdez donc la possibilité de vous adresser à l’un en particulier et tous deux mettent plus longtemps à apprendre le leur. Cherchez des sons initiaux différents et une nette différence de forme vocalique, pas seulement une orthographe distincte.',
      },
      {
        q: 'Un nom long est-il une mauvaise idée ?',
        a: 'Pas en soi, mais il est presque toujours raccourci à l’usage, si bien que le vrai choix porte sur la forme courte et non sur la forme complète. Dites le nom long plusieurs fois au volume d’un appel, écoutez ce qu’il devient, et vérifiez que le résultat vous plaît et n’entre pas en collision avec un ordre.',
      },
      {
        q: 'Comment savoir si un nom drôle vieillira bien ?',
        a: 'Testez-le à trois endroits : lu à voix haute par une secrétaire dans une salle d’attente pleine, écrit sur un enregistrement de puce et un contrat d’assurance, et crié par vous dans un parc public. Les blagues fondées sur un sous-entendu, une personnalité publique ou une seule année échouent souvent à l’une d’elles, tandis que l’humour né du décalage entre le nom et l’animal dure.',
      },
    ],
    related: {
      heading: 'Où aller ensuite',
      html: '<p>Le <a href="{{url:dog}}">générateur de noms de chien</a> et le <a href="{{url:cat}}">générateur de noms de chat</a> appliquent seuls les deux premières règles de cette page : saisissez les noms de votre foyer et chaque collision est supprimée ou signalée. Une fois le nom choisi, <a href="{{url:teach}}">le lui apprendre</a> prend environ une semaine, et si vous nommez deux animaux à la fois, <a href="{{url:pairs}}">nommer deux animaux</a> couvre la contrainte supplémentaire.</p>',
    },
  },

  pairs: {
    title: 'Nommer deux animaux en même temps',
    description:
      'Nommer un duo inséparable ou une portée n’est pas nommer deux fois : les trois contraintes qui font tenir une paire de noms, et les thèmes qui résistent.',
    breadcrumb: 'Nommer deux animaux',
    h1: 'Nommer deux animaux en même temps',
    keywords:
      'nommer deux animaux, noms pour un duo, noms de portée, noms assortis, noms pour deux chiens, noms pour deux chats',
    answerBox:
      'Une paire de noms doit réunir trois choses à la fois : un lien qui les fasse lire comme un ensemble, des sons initiaux nettement différents, et des longueurs à deux lettres près l’une de l’autre. Le thème est la partie facile et celle sur laquelle on investit trop ; ce qui décide si vous pouvez appeler un animal sans que les deux arrivent, c’est la distinction, et c’est justement la contrainte qu’on néglige.',
    card: {
      heading: 'Nommer deux animaux',
      body: 'Pourquoi un duo ou une fratrie a besoin de noms qui relient et séparent en même temps, et les thèmes qui font les deux.',
    },
    html: '<h2>Pourquoi deux est un autre problème</h2><p>Nommer un animal, c’est chercher un nom qui vous plaît. En nommer deux, c’est un problème de contraintes, et ces contraintes tirent en sens inverse : les noms doivent aller ensemble, et ils doivent être impossibles à confondre. La plupart des paires échouent sur le second point, parce que le premier est celui qui est amusant à imaginer.</p><p>L’échec est précis et n’a rien de subtil. Deux animaux dont les noms partagent le son initial et le nombre de syllabes apprennent tous deux à répondre à quelque chose d’intermédiaire : vous en appelez un, les deux arrivent, et aucun ne répond vraiment au sien. Dans un foyer à deux animaux, c’est un coût quotidien, et il est pire exactement quand cela compte : à la porte, au portail, à l’heure du repas.</p><h2>Les trois contraintes</h2><h3>Un lien, mais léger</h3><p>La connexion peut être bien plus légère qu’on ne le suppose. Même origine, même époque, même domaine, même registre : Néron et Cassius forment évidemment une paire sans qu’aucun ne soit la moitié d’une blague appariée. Ce qu’il faut éviter, c’est un lien si serré que les deux noms deviennent une seule unité — Sel et Poivre, Yin et Yang, Chose Une et Chose Deux — parce que cette formule voyage mal si les animaux viennent à être séparés, et c’est une vraie considération pour un duo inséparable, où l’un peut survivre à l’autre de plusieurs années.</p><h3>Des sons initiaux différents</h3><p>C’est la contrainte qui fait réellement le travail. Le premier son d’un nom porte l’essentiel de la discrimination : deux noms ne devraient donc pas commencer par la même consonne ni la même forme vocalique. Bella et Bailey est l’erreur classique : même attaque, même longueur, même schéma d’accent. Bella et Otto, c’est le même registre esthétique sans aucune confusion.</p><p>La rime finale est la version de second ordre du même problème. Maisie et Daisy diffèrent au début mais se confondent à toute distance. Visez des noms qui diffèrent aux deux extrémités si vous le pouvez, et au début au minimum.</p><h3>Longueur et rythme voisins</h3><p>Des noms à une ou deux lettres d’écart, idéalement avec le même nombre de syllabes, se lisent comme un ensemble voulu et non comme un hasard. Milo et Otis fonctionne ; Milo et Barthélemy ressemble à deux décisions sans rapport, et en pratique le long finit raccourci en quelque chose qui ne va peut-être plus avec la paire.</p><h2>Les thèmes qui tiennent</h2><p>Les thèmes qui survivent sont ceux qui comptent assez de membres pour permettre une vraie recherche, et assez de variété interne pour ne pas vous forcer à deux choix qui sonnent pareil. Mythologie d’une seule tradition, constellations, arbres, épices, musiciens de jazz, montagnes, fleuves, peintres, groupes de mots d’une même origine : tous offrent des dizaines de candidats dans le même registre, ce qui permet d’écarter ceux qui se télescopent.</p><p>Les thèmes qui se retournent contre vous sont les paires fermées : deux moitiés d’une expression, deux personnages toujours nommés ensemble, ou tout ce dont un nom n’a aucun sens sans l’autre. C’est charmant un an, et embarrassant ensuite.</p><h2>Fratries et duos inséparables</h2><p>Une fratrie qui arrive ensemble est le cas le plus propre : vous choisissez les deux noms d’un coup et pouvez donc optimiser l’ensemble au lieu d’ajuster un nom autour d’un autre déjà en place. Profitez-en. Appliquez les contraintes à la paire comme à un ensemble, et acceptez d’abandonner un nom qui vous plaît pour un autre qui sépare mieux.</p><p>Les duos inséparables — des animaux adoptés ensemble et déjà attachés — ajoutent une considération. Tout le monde autour d’eux les appellera, les nourrira et les déplacera souvent comme une unité, ce qui rend la contrainte de distinction plus importante et non moins, puisque l’environnement les confond déjà. Si l’un arrive déjà nommé, traitez ce nom comme fixe et cherchez autour.</p><h2>Ajouter un second animal à un premier</h2><p>Ici le premier nom est une contrainte dure, et le travail consiste à trouver un second qui se place à côté sans le heurter. Prenez le nom existant et écartez tout ce qui partage son son initial, tout ce qui rime avec lui et tout ce qui n’en est qu’à un son au milieu. Cherchez ensuite le lien, et faites-le sans crispation : une connexion thématique lâche se lit comme intentionnelle et une connexion serrée ne vaut pas la confusion qu’elle achète.</p><h2>Trois ou plus</h2><p>Trois noms multiplient les vérifications deux à deux au lieu de les additionner : chaque nom doit se séparer de tous les autres, pas seulement du dernier choisi. En pratique, un thème au champ large et trois sons initiaux distincts constituent toute la méthode, et il vaut la peine d’écrire les trois noms et d’appeler chacun à voix haute en pensant aux deux autres.</p><p>Le mode duo des générateurs de ce site fait exactement cela : il construit des ensembles de deux ou trois noms qui partagent un style, restent proches en longueur, commencent par des sons différents et passent entre eux la même vérification phonétique que le filtre de conflits applique à votre foyer.</p>',
    faqHeading: 'Questions sur le fait de nommer deux animaux',
    faqs: [
      {
        q: 'Deux animaux doivent-ils avoir des noms assortis ?',
        a: 'Un lien thématique léger fonctionne bien ; une paire étroitement appariée, généralement non. Des noms de même origine, époque ou domaine se lisent comme un ensemble voulu tout en restant indépendants, alors que deux moitiés d’une expression comme Sel et Poivre perdent leur sens si les animaux sont séparés, ce qui compte surtout pour un duo dont l’un peut survivre à l’autre.',
      },
      {
        q: 'Qu’est-ce qui rend deux noms trop proches ?',
        a: 'Partager le son initial est le problème principal, car le premier son porte l’essentiel de la discrimination : Bella et Bailey en est l’exemple classique. Les terminaisons qui riment, comme Maisie et Daisy, viennent ensuite, puisque les noms se confondent à distance. Visez des sons initiaux différents et, si possible, des finales différentes aussi.',
      },
      {
        q: 'Comment nommer un second animal quand le premier a déjà un nom ?',
        a: 'Traitez le nom existant comme fixe et cherchez autour. Écartez tout ce qui partage son son initial, tout ce qui rime avec lui et tout ce qui en est proche au milieu, puis cherchez un lien thématique lâche. Une connexion détendue se lit comme intentionnelle sans acheter la moindre part de la confusion qu’apporte une connexion serrée.',
      },
      {
        q: 'Une fratrie a-t-elle besoin de noms à thème ?',
        a: 'Un thème n’est pas nécessaire, mais choisir les deux noms d’un coup est un vrai avantage à exploiter. Comme aucun n’est figé, vous pouvez optimiser tout l’ensemble pour la distinction plutôt qu’ajuster un nom autour d’un autre, ce qui suppose en général d’accepter de lâcher un nom qui vous plaît pour un autre qui sépare mieux.',
      },
      {
        q: 'Comment nommer trois animaux sans les confondre ?',
        a: 'Chaque nom doit se séparer de tous les autres : trois noms impliquent donc trois vérifications deux à deux et non deux choix successifs. Prenez un thème au champ large, donnez à chaque nom un son initial différent, puis écrivez les trois et appelez chacun à voix haute en pensant aux deux autres avant de décider.',
      },
    ],
    related: {
      heading: 'Où aller ensuite',
      html: '<p>Activez le mode duo dans le <a href="{{url:pet}}">générateur de noms d’animaux</a> pour que les ensembles soient construits et vérifiés pour vous, ou utilisez les générateurs <a href="{{url:dog}}">chien</a> et <a href="{{url:cat}}">chat</a> pour une seule espèce. Il vaut la peine de lire la liste plus large des <a href="{{url:avoid}}">noms à éviter</a> avant de trancher, et <a href="{{url:teach}}">apprendre les noms</a> ensuite est plus facile quand les deux sont vraiment distincts.</p>',
    },
  },

  meanings: {
    title: 'D’où viennent les significations des noms',
    description:
      'Comment les significations sont documentées ici : quelles sources comptent, comment sont traitées les étymologies discutées, et pourquoi rien n’est inventé.',
    breadcrumb: 'Signification des noms',
    h1: 'D’où viennent les significations des noms',
    keywords:
      'signification des noms d’animaux, origine des noms, signification des noms de chien, signification des noms de chat, politique éditoriale, étymologie',
    answerBox:
      'Chacun des {{total}} noms de ce site porte une signification tirée d’une source documentée : une étymologie attestée, une figure mythologique ou littéraire avérée, ou l’origine simple d’un mot. Quand les sources divergent, la fiche dit de quoi il s’agit plutôt que de désigner un gagnant. Aucune signification n’est ici déduite de la sonorité d’un nom, et aucun nom n’est listé avec une signification inventée pour combler le vide.',
    card: {
      heading: 'D’où viennent les significations',
      body: 'Le critère de sourçage derrière chaque nom du site : ce qui compte comme documenté, comment sont traités les désaccords, et comment signaler une erreur.',
    },
    html: '<h2>Pourquoi cette page existe</h2><p>Le contenu sur les significations de noms est exceptionnellement facile à rater et exceptionnellement difficile à vérifier. Une signification inventée quelque part est recopiée sur une douzaine de sites en un an, et paraît ensuite bien attestée simplement parce qu’elle est partout. Puisque la signification affichée à côté d’un nom est l’une des deux choses sur lesquelles ce site vous demande de décider, il a paru juste d’écrire noir sur blanc à quel critère ces significations sont soumises.</p><h2>Ce qui compte comme source</h2><p>Un nom n’est listé ici que si sa signification remonte à au moins l’un des éléments suivants :</p><ul><li><strong>Une étymologie attestée.</strong> Un nom dont la dérivation est documentée dans une langue établie — hébreu, grec, latin, vieux norrois, germanique, irlandais, japonais et ainsi de suite — où la racine et son sens sont attestés et non reconstruits par ressemblance.</li><li><strong>Une figure avérée.</strong> Noms issus de la mythologie, du folklore, de l’histoire ou de la fiction publiée, où la signification donnée est qui ou ce que fut cette figure et non une affirmation sur les racines du mot. Odin, Athéna, Fenrir et Gandalf sont décrits ainsi, car c’est ce qui est réellement documenté à leur sujet.</li><li><strong>Une origine lexicale simple.</strong> Des noms qui sont simplement des mots — Pepper, Biscuit, Shadow, Willow — où la signification est le sens ordinaire du mot et son origine figure dans les ouvrages de référence généraux.</li><li><strong>Un diminutif documenté.</strong> Des formes courtes dont le nom d’origine a une signification attestée, indiquée comme telle : Abby figure comme forme courte d’Abigail, avec la signification d’Abigail attachée plutôt qu’une signification propre.</li></ul><h2>Ce qui ne compte pas</h2><ul><li><strong>La dérivation par ressemblance sonore.</strong> Qu’un nom ressemble à un mot d’une langue ne signifie pas qu’il en dérive. La ressemblance est le point de départ de la plupart des étymologies inventées.</li><li><strong>La signification par association.</strong> Un nom populaire pour les chats noirs ne veut pas dire « noir », et un nom courant chez les grands chiens ne veut pas dire « fort ».</li><li><strong>Le sourçage circulaire.</strong> Une signification qui n’apparaît que sur des listes de noms, toutes visiblement en train de se recopier, est traitée comme non sourcée.</li><li><strong>L’invention.</strong> Si aucune signification ne peut être documentée, le nom est laissé de côté plutôt que doté d’une signification plausible. C’est pourquoi il manque quelques noms d’animaux parfaitement valables.</li></ul><h2>Significations discutées ou multiples</h2><p>Les étymologies divergent plus souvent que les listes de noms ne l’admettent. Les noms traversent les langues, ramassent des étymologies populaires et sont réinterprétés par les cultures qui les empruntent ; il n’existe fréquemment pas de réponse unique. Quand les sources s’opposent, la fiche donne la lecture la mieux attestée et précise de quel type d’élément il s’agit — une forme courte, une figure mythologique, un mot d’une langue donnée — plutôt que de présenter une interprétation comme un fait tranché.</p><p>L’implication pratique figure aussi sur la <a href="{{url:terms}}">page des conditions</a>, et il vaut la peine de la répéter ici : aucune signification de ce site ne prétend être l’interprétation définitive ni unique d’un nom. Si la signification d’un nom compte particulièrement pour vous — un nom en mémoire de quelqu’un, un nom à portée religieuse ou culturelle, un nom dans une langue que vous ne parlez pas — vérifiez-la auprès d’une source de confiance avant de vous engager.</p><h2>Les significations sont pour vous, pas pour l’animal</h2><p>Cela mérite d’être dit clairement, car cela change le poids à leur accorder. Un animal apprend son nom comme un son et n’a aucun accès à ce qu’il veut dire. La signification compte parce que vous direz ce mot plusieurs fois par jour pendant une décennie ou plus, et parce que savoir que Luna signifie « lune » en latin, ou que Loki est le dieu farceur nordique, est souvent ce qui transforme une liste de six en une décision.</p><p>C’est aussi pourquoi les significations sont ici bien visibles sur la fiche, et non derrière un dépliant, un compte ou un formulaire d’adresse e-mail. Une signification qu’il faut aller chercher est une signification que vous ne vérifierez pas.</p><h2>Comment la liste est entretenue</h2><p>La liste de noms est un fichier statique de {{dogCount}} noms de chien et {{catCount}} noms de chat — {{total}} noms uniques au total, puisqu’un nom convenant aux deux espèces est stocké une fois pour chacune. Les noms sont ajoutés par lots, et chaque ajout doit arriver avec une signification attachée : un nom sans signification documentée n’entre pas en attendant d’en trouver une.</p><p>Les corrections sont le principal moyen de repérer les erreurs, et elles sont vraiment bienvenues. Si une signification vous paraît fausse, envoyez le nom et, si vous en avez une, une source que vous jugez fiable à <a href="mailto:{{email}}">{{email}}</a> ou via la <a href="{{url:contact}}">page de contact</a>. Les corrections qui tiennent sont appliquées au fichier de données, celui que lit chaque page dans chaque langue : un correctif atterrit donc partout d’un coup.</p>',
    faqHeading: 'Questions sur la signification des noms',
    faqs: [
      {
        q: 'D’où viennent les significations des noms de ce site ?',
        a: 'Chaque signification remonte à une source documentée : une étymologie attestée dans une langue établie, une figure avérée de la mythologie, du folklore, de l’histoire ou de la fiction publiée, une origine lexicale simple, ou un diminutif dont le nom d’origine a une signification attestée. Les noms dont la signification ne peut être documentée sont écartés plutôt que dotés d’une invention.',
      },
      {
        q: 'Les significations sont-elles garanties exactes ?',
        a: 'Non, et aucune source sur les significations de noms ne peut honnêtement le prétendre. Les étymologies sont discutées, les noms traversent les langues et ramassent de nouvelles interprétations, et il n’y a souvent pas de réponse tranchée. Chaque fiche donne la lecture la mieux attestée ; si la signification compte particulièrement pour vous, vérifiez-la auprès d’une source de confiance.',
      },
      {
        q: 'Pourquoi certains noms d’animaux courants manquent-ils ?',
        a: 'En général parce qu’aucune signification n’a pu être documentée pour eux. Un nom n’est ajouté qu’avec une signification sourcée attachée : un nom populaire sans rien de fiable derrière lui est écarté plutôt que listé avec une supposition plausible. Si vous connaissez un nom qui a sa place ici et pouvez indiquer une source, cela vaut la peine de l’envoyer.',
      },
      {
        q: 'La signification du nom a-t-elle un effet sur mon animal ?',
        a: 'Non. Un animal apprend son nom comme un motif sonore et n’a aucun accès au sens du mot. Les significations comptent pour la personne qui choisit, laquelle dira ce mot plusieurs fois par jour pendant une décennie ou plus : c’est pourquoi elles figurent sur chaque fiche au lieu d’être cachées derrière un dépliant ou un compte.',
      },
      {
        q: 'Comment signaler une signification incorrecte ?',
        a: 'Envoyez le nom et, si vous en avez une, une source que vous jugez fiable, et la fiche sera vérifiée. Les corrections sont appliquées à l’unique fichier de données que lit chaque page, si bien qu’un correctif accepté apparaît d’un coup dans tous les générateurs et toutes les langues. Les propositions de noms à ajouter sont bienvenues aux mêmes conditions.',
      },
    ],
    related: {
      heading: 'Où aller ensuite',
      html: '<p>Chaque suggestion des générateurs <a href="{{url:dog}}">chien</a>, <a href="{{url:cat}}">chat</a> et <a href="{{url:pet}}">animaux en général</a> affiche sa signification sur la fiche. La <a href="{{url:about}}">page à propos</a> explique comment le reste de l’outil est construit, et la <a href="{{url:contact}}">page de contact</a> est là où vont les corrections et les propositions.</p>',
    },
  },

  about: {
    title: 'À propos du Perfect Pet Name Generator',
    description:
      'Ce que ce générateur fait différemment : significations documentées, prononciation à voix haute, filtre de conflits avec les ordres et mode paire.',
    breadcrumb: 'À propos',
    h1: 'À propos de ce générateur',
    answerBox:
      'Perfect Pet Name Generator est un outil gratuit qui suggère des noms de chien et de chat filtrés par style, sexe, première lettre et longueur. Chaque suggestion affiche sa signification documentée, se lit à voix haute sur demande, et est vérifiée face aux noms de votre foyer et aux ordres de dressage courants — ce dernier point, presque aucun autre générateur ne le fait.',
    html: '<h2>Pourquoi ce site existe</h2><p>La plupart des générateurs de noms pour animaux renvoient une liste de mots. C’est la partie facile du problème. Les parties difficiles ne se révèlent que plus tard : découvrir que le nom signifie quelque chose de malheureux, se rendre compte qu’on ne le prononce pas avec assurance, ou passer trois mois de travail du rappel à se battre contre un nom qui sonne comme « no ».</p><p>Cet outil a été construit autour de ces trois échecs, avec {{total}} noms de chien et de chat comme liste de base. C’est délibérément un outil en une étape — on règle des filtres, on génère — plutôt qu’un questionnaire à rallonge, parce qu’un filtre de style capte déjà ce que demande un quiz, et le fait en un seul écran.</p><h2>Ce qu’il fait différemment</h2><h3>Des significations toujours visibles</h3><p>Chaque nom affiche son origine et sa signification sur la fiche elle-même. Pas derrière un bouton, pas derrière un compte, et jamais derrière un formulaire d’e-mail. Les significations viennent de sources linguistiques et culturelles établies — étymologies attestées, mythologie, origines de mots documentées — et lorsqu’une signification n’est pas documentée, aucune n’est inventée pour combler le vide.</p><h3>Une prononciation que l’on peut entendre</h3><p>Chaque nom dispose d’un bouton Prononcer qui utilise le moteur vocal déjà intégré à votre navigateur. Aucun fichier audio n’est téléchargé, aucun service tiers de synthèse vocale n’est appelé, et rien de votre session n’est transmis. C’est surtout utile pour les noms issus de la mythologie et les noms non francophones, où l’orthographe est un mauvais guide du son.</p><h3>Un filtre de conflits pour de vrais foyers</h3><p>C’est la pièce manquante de tous les outils comparables que nous avons pu trouver. Saisissez les noms de vos proches et de vos animaux actuels, et chaque suggestion leur est comparée phonétiquement — au moyen de Soundex et de distances d’édition plutôt que d’une correspondance orthographique exacte — en plus d’une vérification automatique face aux ordres de dressage courants. Les correspondances nettes sont retirées ; les cas limites sont affichés avec une mention expliquant le conflit, pour que le jugement reste le vôtre.</p><p>Le raisonnement est simple : un chien ou un chat apprend son nom comme un motif sonore distinct. Un nom qui rime avec un ordre ou avec un autre nom du foyer donne à l’animal un signal ambigu à chaque emploi, et c’est l’ambiguïté qui ralentit le dressage.</p><h3>Mode paire et portée</h3><p>Nommer deux animaux ensemble est un problème différent de nommer un animal deux fois. Le mode paire renvoie des ensembles de deux ou trois noms partageant un style et des longueurs proches — pour qu’ils se lisent comme un ensemble — tout en commençant par des sons différents et en passant la même vérification phonétique l’un face à l’autre. Cela couvre les paires adoptées ensemble comme les portées qui ont besoin d’un thème commun.</p><h2>Comment l’outil est construit</h2><p>C’est un site statique. Pas de backend, pas de base de données, pas de connexion et aucun traitement serveur de ce que vous saisissez. La liste de noms est un fichier statique, et tout le filtrage, le mélange, la comparaison phonétique et la synthèse vocale se déroulent dans votre navigateur. Les séries sont tirées avec un mélange de Fisher-Yates, pour que chaque nom correspondant à vos filtres ait une chance égale d’apparaître au lieu de voir revenir toujours les mêmes.</p><h2>Ce qu’il ne fait délibérément pas</h2><ul><li>Pas de test de personnalité — le filtre de style fait le même travail en une étape.</li><li>Pas de compte, d’inscription ou de collecte d’e-mail pour aucune fonction, filtre de conflits compris.</li><li>Pas d’envoi de photo ni de devinette de race à partir d’une image.</li><li>Pas de significations inventées. Si une signification n’est pas documentée, le nom n’est pas listé.</li></ul><h2>Nous écrire</h2><p>Corrections d’une signification, suggestions de noms à ajouter, ou toute autre chose : la <a href="{{url:contact}}">page de contact</a> donne les détails. Commencez à chercher un nom avec les générateurs <a href="{{url:dog}}">chien</a>, <a href="{{url:cat}}">chat</a> ou <a href="{{url:pet}}">animaux en général</a>.</p>',
  },

  contact: {
    title: 'Contact | Perfect Pet Name Generator',
    description:
      'Écrivez-nous pour une correction de signification, un nom à ajouter ou une question sur le générateur. Une adresse e-mail, pas de formulaire.',
    breadcrumb: 'Contact',
    h1: 'Contact',
    answerBoxHtml:
      'Écrivez à <a href="mailto:{{email}}" style="color: var(--c-accent-on-soft);">{{email}}</a> pour tout ce qui touche à ce site. Il n’y a pas de formulaire de contact, car c’est un site statique sans serveur pour le recevoir — ce qui signifie aussi que rien de ce que vous envoyez ne transite par un service de formulaires tiers.',
    html: '<h2>De quoi nous parler</h2><ul><li><strong>Une signification semble erronée.</strong> Envoyez le nom et, si vous en avez une, une source. Les significations proposées ici s’appuient sur des références linguistiques et culturelles documentées, et les corrections sont sincèrement bienvenues.</li><li><strong>Un nom manque.</strong> Les noms ne sont ajoutés qu’avec une signification documentée, alors une source aide.</li><li><strong>Quelque chose ne fonctionne pas.</strong> Le navigateur et l’appareil utilisés sont l’information la plus utile — la fonction de prononciation dépend en particulier du moteur vocal fourni avec votre appareil.</li><li><strong>Questions de confidentialité.</strong> La <a href="{{url:privacy}}">politique de confidentialité</a> couvre ce qui est collecté et ce qui ne l’est pas ; pour le reste, demandez.</li></ul><h2>Délais de réponse</h2><p>C’est un petit site indépendant, les réponses ne sont donc pas immédiates. Comptez quelques jours.</p><h2>Ce que ce site ne peut pas faire</h2><p>Les suggestions proposées ici sont des idées de noms, pas un conseil professionnel. Pour des problèmes de dressage, des questions de comportement ou tout ce qui touche à la santé de votre animal, adressez-vous à un éducateur, un comportementaliste ou un vétérinaire qualifié. Les <a href="{{url:terms}}">conditions générales</a> précisent les limites de ce que propose l’outil.</p>',
  },

  privacy: {
    title: 'Politique de Confidentialité | Noms d’Animaux',
    description:
      'Comment ce générateur statique traite les données : aucun compte, rien de ce que vous saisissez n’est stocké, tout le filtrage se fait dans votre navigateur.',
    breadcrumb: 'Politique de confidentialité',
    h1: 'Politique de confidentialité',
    updatedLabel: 'Dernière mise à jour : {{updated}}',
    answerBox:
      'Ce site n’a pas de comptes utilisateur et n’enregistre rien de ce que vous tapez. Perfect Pet Name Generator est un site statique : le générateur de noms, le filtre de conflits et la fonction de prononciation s’exécutent entièrement dans votre propre navigateur, et rien de ce que vous y saisissez n’est transmis ni conservé. Des cookies de mesure d’audience et de publicité sont en revanche utilisés et décrits en détail ci-dessous ; là où le consentement est requis, ils restent désactivés jusqu’à ce que vous les acceptiez.',
    html: '<h2>1. Qui est concerné</h2><p>Cette politique s’applique à perfectpetnamegenerator.com et à toutes ses pages. Elle décrit ce qu’il advient des informations lorsque vous utilisez le site.</p><h2>2. Ce que nous ne collectons pas</h2><p>Il n’y a nulle part sur ce site de compte, de connexion, d’inscription ou d’abonnement par e-mail, et aucune fonction n’est conditionnée à la fourniture d’une adresse e-mail. Nous ne demandons, ne recevons ni ne conservons votre nom, votre adresse, votre numéro de téléphone, vos données de paiement ou tout autre identifiant personnel.</p><h3>Le champ « éviter les noms proches de »</h3><p>Tout ce que vous saisissez dans le champ « éviter les noms proches de » — y compris les noms de proches et d’animaux actuels — est traité entièrement sur votre appareil. Ce texte est comparé à la liste de noms par du JavaScript exécuté dans votre navigateur. Il n’est jamais envoyé à un serveur, jamais écrit dans un stockage, jamais journalisé, et il disparaît dès que vous fermez ou rechargez la page. Il en va de même pour tous les autres filtres que vous réglez.</p><h2>3. Informations collectées automatiquement</h2><h3>Hébergement</h3><p>Le site est hébergé sur Cloudflare Pages. Comme tout hébergeur web, Cloudflare traite des données techniques de requête standard telles que l’adresse IP, l’agent utilisateur et l’URL demandée, afin de servir la page et de protéger le service contre les abus. Cela relève des propres conditions de confidentialité de Cloudflare, et nous n’avons pas accès à un journal identifiable des visiteurs individuels.</p><h3>Mesure d’audience</h3><p>Ce site utilise Google Analytics pour comprendre l’usage agrégé : combien de personnes le visitent, sur quelles pages elles arrivent, et approximativement dans quelle région du monde elles se trouvent. Google Analytics dépose des cookies et traite une forme anonymisée de votre adresse IP pour cela. Les données que nous voyons sont agrégées et statistiques ; elles ne vous identifient pas personnellement et ne sont pas combinées avec ce que vous saisissez dans le générateur (qui, comme indiqué, ne quitte jamais votre navigateur).</p><p>Vous pouvez refuser Google Analytics entièrement grâce au <a href="https://tools.google.com/dlpage/gaoptout" rel="nofollow noopener" target="_blank">module de désactivation de Google</a>, ou via les réglages de cookies de votre navigateur ou tout bloqueur de contenu courant. Le générateur fonctionne exactement de la même façon dans les deux cas.</p><h3>Publicité</h3><p>Ce site est financé par la publicité diffusée via Google AdSense. Google est un fournisseur tiers qui utilise des cookies pour diffuser des annonces ici, et cet usage de cookies publicitaires permet à Google et à ses partenaires de diffuser des annonces fondées sur vos visites sur ce site et sur d’autres sites d’internet. L’utilisation des cookies publicitaires par Google est régie par les <a href="https://policies.google.com/technologies/ads" rel="nofollow noopener" target="_blank">règles publicitaires de Google</a>, et la façon dont Google utilise les données des sites qui recourent à ses services est décrite sur <a href="https://policies.google.com/technologies/partner-sites" rel="nofollow noopener" target="_blank">policies.google.com</a>.</p><p>Vous pouvez désactiver la publicité personnalisée à tout moment dans les <a href="https://www.google.com/settings/ads" rel="nofollow noopener" target="_blank">paramètres des annonces Google</a>, et refuser l’usage de cookies à des fins de publicité personnalisée par des fournisseurs tiers sur <a href="https://www.aboutads.info/choices/" rel="nofollow noopener" target="_blank">aboutads.info</a>. Nous ne recevons aucune information permettant de vous identifier via la publicité et ne pouvons pas savoir à qui une annonce donnée a été montrée.</p><h3>Vos choix de cookies</h3><p>Là où le consentement est légalement requis — l’EEE, le Royaume-Uni et la Suisse — les cookies de mesure d’audience et de publicité restent désactivés jusqu’à ce que vous les acceptiez, et un bandeau vous le demande à votre première visite. Refuser prend un clic et est proposé aussi visiblement qu’accepter. Votre choix est enregistré dans votre propre navigateur et peut être modifié à tout moment depuis le lien « Paramètres des cookies » en pied de page. Rien du site ne vous est retiré si vous refusez.</p><h2>4. Stockage du navigateur</h2><p>Deux éléments sont enregistrés dans le stockage local de votre navigateur : votre préférence de thème clair ou sombre, pour que le site n’affiche pas les mauvaises couleurs à votre prochaine visite, et votre choix concernant les cookies, pour que le bandeau ne repose pas la question à chaque page. Ce sont deux valeurs uniques, elles restent sur votre appareil, et aucune n’est jamais transmise. Effacer les données du navigateur les supprime. Le sélecteur de langue n’enregistre rien : chaque langue est un simple lien vers sa propre page. La liste des noms déjà affichés reste en mémoire seulement et disparaît dès que vous fermez l’onglet.</p><h2>5. Services tiers</h2><p>Le site charge ses polices, ses styles, ses données de noms et ses scripts depuis son propre domaine plutôt que depuis des CDN tiers. La fonction de prononciation utilise le moteur vocal déjà intégré à votre système d’exploitation ou à votre navigateur ; aucun fichier audio n’est téléchargé et aucun service de synthèse vocale n’est contacté. En dehors de Cloudflare comme hébergeur et de Google comme fournisseur de la mesure d’audience et de la publicité décrites ci-dessus, aucun tiers ne reçoit de données issues de votre utilisation de ce site.</p><h2>6. Liens vers d’autres sites</h2><p>Les pages de ce site peuvent renvoyer vers des sites externes. Ces sites ont leurs propres pratiques de confidentialité, que cette politique ne couvre pas.</p><h2>7. Enfants</h2><p>Ce site est un outil de choix de noms destiné au grand public et ne s’adresse pas aux enfants de moins de 13 ans. Nous ne collectons sciemment d’informations personnelles de personne, enfants compris : il n’existe aucun mécanisme sur le site permettant d’envoyer des informations personnelles.</p><h2>8. Vos droits</h2><p>Les lois sur la vie privée, dont le RGPD et le CCPA, vous donnent le droit d’accéder aux données personnelles vous concernant, de les corriger et de les supprimer. Comme ce site ne détient aucune donnée personnelle vous concernant, il n’y a rien à récupérer ni à effacer de notre côté. Pour les données d’audience traitées par Google, utilisez les réglages de Google liés ci-dessus. Les questions sont bienvenues à l’adresse ci-dessous.</p><h2>9. Modifications de cette politique</h2><p>Cette politique sera mise à jour si les pratiques de données du site changent — un nouveau fournisseur de mesure d’audience ou de publicité étant la raison la plus probable. La date de « dernière mise à jour » en haut reflète toujours la version en vigueur.</p><h2>10. Contact</h2><p>Les questions de confidentialité peuvent être adressées à <a href="mailto:{{email}}">{{email}}</a>, ou via la <a href="{{url:contact}}">page de contact</a>.</p>',
  },

  terms: {
    title: 'Conditions Générales | Noms d’Animaux',
    description:
      'Conditions d’utilisation du générateur : un outil gratuit dont les noms et significations sont fournis tels quels, à titre d’inspiration, sans exclusivité.',
    breadcrumb: 'Conditions générales',
    h1: 'Conditions générales',
    updatedLabel: 'Dernière mise à jour : {{updated}}',
    answerBox:
      'Cet outil est gratuit et son résultat est fourni tel quel, à titre d’inspiration. Les suggestions de noms et les significations qui les accompagnent sont proposées de bonne foi à partir de sources documentées, mais aucune signification n’est garantie comme étant l’interprétation définitive ou unique d’un nom. Utiliser le site vaut acceptation de ces conditions.',
    html: '<h2>1. Le service</h2><p>Perfect Pet Name Generator propose des suggestions de noms d’animaux, des significations, la lecture de la prononciation et une vérification phonétique des conflits. Il est gratuit, ne demande aucun compte et ne comporte ni abonnement, ni paiement, ni inscription ; le site est financé par la publicité.</p><h2>2. Les suggestions sont une inspiration, pas un conseil</h2><p>Chaque nom renvoyé est une suggestion. Rien ici ne constitue un conseil professionnel de dressage, de comportement ou de médecine vétérinaire. Les repères de ce site reflètent des principes d’éducation largement admis, mais votre animal est un individu, et un éducateur, un comportementaliste ou un vétérinaire qualifié est la bonne source pour les décisions concernant ses soins et son éducation.</p><h2>3. Significations des noms</h2><p>Les significations et origines proviennent de sources linguistiques et culturelles établies et sont présentées de bonne foi. Les noms portent fréquemment des significations différentes selon les langues, les régions et les traditions, et les étymologies sont parfois discutées d’une source à l’autre. Aucune signification affichée ici n’est présentée comme l’interprétation définitive, complète ou exclusive d’un nom. Si vous choisissez un nom dont la signification compte beaucoup pour vous, vérifiez-la auprès d’une source de confiance avant de trancher.</p><h2>4. Le filtre de conflits</h2><p>Le filtre de conflits compare phonétiquement les noms aux ordres de dressage courants et à tout mot que vous saisissez. C’est une heuristique utile, pas une garantie. Il ne peut pas connaître tous les mots employés dans votre foyer, tous les accents avec lesquels ce nom sera prononcé, ni la façon dont un animal donné réagira. Traitez un résultat propre comme un bon signe, non comme une promesse.</p><h2>5. Disponibilité</h2><p>Le site est fourni « en l’état de sa disponibilité ». Il peut être modifié, interrompu ou arrêté à tout moment sans préavis. Les fonctions qui dépendent de votre navigateur — la lecture de la prononciation en particulier — reposent sur des capacités que nous ne contrôlons pas et peuvent ne pas fonctionner sur tous les appareils.</p><h2>6. Usage acceptable</h2><p>Vous pouvez utiliser librement le générateur à des fins personnelles et commerciales, y compris pour nommer des animaux en refuge, en association de sauvetage ou en élevage. Vous ne pouvez pas extraire, télécharger en masse ni redistribuer la base de noms et de significations en tant que jeu de données ou produit concurrent, ni tenter de perturber le site, ni le présenter comme le vôtre.</p><h2>7. Propriété intellectuelle</h2><p>Les noms pris individuellement n’appartiennent à personne et vous êtes libre d’utiliser tout nom trouvé ici. La conception du site, les contenus rédigés et la base compilée de noms et de significations en tant que collection restent la propriété de Perfect Pet Name Generator.</p><h2>8. Absence de garantie et limitation de responsabilité</h2><p>Le site et son contenu sont fournis sans garantie d’aucune sorte, expresse ou implicite, y compris quant à l’exactitude, à l’adéquation à un usage particulier et à une disponibilité ininterrompue. Dans toute la mesure permise par la loi, les exploitants de ce site ne sont pas responsables des pertes ou dommages découlant de son utilisation ou d’une décision de nom prise grâce à lui.</p><h2>9. Liens externes</h2><p>Les liens vers des sites tiers sont fournis par commodité. Nous ne sommes pas responsables de leur contenu, de leur exactitude ni de leurs pratiques.</p><h2>10. Modifications de ces conditions</h2><p>Ces conditions peuvent être mises à jour à mesure que le site évolue. La date de « dernière mise à jour » ci-dessus reflète la version en vigueur, et continuer à utiliser le site après une modification vaut acceptation.</p><h2>11. Contact</h2><p>Questions sur ces conditions : <a href="mailto:{{email}}">{{email}}</a>, ou utilisez la <a href="{{url:contact}}">page de contact</a>. Voyez aussi la <a href="{{url:privacy}}">politique de confidentialité</a>.</p>',
  },

  /** Translated in the sitemap-visible pages only; 404/500 stay English. */
  schema: {
    appDescription:
      'Générateur gratuit de noms de chien et de chat avec significations documentées, prononciation dans le navigateur, filtre de conflits avec les ordres de dressage et mode paire pour nommer deux animaux ensemble.',
    features: [
      'Générateur de noms de chien et de chat',
      'Signification et origine documentées pour chaque nom',
      'Prononciation par le moteur vocal du navigateur',
      'Filtre de conflits avec les ordres de dressage et les noms du foyer',
      'Mode de nommage pour paires et portées',
      'Filtres par sexe, style, première lettre et longueur maximale',
    ],
  },
};

export default fr;
