/**
 * Español. Mirrors the shape of ./en.ts exactly.
 *
 * Placeholders ({{total}}, {{url:dog}}, …) and the markup inside `*Html`
 * strings must survive translation untouched; only the words around them
 * change. FAQ answers stay plain text because they are copied into FAQPage
 * JSON-LD.
 *
 * The training commands the tool checks are English words, because the name
 * list is English. The copy says so rather than pretending otherwise, and
 * points at the avoid field for commands in the reader's own language.
 */
const es = {
  common: {
    siteName: 'Generador Perfecto de Nombres para Mascotas',
    skipLink: 'Saltar al contenido principal',
    themeToggle: 'Cambiar entre tema claro y oscuro',
    languageLabel: 'Idioma',
    languageNav: 'Elige un idioma',
    mainNav: 'Principal',
    breadcrumb: 'Ruta de navegación',
    home: 'Inicio',
  },

  nav: {
    dog: 'Nombres de perro',
    cat: 'Nombres de gato',
    pet: 'Nombres de mascota',
    about: 'Acerca de',
  },

  footer: {
    blurb:
      'Ideas de nombres para perros y gatos con significados reales, pronunciación en voz alta y un verificador que evita que un nombre nuevo choque con tus órdenes de adiestramiento.',
    headings: { generators: 'Generadores', guides: 'Guías', site: 'Sitio', legal: 'Legal' },
    links: {
      home: 'Inicio',
      dog: 'Generador de nombres para perros',
      cat: 'Generador de nombres para gatos',
      pet: 'Generador de nombres para mascotas',
      teach: 'Enseñar el nombre',
      avoid: 'Nombres que evitar',
      pairs: 'Nombrar a dos mascotas',
      meanings: 'Significado de los nombres',
      about: 'Acerca de',
      contact: 'Contacto',
      privacy: 'Política de privacidad',
      terms: 'Términos y condiciones',
    },
    copyright:
      '© {{year}} Perfect Pet Name Generator. Los significados proceden de fuentes lingüísticas y culturales establecidas; las sugerencias son inspiración, no asesoramiento profesional de adiestramiento ni veterinario.',
  },

  styles: {
    fantasy: 'Fantasía',
    funny: 'Divertido',
    cute: 'Tierno',
    strong: 'Fuerte',
    elegant: 'Elegante',
    classic: 'Clásico',
    mythical: 'Mitológico',
    food: 'Inspirado en comida',
    modern: 'Moderno',
    unique: 'Único',
  },

  generator: {
    speciesLegend: 'Especie',
    speciesAny: 'Perros y gatos',
    speciesDog: 'Perro',
    speciesCat: 'Gato',

    genderLegend: 'Género',
    genderAny: 'Cualquiera',
    genderMale: 'Macho',
    genderFemale: 'Hembra',
    genderHint: 'Las opciones de macho y hembra también incluyen nombres unisex.',

    styleLegend: 'Estilo',
    stylePickAny: '(elige los que quieras)',
    styleHint:
      'Sin nada seleccionado entran todos los estilos. Al marcar varios se devuelven nombres que coincidan con cualquiera de ellos.',

    letterLabel: 'Letra inicial',
    letterAny: 'Cualquier letra',

    maxLenLabel: 'Longitud máxima',
    maxLenAny: 'Cualquier longitud',
    maxLenOption: '{{n}} letras o menos',
    maxLenHint:
      'Útil para chapas identificativas grabadas, donde suelen caber unos 8 caracteres por línea.',

    avoidLabel: 'Evitar nombres parecidos a…',
    avoidPlaceholder: 'Jake, Nora, Bo — familiares, otras mascotas, lo que quieras esquivar',
    avoidHtml:
      '<strong style="color: var(--c-text);">Por qué importa:</strong> una mascota aprende su nombre como un sonido distintivo. Un nombre que rima con el de alguien de casa o con una orden hace que ambos cuesten más de aprender: «Bo» se confunde con «No», «Kit» con «Sit». Cada sugerencia se compara además automáticamente con {{commandCount}} {{commandKind}} habituales ({{commandExamples}}…). Las coincidencias claras se ocultan; las dudosas se muestran marcadas para que decidas tú. Lo que escribas aquí se compara en tu navegador y nunca se guarda ni se envía a ningún sitio.',
    commandKindDog: 'órdenes de adiestramiento en inglés',
    commandKindCat: 'llamadas para gatos en inglés',

    optionsLegend: 'Opciones',
    excludeShown: 'Excluir nombres ya mostrados',
    excludeShownHint: 'Cada generación devuelve nombres que aún no has visto.',
    hideFlagged: 'Ocultar por completo los nombres marcados',
    hideFlaggedHint:
      'Desactivado por defecto, para que veas los choques dudosos y los juzgues tú mismo.',
    pairMode: '¿Vas a poner nombre a dos mascotas a la vez?',
    pairModeHint:
      'Devuelve conjuntos que comparten estilo, tienen longitudes parecidas y no se confunden entre sí — para parejas inseparables y hermanos de camada.',
    setSizeLabel: 'Nombres por conjunto',
    setSize2: '2 — una pareja',
    setSize3: '3 — una camada',

    generate: 'Generar nombres',
    copyBatch: 'Copiar esta tanda',
    startOver: 'Empezar de nuevo',
    ctaHint:
      'Consigue al instante un nombre de {{species}} al azar — cada pulsación extrae una tanda nueva entre los nombres que cumplen tus filtros, así que puedes seguir generando hasta dar con el bueno.',
    speciesWordDog: 'perro',
    speciesWordCat: 'gato',
    speciesWordAny: 'mascota',

    resultsHeading: 'Ideas de nombres',
    resultsAria: 'Nombres de mascota generados',
    statusInitialHtml:
      'Abajo tienes una selección inicial — pulsa <strong>Generar nombres</strong> para una tanda ajustada a tus filtros.',
    noscript:
      'El generador interactivo necesita JavaScript. Los nombres iniciales de abajo se muestran completos, significados incluidos.',
    unisex: 'Unisex',
    male: 'Macho',
    female: 'Hembra',
    meaningLabel: 'Significado:',
  },

  /** Strings the client controller renders after the page has loaded. */
  runtime: {
    pronounce: '🔊 Pronunciar',
    pronounceAria: 'Escuchar cómo se pronuncia {{name}} en voz alta',
    notSupported: 'No disponible aquí',
    bootError: 'No se pudo cargar el generador. Recarga la página.',

    conflictHtml: 'Conflicto de adiestramiento: este nombre {{reason}}.',
    reasons: {
      same: 'es la misma palabra que «{{word}}»',
      oneSound: 'está a un sonido de «{{word}}»',
      veryClose: 'se parece mucho a «{{word}}»',
      almostIdentical: 'suena casi idéntico a «{{word}}»',
      rhymes: 'rima con «{{word}}»',
      similar: 'es parecido a «{{word}}»',
    },

    dogBadge: 'Perro',
    catBadge: 'Gato',

    whyTogether:
      'Por qué funcionan juntos: {{style}}, {{lengths}} letras, sonidos iniciales distintos y sin posibilidad de confundirlos entre sí.',
    inStyle: 'estilo {{styles}}',
    matchedInStyle: 'estilo compatible',
    joiner: ' y ',

    finding: 'Buscando nombres…',
    loadError: 'No se pudo cargar la lista de nombres. Revisa tu conexión e inténtalo de nuevo.',

    emptyHeading: 'Ningún nombre coincide con esos filtros',
    emptyLead:
      'El filtro más restrictivo aquí es {{reason}}. Amplía ese primero — el resto de tus elecciones puede quedarse.',
    emptyGeneric: 'Prueba a quitar un filtro — el resto de tus elecciones puede quedarse.',
    emptyStartOver: 'Usa «Empezar de nuevo» abajo para vaciar la lista de nombres ya mostrados.',
    emptyReasons: {
      gender: 'el filtro de género',
      style: 'esa combinación de estilos',
      letter: 'la letra inicial',
      length: 'la longitud máxima del nombre',
      shown: '«excluir nombres ya mostrados» — ya has visto todas las coincidencias',
      conflict: 'el filtro de conflictos, que ha eliminado todas las coincidencias restantes',
      pair: 'el modo pareja, que necesita varios nombres compatibles para formar un conjunto',
    },

    noSets: 'No hay conjuntos compatibles con esos filtros.',
    noMatches: 'Sin coincidencias.',
    setsStatus:
      '{{count}} {{word}} que suenan bien juntos y no se confunden entre sí.',
    pairOne: 'pareja',
    pairMany: 'parejas',
    setOne: 'conjunto',
    setMany: 'conjuntos',

    statusNamesOne: '1 nombre de {{pool}} que cumplen tus filtros',
    statusNamesMany: '{{count}} nombres de {{pool}} que cumplen tus filtros',
    statusHidden: '{{count}} ocultos por el filtro de conflictos',
    statusFlagged: '{{count}} marcados como posible choque con el adiestramiento',

    copied: 'Copiado',
    copyBlocked: 'Este navegador bloquea la copia — selecciona los nombres a mano.',
    clearedShown:
      'Lista de nombres mostrados vaciada. Todos los nombres vuelven a estar disponibles.',
  },

  home: {
    title: 'Generador de Nombres para Mascotas | Perros y Gatos',
    description:
      'Generador de nombres para mascotas gratis. Genera nombres de perro y gato con significados reales, escúchalos en voz alta y evita choques con las órdenes.',
    eyebrow: 'Gratis · Sin registro · {{total}} nombres',
    h1: 'Generador de nombres para mascotas',
    answerBox:
      'Este generador de nombres para mascotas gratuito crea nombres de perro y gato al azar según los filtros que fijes: estilo, género, letra inicial y longitud. Cada nombre muestra un significado documentado, se pronuncia al tocarlo y se comprueba para que no choque con tus órdenes de adiestramiento ni con los nombres que ya se usan en casa.',
    leadHtml:
      '¿Buscas nombre para un perro? <a class="underline" style="color: var(--c-accent-on-soft);" href="{{url:dog}}">Usa el generador de nombres para perros</a>. ¿Para un gato? <a class="underline" style="color: var(--c-accent-on-soft);" href="{{url:cat}}">Usa el generador de nombres para gatos</a>. O genera con ambas especies aquí abajo.',
    generator: {
      heading: 'Generar nombres de perro y gato',
      intro:
        'Aplica tantos filtros como quieras, o ninguno, y genera. Cada nombre llega con su significado.',
    },
    styles: {
      heading: 'Estilos populares: nombres de fantasía y nombres divertidos',
      lead: 'Los {{styleCount}} filtros de estilo de arriba funcionan igual, pero estos dos son los que la gente busca por su nombre.',
      fantasy: {
        heading: 'Nombres de fantasía para mascotas',
        html: '<p class="mt-2 text-[0.9375rem]">¿Buscas un generador de nombres de fantasía? Marca <strong>Fantasía</strong> en el filtro de estilo y la tanda llegará desde la mitología, la ficción épica y la ciencia ficción — {{fantasyCount}} nombres que van de Gandalf, Arwen y Thorin a Zelda, Kenobi y Desdentao. Marca <strong>Mitológico</strong> a la vez para ampliar la selección con Odín, Atenea, Fenrir y Freya.</p><p class="mt-2 text-[0.9375rem]">Los nombres de fantasía suelen ser más largos que el ideal de una o dos sílabas, y por eso merece la pena combinar el filtro Fantasía con un máximo de cinco o seis letras: Frodo se oye de un extremo a otro del parque, mientras que Hércules acabará siendo Herc en dos semanas, lo planees o no.</p>',
      },
      funny: {
        heading: 'Nombres divertidos para mascotas',
        html: '<p class="mt-2 text-[0.9375rem]">Divertido es el estilo más numeroso — {{funnyCount}} nombres que van de Waffles, Gnocchi y Meatball a Bandit, Hooligan y Chonk. Un generador de nombres divertidos tiene una trampa que conviene nombrar: la broma tiene que sobrevivir a que la griten en la sala de espera del veterinario y a escribirla en el formulario del microchip, así que di tu lista en voz alta y a volumen de llamada antes de decidirte.</p><p class="mt-2 text-[0.9375rem]">Varias de las opciones más graciosas tienen una cara seria debajo — Loki es el dios embaucador nórdico, Otis significa «riqueza» en germánico — y el significado aparece en cada ficha, así que ves exactamente lo que eliges.</p>',
      },
    },
    different: {
      heading: 'Tres cosas que hace este generador y casi ninguno más',
      cards: [
        {
          heading: 'Significados que se pueden leer de verdad',
          body: 'Cada nombre muestra su origen y su significado en la ficha, siempre visibles. Sin desplegables, sin cuenta, sin muro de correo electrónico. Un nombre que vas a decir diez veces al día merece ser algo conocido antes de elegirlo.',
        },
        {
          heading: 'Un filtro de conflictos para tu casa',
          body: 'Escribe los nombres de tu familia y de tus otras mascotas y el generador retira las sugerencias que suenen demasiado parecidas, además de comprobarlas automáticamente contra las órdenes de adiestramiento más comunes. Esta es la pieza que casi ninguna otra herramienta ofrece.',
        },
        {
          heading: 'Nombres para dos mascotas a la vez',
          body: 'Las parejas inseparables y los hermanos de camada necesitan nombres que combinen en estilo pero se distingan con claridad al oírlos. El modo pareja construye esos conjuntos y comprueba los nombres entre sí, no solo contra los de tu casa.',
        },
      ],
    },
    pick: {
      heading: 'Elige tu generador',
      dog: {
        heading: 'Generador de nombres para perros',
        body: '{{dogCount}} nombres de perro con significado, comprobados contra {{dogCommandCount}} órdenes habituales como sit, stay, come y down.',
      },
      cat: {
        heading: 'Generador de nombres para gatos',
        body: '{{catCount}} nombres de gato con significado, ajustados a los sonidos a los que los gatos responden y comprobados contra las llamadas de una casa con gato.',
      },
      pet: {
        heading: 'Nombres para una casa con varias mascotas',
        body: 'Ambas especies a la vez, más orientación para poner nombre a una mascota en una casa que ya tiene niños, pareja u otros animales.',
      },
    },
    how: {
      heading: 'Cómo se razonan aquí los consejos sobre nombres',
      html: '<p>Las reglas que aplica esta herramienta son las que dan los adiestradores profesionales: nombre corto, claramente distinto de las órdenes y constante una vez elegido. Un perro o un gato aprende un nombre como un patrón de sonido asociado a atención y recompensa, no como una palabra con significado. Por eso un nombre que se solapa con «no» o con «sit» te cuesta tiempo real de adiestramiento: le estás pidiendo al animal que separe dos señales que le llegan al oído casi idénticas.</p><p>Los significados que aparecen junto a cada nombre funcionan al revés: te importan a ti, no a la mascota. Están ahí porque un nombre arrastra quince años de uso diario, y saber que Luna es «luna» en latín o que Odín pertenece a la mitología nórdica es el tipo de detalle que convierte una lista en una decisión. Los significados proceden de fuentes lingüísticas y culturales documentadas, y ninguno se inventa.</p><p>Nada de este sitio requiere una cuenta. El filtro de conflictos funciona por completo en tu navegador, y por eso los nombres que escribes en él no salen nunca de tu dispositivo — consulta la <a href="{{url:privacy}}">política de privacidad</a> para los detalles.</p>',
    },
    about: {
      heading: 'Sobre este generador de nombres para mascotas',
      paragraphs: [
        'Perfect Pet Name Generator es un generador de nombres para mascotas gratuito para perros y gatos, creado para resolver las partes de la elección del nombre que solo aparecen más tarde, no solo para darte una lista de palabras. Trabaja con {{total}} nombres repartidos en {{styleCount}} estilos. Cada nombre que devuelve incluye un significado documentado, un botón que lo pronuncia en voz alta en tu navegador y una comprobación automática frente a las órdenes que tu mascota tiene que aprender. Nada está bloqueado: no hay registro, ni paso de correo, ni versión de pago en ninguna función, incluidos el filtro de conflictos del hogar y el modo pareja.',
        'En esencia es un generador aleatorio de nombres. Cada vez que pulsas Generar, los nombres que coinciden con tus filtros se barajan con un algoritmo de Fisher-Yates y se extrae una tanda nueva, de modo que cada nombre válido tiene la misma probabilidad de aparecer en lugar de repetirse siempre los mismos. Sin filtros, funciona como un generador de nombres de perro al azar y un generador de nombres de gato al azar puros. Añade un estilo, una letra inicial o un límite de longitud y el sorteo sigue siendo aleatorio: solo ocurre dentro de un grupo más pequeño.',
        'El generador de nombres para perros está ajustado a la forma en que un perro aprende realmente un nombre. Puedes filtrar por macho, hembra o unisex, por estilo, por letra inicial y por una longitud máxima que quepa en una chapa identificativa grabada. Las vistas de macho y de hembra del generador de nombres para perros mantienen los nombres unisex en los resultados, así que nunca pierdes una buena opción por una división de género rígida. Cada sugerencia se comprueba frente a {{dogCommandCount}} órdenes habituales como sit, stay, come, heel y down; los nombres que suenan demasiado parecidos se ocultan, y los dudosos se muestran con una marca para que la decisión final sea tuya.',
        'El generador de nombres para gatos sigue el mismo diseño, pero se apoya en los sonidos a los que mejor responden los gatos: nombres cortos con notas brillantes y de alta frecuencia, como la «i» de Mimi o la k fuerte de Kiko. Filtra el generador de nombres para gatos por macho o hembra, por estilo, por letra o por longitud, y evitará las llamadas que se usan en una casa con gato. Igual que con los perros, los resultados de macho y de hembra del generador de nombres para gatos mantienen los nombres unisex en el grupo en lugar de descartarlos.',
        'Si estás rellenando papeleo de pedigrí, la herramienta también sirve como generador de nombres registrados para perros. Los nombres registrados para la AKC, el Kennel Club y registros similares son largos, formales y a menudo con un tema de criadero o de camada, mientras que el nombre de llamada que usas en casa es corto. Desactiva el límite de longitud y elige un estilo elegante o clásico para el nombre registrado; después vuelve a ejecutar el generador con un límite de cinco o seis letras para encontrar el nombre de llamada del día a día que le acompañe.',
        'Los estilos son la forma en que la mayoría acota la lista. Fantasía toma de la mitología, la ficción épica y la ciencia ficción; Divertido es la categoría más numerosa y va de Waffles y Meatball a Bandit y Hooligan; y junto a ellos están los filtros tierno, fuerte, elegante, clásico, mitológico, inspirado en comida, moderno y único. Selecciona varios a la vez y el generador devuelve nombres que coinciden con cualquiera de ellos, que es la forma más rápida de ampliar una búsqueda que se ha quedado demasiado estrecha.',
        'Los significados son la otra mitad de la herramienta, y te importan a ti más que al animal. Un nombre que se dice diez veces al día durante quince años merece ser algo conocido, así que el origen y el significado de cada nombre están a la vista en la ficha, nunca detrás de un desplegable, una cuenta o un formulario de correo. Los significados proceden de etimologías registradas, mitología y orígenes de palabras documentados, y cuando un significado no está documentado el nombre se omite en lugar de inventarle uno.',
        'Cada nombre generado tiene un botón Pronunciar que lo lee en voz alta con el motor de voz que ya trae tu dispositivo. No se descarga ningún audio ni se contacta con ningún servicio externo de texto a voz. Esto importa sobre todo en nombres de origen mitológico y no ingleses, donde la ortografía dice poco sobre cómo se pronuncia realmente el nombre, y escuchar una lista corta a volumen de llamada es la forma más rápida de detectar un nombre incómodo de gritar en un parque.',
        'El filtro de conflictos del hogar es la pieza que casi ningún otro generador de nombres para mascotas tiene. Introduce los nombres que ya se usan en casa —una pareja, un hijo, otra mascota, incluso un apodo que se grita por el jardín— y cada sugerencia se compara con ellos fonéticamente en lugar de por su escritura, porque «Kay» y «Stay» no comparten ninguna letra inicial pero chocan por completo al oírlas. Las coincidencias claras se eliminan y las dudosas se marcan, y todo lo que escribes se compara en tu navegador y nunca se guarda, se registra ni se envía a ningún sitio.',
        'Poner nombre a dos mascotas a la vez es un problema distinto de poner el mismo nombre dos veces, así que el generador tiene un modo pareja. Devuelve conjuntos de dos o tres nombres que comparten estilo y quedan dentro de unas dos letras de la misma longitud, y luego rechaza cualquier conjunto cuyos nombres sean fonéticamente cercanos entre sí. Está pensado para parejas inseparables adoptadas juntas y para hermanos de camada que necesitan un tema común sin responder al nombre del otro.',
        'Todo el sitio es estático: sin cuentas, sin base de datos, sin procesamiento en servidor de nada de lo que introduces. Empieza por el generador de nombres para perros, el generador de nombres para gatos, o genera con ambas especies con la herramienta de arriba, y haz las dos cosas que evitan arrepentirse de un nombre: lee el significado y di el nombre en voz alta antes de decidir.',
      ],
    },
    faqHeading: 'Preguntas frecuentes',
    faqs: [
      {
        q: '¿Qué hace que un nombre de mascota sea bueno?',
        a: 'Un buen nombre de mascota tiene una o dos sílabas, termina en una vocal clara o en una consonante fuerte y no se parece a ninguna palabra que uses como orden. Los nombres cortos se oyen mejor a través de un parque o una habitación, y una terminación distintiva ayuda a que el perro o el gato reconozca su nombre dentro de una conversación normal. El significado te importa a ti más que al animal, y por eso cada nombre de aquí muestra su origen.',
      },
      {
        q: '¿Por qué el nombre de una mascota no debe parecerse a una orden?',
        a: 'Un nombre que suena como una orden ralentiza el adiestramiento, porque el animal no distingue las dos señales. «Bo» y «no», o «Kit» y «sit», se diferencian en un solo sonido, así que la mascota recibe una señal ambigua cada vez que se usa cualquiera de los dos. Este generador compara cada sugerencia con las órdenes más comunes y con los nombres de tu casa que introduzcas, oculta las coincidencias claras y marca las dudosas.',
      },
      {
        q: '¿Este generador de nombres para mascotas es gratis? ¿Hace falta cuenta?',
        a: 'Es completamente gratis y no hay cuenta, registro ni paso de correo electrónico para ninguna función, incluidos el filtro de conflictos y el modo pareja. Todo funciona en tu navegador contra una lista estática de nombres. Nada de lo que escribes se guarda ni se envía a un servidor.',
      },
      {
        q: '¿Puedo generar nombres para dos mascotas adoptadas juntas?',
        a: 'Sí. Activa «¿Vas a poner nombre a dos mascotas a la vez?» y el generador devuelve conjuntos de dos o tres nombres en lugar de una lista suelta. Cada conjunto comparte estilo, se mantiene dentro de dos letras de la misma longitud, empieza por sonidos distintos y pasa la misma comprobación fonética del filtro de conflictos, de modo que las mascotas no respondan al nombre de la otra.',
      },
      {
        q: '¿Cuáles son buenos nombres de fantasía para mascotas?',
        a: 'Los buenos nombres de fantasía se reconocen de una historia o un mito pero siguen siendo lo bastante cortos para llamarlos desde el otro lado del jardín: Gandalf, Arwen, Thorin, Zephyr y Zelda cumplen las dos cosas. El filtro Fantasía contiene {{fantasyCount}}, y marcar Mitológico a la vez amplía la selección con Odín, Atenea, Fenrir y Freya. Los nombres largos acaban acortándose en la práctica, así que comprueba que el nombre siga funcionando en dos sílabas antes de decidirte.',
      },
      {
        q: '¿Qué son los nombres divertidos para mascotas?',
        a: 'Los nombres divertidos son aquellos cuya gracia nace del contraste entre el nombre y el animal que lo lleva: Waffles, Meatball, Bandit, Chonk y Hooligan son el tipo de cosa que devuelve el filtro Divertido, y aquí hay {{funnyCount}}. La única prueba real es si la broma sigue funcionando cuando la dice en voz alta un veterinario en la sala de espera, así que lee tu lista en voz alta antes de decidir.',
      },
      {
        q: '¿De dónde salen los significados de los nombres?',
        a: 'Los significados proceden de fuentes lingüísticas y culturales establecidas, no se inventan para la herramienta: etimologías registradas, mitología y orígenes de palabras documentados. Se muestran enteros junto a cada nombre, nunca escondidos tras un desplegable o un formulario de correo, para que puedas juzgar un nombre antes de comprometerte con él quince años.',
      },
    ],
  },

  dog: {
    title: 'Generador de Nombres para Perros con Significado',
    description:
      'Generador de nombres para perros gratis con significados y pronunciación. Filtra por estilo, género, letra y longitud, y evita choques con las órdenes.',
    breadcrumb: 'Nombres de perro',
    h1: 'Generador de nombres para perros',
    answerBox:
      'El nombre de un perro debe tener una o dos sílabas y distinguirse con claridad de cualquier orden que pienses enseñarle. Este generador parte de {{dogCount}} nombres de perro con significados documentados, pronuncia cada uno en voz alta y elimina automáticamente las sugerencias que suenan como {{dogCommandCount}} órdenes habituales — para que el nombre elegido no compita con las palabras que tu perro tiene que aprender.',
    generator: {
      heading: 'Generar nombres de perro',
      intro:
        'Filtra por estilo, género, letra inicial o longitud apta para chapa. Añade los nombres de casa que quieras evitar y el filtro de conflictos se encarga del resto.',
    },
    prose: {
      heading: 'Por qué el nombre de un perro no debe sonar como una orden',
      html: '<p>Un perro aprende su nombre como un sonido, no como una palabra. Cuando el nombre se solapa con una señal, cada repetición enseña ambigüedad en lugar de claridad: el perro oye algo parecido a «no» y tiene que adivinar si lo están llamando o corrigiendo. El coste se mide en semanas de adiestramiento de llamada más lento, y la llamada es la orden que más importa.</p><p>Las órdenes que se comprueban automáticamente en esta página son: {{dogCommands}}. Están en inglés porque la lista de nombres lo está; si adiestras en español, escribe tus propias órdenes en el campo de abajo y se comprobarán igual. Los nombres demasiado cercanos a cualquiera de ellas quedan fuera de tus resultados, y las coincidencias dudosas se muestran con una marca que explica el choque en lugar de desaparecer sin más, porque una rima de la que eres consciente es más fácil de llevar que una que descubres al tercer mes.</p><p>La misma comprobación se aplica a lo que escribas en el campo «evitar nombres parecidos a». Un perro en una casa con un Jake tendrá problemas con Jade; un segundo perro que llega junto a una Bailey los tendrá con Hayley. Esa comparación ocurre en tu navegador y nada de lo que escribes se guarda ni se transmite.</p><h2>Poner nombre a dos perros, o a una camada entera</h2><p>Dos perros en una misma casa necesitan nombres inconfundibles entre sí. El modo pareja construye conjuntos que comparten estilo y longitudes parecidas — para que suenen como de la misma casa — mientras exige sonidos iniciales distintos y aplica la misma comprobación fonética entre los dos nombres. Sirve tanto para parejas adoptadas juntas como para hermanos de camada que necesitan un tema común.</p><h2>Nombres que caben en una chapa grabada</h2><p>En la mayoría de chapas grabadas caben unos ocho caracteres por línea antes de que el texto tenga que encogerse, y un nombre que compite por el espacio con un número de teléfono es lo primero que se recorta. El filtro de longitud máxima existe justo para esto: ponlo en seis o menos y todas las sugerencias se grabarán con holgura junto a tus datos de contacto.</p>',
    },
    showcase: {
      heading: 'Nombres de perro por estilo, con significado',
      lead: 'Una muestra de la lista completa. Usa el generador de arriba para filtrar el resto por género, letra y longitud.',
      strong: 'Nombres fuertes para perros',
      cute: 'Nombres tiernos para perros',
      mythical: 'Nombres mitológicos para perros',
    },
    more: {
      heading: 'Poner nombre a otra mascota',
      html: '<p>¿Es un gato? El <a href="{{url:cat}}">generador de nombres para gatos</a> usa una lista específica y comprueba los sonidos a los que los gatos responden de verdad. ¿Ambos, o algo distinto? El <a href="{{url:pet}}">generador general de nombres para mascotas</a> funciona con todas las especies, y la <a href="{{url:home}}">página de inicio</a> explica cómo encajan los significados, la pronunciación y las comprobaciones de conflicto.</p>',
    },
    faqHeading: 'Preguntas sobre nombres de perro',
    faqs: [
      {
        q: '¿Cómo elijo el nombre de un perro?',
        a: 'Elige un nombre de una o dos sílabas que termine en vocal o en consonante fuerte y que no comparta sonido con tus órdenes. Dilo en voz alta al volumen que usarías en un parque antes de decidirte, compruébalo contra las palabras que el perro ya tiene que aprender y mantenlo una vez elegido: cambiar el nombre a mitad del adiestramiento reinicia la asociación.',
      },
      {
        q: '¿Qué nombres de perro debería evitar?',
        a: 'Evita los nombres que rimen o se parezcan mucho a tus órdenes de adiestramiento: {{dogCommandsShort}} y señales similares. Evita también los que coincidan con un familiar o con otra mascota de la casa, porque un perro no puede separar dos sonidos parecidos que salen de la misma voz. El generador de esta página retira ambas categorías automáticamente.',
      },
      {
        q: '¿El nombre de un perro debe tener una o dos sílabas?',
        a: 'Una o dos sílabas es el límite práctico para un nombre de perro. Los nombres cortos atraviesan el ruido de fondo y son fáciles de decir de forma seca y constante, que es lo que el perro está aprendiendo en realidad. Los nombres largos se acortan igualmente en el día a día, así que merece la pena elegir la forma corta a propósito en vez de dejar que ocurra sola.',
      },
      {
        q: '¿Puedo escuchar cómo se pronuncia un nombre de perro?',
        a: 'Sí. Cada nombre generado tiene un botón Pronunciar que lo lee en voz alta con el motor de voz integrado en tu navegador. Funciona sin conexión una vez cargada la página, no envía nada a ningún servidor y no necesita complementos. Oír un nombre dicho en voz alta es la forma más rápida de detectar uno incómodo de gritar.',
      },
      {
        q: '¿Cuántos nombres de perro tiene este generador?',
        a: 'El generador parte de {{dogCount}} nombres de perro, cada uno con un significado y un origen documentados. Los filtros de género, estilo, letra inicial y longitud máxima reducen ese conjunto, y la tanda que ves se extrae con una mezcla Fisher-Yates para que todos los nombres coincidentes tengan la misma probabilidad de aparecer, en lugar de repetirse siempre los mismos.',
      },
    ],
  },

  cat: {
    title: 'Generador de Nombres para Gatos con Significado',
    description:
      'Generador de nombres para gatos gratis con significados documentados y pronunciación. Filtra por estilo, género, letra y longitud, y evita choques en casa.',
    breadcrumb: 'Nombres de gato',
    h1: 'Generador de nombres para gatos',
    answerBox:
      'El nombre de un gato debe ser corto, contener un sonido agudo como una «i» o una consonante fuerte, y distinguirse con claridad de las palabras que usas para corregirlo o llamarlo. Este generador parte de {{catCount}} nombres de gato con significados documentados, lee cada uno en voz alta y descarta los que chocan con los nombres de tu casa o con las llamadas que el gato ya oye a diario.',
    generator: {
      heading: 'Generar nombres de gato',
      intro:
        'Filtra por estilo, género, letra inicial o longitud apta para chapa. Añade los nombres que ya se usan en tu casa y el filtro de conflictos los esquivará.',
    },
    prose: {
      heading: 'Qué hace que un nombre de gato funcione',
      html: '<p>Los gatos responden mejor a nombres cortos con sonidos agudos. Su rango auditivo llega mucho más arriba que el nuestro, y los sonidos que distinguen con más nitidez son los brillantes: la «i» de Mimi, la k dura de Kiko. Un nombre hecho de sonidos graves y suaves no está mal, simplemente tiene que competir más por la atención frente a todo lo demás que hay en la habitación.</p><p>La otra mitad del problema es la separación. Los gatos distinguen su nombre de palabras parecidas, pero la distinción es fina, y ante un sonido ambiguo lo normal es que respondan con indiferencia en vez de arriesgarse. Las llamadas que se comprueban automáticamente en esta página son: {{catCues}}. Todo nombre de la lista que quede demasiado cerca de una de ellas se retira antes de que lo veas.</p><h2>Poner nombre a dos gatos, o a una camada de gatitos</h2><p>Dos gatos en una casa necesitan nombres que un humano pueda gritar con claridad bajo presión y que ellos no confundan entre sí. El modo pareja devuelve conjuntos de dos o tres nombres que comparten estilo y longitud aproximada pero empiezan con sonidos distintos, con la misma comprobación fonética aplicada entre los propios nombres. Para una camada, pon el tamaño en tres y el tema se mantiene en los tres.</p><h2>Nombres cortos para chapas de collar</h2><p>Las chapas de gato son más pequeñas que las de perro y el área de grabado es realmente ajustada: seis caracteres es un techo seguro si la chapa lleva además un número de teléfono. Pon el filtro de longitud máxima en cinco o seis y todas las sugerencias cabrán sin que el grabador tenga que encoger el texto hasta hacerlo ilegible.</p>',
    },
    showcase: {
      heading: 'Nombres de gato por estilo, con significado',
      lead: 'Una muestra de la lista completa. El generador de arriba filtra el resto por género, letra y longitud.',
      elegant: 'Nombres elegantes para gatos',
      mythical: 'Nombres mitológicos para gatos',
      food: 'Nombres de gato inspirados en comida',
    },
    more: {
      heading: 'Poner nombre a otra mascota',
      html: '<p>¿Es un perro? El <a href="{{url:dog}}">generador de nombres para perros</a> comprueba la lista completa de órdenes con las que se adiestra a los perros. ¿Ambos a la vez, o buscas algo neutral en cuanto a especie? Usa el <a href="{{url:pet}}">generador de nombres para mascotas</a>, o empieza por la <a href="{{url:home}}">página de inicio</a> para ver cómo encajan los significados, la pronunciación y el filtro de conflictos.</p>',
    },
    faqHeading: 'Preguntas sobre nombres de gato',
    faqs: [
      {
        q: '¿Cómo elijo el nombre de un gato?',
        a: 'Elige un nombre corto que contenga un sonido agudo y nítido: los gatos oyen las frecuencias altas mucho mejor que las bajas, y por eso los nombres con una «i» o una consonante fuerte obtienen respuesta con más fiabilidad. Dos sílabas terminadas en vocal funcionan bien. Prueba el nombre llamándolo de un extremo a otro de la habitación antes de decidirte.',
      },
      {
        q: '¿Los gatos aprenden de verdad su nombre?',
        a: 'Los gatos aprenden su nombre, y la investigación con gatos domésticos ha demostrado que lo distinguen de palabras que suenan parecido. Lo que decidan hacer al respecto es otro asunto. Como la discriminación es real pero fina, un nombre que se parezca mucho a una palabra de casa o al de otra mascota enturbia la señal de verdad.',
      },
      {
        q: '¿Qué nombres de gato debería evitar?',
        a: 'Evita los nombres que se parezcan a los sonidos que ya usas por casa — {{catCues}} — y cualquiera cercano al nombre de un familiar o de otra mascota. Un gato tiende a ignorar un sonido ambiguo antes que a arriesgarse, así que un nombre que se solape con una palabra de corrección acaba siendo desatendido por completo.',
      },
      {
        q: '¿Puedo escuchar el nombre del gato antes de elegirlo?',
        a: 'Sí. Cada nombre generado tiene un botón Pronunciar que usa el motor de voz integrado en tu navegador, sin complementos, cuenta ni descarga de audio. Resulta especialmente útil con los nombres de origen mitológico y no español, donde la grafía dice poco sobre cómo se pronuncia realmente el nombre.',
      },
      {
        q: '¿Y si voy a poner nombre a dos gatitos a la vez?',
        a: 'Activa «¿Vas a poner nombre a dos mascotas a la vez?» y el generador devolverá conjuntos emparejados en lugar de una lista suelta. Cada conjunto comparte estilo y longitud parecida pero empieza con sonidos distintos, así que dos gatitos de la misma casa no acudirán los dos — ni te ignorarán los dos — cuando llames a uno.',
      },
    ],
  },

  pet: {
    title: 'Nombres para Mascotas con Significado',
    description:
      'Nombres para una casa que ya tiene nombres. Cada uno muestra su significado, suena en voz alta y se comprueba contra tu familia, tus mascotas y tus órdenes.',
    breadcrumb: 'Nombres de mascota',
    h1: 'Nombres para mascotas: perros y gatos',
    answerBox:
      'Un nombre de mascota funciona cuando es corto, fácil de decir con firmeza y distinto de cualquier otro nombre u orden que ya se use en casa. Este generador cubre {{total}} nombres de perro y gato en {{styleCount}} estilos, muestra el significado documentado de cada uno, lo lee en voz alta y descarta los que chocarían con tu familia, tus otras mascotas o tus señales de adiestramiento.',
    generator: {
      heading: 'Generar nombres de mascota',
      intro:
        'Cambia entre perros, gatos o ambos a la vez. Los filtros, los significados, la pronunciación y el verificador de conflictos funcionan igual en todas las especies.',
    },
    prose: {
      heading: 'Poner nombre a una mascota en una casa que ya tiene nombres',
      html: '<p>El error más común al elegir un nombre es hacerlo de forma aislada. Un nombre que suena estupendo por sí solo puede ser un problema diario en una casa con un Jack, un Zack o un perro que ya responde a Bailey. Los animales responden a patrones de sonido, y dos patrones parecidos en una misma casa significan que ambos animales reaccionan a cualquiera de los dos nombres — o que ninguno responde con fiabilidad al suyo.</p><p>Para eso existe el campo «evitar nombres parecidos a». Escribe todos los nombres que ya se usan en casa — personas, mascotas, incluso un apodo que se grita por el jardín — y cada sugerencia se compara con todos ellos mediante una comprobación fonética, no una coincidencia de letras. Esa distinción importa: «Kay» y «Stay» no comparten ninguna letra al principio, pero chocan por completo al oírlos.</p><h2>Poner nombre a dos mascotas al mismo tiempo</h2><p>Dos mascotas que llegan juntas necesitan nombres que se pertenezcan sin confundirse entre sí. El modo pareja se ocupa de las dos mitades: agrupa nombres que comparten estilo y quedan dentro de dos letras de la misma longitud, y después descarta cualquier pareja cuyos miembros estén fonéticamente cerca. Pon el tamaño en tres para una camada y el tema se mantiene en los tres nombres.</p><h2>De dónde salen estos nombres y significados</h2><p>Cada nombre de la lista lleva un significado extraído de fuentes lingüísticas y culturales documentadas: etimologías registradas, mitología y orígenes de palabras establecidos. Nada se estima ni se inventa para rellenar un hueco, y el significado se muestra junto al nombre en vez de esconderse tras un desplegable o un formulario de correo. Puedes leer más sobre el enfoque en la <a href="{{url:about}}">página «Acerca de»</a>.</p><h2>Orientación por especie</h2><p>Para consejos ajustados a un animal concreto, usa el <a href="{{url:dog}}">generador de nombres para perros</a>, que compara los nombres con la lista completa de órdenes de adiestramiento, o el <a href="{{url:cat}}">generador de nombres para gatos</a>, que cubre las frecuencias a las que los gatos responden mejor. El <a href="{{url:home}}">generador de nombres para mascotas de la página de inicio</a> genera con ambas especies y trata con más detalle los estilos de fantasía y divertidos.</p>',
    },
    faqHeading: 'Preguntas sobre nombres de mascota',
    faqs: [
      {
        q: '¿Cuál es la mejor forma de elegir el nombre de una mascota?',
        a: 'Elige un nombre corto, fácil de decir con firmeza, distinto de cualquier otro nombre u orden de la casa, y con el que te sientas cómodo en público. Trabaja desde una lista filtrada en vez de desde una página en blanco, comprueba el significado antes de comprometerte y di el nombre en voz alta a volumen de llamada antes de decidir.',
      },
      {
        q: '¿Cómo pongo nombre a una mascota que llega a una casa donde ya hay otras?',
        a: 'Elige un nombre que no comparta sonido inicial ni rima con las mascotas que ya están allí. Los animales actuales responden a su propio nombre por reflejo, y dos nombres parecidos en una casa significan que ambos acuden cuando se llama a cualquiera. Escribe los nombres de las mascotas actuales en el campo «evitar nombres parecidos a» y el generador retirará las colisiones.',
      },
      {
        q: '¿Valen los mismos consejos para perros y gatos?',
        a: 'La regla básica es la misma para los dos — corto, distinto, constante — pero el énfasis cambia. Los perros necesitan la máxima separación respecto a las órdenes de adiestramiento, porque las órdenes se usan constantemente y el coste de la ambigüedad es una llamada más lenta. Los gatos responden con más fiabilidad a los sonidos agudos y tienden a ignorar un nombre ambiguo en vez de arriesgarse.',
      },
      {
        q: '¿Puedo usar este generador para una mascota que no sea perro ni gato?',
        a: 'Sí, con un matiz: los {{total}} nombres de aquí están seleccionados para perros y gatos, y la comprobación automática de conflictos usa señales caninas y felinas. Los nombres en sí — sus significados, sonidos y estilos — funcionan perfectamente para un conejo, un hurón o un caballo. El filtro de longitud y el filtro de conflictos domésticos valen para cualquier animal.',
      },
      {
        q: '¿Se guarda algo de lo que escribo en el generador?',
        a: 'No. El generador es un sitio estático sin cuentas, sin base de datos y sin procesamiento de tus datos en el servidor. Los nombres que escribes en el filtro de conflictos se comparan en tu navegador y se descartan al cerrar la pestaña. La política de privacidad detalla exactamente qué se recoge y qué no.',
      },
    ],
  },

  /**
   * Elementos comunes de las cuatro guías. Son artículos, no páginas de
   * herramienta, así que llevan firma y fecha de revisión.
   */
  guides: {
    bylineLabel: 'Perfect Pet Name Generator',
    updatedLabel: 'Actualizado el {{updated}}',
    homeHeading: 'Guías para elegir nombre',
    homeLead:
      'Elegir la palabra es lo rápido. Estas cuatro guías cubren todo lo que la rodea: enseñar el nombre, los nombres que conviene descartar, poner nombre a dos animales a la vez y de dónde salen los significados de este sitio.',
    readMore: 'Leer la guía',
  },

  /** Aviso de cookies. Solo se muestra donde el consentimiento es obligatorio. */
  consent: {
    title: 'Cookies en este sitio',
    bodyHtml:
      'Usamos cookies para medir cómo se utiliza el sitio y para sostenerlo con publicidad. Si rechazas, el generador sigue funcionando igual que ahora: todos los filtros, la comprobación de conflictos y el botón de pronunciación se ejecutan en tu navegador en cualquier caso. La <a href="{{url:privacy}}">política de privacidad</a> lo explica en detalle.',
    accept: 'Aceptar',
    reject: 'Rechazar',
    manage: 'Configuración de cookies',
    ariaLabel: 'Consentimiento de cookies',
  },

  teach: {
    title: 'Cómo enseñar su nombre a un perro o un gato',
    description:
      'Un método en cuatro fases para que un cachorro o un gato responda a su nombre: cómo cargar el sonido, cuánto practicar y qué lo estropea sin que lo notes.',
    breadcrumb: 'Enseñar el nombre',
    h1: 'Cómo enseñar su nombre a un perro o un gato',
    keywords:
      'enseñar el nombre a un perro, reconocimiento del nombre, enseñar el nombre a un cachorro, enseñar el nombre a un gato, señal contaminada',
    answerBox:
      'Enseña el nombre asociando el sonido con algo bueno antes de pedir respuesta alguna: di el nombre una vez, marca el instante en que el animal te mira, recompensa y repite. Entre cinco y diez repeticiones, tres veces al día, en una habitación tranquila, bastan para que la mayoría de cachorros y gatitos giren la cabeza de forma fiable en una semana. El nombre es una petición de atención, nunca una corrección, y la forma más rápida de perderlo es usarlo cuando estás enfadado.',
    card: {
      heading: 'Enseñar el nombre',
      body: 'Un protocolo en cuatro fases para conseguir un giro de cabeza fiable, cuánto debería tardar y los hábitos que lo deshacen sin ruido.',
    },
    html: '<h2>Qué significa realmente «saber su nombre»</h2><p>Un animal no aprende su nombre como una etiqueta. Lo aprende como un sonido que anticipa algo por lo que merece la pena darse la vuelta. Esa distinción no es académica: decide todo el método de enseñanza. No le estás enseñando quién es; estás construyendo un reflejo en el que un ruido concreto, entre todo lo que oye a lo largo del día, significa de forma fiable <strong>mírame, va a pasar algo bueno</strong>.</p><p>La consecuencia práctica es que el nombre tiene una sola función: comprarte la atención del animal para poder pedirle otra cosa. La llamada, un objetivo con la mano, enganchar la correa, apartar la mirada de otro perro: todo empieza con el giro de cabeza. Un nombre que solo funciona a medias no es un problema de nombre, es un problema de atención, y aparece después en todas las demás señales que enseñes.</p><h2>El método en cuatro fases</h2><h3>Fase uno: cargar el sonido</h3><p>Empieza en la habitación más tranquila de la casa, sin otros animales presentes y con algo que el animal desee de verdad: premios pequeños, blandos y rápidos de comer para la mayoría de perros; un lametón de comida húmeda, una caña con plumas o unos segundos de rascado en la barbilla para los gatos. Di el nombre una vez, en un tono cálido y sereno. En cuanto una oreja se mueva o la cabeza gire hacia ti, márcalo — un «sí» corto, un clic o simplemente la aparición de la comida — y entrega la recompensa.</p><p>Si no ocurre nada en dos o tres segundos, no repitas el nombre. Haz un ruido completamente distinto — un beso sonoro, un golpecito en el suelo — y recompensa el giro que consigas. Repetir un nombre en el vacío es el error más común, porque lo que el animal aprende es que el nombre se puede ignorar varias veces antes de que pase nada.</p><h3>Fase dos: añadir distancia y ángulo</h3><p>Cuando el giro de cabeza sea inmediato, empieza a variar dónde estás. Di el nombre desde el otro extremo de la habitación, desde detrás, desde otra altura, sentado en el suelo, de pie, desde la habitación contigua. Cada variación es información genuinamente nueva para un animal: una señal aprendida solo mientras te agachas delante de él suele desmoronarse la primera vez que la dices de pie.</p><h3>Fase tres: generalizarlo</h3><p>Pasa al jardín, luego al pasillo, luego a la acera y después a un parque tranquilo. La distracción es el eje que importa, y debe subir lo bastante despacio como para que sigas obteniendo el giro. Si pierdes la respuesta, has saltado demasiado: vuelve al último sitio donde funcionaba y sube la dificultad en pasos más pequeños. Para un gato de interior, generalizar significa distintas habitaciones, distintos momentos del día y — lo más útil — practicar mientras el gato está algo ocupado, no dormido.</p><h3>Fase cuatro: protegerlo</h3><p>Proteger el nombre es la fase que casi todo el mundo se salta, y la única que dura siempre. Cada vez que el nombre va seguido de algo que al animal le disgusta, el reflejo que construiste se debilita un poco. Sigue recompensando el giro de forma intermitente durante toda la vida del animal: no siempre, pero sí lo bastante a menudo como para que ese sonido siga mereciendo respuesta.</p><h2>Con qué frecuencia y durante cuánto tiempo</h2><p>Las sesiones deben ser cortas y frecuentes: de cinco a diez repeticiones, dos o tres veces al día, terminando cuando el animal todavía quiere más. Diez minutos de machaque son peores que noventa segundos repetidos tres veces, porque un animal cansado o aburrido está aprendiendo que el nombre anticipa tedio.</p><p>Un cachorro o gatito sin mal historial suele girar de forma fiable en una habitación tranquila en tres a siete días, y aguanta con distracción leve al cabo de dos a cuatro semanas. Un adulto de acogida con pasado desconocido puede tardar más, y a un animal que ha oído su nombre antiguo gritado con enfado puede irle mejor con uno nuevo, lo que es una razón perfectamente válida para rebautizarlo.</p><h2>Qué estropea el reconocimiento del nombre</h2><ul><li><strong>Usar el nombre como corrección.</strong> «¡Bailey!» gritado desde el otro lado de la sala cuando está mordiendo algo le enseña a Bailey que ese sonido a veces anticipa problemas. Los adiestradores lo llaman señal contaminada. Usa «eh-eh», «fuera» o simplemente ve a interrumpir: cualquier cosa menos el nombre.</li><li><strong>Llamarlo por su nombre para cosas que odia.</strong> Cortarle las uñas, las gotas para los oídos, el transportín, el baño, el final del paseo. Ve a buscarlo en vez de llamarlo, o enseña una señal aparte para eso.</li><li><strong>Repetirlo.</strong> «Bailey. Bailey. ¡Bailey!» enseña que las dos primeras veces son ruido.</li><li><strong>Quince apodos.</strong> Elige un nombre y como mucho un apodo hasta que la respuesta sea sólida. Bailey, Bay-Bay, Bailey-Boo y Míster B son cuatro sonidos distintos para un animal que no conoce ninguno todavía.</li><li><strong>Un nombre que choca con una orden.</strong> Si el nombre suena como un comando — {{dogCommandsShort}} y similares — se le pide al animal separar cada día dos señales casi idénticas. Esto se puede evitar antes de decidir, y por eso los generadores de este sitio lo comprueban automáticamente.</li></ul><h2>Gatos: el mismo mecanismo, otra moneda</h2><p>Los gatos aprenden a reconocer su nombre igual que los perros; trabajos publicados sobre gatos domésticos han encontrado que distinguen su propio nombre de palabras que suenan parecido. Lo que cambia es la recompensa y la expectativa. La comida funciona, pero también un tipo concreto de atención, y la meta honesta para la mayoría de gatos es que giren la oreja y miren, no la llamada a la carrera de un perro.</p><p>Practica antes de las comidas, no después, mantén las sesiones por debajo del minuto y para en cuanto la cola empiece a moverse. Los gatos también responden mejor a nombres con sonidos brillantes y agudos — la «i» larga de Mimi, la k dura de Kiko —, y por eso los nombres cortos con esas notas suelen funcionar mejor.</p><h2>Cambiar el nombre a un animal adoptado o adulto</h2><p>Rebautizar es más fácil de lo que la gente espera, porque el nombre antiguo tampoco era más que un sonido. Haz un puente durante una semana: di el nombre nuevo seguido inmediatamente del antiguo, recompensa el giro y, al cabo de unos días, deja de decir el antiguo. Si el nombre nuevo comparte forma vocálica con el viejo — Suki por Sushi, Mati por Magui —, el puente es aún más corto, aunque conviene asegurarse de que el nombre antiguo no arrastra una historia desagradable antes de repetirlo a propósito.</p>',
    faqHeading: 'Preguntas sobre enseñar el nombre',
    faqs: [
      {
        q: '¿Cuánto tarda un cachorro en aprender su nombre?',
        a: 'La mayoría de cachorros gira de forma fiable hacia su nombre en una habitación tranquila en tres a siete días con sesiones cortas dos veces al día, y mantiene la respuesta con distracción leve tras dos a cuatro semanas. El avance depende mucho más de la constancia con que el nombre anticipe algo bueno que de la edad del cachorro o de los minutos dedicados.',
      },
      {
        q: '¿Debo repetir el nombre de mi mascota si no responde?',
        a: 'No. Repetirlo le enseña que las primeras veces se pueden ignorar sin consecuencias. Si no hay respuesta en dos o tres segundos, usa un sonido distinto, como un beso sonoro o un golpecito en el suelo, recompensa el giro que consigas y facilita la siguiente repetición acercándote o quitando una distracción.',
      },
      {
        q: '¿Puedo usar el nombre de mi mascota para regañarla?',
        a: 'Evítalo. Usar el nombre para corregir lo convierte en una señal que a veces anticipa problemas, lo que los adiestradores llaman señal contaminada, y el animal empieza a dudar antes de girarse. Reserva un interruptor aparte, como "eh-eh" o "fuera", para la conducta no deseada y deja el nombre solo para pedir atención.',
      },
      {
        q: '¿Los gatos aprenden de verdad su nombre?',
        a: 'Sí. Los gatos domésticos distinguen su propio nombre de palabras que suenan parecido, y lo aprenden mediante el mismo proceso de asociación que los perros. La meta realista es distinta: en la mayoría de gatos, un giro fiable de oreja y una mirada ya es un éxito, y las sesiones funcionan mejor si duran menos de un minuto, se hacen antes de comer y se cortan al primer signo de desinterés.',
      },
      {
        q: '¿Cómo le cambio el nombre a un perro o gato adoptado?',
        a: 'Haz de puente durante una semana: di el nombre nuevo, sigue inmediatamente con el antiguo y recompensa el giro. Al cabo de unos días, deja de decir el antiguo y recompensa la respuesta al nuevo por sí solo. Cambiar el nombre suele ser sencillo, y merece la pena de verdad si el anterior se usaba con enfado.',
      },
    ],
    related: {
      heading: 'Continúa por aquí',
      html: '<p>¿Todavía eligiendo? El <a href="{{url:dog}}">generador de nombres para perros</a> y el <a href="{{url:cat}}">generador de nombres para gatos</a> comprueban cada sugerencia frente a las órdenes que tu animal tendrá que aprender, lo que elimina de raíz la peor versión de este problema. Antes de decidir conviene leer qué <a href="{{url:avoid}}">nombres evitar</a> y, si llegan dos animales a la vez, en qué se diferencia <a href="{{url:pairs}}">nombrar a dos mascotas</a> de nombrar una dos veces.</p>',
    },
  },

  avoid: {
    title: 'Nombres de mascota que evitar, y por qué',
    description:
      'Los nombres de perro y gato que dan problemas después: choques con órdenes, colisiones domésticas, nombres que se acortan mal y chistes con fecha de caducidad.',
    breadcrumb: 'Nombres que evitar',
    h1: 'Nombres de mascota que evitar, y por qué',
    keywords:
      'nombres de mascota que evitar, nombres de perro que evitar, nombres de gato que evitar, nombres que suenan como órdenes, malos nombres de mascota',
    answerBox:
      'Evita los nombres que suenen como una orden que piensas enseñar, los que chocan con una persona o un animal que ya vive en casa, los que no querrías oír en voz alta en una sala de espera y aquellos cuya forma corta no has elegido a conciencia. Casi todo arrepentimiento con el nombre cae en una de esas cuatro categorías, y las cuatro se ven en unos treinta segundos si dices la lista en voz alta antes de decidir.',
    card: {
      heading: 'Nombres que evitar',
      body: 'Cuatro categorías que dan problemas meses después: choques con órdenes, colisiones domésticas, formas cortas malas y chistes de vida corta.',
    },
    html: '<h2>1. Nombres que suenan como una orden</h2><p>Esta es la que tiene un coste medible. Un perro aprende las señales como patrones de sonido, y dos patrones que se diferencian en un solo sonido son realmente difíciles de distinguir, sobre todo a distancia, al aire libre, con viento y tráfico, y con la voz elevada. «Bo» frente a «no», «Kit» frente a «sit», «Kay» frente a «stay», «Dan» frente a «down»: cada uno de esos pares le pide al animal una discriminación que no tiene motivo alguno para hacer bien.</p><p>Lo que se paga no es el nombre, es la orden. Cada repetición ambigua ralentiza el comando, y el comando que suele ralentizar es la llamada, justo el que importa cuando la verja se queda abierta. Las órdenes que conviene comprobar son las que vas a enseñar de verdad: {{dogCommandsShort}} y el resto del repertorio básico, más lo que tu casa dice sin pensar, como «suelta», «espera» o «abajo».</p><p>La trampa es la rima, no la ortografía. «Kay» y «stay» no comparten ni la primera letra y en voz alta colisionan por completo, y por eso comparar nombres por cómo se escriben se pierde la mayor parte del problema. Los generadores de aquí comparan fonéticamente, frente a {{dogCommandCount}} órdenes comunes.</p><h2>2. Nombres que chocan con la casa</h2><p>El segundo animal de la casa es donde esto muerde. Un perro que vive con un Bailey tendrá problemas con Hayley; un gato en una casa con un Jake tendrá problemas con Jade. Los nombres de los niños, el de tu pareja, el de la abuela que viene cada semana y el apodo que de verdad se usa cuentan todos: el nombre doméstico que importa es el que se grita por el jardín, no el del registro civil.</p><p>Dos animales con nombres parecidos es la peor versión, porque ambos aprenden a responder a un sonido ambiguo y pierdes la capacidad de dirigirte a uno solo. Si ya tienes un Milo, tacha Miles, Marlo, Mylo y Nilo antes de empezar.</p><h2>3. Nombres que se acortan de una forma que no elegiste</h2><p>Los nombres largos se acortan. Esto no es un quizá: Hércules acaba en Herc, Maximiliano en Max, Bartolomé en Bart, normalmente en quince días y normalmente no por ti. El nombre que usarás cada día es la forma corta, así que merece la pena elegirla a conciencia en lugar de descubrirla.</p><p>Di el nombre completo diez veces al volumen con que llamarías y escucha qué hace tu boca con él. Si el resultado es una forma que no te gusta, o que choca con una orden, el nombre largo es la elección equivocada por bien que quede sobre el papel. Este es también el argumento práctico del filtro de longitud de los generadores: una chapa grabada admite unos ocho caracteres por línea antes de que la letra empiece a encoger, y lo que se recorta es el nombre que compite con el teléfono.</p><h2>4. Chistes con poca vida útil</h2><p>Los nombres graciosos son una categoría legítima y aquí hay {{funnyCount}}, pero el chiste tiene que superar unas pruebas concretas. Lo leerá en voz alta una recepcionista en una sala de espera llena. Se escribirá en un registro de microchip, en una póliza de seguro y en una ficha de residencia. Lo gritarás tú, en un parque público, quizá durante varios minutos, mientras la gente mira.</p><p>Los nombres construidos sobre un doble sentido, un personaje público o una referencia atada a un año concreto suelen fallar al menos una de esas pruebas. Los graciosos que aguantan son aquellos cuyo humor nace del contraste entre el nombre y el animal — un chihuahua llamado Albóndiga, un gato enorme y plácido llamado Chonk —, porque ese contraste no caduca.</p><h2>Cuatro más pequeñas que conviene conocer</h2><ul><li><strong>Nombres que significan algo desafortunado en otro idioma.</strong> Un nombre que se lee precioso en una lengua a veces se lee fatal en otra, y eso merece diez segundos de comprobación cuando el nombre tiene origen extranjero. Todos los nombres de este sitio muestran su significado documentado justo por eso.</li><li><strong>Nombres difíciles de deletrear en voz alta.</strong> Se lo deletrearás al veterinario, a la peluquería, a la aseguradora y a la residencia. Un nombre que hay que deletrear dos veces cada vez es un pequeño impuesto que pagas durante quince años.</li><li><strong>Reutilizar el nombre de una mascota anterior.</strong> Es habitual, comprensible y conviene pensarlo dos veces: invita a una comparación que el animal nuevo no puede ganar, y puede volver el nombre más difícil de decir justo los días en que más cuesta.</li><li><strong>Nombres que acaban en un sonido suave que se apaga.</strong> Los nombres que se desvanecen en una vocal o consonante blanda llegan mal al aire libre. Una vocal clara o una consonante seca al final — la «-o» de Milo, la «-t» dura de Bandit — atraviesa el viento y la distancia mucho mejor.</li></ul><h2>La prueba de treinta segundos</h2><p>Antes de decidir, haz esto con la lista. Ponte en un extremo de la casa o del jardín y llama cada nombre tres veces al volumen que usarías en un parque. Luego dilo justo después de cada orden que piensas enseñar — «sit, Kit», «stay, Kay» — y escucha la colisión. Después imagínalo leído en voz alta por un desconocido en una sala de espera. Lo que sobreviva a las tres pruebas es un nombre con el que puedes vivir.</p>',
    faqHeading: 'Preguntas sobre nombres que evitar',
    faqs: [
      {
        q: '¿Qué nombres de perro debería evitar?',
        a: 'Evita los nombres que rimen o se parezcan mucho a las órdenes que piensas enseñar — {{dogCommandsShort}} y señales similares — junto con los nombres cercanos a los de una persona u otro animal que ya viva en casa. Evita también los nombres largos cuya forma corta no hayas elegido a conciencia, porque esa forma corta es la que usarás cada día.',
      },
      {
        q: '¿Por qué importa que el nombre suene como una orden?',
        a: 'Porque el animal aprende ambos como patrones de sonido, y dos patrones separados por un único sonido son difíciles de distinguir a distancia o al aire libre. Cada repetición ambigua ralentiza la orden más que el nombre, y la orden más afectada suele ser la llamada, que es justo la que más importa cuando falla.',
      },
      {
        q: '¿Pueden dos mascotas de la misma casa tener nombres parecidos?',
        a: 'Es mejor evitarlo. Con nombres parecidos, ambos animales responden a un sonido ambiguo, así que pierdes la capacidad de dirigirte a uno en concreto y los dos tardan más en aprender el suyo. Busca sonidos iniciales distintos y una diferencia clara en la forma vocálica, no solo una grafía distinta.',
      },
      {
        q: '¿Es mala idea un nombre largo para una mascota?',
        a: 'No en sí mismo, pero casi siempre se acorta en el uso diario, así que la elección práctica es la forma corta y no la completa. Di el nombre largo varias veces al volumen con que llamarías, escucha en qué se convierte y comprueba que el resultado te gusta y no choca con ninguna orden.',
      },
      {
        q: '¿Cómo sé si un nombre gracioso envejecerá bien?',
        a: 'Pruébalo en tres sitios: leído en voz alta por una recepcionista en una sala de espera llena, escrito en un registro de microchip y en un seguro, y gritado por ti en un parque público. Los chistes basados en un doble sentido, un personaje público o un solo año suelen fallar alguna, mientras que el humor que nace del contraste entre el nombre y el animal suele durar.',
      },
    ],
    related: {
      heading: 'Continúa por aquí',
      html: '<p>El <a href="{{url:dog}}">generador de nombres para perros</a> y el <a href="{{url:cat}}">generador de nombres para gatos</a> aplican solos las dos primeras reglas de esta página: introduce los nombres de tu casa y cada choque se elimina o se marca. Una vez elegido, <a href="{{url:teach}}">enseñarlo</a> lleva alrededor de una semana, y si vas a nombrar dos animales a la vez, <a href="{{url:pairs}}">nombrar a dos mascotas</a> cubre la restricción añadida.</p>',
    },
  },

  pairs: {
    title: 'Poner nombre a dos mascotas a la vez',
    description:
      'Nombrar a una pareja o a una camada no es nombrar dos veces: las tres restricciones que hacen funcionar los nombres en pareja y los temas que aguantan.',
    breadcrumb: 'Nombrar a dos mascotas',
    h1: 'Poner nombre a dos mascotas a la vez',
    keywords:
      'nombrar dos mascotas, nombres para pareja de animales, nombres para hermanos de camada, nombres a juego, nombres para dos perros, nombres para dos gatos',
    answerBox:
      'Los nombres en pareja necesitan tres cosas a la vez: un vínculo que los haga leerse como conjunto, sonidos iniciales claramente distintos y longitudes que no se separen más de un par de letras. El tema es la parte fácil y aquella en la que la mayoría invierte de más; lo que decide si puedes llamar a un animal sin que acudan los dos es la distinción, y es justo la restricción que se ignora.',
    card: {
      heading: 'Nombrar a dos mascotas',
      body: 'Por qué las parejas unidas y los hermanos de camada necesitan nombres que conecten y separen a la vez, y los temas que consiguen ambas cosas.',
    },
    html: '<h2>Por qué dos es un problema distinto</h2><p>Nombrar a un animal es buscar un nombre que te guste. Nombrar a dos es un problema de restricciones, y las restricciones tiran en direcciones opuestas: los nombres deben pertenecer al mismo conjunto y deben ser imposibles de confundir. La mayoría de las parejas de nombres falla en lo segundo, porque lo primero es lo divertido de pensar.</p><p>El fallo es concreto y no es sutil. Dos animales cuyos nombres comparten sonido inicial y número de sílabas aprenden ambos a responder a algo intermedio: llamas a uno, vienen los dos y ninguno está respondiendo realmente al suyo. En una casa con dos animales eso es un coste diario, y es peor justo cuando importa: en la puerta, en la verja, a la hora de comer.</p><h2>Las tres restricciones</h2><h3>Un vínculo, y ligero</h3><p>La conexión puede ser mucho más ligera de lo que se supone. Mismo origen, misma época, mismo campo, mismo registro: Nerón y Casio son obviamente una pareja sin que ninguno sea la mitad de un chiste emparejado. Lo que conviene evitar es un vínculo tan estrecho que los dos nombres se conviertan en una sola unidad — Sal y Pimienta, Yin y Yang, Cosa Uno y Cosa Dos —, porque esa fórmula viaja mal si los animales llegan a separarse, y es una consideración real en una pareja unida, donde uno puede sobrevivir al otro muchos años.</p><h3>Sonidos iniciales distintos</h3><p>Esta es la restricción que hace el trabajo de verdad. El primer sonido de un nombre carga con casi toda la discriminación, así que dos nombres no deberían empezar por la misma consonante ni por la misma forma vocálica. Bella y Bailey es el error clásico: misma apertura, misma longitud, mismo patrón de acento. Bella y Otto tiene el mismo registro estético sin nada de la confusión.</p><p>La rima final es la versión de segundo orden del mismo problema. Maisie y Daisy se diferencian al principio pero se funden a cualquier distancia. Busca nombres que difieran en los dos extremos si puedes, y al principio como mínimo.</p><h3>Longitud y ritmo parecidos</h3><p>Nombres que no se separen más de una o dos letras, e idealmente con el mismo número de sílabas, se leen como un conjunto deliberado y no como un accidente. Milo y Otis funciona; Milo y Bartolomé parecen dos decisiones inconexas y, en la práctica, el largo acaba acortado en algo que quizá ya no encaje con la pareja.</p><h2>Temas que aguantan</h2><p>Los temas que sobreviven son los que tienen miembros suficientes para permitir una búsqueda de verdad, y bastante variedad interna como para que no te veas obligado a dos elecciones que suenan igual. Mitología de una sola tradición, constelaciones, árboles, especias, músicos de jazz, montañas, ríos, pintores, grupos de palabras de un mismo origen: todos ellos dan decenas de candidatos en el mismo registro, lo que significa que puedes permitirte descartar los que colisionan.</p><p>Los temas que fallan son las parejas cerradas: dos mitades de una frase, dos personajes que siempre se nombran juntos o cualquier cosa donde un nombre no significa nada sin el otro. Son encantadores durante un año e incómodos después.</p><h2>Hermanos de camada y parejas unidas</h2><p>Los hermanos de camada que llegan juntos son el caso más limpio: eliges los dos nombres a la vez, así que puedes optimizar el conjunto entero en lugar de encajar un nombre alrededor de otro que ya existe. Aprovéchalo. Aplica las restricciones a la pareja como conjunto y prepárate para descartar un nombre que te guste por otro que separe mejor.</p><p>Las parejas unidas — animales adoptados juntos que ya están apegados — traen una consideración extra. A menudo todo el mundo a su alrededor los llamará, alimentará y moverá como una unidad, lo que hace la restricción de distinción más importante, no menos, porque el entorno ya los está mezclando. Si uno llega con nombre, trata ese nombre como fijo y busca alrededor.</p><h2>Añadir un segundo animal a uno que ya está</h2><p>Aquí el primer nombre es una restricción dura, y el trabajo es encontrar un segundo que encaje a su lado sin colisionar. Toma el nombre existente y descarta todo lo que comparta su sonido inicial, todo lo que rime con él y todo lo que quede a un sonido de distancia en el medio. Después busca el vínculo, y hazlo con calma, porque una conexión temática suelta se lee como intencionada y una estrecha no compensa la confusión que compra.</p><h2>Tres o más</h2><p>Tres nombres multiplican las comprobaciones por pares en lugar de sumarlas: cada nombre tiene que separarse de todos los demás, no solo del último que elegiste. En la práctica, un tema con campo amplio y tres sonidos iniciales distintos es todo el método, y merece la pena escribir los tres nombres y decir cada uno en voz alta pensando en los otros dos.</p><p>El modo pareja de los generadores de este sitio hace exactamente esto: construye conjuntos de dos o tres que comparten estilo, quedan cerca en longitud, empiezan por sonidos distintos y superan entre sí la misma comprobación fonética que el filtro de conflictos aplica a los nombres de tu casa.</p>',
    faqHeading: 'Preguntas sobre nombrar a dos mascotas',
    faqs: [
      {
        q: '¿Deberían dos mascotas tener nombres a juego?',
        a: 'Un vínculo temático ligero funciona bien; una pareja estrechamente emparejada normalmente no. Nombres del mismo origen, época o campo se leen como un conjunto deliberado sin dejar de ser independientes, mientras que dos mitades de una frase como Sal y Pimienta dejan de tener sentido si los animales se separan, lo que importa sobre todo en una pareja unida donde uno puede sobrevivir al otro.',
      },
      {
        q: '¿Qué hace que dos nombres de mascota sean demasiado parecidos?',
        a: 'Compartir el sonido inicial es el problema principal, porque el primer sonido carga con casi toda la discriminación: Bella y Bailey es el ejemplo clásico. Las terminaciones que riman, como Maisie y Daisy, son el segundo, porque los nombres se funden a distancia. Busca sonidos iniciales distintos y, si puedes, también finales distintos.',
      },
      {
        q: '¿Cómo nombro a una segunda mascota si la primera ya tiene nombre?',
        a: 'Trata el nombre existente como fijo y busca a su alrededor. Descarta todo lo que comparta su sonido inicial, todo lo que rime con él y todo lo que quede cerca en el medio, y después busca un vínculo temático suelto. Una conexión relajada se lee como intencionada sin comprar nada de la confusión que trae una estrecha.',
      },
      {
        q: '¿Los hermanos de camada necesitan nombres temáticos?',
        a: 'No necesitan un tema, pero elegir los dos nombres a la vez es una ventaja real que conviene aprovechar. Como ninguno está fijado, puedes optimizar todo el conjunto buscando distinción en lugar de encajar un nombre alrededor de otro, lo que normalmente significa estar dispuesto a soltar un nombre que te gusta por otro que separa mejor.',
      },
      {
        q: '¿Cómo nombro a tres mascotas sin confundirlas?',
        a: 'Cada nombre tiene que separarse de todos los demás, así que tres nombres implican tres comprobaciones por pares y no dos elecciones sucesivas. Elige un tema con campo amplio, da a cada nombre un sonido inicial distinto, y después escribe los tres y di cada uno en voz alta pensando en los otros dos antes de decidir.',
      },
    ],
    related: {
      heading: 'Continúa por aquí',
      html: '<p>Activa el modo pareja en el <a href="{{url:pet}}">generador de nombres para mascotas</a> para que los conjuntos se construyan y se comprueben solos, o usa los generadores de <a href="{{url:dog}}">perros</a> y <a href="{{url:cat}}">gatos</a> para una sola especie. Merece la pena leer la lista más amplia de <a href="{{url:avoid}}">nombres que evitar</a> antes de decidir, y <a href="{{url:teach}}">enseñar los nombres</a> después resulta más fácil cuando los dos son de verdad distintos.</p>',
    },
  },

  meanings: {
    title: 'De dónde salen los significados de los nombres',
    description:
      'Cómo se documentan aquí los significados: qué fuentes cuentan, cómo se tratan las etimologías discutidas y por qué ningún nombre lleva uno inventado.',
    breadcrumb: 'Significado de los nombres',
    h1: 'De dónde salen los significados de los nombres',
    keywords:
      'significado de nombres de mascota, origen de los nombres, significado de nombres de perro, significado de nombres de gato, política editorial, etimología de nombres',
    answerBox:
      'Cada uno de los {{total}} nombres de este sitio lleva un significado tomado de una fuente documentada: una etimología registrada, una figura mitológica o literaria atestiguada, o el origen llano de una palabra. Cuando las fuentes discrepan, la entrada dice qué es en lugar de elegir un ganador. Ningún significado se deduce aquí de cómo suena un nombre, y ningún nombre aparece con un significado inventado para rellenar el hueco.',
    card: {
      heading: 'De dónde salen los significados',
      body: 'El criterio de documentación detrás de cada nombre del sitio: qué cuenta como fuente, cómo se tratan las discrepancias y cómo avisar de un error.',
    },
    html: '<h2>Por qué existe esta página</h2><p>El contenido sobre significados de nombres es inusualmente fácil de equivocar e inusualmente difícil de comprobar. Un significado inventado en un sitio se copia en una docena más en un año, y a partir de ahí parece bien documentado simplemente porque aparece en todas partes. Como el significado que se muestra junto a un nombre es una de las dos cosas sobre las que este sitio te pide decidir, pareció justo dejar por escrito a qué criterio se someten esos significados.</p><h2>Qué cuenta como fuente</h2><p>Un nombre solo aparece aquí si su significado se remonta al menos a uno de los siguientes:</p><ul><li><strong>Una etimología registrada.</strong> Un nombre con derivación documentada en una lengua establecida — hebreo, griego, latín, nórdico antiguo, germánico, irlandés, japonés y demás — donde la raíz y su sentido están atestiguados y no reconstruidos por parecido.</li><li><strong>Una figura atestiguada.</strong> Nombres de la mitología, el folclore, la historia o la ficción publicada, donde el significado indicado es quién o qué fue esa figura y no una afirmación sobre las raíces de la palabra. Odín, Atenea, Fenrir y Gandalf se describen así, porque eso es lo que está realmente documentado sobre ellos.</li><li><strong>Un origen léxico llano.</strong> Nombres que son simplemente palabras — Pepper, Biscuit, Shadow, Willow — donde el significado es el sentido ordinario de la palabra y su origen consta en obras de consulta generales.</li><li><strong>Un diminutivo documentado.</strong> Formas cortas cuyo nombre de origen tiene un significado registrado, indicado como tal: Abby figura como forma corta de Abigail, con el significado de Abigail adjunto en lugar de uno propio distinto.</li></ul><h2>Qué no cuenta</h2><ul><li><strong>Derivación por parecido sonoro.</strong> Que un nombre se parezca a una palabra de alguna lengua no significa que derive de ella. El parecido es como empiezan casi todas las etimologías inventadas.</li><li><strong>Significado por asociación.</strong> Un nombre popular para gatos negros no significa «negro», y un nombre habitual entre perros grandes no significa «fuerte».</li><li><strong>Fuentes circulares.</strong> Un significado que solo aparece en listas de nombres, todas ellas copiándose entre sí, se trata como no documentado.</li><li><strong>Invención.</strong> Si no se puede documentar un significado, el nombre se deja fuera de la lista en lugar de darle uno verosímil. Esa es la razón de que falten algunos nombres de mascota perfectamente buenos.</li></ul><h2>Significados discutidos y múltiples</h2><p>Las etimologías discrepan más a menudo de lo que admiten las listas de nombres. Los nombres cruzan lenguas, recogen etimologías populares y son reinterpretados por las culturas que los toman prestados, y con frecuencia no hay una única respuesta correcta. Cuando las fuentes chocan, la entrada da la lectura mejor atestiguada y dice de qué tipo de cosa se trata — una forma corta, una figura mitológica, una palabra de una lengua concreta — en lugar de presentar una interpretación como hecho zanjado.</p><p>La implicación práctica está también en la <a href="{{url:terms}}">página de términos</a>, y conviene repetirla aquí: ningún significado de este sitio pretende ser la interpretación definitiva ni la única de un nombre. Si el significado de un nombre te importa de forma especial — un nombre conmemorativo, uno con carga religiosa o cultural, uno en una lengua que no hablas —, verifícalo en una fuente de tu confianza antes de comprometerte con él.</p><h2>Los significados son para ti, no para el animal</h2><p>Merece la pena decirlo con claridad, porque cambia cuánto peso debe tener el significado. Un animal aprende su nombre como un sonido y no tiene acceso a lo que quiere decir. El significado importa porque tú dirás esa palabra varias veces al día durante una década o más, y porque saber que Luna es «luna» en latín, o que Loki es el dios embaucador nórdico, es a menudo lo que convierte una lista de seis en una decisión.</p><p>Esa es también la razón de que aquí los significados estén a la vista en la tarjeta y no detrás de un desplegable, una cuenta o un formulario de correo. Un significado que cuesta ver es un significado que no vas a comprobar.</p><h2>Cómo se mantiene la lista</h2><p>La lista de nombres es un archivo estático con {{dogCount}} nombres de perro y {{catCount}} de gato — {{total}} nombres únicos en total, porque un nombre apto para ambas especies se guarda una vez por cada una. Los nombres se añaden por lotes, y cada incorporación tiene que llegar con un significado adjunto; un nombre sin significado documentado no entra a la espera de conseguirlo.</p><p>Las correcciones son la principal vía por la que se detectan errores, y son muy bienvenidas. Si un significado de aquí parece equivocado, envía el nombre y, si la tienes, una fuente que consideres fiable a <a href="mailto:{{email}}">{{email}}</a> o a través de la <a href="{{url:contact}}">página de contacto</a>. Las correcciones que se sostienen se aplican al archivo de datos, que es lo que lee cada página en cada idioma, así que un arreglo aterriza en todas partes a la vez.</p>',
    faqHeading: 'Preguntas sobre el significado de los nombres',
    faqs: [
      {
        q: '¿De dónde salen los significados de los nombres de este sitio?',
        a: 'Cada significado se remonta a una fuente documentada: una etimología registrada en una lengua establecida, una figura atestiguada de la mitología, el folclore, la historia o la ficción publicada, un origen léxico llano, o un diminutivo cuyo nombre de origen tiene significado registrado. Los nombres cuyo significado no se puede documentar se dejan fuera en lugar de recibir uno inventado.',
      },
      {
        q: '¿Se garantiza que los significados sean correctos?',
        a: 'No, y ninguna fuente sobre significados de nombres puede afirmarlo honestamente. Las etimologías se discuten, los nombres cruzan lenguas y recogen interpretaciones nuevas, y a menudo no hay una respuesta zanjada. Cada entrada da la lectura mejor atestiguada, y si el significado de un nombre te importa de forma especial conviene verificarlo en una fuente de tu confianza antes de decidir.',
      },
      {
        q: '¿Por qué faltan algunos nombres de mascota comunes?',
        a: 'Normalmente porque no se pudo documentar ningún significado para ellos. Un nombre solo se añade con un significado con fuente adjunta, así que un nombre popular sin nada fiable detrás se deja fuera en lugar de aparecer con una suposición verosímil. Si conoces un nombre que debería estar y puedes señalar una fuente, merece la pena enviarlo.',
      },
      {
        q: '¿El significado del nombre afecta a mi mascota?',
        a: 'No. Un animal aprende su nombre como un patrón de sonido y no tiene acceso a lo que significa la palabra. Los significados importan a la persona que elige, que dirá esa palabra varias veces al día durante una década o más, y por eso se muestran en cada tarjeta en lugar de esconderse tras un desplegable o una cuenta.',
      },
      {
        q: '¿Cómo aviso de un significado incorrecto?',
        a: 'Envía el nombre y, si la tienes, una fuente que consideres fiable, y se revisará la entrada. Las correcciones se aplican al único archivo de datos que lee cada página, así que un arreglo aceptado aparece en todos los generadores y en todos los idiomas a la vez. Las sugerencias de nombres para añadir son bienvenidas en las mismas condiciones.',
      },
    ],
    related: {
      heading: 'Continúa por aquí',
      html: '<p>Cada sugerencia de los generadores de <a href="{{url:dog}}">perros</a>, <a href="{{url:cat}}">gatos</a> y <a href="{{url:pet}}">mascotas en general</a> muestra su significado en la tarjeta. La <a href="{{url:about}}">página «acerca de»</a> cuenta cómo está construido el resto de la herramienta, y la <a href="{{url:contact}}">página de contacto</a> es adonde van las correcciones y las propuestas.</p>',
    },
  },

  about: {
    title: 'Sobre el Generador de Nombres para Mascotas',
    description:
      'Qué hace distinto a este generador: significados documentados, pronunciación en voz alta, filtro de conflictos con las órdenes y modo pareja.',
    breadcrumb: 'Acerca de',
    h1: 'Acerca de este generador',
    answerBox:
      'Perfect Pet Name Generator es una herramienta gratuita que sugiere nombres de perro y gato filtrados por estilo, género, letra inicial y longitud. Cada sugerencia muestra su significado documentado, se reproduce en voz alta a petición y se comprueba contra los nombres de tu casa y las órdenes de adiestramiento habituales — esto último es algo que casi ningún otro generador hace.',
    html: '<h2>Por qué existe</h2><p>La mayoría de generadores de nombres para mascotas devuelven una lista de palabras. Esa es la parte fácil del problema. Las difíciles solo aparecen después: descubrir que el nombre significa algo desafortunado, darte cuenta de que no lo pronuncias con seguridad, o pasar tres meses de adiestramiento de llamada peleando con un nombre que suena como «no».</p><p>Esta herramienta se construyó alrededor de esos tres fallos, con {{total}} nombres de perro y gato como lista base. Es deliberadamente una herramienta de un solo paso — pon filtros, genera — en vez de un cuestionario de varias preguntas, porque un filtro de estilo ya captura lo que pregunta el cuestionario y lo hace en una sola pantalla.</p><h2>Qué hace distinto</h2><h3>Significados siempre visibles</h3><p>Cada nombre muestra su origen y su significado en la propia ficha. No detrás de un desplegable, ni de una cuenta, ni nunca detrás de un formulario de correo. Los significados proceden de fuentes lingüísticas y culturales establecidas — etimologías registradas, mitología, orígenes documentados — y cuando un significado no está documentado, no se inventa ninguno para rellenar el hueco.</p><h3>Pronunciación que puedes oír</h3><p>Cada nombre tiene un botón Pronunciar que usa el motor de voz ya integrado en tu navegador. No se descarga ningún archivo de audio, no se llama a ningún servicio externo de texto a voz y no se transmite nada de tu sesión. Importa sobre todo en los nombres de origen mitológico y no español, donde la grafía es una guía pobre del sonido.</p><h3>Un filtro de conflictos para casas reales</h3><p>Esta es la pieza que faltaba en todas las herramientas comparables que hemos encontrado. Escribe los nombres de tus familiares y de tus mascotas actuales y cada sugerencia se compara con ellos fonéticamente — con Soundex y distancia de edición, no con coincidencias exactas de letras — además de la comprobación automática contra las órdenes de adiestramiento habituales. Las coincidencias claras se retiran; las dudosas se muestran con una marca que explica el choque, para que el criterio siga siendo tuyo.</p><p>El razonamiento es sencillo: un perro o un gato aprende su nombre como un patrón de sonido distintivo. Un nombre que rima con una orden o con otro nombre de la casa le da al animal una señal ambigua cada vez que se usa, y la ambigüedad es lo que ralentiza el adiestramiento.</p><h3>Modo pareja y camada</h3><p>Poner nombre a dos mascotas a la vez es un problema distinto de poner un nombre dos veces. El modo pareja devuelve conjuntos de dos o tres nombres que comparten estilo y longitudes cercanas — para que se lean como un conjunto — mientras empiezan con sonidos distintos y pasan la misma comprobación fonética entre sí. Cubre tanto parejas adoptadas juntas como hermanos de camada que necesitan un tema común.</p><h2>Cómo está hecha la herramienta</h2><p>Es un sitio estático. No hay backend, ni base de datos, ni inicio de sesión, ni procesamiento en servidor de nada de lo que escribes. La lista de nombres es un archivo estático, y todo el filtrado, la mezcla, la comparación fonética y la voz ocurren en tu navegador. Las tandas se extraen con una mezcla Fisher-Yates, así que todos los nombres que cumplen tus filtros tienen la misma probabilidad de aparecer en lugar de repetirse siempre unos pocos.</p><h2>Qué no hace, a propósito</h2><ul><li>Sin test de personalidad: el filtro de estilo hace lo mismo en un solo paso.</li><li>Sin cuenta, registro ni captura de correo para ninguna función, incluido el filtro de conflictos.</li><li>Sin subir fotos ni adivinar la raza a partir de una imagen.</li><li>Sin significados inventados. Si un significado no está documentado, el nombre no se incluye.</li></ul><h2>Ponte en contacto</h2><p>Correcciones a un significado, sugerencias de nombres para añadir o cualquier otra cosa: la <a href="{{url:contact}}">página de contacto</a> tiene los detalles. Empieza a buscar nombre en los generadores de <a href="{{url:dog}}">perro</a>, <a href="{{url:cat}}">gato</a> o <a href="{{url:pet}}">mascota en general</a>.</p>',
  },

  contact: {
    title: 'Contacto | Generador de Nombres para Mascotas',
    description:
      'Escríbenos por una corrección de significado, un nombre que quieras añadir o una duda sobre el generador. Una dirección de correo, sin formulario.',
    breadcrumb: 'Contacto',
    h1: 'Contacto',
    answerBoxHtml:
      'Escribe a <a href="mailto:{{email}}" style="color: var(--c-accent-on-soft);">{{email}}</a> para cualquier cosa relacionada con este sitio. No hay formulario de contacto, porque es un sitio estático sin servidor que lo reciba — lo que también significa que nada de lo que envías pasa por un servicio de formularios de terceros.',
    html: '<h2>Sobre qué escribir</h2><ul><li><strong>Un significado parece incorrecto.</strong> Envía el nombre y, si la tienes, una fuente. Los significados de aquí proceden de referencias lingüísticas y culturales documentadas, y las correcciones son bienvenidas de verdad.</li><li><strong>Falta un nombre.</strong> Los nombres solo se añaden con un significado documentado, así que una fuente ayuda.</li><li><strong>Algo no funciona.</strong> El navegador y el dispositivo que estabas usando es el dato más útil — la función de pronunciación depende en particular del motor de voz que traiga tu dispositivo.</li><li><strong>Dudas de privacidad.</strong> La <a href="{{url:privacy}}">política de privacidad</a> cubre qué se recoge y qué no; lo que no responda, pregúntalo.</li></ul><h2>Tiempos de respuesta</h2><p>Este es un sitio pequeño e independiente, así que las respuestas no son inmediatas. Cuenta con unos días.</p><h2>En qué no puede ayudar este sitio</h2><p>Las sugerencias de aquí son ideas de nombres, no asesoramiento profesional. Para problemas de adiestramiento, dudas de comportamiento o cualquier cosa relacionada con la salud de tu animal, habla con un adiestrador, etólogo o veterinario cualificado. Los <a href="{{url:terms}}">términos y condiciones</a> establecen los límites de lo que ofrece la herramienta.</p>',
  },

  privacy: {
    title: 'Política de Privacidad | Nombres para Mascotas',
    description:
      'Cómo trata los datos este generador estático: sin cuentas, no se guarda nada de lo que escribes y todo el filtrado ocurre dentro de tu navegador.',
    breadcrumb: 'Política de privacidad',
    h1: 'Política de privacidad',
    updatedLabel: 'Última actualización: {{updated}}',
    answerBox:
      'Este sitio no tiene cuentas de usuario y no guarda nada de lo que escribes. Perfect Pet Name Generator es un sitio estático: el generador de nombres, el filtro de conflictos y la función de pronunciación funcionan por completo dentro de tu propio navegador, y nada de lo que introduces se transmite ni se almacena. Sí se usan cookies de analítica y de publicidad, descritas en detalle más abajo; donde el consentimiento es obligatorio, permanecen desactivadas hasta que las aceptas.',
    html: '<h2>1. A quién cubre esta política</h2><p>Esta política se aplica a perfectpetnamegenerator.com y a todas sus páginas. Describe qué ocurre con la información cuando usas el sitio.</p><h2>2. Qué no recogemos</h2><p>No hay cuentas, inicios de sesión, registros ni suscripciones por correo en ninguna parte de este sitio, y ninguna función está condicionada a facilitar una dirección de correo. No pedimos, recibimos ni almacenamos tu nombre, dirección, número de teléfono, datos de pago ni ningún otro identificador personal.</p><h3>El campo «evitar nombres parecidos a»</h3><p>Todo lo que escribas en el campo «evitar nombres parecidos a» — incluidos nombres de familiares y de mascotas actuales — se procesa por completo en tu propio dispositivo. Ese texto lo compara con la lista de nombres el JavaScript que se ejecuta en tu navegador. Nunca se envía a un servidor, nunca se escribe en almacenamiento, nunca se registra, y desaparece en el momento en que cierras o recargas la página. Lo mismo vale para cualquier otro filtro que apliques.</p><h2>3. Información recogida automáticamente</h2><h3>Alojamiento</h3><p>El sitio está alojado en Cloudflare Pages. Como cualquier proveedor de alojamiento web, Cloudflare procesa datos técnicos estándar de la solicitud, como la dirección IP, el agente de usuario y la URL solicitada, para servir la página y proteger el servicio frente a abusos. Esto lo gestiona Cloudflare bajo sus propias condiciones de privacidad, y nosotros no tenemos acceso a un registro identificable de visitantes individuales.</p><h3>Analítica</h3><p>Este sitio usa Google Analytics para entender el uso agregado: cuánta gente lo visita, en qué páginas entra y aproximadamente en qué parte del mundo está. Google Analytics instala cookies y procesa una forma anonimizada de tu dirección IP para ello. Los datos que vemos son agregados y estadísticos; no te identifican personalmente y no se combinan con nada de lo que escribes en el generador (que, como se ha dicho, nunca sale de tu navegador).</p><p>Puedes excluirte de Google Analytics por completo con el <a href="https://tools.google.com/dlpage/gaoptout" rel="nofollow noopener" target="_blank">complemento de inhabilitación de Google</a>, o mediante los controles de cookies de tu navegador o cualquier bloqueador de contenido habitual. El generador funciona exactamente igual en ambos casos.</p><h3>Publicidad</h3><p>Este sitio se sostiene con publicidad servida a través de Google AdSense. Google es un proveedor externo que usa cookies para mostrar anuncios aquí, y ese uso de cookies publicitarias permite a Google y a sus socios mostrar anuncios basados en tus visitas a este sitio y a otros sitios de internet. El uso por parte de Google de cookies publicitarias se rige por las <a href="https://policies.google.com/technologies/ads" rel="nofollow noopener" target="_blank">políticas de publicidad de Google</a>, y la forma en que Google utiliza los datos de los sitios que usan sus servicios se describe en <a href="https://policies.google.com/technologies/partner-sites" rel="nofollow noopener" target="_blank">policies.google.com</a>.</p><p>Puedes desactivar la publicidad personalizada en cualquier momento en la <a href="https://www.google.com/settings/ads" rel="nofollow noopener" target="_blank">configuración de anuncios de Google</a>, y desactivar el uso de cookies para publicidad personalizada por parte de proveedores externos en <a href="https://www.aboutads.info/choices/" rel="nofollow noopener" target="_blank">aboutads.info</a>. No recibimos ninguna información que te identifique personalmente a través de la publicidad ni podemos ver a quién se mostró un anuncio concreto.</p><h3>Tus opciones de cookies</h3><p>Donde el consentimiento es legalmente obligatorio — el EEE, el Reino Unido y Suiza — las cookies de analítica y publicidad permanecen desactivadas hasta que las aceptas, y un aviso te lo pregunta en tu primera visita. Rechazar cuesta un clic y se ofrece con la misma visibilidad que aceptar. Tu elección se guarda en tu propio navegador y puedes cambiarla cuando quieras desde el enlace «Configuración de cookies» del pie de página. No se te retiene nada del sitio por rechazar.</p><h2>4. Almacenamiento del navegador</h2><p>Se guardan dos elementos en el almacenamiento local de tu navegador: tu preferencia de tema claro u oscuro, para que el sitio no muestre los colores equivocados en tu próxima visita, y tu elección sobre cookies, para que el aviso no vuelva a preguntar en cada página. Ambos son valores únicos, ambos se quedan en tu dispositivo y ninguno se transmite nunca. Borrar los datos del navegador los elimina. El selector de idioma no guarda nada: cada idioma es un enlace normal a su propia página. La lista de nombres que ya se te han mostrado se mantiene solo en memoria y desaparece en cuanto cierras la pestaña.</p><h2>5. Servicios de terceros</h2><p>El sitio carga sus fuentes, estilos, datos de nombres y scripts desde su propio dominio en lugar de desde CDN de terceros. La función de pronunciación usa el motor de voz ya integrado en tu sistema operativo o navegador; no se descarga audio ni se contacta con ningún servicio de texto a voz. Aparte de Cloudflare como alojamiento y de Google como proveedor de la analítica y la publicidad descritas arriba, ningún tercero recibe datos derivados de tu uso de este sitio.</p><h2>6. Enlaces a otros sitios</h2><p>Las páginas de aquí pueden enlazar a sitios externos. Esos sitios tienen sus propias prácticas de privacidad, y esta política no los cubre.</p><h2>7. Menores</h2><p>Este sitio es una herramienta de nombres para público general y no está dirigido a menores de 13 años. No recogemos conscientemente información personal de nadie, menores incluidos: no existe ningún mecanismo en el sitio por el que se pueda enviar información personal.</p><h2>8. Tus derechos</h2><p>Las leyes de privacidad, incluidos el RGPD y la CCPA, te dan derecho a acceder, corregir y eliminar los datos personales que se tengan sobre ti. Como este sitio no guarda datos personales tuyos, no hay nada que recuperar ni borrar por nuestra parte. Para los datos analíticos que procesa Google, usa los controles propios de Google enlazados arriba. Las preguntas son bienvenidas en la dirección de abajo.</p><h2>9. Cambios en esta política</h2><p>Esta política se actualizará si cambian las prácticas de datos del sitio — un nuevo proveedor de analítica o de publicidad es el motivo más probable. La fecha de «última actualización» de arriba siempre refleja la versión vigente.</p><h2>10. Contacto</h2><p>Las dudas de privacidad pueden dirigirse a <a href="mailto:{{email}}">{{email}}</a>, o a través de la <a href="{{url:contact}}">página de contacto</a>.</p>',
  },

  terms: {
    title: 'Términos y Condiciones | Nombres para Mascotas',
    description:
      'Condiciones de uso del generador: una herramienta gratuita cuyos nombres y significados se ofrecen tal cual, como inspiración y sin garantía de exclusividad.',
    breadcrumb: 'Términos y condiciones',
    h1: 'Términos y condiciones',
    updatedLabel: 'Última actualización: {{updated}}',
    answerBox:
      'Esta herramienta es gratuita y su resultado se ofrece tal cual, como inspiración. Las sugerencias de nombres y los significados que las acompañan se ofrecen de buena fe a partir de fuentes documentadas, pero ningún significado se garantiza como la interpretación definitiva o única de un nombre. Usar el sitio implica aceptar estos términos.',
    html: '<h2>1. El servicio</h2><p>Perfect Pet Name Generator ofrece sugerencias de nombres para mascotas, significados, reproducción de la pronunciación y comprobación fonética de conflictos. Es gratuito, no requiere cuenta y se ofrece sin suscripción, pago ni registro; el sitio se financia con publicidad.</p><h2>2. Las sugerencias son inspiración, no asesoramiento</h2><p>Todos los nombres devueltos son sugerencias. Nada de lo que hay aquí constituye asesoramiento profesional de adiestramiento, comportamiento o veterinaria. Las orientaciones sobre nombres de este sitio reflejan principios de adiestramiento ampliamente aceptados, pero tu animal es un individuo, y un adiestrador, etólogo o veterinario cualificado es la fuente adecuada para decisiones sobre su cuidado y adiestramiento.</p><h2>3. Significados de los nombres</h2><p>Los significados y orígenes proceden de fuentes lingüísticas y culturales establecidas y se presentan de buena fe. Los nombres suelen tener significados distintos según la lengua, la región y la tradición, y las etimologías a veces se discuten entre fuentes. Ningún significado mostrado aquí se presenta como la interpretación definitiva, completa o exclusiva de un nombre. Si eliges un nombre en el que el significado te importa mucho, verifícalo en una fuente de tu confianza antes de decidirte.</p><h2>4. El filtro de conflictos</h2><p>El filtro de conflictos compara nombres fonéticamente con las órdenes de adiestramiento habituales y con cualquier palabra que introduzcas. Es una heurística útil, no una garantía. No puede conocer todas las palabras que usa tu casa, ni todos los acentos con los que se dirá el nombre, ni cómo responderá un animal concreto. Trata un resultado limpio como una buena señal, no como una promesa.</p><h2>5. Disponibilidad</h2><p>El sitio se ofrece «según disponibilidad». Puede cambiarse, interrumpirse o suspenderse en cualquier momento sin previo aviso. Las funciones que dependen de tu navegador — la reproducción de la pronunciación en particular — dependen de capacidades que no controlamos y pueden no funcionar en todos los dispositivos.</p><h2>6. Uso aceptable</h2><p>Puedes usar el generador libremente con fines personales y comerciales, incluido poner nombre a animales en una protectora, un rescate o un contexto de cría. No puedes extraer, descargar de forma masiva ni redistribuir la base de datos de nombres y significados como conjunto de datos o como producto competidor, ni intentar interrumpir el sitio, ni presentarlo como propio.</p><h2>7. Propiedad intelectual</h2><p>Los nombres individuales no son propiedad de nadie y eres libre de usar cualquier nombre que encuentres aquí. El diseño del sitio, los contenidos redactados y la base de datos compilada de nombres y significados como colección siguen siendo propiedad de Perfect Pet Name Generator.</p><h2>8. Sin garantía y limitación de responsabilidad</h2><p>El sitio y su contenido se ofrecen sin garantías de ningún tipo, expresas o implícitas, incluidas la exactitud, la idoneidad para un fin concreto y la disponibilidad ininterrumpida. En la máxima medida permitida por la ley, los operadores de este sitio no son responsables de ninguna pérdida o daño derivado de su uso o de cualquier decisión sobre un nombre tomada con él.</p><h2>9. Enlaces externos</h2><p>Los enlaces a sitios de terceros se ofrecen por comodidad. No somos responsables de su contenido, exactitud ni prácticas.</p><h2>10. Cambios en estos términos</h2><p>Estos términos pueden actualizarse según cambie el sitio. La fecha de «última actualización» de arriba refleja la versión vigente, y seguir usando el sitio tras un cambio implica aceptarlo.</p><h2>11. Contacto</h2><p>Dudas sobre estos términos: <a href="mailto:{{email}}">{{email}}</a>, o usa la <a href="{{url:contact}}">página de contacto</a>. Consulta también la <a href="{{url:privacy}}">política de privacidad</a>.</p>',
  },

  /** Translated in the sitemap-visible pages only; 404/500 stay English. */
  schema: {
    appDescription:
      'Generador gratuito de nombres para perros y gatos con significados documentados, pronunciación en el navegador, filtro de conflictos con las órdenes de adiestramiento y modo pareja para nombrar dos mascotas juntas.',
    features: [
      'Generador de nombres para perros y gatos',
      'Significado y origen documentados para cada nombre',
      'Pronunciación con el motor de voz del navegador',
      'Filtro de conflictos con órdenes de adiestramiento y nombres de la casa',
      'Modo de nombres para parejas y camadas',
      'Filtros por género, estilo, letra inicial y longitud máxima',
    ],
  },
};

export default es;
