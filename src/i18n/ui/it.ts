/**
 * Italiano. Mirrors the shape of ./en.ts exactly.
 *
 * Placeholders ({{total}}, {{url:dog}}, …) and the markup inside `*Html`
 * strings must survive translation untouched. FAQ answers stay plain text
 * because they are copied into FAQPage JSON-LD.
 *
 * The training commands the tool checks are English words, because the name
 * list is English. The copy says so rather than pretending otherwise, and
 * points at the avoid field for commands in the reader's own language.
 */
const it = {
  common: {
    siteName: 'Generatore Perfetto di Nomi per Animali',
    skipLink: 'Vai al contenuto principale',
    themeToggle: 'Passa dal tema chiaro a quello scuro',
    languageLabel: 'Lingua',
    languageNav: 'Scegli una lingua',
    mainNav: 'Principale',
    breadcrumb: 'Percorso di navigazione',
    home: 'Home',
  },

  nav: {
    dog: 'Nomi per cani',
    cat: 'Nomi per gatti',
    pet: 'Nomi per animali',
    about: 'Chi siamo',
  },

  footer: {
    blurb:
      'Idee di nomi per cani e gatti con significati reali, pronuncia ad alta voce e un controllo che evita che un nome nuovo si confonda con i tuoi comandi di addestramento.',
    headings: { generators: 'Generatori', guides: 'Guide', site: 'Sito', legal: 'Note legali' },
    links: {
      home: 'Home',
      dog: 'Generatore di nomi per cani',
      cat: 'Generatore di nomi per gatti',
      pet: 'Generatore di nomi per animali',
      teach: 'Insegnare il nome',
      avoid: 'Nomi da evitare',
      pairs: 'Nomi per due animali',
      meanings: 'Significato dei nomi',
      about: 'Chi siamo',
      contact: 'Contatti',
      privacy: 'Informativa sulla privacy',
      terms: 'Termini e condizioni',
    },
    copyright:
      '© {{year}} Perfect Pet Name Generator. I significati provengono da fonti linguistiche e culturali consolidate; i suggerimenti sono spunti, non consulenza professionale di addestramento o veterinaria.',
  },

  styles: {
    fantasy: 'Fantasy',
    funny: 'Divertente',
    cute: 'Tenero',
    strong: 'Forte',
    elegant: 'Elegante',
    classic: 'Classico',
    mythical: 'Mitologico',
    food: 'Goloso',
    modern: 'Moderno',
    unique: 'Unico',
  },

  generator: {
    speciesLegend: 'Specie',
    speciesAny: 'Cani e gatti',
    speciesDog: 'Cane',
    speciesCat: 'Gatto',

    genderLegend: 'Sesso',
    genderAny: 'Indifferente',
    genderMale: 'Maschio',
    genderFemale: 'Femmina',
    genderHint: 'Le opzioni maschio e femmina includono anche i nomi unisex.',

    styleLegend: 'Stile',
    stylePickAny: '(scegline quanti vuoi)',
    styleHint:
      'Senza alcuna selezione entrano in gioco tutti gli stili. Selezionandone più di uno si ottengono nomi che corrispondono a uno qualsiasi di essi.',

    letterLabel: 'Lettera iniziale',
    letterAny: 'Qualsiasi lettera',

    maxLenLabel: 'Lunghezza massima',
    maxLenAny: 'Qualsiasi lunghezza',
    maxLenOption: '{{n}} lettere o meno',
    maxLenHint:
      'Utile per le medagliette incise, dove l’area di incisione ospita di solito circa 8 caratteri per riga.',

    avoidLabel: 'Evita nomi simili a…',
    avoidPlaceholder: 'Jake, Nora, Bo — familiari, altri animali, tutto ciò che vuoi evitare',
    avoidHtml:
      '<strong style="color: var(--c-text);">Perché è importante:</strong> un animale impara il proprio nome come un suono distinto. Un nome che fa rima con quello di una persona di casa o con un comando rende entrambi più difficili da imparare — «Bo» si confonde con «No», «Kit» con «Sit». Ogni suggerimento viene confrontato automaticamente anche con {{commandCount}} {{commandKind}} comuni ({{commandExamples}}…). Le corrispondenze nette vengono nascoste, quelle dubbie mostrate con un segnale perché decida tu. Ciò che scrivi qui viene confrontato nel tuo browser e non viene mai salvato né inviato da nessuna parte.',
    commandKindDog: 'comandi di addestramento in inglese',
    commandKindCat: 'richiami per gatti in inglese',

    optionsLegend: 'Opzioni',
    excludeShown: 'Escludi i nomi già mostrati',
    excludeShownHint: 'Ogni generazione restituisce nomi che non hai ancora visto.',
    hideFlagged: 'Nascondi del tutto i nomi segnalati',
    hideFlaggedHint:
      'Disattivato per impostazione predefinita, così vedi i conflitti dubbi e giudichi da te.',
    pairMode: 'Stai dando il nome a due animali insieme?',
    pairModeHint:
      'Restituisce insiemi che condividono uno stile, hanno lunghezze simili e non si confondono tra loro — per coppie inseparabili e cucciolate.',
    setSizeLabel: 'Nomi per insieme',
    setSize2: '2 — una coppia',
    setSize3: '3 — una cucciolata',

    generate: 'Genera nomi',
    copyBatch: 'Copia questo gruppo',
    startOver: 'Ricomincia',
    ctaHint:
      'Ottieni subito un nome di {{species}} casuale — ogni clic estrae un nuovo gruppo tra i nomi che rispettano i tuoi filtri, così puoi continuare finché non trovi quello giusto.',
    speciesWordDog: 'cane',
    speciesWordCat: 'gatto',
    speciesWordAny: 'animale',

    resultsHeading: 'Idee di nomi',
    resultsAria: 'Nomi per animali generati',
    statusInitialHtml:
      'Qui sotto c’è una prima selezione — premi <strong>Genera nomi</strong> per un gruppo adatto ai tuoi filtri.',
    noscript:
      'Il generatore interattivo richiede JavaScript. I nomi iniziali qui sotto sono mostrati per intero, significati compresi.',
    unisex: 'Unisex',
    male: 'Maschio',
    female: 'Femmina',
    meaningLabel: 'Significato:',
  },

  /** Strings the client controller renders after the page has loaded. */
  runtime: {
    pronounce: '🔊 Pronuncia',
    pronounceAria: 'Ascolta la pronuncia di {{name}} ad alta voce',
    notSupported: 'Non disponibile qui',
    bootError: 'Non è stato possibile caricare il generatore. Ricarica la pagina.',

    conflictHtml: 'Conflitto con l’addestramento: questo nome {{reason}}.',
    reasons: {
      same: 'è la stessa parola di «{{word}}»',
      oneSound: 'dista un solo suono da «{{word}}»',
      veryClose: 'è molto vicino a «{{word}}»',
      almostIdentical: 'suona quasi identico a «{{word}}»',
      rhymes: 'fa rima con «{{word}}»',
      similar: 'è simile a «{{word}}»',
    },

    dogBadge: 'Cane',
    catBadge: 'Gatto',

    whyTogether:
      'Perché funzionano insieme: {{style}}, {{lengths}} lettere, suoni iniziali diversi e nessun rischio di confonderli tra loro.',
    inStyle: 'stile {{styles}}',
    matchedInStyle: 'stile abbinato',
    joiner: ' e ',

    finding: 'Ricerca dei nomi…',
    loadError: 'Non è stato possibile caricare l’elenco dei nomi. Controlla la connessione e riprova.',

    emptyHeading: 'Nessun nome corrisponde a questi filtri',
    emptyLead:
      'Il filtro più restrittivo qui è {{reason}}. Allarga prima quello — il resto delle tue scelte può restare.',
    emptyGeneric: 'Prova a togliere un filtro — il resto delle tue scelte può restare.',
    emptyStartOver:
      'Usa «Ricomincia» qui sotto per svuotare l’elenco dei nomi già mostrati.',
    emptyReasons: {
      gender: 'il filtro del sesso',
      style: 'quella combinazione di stili',
      letter: 'la lettera iniziale',
      length: 'la lunghezza massima del nome',
      shown: '«escludi i nomi già mostrati» — hai visto tutte le corrispondenze',
      conflict: 'il filtro dei conflitti, che ha rimosso tutte le corrispondenze rimaste',
      pair: 'la modalità coppia, che richiede più nomi compatibili per formare un insieme',
    },

    noSets: 'Nessun insieme compatibile con questi filtri.',
    noMatches: 'Nessuna corrispondenza.',
    setsStatus:
      '{{count}} {{word}} che suonano bene insieme e non si confondono tra loro.',
    pairOne: 'coppia',
    pairMany: 'coppie',
    setOne: 'insieme',
    setMany: 'insiemi',

    statusNamesOne: '1 nome su {{pool}} che rispettano i tuoi filtri',
    statusNamesMany: '{{count}} nomi su {{pool}} che rispettano i tuoi filtri',
    statusHidden: '{{count}} nascosti dal filtro dei conflitti',
    statusFlagged: '{{count}} segnalati come possibile conflitto con l’addestramento',

    copied: 'Copiato',
    copyBlocked: 'La copia è bloccata in questo browser — seleziona i nomi a mano.',
    clearedShown:
      'Elenco dei nomi mostrati svuotato. Tutti i nomi sono di nuovo disponibili.',
  },

  home: {
    title: 'Generatore di Nomi per Animali | Cani e Gatti',
    description:
      'Generatore di nomi per animali gratuito. Genera nomi per cani e gatti con significati reali, ascoltali e evita conflitti con i comandi di addestramento.',
    eyebrow: 'Gratis · Senza registrazione · {{total}} nomi',
    h1: 'Generatore di nomi per animali',
    answerBox:
      'Questo generatore di nomi per animali gratuito crea a caso nomi per cani e gatti secondo i filtri che imposti: stile, sesso, lettera iniziale e lunghezza. Ogni nome mostra un significato documentato, si pronuncia con un tocco e viene controllato perché non entri in conflitto con i tuoi comandi di addestramento né con i nomi già usati in casa.',
    leadHtml:
      'Devi dare un nome a un cane? <a class="underline" style="color: var(--c-accent-on-soft);" href="{{url:dog}}">Usa il generatore di nomi per cani</a>. A un gatto? <a class="underline" style="color: var(--c-accent-on-soft);" href="{{url:cat}}">Usa il generatore di nomi per gatti</a>. Oppure genera per entrambe le specie qui sotto.',
    generator: {
      heading: 'Genera nomi per cani e gatti',
      intro:
        'Imposta tutti i filtri che vuoi, o nessuno, poi genera. Ogni nome arriva con il suo significato.',
    },
    styles: {
      heading: 'Stili popolari: nomi fantasy e nomi divertenti',
      lead: 'Tutti i {{styleCount}} filtri di stile qui sopra funzionano allo stesso modo, ma questi due sono quelli che si cercano per nome.',
      fantasy: {
        heading: 'Nomi fantasy per animali',
        html: '<p class="mt-2 text-[0.9375rem]">Cerchi un generatore di nomi fantasy? Spunta <strong>Fantasy</strong> nel filtro di stile e il gruppo arriverà da mito, narrativa epica e fantascienza — {{fantasyCount}} nomi che vanno da Gandalf, Arwen e Thorin a Zelda, Kenobi e Sdentato. Spunta anche <strong>Mitologico</strong> per allargare la scelta con Odino, Atena, Fenrir e Freya.</p><p class="mt-2 text-[0.9375rem]">I nomi fantasy tendono a superare l’ideale di una o due sillabe, ed è proprio per questo che vale la pena abbinare il filtro Fantasy a un massimo di cinque o sei lettere: Frodo arriva da un capo all’altro del parco, mentre Ercole diventerà Erc entro la seconda settimana, che tu lo abbia previsto o no.</p>',
      },
      funny: {
        heading: 'Nomi divertenti per animali',
        html: '<p class="mt-2 text-[0.9375rem]">Divertente è lo stile più ricco qui — {{funnyCount}} nomi che vanno da Waffles, Gnocchi e Meatball a Bandit, Hooligan e Chonk. Un generatore di nomi divertenti nasconde però una trappola che vale la pena nominare: la battuta deve reggere anche gridata nella sala d’attesa del veterinario e scritta sul modulo del microchip. Leggi la tua rosa di nomi ad alta voce, al volume con cui li chiameresti, prima di decidere.</p><p class="mt-2 text-[0.9375rem]">Diverse fra le opzioni più buffe nascondono un volto serio — Loki è il dio ingannatore norreno, Otis significa «ricchezza» in germanico — e il significato compare su ogni scheda, così vedi esattamente cosa stai scegliendo.</p>',
      },
    },
    different: {
      heading: 'Tre cose che questo generatore fa e la maggior parte no',
      cards: [
        {
          heading: 'Significati che si possono davvero leggere',
          body: 'Ogni nome mostra origine e significato sulla scheda, sempre visibili. Nessun menu da aprire, nessun account, nessuna barriera di posta elettronica. Un nome che dirai dieci volte al giorno merita di essere noto prima di sceglierlo.',
        },
        {
          heading: 'Un filtro dei conflitti per casa tua',
          body: 'Scrivi i nomi dei familiari e degli altri animali e il generatore toglie i suggerimenti che suonano troppo simili, oltre al controllo automatico sui comandi di addestramento più comuni. È il pezzo che quasi nessun altro strumento offre.',
        },
        {
          heading: 'Nomi per due animali insieme',
          body: 'Le coppie inseparabili e i fratelli di cucciolata hanno bisogno di nomi che stiano insieme per stile ma restino nettamente distinti ad alta voce. La modalità coppia costruisce quegli insiemi e confronta i nomi anche tra loro, non solo con quelli di casa tua.',
        },
      ],
    },
    pick: {
      heading: 'Scegli il tuo generatore',
      dog: {
        heading: 'Generatore di nomi per cani',
        body: '{{dogCount}} nomi per cani con significato, verificati su {{dogCommandCount}} comandi comuni tra cui sit, stay, come e down.',
      },
      cat: {
        heading: 'Generatore di nomi per gatti',
        body: '{{catCount}} nomi per gatti con significato, calibrati sui suoni a cui i gatti rispondono e verificati sui richiami usati in una casa con gatto.',
      },
      pet: {
        heading: 'Nomi per una casa con più animali',
        body: 'Entrambe le specie insieme, più indicazioni per dare un nome in una casa che ha già bambini, un partner o altri animali.',
      },
    },
    how: {
      heading: 'Come sono ragionati i consigli sui nomi',
      html: '<p>Le regole applicate qui sono quelle che danno gli educatori professionisti: nome corto, nettamente distinto dai comandi e costante una volta scelto. Un cane o un gatto impara un nome come uno schema sonoro legato ad attenzione e ricompensa, non come una parola con un significato. Ecco perché un nome che si sovrappone a «no» o a «sit» ti costa tempo reale di addestramento: stai chiedendo all’animale di separare due segnali che gli arrivano all’orecchio quasi identici.</p><p>I significati mostrati accanto a ogni nome funzionano al contrario: contano per te, non per l’animale. Ci sono perché un nome porta con sé quindici anni di uso quotidiano, e sapere che Luna è «luna» in latino o che Odino appartiene alla mitologia norrena è il tipo di dettaglio che trasforma una rosa di candidati in una decisione. I significati provengono da fonti linguistiche e culturali documentate, e nessuno è tirato a indovinare.</p><p>Nulla su questo sito richiede un account. Il filtro dei conflitti gira interamente nel tuo browser, ed è per questo che i nomi che vi digiti non lasciano mai il tuo dispositivo — vedi l’<a href="{{url:privacy}}">informativa sulla privacy</a> per i dettagli.</p>',
    },
    about: {
      heading: 'Informazioni su questo generatore di nomi per animali',
      paragraphs: [
        'Perfect Pet Name Generator è un generatore di nomi per animali gratuito per cani e gatti, pensato per risolvere gli aspetti della scelta del nome che emergono solo più avanti, non solo per darti un elenco di parole. Attinge a {{total}} nomi distribuiti su {{styleCount}} stili. Ogni nome che restituisce porta con sé un significato documentato, un pulsante che lo pronuncia ad alta voce nel browser e un controllo automatico rispetto ai comandi che il tuo animale deve imparare. Nulla è bloccato: nessuna registrazione, nessun passaggio via e-mail, nessuna versione a pagamento per alcuna funzione, filtro dei conflitti domestici e modalità coppia inclusi.',
        'Nel suo nucleo è un generatore di nomi casuale. Ogni volta che premi Genera, i nomi che corrispondono ai tuoi filtri vengono mescolati con un algoritmo di Fisher-Yates e viene estratto un nuovo gruppo, così ogni nome idoneo ha la stessa probabilità di comparire invece di rivedere sempre gli stessi. Senza filtri impostati funziona come un puro generatore di nomi per cani casuale e generatore di nomi per gatti casuale. Aggiungi uno stile, una lettera iniziale o un limite di lunghezza e l’estrazione resta casuale: avviene semplicemente all’interno di un insieme più piccolo.',
        'Il generatore di nomi per cani è calibrato sul modo in cui un cane impara davvero un nome. Puoi filtrare per maschio, femmina o unisex, per stile, per lettera iniziale e per una lunghezza massima che stia su una medaglietta identificativa incisa. Le viste maschio e femmina del generatore di nomi per cani mantengono i nomi unisex nei risultati, così una buona opzione non va mai persa per una divisione di genere rigida. Ogni proposta viene confrontata con {{dogCommandCount}} comandi comuni come sit, stay, come, heel e down; i nomi che suonano troppo vicini vengono nascosti, e i casi limite mostrati con un contrassegno perché la decisione finale resti tua.',
        'Il generatore di nomi per gatti segue lo stesso impianto, ma si appoggia ai suoni a cui i gatti rispondono meglio: nomi brevi con note chiare e ad alta frequenza, come la «i» di Mimi o la k dura di Kiko. Filtra il generatore di nomi per gatti per maschio o femmina, per stile, per lettera o per lunghezza, ed evita i richiami usati in una casa con un gatto. Come per i cani, i risultati maschio e femmina del generatore di nomi per gatti tengono i nomi unisex nell’insieme invece di scartarli.',
        'Se stai compilando documenti di pedigree, lo strumento funziona anche come generatore di nomi registrati per cani. I nomi registrati per l’AKC, il Kennel Club e registri simili sono lunghi, formali e spesso costruiti su un tema di allevamento o di cucciolata, mentre il nome con cui lo chiami a casa resta breve. Disattiva il limite di lunghezza e scegli uno stile elegante o classico per il nome registrato, poi rilancia il generatore con un limite di cinque o sei lettere per trovare il nome quotidiano che lo accompagna.',
        'Gli stili sono il modo in cui la maggior parte delle persone restringe l’elenco. Fantasy attinge al mito, alla narrativa epica e alla fantascienza; Divertente è la categoria più ampia qui e va da Waffles e Meatball a Bandit e Hooligan; accanto ci sono i filtri tenero, forte, elegante, classico, mitico, ispirato al cibo, moderno e unico. Selezionane diversi insieme e il generatore restituisce i nomi che corrispondono a uno qualsiasi di essi, il modo più rapido per allargare una ricerca diventata troppo stretta.',
        'I significati sono l’altra metà dello strumento, e contano per te più che per l’animale. Un nome pronunciato dieci volte al giorno per quindici anni merita di essere una quantità nota, perciò l’origine e il significato di ogni nome stanno bene in vista sulla scheda, mai dietro un interruttore, un account o un modulo e-mail. I significati provengono da etimologie attestate, mitologia e origini di parole documentate, e quando un significato non è documentato il nome viene omesso anziché dotato di uno inventato.',
        'Ogni nome generato ha un pulsante Pronuncia che lo legge ad alta voce con il motore vocale già integrato nel tuo dispositivo. Non viene scaricato alcun audio e non viene contattato alcun servizio di sintesi vocale di terze parti. Conta soprattutto per i nomi di origine mitologica e non inglesi, dove l’ortografia dice poco su come il nome si pronuncia davvero, e ascoltare una lista breve al volume di un richiamo è il modo più rapido per individuare un nome scomodo da gridare in un parco.',
        'Il filtro dei conflitti domestici è l’elemento che quasi nessun altro generatore di nomi per animali offre. Inserisci i nomi già in uso in casa — un partner, un figlio, un altro animale, persino un soprannome gridato attraverso il giardino — e ogni proposta viene confrontata con essi foneticamente anziché per l’ortografia, perché «Kay» e «Stay» non condividono alcuna lettera iniziale ma si confondono del tutto all’ascolto. Le corrispondenze nette vengono rimosse e i casi limite segnalati, e tutto ciò che digiti viene confrontato nel tuo browser e non viene mai memorizzato, registrato o inviato da nessuna parte.',
        'Dare il nome a due animali insieme è un problema diverso dal dare due volte il nome a un solo animale, perciò il generatore ha una modalità coppia. Restituisce insiemi di due o tre nomi che condividono uno stile e restano entro circa due lettere dalla stessa lunghezza, poi scarta qualsiasi insieme i cui nomi siano foneticamente vicini tra loro. È pensato per coppie inseparabili adottate insieme e per cucciolate che hanno bisogno di un tema comune senza rispondere al nome l’una dell’altra.',
        'L’intero sito è statico: nessun account, nessun database, nessuna elaborazione lato server di ciò che inserisci. Parti dal generatore di nomi per cani, dal generatore di nomi per gatti, o genera per entrambe le specie con lo strumento qui sopra, e fai le due cose che evitano il rimpianto del nome: leggi il significato e pronuncia il nome ad alta voce prima di decidere.',
      ],
    },
    faqHeading: 'Domande frequenti',
    faqs: [
      {
        q: 'Che cosa rende buono il nome di un animale?',
        a: 'Un buon nome per un animale ha una o due sillabe, finisce con una vocale chiara o una consonante decisa e non somiglia ad alcuna parola che usi come comando. I nomi corti arrivano meglio attraverso un parco o una stanza, e una finale distinta aiuta il cane o il gatto a riconoscere il proprio nome dentro una conversazione qualsiasi. Il significato conta più per te che per l’animale, ed è per questo che ogni nome qui mostra la sua origine.',
      },
      {
        q: 'Perché il nome di un animale non deve somigliare a un comando?',
        a: 'Un nome che suona come un comando rallenta l’addestramento, perché l’animale non distingue i due segnali. «Bo» e «no», o «Kit» e «sit», differiscono per un solo suono, quindi l’animale riceve un segnale ambiguo ogni volta che se ne usa uno. Questo generatore confronta ogni suggerimento con i comandi più comuni e con i nomi di casa che inserisci, nasconde le corrispondenze nette e segnala quelle dubbie.',
      },
      {
        q: 'Questo generatore è gratuito? Serve un account?',
        a: 'È completamente gratuito e non c’è alcun account, registrazione o passaggio via posta elettronica per nessuna funzione, filtro dei conflitti e modalità coppia compresi. Tutto funziona nel tuo browser su un elenco statico di nomi. Nulla di ciò che digiti viene salvato o inviato a un server.',
      },
      {
        q: 'Posso generare nomi per due animali adottati insieme?',
        a: 'Sì. Attiva «Stai dando il nome a due animali insieme?» e il generatore restituisce insiemi di due o tre nomi invece di un elenco singolo. Ogni insieme condivide uno stile, resta entro due lettere dalla stessa lunghezza, inizia con un suono diverso e supera lo stesso controllo fonetico del filtro dei conflitti, così gli animali non rispondono al nome dell’altro.',
      },
      {
        q: 'Quali sono buoni nomi fantasy per un animale?',
        a: 'I buoni nomi fantasy sono riconoscibili da una storia o da un mito e restano comunque abbastanza corti da essere chiamati dall’altra parte del giardino: Gandalf, Arwen, Thorin, Zephyr e Zelda riescono in entrambe le cose. Il filtro Fantasy ne contiene {{fantasyCount}}, e spuntare anche Mitologico allarga la scelta con Odino, Atena, Fenrir e Freya. I nomi lunghi finiscono accorciati nella pratica, quindi verifica che il nome regga anche in due sillabe prima di decidere.',
      },
      {
        q: 'Che cosa sono i nomi divertenti per animali?',
        a: 'I nomi divertenti sono quelli la cui comicità nasce dallo scarto fra il nome e l’animale che lo porta: Waffles, Meatball, Bandit, Chonk e Hooligan sono il genere di risultati che restituisce il filtro Divertente, e qui ce ne sono {{funnyCount}}. L’unica prova vera è se la battuta funziona ancora quando un veterinario la chiama in sala d’attesa, quindi leggi la tua rosa ad alta voce prima di scegliere.',
      },
      {
        q: 'Da dove vengono i significati dei nomi?',
        a: 'I significati provengono da fonti linguistiche e culturali consolidate e non sono stati inventati per lo strumento: etimologie documentate, mitologia e origini di parole attestate. Sono mostrati per intero accanto a ogni nome, mai nascosti dietro un menu o un modulo, così puoi giudicare un nome prima di impegnarti per quindici anni.',
      },
    ],
  },

  dog: {
    title: 'Generatore di Nomi per Cani con Significati',
    description:
      'Generatore di nomi per cani gratuito con significati e pronuncia. Filtra per stile, sesso, lettera e lunghezza ed evita conflitti con i comandi.',
    breadcrumb: 'Nomi per cani',
    h1: 'Generatore di nomi per cani',
    answerBox:
      'Il nome di un cane dovrebbe avere una o due sillabe e distinguersi nettamente da ogni comando che intendi insegnargli. Questo generatore attinge a {{dogCount}} nomi per cani con significati documentati, pronuncia ciascuno ad alta voce e rimuove automaticamente i suggerimenti che suonano come {{dogCommandCount}} comandi comuni — così il nome scelto non compete con le parole che il tuo cane deve imparare.',
    generator: {
      heading: 'Genera nomi per cani',
      intro:
        'Filtra per stile, sesso, lettera iniziale o lunghezza adatta alla medaglietta. Aggiungi i nomi di casa da evitare e al resto pensa il filtro dei conflitti.',
    },
    prose: {
      heading: 'Perché il nome di un cane non deve suonare come un comando',
      html: '<p>Un cane impara un nome come suono, non come parola. Quando il nome si sovrappone a un segnale, ogni ripetizione insegna ambiguità invece di chiarezza: il cane sente qualcosa di simile a «no» e deve indovinare se lo stanno chiamando o correggendo. Il costo si misura in settimane di richiamo più lento da costruire, e il richiamo è il comando che conta di più.</p><p>I comandi verificati automaticamente in questa pagina sono: {{dogCommands}}. Sono in inglese perché lo è l’elenco dei nomi; se addestri in italiano, scrivi i tuoi comandi nel campo qui sotto e verranno verificati allo stesso modo. I nomi troppo vicini a uno di essi spariscono dai risultati, e le corrispondenze dubbie vengono mostrate con un segnale che spiega il conflitto invece di essere scartate in silenzio, perché una rima di cui sei consapevole è più facile da gestire di una che scopri al terzo mese.</p><p>Lo stesso controllo vale per ciò che scrivi nel campo «evita nomi simili a». Un cane in una casa con un Jake farà fatica con Jade; un secondo cane che arriva accanto a una Bailey farà fatica con Hayley. Quel confronto avviene nel tuo browser e nulla di ciò che scrivi viene salvato o trasmesso.</p><h2>Dare il nome a due cani, o a un’intera cucciolata</h2><p>Due cani nella stessa casa hanno bisogno di nomi inconfondibilmente diversi tra loro. La modalità coppia costruisce insiemi che condividono uno stile e restano vicini per lunghezza — così suonano come della stessa casa — imponendo al tempo stesso suoni iniziali diversi ed eseguendo lo stesso controllo fonetico fra i due nomi. Funziona sia per le coppie adottate insieme sia per i fratelli di cucciolata che vogliono un tema coerente.</p><h2>Nomi che stanno su una medaglietta incisa</h2><p>Sulla maggior parte delle medagliette incise entrano circa otto caratteri per riga prima che il testo debba rimpicciolirsi, e un nome che contende lo spazio a un numero di telefono è il primo a essere tagliato. Il filtro della lunghezza massima esiste esattamente per questo: impostalo su sei o meno e ogni suggerimento si inciderà con agio accanto ai tuoi recapiti.</p>',
    },
    showcase: {
      heading: 'Nomi per cani per stile, con significati',
      lead: 'Un campione dall’elenco completo. Usa il generatore qui sopra per filtrare il resto per sesso, lettera e lunghezza.',
      strong: 'Nomi forti per cani',
      cute: 'Nomi teneri per cani',
      mythical: 'Nomi mitologici per cani',
    },
    more: {
      heading: 'Dare il nome a un altro animale',
      html: '<p>È un gatto? Il <a href="{{url:cat}}">generatore di nomi per gatti</a> usa un elenco specifico e verifica i suoni a cui i gatti rispondono davvero. Entrambi, o qualcosa di completamente diverso? Il <a href="{{url:pet}}">generatore generale di nomi per animali</a> funziona per tutte le specie, e la <a href="{{url:home}}">home page</a> spiega come si incastrano significati, pronuncia e controlli sui conflitti.</p>',
    },
    faqHeading: 'Domande sui nomi per cani',
    faqs: [
      {
        q: 'Come scelgo il nome di un cane?',
        a: 'Scegli un nome di una o due sillabe che finisca con una vocale o una consonante decisa e non condivida alcun suono con i tuoi comandi. Pronuncialo ad alta voce, al volume che useresti in un parco, prima di decidere; confrontalo con le parole che il cane deve già imparare; e mantienilo una volta scelto: cambiare nome a metà addestramento azzera l’associazione.',
      },
      {
        q: 'Quali nomi per cani conviene evitare?',
        a: 'Evita i nomi che fanno rima con i tuoi comandi di addestramento o vi somigliano molto: {{dogCommandsShort}} e segnali simili. Evita anche quelli che coincidono con un familiare o un altro animale di casa, perché un cane non riesce a separare due suoni simili provenienti dalla stessa voce. Il generatore di questa pagina rimuove entrambe le categorie automaticamente.',
      },
      {
        q: 'Il nome di un cane deve avere una o due sillabe?',
        a: 'Una o due sillabe è il limite pratico per il nome di un cane. I nomi corti bucano il rumore di fondo e si pronunciano facilmente in modo netto e costante, che è ciò che il cane sta davvero imparando. I nomi lunghi vengono comunque accorciati nell’uso quotidiano, quindi conviene scegliere di proposito la forma breve invece di subirla.',
      },
      {
        q: 'Posso ascoltare come si pronuncia un nome per cane?',
        a: 'Sì. Ogni nome generato ha un pulsante Pronuncia che lo legge ad alta voce usando il motore vocale integrato nel tuo browser. Funziona anche offline una volta caricata la pagina, non invia nulla a un server e non richiede alcun componente aggiuntivo. Sentire un nome pronunciato è il modo più rapido per accorgersi di uno scomodo da chiamare.',
      },
      {
        q: 'Quanti nomi per cani contiene questo generatore?',
        a: 'Il generatore attinge a {{dogCount}} nomi per cani, ciascuno con significato e origine documentati. I filtri per sesso, stile, lettera iniziale e lunghezza massima restringono quell’insieme, e il gruppo che vedi viene estratto con un mescolamento di Fisher-Yates, così ogni nome compatibile ha la stessa probabilità di comparire invece di rivedere sempre gli stessi.',
      },
    ],
  },

  cat: {
    title: 'Generatore di Nomi per Gatti con Significati',
    description:
      'Generatore di nomi per gatti gratuito con significati documentati e pronuncia al tocco. Filtra per stile, sesso, lettera e lunghezza, senza conflitti.',
    breadcrumb: 'Nomi per gatti',
    h1: 'Generatore di nomi per gatti',
    answerBox:
      'Il nome di un gatto dovrebbe essere corto, contenere un suono acuto come una «i» o una consonante decisa, e restare nettamente distinto dalle parole usate per richiamarlo o correggerlo. Questo generatore attinge a {{catCount}} nomi per gatti con significati documentati, legge ciascuno ad alta voce e scarta i nomi che entrano in conflitto con quelli di casa o con i richiami che il gatto sente ogni giorno.',
    generator: {
      heading: 'Genera nomi per gatti',
      intro:
        'Filtra per stile, sesso, lettera iniziale o lunghezza adatta alla medaglietta. Aggiungi i nomi già usati in casa e il filtro dei conflitti li terrà alla larga.',
    },
    prose: {
      heading: 'Che cosa rende efficace il nome di un gatto',
      html: '<p>I gatti rispondono meglio a nomi corti con suoni acuti. Il loro udito si spinge molto più in alto del nostro, e i suoni che distinguono con più nettezza sono quelli chiari: la «i» di Mimi, la k dura di Kiko. Un nome fatto di suoni bassi e morbidi non è sbagliato, deve solo faticare di più per conquistare l’attenzione rispetto a tutto il resto che c’è nella stanza.</p><p>L’altra metà del problema è la separazione. I gatti distinguono il proprio nome da parole dal suono simile, ma la distinzione è sottile, e a un suono ambiguo rispondono di solito con indifferenza più che con un tentativo. I richiami verificati automaticamente in questa pagina sono: {{catCues}}. Ogni nome dell’elenco troppo vicino a uno di essi viene rimosso prima che tu lo veda.</p><h2>Dare il nome a due gatti, o a una cucciolata di gattini</h2><p>Due gatti nella stessa casa hanno bisogno di nomi che una persona possa chiamare in modo distinto anche di fretta e che i gatti non confondano tra loro. La modalità coppia restituisce insiemi di due o tre nomi che condividono stile e lunghezza approssimativa ma iniziano con suoni diversi, con lo stesso controllo fonetico applicato fra i nomi stessi. Per una cucciolata imposta la dimensione su tre e il tema regge su tutti e tre.</p><h2>Nomi corti per le medagliette del collare</h2><p>Le medagliette per gatto sono più piccole di quelle per cane e l’area di incisione è davvero stretta: sei caratteri sono un tetto sicuro se la medaglietta porta anche un numero di telefono. Imposta la lunghezza massima su cinque o sei e ogni suggerimento entrerà senza che l’incisore debba rimpicciolire il testo fino a renderlo illeggibile.</p>',
    },
    showcase: {
      heading: 'Nomi per gatti per stile, con significati',
      lead: 'Un campione dall’elenco completo. Il generatore qui sopra filtra il resto per sesso, lettera e lunghezza.',
      elegant: 'Nomi eleganti per gatti',
      mythical: 'Nomi mitologici per gatti',
      food: 'Nomi golosi per gatti',
    },
    more: {
      heading: 'Dare il nome a un altro animale',
      html: '<p>È un cane? Il <a href="{{url:dog}}">generatore di nomi per cani</a> verifica l’elenco completo dei comandi su cui i cani vengono addestrati. Entrambi insieme, o cerchi qualcosa di neutro rispetto alla specie? Usa il <a href="{{url:pet}}">generatore di nomi per animali</a>, oppure parti dalla <a href="{{url:home}}">home page</a> per vedere come si combinano significati, pronuncia e filtro dei conflitti.</p>',
    },
    faqHeading: 'Domande sui nomi per gatti',
    faqs: [
      {
        q: 'Come scelgo il nome di un gatto?',
        a: 'Scegli un nome corto con dentro un suono acuto e nitido: i gatti sentono le frequenze alte molto meglio di quelle basse, ed è per questo che i nomi con una «i» o una consonante decisa ottengono una risposta più affidabile. Due sillabe che finiscono in vocale funzionano bene. Prova il nome chiamandolo da un capo all’altro di una stanza prima di decidere.',
      },
      {
        q: 'I gatti imparano davvero il proprio nome?',
        a: 'I gatti imparano il proprio nome, e la ricerca sui gatti domestici ha mostrato che lo distinguono da parole dal suono simile. Che cosa decidano di farne è un’altra questione. Poiché la discriminazione è reale ma sottile, un nome molto simile a una parola di casa o al nome di un altro animale confonde davvero il segnale.',
      },
      {
        q: 'Quali nomi per gatti conviene evitare?',
        a: 'Evita i nomi che somigliano ai suoni che già usi per casa — {{catCues}} — e qualsiasi cosa vicina al nome di un familiare o di un altro animale. I gatti tendono a ignorare un suono ambiguo più che a tentare, quindi un nome che si sovrappone a una parola di richiamo finisce per essere del tutto ignorato.',
      },
      {
        q: 'Posso ascoltare il nome del gatto prima di sceglierlo?',
        a: 'Sì. Ogni nome generato ha un pulsante Pronuncia che usa il motore vocale integrato nel tuo browser, senza componenti aggiuntivi, account o download audio. È particolarmente utile per i nomi di origine mitologica e non italiana, dove l’ortografia dice poco su come il nome si pronuncia davvero.',
      },
      {
        q: 'E se sto dando il nome a due gattini insieme?',
        a: 'Attiva «Stai dando il nome a due animali insieme?» e il generatore restituirà insiemi abbinati invece di un elenco singolo. Ogni insieme condivide stile e lunghezza simile ma inizia con suoni diversi, così due gattini della stessa casa non arrivano entrambi di corsa — né ti ignorano entrambi — quando chiami un nome.',
      },
    ],
  },

  pet: {
    title: 'Nomi per Animali con Significati',
    description:
      'Nomi per una casa che ha già dei nomi. Ognuno mostra il suo significato, si ascolta ad alta voce ed è verificato su famiglia, animali e comandi.',
    breadcrumb: 'Nomi per animali',
    h1: 'Nomi per animali: cani e gatti',
    answerBox:
      'Il nome di un animale funziona quando è corto, facile da pronunciare in modo netto e diverso da ogni altro nome e comando già in uso in casa. Questo generatore copre {{total}} nomi per cani e gatti su {{styleCount}} stili, mostra il significato documentato di ciascuno, lo legge ad alta voce e scarta i nomi che entrerebbero in collisione con la tua famiglia, i tuoi altri animali o i tuoi segnali di addestramento.',
    generator: {
      heading: 'Genera nomi per animali',
      intro:
        'Passa da cani a gatti, o a entrambi insieme. Filtri, significati, pronuncia e controllo dei conflitti funzionano allo stesso modo per tutte le specie.',
    },
    prose: {
      heading: 'Dare un nome in una casa che ha già dei nomi',
      html: '<p>L’errore più comune nella scelta del nome è decidere in isolamento. Un nome che da solo suona benissimo può diventare un problema quotidiano in una casa con un Jack, uno Zack o un cane che risponde già a Bailey. Gli animali reagiscono a schemi sonori, e due schemi simili nella stessa casa significano che entrambi gli animali reagiscono a entrambi i nomi — oppure che nessuno dei due risponde in modo affidabile al proprio.</p><p>Il campo «evita nomi simili a» esiste per questo. Scrivi tutti i nomi già in uso in casa — persone, animali, perfino il soprannome che si grida in giardino — e ogni suggerimento verrà confrontato con tutti loro tramite un controllo fonetico, non una corrispondenza di lettere. La differenza conta: «Kay» e «Stay» non condividono alcuna lettera all’inizio, ma ad alta voce collidono del tutto.</p><h2>Dare il nome a due animali nello stesso momento</h2><p>Due animali che arrivano insieme hanno bisogno di nomi che si appartengano senza essere confondibili tra loro. La modalità coppia si occupa di entrambe le metà: raggruppa nomi che condividono uno stile e restano entro due lettere dalla stessa lunghezza, poi scarta ogni abbinamento i cui membri siano foneticamente vicini. Imposta la dimensione su tre per una cucciolata e il tema regge su tutti e tre i nomi.</p><h2>Da dove vengono questi nomi e significati</h2><p>Ogni nome dell’elenco porta un significato tratto da fonti linguistiche e culturali documentate: etimologie attestate, mitologia e origini di parole consolidate. Nulla è stimato o inventato per riempire un vuoto, e il significato compare accanto al nome invece di restare nascosto dietro un menu o un modulo. Puoi leggere di più sull’approccio nella pagina <a href="{{url:about}}">Chi siamo</a>.</p><h2>Indicazioni per specie</h2><p>Per consigli tarati su un animale preciso, usa il <a href="{{url:dog}}">generatore di nomi per cani</a>, che confronta i nomi con l’elenco completo dei comandi di addestramento, o il <a href="{{url:cat}}">generatore di nomi per gatti</a>, che copre le frequenze a cui i gatti rispondono meglio. Il <a href="{{url:home}}">generatore di nomi per animali della home page</a> genera per entrambe le specie e tratta più in dettaglio gli stili fantasy e divertente.</p>',
    },
    faqHeading: 'Domande sulla scelta del nome',
    faqs: [
      {
        q: 'Qual è il modo migliore per scegliere il nome di un animale?',
        a: 'Scegli un nome corto, facile da pronunciare in modo netto, diverso da ogni altro nome e comando di casa, e che tu sia contento di dire ad alta voce in pubblico. Lavora su un elenco filtrato invece che su una pagina bianca, controlla il significato prima di impegnarti e pronuncia il nome ad alta voce, al volume con cui lo chiameresti, prima di decidere.',
      },
      {
        q: 'Come do il nome a un animale che entra in una casa che ne ha già?',
        a: 'Scegli un nome che non condivida né il suono iniziale né la rima con gli animali già presenti. Gli animali di casa rispondono al proprio nome per riflesso, e due nomi simili in una stessa casa fanno arrivare entrambi non appena se ne chiama uno. Inserisci i nomi degli animali attuali nel campo «evita nomi simili a» e il generatore rimuoverà le collisioni.',
      },
      {
        q: 'Valgono gli stessi consigli per cani e gatti?',
        a: 'La regola di fondo è la stessa — corto, distinto, costante — ma l’accento cambia. I cani hanno bisogno della massima distanza dai comandi di addestramento, perché i comandi si usano di continuo e il costo dell’ambiguità è un richiamo più lento. I gatti rispondono in modo più affidabile ai suoni acuti e tendono a ignorare un nome ambiguo invece di tentare.',
      },
      {
        q: 'Posso usare questo generatore per un animale che non sia un cane o un gatto?',
        a: 'Sì, con una precisazione: i {{total}} nomi qui presenti sono selezionati per cani e gatti, e il controllo automatico dei conflitti usa segnali canini e felini. I nomi in sé — i loro significati, suoni e stili — funzionano benissimo per un coniglio, un furetto o un cavallo. Il filtro della lunghezza e il filtro dei conflitti domestici valgono per qualsiasi animale.',
      },
      {
        q: 'Viene salvato qualcosa di ciò che scrivo nel generatore?',
        a: 'No. Il generatore è un sito statico senza account, senza database e senza elaborazione dei tuoi dati sul server. I nomi che scrivi nel filtro dei conflitti vengono confrontati nel tuo browser e scartati quando chiudi la scheda. L’informativa sulla privacy indica con precisione che cosa viene raccolto e che cosa no.',
      },
    ],
  },

  /**
   * Elementi comuni alle quattro guide. Sono articoli e non pagine di
   * strumento, quindi portano una firma e una data di revisione.
   */
  guides: {
    bylineLabel: 'Perfect Pet Name Generator',
    updatedLabel: 'Aggiornato il {{updated}}',
    homeHeading: 'Guide alla scelta del nome',
    homeLead:
      'Scegliere la parola è la parte veloce. Queste quattro guide coprono tutto quello che c’è intorno: insegnare il nome, i nomi da escludere, dare il nome a due animali insieme e da dove arrivano i significati di questo sito.',
    readMore: 'Leggi la guida',
  },

  /** Banner sui cookie. Mostrato solo dove il consenso è obbligatorio. */
  consent: {
    title: 'Cookie su questo sito',
    bodyHtml:
      'Usiamo cookie per misurare come viene usato il sito e per sostenerlo con la pubblicità. Se rifiuti, il generatore funziona esattamente come adesso: tutti i filtri, il controllo dei conflitti e il pulsante di pronuncia girano nel tuo browser in entrambi i casi. L’<a href="{{url:privacy}}">informativa sulla privacy</a> spiega i dettagli.',
    accept: 'Accetta',
    reject: 'Rifiuta',
    manage: 'Impostazioni cookie',
    ariaLabel: 'Consenso ai cookie',
  },

  teach: {
    title: 'Come insegnare il nome a un cane o a un gatto',
    description:
      'Un metodo in quattro fasi perché un cucciolo risponda al proprio nome: come caricare il suono, quanto esercitarsi e cosa lo rovina senza farsi notare.',
    breadcrumb: 'Insegnare il nome',
    h1: 'Come insegnare il nome a un cane o a un gatto',
    keywords:
      'insegnare il nome al cane, riconoscimento del nome, insegnare il nome al cucciolo, insegnare il nome al gatto, segnale contaminato',
    answerBox:
      'Insegna il nome associando il suono a qualcosa di piacevole prima ancora di pretendere una risposta: pronuncia il nome una volta, segna l’istante in cui l’animale ti guarda, premia, ripeti. Da cinque a dieci ripetizioni, tre volte al giorno, in una stanza tranquilla bastano alla maggior parte di cuccioli e gattini per girare la testa in modo affidabile entro una settimana. Il nome è una richiesta di attenzione, mai una correzione, e il modo più rapido per perderlo è usarlo quando sei irritato.',
    card: {
      heading: 'Insegnare il nome',
      body: 'Un protocollo in quattro fasi per ottenere una girata di testa affidabile, quanto dovrebbe metterci e le abitudini che lo disfano in silenzio.',
    },
    html: '<h2>Che cosa significa davvero «conoscere il proprio nome»</h2><p>Un animale non impara il nome come un’etichetta. Lo impara come un suono che annuncia qualcosa per cui vale la pena voltarsi. La distinzione non è accademica: decide l’intero metodo. Non gli stai insegnando chi è; stai costruendo un riflesso in cui un rumore preciso, fra tutto quello che sente in una giornata, significa in modo affidabile <strong>guardami, sta per succedere qualcosa di bello</strong>.</p><p>La conseguenza pratica è che il nome ha un solo compito: comprarti l’attenzione dell’animale per poterti rivolgere a lui con altro. Il richiamo, un contatto con la mano, l’aggancio del guinzaglio, lo sguardo distolto da un altro cane: tutto parte dalla girata di testa. Un nome che funziona solo a metà non è un problema di nome, è un problema di attenzione, e ricompare in ogni altro segnale che insegnerai dopo.</p><h2>Il metodo in quattro fasi</h2><h3>Fase uno: caricare il suono</h3><p>Comincia nella stanza più tranquilla della casa, senza altri animali presenti e con qualcosa che l’animale desideri davvero: bocconcini piccoli, morbidi e veloci da mangiare per la maggior parte dei cani; una leccata di umido, una canna con le piume o qualche secondo di grattatina sotto il mento per i gatti. Pronuncia il nome una volta, con tono caldo e pacato. Nell’istante in cui un orecchio si muove o la testa gira verso di te, segnalo — un breve «sì», un clic o semplicemente il bocconcino che compare — e consegna il premio.</p><p>Se non succede nulla per due o tre secondi, non ripetere il nome. Fai un rumore completamente diverso — uno schiocco con la bocca, un colpetto sul pavimento — e premia la risposta che ottieni. Ripetere un nome nel vuoto è l’errore più comune, perché quello che l’animale impara è che il nome può essere ignorato più volte prima che succeda qualcosa.</p><h3>Fase due: cambiare distanza e angolo</h3><p>Quando la girata di testa è immediata, comincia a variare la tua posizione. Pronuncia il nome dall’altra parte della stanza, da dietro, da un’altezza diversa, seduto per terra, in piedi, dalla stanza accanto. Ogni variazione è informazione davvero nuova per un animale: un segnale imparato solo mentre sei accovacciato davanti a lui spesso crolla la prima volta che lo dici in piedi.</p><h3>Fase tre: generalizzare</h3><p>Passa al giardino, poi al pianerottolo, poi al marciapiede e infine a un parco tranquillo. La distrazione è l’asse che conta, e deve salire abbastanza lentamente da farti continuare a ottenere la risposta. Se la perdi hai fatto un salto troppo lungo: torna all’ultimo posto in cui funzionava e aumenta la difficoltà a passi più piccoli. Per un gatto d’appartamento generalizzare significa stanze diverse, momenti diversi della giornata e — la cosa più utile — esercitarsi mentre il gatto è lievemente occupato anziché addormentato.</p><h3>Fase quattro: proteggerlo</h3><p>Proteggere il nome è la fase che quasi tutti saltano, e l’unica che dura per sempre. Ogni volta che al nome segue qualcosa che all’animale non piace, il riflesso costruito si indebolisce un po’. Continua a premiare la risposta in modo intermittente per tutta la vita dell’animale: non ogni volta, ma abbastanza spesso perché quel suono resti degno di risposta.</p><h2>Ogni quanto e per quanto</h2><p>Le sessioni devono essere brevi e frequenti: da cinque a dieci ripetizioni, due o tre volte al giorno, chiudendo mentre l’animale ne vuole ancora. Dieci minuti di insistenza valgono meno di novanta secondi ripetuti tre volte, perché un animale stanco o annoiato sta imparando che il nome annuncia noia.</p><p>Un cucciolo o un gattino senza brutti trascorsi di solito si gira in modo affidabile in una stanza tranquilla in tre-sette giorni, e regge una distrazione lieve dopo due-quattro settimane. Un adulto adottato con un passato ignoto può metterci di più, e un animale che ha sentito il vecchio nome urlato con rabbia spesso se la cava meglio con uno nuovo — un ottimo motivo per ribattezzarlo.</p><h2>Che cosa rovina il riconoscimento del nome</h2><ul><li><strong>Usare il nome come correzione.</strong> «Bailey!» urlato dall’altra parte della stanza mentre sta masticando qualcosa insegna a Bailey che quel suono a volte annuncia guai. Gli educatori lo chiamano segnale contaminato. Usa «eh-eh», «lascia» o semplicemente vai a interrompere: qualunque cosa tranne il nome.</li><li><strong>Chiamarlo per nome per cose che detesta.</strong> Il taglio delle unghie, le gocce nelle orecchie, il trasportino, il bagno, la fine della passeggiata. Vai a prenderlo, oppure insegnagli un segnale a parte per questo.</li><li><strong>Ripeterlo.</strong> «Bailey. Bailey. Bailey!» insegna che le prime due volte sono rumore.</li><li><strong>Quindici soprannomi.</strong> Scegli un nome e al massimo un diminutivo finché la risposta non è solida. Bailey, Bay-Bay, Bailey-Boo e Signor B sono quattro suoni diversi per un animale che non ne conosce ancora nessuno.</li><li><strong>Un nome che collide con un comando.</strong> Se il nome somiglia a un comando — {{dogCommandsShort}} e simili — si chiede all’animale di separare ogni giorno due segnali quasi identici. Questo si risolve prima di decidere, ed è il motivo per cui i generatori di questo sito lo verificano in automatico.</li></ul><h2>Gatti: stesso meccanismo, altra moneta</h2><p>I gatti imparano a riconoscere il nome come i cani; lavori pubblicati sul gatto domestico hanno mostrato che distinguono il proprio nome da parole dal suono simile. Cambiano il premio e l’aspettativa. Il cibo funziona, ma funziona anche un certo tipo di attenzione, e l’obiettivo onesto per la maggior parte dei gatti è un orecchio che ruota e uno sguardo, non il richiamo di corsa di un cane.</p><p>Esercitati prima dei pasti anziché dopo, tieni le sessioni sotto il minuto e fermati al primo movimento della coda. I gatti rispondono meglio anche a nomi con suoni chiari e acuti — la «i» lunga di Mimi, la k dura di Kiko —, ed è per questo che i nomi corti con quelle note tendono a funzionare meglio.</p><h2>Ribattezzare un animale adottato o adulto</h2><p>Cambiare nome è più facile di quanto si creda, perché anche il vecchio nome era solo un suono. Costruisci un ponte per una settimana: pronuncia il nome nuovo seguito subito dal vecchio, premia la risposta e dopo qualche giorno lascia perdere il vecchio. Se il nome nuovo condivide la forma vocalica del vecchio — Suki per Sushi, Mattia per Maggie — il ponte è ancora più corto, anche se conviene accertarsi che il vecchio nome non porti con sé una storia spiacevole prima di richiamarlo apposta.</p>',
    faqHeading: 'Domande sull’insegnamento del nome',
    faqs: [
      {
        q: 'Quanto ci mette un cucciolo a imparare il proprio nome?',
        a: 'La maggior parte dei cuccioli si gira in modo affidabile verso il nome in una stanza tranquilla entro tre-sette giorni con sessioni brevi due volte al giorno, e regge la risposta con distrazione lieve dopo due-quattro settimane. I progressi dipendono molto più dalla costanza con cui il nome annuncia qualcosa di piacevole che dall’età del cucciolo o dai minuti dedicati.',
      },
      {
        q: 'Devo ripetere il nome del mio animale se non risponde?',
        a: 'No. Ripeterlo gli insegna che le prime volte si possono ignorare senza conseguenze. Se non arriva risposta entro due o tre secondi, usa un suono diverso, come uno schiocco con la bocca o un colpetto sul pavimento, premia la risposta che ottieni e rendi più facile la ripetizione successiva avvicinandoti o togliendo una distrazione.',
      },
      {
        q: 'Posso usare il nome del mio animale per sgridarlo?',
        a: 'Meglio evitarlo. Usare il nome per correggere lo trasforma in un segnale che a volte annuncia guai, quello che gli educatori chiamano segnale contaminato, e l’animale comincia a esitare prima di girarsi. Tieni un interruttore separato come "eh-eh" o "lascia" per il comportamento indesiderato e riserva il nome alla richiesta di attenzione.',
      },
      {
        q: 'I gatti imparano davvero il proprio nome?',
        a: 'Sì. I gatti domestici distinguono il proprio nome da parole dal suono simile e lo imparano con lo stesso processo di associazione dei cani. L’obiettivo realistico è diverso: nella maggior parte dei gatti un orecchio che ruota in modo affidabile e uno sguardo sono già un successo, e le sessioni funzionano meglio sotto il minuto, prima dei pasti e interrotte al primo segno di disinteresse.',
      },
      {
        q: 'Come ribattezzo un cane o un gatto adottato?',
        a: 'Costruisci un ponte per circa una settimana: pronuncia il nome nuovo, attacca subito il vecchio e premia la risposta. Dopo qualche giorno lascia perdere il vecchio e premia la risposta al nuovo da solo. Cambiare nome è di solito semplice, e vale davvero la pena se il nome precedente veniva usato con rabbia.',
      },
    ],
    related: {
      heading: 'Dove andare adesso',
      html: '<p>Ancora indeciso? Il <a href="{{url:dog}}">generatore di nomi per cani</a> e il <a href="{{url:cat}}">generatore di nomi per gatti</a> confrontano ogni proposta con i comandi che il tuo animale dovrà imparare, togliendo di mezzo in partenza la versione peggiore di questo problema. Prima di decidere vale la pena leggere quali <a href="{{url:avoid}}">nomi evitare</a> e, se arrivano due animali insieme, in che cosa <a href="{{url:pairs}}">dare il nome a due animali</a> differisce dal farlo due volte.</p>',
    },
  },

  avoid: {
    title: 'Nomi per animali da evitare, e perché',
    description:
      'I tipi di nome per cani e gatti che creano problemi dopo: scontri con i comandi, con la casa, diminutivi non scelti e battute che scadono in fretta.',
    breadcrumb: 'Nomi da evitare',
    h1: 'Nomi per animali da evitare, e perché',
    keywords:
      'nomi per animali da evitare, nomi per cani da evitare, nomi per gatti da evitare, nomi che somigliano ai comandi, brutti nomi per animali',
    answerBox:
      'Evita i nomi che somigliano a un comando che intendi insegnare, quelli che collidono con una persona o un animale già in casa, quelli che non vorresti sentire chiamare in una sala d’attesa e quelli di cui non hai scelto tu la forma breve. Quasi ogni pentimento sul nome rientra in una di queste quattro categorie, e tutte e quattro si vedono in una trentina di secondi se pronunci la rosa dei candidati ad alta voce prima di decidere.',
    card: {
      heading: 'Nomi da evitare',
      body: 'Quattro categorie che creano problemi mesi dopo: scontri con i comandi, con la casa, diminutivi non scelti e battute di breve durata.',
    },
    html: '<h2>1. Nomi che somigliano a un comando</h2><p>Questa è quella con un costo misurabile. Un cane impara i segnali come schemi sonori, e due schemi separati da un solo suono sono davvero difficili da distinguere — soprattutto a distanza, all’aperto, sopra vento e traffico, con la voce alzata. «Bo» contro «no», «Kit» contro «sit», «Kay» contro «stay», «Dan» contro «down»: ognuna di queste coppie chiede all’animale una discriminazione in cui non ha alcun motivo di essere bravo.</p><p>Quello che si paga non è il nome, è il comando. Ogni ripetizione ambigua rallenta il segnale, e quello che di solito rallenta è il richiamo — proprio quello che conta quando un cancello resta aperto. I comandi da verificare sono quelli che insegnerai davvero: {{dogCommandsShort}} e il resto del repertorio di base, più ciò che in casa si dice senza pensarci, come «lascia», «aspetta» o «giù».</p><p>La trappola è la rima, non l’ortografia. «Kay» e «stay» non condividono nemmeno la prima lettera e ad alta voce si sovrappongono del tutto, ed è per questo che confrontare i nomi per come si scrivono manca gran parte del problema. I generatori di qui confrontano invece foneticamente, contro {{dogCommandCount}} comandi comuni.</p><h2>2. Nomi che collidono con la casa</h2><p>È con il secondo animale in casa che la cosa morde. Un cane che vive con un Bailey farà fatica con Hayley; un gatto in una casa con un Jake farà fatica con Jade. I nomi dei bambini, quello del partner, quello della nonna che passa ogni settimana e il soprannome che si usa davvero contano tutti: il nome di casa che conta è quello che si urla in giardino, non quello sui documenti.</p><p>Due animali con nomi simili è la versione peggiore, perché entrambi imparano a rispondere a un suono ambiguo e tu perdi la possibilità di rivolgerti a uno solo. Se hai già un Milo, cancella Miles, Marlo, Mylo e Nilo prima di cominciare.</p><h2>3. Nomi che si accorciano in un modo che non hai scelto</h2><p>I nomi lunghi vengono accorciati. Non è un forse: Ercole diventa Erc, Massimiliano diventa Max, Bartolomeo diventa Bart, di solito in quindici giorni e di solito non per opera tua. Il nome che userai ogni giorno è la forma breve, quindi conviene sceglierla di proposito anziché scoprirla.</p><p>Pronuncia il nome intero dieci volte al volume con cui chiameresti e ascolta che cosa ne fa la tua bocca. Se il risultato è una forma che non ti piace, o che collide con un comando, il nome lungo è la scelta sbagliata per quanto bello sia sulla carta. È anche l’argomento pratico del filtro di lunghezza dei generatori: una medaglietta incisa accoglie circa otto caratteri per riga prima che il testo si rimpicciolisca, e a essere tagliato è il nome che compete con il numero di telefono.</p><h2>4. Battute con poca durata</h2><p>I nomi buffi sono una categoria legittima e qui ce ne sono {{funnyCount}}, ma la battuta deve superare alcune prove precise. Sarà letta ad alta voce da una receptionist in una sala d’attesa piena. Sarà scritta su una registrazione del microchip, su una polizza assicurativa e su una scheda di pensione. Sarà urlata, da te, in un parco pubblico, magari per diversi minuti, mentre la gente guarda.</p><p>I nomi costruiti su un doppio senso, su un personaggio pubblico o su un riferimento legato a un solo anno di solito falliscono almeno una di queste prove. I nomi buffi che reggono sono quelli la cui comicità nasce dalla distanza fra il nome e l’animale — un chihuahua chiamato Polpetta, un gattone placido chiamato Chonk — perché quella distanza non invecchia.</p><h2>Quattro punti minori che vale conoscere</h2><ul><li><strong>Nomi che altrove significano qualcosa di infelice.</strong> Un nome bellissimo in una lingua ogni tanto si legge malissimo in un’altra, e questo merita dieci secondi di verifica quando il nome ha origine straniera. Tutti i nomi di questo sito mostrano il significato documentato proprio per questo.</li><li><strong>Nomi difficili da scandire ad alta voce.</strong> Lo scandirai al veterinario, al toelettatore, all’assicuratore e alla pensione. Un nome che va scandito due volte ogni volta è una piccola tassa pagata per quindici anni.</li><li><strong>Riusare il nome di un animale precedente.</strong> È diffuso, comprensibile e vale pensarci due volte: invita a un confronto che il nuovo animale non può vincere, e può rendere il nome più difficile da pronunciare proprio nei giorni in cui già lo è.</li><li><strong>Nomi che finiscono su un suono morbido che si spegne.</strong> I nomi che sfumano su una vocale o una consonante debole arrivano male all’aperto. Una vocale netta o una consonante secca alla fine — la «-o» di Milo, la «-t» dura di Bandit — taglia molto meglio vento e distanza.</li></ul><h2>La prova dei trenta secondi</h2><p>Prima di decidere, fai così con la tua rosa. Mettiti a un capo della casa o del giardino e chiama ogni nome tre volte al volume che useresti in un parco. Poi pronuncialo subito dopo ogni comando che intendi insegnare — «sit, Kit», «stay, Kay» — e ascolta la collisione. Poi immaginalo letto ad alta voce da uno sconosciuto in una sala d’attesa. Ciò che sopravvive a tutte e tre è un nome con cui puoi convivere.</p>',
    faqHeading: 'Domande sui nomi da evitare',
    faqs: [
      {
        q: 'Quali nomi per cani dovrei evitare?',
        a: 'Evita i nomi che fanno rima o somigliano molto ai comandi che intendi insegnare — {{dogCommandsShort}} e segnali simili — insieme ai nomi vicini a quelli di una persona o di un altro animale già in casa. Evita anche i nomi lunghi di cui non hai scelto di proposito la forma breve, perché è quella forma breve che userai ogni giorno.',
      },
      {
        q: 'Perché conta se un nome somiglia a un comando?',
        a: 'Perché l’animale impara entrambi come schemi sonori, e due schemi separati da un solo suono sono difficili da distinguere a distanza o all’aperto. Ogni ripetizione ambigua rallenta il comando più del nome, e il comando più colpito è di solito il richiamo, cioè proprio quello che conta di più quando fallisce.',
      },
      {
        q: 'Due animali nella stessa casa possono avere nomi simili?',
        a: 'Meglio evitarlo. Con nomi simili entrambi gli animali rispondono a un suono ambiguo, quindi perdi la possibilità di rivolgerti a uno in particolare e tutti e due impiegano più tempo a imparare il proprio. Punta a suoni iniziali diversi e a una chiara differenza nella forma vocalica, non solo a una grafia diversa.',
      },
      {
        q: 'Un nome lungo è una cattiva idea?',
        a: 'Non di per sé, ma nell’uso quotidiano viene quasi sempre accorciato, quindi la scelta concreta riguarda la forma breve e non quella intera. Pronuncia il nome lungo più volte al volume con cui chiameresti, ascolta in che cosa si riduce e verifica che il risultato ti piaccia e non collida con nessun comando.',
      },
      {
        q: 'Come faccio a sapere se un nome buffo invecchierà bene?',
        a: 'Provalo in tre posti: letto ad alta voce da una receptionist in una sala d’attesa piena, scritto su una registrazione del microchip e su una polizza, e urlato da te in un parco pubblico. Le battute basate su doppi sensi, personaggi pubblici o un singolo anno di solito ne falliscono una, mentre la comicità che nasce dal contrasto fra nome e animale tende a durare.',
      },
    ],
    related: {
      heading: 'Dove andare adesso',
      html: '<p>Il <a href="{{url:dog}}">generatore di nomi per cani</a> e il <a href="{{url:cat}}">generatore di nomi per gatti</a> applicano da soli le prime due regole di questa pagina: inserisci i nomi di casa tua e ogni scontro viene rimosso o segnalato. Scelto il nome, <a href="{{url:teach}}">insegnarlo</a> richiede circa una settimana, e se stai dando il nome a due animali insieme, <a href="{{url:pairs}}">dare il nome a due animali</a> copre il vincolo aggiuntivo.</p>',
    },
  },

  pairs: {
    title: 'Dare il nome a due animali insieme',
    description:
      'Nominare una coppia affiatata o una cucciolata non è nominare due volte: i tre vincoli che fanno funzionare una coppia di nomi e i temi che reggono.',
    breadcrumb: 'Nomi per due animali',
    h1: 'Dare il nome a due animali insieme',
    keywords:
      'nomi per due animali, nomi per una coppia, nomi per fratelli di cucciolata, nomi abbinati, nomi per due cani, nomi per due gatti',
    answerBox:
      'Una coppia di nomi ha bisogno di tre cose insieme: un legame che li faccia leggere come un insieme, suoni iniziali chiaramente diversi e lunghezze che non si scostino di più di un paio di lettere. Il tema è la parte facile e quella su cui quasi tutti investono troppo; a decidere se puoi chiamare un animale senza che arrivino entrambi è la distinzione, ed è proprio il vincolo che viene ignorato.',
    card: {
      heading: 'Nomi per due animali',
      body: 'Perché coppie e fratelli di cucciolata hanno bisogno di nomi che colleghino e separino insieme, e quali temi riescono a fare entrambe le cose.',
    },
    html: '<h2>Perché due è un problema diverso</h2><p>Dare il nome a un animale è cercare un nome che ti piaccia. Darlo a due è un problema di vincoli, e i vincoli tirano in direzioni opposte: i nomi devono stare insieme e devono essere impossibili da confondere. La maggior parte delle coppie fallisce sul secondo punto, perché il primo è quello divertente da immaginare.</p><p>Il fallimento è preciso e non è affatto sottile. Due animali i cui nomi condividono suono iniziale e numero di sillabe imparano entrambi a rispondere a qualcosa di intermedio: ne chiami uno, arrivano entrambi, e nessuno dei due sta davvero rispondendo al proprio. In una casa con due animali è un costo quotidiano, ed è peggiore esattamente quando conta: alla porta, al cancello, all’ora del pasto.</p><h2>I tre vincoli</h2><h3>Un legame, ma leggero</h3><p>La connessione può essere molto più leggera di quanto si pensi. Stessa origine, stessa epoca, stesso campo, stesso registro: Nerone e Cassio sono evidentemente una coppia senza che nessuno dei due sia la metà di una battuta abbinata. Da evitare è un legame così stretto da fondere i due nomi in un’unica unità — Sale e Pepe, Yin e Yang, Coso Uno e Coso Due — perché quella formula viaggia male se gli animali dovessero separarsi, ed è una considerazione concreta per una coppia affiatata, in cui uno può sopravvivere all’altro di anni.</p><h3>Suoni iniziali diversi</h3><p>Questo è il vincolo che fa davvero il lavoro. Il primo suono di un nome porta quasi tutta la discriminazione, quindi due nomi non dovrebbero cominciare con la stessa consonante né con la stessa forma vocalica. Bella e Bailey è l’errore classico: stesso attacco, stessa lunghezza, stesso schema d’accento. Bella e Otto è lo stesso registro estetico senza nulla della confusione.</p><p>La rima finale è la versione di secondo ordine dello stesso problema. Maisie e Daisy si distinguono all’inizio ma si fondono a qualunque distanza. Punta a nomi che differiscano a entrambe le estremità se ci riesci, e all’inizio come minimo.</p><h3>Lunghezza e ritmo simili</h3><p>Nomi che si scostano di una o due lettere, idealmente con lo stesso numero di sillabe, si leggono come un insieme voluto e non come un caso. Milo e Otis funziona; Milo e Bartolomeo sembrano due decisioni scollegate e, in pratica, il lungo finisce accorciato in qualcosa che forse non sta più con la coppia.</p><h2>Temi che reggono</h2><p>I temi che sopravvivono sono quelli con abbastanza membri da permettere una ricerca vera e abbastanza varietà interna da non costringerti a due scelte che suonano uguali. Mitologia di una sola tradizione, costellazioni, alberi, spezie, musicisti jazz, montagne, fiumi, pittori, gruppi di parole di una stessa origine: tutti offrono decine di candidati nello stesso registro, il che ti permette di scartare quelli che si sovrappongono.</p><p>I temi che si ritorcono contro sono le coppie chiuse: due metà di un’espressione, due personaggi sempre nominati insieme o qualunque cosa in cui un nome non significhi nulla senza l’altro. Sono deliziosi per un anno e imbarazzanti dopo.</p><h2>Fratelli di cucciolata e coppie affiatate</h2><p>I fratelli di cucciolata che arrivano insieme sono il caso più pulito: scegli entrambi i nomi in una volta e puoi quindi ottimizzare l’insieme anziché incastrare un nome attorno a uno che esiste già. Sfruttalo. Applica i vincoli alla coppia come insieme e sii disposto a rinunciare a un nome che ti piace per uno che separa meglio.</p><p>Le coppie affiatate — animali adottati insieme e già legati — portano una considerazione in più. Spesso verranno chiamati, nutriti e spostati come un’unica unità da tutti quelli intorno a loro, il che rende il vincolo di distinzione più importante e non meno, perché l’ambiente li sta già confondendo. Se uno arriva già con un nome, tratta quel nome come fisso e cerca attorno.</p><h2>Aggiungere un secondo animale a uno già presente</h2><p>Qui il primo nome è un vincolo rigido, e il compito è trovarne un secondo che gli stia accanto senza collidere. Prendi il nome esistente ed escludi tutto ciò che ne condivide il suono iniziale, tutto ciò che ci fa rima e tutto ciò che gli sta a un suono di distanza nel mezzo. Poi cerca il legame — e fallo con calma, perché una connessione tematica lasca si legge come voluta e una stretta non vale la confusione che si porta dietro.</p><h2>Tre o più</h2><p>Tre nomi moltiplicano i controlli a coppie anziché sommarli: ogni nome deve separarsi da tutti gli altri, non solo dall’ultimo scelto. In pratica un tema dal campo ampio e tre suoni iniziali distinti sono l’intero metodo, e vale la pena scrivere i tre nomi e chiamarli uno per uno ad alta voce pensando agli altri due.</p><p>La modalità coppia dei generatori di questo sito fa esattamente questo: costruisce insiemi di due o tre nomi che condividono uno stile, restano vicini per lunghezza, cominciano con suoni diversi e superano fra loro lo stesso controllo fonetico che il filtro dei conflitti applica ai nomi di casa tua.</p>',
    faqHeading: 'Domande sul dare il nome a due animali',
    faqs: [
      {
        q: 'Due animali dovrebbero avere nomi abbinati?',
        a: 'Un legame tematico leggero funziona bene; una coppia strettamente abbinata di solito no. Nomi della stessa origine, epoca o ambito si leggono come un insieme voluto pur restando indipendenti, mentre due metà di un’espressione come Sale e Pepe perdono senso se gli animali vengono separati, cosa che conta soprattutto per una coppia in cui uno può sopravvivere all’altro.',
      },
      {
        q: 'Che cosa rende due nomi troppo simili?',
        a: 'Condividere il suono iniziale è il problema principale, perché il primo suono porta quasi tutta la discriminazione: Bella e Bailey è l’esempio classico. Le desinenze in rima come Maisie e Daisy vengono subito dopo, dato che i nomi si fondono a distanza. Punta a suoni iniziali diversi e, se possibile, anche a finali diverse.',
      },
      {
        q: 'Come do il nome a un secondo animale se il primo ce l’ha già?',
        a: 'Tratta il nome esistente come fisso e cerca attorno. Escludi tutto ciò che ne condivide il suono iniziale, tutto ciò che ci fa rima e tutto ciò che gli sta vicino nel mezzo, poi cerca un legame tematico lasco. Una connessione rilassata si legge come voluta senza comprare nulla della confusione che ne porta una stretta.',
      },
      {
        q: 'I fratelli di cucciolata hanno bisogno di nomi a tema?',
        a: 'Un tema non serve, ma scegliere entrambi i nomi in una volta è un vantaggio vero da sfruttare. Poiché nessuno dei due è fissato, puoi ottimizzare l’intero insieme per la distinzione anziché incastrare un nome attorno a un altro, il che di solito significa essere disposti a lasciare un nome che ti piace per uno che separa meglio.',
      },
      {
        q: 'Come do il nome a tre animali senza confonderli?',
        a: 'Ogni nome deve separarsi da tutti gli altri, quindi tre nomi significano tre controlli a coppie e non due scelte in sequenza. Prendi un tema dal campo ampio, dai a ogni nome un suono iniziale diverso, poi scrivili tutti e tre e chiama ciascuno ad alta voce pensando agli altri due prima di decidere.',
      },
    ],
    related: {
      heading: 'Dove andare adesso',
      html: '<p>Attiva la modalità coppia nel <a href="{{url:pet}}">generatore di nomi per animali</a> perché gli insiemi vengano costruiti e verificati per te, oppure usa i generatori per <a href="{{url:dog}}">cani</a> e <a href="{{url:cat}}">gatti</a> per una singola specie. Vale la pena leggere l’elenco più ampio dei <a href="{{url:avoid}}">nomi da evitare</a> prima di decidere, e <a href="{{url:teach}}">insegnare i nomi</a> dopo risulta più facile quando i due sono davvero distinti.</p>',
    },
  },

  meanings: {
    title: 'Da dove arrivano i significati dei nomi',
    description:
      'Come vengono documentati qui i significati: quali fonti contano, come si trattano le etimologie discusse e perché nessun nome ha un significato inventato.',
    breadcrumb: 'Significato dei nomi',
    h1: 'Da dove arrivano i significati dei nomi',
    keywords:
      'significato dei nomi per animali, origine dei nomi, significato dei nomi per cani, significato dei nomi per gatti, linea editoriale, etimologia',
    answerBox:
      'Ognuno dei {{total}} nomi di questo sito porta un significato tratto da una fonte documentata: un’etimologia registrata, una figura mitologica o letteraria attestata, o la semplice origine di una parola. Quando le fonti divergono, la scheda dice di che cosa si tratta anziché scegliere un vincitore. Nessun significato qui è dedotto da come suona un nome, e nessun nome compare con un significato inventato per riempire lo spazio.',
    card: {
      heading: 'Da dove arrivano i significati',
      body: 'Il criterio di fonte dietro ogni nome del sito: che cosa conta come documentato, come si trattano i disaccordi e come segnalare un errore.',
    },
    html: '<h2>Perché esiste questa pagina</h2><p>I contenuti sul significato dei nomi sono insolitamente facili da sbagliare e insolitamente difficili da verificare. Un significato inventato in un posto viene copiato in una dozzina di altri nel giro di un anno, e dopo di che sembra ben attestato semplicemente perché compare ovunque. Poiché il significato mostrato accanto a un nome è una delle due cose su cui questo sito ti chiede di decidere, è parso giusto mettere per iscritto a quale criterio quei significati sono sottoposti.</p><h2>Che cosa conta come fonte</h2><p>Un nome compare qui solo se il suo significato risale ad almeno uno dei seguenti:</p><ul><li><strong>Un’etimologia registrata.</strong> Un nome con derivazione documentata in una lingua consolidata — ebraico, greco, latino, norreno, germanico, irlandese, giapponese e così via — in cui la radice e il suo senso sono attestati e non ricostruiti per somiglianza.</li><li><strong>Una figura attestata.</strong> Nomi dalla mitologia, dal folclore, dalla storia o dalla narrativa pubblicata, in cui il significato indicato è chi o che cosa fu quella figura e non un’affermazione sulle radici della parola. Odino, Atena, Fenrir e Gandalf sono descritti così, perché è questo ciò che di loro è davvero documentato.</li><li><strong>Una semplice origine lessicale.</strong> Nomi che sono semplicemente parole — Pepper, Biscuit, Shadow, Willow — in cui il significato è il senso comune della parola e la sua origine è registrata nelle opere di consultazione generali.</li><li><strong>Un diminutivo documentato.</strong> Forme brevi il cui nome d’origine ha un significato registrato, indicato come tale: Abby figura come forma breve di Abigail, con il significato di Abigail allegato anziché uno proprio.</li></ul><h2>Che cosa non conta</h2><ul><li><strong>Derivazione per somiglianza sonora.</strong> Che un nome assomigli a una parola di qualche lingua non significa che ne derivi. La somiglianza è il punto di partenza della maggior parte delle etimologie inventate.</li><li><strong>Significato per associazione.</strong> Un nome popolare per i gatti neri non significa «nero», e un nome comune fra i cani grandi non significa «forte».</li><li><strong>Fonti circolari.</strong> Un significato che compare solo su elenchi di nomi, tutti palesemente copiati l’uno dall’altro, è trattato come privo di fonte.</li><li><strong>Invenzione.</strong> Se non si può documentare alcun significato, il nome resta fuori dall’elenco anziché riceverne uno plausibile. È per questo che mancano alcuni nomi per animali del tutto validi.</li></ul><h2>Significati discussi e multipli</h2><p>Le etimologie divergono più spesso di quanto gli elenchi di nomi ammettano. I nomi attraversano le lingue, raccolgono etimologie popolari e vengono reinterpretati dalle culture che li prendono in prestito, e spesso non esiste una sola risposta corretta. Quando le fonti si scontrano, la scheda dà la lettura meglio attestata e dice di che tipo di cosa si tratta — una forma breve, una figura mitologica, una parola di una data lingua — anziché presentare un’interpretazione come fatto acquisito.</p><p>L’implicazione pratica è anche nella <a href="{{url:terms}}">pagina dei termini</a>, e vale la pena ripeterla qui: nessun significato di questo sito pretende di essere l’interpretazione definitiva né l’unica di un nome. Se il significato di un nome ti sta particolarmente a cuore — un nome in memoria di qualcuno, un nome con peso religioso o culturale, un nome in una lingua che non parli — verificalo su una fonte di cui ti fidi prima di impegnarti.</p><h2>I significati sono per te, non per l’animale</h2><p>Vale la pena dirlo con chiarezza, perché cambia il peso che il significato dovrebbe avere. Un animale impara il proprio nome come suono e non ha alcun accesso a ciò che vuol dire. Il significato conta perché tu pronuncerai quella parola più volte al giorno per un decennio o più, e perché sapere che Luna è «luna» in latino, o che Loki è il dio ingannatore norreno, è spesso ciò che trasforma una rosa di sei in una decisione.</p><p>È anche per questo che qui i significati stanno bene in vista sulla scheda e non dietro una fisarmonica, un account o un modulo per l’e-mail. Un significato che bisogna faticare per vedere è un significato che non verificherai.</p><h2>Come viene mantenuto l’elenco</h2><p>L’elenco dei nomi è un file statico con {{dogCount}} nomi per cani e {{catCount}} per gatti — {{total}} nomi unici in tutto, dato che un nome adatto a entrambe le specie è memorizzato una volta per ciascuna. I nomi vengono aggiunti a blocchi, e ogni aggiunta deve arrivare con un significato allegato; un nome senza significato documentato non entra restando in attesa di trovarne uno.</p><p>Le correzioni sono la via principale con cui gli errori vengono scoperti, e sono davvero benvenute. Se un significato qui ti sembra sbagliato, manda il nome e, se ce l’hai, una fonte che consideri affidabile a <a href="mailto:{{email}}">{{email}}</a> oppure tramite la <a href="{{url:contact}}">pagina dei contatti</a>. Le correzioni che reggono vengono applicate al file di dati, cioè a ciò che ogni pagina in ogni lingua legge, quindi una correzione arriva ovunque in una volta sola.</p>',
    faqHeading: 'Domande sul significato dei nomi',
    faqs: [
      {
        q: 'Da dove arrivano i significati dei nomi di questo sito?',
        a: 'Ogni significato risale a una fonte documentata: un’etimologia registrata in una lingua consolidata, una figura attestata dalla mitologia, dal folclore, dalla storia o dalla narrativa pubblicata, una semplice origine lessicale, oppure un diminutivo il cui nome d’origine ha un significato registrato. I nomi il cui significato non può essere documentato restano fuori anziché riceverne uno inventato.',
      },
      {
        q: 'I significati sono garantiti corretti?',
        a: 'No, e nessuna fonte sul significato dei nomi può onestamente sostenerlo. Le etimologie sono discusse, i nomi attraversano le lingue e raccolgono nuove interpretazioni, e spesso non esiste una risposta acquisita. Ogni scheda dà la lettura meglio attestata, e se il significato ti sta particolarmente a cuore vale la pena verificarlo su una fonte di cui ti fidi prima di decidere.',
      },
      {
        q: 'Perché mancano alcuni nomi per animali molto comuni?',
        a: 'Di solito perché non è stato possibile documentare alcun significato. Un nome viene aggiunto solo con un significato dotato di fonte, quindi un nome popolare senza nulla di affidabile alle spalle resta fuori anziché comparire con una supposizione plausibile. Se conosci un nome che dovrebbe esserci e puoi indicare una fonte, vale la pena segnalarlo.',
      },
      {
        q: 'Il significato del nome ha effetto sul mio animale?',
        a: 'No. Un animale impara il proprio nome come schema sonoro e non ha alcun accesso al senso della parola. I significati contano per la persona che sceglie, che pronuncerà quella parola più volte al giorno per un decennio o più, ed è per questo che compaiono su ogni scheda anziché restare nascosti dietro una fisarmonica o un account.',
      },
      {
        q: 'Come segnalo un significato sbagliato?',
        a: 'Manda il nome e, se ce l’hai, una fonte che consideri affidabile, e la scheda verrà verificata. Le correzioni vengono applicate all’unico file di dati che ogni pagina legge, quindi una correzione accettata compare in tutti i generatori e in tutte le lingue in una volta sola. I suggerimenti di nomi da aggiungere sono benvenuti alle stesse condizioni.',
      },
    ],
    related: {
      heading: 'Dove andare adesso',
      html: '<p>Ogni proposta dei generatori per <a href="{{url:dog}}">cani</a>, <a href="{{url:cat}}">gatti</a> e <a href="{{url:pet}}">animali in generale</a> mostra il proprio significato sulla scheda. La <a href="{{url:about}}">pagina «chi siamo»</a> racconta come è costruito il resto dello strumento, e la <a href="{{url:contact}}">pagina dei contatti</a> è dove arrivano correzioni e proposte.</p>',
    },
  },

  about: {
    title: 'Informazioni sul Perfect Pet Name Generator',
    description:
      'Che cosa fa di diverso questo generatore: significati documentati, pronuncia ad alta voce, filtro dei conflitti con i comandi e modalità coppia.',
    breadcrumb: 'Chi siamo',
    h1: 'Informazioni su questo generatore',
    answerBox:
      'Perfect Pet Name Generator è uno strumento gratuito che suggerisce nomi per cani e gatti filtrati per stile, sesso, lettera iniziale e lunghezza. Ogni suggerimento mostra il suo significato documentato, viene letto ad alta voce su richiesta ed è verificato sui nomi di casa tua e sui comandi di addestramento più comuni — quest’ultima cosa non la fa quasi nessun altro generatore.',
    html: '<h2>Perché esiste</h2><p>La maggior parte dei generatori di nomi per animali restituisce un elenco di parole. Quella è la parte facile del problema. Le parti difficili emergono solo dopo: scoprire che il nome significa qualcosa di infelice, rendersi conto di non riuscire a pronunciarlo con sicurezza, o passare tre mesi di lavoro sul richiamo a combattere contro un nome che suona come «no».</p><p>Questo strumento è stato costruito attorno a quei tre fallimenti, con {{total}} nomi per cani e gatti come elenco di base. È deliberatamente uno strumento in un solo passaggio — imposti i filtri, generi — invece di un questionario a più domande, perché un filtro di stile cattura già ciò che chiede un quiz e lo fa in una sola schermata.</p><h2>Che cosa fa di diverso</h2><h3>Significati sempre visibili</h3><p>Ogni nome mostra origine e significato sulla scheda stessa. Non dietro un menu, non dietro un account e mai dietro un modulo di posta elettronica. I significati provengono da fonti linguistiche e culturali consolidate — etimologie attestate, mitologia, origini di parole documentate — e dove un significato non è documentato non se ne inventa nessuno per riempire lo spazio.</p><h3>Una pronuncia che si può ascoltare</h3><p>Ogni nome ha un pulsante Pronuncia che usa il motore vocale già presente nel tuo browser. Non viene scaricato alcun file audio, non viene chiamato alcun servizio esterno di sintesi vocale e nulla della tua sessione viene trasmesso. Conta soprattutto per i nomi di origine mitologica e non italiana, dove l’ortografia è una guida scadente al suono.</p><h3>Un filtro dei conflitti per case vere</h3><p>Questo è il pezzo che mancava a ogni strumento paragonabile che siamo riusciti a trovare. Inserisci i nomi dei familiari e degli animali che già ci sono, e ogni suggerimento viene confrontato con loro foneticamente — con Soundex e distanza di edit invece che con corrispondenze esatte di lettere — oltre al controllo automatico sui comandi di addestramento più comuni. Le corrispondenze nette vengono rimosse, quelle dubbie mostrate con un segnale che spiega il conflitto, così il giudizio resta tuo.</p><p>Il ragionamento è semplice: un cane o un gatto impara il proprio nome come uno schema sonoro distinto. Un nome che fa rima con un comando o con un altro nome di casa dà all’animale un segnale ambiguo ogni volta che viene usato, ed è proprio l’ambiguità a rallentare l’addestramento.</p><h3>Modalità coppia e cucciolata</h3><p>Dare il nome a due animali insieme è un problema diverso dal darlo due volte. La modalità coppia restituisce insiemi di due o tre nomi che condividono uno stile e restano vicini per lunghezza — così da leggersi come un insieme — iniziando però con suoni diversi e superando lo stesso controllo fonetico l’uno rispetto all’altro. Copre sia le coppie adottate insieme sia i fratelli di cucciolata che vogliono un tema comune.</p><h2>Come è costruito lo strumento</h2><p>È un sito statico. Non c’è backend, né database, né login, né alcuna elaborazione lato server di ciò che scrivi. L’elenco dei nomi è un file statico, e tutto il filtraggio, il mescolamento, il confronto fonetico e la sintesi vocale avvengono nel tuo browser. I gruppi vengono estratti con un mescolamento di Fisher-Yates, così ogni nome compatibile con i tuoi filtri ha la stessa probabilità di comparire invece di rivedere sempre gli stessi pochi.</p><h2>Che cosa non fa, di proposito</h2><ul><li>Nessun quiz sulla personalità — il filtro di stile fa lo stesso lavoro in un passaggio.</li><li>Nessun account, registrazione o raccolta di indirizzi per alcuna funzione, filtro dei conflitti compreso.</li><li>Nessun caricamento di foto né riconoscimento della razza da un’immagine.</li><li>Nessun significato inventato. Se un significato non è documentato, il nome non compare nell’elenco.</li></ul><h2>Scrivici</h2><p>Correzioni a un significato, proposte di nomi da aggiungere o qualsiasi altra cosa: la <a href="{{url:contact}}">pagina dei contatti</a> ha i dettagli. Inizia a cercare un nome dai generatori per <a href="{{url:dog}}">cani</a>, <a href="{{url:cat}}">gatti</a> o <a href="{{url:pet}}">animali in generale</a>.</p>',
  },

  contact: {
    title: 'Contatti | Perfect Pet Name Generator',
    description:
      'Scrivici per una correzione di significato, un nome che vorresti aggiungere o una domanda sul generatore. Un indirizzo email, nessun modulo.',
    breadcrumb: 'Contatti',
    h1: 'Contatti',
    answerBoxHtml:
      'Scrivi a <a href="mailto:{{email}}" style="color: var(--c-accent-on-soft);">{{email}}</a> per qualsiasi cosa riguardi questo sito. Non c’è un modulo di contatto, perché questo è un sito statico senza un server che possa riceverlo — il che significa anche che nulla di ciò che invii passa attraverso un servizio di moduli di terze parti.',
    html: '<h2>Di che cosa scriverci</h2><ul><li><strong>Un significato sembra sbagliato.</strong> Manda il nome e, se ce l’hai, una fonte. I significati qui si basano su riferimenti linguistici e culturali documentati, e le correzioni sono davvero benvenute.</li><li><strong>Manca un nome.</strong> I nomi vengono aggiunti solo con un significato documentato, quindi una fonte aiuta.</li><li><strong>Qualcosa non funziona.</strong> Il browser e il dispositivo che stavi usando sono il dettaglio più utile — la funzione di pronuncia in particolare dipende dal motore vocale del tuo dispositivo.</li><li><strong>Domande sulla privacy.</strong> L’<a href="{{url:privacy}}">informativa sulla privacy</a> copre che cosa viene raccolto e che cosa no; per il resto, chiedi.</li></ul><h2>Tempi di risposta</h2><p>Questo è un piccolo sito indipendente, quindi le risposte non sono immediate. Metti in conto qualche giorno.</p><h2>Su che cosa questo sito non può aiutarti</h2><p>I suggerimenti qui sono idee per un nome, non consulenza professionale. Per problemi di addestramento, dubbi sul comportamento o qualsiasi cosa riguardi la salute del tuo animale, rivolgiti a un educatore, un comportamentalista o un veterinario qualificato. I <a href="{{url:terms}}">termini e condizioni</a> definiscono i limiti di ciò che lo strumento offre.</p>',
  },

  privacy: {
    title: 'Informativa sulla Privacy | Nomi per Animali',
    description:
      'Come questo generatore statico tratta i dati: nessun account, nulla di ciò che scrivi viene salvato e tutto il filtraggio avviene nel tuo browser.',
    breadcrumb: 'Informativa sulla privacy',
    h1: 'Informativa sulla privacy',
    updatedLabel: 'Ultimo aggiornamento: {{updated}}',
    answerBox:
      'Questo sito non ha account utente e non conserva nulla di ciò che scrivi. Perfect Pet Name Generator è un sito statico: il generatore di nomi, il filtro dei conflitti e la funzione di pronuncia girano interamente dentro il tuo browser, e nulla di ciò che inserisci viene trasmesso o salvato. Vengono invece usati cookie di analisi e pubblicitari, descritti per esteso qui sotto; dove il consenso è richiesto restano disattivati finché non li accetti.',
    html: '<h2>1. Chi riguarda questa informativa</h2><p>Questa informativa si applica a perfectpetnamegenerator.com e a ogni sua pagina. Descrive che cosa accade alle informazioni quando usi il sito.</p><h2>2. Che cosa non raccogliamo</h2><p>Su questo sito non esistono account, accessi, registrazioni o iscrizioni via email, e nessuna funzione è subordinata alla comunicazione di un indirizzo email. Non chiediamo, non riceviamo e non conserviamo il tuo nome, indirizzo, numero di telefono, dati di pagamento o qualsiasi altro identificativo personale.</p><h3>Il campo «evita nomi simili a»</h3><p>Tutto ciò che scrivi nel campo «evita nomi simili a» — inclusi i nomi di familiari e degli animali che già hai — viene elaborato interamente sul tuo dispositivo. Quel testo viene confrontato con l’elenco dei nomi dal JavaScript che gira nel tuo browser. Non viene mai inviato a un server, mai scritto in memoria persistente, mai registrato nei log, e scompare nel momento in cui chiudi o ricarichi la pagina. Lo stesso vale per ogni altro filtro che imposti.</p><h2>3. Informazioni raccolte automaticamente</h2><h3>Hosting</h3><p>Il sito è ospitato su Cloudflare Pages. Come qualsiasi servizio di hosting, Cloudflare tratta dati tecnici standard della richiesta, quali indirizzo IP, user agent e URL richiesto, per servire la pagina e proteggere il servizio dagli abusi. Ciò avviene secondo le condizioni sulla privacy di Cloudflare, e noi non abbiamo accesso a un registro identificabile dei singoli visitatori.</p><h3>Analisi</h3><p>Questo sito usa Google Analytics per capire l’uso aggregato: quante persone lo visitano, su quali pagine arrivano e all’incirca in quale parte del mondo si trovano. Per farlo Google Analytics imposta cookie e tratta una forma anonimizzata del tuo indirizzo IP. I dati che vediamo sono aggregati e statistici; non ti identificano personalmente e non vengono combinati con ciò che scrivi nel generatore (che, come detto sopra, non lascia mai il tuo browser).</p><p>Puoi rinunciare del tutto a Google Analytics tramite il <a href="https://tools.google.com/dlpage/gaoptout" rel="nofollow noopener" target="_blank">componente aggiuntivo di disattivazione di Google</a>, oppure tramite i controlli dei cookie del tuo browser o un qualsiasi blocco contenuti. Il generatore funziona esattamente allo stesso modo in entrambi i casi.</p><h3>Pubblicità</h3><p>Questo sito si sostiene con la pubblicità erogata tramite Google AdSense. Google è un fornitore terzo che usa cookie per mostrare annunci qui, e questo uso di cookie pubblicitari permette a Google e ai suoi partner di mostrare annunci basati sulle tue visite a questo sito e ad altri siti in rete. L’uso dei cookie pubblicitari da parte di Google è regolato dalle <a href="https://policies.google.com/technologies/ads" rel="nofollow noopener" target="_blank">norme pubblicitarie di Google</a>, e il modo in cui Google utilizza i dati dei siti che ricorrono ai suoi servizi è descritto su <a href="https://policies.google.com/technologies/partner-sites" rel="nofollow noopener" target="_blank">policies.google.com</a>.</p><p>Puoi disattivare la pubblicità personalizzata in qualsiasi momento nelle <a href="https://www.google.com/settings/ads" rel="nofollow noopener" target="_blank">impostazioni annunci di Google</a>, e rifiutare l’uso dei cookie per la pubblicità personalizzata da parte di fornitori terzi su <a href="https://www.aboutads.info/choices/" rel="nofollow noopener" target="_blank">aboutads.info</a>. Dalla pubblicità non riceviamo alcuna informazione che ti identifichi e non possiamo sapere a chi sia stato mostrato un singolo annuncio.</p><h3>Le tue scelte sui cookie</h3><p>Dove il consenso è richiesto per legge — SEE, Regno Unito e Svizzera — i cookie di analisi e pubblicitari restano disattivati finché non li accetti, e alla prima visita un banner te lo chiede. Rifiutare costa un clic ed è proposto con la stessa evidenza dell’accettare. La tua scelta viene salvata nel tuo browser e può essere cambiata in qualsiasi momento dal link «Impostazioni cookie» nel piè di pagina. Rifiutando non ti viene tolto nulla del sito.</p><h2>4. Memoria del browser</h2><p>Nella memoria locale del tuo browser vengono salvati due elementi: la tua preferenza per il tema chiaro o scuro, così il sito non mostra i colori sbagliati alla visita successiva, e la tua scelta sui cookie, così il banner non ripropone la domanda a ogni pagina. Sono due singoli valori, restano entrambi sul tuo dispositivo e nessuno dei due viene mai trasmesso. Cancellare i dati del browser li rimuove. Il selettore della lingua non salva nulla: ogni lingua è un normale collegamento alla propria pagina. L’elenco dei nomi già mostrati resta solo in memoria e sparisce appena chiudi la scheda.</p><h2>5. Servizi di terze parti</h2><p>Il sito carica font, stili, dati dei nomi e script dal proprio dominio anziché da CDN di terze parti. La funzione di pronuncia usa il motore vocale già integrato nel tuo sistema operativo o browser; non viene scaricato alcun audio e non viene contattato alcun servizio di sintesi vocale. A parte Cloudflare come hosting e Google come fornitore dell’analisi e della pubblicità descritte sopra, nessuna terza parte riceve dati dal tuo uso di questo sito.</p><h2>6. Collegamenti ad altri siti</h2><p>Le pagine di questo sito possono rimandare a siti esterni. Quei siti hanno pratiche di privacy proprie, che questa informativa non copre.</p><h2>7. Minori</h2><p>Questo sito è uno strumento per la scelta dei nomi rivolto al pubblico generale e non si rivolge a minori di 13 anni. Non raccogliamo consapevolmente informazioni personali da nessuno, minori compresi: sul sito non esiste alcun meccanismo attraverso cui si possano inviare informazioni personali.</p><h2>8. I tuoi diritti</h2><p>Le normative sulla privacy, incluse il GDPR e il CCPA, ti riconoscono il diritto di accedere, correggere ed eliminare i dati personali che ti riguardano. Poiché questo sito non conserva dati personali su di te, dalla nostra parte non c’è nulla da recuperare o cancellare. Per i dati di analisi trattati da Google, usa i controlli di Google collegati sopra. Le domande sono benvenute all’indirizzo indicato sotto.</p><h2>9. Modifiche a questa informativa</h2><p>Questa informativa sarà aggiornata se cambiano le pratiche sui dati del sito — un nuovo fornitore di analisi o di pubblicità è il motivo più probabile. La data di «ultimo aggiornamento» in alto riflette sempre la versione in vigore.</p><h2>10. Contatti</h2><p>Le domande sulla privacy possono essere inviate a <a href="mailto:{{email}}">{{email}}</a>, oppure tramite la <a href="{{url:contact}}">pagina dei contatti</a>.</p>',
  },

  terms: {
    title: 'Termini e Condizioni | Nomi per Animali',
    description:
      'Condizioni d’uso del generatore: uno strumento gratuito i cui nomi e significati sono forniti così come sono, come spunto, senza esclusiva.',
    breadcrumb: 'Termini e condizioni',
    h1: 'Termini e condizioni',
    updatedLabel: 'Ultimo aggiornamento: {{updated}}',
    answerBox:
      'Questo strumento è gratuito e il suo risultato è fornito così com’è, come spunto. I suggerimenti di nomi e i significati che li accompagnano sono proposti in buona fede a partire da fonti documentate, ma nessun significato è garantito come l’interpretazione definitiva o unica di un nome. Usare il sito significa accettare questi termini.',
    html: '<h2>1. Il servizio</h2><p>Perfect Pet Name Generator offre proposte di nomi per animali, significati, riproduzione della pronuncia e controllo fonetico dei conflitti. È gratuito, non richiede alcun account e non prevede abbonamenti, pagamenti o registrazioni; il sito è finanziato dalla pubblicità.</p><h2>2. I suggerimenti sono spunti, non consulenza</h2><p>Ogni nome restituito è un suggerimento. Nulla qui costituisce consulenza professionale di addestramento, comportamentale o veterinaria. Le indicazioni sui nomi presenti in questo sito riflettono principi di addestramento ampiamente accettati, ma il tuo animale è un individuo, e un educatore, un comportamentalista o un veterinario qualificato è la fonte giusta per le decisioni sulla sua cura e sul suo addestramento.</p><h2>3. Significati dei nomi</h2><p>Significati e origini provengono da fonti linguistiche e culturali consolidate e sono presentati in buona fede. I nomi spesso portano significati diversi a seconda della lingua, della regione e della tradizione, e le etimologie sono talvolta discusse fra le fonti. Nessun significato mostrato qui è presentato come l’interpretazione definitiva, completa o esclusiva di un nome. Se stai scegliendo un nome in cui il significato conta molto per te, verificalo su una fonte di cui ti fidi prima di decidere.</p><h2>4. Il filtro dei conflitti</h2><p>Il filtro dei conflitti confronta i nomi foneticamente con i comandi di addestramento più comuni e con qualsiasi parola tu inserisca. È un’euristica utile, non una garanzia. Non può conoscere ogni parola usata in casa tua, ogni accento con cui quel nome verrà pronunciato, né come reagirà un determinato animale. Considera un esito pulito un buon segno, non una promessa.</p><h2>5. Disponibilità</h2><p>Il sito è fornito «come disponibile». Può essere modificato, interrotto o sospeso in qualsiasi momento senza preavviso. Le funzioni che dipendono dal tuo browser — la riproduzione della pronuncia in particolare — dipendono da capacità che non controlliamo e potrebbero non funzionare su tutti i dispositivi.</p><h2>6. Uso consentito</h2><p>Puoi usare liberamente il generatore per scopi personali e commerciali, incluso dare un nome agli animali in un rifugio, in un’associazione di recupero o in un contesto di allevamento. Non puoi estrarre, scaricare in blocco o ridistribuire il database di nomi e significati come insieme di dati o come prodotto concorrente, né tentare di interrompere il sito, né presentarlo come tuo.</p><h2>7. Proprietà intellettuale</h2><p>I singoli nomi non appartengono a nessuno e sei libero di usare qualsiasi nome trovi qui. Il design del sito, i contenuti redatti e il database compilato di nomi e significati in quanto raccolta restano proprietà di Perfect Pet Name Generator.</p><h2>8. Assenza di garanzie e limitazione di responsabilità</h2><p>Il sito e i suoi contenuti sono forniti senza garanzie di alcun tipo, espresse o implicite, incluse accuratezza, idoneità a uno scopo particolare e disponibilità ininterrotta. Nella misura massima consentita dalla legge, i gestori di questo sito non sono responsabili di alcuna perdita o danno derivante dal suo utilizzo o da qualsiasi decisione sul nome presa tramite esso.</p><h2>9. Collegamenti esterni</h2><p>I collegamenti a siti di terze parti sono forniti per comodità. Non siamo responsabili dei loro contenuti, della loro accuratezza o delle loro pratiche.</p><h2>10. Modifiche a questi termini</h2><p>Questi termini possono essere aggiornati man mano che il sito cambia. La data di «ultimo aggiornamento» qui sopra riflette la versione in vigore, e continuare a usare il sito dopo una modifica significa accettarla.</p><h2>11. Contatti</h2><p>Domande su questi termini: <a href="mailto:{{email}}">{{email}}</a>, oppure usa la <a href="{{url:contact}}">pagina dei contatti</a>. Vedi anche l’<a href="{{url:privacy}}">informativa sulla privacy</a>.</p>',
  },

  /** Translated in the sitemap-visible pages only; 404/500 stay English. */
  schema: {
    appDescription:
      'Generatore gratuito di nomi per cani e gatti con significati documentati, pronuncia nel browser, filtro dei conflitti con i comandi di addestramento e modalità coppia per dare il nome a due animali insieme.',
    features: [
      'Generatore di nomi per cani e gatti',
      'Significato e origine documentati per ogni nome',
      'Pronuncia tramite il motore vocale del browser',
      'Filtro dei conflitti con comandi di addestramento e nomi di casa',
      'Modalità nomi per coppie e cucciolate',
      'Filtri per sesso, stile, lettera iniziale e lunghezza massima',
    ],
  },
};

export default it;
