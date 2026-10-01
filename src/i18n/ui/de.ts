/**
 * Deutsch. Mirrors the shape of ./en.ts exactly.
 *
 * Placeholders ({{total}}, {{url:dog}}, …) and the markup inside `*Html`
 * strings must survive translation untouched. FAQ answers stay plain text
 * because they are copied into FAQPage JSON-LD.
 *
 * German compounds run long, so titles are kept short on purpose: the audit
 * fails a <title> over 60 characters. The training commands the tool checks
 * are English words, because the name list is English; the copy says so.
 */
const de = {
  common: {
    siteName: 'Perfekter Haustiernamen-Generator',
    skipLink: 'Zum Hauptinhalt springen',
    themeToggle: 'Zwischen hellem und dunklem Design wechseln',
    languageLabel: 'Sprache',
    languageNav: 'Sprache wählen',
    mainNav: 'Hauptnavigation',
    breadcrumb: 'Brotkrümelnavigation',
    home: 'Startseite',
  },

  nav: {
    dog: 'Hundenamen',
    cat: 'Katzennamen',
    pet: 'Haustiernamen',
    about: 'Über uns',
  },

  footer: {
    blurb:
      'Ideen für Hunde- und Katzennamen mit echten Bedeutungen, Aussprache zum Anhören und einer Prüfung, die verhindert, dass ein neuer Name mit deinen Kommandos kollidiert.',
    headings: { generators: 'Generatoren', guides: 'Ratgeber', site: 'Website', legal: 'Rechtliches' },
    links: {
      home: 'Startseite',
      dog: 'Hundenamen-Generator',
      cat: 'Katzennamen-Generator',
      pet: 'Haustiernamen-Generator',
      teach: 'Namen beibringen',
      avoid: 'Namen vermeiden',
      pairs: 'Zwei Tiere benennen',
      meanings: 'Namensbedeutungen',
      about: 'Über uns',
      contact: 'Kontakt',
      privacy: 'Datenschutzerklärung',
      terms: 'AGB',
    },
    copyright:
      '© {{year}} Perfect Pet Name Generator. Die Bedeutungen stammen aus etablierten sprachwissenschaftlichen und kulturellen Quellen; die Vorschläge dienen der Inspiration und sind keine professionelle Trainings- oder tierärztliche Beratung.',
  },

  styles: {
    fantasy: 'Fantasy',
    funny: 'Lustig',
    cute: 'Niedlich',
    strong: 'Stark',
    elegant: 'Elegant',
    classic: 'Klassisch',
    mythical: 'Mythologisch',
    food: 'Kulinarisch',
    modern: 'Modern',
    unique: 'Einzigartig',
  },

  generator: {
    speciesLegend: 'Tierart',
    speciesAny: 'Hunde und Katzen',
    speciesDog: 'Hund',
    speciesCat: 'Katze',

    genderLegend: 'Geschlecht',
    genderAny: 'Egal',
    genderMale: 'Männlich',
    genderFemale: 'Weiblich',
    genderHint: 'Die Auswahl männlich oder weiblich schließt auch geschlechtsneutrale Namen ein.',

    styleLegend: 'Stil',
    stylePickAny: '(beliebig viele)',
    styleHint:
      'Ohne Auswahl sind alle Stile im Spiel. Mehrere anzuhaken liefert Namen, die auf einen davon passen.',

    letterLabel: 'Anfangsbuchstabe',
    letterAny: 'Beliebiger Buchstabe',

    maxLenLabel: 'Maximale Namenslänge',
    maxLenAny: 'Beliebige Länge',
    maxLenOption: 'Höchstens {{n}} Buchstaben',
    maxLenHint:
      'Praktisch für gravierte Marken: In die Gravurfläche passen meist etwa 8 Zeichen pro Zeile.',

    avoidLabel: 'Namen vermeiden, die klingen wie …',
    avoidPlaceholder: 'Jake, Nora, Bo — Familienmitglieder, andere Tiere, alles zu Meidende',
    avoidHtml:
      '<strong style="color: var(--c-text);">Warum das zählt:</strong> Ein Tier lernt seinen Namen als eigenständigen Klang. Ein Name, der sich auf einen Namen im Haushalt oder ein Kommando reimt, macht beides schwerer erlernbar — „Bo“ verschwimmt mit „No“, „Kit“ mit „Sit“. Jeder Vorschlag wird außerdem automatisch mit {{commandCount}} gängigen {{commandKind}} ({{commandExamples}}…) abgeglichen. Klare Treffer werden ausgeblendet, Grenzfälle markiert angezeigt, damit du entscheidest. Was du hier eingibst, wird in deinem Browser verglichen und nie gespeichert oder irgendwohin gesendet.',
    commandKindDog: 'englischen Hundekommandos',
    commandKindCat: 'englischen Katzenrufen',

    optionsLegend: 'Optionen',
    excludeShown: 'Bereits gezeigte Namen ausschließen',
    excludeShownHint: 'Jeder Durchlauf liefert Namen, die du noch nicht gesehen hast.',
    hideFlagged: 'Markierte Namen ganz ausblenden',
    hideFlaggedHint:
      'Standardmäßig aus, damit du Grenzfälle siehst und selbst beurteilen kannst.',
    pairMode: 'Zwei Tiere gleichzeitig benennen?',
    pairModeHint:
      'Liefert Sets, die einen Stil teilen, ähnlich lang sind und nicht miteinander verwechselt werden — für zusammengehörige Paare und Wurfgeschwister.',
    setSizeLabel: 'Namen pro Set',
    setSize2: '2 — ein Paar',
    setSize3: '3 — ein Wurf',

    generate: 'Namen generieren',
    copyBatch: 'Diese Auswahl kopieren',
    startOver: 'Von vorn beginnen',
    ctaHint:
      'Sofort einen zufälligen {{species}} bekommen — jeder Klick zieht eine neue Auswahl aus den Namen, die zu deinen Filtern passen. Generiere so lange, bis einer sitzt.',
    speciesWordDog: 'Hundenamen',
    speciesWordCat: 'Katzennamen',
    speciesWordAny: 'Haustiernamen',

    resultsHeading: 'Namensideen',
    resultsAria: 'Generierte Haustiernamen',
    statusInitialHtml:
      'Unten steht eine erste Auswahl — drücke <strong>Namen generieren</strong> für einen Satz passend zu deinen Filtern.',
    noscript:
      'Der interaktive Generator braucht JavaScript. Die Startnamen unten werden vollständig angezeigt, inklusive Bedeutungen.',
    unisex: 'Unisex',
    male: 'Männlich',
    female: 'Weiblich',
    meaningLabel: 'Bedeutung:',
  },

  /** Strings the client controller renders after the page has loaded. */
  runtime: {
    pronounce: '🔊 Aussprechen',
    pronounceAria: 'Anhören, wie {{name}} ausgesprochen wird',
    notSupported: 'Hier nicht verfügbar',
    bootError: 'Der Generator konnte nicht geladen werden. Bitte lade die Seite neu.',

    conflictHtml: 'Konflikt mit dem Training: Dieser Name {{reason}}.',
    reasons: {
      same: 'ist dasselbe Wort wie „{{word}}“',
      oneSound: 'ist nur einen Laut von „{{word}}“ entfernt',
      veryClose: 'liegt sehr nah an „{{word}}“',
      almostIdentical: 'klingt fast identisch wie „{{word}}“',
      rhymes: 'reimt sich auf „{{word}}“',
      similar: 'ähnelt „{{word}}“',
    },

    dogBadge: 'Hund',
    catBadge: 'Katze',

    whyTogether:
      'Warum sie zusammenpassen: {{style}}, {{lengths}} Buchstaben, unterschiedliche Anfangslaute und nicht miteinander zu verwechseln.',
    inStyle: 'Stil {{styles}}',
    matchedInStyle: 'im Stil abgestimmt',
    joiner: ' und ',

    finding: 'Namen werden gesucht …',
    loadError: 'Die Namensliste konnte nicht geladen werden. Prüfe deine Verbindung und versuche es erneut.',

    emptyHeading: 'Keine Namen passen zu diesen Filtern',
    emptyLead:
      'Der engste Filter ist hier {{reason}}. Lockere zuerst diesen — der Rest deiner Auswahl kann bleiben.',
    emptyGeneric: 'Nimm einen Filter heraus — der Rest deiner Auswahl kann bleiben.',
    emptyStartOver:
      'Mit „Von vorn beginnen“ unten leerst du die Liste der bereits gezeigten Namen.',
    emptyReasons: {
      gender: 'der Geschlechtsfilter',
      style: 'diese Stilkombination',
      letter: 'der Anfangsbuchstabe',
      length: 'die maximale Namenslänge',
      shown: '„bereits gezeigte Namen ausschließen“ — du hast jeden Treffer gesehen',
      conflict: 'der Konfliktfilter, der alle verbliebenen Treffer entfernt hat',
      pair: 'der Paarmodus, der mehrere passende Namen braucht, um ein Set zu bilden',
    },

    noSets: 'Keine passenden Sets für diese Filter.',
    noMatches: 'Keine Treffer.',
    setsStatus:
      '{{count}} {{word}}, die zusammen gut klingen und nicht miteinander zu verwechseln sind.',
    pairOne: 'Paar',
    pairMany: 'Paare',
    setOne: 'Set',
    setMany: 'Sets',

    statusNamesOne: '1 Name von {{pool}} passenden Treffern',
    statusNamesMany: '{{count}} Namen von {{pool}} passenden Treffern',
    statusHidden: '{{count}} durch den Konfliktfilter ausgeblendet',
    statusFlagged: '{{count}} als möglicher Trainingskonflikt markiert',

    copied: 'Kopiert',
    copyBlocked: 'Kopieren ist in diesem Browser blockiert — markiere die Namen von Hand.',
    clearedShown:
      'Liste der gezeigten Namen geleert. Alle Namen sind wieder im Pool.',
  },

  home: {
    title: 'Haustiernamen-Generator | Hunde- und Katzennamen',
    description:
      'Kostenloser Haustiernamen-Generator. Hunde- und Katzennamen mit echten Bedeutungen zufällig erzeugen, anhören und Konflikte mit Kommandos vermeiden.',
    eyebrow: 'Kostenlos · Ohne Anmeldung · {{total}} Namen',
    h1: 'Haustiernamen-Generator',
    answerBox:
      'Dieser kostenlose Haustiernamen-Generator erzeugt zufällig Hunde- und Katzennamen passend zu den Filtern, die du setzt: Stil, Geschlecht, Anfangsbuchstabe und Länge. Jeder Name zeigt eine belegte Bedeutung, wird auf Tippen vorgelesen und daraufhin geprüft, dass er nicht mit deinen Kommandos oder den Namen im Haushalt kollidiert.',
    leadHtml:
      'Einen Hund benennen? <a class="underline" style="color: var(--c-accent-on-soft);" href="{{url:dog}}">Zum Hundenamen-Generator</a>. Eine Katze? <a class="underline" style="color: var(--c-accent-on-soft);" href="{{url:cat}}">Zum Katzennamen-Generator</a>. Oder generiere unten für beide Arten zugleich.',
    generator: {
      heading: 'Hunde- und Katzennamen generieren',
      intro:
        'Setze so viele oder so wenige Filter, wie du magst, und generiere. Jeder Name kommt mit seiner Bedeutung.',
    },
    styles: {
      heading: 'Beliebte Stile: Fantasy- und lustige Haustiernamen',
      lead: 'Alle {{styleCount}} Stilfilter oben funktionieren gleich, aber nach diesen beiden wird gezielt gesucht.',
      fantasy: {
        heading: 'Fantasy-Haustiernamen',
        html: '<p class="mt-2 text-[0.9375rem]">Auf der Suche nach einem Fantasy-Namensgenerator? Hake <strong>Fantasy</strong> im Stilfilter an, und die Auswahl kommt aus Mythos, epischer Fiktion und Science-Fiction — {{fantasyCount}} Namen von Gandalf, Arwen und Thorin bis Zelda, Kenobi und Ohnezahn. Hake zusätzlich <strong>Mythologisch</strong> an, um die Auswahl mit Odin, Athene, Fenrir und Freya zu erweitern.</p><p class="mt-2 text-[0.9375rem]">Fantasy-Namen geraten meist länger als das Ideal von ein bis zwei Silben. Genau deshalb lohnt es sich, den Fantasy-Filter mit einem Maximum von fünf oder sechs Buchstaben zu kombinieren: Frodo trägt über den ganzen Park, während aus Herkules in der zweiten Woche ohnehin Herk wird, ob geplant oder nicht.</p>',
      },
      funny: {
        heading: 'Lustige Haustiernamen',
        html: '<p class="mt-2 text-[0.9375rem]">Lustig ist hier der größte Stil — {{funnyCount}} Namen von Waffles, Gnocchi und Meatball bis Bandit, Hooligan und Chonk. Ein Generator für lustige Namen hat allerdings eine Falle: Der Witz muss überstehen, quer durch ein Wartezimmer beim Tierarzt gerufen und auf ein Mikrochip-Formular geschrieben zu werden. Sprich deine engere Auswahl also in Rufweite laut aus, bevor du dich festlegst.</p><p class="mt-2 text-[0.9375rem]">Mehrere der lustigsten Optionen haben ein ernstes Gesicht darunter — Loki ist der nordische Trickster-Gott, Otis bedeutet germanisch „Reichtum“ — und die Bedeutung steht auf jeder Karte, damit du siehst, worauf du dich einlässt.</p>',
      },
    },
    different: {
      heading: 'Drei Dinge, die dieser Generator tut und die meisten nicht',
      cards: [
        {
          heading: 'Bedeutungen, die man tatsächlich lesen kann',
          body: 'Jeder Name zeigt Herkunft und Bedeutung direkt auf der Karte, immer sichtbar. Kein Aufklappen, kein Konto, keine E-Mail-Hürde. Ein Name, den du zehnmal am Tag sagst, sollte vor der Wahl eine bekannte Größe sein.',
        },
        {
          heading: 'Ein Konfliktfilter für deinen Haushalt',
          body: 'Gib die Namen von Familienmitgliedern und anderen Tieren ein, und der Generator entfernt Vorschläge, die zu ähnlich klingen — zusätzlich zur automatischen Prüfung gegen gängige Trainingskommandos. Dieses Stück bietet fast kein anderes Namenswerkzeug.',
        },
        {
          heading: 'Namen für zwei Tiere auf einmal',
          body: 'Zusammengehörige Paare und Wurfgeschwister brauchen Namen, die stilistisch zusammenpassen und laut gesprochen klar unterscheidbar bleiben. Der Paarmodus baut diese Sets und prüft die Namen auch gegeneinander, nicht nur gegen deinen Haushalt.',
        },
      ],
    },
    pick: {
      heading: 'Wähle deinen Generator',
      dog: {
        heading: 'Hundenamen-Generator',
        body: '{{dogCount}} Hundenamen mit Bedeutungen, geprüft gegen {{dogCommandCount}} gängige Kommandos wie sit, stay, come und down.',
      },
      cat: {
        heading: 'Katzennamen-Generator',
        body: '{{catCount}} Katzennamen mit Bedeutungen, abgestimmt auf die Laute, auf die Katzen reagieren, und geprüft gegen die Rufe im Katzenhaushalt.',
      },
      pet: {
        heading: 'Namen für einen Mehrtierhaushalt',
        body: 'Beide Arten zugleich, dazu Orientierung für die Namenswahl in einem Zuhause mit Kindern, Partnerin oder Partner und weiteren Tieren.',
      },
    },
    how: {
      heading: 'Wie die Namensempfehlungen hier begründet sind',
      html: '<p>Die Regeln dieses Werkzeugs sind die, die professionelle Trainerinnen und Trainer geben: Halte den Namen kurz, halte ihn deutlich getrennt von den Kommandos, und bleibe nach der Wahl konsequent. Ein Hund oder eine Katze lernt einen Namen als Klangmuster, das mit Aufmerksamkeit und Belohnung verknüpft ist, nicht als Wort mit Bedeutung. Deshalb kostet ein Name, der sich mit „no“ oder „sit“ überschneidet, echte Trainingszeit: Das Tier soll zwei Signale trennen, die nahezu identisch an seinem Ohr ankommen.</p><p>Die Bedeutungen neben jedem Namen wirken andersherum: Sie zählen für dich, nicht für das Tier. Sie stehen hier, weil ein Name fünfzehn Jahre täglichen Gebrauch trägt, und zu wissen, dass Luna lateinisch „Mond“ heißt oder Odin in die nordische Mythologie gehört, ist genau das Detail, das aus einer Auswahlliste eine Entscheidung macht. Die Bedeutungen stammen aus belegten sprachwissenschaftlichen und kulturellen Quellen; keine ist geraten.</p><p>Nichts auf dieser Website verlangt ein Konto. Der Konfliktfilter läuft vollständig in deinem Browser, weshalb die Namen, die du dort eingibst, dein Gerät nie verlassen — Einzelheiten stehen in der <a href="{{url:privacy}}">Datenschutzerklärung</a>.</p>',
    },
    about: {
      heading: 'Über diesen Haustiernamen-Generator',
      paragraphs: [
        'Perfect Pet Name Generator ist ein kostenloser Haustiernamen-Generator für Hunde und Katzen, gebaut, um die Teile der Namenswahl zu lösen, die erst später auftauchen, und nicht nur, um eine Wortliste auszugeben. Er greift auf {{total}} Namen in {{styleCount}} Stilen zurück. Jeder ausgegebene Name trägt eine belegte Bedeutung, eine Schaltfläche, die ihn im Browser laut vorliest, und eine automatische Prüfung gegen die Kommandos, die dein Tier lernen muss. Nichts ist gesperrt: keine Anmeldung, kein E-Mail-Schritt, keine Bezahlstufe bei irgendeiner Funktion, einschließlich Haushalts-Konfliktfilter und Paarmodus.',
        'Im Kern ist dies ein Zufallsnamen-Generator. Bei jedem Druck auf Generieren werden die Namen, die zu deinen Filtern passen, mit einem Fisher-Yates-Algorithmus gemischt und eine frische Auswahl gezogen, sodass jeder infrage kommende Name die gleiche Chance hat zu erscheinen, statt dass sich dieselben wenigen wiederholen. Ohne gesetzte Filter arbeitet er als reiner zufälliger Hundenamen-Generator und zufälliger Katzennamen-Generator. Füge einen Stil, einen Anfangsbuchstaben oder eine Längenbegrenzung hinzu, und die Ziehung bleibt zufällig – sie findet nur in einem kleineren Pool statt.',
        'Der Hundenamen-Generator ist darauf abgestimmt, wie ein Hund einen Namen tatsächlich lernt. Du kannst nach männlich, weiblich oder Unisex filtern, nach Stil, nach Anfangsbuchstaben und nach einer maximalen Länge, die auf eine gravierte Erkennungsmarke passt. Die Ansichten für männlich und weiblich im Hundenamen-Generator behalten Unisex-Namen in den Ergebnissen, sodass keine gute Option an einer starren Geschlechtertrennung verloren geht. Jeder Vorschlag wird gegen {{dogCommandCount}} gängige Kommandos wie sit, stay, come, heel und down geprüft; Namen, die zu ähnlich klingen, werden ausgeblendet, und Grenzfälle mit einem Hinweis angezeigt, damit die letzte Entscheidung bei dir bleibt.',
        'Der Katzennamen-Generator folgt demselben Aufbau, stützt sich aber auf die Laute, auf die Katzen am besten reagieren: kurze Namen mit hellen, hochfrequenten Tönen wie dem „i“ in Mimi oder dem harten k in Kiko. Filtere den Katzennamen-Generator nach männlich oder weiblich, nach Stil, nach Buchstabe oder nach Länge, und er hält sich von den Rufen fern, die in einem Katzenhaushalt verwendet werden. Wie bei Hunden behalten die Ergebnisse für männlich und weiblich im Katzennamen-Generator Unisex-Namen im Pool, statt sie zu verwerfen.',
        'Wenn du Papiere für den Stammbaum ausfüllst, dient das Werkzeug auch als Generator für registrierte Hundenamen. Registrierte Namen für den AKC, den Kennel Club und ähnliche Register sind lang, formell und oft an ein Zwinger- oder Wurfthema angelehnt, während der Rufname, den du zu Hause verwendest, kurz bleibt. Schalte die Längenbegrenzung aus und wähle einen eleganten oder klassischen Stil für den registrierten Namen, und starte den Generator dann erneut mit einer Grenze von fünf oder sechs Buchstaben, um den passenden Alltags-Rufnamen zu finden.',
        'Stile sind die Art, wie die meisten die Liste eingrenzen. Fantasy schöpft aus Mythos, epischer Fiktion und Science-Fiction; Lustig ist die größte Kategorie hier und reicht von Waffles und Meatball bis Bandit und Hooligan; daneben stehen die Filter niedlich, stark, elegant, klassisch, mythisch, von Essen inspiriert, modern und einzigartig. Wähle mehrere gleichzeitig, und der Generator liefert Namen, die zu irgendeinem davon passen – der schnellste Weg, eine zu eng gewordene Suche zu erweitern.',
        'Bedeutungen sind die andere Hälfte des Werkzeugs, und sie zählen für dich, nicht für das Tier. Ein Name, der fünfzehn Jahre lang zehnmal am Tag gesagt wird, verdient es, eine bekannte Größe zu sein, deshalb stehen Herkunft und Bedeutung jedes Namens offen auf der Karte, nie hinter einem Umschalter, einem Konto oder einem E-Mail-Formular. Bedeutungen stammen aus belegten Etymologien, Mythologie und dokumentierten Wortursprüngen, und wo eine Bedeutung nicht belegt ist, wird der Name weggelassen statt mit einer erfundenen versehen.',
        'Jeder erzeugte Name hat eine Aussprechen-Schaltfläche, die ihn mit der bereits in deinem Gerät eingebauten Sprachausgabe vorliest. Es wird kein Audio heruntergeladen und kein Text-to-Speech-Dienst von Dritten kontaktiert. Das zählt am meisten bei aus der Mythologie stammenden und nicht englischen Namen, wo die Schreibweise wenig über die tatsächliche Aussprache verrät, und eine kurze Liste in Ruflautstärke zu hören ist der schnellste Weg, einen Namen zu erkennen, der sich schwer über einen Park rufen lässt.',
        'Der Haushalts-Konfliktfilter ist der Baustein, den fast kein anderer Haustiernamen-Generator bietet. Gib die Namen ein, die zu Hause bereits in Gebrauch sind – Partner, Kind, ein anderes Tier, selbst ein Spitzname, der durch den Garten gerufen wird – und jeder Vorschlag wird phonetisch mit ihnen verglichen, nicht über die Schreibweise, denn „Kay“ und „Stay“ teilen keinen Anfangsbuchstaben, fallen aber gehört völlig zusammen. Klare Treffer werden entfernt und Grenzfälle markiert, und alles, was du eingibst, wird in deinem Browser verglichen und nie gespeichert, protokolliert oder irgendwohin gesendet.',
        'Zwei Tiere gleichzeitig zu benennen ist ein anderes Problem als ein Tier zweimal zu benennen, daher hat der Generator einen Paarmodus. Er liefert Sätze aus zwei oder drei Namen, die einen Stil teilen und innerhalb von etwa zwei Buchstaben derselben Länge liegen, und verwirft dann jeden Satz, dessen Namen phonetisch nahe beieinander liegen. Er ist für zusammen adoptierte, unzertrennliche Paare gedacht und für Würfe, die ein gemeinsames Thema brauchen, ohne auf den Namen des anderen zu reagieren.',
        'Die gesamte Website ist statisch: keine Konten, keine Datenbank, keine serverseitige Verarbeitung von irgendetwas, das du eingibst. Beginne mit dem Hundenamen-Generator, dem Katzennamen-Generator, oder generiere mit dem Werkzeug oben für beide Arten, und tu die beiden Dinge, die Namensreue verhindern: lies die Bedeutung und sprich den Namen laut aus, bevor du dich entscheidest.',
      ],
    },
    faqHeading: 'Häufige Fragen',
    faqs: [
      {
        q: 'Was macht einen guten Haustiernamen aus?',
        a: 'Ein guter Haustiername hat ein bis zwei Silben, endet auf einen klaren Vokal oder harten Konsonanten und ähnelt keinem Wort, das du als Kommando nutzt. Kurze Namen tragen besser über einen Park oder durch einen Raum, und ein deutlicher Endlaut hilft Hund oder Katze, den eigenen Namen aus dem normalen Gespräch herauszuhören. Die Bedeutung zählt für dich mehr als für das Tier, und deshalb zeigt hier jeder Name seine Herkunft.',
      },
      {
        q: 'Warum sollte ein Haustiername nicht wie ein Kommando klingen?',
        a: 'Ein Name, der wie ein Kommando klingt, bremst das Training, weil das Tier die beiden Signale nicht auseinanderhalten kann. „Bo“ und „no“ oder „Kit“ und „sit“ unterscheiden sich um einen einzigen Laut, sodass bei jeder Verwendung ein mehrdeutiges Signal ankommt. Dieser Generator gleicht jeden Vorschlag mit gängigen Kommandos und mit den von dir eingegebenen Haushaltsnamen ab, blendet klare Treffer aus und markiert Grenzfälle.',
      },
      {
        q: 'Ist dieser Haustiernamen-Generator kostenlos, und brauche ich ein Konto?',
        a: 'Er ist vollständig kostenlos, und für keine Funktion gibt es ein Konto, eine Anmeldung oder einen E-Mail-Schritt — auch nicht für den Konfliktfilter und den Paarmodus. Alles läuft in deinem Browser gegen eine statische Namensliste. Nichts, was du eingibst, wird gespeichert oder an einen Server geschickt.',
      },
      {
        q: 'Kann ich Namen für zwei gemeinsam adoptierte Tiere erzeugen?',
        a: 'Ja. Aktiviere „Zwei Tiere gleichzeitig benennen?“, und der Generator liefert Sets aus zwei oder drei Namen statt einer einzelnen Liste. Jedes Set teilt einen Stil, bleibt innerhalb von zwei Buchstaben derselben Länge, beginnt mit einem anderen Laut und besteht dieselbe phonetische Prüfung wie der Konfliktfilter, damit die Tiere nicht auf den Namen des anderen reagieren.',
      },
      {
        q: 'Was sind gute Fantasy-Haustiernamen?',
        a: 'Gute Fantasy-Namen sind aus einer Geschichte oder einem Mythos wiedererkennbar und trotzdem kurz genug, um sie über den Garten zu rufen: Gandalf, Arwen, Thorin, Zephyr und Zelda schaffen beides. Der Fantasy-Filter enthält {{fantasyCount}} davon, und zusätzlich Mythologisch anzuhaken erweitert die Auswahl um Odin, Athene, Fenrir und Freya. Lange Namen werden in der Praxis abgekürzt, prüfe also, ob der Name auch mit zwei Silben funktioniert.',
      },
      {
        q: 'Was sind lustige Haustiernamen?',
        a: 'Lustige Haustiernamen sind jene, deren Witz aus der Lücke zwischen dem Namen und dem Tier entsteht, das ihn trägt: Waffles, Meatball, Bandit, Chonk und Hooligan sind typische Treffer des Filters Lustig, und es gibt hier {{funnyCount}} davon. Der einzige echte Test ist, ob der Witz noch zündet, wenn eine Tierärztin ihn im Wartezimmer aufruft — sprich deine Auswahl also vorher laut aus.',
      },
      {
        q: 'Woher stammen die Bedeutungen der Namen?',
        a: 'Die Bedeutungen stammen aus etablierten sprachwissenschaftlichen und kulturellen Quellen und wurden nicht für dieses Werkzeug erfunden: belegte Etymologien, Mythologie und dokumentierte Wortherkünfte. Sie stehen vollständig neben jedem Namen, nie hinter einem Aufklapper oder E-Mail-Formular, damit du einen Namen beurteilen kannst, bevor du dich für fünfzehn Jahre festlegst.',
      },
    ],
  },

  dog: {
    title: 'Hundenamen-Generator mit Bedeutungen',
    description:
      'Kostenloser Hundenamen-Generator mit echten Bedeutungen und Aussprache. Filtere nach Stil, Geschlecht, Buchstabe und Länge und meide Kommandokonflikte.',
    breadcrumb: 'Hundenamen',
    h1: 'Hundenamen-Generator',
    answerBox:
      'Der Name eines Hundes sollte ein bis zwei Silben haben und sich klar von jedem Kommando unterscheiden, das du beibringen willst. Dieser Generator schöpft aus {{dogCount}} Hundenamen mit belegten Bedeutungen, spricht jeden davon vor und entfernt automatisch Vorschläge, die wie {{dogCommandCount}} gängige Kommandos klingen — damit der gewählte Name nicht mit den Wörtern konkurriert, die dein Hund lernen muss.',
    generator: {
      heading: 'Hundenamen generieren',
      intro:
        'Filtere nach Stil, Geschlecht, Anfangsbuchstabe oder markentauglicher Länge. Trage Namen aus dem Haushalt ein, die vermieden werden sollen — den Rest übernimmt der Konfliktfilter.',
    },
    prose: {
      heading: 'Warum ein Hundename nicht wie ein Kommando klingen darf',
      html: '<p>Ein Hund lernt einen Namen als Klang, nicht als Wort. Überschneidet sich der Name mit einem Signal, lehrt jede Wiederholung Mehrdeutigkeit statt Klarheit: Der Hund hört etwas nahe an „no“ und muss raten, ob er gerufen oder korrigiert wird. Die Kosten misst man in Wochen langsamerem Rückruftraining, und der Rückruf ist das Kommando, auf das es am meisten ankommt.</p><p>Die auf dieser Seite automatisch geprüften Kommandos sind: {{dogCommands}}. Sie sind englisch, weil die Namensliste es ist; wenn du auf Deutsch trainierst, trage deine eigenen Signale in das Feld unten ein, und sie werden genauso geprüft. Namen, die einem davon zu nahe kommen, verschwinden aus deinen Ergebnissen, und Grenzfälle werden mit einer Markierung samt Erklärung angezeigt statt stillschweigend verworfen — denn ein Reim, den man kennt, lässt sich leichter aushalten als einer, den man im dritten Monat entdeckt.</p><p>Dieselbe Prüfung läuft gegen alles, was du in das Feld „Namen vermeiden, die klingen wie“ einträgst. Ein Hund in einem Haushalt mit einem Jake tut sich mit Jade schwer; ein zweiter Hund neben einer Bailey mit Hayley. Dieser Vergleich passiert in deinem Browser, und nichts davon wird gespeichert oder übertragen.</p><h2>Zwei Hunde oder einen ganzen Wurf benennen</h2><p>Zwei Hunde in einem Haushalt brauchen Namen, die unverwechselbar verschieden sind. Der Paarmodus baut Sets, die einen Stil teilen und ähnlich lang sind — damit sie nach demselben Zuhause klingen — und erzwingt zugleich unterschiedliche Anfangslaute samt derselben phonetischen Prüfung zwischen beiden Namen. Das funktioniert für gemeinsam adoptierte Paare ebenso wie für Wurfgeschwister mit stimmigem Thema.</p><h2>Namen, die auf eine gravierte Marke passen</h2><p>Auf die meisten gravierten Tiermarken passen etwa acht Zeichen pro Zeile, bevor die Schrift schrumpfen muss, und ein Name, der mit einer Telefonnummer um Platz konkurriert, wird als Erstes gekürzt. Genau dafür gibt es den Längenfilter: Stelle ihn auf sechs oder weniger, und jeder Vorschlag lässt sich sauber neben deinen Kontaktdaten gravieren.</p>',
    },
    showcase: {
      heading: 'Hundenamen nach Stil, mit Bedeutungen',
      lead: 'Eine Auswahl aus der vollständigen Liste. Nutze den Generator oben, um den Rest nach Geschlecht, Buchstabe und Länge zu filtern.',
      strong: 'Starke Hundenamen',
      cute: 'Niedliche Hundenamen',
      mythical: 'Mythologische Hundenamen',
    },
    more: {
      heading: 'Ein anderes Tier benennen',
      html: '<p>Doch eine Katze? Der <a href="{{url:cat}}">Katzennamen-Generator</a> nutzt eine katzenspezifische Liste und prüft gegen die Laute, auf die Katzen tatsächlich reagieren. Beide oder etwas ganz anderes? Der <a href="{{url:pet}}">allgemeine Haustiernamen-Generator</a> funktioniert artübergreifend, und die <a href="{{url:home}}">Startseite</a> erklärt, wie Bedeutungen, Aussprache und Konfliktprüfung zusammenspielen.</p>',
    },
    faqHeading: 'Fragen zu Hundenamen',
    faqs: [
      {
        q: 'Wie wähle ich einen Hundenamen aus?',
        a: 'Wähle einen Namen mit ein bis zwei Silben, der auf einen Vokal oder scharfen Konsonanten endet und keinen Laut mit deinen Kommandos teilt. Sprich ihn vor der Entscheidung in der Lautstärke aus, die du im Park nutzen würdest, prüfe ihn gegen die Wörter, die der Hund ohnehin lernen muss, und behalte ihn dann bei: Ein Namenswechsel mitten im Training setzt die Verknüpfung zurück.',
      },
      {
        q: 'Welche Hundenamen sollte ich meiden?',
        a: 'Meide Namen, die sich auf deine Kommandos reimen oder ihnen stark ähneln: {{dogCommandsShort}} und ähnliche Signale. Meide außerdem Namen, die mit einem Familienmitglied oder einem anderen Tier im Haus übereinstimmen, denn ein Hund kann zwei ähnliche Laute aus derselben Stimme nicht trennen. Der Generator auf dieser Seite entfernt beide Kategorien automatisch.',
      },
      {
        q: 'Sollte ein Hundename ein oder zwei Silben haben?',
        a: 'Ein bis zwei Silben sind die praktische Obergrenze für einen Hundenamen. Kurze Namen dringen durch Hintergrundgeräusche und lassen sich scharf und gleichbleibend aussprechen — genau das lernt der Hund. Längere Namen werden im Alltag ohnehin abgekürzt, also lohnt es sich, die Kurzform bewusst zu wählen, statt sie zufällig entstehen zu lassen.',
      },
      {
        q: 'Kann ich hören, wie ein Hundename ausgesprochen wird?',
        a: 'Ja. Jeder erzeugte Name hat eine Schaltfläche zum Aussprechen, die den Namen mit der in deinem Browser eingebauten Sprachausgabe vorliest. Sie funktioniert nach dem Laden der Seite auch offline, sendet nichts an einen Server und braucht kein Plug-in. Einen Namen gesprochen zu hören ist der schnellste Weg, einen zu erkennen, der sich unangenehm rufen lässt.',
      },
      {
        q: 'Wie viele Hundenamen hat dieser Generator?',
        a: 'Der Generator schöpft aus {{dogCount}} Hundenamen, jeder mit belegter Bedeutung und Herkunft. Die Filter für Geschlecht, Stil, Anfangsbuchstabe und maximale Länge verengen diesen Pool, und die angezeigte Auswahl wird per Fisher-Yates-Mischung gezogen, damit jeder passende Name dieselbe Chance hat zu erscheinen, statt dass immer dieselbe Handvoll auftaucht.',
      },
    ],
  },

  cat: {
    title: 'Katzennamen-Generator mit Bedeutungen',
    description:
      'Kostenloser Katzennamen-Generator mit belegten Bedeutungen und Aussprache zum Antippen. Filtere nach Stil, Geschlecht, Buchstabe und Länge.',
    breadcrumb: 'Katzennamen',
    h1: 'Katzennamen-Generator',
    answerBox:
      'Der Name einer Katze sollte kurz sein, einen hohen Laut wie ein „i“ oder einen harten Konsonanten enthalten und sich klar von den Wörtern unterscheiden, mit denen die Katze gerufen oder korrigiert wird. Dieser Generator schöpft aus {{catCount}} Katzennamen mit belegten Bedeutungen, liest jeden vor und filtert Namen heraus, die mit Haushaltsnamen oder den täglich gehörten Rufen kollidieren.',
    generator: {
      heading: 'Katzennamen generieren',
      intro:
        'Filtere nach Stil, Geschlecht, Anfangsbuchstabe oder markentauglicher Länge. Trage die Namen ein, die bei dir zu Hause schon benutzt werden, und der Konfliktfilter hält sich davon fern.',
    },
    prose: {
      heading: 'Was einen Katzennamen funktionieren lässt',
      html: '<p>Katzen reagieren am besten auf kurze Namen mit hohen Lauten. Ihr Hörbereich reicht nach oben weit über unseren hinaus, und am schärfsten unterscheiden sie die hellen Laute — das „i“ in Mimi, das harte k in Kiko. Ein Name aus tiefen, weichen Lauten ist nicht falsch, er muss nur härter um Aufmerksamkeit kämpfen als alles andere im Raum.</p><p>Die andere Hälfte des Problems ist die Abgrenzung. Katzen unterscheiden ihren Namen von ähnlich klingenden Wörtern, aber die Unterscheidung ist fein, und auf einen mehrdeutigen Laut folgt meist Gleichgültigkeit statt eines Rateversuchs. Die auf dieser Seite automatisch geprüften Rufe sind: {{catCues}}. Alles aus der Namensliste, was einem davon zu nahe kommt, wird entfernt, bevor du es siehst.</p><h2>Zwei Katzen oder einen Wurf Kätzchen benennen</h2><p>Zwei Katzen in einem Haushalt brauchen Namen, die ein Mensch auch unter Druck deutlich rufen kann und die die Katzen nicht miteinander verwechseln. Der Paarmodus liefert Sets aus zwei oder drei Namen, die einen Stil und eine ähnliche Länge teilen, aber mit unterschiedlichen Lauten beginnen — mit derselben phonetischen Prüfung zwischen den Namen selbst. Für einen Wurf stellst du die Größe auf drei, und das Thema trägt über alle drei.</p><h2>Kurze Namen für Halsbandmarken</h2><p>Katzenmarken sind kleiner als Hundemarken, und die Gravurfläche ist wirklich knapp: Sechs Zeichen sind eine sichere Obergrenze, wenn auch eine Telefonnummer daraufsoll. Stelle den Längenfilter auf fünf oder sechs, und jeder Vorschlag passt, ohne dass die Gravur den Text bis zur Unlesbarkeit verkleinern muss.</p>',
    },
    showcase: {
      heading: 'Katzennamen nach Stil, mit Bedeutungen',
      lead: 'Eine Auswahl aus der vollständigen Liste. Der Generator oben filtert den Rest nach Geschlecht, Buchstabe und Länge.',
      elegant: 'Elegante Katzennamen',
      mythical: 'Mythologische Katzennamen',
      food: 'Kulinarische Katzennamen',
    },
    more: {
      heading: 'Ein anderes Tier benennen',
      html: '<p>Doch ein Hund? Der <a href="{{url:dog}}">Hundenamen-Generator</a> prüft gegen die vollständige Kommandoliste, auf die Hunde trainiert werden. Beide zugleich oder etwas Artneutrales? Nutze den <a href="{{url:pet}}">Haustiernamen-Generator</a>, oder beginne auf der <a href="{{url:home}}">Startseite</a>, wo Bedeutungen, Aussprache und Konfliktfilter im Zusammenhang erklärt werden.</p>',
    },
    faqHeading: 'Fragen zu Katzennamen',
    faqs: [
      {
        q: 'Wie wähle ich einen Katzennamen aus?',
        a: 'Wähle einen kurzen Namen mit einem scharfen, hohen Laut darin — Katzen hören hohe Frequenzen deutlich besser als tiefe, weshalb Namen mit einem „i“ oder einem harten Konsonanten zuverlässiger eine Reaktion bekommen. Zwei Silben mit Vokalendung funktionieren gut. Teste den Namen, indem du ihn quer durch einen Raum rufst, bevor du dich entscheidest.',
      },
      {
        q: 'Lernen Katzen wirklich ihren Namen?',
        a: 'Katzen lernen ihren Namen, und Forschung an Hauskatzen hat gezeigt, dass sie ihn von ähnlich klingenden Wörtern unterscheiden. Was sie damit anfangen, steht auf einem anderen Blatt. Weil die Unterscheidung real, aber feinkörnig ist, trübt ein Name, der einem Haushaltswort oder dem Namen eines anderen Tieres stark ähnelt, das Signal tatsächlich.',
      },
      {
        q: 'Welche Katzennamen sollte ich meiden?',
        a: 'Meide Namen, die den Lauten ähneln, die du im Haus ohnehin benutzt — {{catCues}} — und alles, was dem Namen eines Familienmitglieds oder eines anderen Tieres nahekommt. Katzen ignorieren einen mehrdeutigen Laut eher, als dass sie raten, weshalb ein Name, der sich mit einem Korrekturwort überschneidet, meist ganz ausgeblendet wird.',
      },
      {
        q: 'Kann ich den Katzennamen vor der Wahl anhören?',
        a: 'Ja. Jeder erzeugte Name hat eine Schaltfläche zum Aussprechen, die die in deinem Browser eingebaute Sprachausgabe nutzt — ohne Plug-in, Konto oder Audio-Download. Besonders nützlich ist das bei Namen aus der Mythologie und bei nicht deutschen Namen, wo die Schreibweise wenig über die tatsächliche Aussprache verrät.',
      },
      {
        q: 'Was, wenn ich zwei Kätzchen gemeinsam benenne?',
        a: 'Aktiviere „Zwei Tiere gleichzeitig benennen?“, und der Generator liefert aufeinander abgestimmte Sets statt einer einzelnen Liste. Jedes Set teilt Stil und ähnliche Länge, beginnt aber mit unterschiedlichen Lauten, damit zwei Kätzchen im selben Haushalt nicht beide angerannt kommen — oder dich beide ignorieren — wenn ein Name gerufen wird.',
      },
    ],
  },

  pet: {
    title: 'Haustiernamen mit Bedeutungen',
    description:
      'Haustiernamen für ein Zuhause, in dem es schon Namen gibt. Jeder zeigt seine Bedeutung, wird vorgelesen und gegen Familie, Tiere und Kommandos geprüft.',
    breadcrumb: 'Haustiernamen',
    h1: 'Haustiernamen für Hunde und Katzen',
    answerBox:
      'Ein Haustiername funktioniert, wenn er kurz ist, sich scharf aussprechen lässt und sich von jedem anderen Namen und Kommando im Haushalt unterscheidet. Dieser Generator umfasst {{total}} Hunde- und Katzennamen in {{styleCount}} Stilen, zeigt zu jedem die belegte Bedeutung, liest ihn vor und filtert Namen heraus, die mit deiner Familie, deinen anderen Tieren oder deinen Trainingssignalen kollidieren würden.',
    generator: {
      heading: 'Haustiernamen generieren',
      intro:
        'Wechsle zwischen Hunden, Katzen oder beiden zugleich. Filter, Bedeutungen, Aussprache und Konfliktprüfung funktionieren artübergreifend gleich.',
    },
    prose: {
      heading: 'Ein Tier in einem Haushalt benennen, in dem es schon Namen gibt',
      html: '<p>Der häufigste Fehler bei der Namenswahl ist, isoliert zu entscheiden. Ein Name, der für sich großartig klingt, kann in einem Haus mit einem Jack, einem Zack oder einem Hund, der bereits auf Bailey hört, zum täglichen Problem werden. Tiere reagieren auf Klangmuster, und zwei ähnliche Muster in einem Zuhause bedeuten, dass beide Tiere auf beide Namen reagieren — oder keines zuverlässig auf seinen eigenen.</p><p>Dafür gibt es das Feld „Namen vermeiden, die klingen wie“. Trage jeden Namen ein, den der Haushalt schon nutzt — Menschen, Tiere, sogar den Spitznamen, der über den Garten gerufen wird — und jeder Vorschlag wird per phonetischer Prüfung mit allen verglichen, nicht per Schreibweise. Dieser Unterschied zählt: „Kay“ und „Stay“ teilen am Anfang keinen Buchstaben, kollidieren laut gesprochen aber vollständig.</p><h2>Zwei Tiere gleichzeitig benennen</h2><p>Zwei gemeinsam ankommende Tiere brauchen Namen, die zusammengehören, ohne verwechselbar zu sein. Der Paarmodus übernimmt beide Hälften: Er gruppiert Namen, die einen Stil teilen und innerhalb von zwei Buchstaben derselben Länge liegen, und verwirft anschließend jede Paarung, deren Mitglieder phonetisch nah beieinanderliegen. Stelle die Größe für einen Wurf auf drei, und das Thema trägt über alle drei Namen.</p><h2>Woher diese Namen und Bedeutungen stammen</h2><p>Jeder Name der Liste trägt eine Bedeutung aus belegten sprachwissenschaftlichen und kulturellen Quellen — dokumentierte Etymologien, Mythologie und gesicherte Wortherkünfte. Nichts wird geschätzt oder erfunden, um eine Lücke zu füllen, und die Bedeutung steht neben dem Namen statt hinter einem Aufklapper oder E-Mail-Formular. Mehr zum Vorgehen steht auf der <a href="{{url:about}}">Seite „Über uns“</a>.</p><h2>Artspezifische Hinweise</h2><p>Für Hinweise, die auf ein Tier zugeschnitten sind, nutze den <a href="{{url:dog}}">Hundenamen-Generator</a>, der Namen gegen die vollständige Liste der Trainingskommandos prüft, oder den <a href="{{url:cat}}">Katzennamen-Generator</a>, der die Frequenzen abdeckt, auf die Katzen am besten reagieren. Der <a href="{{url:home}}">Haustiernamen-Generator auf der Startseite</a> erzeugt Namen für beide Arten und behandelt die Stile Fantasy und Lustig ausführlicher.</p>',
    },
    faqHeading: 'Fragen zur Namensfindung',
    faqs: [
      {
        q: 'Wie wählt man am besten einen Haustiernamen?',
        a: 'Wähle einen kurzen Namen, der sich scharf aussprechen lässt, sich von jedem anderen Namen und Kommando im Haushalt unterscheidet und den du auch in der Öffentlichkeit gern laut sagst. Arbeite mit einer gefilterten Liste statt mit einem leeren Blatt, prüfe die Bedeutung vor der Festlegung, und sprich den Namen vor der Entscheidung in Ruflautstärke aus.',
      },
      {
        q: 'Wie benenne ich ein Tier, das in ein Zuhause mit anderen Tieren kommt?',
        a: 'Wähle einen Namen, der mit den bereits vorhandenen Tieren weder Anfangslaut noch Reim teilt. Die vorhandenen Tiere reagieren reflexhaft auf ihren eigenen Namen, und zwei ähnliche Namen in einem Haus bedeuten, dass beide kommen, sobald einer gerufen wird. Trage die Namen der jetzigen Tiere in das Feld „Namen vermeiden, die klingen wie“ ein, und der Generator entfernt die Kollisionen.',
      },
      {
        q: 'Gelten für Hunde und Katzen dieselben Empfehlungen?',
        a: 'Die Grundregel ist für beide gleich — kurz, unterscheidbar, konsequent — aber die Betonung verschiebt sich. Hunde brauchen maximalen Abstand zu Trainingskommandos, weil Kommandos ständig verwendet werden und Mehrdeutigkeit einen langsameren Rückruf kostet. Katzen reagieren am zuverlässigsten auf hohe Laute und ignorieren einen mehrdeutigen Namen eher, als dass sie raten.',
      },
      {
        q: 'Kann ich diesen Generator für ein Tier nutzen, das weder Hund noch Katze ist?',
        a: 'Ja, mit einer Einschränkung: Die {{total}} Namen hier sind für Hunde und Katzen kuratiert, und die automatische Konfliktprüfung nutzt Hunde- und Katzensignale. Die Namen selbst — ihre Bedeutungen, Klänge und Stile — passen ebenso gut zu einem Kaninchen, einem Frettchen oder einem Pferd. Der Längenfilter und der Haushalts-Konfliktfilter gelten für jedes Tier.',
      },
      {
        q: 'Wird gespeichert, was ich in den Generator eingebe?',
        a: 'Nein. Der Generator ist eine statische Website ohne Konten, ohne Datenbank und ohne serverseitige Verarbeitung deiner Eingaben. Die Namen, die du in den Konfliktfilter tippst, werden in deinem Browser verglichen und beim Schließen des Tabs verworfen. Die Datenschutzerklärung legt genau dar, was erhoben wird und was nicht.',
      },
    ],
  },

  /**
   * Gemeinsame Elemente der vier Ratgeber. Sie sind Artikel und keine
   * Werkzeugseiten und tragen deshalb eine Signatur und ein Änderungsdatum.
   */
  guides: {
    bylineLabel: 'Perfect Pet Name Generator',
    updatedLabel: 'Aktualisiert am {{updated}}',
    homeHeading: 'Ratgeber zur Namenswahl',
    homeLead:
      'Das Wort auszusuchen ist der schnelle Teil. Diese vier Ratgeber behandeln alles drumherum: den Namen beibringen, welche Namen ausscheiden sollten, zwei Tiere gleichzeitig benennen und woher die Bedeutungen auf dieser Seite stammen.',
    readMore: 'Ratgeber lesen',
  },

  /** Cookie-Banner. Wird nur dort gezeigt, wo eine Einwilligung nötig ist. */
  consent: {
    title: 'Cookies auf dieser Seite',
    bodyHtml:
      'Wir setzen Cookies ein, um die Nutzung der Seite zu messen und sie über Werbung zu finanzieren. Bei einer Ablehnung funktioniert der Generator genau wie bisher: Alle Filter, die Konfliktprüfung und die Aussprachetaste laufen in beiden Fällen in deinem Browser. Die <a href="{{url:privacy}}">Datenschutzerklärung</a> erklärt die Einzelheiten.',
    accept: 'Akzeptieren',
    reject: 'Ablehnen',
    manage: 'Cookie-Einstellungen',
    ariaLabel: 'Cookie-Einwilligung',
  },

  teach: {
    title: 'Hund oder Katze den eigenen Namen beibringen',
    description:
      'Eine Methode in vier Stufen, damit Welpe oder Kätzchen auf den Namen reagiert: den Klang aufladen, wie oft üben und was das Ganze leise zerstört.',
    breadcrumb: 'Namen beibringen',
    h1: 'Hund oder Katze den eigenen Namen beibringen',
    keywords:
      'Hund Namen beibringen, Namenstraining, Welpen Namen beibringen, Katze Namen beibringen, verbranntes Signal',
    answerBox:
      'Bringe den Namen bei, indem du den Klang mit etwas Gutem verknüpfst, bevor du überhaupt eine Reaktion verlangst: Namen einmal sagen, den Moment markieren, in dem das Tier dich ansieht, belohnen, wiederholen. Fünf bis zehn Wiederholungen, dreimal täglich, in einem ruhigen Raum reichen den meisten Welpen und Kätzchen, um sich innerhalb einer Woche zuverlässig umzudrehen. Der Name ist eine Bitte um Aufmerksamkeit, nie eine Korrektur, und am schnellsten verliert man ihn, wenn man ihn im Ärger benutzt.',
    card: {
      heading: 'Den Namen beibringen',
      body: 'Ein Protokoll in vier Stufen für ein zuverlässiges Kopfdrehen, wie lange es dauern sollte und welche Gewohnheiten es leise zunichtemachen.',
    },
    html: '<h2>Was „den Namen kennen“ wirklich bedeutet</h2><p>Ein Tier lernt seinen Namen nicht als Etikett. Es lernt ihn als Klang, der etwas ankündigt, für das sich das Umdrehen lohnt. Dieser Unterschied ist nicht akademisch — er bestimmt die gesamte Methode. Du bringst dem Tier nicht bei, wer es ist; du baust einen Reflex auf, bei dem ein bestimmtes Geräusch unter allem, was es am Tag hört, zuverlässig bedeutet: <strong>sieh mich an, gleich passiert etwas Gutes</strong>.</p><p>Die praktische Folge ist, dass der Name genau eine Aufgabe hat: dir die Aufmerksamkeit des Tieres zu verschaffen, damit du um etwas anderes bitten kannst. Rückruf, Handtouch, Leine einhaken, den Blick von einem anderen Hund lösen — alles beginnt mit dem Kopfdrehen. Ein Name, der nur halb funktioniert, ist kein Namensproblem, sondern ein Aufmerksamkeitsproblem, und er taucht in jedem weiteren Signal wieder auf, das du danach aufbaust.</p><h2>Die Methode in vier Stufen</h2><h3>Stufe eins: den Klang aufladen</h3><p>Beginne im ruhigsten Raum der Wohnung, ohne andere Tiere, mit etwas, das das Tier wirklich will: kleine, weiche, schnell zu fressende Leckerchen für die meisten Hunde; ein Schleck Nassfutter, eine Lieblingsfederangel oder ein paar Sekunden Kinnkraulen für Katzen. Sag den Namen einmal, in warmem, ruhigem Ton. Sobald ein Ohr zuckt oder der Kopf sich zu dir dreht, markiere es — ein kurzes „ja“, ein Klick oder einfach das Auftauchen des Futters — und gib die Belohnung.</p><p>Passiert zwei, drei Sekunden lang nichts, wiederhole den Namen nicht. Mach ein völlig anderes Geräusch — ein Schnalzen, ein Klopfen auf den Boden — und belohne die Reaktion, die du bekommst. Einen Namen ins Leere zu wiederholen ist der häufigste Fehler, denn das Tier lernt dabei, dass der Name mehrmals ignoriert werden kann, bevor irgendetwas passiert.</p><h3>Stufe zwei: Abstand und Winkel verändern</h3><p>Sobald das Kopfdrehen sofort kommt, verändere deine Position. Sag den Namen vom anderen Ende des Raums, von hinten, aus einer anderen Höhe, auf dem Boden sitzend, im Stehen, aus dem Nebenzimmer. Jede Variante ist für ein Tier tatsächlich neue Information: Ein Signal, das nur im Hocken direkt vor ihm gelernt wurde, bricht oft beim ersten Mal im Stehen zusammen.</p><h3>Stufe drei: verallgemeinern</h3><p>Geh in den Garten, dann in den Hausflur, dann auf den Gehweg, dann in einen ruhigen Park. Ablenkung ist die Achse, auf die es ankommt, und sie sollte so langsam steigen, dass die Reaktion erhalten bleibt. Verlierst du sie, warst du zu schnell: Geh zurück zum letzten funktionierenden Ort und erhöhe in kleineren Schritten. Bei einer Wohnungskatze heißt verallgemeinern: andere Räume, andere Tageszeiten und — am nützlichsten — üben, während die Katze leicht beschäftigt statt schlafend ist.</p><h3>Stufe vier: den Namen schützen</h3><p>Den Namen zu schützen ist die Stufe, die fast alle überspringen, und die einzige, die für immer läuft. Jedes Mal, wenn dem Namen etwas folgt, das dem Tier missfällt, wird der aufgebaute Reflex etwas schwächer. Belohne die Reaktion ein Leben lang unregelmäßig weiter — nicht jedes Mal, aber oft genug, damit der Klang eine Antwort wert bleibt.</p><h2>Wie oft und wie lange</h2><p>Einheiten sollten kurz und häufig sein: fünf bis zehn Wiederholungen, zwei- bis dreimal täglich, und aufhören, solange das Tier noch mehr will. Zehn Minuten Drill sind schlechter als dreimal neunzig Sekunden, denn ein müdes oder gelangweiltes Tier lernt, dass der Name Langeweile ankündigt.</p><p>Ein Welpe oder Kätzchen ohne schlechte Vorgeschichte dreht sich meist innerhalb von drei bis sieben Tagen zuverlässig um und hält der leichten Ablenkung nach zwei bis vier Wochen stand. Ein erwachsenes Tier aus dem Tierschutz mit unbekannter Vorgeschichte braucht länger, und ein Tier, das seinen alten Namen im Zorn gehört hat, fährt mit einem neuen oft besser — ein völlig guter Grund für eine Umbenennung.</p><h2>Was das Namenstraining leise zerstört</h2><ul><li><strong>Den Namen als Korrektur benutzen.</strong> „Bailey!“, quer durch den Raum gerufen, während etwas zerkaut wird, lehrt Bailey, dass dieser Klang manchmal Ärger ankündigt. Trainer nennen das ein verbranntes Signal. Nimm „äh-äh“, „aus“ oder geh einfach hin und unterbrich — nur nicht den Namen.</li><li><strong>Mit dem Namen rufen für Dinge, die das Tier hasst.</strong> Krallenschneiden, Ohrentropfen, Transportbox, Baden, Ende des Spaziergangs. Hol das Tier stattdessen ab oder bring ihm dafür ein eigenes Signal bei.</li><li><strong>Ihn wiederholen.</strong> „Bailey. Bailey. Bailey!“ lehrt, dass die ersten beiden Geräusch sind.</li><li><strong>Fünfzehn Kosenamen.</strong> Nimm einen Namen und höchstens einen Spitznamen, bis die Reaktion sitzt. Bailey, Bay-Bay, Bailey-Boo und Herr B sind vier verschiedene Klänge für ein Tier, das noch keinen davon kennt.</li><li><strong>Ein Name, der mit einem Kommando kollidiert.</strong> Klingt der Name wie ein Signal — {{dogCommandsShort}} und Ähnliches —, soll das Tier täglich zwei fast identische Reize trennen. Das lässt sich vor der Entscheidung lösen, und deshalb prüfen die Generatoren dieser Seite es automatisch.</li></ul><h2>Katzen: gleicher Mechanismus, andere Währung</h2><p>Katzen lernen Namenserkennung genauso wie Hunde; veröffentlichte Arbeiten zur Hauskatze haben gezeigt, dass sie ihren eigenen Namen von ähnlich klingenden Wörtern unterscheiden. Anders sind Belohnung und Erwartung. Futter wirkt, aber auch eine bestimmte Art von Aufmerksamkeit, und das ehrliche Ziel ist bei den meisten Katzen ein drehendes Ohr und ein Blick, nicht der herbeieilende Rückruf eines Hundes.</p><p>Übe vor den Mahlzeiten statt danach, halte die Einheiten unter einer Minute und hör beim ersten Schwanzzucken auf. Katzen reagieren außerdem besser auf Namen mit hellen, hochfrequenten Lauten — das lange „i“ in Mimi, das harte k in Kiko —, weshalb kurze Namen mit diesen Tönen meist am besten funktionieren.</p><h2>Ein Tier aus dem Tierschutz oder ein erwachsenes Tier umbenennen</h2><p>Umbenennen ist einfacher als gedacht, denn auch der alte Name war nur ein Klang. Baue eine Woche lang eine Brücke: Sag den neuen Namen, unmittelbar gefolgt vom alten, belohne die Reaktion und lass den alten nach ein paar Tagen weg. Teilt der neue Name die Vokalform des alten — Suki für Sushi, Mattie für Maggie —, ist die Brücke noch kürzer, auch wenn man sicher sein sollte, dass am alten Namen keine unglückliche Geschichte hängt, bevor man ihn absichtlich aufgreift.</p>',
    faqHeading: 'Fragen zum Namenstraining',
    faqs: [
      {
        q: 'Wie lange braucht ein Welpe, um seinen Namen zu lernen?',
        a: 'Die meisten Welpen drehen sich bei kurzen Einheiten zweimal täglich innerhalb von drei bis sieben Tagen in einem ruhigen Raum zuverlässig zum Namen um und halten die Reaktion nach zwei bis vier Wochen auch bei leichter Ablenkung. Der Fortschritt hängt weit mehr davon ab, wie beständig der Name etwas Gutes ankündigt, als vom Alter des Welpen oder der Übungsdauer.',
      },
      {
        q: 'Soll ich den Namen wiederholen, wenn mein Tier nicht reagiert?',
        a: 'Nein. Wiederholen lehrt das Tier, dass die ersten Male folgenlos ignoriert werden können. Kommt innerhalb von zwei bis drei Sekunden keine Reaktion, nutze ein anderes Geräusch wie ein Schnalzen oder ein Klopfen auf den Boden, belohne die Reaktion, die du bekommst, und mach die nächste Wiederholung leichter, indem du näher gehst oder eine Ablenkung entfernst.',
      },
      {
        q: 'Darf ich den Namen meines Tieres zum Schimpfen benutzen?',
        a: 'Besser nicht. Den Namen zum Korrigieren zu benutzen macht ihn zu einem Signal, das manchmal Ärger ankündigt — Trainer sprechen von einem verbrannten Signal —, und das Tier beginnt zu zögern, bevor es sich umdreht. Halte für unerwünschtes Verhalten ein eigenes Unterbrechersignal wie "äh-äh" oder "aus" bereit und reserviere den Namen für die Bitte um Aufmerksamkeit.',
      },
      {
        q: 'Lernen Katzen wirklich ihren Namen?',
        a: 'Ja. Hauskatzen können ihren eigenen Namen von ähnlich klingenden Wörtern unterscheiden und lernen ihn über denselben Verknüpfungsprozess wie Hunde. Das realistische Ziel ist ein anderes: Bei den meisten Katzen sind ein zuverlässig drehendes Ohr und ein Blick bereits ein Erfolg, und Einheiten wirken am besten unter einer Minute, vor dem Fressen und beim ersten Zeichen von Desinteresse beendet.',
      },
      {
        q: 'Wie benenne ich einen Hund oder eine Katze aus dem Tierschutz um?',
        a: 'Baue etwa eine Woche lang eine Brücke: Sag den neuen Namen, hänge sofort den alten an und belohne die Reaktion. Lass den alten Namen nach einigen Tagen weg und belohne die Reaktion auf den neuen allein. Umbenennen ist meist unkompliziert und lohnt sich besonders, wenn der frühere Name im Zorn benutzt wurde.',
      },
    ],
    related: {
      heading: 'Wie es weitergeht',
      html: '<p>Noch am Aussuchen? Der <a href="{{url:dog}}">Hundenamen-Generator</a> und der <a href="{{url:cat}}">Katzennamen-Generator</a> prüfen jeden Vorschlag gegen die Kommandos, die dein Tier lernen muss, und nehmen die schwerste Version dieses Problems von vornherein heraus. Vor der Entscheidung lohnt sich ein Blick darauf, welche <a href="{{url:avoid}}">Namen zu vermeiden</a> sind, und wenn zwei Tiere zusammen einziehen, worin sich <a href="{{url:pairs}}">zwei Tiere benennen</a> vom zweimaligen Benennen unterscheidet.</p>',
    },
  },

  avoid: {
    title: 'Haustiernamen, die man vermeiden sollte',
    description:
      'Die Namensarten, die später Ärger machen: Kollisionen mit Kommandos, mit dem Haushalt, ungewollte Kurzformen und Scherze mit kurzer Haltbarkeit.',
    breadcrumb: 'Namen vermeiden',
    h1: 'Haustiernamen, die man vermeiden sollte',
    keywords:
      'Haustiernamen vermeiden, Hundenamen vermeiden, Katzennamen vermeiden, Namen die wie Kommandos klingen, schlechte Tiernamen',
    answerBox:
      'Vermeide Namen, die wie ein Kommando klingen, das du beibringen willst, Namen, die mit einer Person oder einem Tier im Haushalt kollidieren, Namen, die du im Wartezimmer nicht laut gerufen hören möchtest, und Namen, deren Kurzform du nicht bewusst gewählt hast. Fast jedes Namensbedauern fällt in eine dieser vier Kategorien, und alle vier zeigen sich in rund dreißig Sekunden, wenn man die engere Auswahl laut ausspricht.',
    card: {
      heading: 'Namen vermeiden',
      body: 'Vier Kategorien, die Monate später Ärger machen: Kollisionen mit Kommandos, mit dem Haushalt, ungewollte Kurzformen und kurzlebige Scherze.',
    },
    html: '<h2>1. Namen, die wie ein Kommando klingen</h2><p>Das ist die Kategorie mit messbaren Kosten. Ein Hund lernt Signale als Klangmuster, und zwei Muster, die sich um einen einzigen Laut unterscheiden, sind wirklich schwer auseinanderzuhalten — besonders auf Distanz, draußen, über Wind und Verkehr hinweg, mit erhobener Stimme. „Bo“ gegen „no“, „Kit“ gegen „sit“, „Kay“ gegen „stay“, „Dan“ gegen „down“: Jedes dieser Paare verlangt dem Tier eine Unterscheidung ab, in der es keinen Grund hat, gut zu sein.</p><p>Was das kostet, ist nicht der Name, sondern das Kommando. Jede mehrdeutige Wiederholung bremst das Signal, und gebremst wird meist der Rückruf — genau der, auf den es ankommt, wenn ein Tor offen steht. Zu prüfen sind die Kommandos, die du wirklich aufbaust: {{dogCommandsShort}} und der Rest des Grundrepertoires, dazu alles, was im Haushalt gedankenlos gesagt wird, etwa „lass es“, „warte“ oder „aus“.</p><p>Die Falle ist der Reim, nicht die Schreibweise. „Kay“ und „stay“ teilen keinen Anfangsbuchstaben und fallen laut gesprochen vollständig zusammen — deshalb übersieht ein Vergleich nach Schriftbild den größten Teil des Problems. Die Generatoren hier vergleichen stattdessen phonetisch, gegen {{dogCommandCount}} gängige Kommandos.</p><h2>2. Namen, die mit dem Haushalt kollidieren</h2><p>Beim zweiten Tier im Haus wird es ernst. Ein Hund, der mit einem Bailey lebt, tut sich mit Hayley schwer; eine Katze in einem Haushalt mit einem Jake tut sich mit Jade schwer. Kindernamen, der Name des Partners, die wöchentlich zu Besuch kommende Großmutter und der Spitzname, der tatsächlich benutzt wird, zählen alle — entscheidend ist der Name, der durch den Garten gerufen wird, nicht der aus dem Ausweis.</p><p>Zwei Tiere mit ähnlichen Namen sind der schlimmste Fall, denn beide lernen, auf einen mehrdeutigen Klang zu reagieren, und du verlierst die Möglichkeit, eines von beiden anzusprechen. Wenn schon ein Milo da ist, streiche Miles, Marlo, Mylo und Nilo, bevor du anfängst.</p><h2>3. Namen, die sich anders abkürzen, als du wolltest</h2><p>Lange Namen werden gekürzt. Das ist kein Vielleicht: Herkules wird Herc, Maximilian wird Max, Bartholomäus wird Bart, meist binnen zwei Wochen und meist nicht von dir. Der Name, den du täglich benutzt, ist die Kurzform — also lohnt es sich, sie bewusst zu wählen, statt sie zu entdecken.</p><p>Sag den vollen Namen zehnmal in Rufstärke und hör zu, was dein Mund daraus macht. Ist das Ergebnis eine Form, die dir missfällt, oder eine, die mit einem Kommando kollidiert, ist der lange Name die falsche Wahl, so gut er auf dem Papier auch aussieht. Das ist auch das praktische Argument für den Längenfilter der Generatoren: Auf eine gravierte Marke passen etwa acht Zeichen pro Zeile, bevor die Schrift schrumpft, und gekürzt wird der Name, der mit der Telefonnummer um Platz konkurriert.</p><h2>4. Scherze mit kurzer Haltbarkeit</h2><p>Lustige Namen sind eine legitime Kategorie, und es gibt hier {{funnyCount}} davon, aber der Witz muss bestimmte Prüfungen überstehen. Er wird von einer Empfangskraft in einem vollen Wartezimmer vorgelesen. Er wird auf eine Chipregistrierung, eine Versicherungspolice und ein Pensionsformular geschrieben. Er wird von dir in einem öffentlichen Park gerufen, womöglich minutenlang, während Leute zusehen.</p><p>Namen, die auf einer Anzüglichkeit, einer öffentlichen Person oder einem Bezug zu genau einem Jahr beruhen, scheitern meist an mindestens einer davon. Die lustigen Namen, die halten, sind die, deren Witz aus der Lücke zwischen Name und Tier entsteht — ein Chihuahua namens Frikadelle, ein riesiger gemütlicher Kater namens Chonk —, denn diese Lücke veraltet nicht.</p><h2>Vier kleinere, die man kennen sollte</h2><ul><li><strong>Namen, die anderswo etwas Unglückliches bedeuten.</strong> Ein Name, der in einer Sprache wunderbar klingt, liest sich in einer anderen gelegentlich schlecht, und das ist bei fremdsprachiger Herkunft zehn Sekunden Prüfung wert. Genau deshalb zeigt jeder Name auf dieser Seite seine belegte Bedeutung.</li><li><strong>Namen, die man schwer buchstabiert.</strong> Du buchstabierst ihn dem Tierarzt, dem Hundesalon, der Versicherung und der Pension. Ein Name, den man jedes Mal zweimal buchstabieren muss, ist eine kleine Steuer über fünfzehn Jahre.</li><li><strong>Den Namen eines früheren Tieres wiederverwenden.</strong> Verbreitet, verständlich und zweimal durchdacht besser: Es lädt zu einem Vergleich ein, den das neue Tier nicht gewinnen kann, und es kann den Namen an genau den Tagen schwerer aussprechbar machen, an denen er es ohnehin ist.</li><li><strong>Namen, die auf einem weichen, verklingenden Laut enden.</strong> Namen, die auf einem weichen Vokal oder Konsonanten verklingen, tragen draußen schlecht. Ein klarer Vokal oder ein knapper Konsonant am Ende — das „-o“ in Milo, das harte „-t“ in Bandit — schneidet weit besser durch Wind und Entfernung.</li></ul><h2>Der Dreißig-Sekunden-Test</h2><p>Mach das vor der Entscheidung mit deiner engeren Auswahl. Stell dich an ein Ende von Wohnung oder Garten und ruf jeden Namen dreimal in der Lautstärke, die du im Park nutzen würdest. Sag ihn dann direkt nach jedem Kommando, das du beibringen willst — „sit, Kit“, „stay, Kay“ — und hör auf die Kollision. Und dann stell dir vor, ein Fremder liest ihn im Wartezimmer vor. Was alle drei übersteht, ist ein Name, mit dem du leben kannst.</p>',
    faqHeading: 'Fragen zu Namen, die man vermeiden sollte',
    faqs: [
      {
        q: 'Welche Hundenamen sollte ich vermeiden?',
        a: 'Vermeide Namen, die sich auf die Kommandos reimen, die du beibringen willst, oder ihnen stark ähneln — {{dogCommandsShort}} und ähnliche Signale — sowie Namen, die einer Person oder einem anderen Tier im Haushalt nahekommen. Vermeide außerdem lange Namen, deren Kurzform du nicht bewusst gewählt hast, denn diese Kurzform benutzt du täglich.',
      },
      {
        q: 'Warum ist es ein Problem, wenn ein Name wie ein Kommando klingt?',
        a: 'Weil das Tier beides als Klangmuster lernt und zwei Muster, die ein einziger Laut trennt, auf Distanz oder im Freien schwer zu unterscheiden sind. Jede mehrdeutige Wiederholung bremst eher das Kommando als den Namen, und betroffen ist meistens der Rückruf, also genau das Signal, dessen Versagen am teuersten ist.',
      },
      {
        q: 'Dürfen zwei Tiere im selben Haushalt ähnliche Namen haben?',
        a: 'Besser nicht. Bei ähnlichen Namen reagieren beide Tiere auf einen mehrdeutigen Klang, du verlierst also die Möglichkeit, eines gezielt anzusprechen, und beide brauchen länger, um den eigenen Namen zu lernen. Achte auf unterschiedliche Anfangslaute und einen klaren Unterschied in der Vokalform, nicht nur auf eine andere Schreibweise.',
      },
      {
        q: 'Sind lange Tiernamen eine schlechte Idee?',
        a: 'Nicht grundsätzlich, aber sie werden im Alltag fast immer gekürzt, sodass die eigentliche Wahl der Kurzform gilt und nicht der Vollform. Sag den langen Namen mehrmals in Rufstärke, hör zu, wozu er zusammenfällt, und prüfe, ob dir das Ergebnis gefällt und ob es mit keinem Kommando kollidiert.',
      },
      {
        q: 'Woran erkenne ich, ob ein lustiger Name altert?',
        a: 'Teste ihn an drei Orten: vorgelesen von einer Empfangskraft in einem vollen Wartezimmer, geschrieben auf Chipregistrierung und Versicherungsformular, und von dir in einem öffentlichen Park gerufen. Scherze über Anzüglichkeiten, öffentliche Personen oder ein einzelnes Jahr scheitern meist an einem davon, während Humor aus dem Kontrast zwischen Name und Tier hält.',
      },
    ],
    related: {
      heading: 'Wie es weitergeht',
      html: '<p>Der <a href="{{url:dog}}">Hundenamen-Generator</a> und der <a href="{{url:cat}}">Katzennamen-Generator</a> wenden die ersten beiden Regeln dieser Seite von selbst an: Gib die Namen aus deinem Haushalt ein, und jede Kollision wird entfernt oder markiert. Ist der Name gewählt, dauert <a href="{{url:teach}}">das Beibringen</a> etwa eine Woche, und wenn zwei Tiere gleichzeitig einziehen, deckt <a href="{{url:pairs}}">zwei Tiere benennen</a> die zusätzliche Bedingung ab.</p>',
    },
  },

  pairs: {
    title: 'Zwei Tiere gleichzeitig benennen',
    description:
      'Ein eingespieltes Paar oder einen Wurf zu benennen ist nicht zweimal benennen: die drei Bedingungen für ein Namenspaar und die Themen, die halten.',
    breadcrumb: 'Zwei Tiere benennen',
    h1: 'Zwei Tiere gleichzeitig benennen',
    keywords:
      'zwei Tiere benennen, Namen für ein Paar, Wurfgeschwister Namen, passende Tiernamen, Namen für zwei Hunde, Namen für zwei Katzen',
    answerBox:
      'Ein Namenspaar braucht drei Dinge gleichzeitig: eine Verbindung, die beide als Einheit lesbar macht, deutlich verschiedene Anfangslaute und Längen, die höchstens zwei Buchstaben auseinanderliegen. Das Thema ist der einfache Teil, in den die meisten zu viel investieren; ob du ein Tier rufen kannst, ohne dass beide kommen, entscheidet die Unterscheidbarkeit — und genau diese Bedingung wird übergangen.',
    card: {
      heading: 'Zwei Tiere benennen',
      body: 'Warum Paare und Wurfgeschwister Namen brauchen, die zugleich verbinden und trennen, und welche Themen beides schaffen.',
    },
    html: '<h2>Warum zwei ein anderes Problem ist</h2><p>Ein Tier zu benennen heißt, einen Namen zu suchen, der dir gefällt. Zwei zu benennen ist ein Nebenbedingungsproblem, und die Bedingungen ziehen gegeneinander: Die Namen sollen zusammengehören, und sie sollen unverwechselbar sein. Die meisten Namenspaare scheitern am zweiten Punkt, weil der erste der Teil ist, über den man gern nachdenkt.</p><p>Das Scheitern ist konkret und keineswegs subtil. Zwei Tiere, deren Namen Anfangslaut und Silbenzahl teilen, lernen beide, auf etwas dazwischen zu reagieren: Du rufst eines, beide kommen, und keines antwortet wirklich auf seinen eigenen Namen. In einem Haushalt mit zwei Tieren ist das ein täglicher Preis, und er ist genau dann am höchsten, wenn es darauf ankommt: an der Tür, am Tor, zur Fütterung.</p><h2>Die drei Bedingungen</h2><h3>Eine Verbindung, und zwar leicht</h3><p>Die Verbindung darf viel leichter sein, als man annimmt. Gleiche Herkunft, gleiche Epoche, gleiches Feld, gleiches Register: Nero und Cassius sind offensichtlich ein Paar, ohne dass einer die Hälfte eines abgestimmten Scherzes wäre. Zu vermeiden ist eine so enge Bindung, dass die beiden Namen zu einer Einheit werden — Salz und Pfeffer, Yin und Yang, Ding eins und Ding zwei —, denn diese Formel reist schlecht, wenn die Tiere je getrennt werden, und das ist bei einem eingespielten Paar eine reale Überlegung, in dem eines das andere um Jahre überleben kann.</p><h3>Unterschiedliche Anfangslaute</h3><p>Das ist die Bedingung, die die eigentliche Arbeit leistet. Der erste Laut eines Namens trägt den größten Teil der Unterscheidung, zwei Namen sollten also nicht mit demselben Konsonanten oder derselben Vokalform beginnen. Bella und Bailey ist der klassische Fehler: gleicher Anfang, gleiche Länge, gleiches Betonungsmuster. Bella und Otto ist dasselbe ästhetische Register ohne jede Verwechslungsgefahr.</p><p>Der Endreim ist die Variante zweiter Ordnung desselben Problems. Maisie und Daisy unterscheiden sich vorn, fallen aber auf jede Distanz zusammen. Ziele auf Namen, die sich an beiden Enden unterscheiden, wenn möglich — und am Anfang mindestens.</p><h3>Ähnliche Länge, ähnlicher Rhythmus</h3><p>Namen mit ein bis zwei Buchstaben Unterschied, idealerweise mit gleicher Silbenzahl, lesen sich als bewusstes Paar und nicht als Zufall. Milo und Otis funktioniert; Milo und Bartholomäus wirken wie zwei zusammenhanglose Entscheidungen, und in der Praxis wird der lange zu etwas gekürzt, das vielleicht nicht mehr zum Paar passt.</p><h2>Themen, die halten</h2><p>Die Themen, die überleben, haben genug Mitglieder für eine echte Suche und genug innere Vielfalt, dass man nicht zu zwei ähnlich klingenden Namen gezwungen wird. Mythologie einer einzigen Tradition, Sternbilder, Bäume, Gewürze, Jazzmusiker, Berge, Flüsse, Maler, Wortgruppen einer Herkunft — all das liefert Dutzende Kandidaten im gleichen Register, sodass du dir das Aussortieren der Kollisionen leisten kannst.</p><p>Die Themen, die nach hinten losgehen, sind geschlossene Paare: zwei Hälften einer Redewendung, zwei stets gemeinsam genannte Figuren oder alles, wo ein Name ohne den anderen bedeutungslos ist. Ein Jahr lang charmant, danach unangenehm.</p><h2>Wurfgeschwister und eingespielte Paare</h2><p>Gemeinsam einziehende Wurfgeschwister sind der sauberste Fall: Du wählst beide Namen auf einmal und kannst das ganze Paar optimieren, statt einen Namen um einen bestehenden herumzubauen. Nutze das. Wende die Bedingungen auf das Paar als Ganzes an und sei bereit, einen Namen, der dir gefällt, für einen aufzugeben, der besser trennt.</p><p>Eingespielte Paare — gemeinsam vermittelte, bereits aneinander gebundene Tiere — bringen eine zusätzliche Überlegung mit. Sie werden von allen um sie herum oft als Einheit gerufen, gefüttert und bewegt, was die Unterscheidbarkeit wichtiger macht statt weniger wichtig, weil die Umgebung sie ohnehin schon vermischt. Kommt eines bereits benannt an, behandle diesen Namen als fest und suche darum herum.</p><h2>Ein zweites Tier zu einem vorhandenen dazunehmen</h2><p>Hier ist der erste Name eine harte Bedingung, und die Aufgabe besteht darin, einen zweiten zu finden, der daneben passt, ohne zu kollidieren. Nimm den vorhandenen Namen und streiche alles, was seinen Anfangslaut teilt, alles, was sich darauf reimt, und alles, was in der Mitte nur einen Laut entfernt ist. Suche dann die Verbindung — und bleib dabei entspannt, denn eine lose thematische Verbindung wirkt beabsichtigt, und eine enge ist die Verwechslung nicht wert, die sie einkauft.</p><h2>Drei oder mehr</h2><p>Drei Namen vervielfachen die paarweisen Prüfungen, statt sie zu addieren: Jeder Name muss sich von jedem anderen trennen, nicht nur vom zuletzt gewählten. In der Praxis ist ein Thema mit breitem Feld und drei verschiedenen Anfangslauten die ganze Methode, und es lohnt sich, die drei Namen aufzuschreiben und jeden laut zu rufen, während man die beiden anderen im Kopf hat.</p><p>Der Paarmodus der Generatoren dieser Seite macht genau das: Er baut Sets aus zwei oder drei Namen, die einen Stil teilen, in der Länge nah beieinanderliegen, mit verschiedenen Lauten beginnen und untereinander dieselbe phonetische Prüfung bestehen, die der Konfliktfilter gegen deinen Haushalt anwendet.</p>',
    faqHeading: 'Fragen zum Benennen von zwei Tieren',
    faqs: [
      {
        q: 'Sollten zwei Tiere zusammenpassende Namen haben?',
        a: 'Eine leichte thematische Verbindung funktioniert gut, ein eng abgestimmtes Paar meist nicht. Namen gleicher Herkunft, Epoche oder Sachwelt lesen sich als bewusstes Set und bleiben dabei eigenständig, während zwei Hälften einer Redewendung wie Salz und Pfeffer ihren Sinn verlieren, sobald die Tiere getrennt werden — besonders wichtig bei einem Paar, in dem eines das andere überlebt.',
      },
      {
        q: 'Wann sind zwei Tiernamen zu ähnlich?',
        a: 'Ein gemeinsamer Anfangslaut ist das Hauptproblem, weil der erste Laut den größten Teil der Unterscheidung trägt — Bella und Bailey ist das klassische Beispiel. Reimende Endungen wie Maisie und Daisy sind das zweite, da die Namen auf Distanz zusammenfallen. Ziele auf verschiedene Anfangslaute und möglichst auch verschiedene Endungen.',
      },
      {
        q: 'Wie benenne ich ein zweites Tier, wenn das erste schon einen Namen hat?',
        a: 'Behandle den vorhandenen Namen als fest und suche darum herum. Streiche alles, was seinen Anfangslaut teilt, alles, was sich darauf reimt, und alles, was ihm in der Mitte nahekommt, und suche dann eine lose thematische Verbindung. Eine entspannte Verbindung wirkt beabsichtigt, ohne die Verwechslung einzukaufen, die eine enge mitbringt.',
      },
      {
        q: 'Brauchen Wurfgeschwister Namen nach einem Thema?',
        a: 'Ein Thema ist nicht nötig, aber beide Namen auf einmal zu wählen ist ein echter Vorteil, den man nutzen sollte. Da keiner festgelegt ist, kannst du das ganze Set auf Unterscheidbarkeit hin optimieren, statt einen Namen um einen anderen herumzubauen — was meist heißt, einen Namen, der dir gefällt, für einen sauberer trennenden aufzugeben.',
      },
      {
        q: 'Wie benenne ich drei Tiere, ohne sie zu verwechseln?',
        a: 'Jeder Name muss sich von jedem anderen trennen, drei Namen bedeuten also drei paarweise Prüfungen und nicht zwei aufeinanderfolgende Entscheidungen. Nimm ein Thema mit breitem Feld, gib jedem Namen einen anderen Anfangslaut, schreibe dann alle drei auf und rufe jeden laut, während du an die beiden anderen denkst.',
      },
    ],
    related: {
      heading: 'Wie es weitergeht',
      html: '<p>Schalte den Paarmodus im <a href="{{url:pet}}">Haustiernamen-Generator</a> ein, damit die Sets für dich gebaut und geprüft werden, oder nutze die Generatoren für <a href="{{url:dog}}">Hunde</a> und <a href="{{url:cat}}">Katzen</a> für eine einzelne Art. Vor der Entscheidung lohnt die längere Liste der <a href="{{url:avoid}}">Namen, die man vermeiden sollte</a>, und <a href="{{url:teach}}">die Namen beizubringen</a> fällt danach leichter, wenn beide wirklich verschieden sind.</p>',
    },
  },

  meanings: {
    title: 'Woher die Namensbedeutungen stammen',
    description:
      'Wie die Bedeutungen hier belegt werden: welche Quellen zählen, wie mit umstrittenen Etymologien umgegangen wird und warum nichts erfunden ist.',
    breadcrumb: 'Namensbedeutungen',
    h1: 'Woher die Namensbedeutungen stammen',
    keywords:
      'Bedeutung von Tiernamen, Namensherkunft, Bedeutung von Hundenamen, Bedeutung von Katzennamen, redaktionelle Grundsätze, Etymologie',
    answerBox:
      'Jeder der {{total}} Namen auf dieser Seite trägt eine Bedeutung aus einer belegten Quelle: eine dokumentierte Etymologie, eine bezeugte mythologische oder literarische Gestalt oder eine schlichte Wortherkunft. Wo Quellen auseinandergehen, sagt der Eintrag, worum es sich handelt, statt einen Sieger zu küren. Keine Bedeutung wird hier aus dem Klang eines Namens abgeleitet, und kein Name steht mit einer erfundenen Bedeutung in der Liste.',
    card: {
      heading: 'Woher die Bedeutungen stammen',
      body: 'Der Belegmaßstab hinter jedem Namen: was als dokumentiert gilt, wie mit Widersprüchen umgegangen wird und wie man einen Fehler meldet.',
    },
    html: '<h2>Warum es diese Seite gibt</h2><p>Inhalte zu Namensbedeutungen sind ungewöhnlich leicht falsch zu machen und ungewöhnlich schwer zu prüfen. Eine an einer Stelle erfundene Bedeutung wird binnen eines Jahres auf ein Dutzend weitere Seiten kopiert und wirkt danach gut belegt, schlicht weil sie überall steht. Da die neben einem Namen angezeigte Bedeutung eines von zwei Dingen ist, über die diese Seite dich entscheiden lässt, schien es angebracht, schriftlich festzuhalten, welchem Maßstab diese Bedeutungen genügen müssen.</p><h2>Was als Quelle zählt</h2><p>Ein Name steht hier nur, wenn seine Bedeutung auf mindestens eines der Folgenden zurückgeht:</p><ul><li><strong>Eine dokumentierte Etymologie.</strong> Ein Name mit belegter Herleitung in einer etablierten Sprache — Hebräisch, Griechisch, Latein, Altnordisch, Germanisch, Irisch, Japanisch und so weiter —, bei dem Wurzel und Sinn bezeugt und nicht aus Ähnlichkeit rekonstruiert sind.</li><li><strong>Eine bezeugte Gestalt.</strong> Namen aus Mythologie, Folklore, Geschichte oder veröffentlichter Literatur, bei denen die angegebene Bedeutung ist, wer oder was diese Gestalt war, und keine Behauptung über die Wortwurzel. Odin, Athene, Fenrir und Gandalf werden so beschrieben, weil genau das über sie dokumentiert ist.</li><li><strong>Eine schlichte Wortherkunft.</strong> Namen, die einfach Wörter sind — Pepper, Biscuit, Shadow, Willow —, bei denen die Bedeutung der gewöhnliche Wortsinn ist und die Herkunft in allgemeinen Nachschlagewerken verzeichnet steht.</li><li><strong>Eine belegte Koseform.</strong> Kurzformen, deren Vollname eine dokumentierte Bedeutung hat, und zwar als solche gekennzeichnet: Abby steht als Kurzform von Abigail, mit der Bedeutung von Abigail statt einer eigenen.</li></ul><h2>Was nicht zählt</h2><ul><li><strong>Herleitung nach Klangähnlichkeit.</strong> Dass ein Name einem Wort irgendeiner Sprache ähnelt, heißt nicht, dass er davon abstammt. Ähnlichkeit ist der Anfang der meisten erfundenen Etymologien.</li><li><strong>Bedeutung durch Assoziation.</strong> Ein bei schwarzen Katzen beliebter Name bedeutet nicht „schwarz“, und ein bei großen Hunden häufiger Name bedeutet nicht „stark“.</li><li><strong>Zirkuläre Belege.</strong> Eine Bedeutung, die nur auf Namenslisten auftaucht, die einander offenkundig abschreiben, gilt als unbelegt.</li><li><strong>Erfindung.</strong> Lässt sich keine Bedeutung belegen, bleibt der Name aus der Liste, statt eine plausibel klingende zu bekommen. Deshalb fehlen einige durchaus gute Tiernamen.</li></ul><h2>Umstrittene und mehrfache Bedeutungen</h2><p>Etymologien widersprechen einander öfter, als Namenslisten zugeben. Namen wechseln zwischen Sprachen, sammeln Volksetymologien auf und werden von den entlehnenden Kulturen umgedeutet; häufig gibt es keine einzelne richtige Antwort. Wo Quellen kollidieren, gibt der Eintrag die bestbezeugte Lesart und benennt, um welche Art Sache es sich handelt — eine Kurzform, eine mythologische Gestalt, ein Wort einer bestimmten Sprache —, statt eine Deutung als feststehende Tatsache auszugeben.</p><p>Die praktische Folge steht auch auf der <a href="{{url:terms}}">Seite mit den AGB</a>, und sie sei hier wiederholt: Keine Bedeutung auf dieser Seite beansprucht, die endgültige oder einzige Deutung eines Namens zu sein. Ist dir die Bedeutung eines Namens besonders wichtig — ein Gedenkname, ein Name mit religiöser oder kultureller Bedeutung, ein Name aus einer Sprache, die du nicht sprichst —, prüfe sie an einer Quelle deines Vertrauens, bevor du dich festlegst.</p><h2>Bedeutungen sind für dich, nicht für das Tier</h2><p>Das gehört klar gesagt, weil es das Gewicht ändert, das die Bedeutung haben sollte. Ein Tier lernt seinen Namen als Klang und hat keinen Zugang zu seinem Sinn. Die Bedeutung zählt, weil du dieses Wort ein Jahrzehnt oder länger mehrmals täglich sagen wirst, und weil das Wissen, dass Luna lateinisch für Mond steht oder Loki der nordische Trickster-Gott ist, oft aus einer Auswahl von sechs eine Entscheidung macht.</p><p>Deshalb stehen die Bedeutungen hier auch offen auf der Karte und nicht hinter einem Aufklapper, einem Konto oder einem E-Mail-Formular. Eine Bedeutung, die man sich erarbeiten muss, ist eine Bedeutung, die man nicht nachschlägt.</p><h2>Wie die Liste gepflegt wird</h2><p>Die Namensliste ist eine statische Datei mit {{dogCount}} Hunde- und {{catCount}} Katzennamen — insgesamt {{total}} eindeutige Namen, da ein für beide Arten geeigneter Name je einmal pro Art gespeichert wird. Namen kommen in Chargen dazu, und jeder Zugang muss mit Bedeutung eintreffen; ein Name ohne belegte Bedeutung wird nicht aufgenommen und wartet auch nicht auf eine.</p><p>Korrekturen sind der wichtigste Weg, auf dem Fehler auffallen, und sie sind wirklich willkommen. Wirkt eine Bedeutung hier falsch, schick den Namen und, falls vorhanden, eine Quelle deines Vertrauens an <a href="mailto:{{email}}">{{email}}</a> oder über die <a href="{{url:contact}}">Kontaktseite</a>. Korrekturen, die standhalten, werden in der Datendatei umgesetzt, aus der jede Seite in jeder Sprache liest — eine Korrektur landet also überall auf einmal.</p>',
    faqHeading: 'Fragen zu Namensbedeutungen',
    faqs: [
      {
        q: 'Woher stammen die Namensbedeutungen auf dieser Seite?',
        a: 'Jede Bedeutung geht auf eine belegte Quelle zurück: eine dokumentierte Etymologie in einer etablierten Sprache, eine bezeugte Gestalt aus Mythologie, Folklore, Geschichte oder veröffentlichter Literatur, eine schlichte Wortherkunft oder eine Koseform, deren Vollname eine dokumentierte Bedeutung hat. Namen ohne belegbare Bedeutung bleiben draußen, statt eine erfundene zu erhalten.',
      },
      {
        q: 'Sind die Namensbedeutungen garantiert richtig?',
        a: 'Nein, und keine Quelle zu Namensbedeutungen kann das ehrlich behaupten. Etymologien sind umstritten, Namen wechseln zwischen Sprachen und sammeln neue Deutungen auf, und oft gibt es keine feststehende Antwort. Jeder Eintrag gibt die bestbezeugte Lesart; ist dir die Bedeutung besonders wichtig, prüfe sie vor der Entscheidung an einer Quelle deines Vertrauens.',
      },
      {
        q: 'Warum fehlen einige gängige Tiernamen?',
        a: 'Meist, weil sich für sie keine Bedeutung belegen ließ. Ein Name wird nur mit belegter Bedeutung aufgenommen, ein beliebter Name ohne verlässliche Grundlage bleibt also draußen, statt mit einer plausibel klingenden Vermutung zu erscheinen. Wenn du einen Namen kennst, der hierhergehört, und eine Quelle nennen kannst, lohnt sich eine Nachricht.',
      },
      {
        q: 'Wirkt sich die Bedeutung des Namens auf mein Tier aus?',
        a: 'Nein. Ein Tier lernt seinen Namen als Klangmuster und hat keinen Zugang zum Wortsinn. Bedeutungen zählen für die Person, die auswählt und dieses Wort ein Jahrzehnt oder länger mehrmals täglich sagen wird — deshalb stehen sie auf jeder Karte und verstecken sich nicht hinter einem Aufklapper oder einem Konto.',
      },
      {
        q: 'Wie melde ich eine falsche Namensbedeutung?',
        a: 'Schick den Namen und, falls vorhanden, eine Quelle deines Vertrauens, dann wird der Eintrag geprüft. Korrekturen werden in der einen Datendatei umgesetzt, aus der jede Seite liest, sodass eine akzeptierte Korrektur in allen Generatoren und allen Sprachen zugleich erscheint. Vorschläge für neue Namen sind unter denselben Bedingungen willkommen.',
      },
    ],
    related: {
      heading: 'Wie es weitergeht',
      html: '<p>Jeder Vorschlag aus den Generatoren für <a href="{{url:dog}}">Hunde</a>, <a href="{{url:cat}}">Katzen</a> und <a href="{{url:pet}}">Haustiere allgemein</a> zeigt seine Bedeutung auf der Karte. Die <a href="{{url:about}}">Über-uns-Seite</a> erklärt, wie der Rest des Werkzeugs gebaut ist, und auf der <a href="{{url:contact}}">Kontaktseite</a> landen Korrekturen und Vorschläge.</p>',
    },
  },

  about: {
    title: 'Über den Perfect Pet Name Generator',
    description:
      'Was dieser Generator anders macht: belegte Bedeutungen, Aussprache zum Anhören, ein Konfliktfilter gegen Trainingskommandos und ein Paarmodus.',
    breadcrumb: 'Über uns',
    h1: 'Über diesen Generator',
    answerBox:
      'Perfect Pet Name Generator ist ein kostenloses Werkzeug, das Hunde- und Katzennamen nach Stil, Geschlecht, Anfangsbuchstabe und Länge gefiltert vorschlägt. Jeder Vorschlag zeigt seine belegte Bedeutung, wird auf Wunsch vorgelesen und gegen die Namen in deinem Haushalt sowie gängige Trainingskommandos geprüft — Letzteres tut fast kein anderer Namensgenerator.',
    html: '<h2>Warum es das gibt</h2><p>Die meisten Haustiernamen-Generatoren liefern eine Liste von Wörtern. Das ist der leichte Teil des Problems. Die schweren Teile zeigen sich erst später: zu entdecken, dass der Name etwas Unglückliches bedeutet, zu merken, dass man ihn nicht sicher aussprechen kann, oder drei Monate Rückruftraining gegen einen Namen zu kämpfen, der wie „no“ klingt.</p><p>Dieses Werkzeug wurde um diese drei Fehlschläge herum gebaut, mit {{total}} Hunde- und Katzennamen als Grundliste. Es ist bewusst ein Ein-Schritt-Werkzeug — Filter setzen, generieren — statt eines mehrstufigen Fragebogens, denn ein Stilfilter erfasst bereits, was ein Quiz abfragt, und erledigt es auf einem einzigen Bildschirm.</p><h2>Was es anders macht</h2><h3>Immer sichtbare Bedeutungen</h3><p>Jeder Name zeigt Herkunft und Bedeutung direkt auf der Karte. Nicht hinter einem Aufklapper, nicht hinter einem Konto und niemals hinter einem E-Mail-Formular. Die Bedeutungen stammen aus etablierten sprachwissenschaftlichen und kulturellen Quellen — belegte Etymologien, Mythologie, dokumentierte Wortherkünfte — und wo eine Bedeutung nicht belegt ist, wird keine erfunden, um die Lücke zu füllen.</p><h3>Aussprache zum Anhören</h3><p>Jeder Name hat eine Schaltfläche zum Aussprechen, die die ohnehin in deinem Browser eingebaute Sprachausgabe nutzt. Es werden keine Audiodateien heruntergeladen, kein fremder Sprachdienst aufgerufen und nichts über deine Sitzung übertragen. Am wichtigsten ist das bei Namen aus der Mythologie und bei nicht deutschen Namen, wo die Schreibweise ein schlechter Wegweiser zum Klang ist.</p><h3>Ein Konfliktfilter für echte Haushalte</h3><p>Das ist das Stück, das jedem vergleichbaren Werkzeug fehlte, das wir finden konnten. Trage die Namen von Familienmitgliedern und vorhandenen Tieren ein, und jeder Vorschlag wird phonetisch mit ihnen verglichen — über Soundex und Editierdistanz statt über exakte Schreibweisen — zusätzlich zur automatischen Prüfung gegen gängige Trainingskommandos. Klare Treffer werden entfernt, Grenzfälle mit einer Erklärung markiert angezeigt, damit das Urteil bei dir bleibt.</p><p>Die Begründung ist schlicht: Ein Hund oder eine Katze lernt den eigenen Namen als eigenständiges Klangmuster. Ein Name, der sich auf ein Kommando oder einen anderen Namen im Haushalt reimt, gibt dem Tier bei jedem Gebrauch ein mehrdeutiges Signal — und Mehrdeutigkeit ist es, was das Training bremst.</p><h3>Paar- und Wurfmodus</h3><p>Zwei Tiere gemeinsam zu benennen ist ein anderes Problem, als zweimal einen Namen zu vergeben. Der Paarmodus liefert Sets aus zwei oder drei Namen, die einen Stil teilen und ähnlich lang sind — damit sie als Set lesbar sind — und dabei mit unterschiedlichen Lauten beginnen und dieselbe phonetische Prüfung gegeneinander bestehen. Das deckt gemeinsam adoptierte Paare ebenso ab wie Wurfgeschwister mit gemeinsamem Thema.</p><h2>Wie das Werkzeug gebaut ist</h2><p>Es ist eine statische Website. Es gibt kein Backend, keine Datenbank, keinen Login und keine serverseitige Verarbeitung dessen, was du eingibst. Die Namensliste ist eine statische Datei, und das gesamte Filtern, Mischen, phonetische Vergleichen und Sprechen passiert in deinem Browser. Die Auswahl wird per Fisher-Yates-Mischung gezogen, damit jeder zu deinen Filtern passende Name dieselbe Chance hat zu erscheinen, statt dass immer dieselben wenigen auftauchen.</p><h2>Was es bewusst nicht tut</h2><ul><li>Kein Persönlichkeitsquiz — der Stilfilter erledigt dieselbe Aufgabe in einem Schritt.</li><li>Kein Konto, keine Anmeldung und keine E-Mail-Erfassung für irgendeine Funktion, auch nicht für den Konfliktfilter.</li><li>Kein Foto-Upload und kein Raten der Rasse anhand eines Bildes.</li><li>Keine erfundenen Bedeutungen. Ist eine Bedeutung nicht belegt, steht der Name nicht in der Liste.</li></ul><h2>Kontakt aufnehmen</h2><p>Korrekturen an einer Bedeutung, Vorschläge für neue Namen oder alles andere: Auf der <a href="{{url:contact}}">Kontaktseite</a> stehen die Details. Starte die Namenssuche mit den Generatoren für <a href="{{url:dog}}">Hunde</a>, <a href="{{url:cat}}">Katzen</a> oder <a href="{{url:pet}}">Haustiere allgemein</a>.</p>',
  },

  contact: {
    title: 'Kontakt | Perfect Pet Name Generator',
    description:
      'Schreib uns zu einer Korrektur einer Bedeutung, einem fehlenden Namen oder einer Frage zum Generator. Eine E-Mail-Adresse, kein Kontaktformular.',
    breadcrumb: 'Kontakt',
    h1: 'Kontakt',
    answerBoxHtml:
      'Schreib an <a href="mailto:{{email}}" style="color: var(--c-accent-on-soft);">{{email}}</a> für alles, was diese Website betrifft. Es gibt kein Kontaktformular, weil dies eine statische Website ohne Server ist, der eines entgegennehmen könnte — was zugleich heißt, dass nichts, was du sendest, durch einen fremden Formulardienst läuft.',
    html: '<h2>Worum es gehen kann</h2><ul><li><strong>Eine Bedeutung wirkt falsch.</strong> Schick den Namen und, falls vorhanden, eine Quelle. Die Bedeutungen hier stammen aus belegten sprachwissenschaftlichen und kulturellen Referenzen, und Korrekturen sind wirklich willkommen.</li><li><strong>Ein Name fehlt.</strong> Namen werden nur mit belegter Bedeutung aufgenommen, eine Quelle hilft also.</li><li><strong>Etwas ist kaputt.</strong> Browser und Gerät sind die nützlichste Angabe — besonders die Aussprachefunktion hängt von der Sprachausgabe deines Geräts ab.</li><li><strong>Datenschutzfragen.</strong> Die <a href="{{url:privacy}}">Datenschutzerklärung</a> beschreibt, was erhoben wird und was nicht; was dort offenbleibt, frag einfach.</li></ul><h2>Antwortzeiten</h2><p>Dies ist eine kleine, unabhängige Website, Antworten kommen also nicht sofort. Rechne mit ein paar Tagen.</p><h2>Wobei diese Website nicht helfen kann</h2><p>Die Vorschläge hier sind Namensideen, keine professionelle Beratung. Bei Trainingsproblemen, Verhaltensfragen oder allem, was die Gesundheit deines Tieres betrifft, wende dich an eine qualifizierte Trainerin, einen Verhaltensberater oder eine Tierärztin. Die <a href="{{url:terms}}">AGB</a> stecken ab, was das Werkzeug leistet.</p>',
  },

  privacy: {
    title: 'Datenschutzerklärung | Haustiernamen',
    description:
      'Wie dieser statische Haustiernamen-Generator mit Daten umgeht: keine Konten, nichts Eingegebenes wird gespeichert, alles läuft in deinem Browser.',
    breadcrumb: 'Datenschutzerklärung',
    h1: 'Datenschutzerklärung',
    updatedLabel: 'Zuletzt aktualisiert: {{updated}}',
    answerBox:
      'Diese Seite hat keine Benutzerkonten und speichert nichts von dem, was du eintippst. Perfect Pet Name Generator ist eine statische Website: Der Namensgenerator, der Konfliktfilter und die Aussprachefunktion laufen vollständig in deinem eigenen Browser, und nichts davon wird übertragen oder gespeichert. Cookies für Reichweitenmessung und Werbung werden dagegen eingesetzt und weiter unten vollständig beschrieben; wo eine Einwilligung nötig ist, bleiben sie deaktiviert, bis du zustimmst.',
    html: '<h2>1. Wen diese Erklärung betrifft</h2><p>Diese Erklärung gilt für perfectpetnamegenerator.com und jede Seite darauf. Sie beschreibt, was mit Informationen geschieht, wenn du die Website nutzt.</p><h2>2. Was wir nicht erheben</h2><p>Es gibt auf dieser Website nirgends Konten, Logins, Registrierungen oder E-Mail-Anmeldungen, und keine Funktion setzt die Angabe einer E-Mail-Adresse voraus. Wir fragen nicht nach deinem Namen, deiner Adresse, Telefonnummer, Zahlungsdaten oder anderen personenbezogenen Kennungen, empfangen sie nicht und speichern sie nicht.</p><h3>Das Feld „Namen vermeiden, die klingen wie“</h3><p>Alles, was du in das Feld „Namen vermeiden, die klingen wie“ eingibst — einschließlich der Namen von Familienmitgliedern und vorhandenen Tieren — wird vollständig auf deinem eigenen Gerät verarbeitet. Dieser Text wird von JavaScript, das in deinem Browser läuft, mit der Namensliste verglichen. Er wird nie an einen Server gesendet, nie in einen Speicher geschrieben, nie protokolliert, und er verschwindet in dem Moment, in dem du die Seite schließt oder neu lädst. Dasselbe gilt für jeden anderen Filter, den du setzt.</p><h2>3. Automatisch erhobene Informationen</h2><h3>Hosting</h3><p>Die Website wird auf Cloudflare Pages gehostet. Wie jeder Webhoster verarbeitet Cloudflare technische Standarddaten der Anfrage wie IP-Adresse, User-Agent und angeforderte URL, um die Seite auszuliefern und den Dienst vor Missbrauch zu schützen. Das erfolgt unter den eigenen Datenschutzbedingungen von Cloudflare, und wir haben keinen Zugriff auf ein identifizierbares Protokoll einzelner Besucher.</p><h3>Analyse</h3><p>Diese Website nutzt Google Analytics, um die Nutzung im Ganzen zu verstehen — wie viele Menschen sie besuchen, auf welchen Seiten sie landen und ungefähr in welcher Weltregion sie sich befinden. Google Analytics setzt dafür Cookies und verarbeitet eine anonymisierte Form deiner IP-Adresse. Die Daten, die wir sehen, sind aggregiert und statistisch; sie identifizieren dich nicht persönlich und werden nicht mit dem verknüpft, was du in den Generator eingibst (das, wie oben beschrieben, deinen Browser nie verlässt).</p><p>Du kannst Google Analytics vollständig widersprechen — über das <a href="https://tools.google.com/dlpage/gaoptout" rel="nofollow noopener" target="_blank">Browser-Add-on von Google</a>, über die Cookie-Einstellungen deines Browsers oder über einen üblichen Contentblocker. Der Generator funktioniert in beiden Fällen genau gleich.</p><h3>Werbung</h3><p>Diese Seite finanziert sich über Werbung, die über Google AdSense ausgeliefert wird. Google ist ein Drittanbieter, der Cookies einsetzt, um hier Anzeigen auszuspielen, und dieser Einsatz von Werbecookies ermöglicht es Google und seinen Partnern, Anzeigen auf Grundlage deiner Besuche auf dieser und auf anderen Websites im Internet auszuliefern. Der Einsatz von Werbecookies durch Google richtet sich nach den <a href="https://policies.google.com/technologies/ads" rel="nofollow noopener" target="_blank">Werberichtlinien von Google</a>, und wie Google Daten von Websites verwendet, die seine Dienste nutzen, ist auf <a href="https://policies.google.com/technologies/partner-sites" rel="nofollow noopener" target="_blank">policies.google.com</a> beschrieben.</p><p>Personalisierte Werbung kannst du jederzeit in den <a href="https://www.google.com/settings/ads" rel="nofollow noopener" target="_blank">Anzeigeneinstellungen von Google</a> abschalten, und dem Einsatz von Cookies für personalisierte Werbung durch Drittanbieter kannst du unter <a href="https://www.aboutads.info/choices/" rel="nofollow noopener" target="_blank">aboutads.info</a> widersprechen. Wir erhalten aus der Werbung keine personenbezogenen Angaben und können nicht sehen, wem eine bestimmte Anzeige gezeigt wurde.</p><h3>Deine Cookie-Entscheidung</h3><p>Wo eine Einwilligung gesetzlich erforderlich ist — im EWR, im Vereinigten Königreich und in der Schweiz — bleiben Cookies für Reichweitenmessung und Werbung deaktiviert, bis du zustimmst, und ein Banner fragt beim ersten Besuch danach. Ablehnen kostet einen Klick und steht genauso sichtbar zur Wahl wie Zustimmen. Deine Entscheidung wird in deinem eigenen Browser gespeichert und lässt sich jederzeit über den Link „Cookie-Einstellungen“ in der Fußzeile ändern. Für eine Ablehnung wird dir nichts von dieser Seite vorenthalten.</p><h2>4. Browser-Speicher</h2><p>Zwei Einträge werden im lokalen Speicher deines Browsers abgelegt: deine Einstellung für helles oder dunkles Design, damit die Seite beim nächsten Besuch nicht in den falschen Farben aufblitzt, und deine Cookie-Entscheidung, damit das Banner nicht auf jeder Seite erneut fragt. Beides sind einzelne Werte, beide bleiben auf deinem Gerät, und keiner wird jemals übertragen. Das Löschen der Browserdaten entfernt sie. Die Sprachauswahl speichert nichts: Jede Sprache ist ein gewöhnlicher Link auf ihre eigene Seite. Die Liste der bereits gezeigten Namen liegt nur im Arbeitsspeicher und ist weg, sobald du den Tab schließt.</p><h2>5. Dienste von Dritten</h2><p>Die Seite lädt Schriften, Styles, Namensdaten und Skripte von der eigenen Domain statt von fremden CDNs. Die Aussprachefunktion nutzt die bereits in deinem Betriebssystem oder Browser eingebaute Sprachausgabe; es wird kein Audio heruntergeladen und kein Text-to-Speech-Dienst kontaktiert. Abgesehen von Cloudflare als Hoster und Google als Anbieter der oben beschriebenen Reichweitenmessung und Werbung erhält kein Dritter Daten aus deiner Nutzung dieser Seite.</p><h2>6. Links zu anderen Websites</h2><p>Seiten hier können auf externe Websites verlinken. Diese haben eigene Datenschutzpraktiken, die diese Erklärung nicht abdeckt.</p><h2>7. Kinder</h2><p>Diese Website ist ein Namenswerkzeug für ein allgemeines Publikum und richtet sich nicht an Kinder unter 13 Jahren. Wir erheben wissentlich von niemandem personenbezogene Daten, auch nicht von Kindern — es gibt auf der Website schlicht keinen Mechanismus, über den personenbezogene Daten übermittelt werden könnten.</p><h2>8. Deine Rechte</h2><p>Datenschutzgesetze wie die DSGVO und der CCPA geben dir Rechte auf Auskunft, Berichtigung und Löschung der über dich gespeicherten personenbezogenen Daten. Da diese Website keine personenbezogenen Daten über dich vorhält, gibt es auf unserer Seite nichts abzurufen oder zu löschen. Für die von Google verarbeiteten Analysedaten nutze die oben verlinkten Einstellungen von Google. Fragen sind unter der unten genannten Adresse willkommen.</p><h2>9. Änderungen dieser Erklärung</h2><p>Diese Erklärung wird aktualisiert, wenn sich die Datenpraxis der Seite ändert — ein neuer Anbieter für Reichweitenmessung oder Werbung ist der wahrscheinlichste Grund. Das Datum „zuletzt aktualisiert“ oben gibt stets die geltende Fassung wieder.</p><h2>10. Kontakt</h2><p>Datenschutzfragen gehen an <a href="mailto:{{email}}">{{email}}</a> oder über die <a href="{{url:contact}}">Kontaktseite</a>.</p>',
  },

  terms: {
    title: 'AGB | Perfect Pet Name Generator',
    description:
      'Nutzungsbedingungen des Generators: ein kostenloses Werkzeug, dessen Namen und Bedeutungen ohne Gewähr zur Inspiration bereitgestellt werden.',
    breadcrumb: 'AGB',
    h1: 'Allgemeine Geschäftsbedingungen',
    updatedLabel: 'Zuletzt aktualisiert: {{updated}}',
    answerBox:
      'Dieses Werkzeug ist kostenlos, und seine Ausgabe wird ohne Gewähr zur Inspiration bereitgestellt. Namensvorschläge und die dazu angezeigten Bedeutungen werden nach bestem Wissen aus belegten Quellen angeboten, aber keine Bedeutung ist als die endgültige oder einzige Deutung eines Namens garantiert. Die Nutzung der Website bedeutet, diese Bedingungen anzunehmen.',
    html: '<h2>1. Der Dienst</h2><p>Perfect Pet Name Generator liefert Vorschläge für Tiernamen, Namensbedeutungen, eine Aussprachewiedergabe und eine phonetische Konfliktprüfung. Die Nutzung ist kostenlos, erfordert kein Konto und kommt ohne Abonnement, Zahlung oder Registrierung aus; finanziert wird die Seite stattdessen über Werbung.</p><h2>2. Vorschläge sind Inspiration, keine Beratung</h2><p>Jeder zurückgegebene Name ist ein Vorschlag. Nichts hier ist professionelle Trainings-, Verhaltens- oder tierärztliche Beratung. Die Hinweise auf dieser Website geben weithin anerkannte Trainingsprinzipien wieder, aber dein Tier ist ein Individuum, und eine qualifizierte Trainerin, ein Verhaltensberater oder eine Tierärztin ist die richtige Quelle für Entscheidungen über Pflege und Ausbildung.</p><h2>3. Namensbedeutungen</h2><p>Bedeutungen und Herkünfte stammen aus etablierten sprachwissenschaftlichen und kulturellen Quellen und werden nach bestem Wissen dargestellt. Namen tragen häufig je nach Sprache, Region und Tradition unterschiedliche Bedeutungen, und Etymologien sind zwischen Quellen mitunter umstritten. Keine hier gezeigte Bedeutung wird als endgültige, vollständige oder ausschließliche Deutung eines Namens beansprucht. Wenn dir die Bedeutung eines Namens besonders wichtig ist, prüfe sie vor der Festlegung anhand einer Quelle deines Vertrauens.</p><h2>4. Der Konfliktfilter</h2><p>Der Konfliktfilter vergleicht Namen phonetisch mit gängigen Trainingskommandos und mit allen von dir eingegebenen Wörtern. Er ist eine hilfreiche Heuristik, keine Garantie. Er kann nicht jedes Wort kennen, das dein Haushalt verwendet, nicht jeden Akzent, in dem der Name gesprochen wird, und nicht, wie ein bestimmtes Tier reagieren wird. Behandle ein sauberes Ergebnis als gutes Zeichen, nicht als Versprechen.</p><h2>5. Verfügbarkeit</h2><p>Die Website wird „wie verfügbar“ bereitgestellt. Sie kann jederzeit ohne Ankündigung geändert, unterbrochen oder eingestellt werden. Funktionen, die von deinem Browser abhängen — insbesondere die Aussprachewiedergabe — beruhen auf Fähigkeiten, die wir nicht kontrollieren, und funktionieren möglicherweise nicht auf jedem Gerät.</p><h2>6. Zulässige Nutzung</h2><p>Du darfst den Generator frei für private und gewerbliche Zwecke nutzen, auch zur Benennung von Tieren im Tierheim, in der Tierrettung oder in der Zucht. Du darfst die zugrunde liegende Namens- und Bedeutungsdatenbank nicht als Datensatz oder Konkurrenzprodukt auslesen, massenhaft herunterladen oder weiterverbreiten, die Website nicht stören und sie nicht als deine eigene ausgeben.</p><h2>7. Geistiges Eigentum</h2><p>Einzelne Namen gehören niemandem, und du darfst jeden hier gefundenen Namen frei verwenden. Gestaltung, redaktionelle Inhalte und die zusammengestellte Namens- und Bedeutungsdatenbank als Sammlung bleiben Eigentum von Perfect Pet Name Generator.</p><h2>8. Keine Gewährleistung und Haftungsbeschränkung</h2><p>Die Website und ihre Inhalte werden ohne Gewährleistungen jeglicher Art bereitgestellt, ausdrücklich oder stillschweigend, einschließlich Richtigkeit, Eignung für einen bestimmten Zweck und unterbrechungsfreier Verfügbarkeit. Im gesetzlich größtmöglichen Umfang haften die Betreiber dieser Website nicht für Verluste oder Schäden, die aus ihrer Nutzung oder aus einer damit getroffenen Namensentscheidung entstehen.</p><h2>9. Externe Links</h2><p>Links zu Websites Dritter dienen der Bequemlichkeit. Für deren Inhalte, Richtigkeit oder Praktiken sind wir nicht verantwortlich.</p><h2>10. Änderungen dieser Bedingungen</h2><p>Diese Bedingungen können mit der Weiterentwicklung der Website aktualisiert werden. Das Datum „Zuletzt aktualisiert“ oben gibt die aktuelle Fassung wieder, und die weitere Nutzung nach einer Änderung bedeutet, dass du sie annimmst.</p><h2>11. Kontakt</h2><p>Fragen zu diesen Bedingungen: <a href="mailto:{{email}}">{{email}}</a>, oder nutze die <a href="{{url:contact}}">Kontaktseite</a>. Siehe auch die <a href="{{url:privacy}}">Datenschutzerklärung</a>.</p>',
  },

  /** Translated in the sitemap-visible pages only; 404/500 stay English. */
  schema: {
    appDescription:
      'Kostenloser Generator für Hunde- und Katzennamen mit belegten Bedeutungen, Aussprache im Browser, einem Konfliktfilter gegen Trainingskommandos und einem Paarmodus für zwei Tiere.',
    features: [
      'Generator für Hunde- und Katzennamen',
      'Belegte Bedeutung und Herkunft zu jedem Namen',
      'Aussprache über die Sprachausgabe des Browsers',
      'Konfliktfilter gegen Trainingskommandos und Haushaltsnamen',
      'Namensmodus für Paare und Wurfgeschwister',
      'Filter für Geschlecht, Stil, Anfangsbuchstabe und maximale Namenslänge',
    ],
  },
};

export default de;
