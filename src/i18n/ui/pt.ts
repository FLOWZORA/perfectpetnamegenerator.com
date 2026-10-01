/**
 * Português (pt-BR). Mirrors the shape of ./en.ts exactly.
 *
 * Placeholders ({{total}}, {{url:dog}}, …) and the markup inside `*Html`
 * strings must survive translation untouched. FAQ answers stay plain text
 * because they are copied into FAQPage JSON-LD.
 *
 * The locale is pt_BR (see routes.json), so the vocabulary is Brazilian:
 * "cachorro" rather than "cão", "apelido" rather than "alcunha". The training
 * commands the tool checks are English words, because the name list is
 * English; the copy says so rather than pretending otherwise.
 */
const pt = {
  common: {
    siteName: 'Gerador Perfeito de Nomes para Pets',
    skipLink: 'Pular para o conteúdo principal',
    themeToggle: 'Alternar entre tema claro e escuro',
    languageLabel: 'Idioma',
    languageNav: 'Escolha um idioma',
    mainNav: 'Principal',
    breadcrumb: 'Trilha de navegação',
    home: 'Início',
  },

  nav: {
    dog: 'Nomes de cachorro',
    cat: 'Nomes de gato',
    pet: 'Nomes de pet',
    about: 'Sobre',
  },

  footer: {
    blurb:
      'Ideias de nomes para cachorros e gatos com significados reais, pronúncia em voz alta e uma verificação que evita que o nome novo se confunda com os comandos de adestramento.',
    headings: { generators: 'Geradores', guides: 'Guias', site: 'Site', legal: 'Legal' },
    links: {
      home: 'Início',
      dog: 'Gerador de nomes para cachorro',
      cat: 'Gerador de nomes para gato',
      pet: 'Gerador de nomes para pets',
      teach: 'Ensinar o nome',
      avoid: 'Nomes a evitar',
      pairs: 'Nomear dois pets',
      meanings: 'Significado dos nomes',
      about: 'Sobre',
      contact: 'Contato',
      privacy: 'Política de privacidade',
      terms: 'Termos e condições',
    },
    copyright:
      '© {{year}} Perfect Pet Name Generator. Os significados vêm de fontes linguísticas e culturais estabelecidas; as sugestões são inspiração, não orientação profissional de adestramento ou veterinária.',
  },

  styles: {
    fantasy: 'Fantasia',
    funny: 'Engraçado',
    cute: 'Fofo',
    strong: 'Forte',
    elegant: 'Elegante',
    classic: 'Clássico',
    mythical: 'Mitológico',
    food: 'Comida',
    modern: 'Moderno',
    unique: 'Único',
  },

  generator: {
    speciesLegend: 'Espécie',
    speciesAny: 'Cachorros e gatos',
    speciesDog: 'Cachorro',
    speciesCat: 'Gato',

    genderLegend: 'Sexo',
    genderAny: 'Tanto faz',
    genderMale: 'Macho',
    genderFemale: 'Fêmea',
    genderHint: 'As opções macho e fêmea também incluem nomes unissex.',

    styleLegend: 'Estilo',
    stylePickAny: '(escolha quantos quiser)',
    styleHint:
      'Sem nada marcado, todos os estilos entram. Marcar vários devolve nomes que combinem com qualquer um deles.',

    letterLabel: 'Letra inicial',
    letterAny: 'Qualquer letra',

    maxLenLabel: 'Tamanho máximo',
    maxLenAny: 'Qualquer tamanho',
    maxLenOption: '{{n}} letras ou menos',
    maxLenHint:
      'Útil para plaquinhas gravadas, onde a área de gravação costuma comportar cerca de 8 caracteres por linha.',

    avoidLabel: 'Evitar nomes parecidos com…',
    avoidPlaceholder: 'Jake, Nora, Bo — familiares, outros pets, qualquer coisa a evitar',
    avoidHtml:
      '<strong style="color: var(--c-text);">Por que isso importa:</strong> o pet aprende o próprio nome como um som distinto. Um nome que rima com o de alguém da casa ou com um comando deixa os dois mais difíceis de aprender — “Bo” se confunde com “No”, “Kit” com “Sit”. Cada sugestão também é comparada automaticamente com {{commandCount}} {{commandKind}} comuns ({{commandExamples}}…). As coincidências claras ficam ocultas; as duvidosas aparecem sinalizadas para você decidir. O que você digita aqui é comparado no seu navegador e nunca é armazenado nem enviado a lugar nenhum.',
    commandKindDog: 'comandos de adestramento em inglês',
    commandKindCat: 'chamados para gatos em inglês',

    optionsLegend: 'Opções',
    excludeShown: 'Excluir nomes já exibidos',
    excludeShownHint: 'Cada geração devolve nomes que você ainda não viu.',
    hideFlagged: 'Ocultar totalmente os nomes sinalizados',
    hideFlaggedHint:
      'Desligado por padrão, para você ver os conflitos duvidosos e julgar por conta própria.',
    pairMode: 'Vai dar nome a dois pets ao mesmo tempo?',
    pairModeHint:
      'Devolve conjuntos que compartilham um estilo, têm tamanhos próximos e não se confundem entre si — para duplas inseparáveis e irmãos de ninhada.',
    setSizeLabel: 'Nomes por conjunto',
    setSize2: '2 — uma dupla',
    setSize3: '3 — uma ninhada',

    generate: 'Gerar nomes',
    copyBatch: 'Copiar esta leva',
    startOver: 'Começar de novo',
    ctaHint:
      'Receba na hora um nome de {{species}} aleatório — cada clique sorteia uma leva nova entre os nomes que atendem aos seus filtros, então continue gerando até achar o certo.',
    speciesWordDog: 'cachorro',
    speciesWordCat: 'gato',
    speciesWordAny: 'pet',

    resultsHeading: 'Ideias de nomes',
    resultsAria: 'Nomes de pet gerados',
    statusInitialHtml:
      'Abaixo há uma seleção inicial — clique em <strong>Gerar nomes</strong> para uma leva ajustada aos seus filtros.',
    noscript:
      'O gerador interativo precisa de JavaScript. Os nomes iniciais abaixo aparecem por completo, significados incluídos.',
    unisex: 'Unissex',
    male: 'Macho',
    female: 'Fêmea',
    meaningLabel: 'Significado:',
  },

  /** Strings the client controller renders after the page has loaded. */
  runtime: {
    pronounce: '🔊 Pronunciar',
    pronounceAria: 'Ouvir a pronúncia de {{name}} em voz alta',
    notSupported: 'Indisponível aqui',
    bootError: 'Não foi possível carregar o gerador. Recarregue a página.',

    conflictHtml: 'Conflito com o adestramento: este nome {{reason}}.',
    reasons: {
      same: 'é a mesma palavra que “{{word}}”',
      oneSound: 'está a um som de “{{word}}”',
      veryClose: 'é muito parecido com “{{word}}”',
      almostIdentical: 'soa quase idêntico a “{{word}}”',
      rhymes: 'rima com “{{word}}”',
      similar: 'é semelhante a “{{word}}”',
    },

    dogBadge: 'Cachorro',
    catBadge: 'Gato',

    whyTogether:
      'Por que funcionam juntos: {{style}}, {{lengths}} letras, sons iniciais diferentes e sem risco de confundir um com o outro.',
    inStyle: 'estilo {{styles}}',
    matchedInStyle: 'estilo combinado',
    joiner: ' e ',

    finding: 'Procurando nomes…',
    loadError: 'Não foi possível carregar a lista de nomes. Verifique sua conexão e tente de novo.',

    emptyHeading: 'Nenhum nome corresponde a esses filtros',
    emptyLead:
      'O filtro mais restritivo aqui é {{reason}}. Alargue esse primeiro — o resto das suas escolhas pode ficar.',
    emptyGeneric: 'Tente remover um filtro — o resto das suas escolhas pode ficar.',
    emptyStartOver:
      'Use “Começar de novo” abaixo para limpar a lista de nomes já exibidos.',
    emptyReasons: {
      gender: 'o filtro de sexo',
      style: 'essa combinação de estilos',
      letter: 'a letra inicial',
      length: 'o tamanho máximo do nome',
      shown: '“excluir nomes já exibidos” — você viu todas as correspondências',
      conflict: 'o filtro de conflitos, que removeu todas as correspondências restantes',
      pair: 'o modo dupla, que precisa de vários nomes compatíveis para montar um conjunto',
    },

    noSets: 'Nenhum conjunto compatível com esses filtros.',
    noMatches: 'Nenhuma correspondência.',
    setsStatus:
      '{{count}} {{word}} que soam bem juntos e não se confundem entre si.',
    pairOne: 'dupla',
    pairMany: 'duplas',
    setOne: 'conjunto',
    setMany: 'conjuntos',

    statusNamesOne: '1 nome de {{pool}} que atendem aos seus filtros',
    statusNamesMany: '{{count}} nomes de {{pool}} que atendem aos seus filtros',
    statusHidden: '{{count}} ocultos pelo filtro de conflitos',
    statusFlagged: '{{count}} sinalizados como possível conflito com o adestramento',

    copied: 'Copiado',
    copyBlocked: 'A cópia está bloqueada neste navegador — selecione os nomes manualmente.',
    clearedShown:
      'Lista de nomes exibidos limpa. Todos os nomes voltaram para o sorteio.',
  },

  home: {
    title: 'Gerador de Nomes para Pets | Cachorros e Gatos',
    description:
      'Gerador de nomes para pets grátis. Gere nomes de cachorro e gato com significados reais, ouça a pronúncia e evite conflitos com os comandos de adestramento.',
    eyebrow: 'Grátis · Sem cadastro · {{total}} nomes',
    h1: 'Gerador de nomes para pets',
    answerBox:
      'Este gerador de nomes para pets gratuito cria nomes de cachorro e gato aleatoriamente conforme os filtros que você definir: estilo, sexo, letra inicial e tamanho. Todo nome vem com um significado documentado, é pronunciado com um toque e é verificado para não se confundir com os seus comandos de adestramento nem com os nomes já usados em casa.',
    leadHtml:
      'Vai dar nome a um cachorro? <a class="underline" style="color: var(--c-accent-on-soft);" href="{{url:dog}}">Use o gerador de nomes para cachorro</a>. A um gato? <a class="underline" style="color: var(--c-accent-on-soft);" href="{{url:cat}}">Use o gerador de nomes para gato</a>. Ou gere para as duas espécies aqui embaixo.',
    generator: {
      heading: 'Gerar nomes de cachorro e gato',
      intro:
        'Use quantos filtros quiser, ou nenhum, e gere. Todo nome chega com o significado junto.',
    },
    styles: {
      heading: 'Estilos populares: nomes de fantasia e nomes engraçados',
      lead: 'Os {{styleCount}} filtros de estilo acima funcionam do mesmo jeito, mas estes dois são os que as pessoas procuram pelo nome.',
      fantasy: {
        heading: 'Nomes de fantasia para pets',
        html: '<p class="mt-2 text-[0.9375rem]">Procurando um gerador de nomes de fantasia? Marque <strong>Fantasia</strong> no filtro de estilo e a leva vem da mitologia, da ficção épica e da ficção científica — {{fantasyCount}} nomes que vão de Gandalf, Arwen e Thorin a Zelda, Kenobi e Banguela. Marque <strong>Mitológico</strong> junto para ampliar ainda mais com Odin, Atena, Fenrir e Freya.</p><p class="mt-2 text-[0.9375rem]">Nomes de fantasia costumam passar do ideal de uma ou duas sílabas, e é por isso que vale combinar o filtro Fantasia com um máximo de cinco ou seis letras: Frodo atravessa o parque inteiro, enquanto Hércules vira Herc na segunda semana, você planejando ou não.</p>',
      },
      funny: {
        heading: 'Nomes engraçados para pets',
        html: '<p class="mt-2 text-[0.9375rem]">Engraçado é o maior estilo daqui — {{funnyCount}} nomes que vão de Waffles, Gnocchi e Meatball a Bandit, Hooligan e Chonk. Um gerador de nomes engraçados tem uma armadilha que vale nomear: a piada precisa sobreviver a ser gritada na sala de espera do veterinário e escrita no formulário do microchip. Diga sua lista em voz alta, no volume de chamar, antes de decidir.</p><p class="mt-2 text-[0.9375rem]">Várias das opções mais engraçadas têm cara séria por baixo — Loki é o deus trapaceiro nórdico, Otis significa “riqueza” em germânico — e o significado aparece em todo cartão, então você vê exatamente o que está escolhendo.</p>',
      },
    },
    different: {
      heading: 'Três coisas que este gerador faz e a maioria não',
      cards: [
        {
          heading: 'Significados que dá para ler de verdade',
          body: 'Todo nome mostra origem e significado no cartão, sempre visíveis. Sem botão para expandir, sem conta, sem barreira de e-mail. Um nome que você vai dizer dez vezes por dia merece ser conhecido antes de ser escolhido.',
        },
        {
          heading: 'Um filtro de conflitos para a sua casa',
          body: 'Digite os nomes dos familiares e dos outros pets e o gerador remove as sugestões que soam parecido demais, além da verificação automática contra os comandos de adestramento mais comuns. É a peça que quase nenhuma outra ferramenta de nomes oferece.',
        },
        {
          heading: 'Nomes para dois pets de uma vez',
          body: 'Duplas inseparáveis e irmãos de ninhada precisam de nomes que combinem no estilo mas fiquem bem distintos em voz alta. O modo dupla monta esses conjuntos e compara os nomes entre si, não só com os da sua casa.',
        },
      ],
    },
    pick: {
      heading: 'Escolha o seu gerador',
      dog: {
        heading: 'Gerador de nomes para cachorro',
        body: '{{dogCount}} nomes de cachorro com significado, verificados contra {{dogCommandCount}} comandos comuns como sit, stay, come e down.',
      },
      cat: {
        heading: 'Gerador de nomes para gato',
        body: '{{catCount}} nomes de gato com significado, ajustados aos sons a que os gatos respondem e verificados contra os chamados de uma casa com gato.',
      },
      pet: {
        heading: 'Nomes para uma casa com vários pets',
        body: 'As duas espécies de uma vez, mais orientação para nomear um pet numa casa que já tem crianças, parceiros ou outros animais.',
      },
    },
    how: {
      heading: 'Como o conselho de nomes daqui é fundamentado',
      html: '<p>As regras que esta ferramenta aplica são as que adestradores profissionais dão: nome curto, bem distinto dos comandos e constante depois de escolhido. Cachorros e gatos aprendem um nome como um padrão sonoro ligado a atenção e recompensa, não como uma palavra com significado. É por isso que um nome que se sobrepõe a “no” ou a “sit” custa tempo real de adestramento: você está pedindo ao animal que separe dois sinais que chegam ao ouvido dele quase idênticos.</p><p>Os significados mostrados ao lado de cada nome funcionam ao contrário: importam para você, não para o pet. Estão aí porque um nome carrega quinze anos de uso diário, e saber que Luna é “lua” em latim ou que Odin pertence à mitologia nórdica é o tipo de detalhe que transforma uma lista numa decisão. Os significados vêm de fontes linguísticas e culturais documentadas, e nenhum é chute.</p><p>Nada neste site exige conta. O filtro de conflitos roda inteiramente no seu navegador, e por isso os nomes que você digita nele nunca saem do seu aparelho — veja a <a href="{{url:privacy}}">política de privacidade</a> para os detalhes.</p>',
    },
    about: {
      heading: 'Sobre este gerador de nomes para animais',
      paragraphs: [
        'Perfect Pet Name Generator é um gerador de nomes para animais gratuito para cães e gatos, feito para resolver as partes da escolha do nome que só aparecem mais tarde, e não apenas para entregar uma lista de palavras. Ele usa {{total}} nomes distribuídos em {{styleCount}} estilos. Cada nome que devolve traz um significado documentado, um botão que o pronuncia em voz alta no navegador e uma verificação automática contra os comandos que o seu animal precisa aprender. Nada é bloqueado: não há cadastro, nem etapa de e-mail, nem versão paga em nenhum recurso, incluindo o filtro de conflitos da casa e o modo dupla.',
        'No fundo, este é um gerador de nomes aleatório. Cada vez que você aperta Gerar, os nomes que combinam com seus filtros são embaralhados com um algoritmo de Fisher-Yates e uma nova leva é sorteada, de modo que cada nome elegível tem chance igual de aparecer em vez de os mesmos poucos se repetirem. Sem nenhum filtro, ele funciona como um gerador de nomes de cachorro aleatório e um gerador de nomes de gato aleatório puros. Acrescente um estilo, uma letra inicial ou um limite de comprimento e o sorteio continua aleatório: só acontece dentro de um conjunto menor.',
        'O gerador de nomes de cachorro é ajustado ao modo como um cão realmente aprende um nome. Você pode filtrar por macho, fêmea ou unissex, por estilo, por letra inicial e por um comprimento máximo que caiba em uma plaquinha de identificação gravada. As visões de macho e de fêmea do gerador de nomes de cachorro mantêm os nomes unissex nos resultados, então uma boa opção nunca se perde por uma divisão de gênero rígida. Cada sugestão é verificada contra {{dogCommandCount}} comandos comuns como sit, stay, come, heel e down; nomes que soam próximos demais são ocultados, e os casos limítrofes aparecem com um sinalizador para que a decisão final seja sua.',
        'O gerador de nomes de gato segue o mesmo desenho, mas se apoia nos sons a que os gatos respondem melhor: nomes curtos com notas claras e de alta frequência, como o «i» de Mimi ou o k forte de Kiko. Filtre o gerador de nomes de gato por macho ou fêmea, por estilo, por letra ou por comprimento, e ele evita as chamadas usadas em uma casa com gato. Assim como nos cães, os resultados de macho e de fêmea do gerador de nomes de gato mantêm os nomes unissex no conjunto em vez de descartá-los.',
        'Se você está preenchendo papelada de pedigree, a ferramenta também serve como gerador de nomes de cachorro registrados. Nomes registrados para a AKC, o Kennel Club e registros semelhantes são longos, formais e muitas vezes com um tema de canil ou de ninhada, enquanto o nome de chamada que você usa em casa fica curto. Desligue o limite de comprimento e escolha um estilo elegante ou clássico para o nome registrado; depois rode o gerador de novo com um limite de cinco ou seis letras para achar o nome de chamada do dia a dia que o acompanhe.',
        'Os estilos são como a maioria das pessoas estreita a lista. Fantasia bebe do mito, da ficção épica e da ficção científica; Engraçado é a maior categoria aqui e vai de Waffles e Meatball a Bandit e Hooligan; e ao lado deles estão os filtros fofo, forte, elegante, clássico, mítico, inspirado em comida, moderno e único. Selecione vários ao mesmo tempo e o gerador devolve nomes que combinam com qualquer um deles, que é a forma mais rápida de ampliar uma busca que ficou estreita demais.',
        'Os significados são a outra metade da ferramenta, e importam para você, não para o animal. Um nome dito dez vezes por dia durante quinze anos merece ser algo conhecido, então a origem e o significado de cada nome ficam à vista no cartão, nunca atrás de um botão de alternância, uma conta ou um formulário de e-mail. Os significados vêm de etimologias registradas, mitologia e origens de palavras documentadas, e onde um significado não está documentado o nome é deixado de fora em vez de receber um inventado.',
        'Cada nome gerado tem um botão Pronunciar que o lê em voz alta com o motor de fala já embutido no seu aparelho. Nenhum áudio é baixado e nenhum serviço externo de texto para voz é contatado. Isso importa mais em nomes de origem mitológica e não ingleses, onde a grafia diz pouco sobre como o nome é de fato falado, e ouvir uma lista curta no volume de uma chamada é a forma mais rápida de flagrar um nome difícil de gritar num parque.',
        'O filtro de conflitos da casa é a peça que quase nenhum outro gerador de nomes para animais tem. Digite os nomes já em uso em casa — um parceiro, uma criança, outro animal, até um apelido gritado pelo quintal — e cada sugestão é comparada a eles foneticamente e não pela grafia, porque «Kay» e «Stay» não compartilham nenhuma letra inicial mas se confundem por completo ao serem ouvidos. Correspondências claras são removidas e os casos limítrofes sinalizados, e tudo o que você digita é comparado no seu navegador e nunca é armazenado, registrado ou enviado a lugar nenhum.',
        'Nomear dois animais ao mesmo tempo é um problema diferente de nomear um animal duas vezes, então o gerador tem um modo dupla. Ele devolve conjuntos de dois ou três nomes que compartilham um estilo e ficam dentro de cerca de duas letras do mesmo comprimento, e depois rejeita qualquer conjunto cujos nomes sejam foneticamente próximos entre si. Foi feito para duplas inseparáveis adotadas juntas e para ninhadas que precisam de um tema comum sem responder ao nome uma da outra.',
        'O site inteiro é estático: sem contas, sem banco de dados, sem processamento no servidor de nada do que você digita. Comece pelo gerador de nomes de cachorro, pelo gerador de nomes de gato, ou gere para as duas espécies com a ferramenta acima, e faça as duas coisas que evitam o arrependimento com o nome: leia o significado e diga o nome em voz alta antes de decidir.',
      ],
    },
    faqHeading: 'Perguntas frequentes',
    faqs: [
      {
        q: 'O que faz um bom nome de pet?',
        a: 'Um bom nome de pet tem uma ou duas sílabas, termina em vogal clara ou consoante forte e não se parece com nenhuma palavra que você use como comando. Nomes curtos atravessam melhor um parque ou uma sala, e uma terminação distinta ajuda o cachorro ou o gato a reconhecer o próprio nome no meio de uma conversa comum. O significado importa mais para você do que para o animal, e é por isso que todo nome aqui mostra a origem.',
      },
      {
        q: 'Por que o nome de um pet não deve parecer um comando?',
        a: 'Um nome que soa como um comando atrasa o adestramento, porque o animal não distingue os dois sinais. “Bo” e “no”, ou “Kit” e “sit”, diferem por um único som, então o pet recebe um sinal ambíguo toda vez que qualquer um dos dois é usado. Este gerador compara cada sugestão com os comandos mais comuns e com os nomes da sua casa que você digitar, oculta as coincidências claras e sinaliza as duvidosas.',
      },
      {
        q: 'Este gerador de nomes para pets é grátis? Preciso de conta?',
        a: 'É totalmente grátis e não há conta, cadastro nem etapa de e-mail para nenhum recurso, incluindo o filtro de conflitos e o modo dupla. Tudo roda no seu navegador sobre uma lista estática de nomes. Nada do que você digita é armazenado ou enviado a um servidor.',
      },
      {
        q: 'Posso gerar nomes para dois pets adotados juntos?',
        a: 'Sim. Ative “Vai dar nome a dois pets ao mesmo tempo?” e o gerador devolve conjuntos de dois ou três nomes em vez de uma lista solta. Cada conjunto compartilha um estilo, fica dentro de duas letras do mesmo tamanho, começa com um som diferente e passa pela mesma verificação fonética do filtro de conflitos, para que os pets não respondam ao nome um do outro.',
      },
      {
        q: 'Quais são bons nomes de fantasia para pets?',
        a: 'Bons nomes de fantasia são reconhecíveis de uma história ou de um mito e ainda assim curtos o bastante para chamar do outro lado do quintal: Gandalf, Arwen, Thorin, Zephyr e Zelda dão conta das duas coisas. O filtro Fantasia tem {{fantasyCount}} deles, e marcar Mitológico junto amplia com Odin, Atena, Fenrir e Freya. Nomes longos acabam encurtados na prática, então confira se o nome ainda funciona em duas sílabas antes de fechar questão.',
      },
      {
        q: 'O que são nomes engraçados para pets?',
        a: 'Nomes engraçados são aqueles cujo humor nasce da distância entre o nome e o animal que o carrega: Waffles, Meatball, Bandit, Chonk e Hooligan são o tipo de coisa que o filtro Engraçado devolve, e há {{funnyCount}} deles aqui. O único teste real é se a piada continua funcionando quando um veterinário chama na sala de espera, então leia sua lista em voz alta antes de decidir.',
      },
      {
        q: 'De onde vêm os significados dos nomes?',
        a: 'Os significados vêm de fontes linguísticas e culturais estabelecidas, e não foram inventados para a ferramenta: etimologias registradas, mitologia e origens de palavras documentadas. Aparecem por inteiro ao lado de cada nome, nunca escondidos atrás de um botão ou de um formulário de e-mail, para você julgar um nome antes de se comprometer com ele por quinze anos.',
      },
    ],
  },

  dog: {
    title: 'Gerador de Nomes para Cachorro com Significado',
    description:
      'Gerador de nomes para cachorro grátis com significados e pronúncia. Filtre por estilo, sexo, letra e tamanho e evite conflitos com os comandos.',
    breadcrumb: 'Nomes de cachorro',
    h1: 'Gerador de nomes para cachorro',
    answerBox:
      'O nome de um cachorro deve ter uma ou duas sílabas e se distinguir com clareza de todo comando que você pretende ensinar. Este gerador parte de {{dogCount}} nomes de cachorro com significados documentados, pronuncia cada um em voz alta e remove automaticamente as sugestões que soam como {{dogCommandCount}} comandos comuns — para que o nome escolhido não concorra com as palavras que o seu cachorro precisa aprender.',
    generator: {
      heading: 'Gerar nomes de cachorro',
      intro:
        'Filtre por estilo, sexo, letra inicial ou tamanho que caiba na plaquinha. Adicione os nomes da casa que quer evitar e o filtro de conflitos cuida do resto.',
    },
    prose: {
      heading: 'Por que o nome de um cachorro não pode soar como um comando',
      html: '<p>Um cachorro aprende um nome como som, não como palavra. Quando o nome se sobrepõe a um sinal, cada repetição ensina ambiguidade em vez de clareza: o cachorro ouve algo próximo de “no” e precisa adivinhar se está sendo chamado ou corrigido. O custo se mede em semanas de treino de retorno mais lento, e o retorno é o comando que mais importa.</p><p>Os comandos verificados automaticamente nesta página são: {{dogCommands}}. Estão em inglês porque a lista de nomes está; se você adestra em português, digite seus próprios comandos no campo abaixo e eles serão verificados do mesmo jeito. Nomes próximos demais de qualquer um deles somem dos seus resultados, e as coincidências duvidosas aparecem com uma marca explicando o conflito em vez de serem descartadas em silêncio, porque uma rima da qual você tem consciência é mais fácil de conviver do que uma que se descobre no terceiro mês.</p><p>A mesma verificação roda contra o que você digitar no campo “evitar nomes parecidos com”. Um cachorro numa casa com um Jake vai penar com Jade; um segundo cachorro chegando junto de uma Bailey vai penar com Hayley. Essa comparação acontece no seu navegador e nada do que você digita é armazenado ou transmitido.</p><h2>Dar nome a dois cachorros, ou a uma ninhada inteira</h2><p>Dois cachorros na mesma casa precisam de nomes inconfundíveis entre si. O modo dupla monta conjuntos que compartilham estilo e ficam próximos no tamanho — para soarem como da mesma casa — enquanto exige sons iniciais diferentes e roda a mesma verificação fonética entre os dois nomes. Serve tanto para duplas adotadas juntas quanto para irmãos de ninhada que precisam de um tema coeso.</p><h2>Nomes que cabem numa plaquinha gravada</h2><p>Na maioria das plaquinhas gravadas cabem cerca de oito caracteres por linha antes de o texto precisar encolher, e um nome disputando espaço com um telefone é o primeiro a ser cortado. O filtro de tamanho máximo existe exatamente para isso: deixe em seis ou menos e toda sugestão vai gravar com folga ao lado dos seus contatos.</p>',
    },
    showcase: {
      heading: 'Nomes de cachorro por estilo, com significados',
      lead: 'Uma amostra da lista completa. Use o gerador acima para filtrar o restante por sexo, letra e tamanho.',
      strong: 'Nomes fortes para cachorro',
      cute: 'Nomes fofos para cachorro',
      mythical: 'Nomes mitológicos para cachorro',
    },
    more: {
      heading: 'Dar nome a outro pet',
      html: '<p>É um gato? O <a href="{{url:cat}}">gerador de nomes para gato</a> usa uma lista específica e verifica os sons a que os gatos realmente respondem. Os dois, ou algo bem diferente? O <a href="{{url:pet}}">gerador geral de nomes para pets</a> funciona entre espécies, e a <a href="{{url:home}}">página inicial</a> explica como significados, pronúncia e verificações de conflito se encaixam.</p>',
    },
    faqHeading: 'Perguntas sobre nomes de cachorro',
    faqs: [
      {
        q: 'Como escolho o nome de um cachorro?',
        a: 'Escolha um nome de uma ou duas sílabas que termine em vogal ou consoante forte e não compartilhe som com os seus comandos. Diga em voz alta, no volume que usaria num parque, antes de decidir; confira contra as palavras que o cachorro já precisa aprender; e mantenha depois de escolhido — trocar o nome no meio do adestramento zera a associação.',
      },
      {
        q: 'Que nomes de cachorro devo evitar?',
        a: 'Evite nomes que rimem ou se pareçam muito com os seus comandos de adestramento: {{dogCommandsShort}} e sinais semelhantes. Evite também nomes iguais aos de um familiar ou de outro pet da casa, porque um cachorro não separa dois sons parecidos vindos da mesma voz. O gerador desta página remove as duas categorias automaticamente.',
      },
      {
        q: 'O nome de um cachorro deve ter uma ou duas sílabas?',
        a: 'Uma ou duas sílabas é o limite prático para nome de cachorro. Nomes curtos furam o ruído de fundo e são fáceis de dizer de forma seca e constante, que é o que o cachorro está de fato aprendendo. Nomes longos acabam encurtados no dia a dia de qualquer jeito, então vale escolher a forma curta de propósito em vez de deixar acontecer por acaso.',
      },
      {
        q: 'Consigo ouvir como se pronuncia um nome de cachorro?',
        a: 'Sim. Todo nome gerado tem um botão Pronunciar que lê o nome em voz alta usando o motor de voz embutido no seu navegador. Funciona offline depois que a página carrega, não envia nada a um servidor e não precisa de plugin. Ouvir um nome falado é o jeito mais rápido de perceber um que é desconfortável de gritar.',
      },
      {
        q: 'Quantos nomes de cachorro este gerador tem?',
        a: 'O gerador parte de {{dogCount}} nomes de cachorro, cada um com significado e origem documentados. Os filtros de sexo, estilo, letra inicial e tamanho máximo estreitam esse conjunto, e a leva exibida é sorteada com um embaralhamento de Fisher-Yates, para que todo nome compatível tenha a mesma chance de aparecer em vez de repetir sempre os mesmos.',
      },
    ],
  },

  cat: {
    title: 'Gerador de Nomes para Gato com Significado',
    description:
      'Gerador de nomes para gato grátis com significados documentados e pronúncia por toque. Filtre por estilo, sexo, letra e tamanho, sem conflitos em casa.',
    breadcrumb: 'Nomes de gato',
    h1: 'Gerador de nomes para gato',
    answerBox:
      'O nome de um gato deve ser curto, ter um som agudo como um “i” ou uma consoante forte, e ficar bem distinto das palavras usadas para corrigir ou chamar o gato. Este gerador parte de {{catCount}} nomes de gato com significados documentados, lê cada um em voz alta e filtra os que se chocam com nomes da casa ou com os chamados que o gato já ouve todo dia.',
    generator: {
      heading: 'Gerar nomes de gato',
      intro:
        'Filtre por estilo, sexo, letra inicial ou tamanho que caiba na plaquinha. Adicione os nomes já usados na sua casa e o filtro de conflitos passa longe deles.',
    },
    prose: {
      heading: 'O que faz um nome de gato funcionar',
      html: '<p>Gatos respondem melhor a nomes curtos com sons agudos. A audição deles vai bem acima da nossa na faixa alta, e os sons que distinguem com mais nitidez são os brilhantes — o “i” de Mimi, o k duro de Kiko. Um nome feito de sons graves e suaves não está errado, só precisa disputar mais a atenção contra tudo o que existe no ambiente.</p><p>A outra metade do problema é a separação. Gatos distinguem o próprio nome de palavras parecidas, mas a distinção é fina, e diante de um som ambíguo o normal é responderem com indiferença em vez de arriscar. Os chamados verificados automaticamente nesta página são: {{catCues}}. Todo nome da lista que fique perto demais de um deles é removido antes de você ver.</p><h2>Dar nome a dois gatos, ou a uma ninhada de filhotes</h2><p>Dois gatos numa casa precisam de nomes que um humano consiga chamar com clareza sob pressão e que eles não confundam entre si. O modo dupla devolve conjuntos de dois ou três nomes que compartilham estilo e tamanho aproximado mas começam com sons diferentes, com a mesma verificação fonética aplicada entre os próprios nomes. Para uma ninhada, coloque o tamanho em três e o tema se mantém nos três.</p><h2>Nomes curtos para plaquinhas de coleira</h2><p>Plaquinhas de gato são menores que as de cachorro e a área de gravação é realmente apertada: seis caracteres é um teto seguro se a plaquinha também levar um telefone. Deixe o filtro de tamanho máximo em cinco ou seis e toda sugestão vai caber sem que o gravador precise encolher o texto até ficar ilegível.</p>',
    },
    showcase: {
      heading: 'Nomes de gato por estilo, com significados',
      lead: 'Uma amostra da lista completa. O gerador acima filtra o restante por sexo, letra e tamanho.',
      elegant: 'Nomes elegantes para gato',
      mythical: 'Nomes mitológicos para gato',
      food: 'Nomes de gato inspirados em comida',
    },
    more: {
      heading: 'Dar nome a outro pet',
      html: '<p>É um cachorro? O <a href="{{url:dog}}">gerador de nomes para cachorro</a> verifica a lista completa de comandos com que os cachorros são adestrados. Os dois ao mesmo tempo, ou algo neutro quanto à espécie? Use o <a href="{{url:pet}}">gerador de nomes para pets</a>, ou comece pela <a href="{{url:home}}">página inicial</a> para ver como significados, pronúncia e filtro de conflitos se combinam.</p>',
    },
    faqHeading: 'Perguntas sobre nomes de gato',
    faqs: [
      {
        q: 'Como escolho o nome de um gato?',
        a: 'Escolha um nome curto com um som agudo e nítido — gatos ouvem frequências altas muito melhor que baixas, e por isso nomes com um “i” ou uma consoante forte conseguem resposta com mais constância. Duas sílabas terminadas em vogal funcionam bem. Teste o nome chamando do outro lado da sala antes de decidir.',
      },
      {
        q: 'Gatos aprendem mesmo o próprio nome?',
        a: 'Gatos aprendem o próprio nome, e pesquisas com gatos domésticos mostraram que eles o distinguem de palavras de som parecido. O que decidem fazer a respeito é outra história. Como a discriminação é real mas fina, um nome muito parecido com uma palavra da casa ou com o nome de outro pet realmente embaralha o sinal.',
      },
      {
        q: 'Que nomes de gato devo evitar?',
        a: 'Evite nomes parecidos com os sons que você já usa pela casa — {{catCues}} — e qualquer um próximo do nome de um familiar ou de outro pet. Gatos tendem a simplesmente ignorar um som ambíguo em vez de arriscar, então um nome que se sobrepõe a uma palavra de correção acaba sendo filtrado por completo.',
      },
      {
        q: 'Consigo ouvir o nome do gato antes de escolher?',
        a: 'Sim. Cada nome gerado tem um botão Pronunciar que usa o motor de voz embutido no seu navegador, sem plugin, conta nem download de áudio. É especialmente útil em nomes de origem mitológica e não portuguesa, em que a grafia diz pouco sobre como o nome é realmente falado.',
      },
      {
        q: 'E se eu for dar nome a dois filhotes de uma vez?',
        a: 'Ative “Vai dar nome a dois pets ao mesmo tempo?” e o gerador devolve conjuntos combinados em vez de uma lista solta. Cada conjunto compartilha estilo e tamanho parecido mas começa com sons diferentes, então dois filhotes da mesma casa não vêm correndo os dois — nem ignoram os dois — quando um nome é chamado.',
      },
    ],
  },

  pet: {
    title: 'Nomes para Pets com Significado',
    description:
      'Nomes para uma casa que já tem nomes. Cada um mostra o significado, toca em voz alta e é verificado contra sua família, seus pets e seus comandos.',
    breadcrumb: 'Nomes de pet',
    h1: 'Nomes de pet para cachorros e gatos',
    answerBox:
      'Um nome de pet funciona quando é curto, fácil de dizer com firmeza e diferente de todos os outros nomes e comandos já usados em casa. Este gerador cobre {{total}} nomes de cachorro e gato em {{styleCount}} estilos, mostra o significado documentado de cada um, lê em voz alta e descarta os que colidiriam com a sua família, os seus outros pets ou os seus comandos de adestramento.',
    generator: {
      heading: 'Gerar nomes de pet',
      intro:
        'Alterne entre cachorros, gatos ou os dois ao mesmo tempo. Filtros, significados, pronúncia e verificação de conflitos funcionam igual em todas as espécies.',
    },
    prose: {
      heading: 'Dar nome a um pet numa casa que já tem nomes',
      html: '<p>O erro mais comum ao escolher um nome é decidir isoladamente. Um nome ótimo sozinho pode ser um problema diário numa casa com um Jack, um Zack ou um cachorro que já atende por Bailey. Animais respondem a padrões sonoros, e dois padrões parecidos numa mesma casa significam que os dois animais reagem a qualquer um dos nomes — ou que nenhum reage com constância ao próprio.</p><p>O campo “evitar nomes parecidos com” existe para isso. Digite todos os nomes que a casa já usa — pessoas, pets, até um apelido gritado pelo quintal — e cada sugestão é comparada com todos eles por uma verificação fonética, não por coincidência de letras. Essa diferença importa: “Kay” e “Stay” não compartilham nenhuma letra no começo, mas colidem por completo em voz alta.</p><h2>Dar nome a dois pets ao mesmo tempo</h2><p>Dois pets que chegam juntos precisam de nomes que pertençam um ao outro sem se confundirem entre si. O modo dupla cuida das duas metades: agrupa nomes que compartilham estilo e ficam dentro de duas letras do mesmo tamanho, e depois rejeita qualquer par cujos membros estejam foneticamente próximos. Coloque o tamanho em três para uma ninhada e o tema se mantém nos três nomes.</p><h2>De onde vêm estes nomes e significados</h2><p>Todo nome da lista carrega um significado tirado de fontes linguísticas e culturais documentadas — etimologias registradas, mitologia e origens de palavras estabelecidas. Nada é estimado ou inventado para preencher lacuna, e o significado aparece ao lado do nome em vez de ficar escondido atrás de um botão ou de um formulário de e-mail. Você pode ler mais sobre a abordagem na <a href="{{url:about}}">página Sobre</a>.</p><h2>Orientação por espécie</h2><p>Para conselhos ajustados a um animal específico, use o <a href="{{url:dog}}">gerador de nomes para cachorro</a>, que confere os nomes contra a lista completa de comandos de adestramento, ou o <a href="{{url:cat}}">gerador de nomes para gato</a>, que cobre as frequências a que os gatos respondem melhor. O <a href="{{url:home}}">gerador de nomes para pets da página inicial</a> gera para as duas espécies e trata em mais detalhe os estilos fantasia e engraçado.</p>',
    },
    faqHeading: 'Perguntas sobre nomear pets',
    faqs: [
      {
        q: 'Qual é a melhor forma de escolher o nome de um pet?',
        a: 'Escolha um nome curto, fácil de dizer com firmeza, diferente de qualquer outro nome e comando da casa, e que você não tenha problema em falar em público. Trabalhe a partir de uma lista filtrada em vez de uma página em branco, confira o significado antes de se comprometer e diga o nome em voz alta, no volume de chamar, antes de decidir.',
      },
      {
        q: 'Como dar nome a um pet que chega numa casa que já tem outros?',
        a: 'Escolha um nome que não compartilhe som inicial nem rima com os pets que já estão lá. Os animais atuais respondem ao próprio nome por reflexo, e dois nomes parecidos numa casa fazem os dois virem quando qualquer um é chamado. Digite os nomes dos pets atuais no campo “evitar nomes parecidos com” e o gerador remove as colisões.',
      },
      {
        q: 'O mesmo conselho vale para cachorros e gatos?',
        a: 'A regra básica é a mesma para os dois — curto, distinto, constante — mas a ênfase muda. Cachorros precisam da maior separação possível dos comandos de adestramento, porque os comandos são usados o tempo todo e o custo da ambiguidade é um retorno mais lento. Gatos respondem com mais constância a sons agudos e tendem a ignorar um nome ambíguo em vez de arriscar.',
      },
      {
        q: 'Posso usar este gerador para um pet que não seja cachorro nem gato?',
        a: 'Sim, com uma ressalva: os {{total}} nomes daqui são selecionados para cachorros e gatos, e a verificação automática de conflitos usa sinais caninos e felinos. Os nomes em si — seus significados, sons e estilos — funcionam muito bem para um coelho, um furão ou um cavalo. O filtro de tamanho e o filtro de conflitos da casa valem para qualquer animal.',
      },
      {
        q: 'Algo que eu digito no gerador fica salvo?',
        a: 'Não. O gerador é um site estático sem contas, sem banco de dados e sem processamento dos seus dados no servidor. Os nomes que você digita no filtro de conflitos são comparados no seu navegador e descartados quando você fecha a aba. A política de privacidade detalha exatamente o que é e o que não é coletado.',
      },
    ],
  },

  /**
   * Elementos comuns aos quatro guias. São artigos, não páginas de ferramenta,
   * por isso levam assinatura e data de revisão.
   */
  guides: {
    bylineLabel: 'Perfect Pet Name Generator',
    updatedLabel: 'Atualizado em {{updated}}',
    homeHeading: 'Guias de nomes',
    homeLead:
      'Escolher a palavra é a parte rápida. Estes quatro guias cobrem tudo o que vem em volta: ensinar o nome, os nomes que vale a pena descartar, dar nome a dois animais ao mesmo tempo e de onde vêm os significados deste site.',
    readMore: 'Ler o guia',
  },

  /** Aviso de cookies. Aparece apenas onde o consentimento é exigido. */
  consent: {
    title: 'Cookies neste site',
    bodyHtml:
      'Usamos cookies para medir como o site é usado e para sustentá-lo com publicidade. Se recusar, o gerador continua funcionando exatamente como agora: todos os filtros, a verificação de conflitos e o botão de pronúncia rodam no seu navegador de qualquer forma. A <a href="{{url:privacy}}">política de privacidade</a> traz os detalhes.',
    accept: 'Aceitar',
    reject: 'Recusar',
    manage: 'Configurações de cookies',
    ariaLabel: 'Consentimento de cookies',
  },

  teach: {
    title: 'Como ensinar o nome a um cachorro ou gato',
    description:
      'Um método em quatro etapas para o filhote responder ao nome: como carregar o som, com que frequência praticar e o que estraga tudo sem você perceber.',
    breadcrumb: 'Ensinar o nome',
    h1: 'Como ensinar o nome a um cachorro ou gato',
    keywords:
      'ensinar o nome ao cachorro, treino de reconhecimento do nome, ensinar o nome ao filhote, ensinar o nome ao gato, comando contaminado',
    answerBox:
      'Ensine o nome associando o som a algo bom antes mesmo de cobrar qualquer resposta: diga o nome uma vez, marque o instante em que o animal olha para você, recompense e repita. De cinco a dez repetições, três vezes por dia, num cômodo silencioso, bastam para a maioria dos filhotes virar a cabeça de forma confiável em uma semana. O nome é um pedido de atenção, nunca uma correção, e o jeito mais rápido de perdê-lo é usá-lo quando você está irritado.',
    card: {
      heading: 'Ensinar o nome',
      body: 'Um protocolo em quatro etapas para conseguir uma virada de cabeça confiável, quanto tempo leva e os hábitos que desfazem isso em silêncio.',
    },
    html: '<h2>O que “saber o próprio nome” realmente significa</h2><p>Um animal não aprende o nome como um rótulo. Ele aprende como um som que anuncia algo pelo qual vale a pena se virar. Essa distinção não é acadêmica: ela define todo o método. Você não está ensinando quem ele é; está construindo um reflexo em que um ruído específico, entre tudo o que ele ouve num dia, significa de forma confiável <strong>olhe para mim, algo bom está prestes a acontecer</strong>.</p><p>A consequência prática é que o nome tem uma única função: comprar a atenção do animal para você poder pedir outra coisa. O chamado, um toque na mão, prender a guia, desviar o olhar de outro cachorro — tudo começa com a virada de cabeça. Um nome que só funciona pela metade não é um problema de nome, é um problema de atenção, e ele reaparece em todos os outros comandos que você ensinar depois.</p><h2>O método em quatro etapas</h2><h3>Etapa um: carregar o som</h3><p>Comece no cômodo mais silencioso da casa, sem outros animais por perto e com algo que o animal realmente queira: petiscos pequenos, macios e rápidos de comer para a maioria dos cachorros; uma lambida de sachê, uma varinha de penas favorita ou alguns segundos de cafuné no queixo para gatos. Diga o nome uma vez, em tom caloroso e tranquilo. No instante em que uma orelha se mexer ou a cabeça girar na sua direção, marque — um “isso” curto, um clique ou simplesmente o petisco aparecendo — e entregue a recompensa.</p><p>Se nada acontecer em dois ou três segundos, não repita o nome. Faça um som completamente diferente — um estalo com a boca, uma batidinha no chão — e recompense a resposta que conseguir. Repetir um nome no vazio é o erro mais comum, porque o que o animal aprende é que o nome pode ser ignorado várias vezes antes de qualquer coisa acontecer.</p><h3>Etapa dois: variar distância e ângulo</h3><p>Assim que a virada de cabeça for imediata, comece a variar onde você está. Diga o nome do outro lado do cômodo, por trás, de outra altura, sentado no chão, em pé, do cômodo ao lado. Cada variação é informação genuinamente nova para um animal: um comando aprendido só enquanto você está agachado na frente dele costuma desabar na primeira vez que você o diz de pé.</p><h3>Etapa três: generalizar</h3><p>Passe para o quintal, depois o corredor, depois a calçada e então um parque tranquilo. A distração é o eixo que importa, e ela deve subir devagar o bastante para você continuar obtendo a resposta. Se você perder a resposta, pulou longe demais: volte ao último lugar em que funcionava e aumente a dificuldade em passos menores. Para um gato de apartamento, generalizar significa cômodos diferentes, horários diferentes e — o mais útil — praticar enquanto o gato está levemente ocupado, não dormindo.</p><h3>Etapa quatro: proteger</h3><p>Proteger o nome é a etapa que quase todo mundo pula, e a única que dura para sempre. Toda vez que o nome vem seguido de algo que o animal detesta, o reflexo que você construiu enfraquece um pouco. Continue recompensando a resposta de forma intermitente pela vida inteira do animal: não toda vez, mas com frequência suficiente para que aquele som continue valendo uma resposta.</p><h2>Com que frequência e por quanto tempo</h2><p>As sessões devem ser curtas e frequentes: de cinco a dez repetições, duas ou três vezes por dia, encerrando enquanto o animal ainda quer mais. Dez minutos de insistência valem menos que noventa segundos repetidos três vezes, porque um animal cansado ou entediado está aprendendo que o nome anuncia tédio.</p><p>Um filhote sem histórico ruim costuma virar de forma confiável num cômodo silencioso em três a sete dias, e sustenta a resposta sob distração leve depois de duas a quatro semanas. Um adulto adotado com passado desconhecido pode levar mais tempo, e um animal que ouviu o nome antigo gritado com raiva às vezes se dá melhor com um novo — o que é uma razão perfeitamente válida para rebatizá-lo.</p><h2>O que estraga o reconhecimento do nome</h2><ul><li><strong>Usar o nome como correção.</strong> “Bailey!” gritado do outro lado da sala enquanto ele mastiga alguma coisa ensina a Bailey que aquele som às vezes anuncia encrenca. Os adestradores chamam isso de comando contaminado. Use “eh-eh”, “larga” ou simplesmente vá até lá interromper: qualquer coisa menos o nome.</li><li><strong>Chamar pelo nome para coisas que ele odeia.</strong> Cortar unhas, pingar remédio no ouvido, a caixa de transporte, o banho, o fim do passeio. Vá buscá-lo em vez de chamar, ou ensine um comando separado para isso.</li><li><strong>Repetir.</strong> “Bailey. Bailey. Bailey!” ensina que as duas primeiras vezes são ruído.</li><li><strong>Quinze apelidos.</strong> Escolha um nome e no máximo um apelido até a resposta ficar sólida. Bailey, Bay-Bay, Bailey-Boo e Seu B são quatro sons diferentes para um animal que ainda não conhece nenhum.</li><li><strong>Um nome que colide com um comando.</strong> Se o nome soa como um comando — {{dogCommandsShort}} e semelhantes — pede-se ao animal que separe dois sinais quase idênticos todos os dias. Isso dá para resolver antes de decidir, e é por isso que os geradores deste site verificam automaticamente.</li></ul><h2>Gatos: mesmo mecanismo, outra moeda</h2><p>Gatos aprendem o reconhecimento do nome do mesmo jeito que cachorros; trabalhos publicados sobre gatos domésticos mostraram que eles distinguem o próprio nome de palavras parecidas. O que muda é a recompensa e a expectativa. Comida funciona, mas um tipo específico de atenção também, e a meta honesta para a maioria dos gatos é uma orelha girando e um olhar, não o chamado a galope de um cachorro.</p><p>Pratique antes das refeições, não depois, mantenha as sessões abaixo de um minuto e pare ao primeiro balanço de rabo. Gatos também respondem melhor a nomes com sons claros e agudos — o “i” longo de Mimi, o k duro de Kiko —, e por isso nomes curtos com essas notas costumam funcionar melhor.</p><h2>Rebatizar um animal adotado ou adulto</h2><p>Trocar o nome é mais fácil do que se imagina, porque o nome antigo também nunca passou de um som. Faça uma ponte por uma semana: diga o nome novo seguido imediatamente do antigo, recompense a resposta e, depois de alguns dias, abandone o antigo. Se o nome novo compartilha a forma vocálica do antigo — Suki para Sushi, Mati para Maggie —, a ponte é ainda mais curta, embora valha garantir que o nome antigo não carregue uma história infeliz antes de repeti-lo de propósito.</p>',
    faqHeading: 'Perguntas sobre ensinar o nome',
    faqs: [
      {
        q: 'Quanto tempo um filhote leva para aprender o nome?',
        a: 'A maioria dos filhotes vira de forma confiável na direção do nome num cômodo silencioso em três a sete dias, com sessões curtas duas vezes ao dia, e mantém a resposta sob distração leve depois de duas a quatro semanas. O avanço depende muito mais da constância com que o nome anuncia algo bom do que da idade do filhote ou dos minutos dedicados.',
      },
      {
        q: 'Devo repetir o nome do meu pet se ele não responder?',
        a: 'Não. Repetir ensina que as primeiras vezes podem ser ignoradas sem consequência. Se não houver resposta em dois ou três segundos, use um som diferente, como um estalo com a boca ou uma batidinha no chão, recompense a resposta que conseguir e facilite a próxima repetição chegando mais perto ou removendo uma distração.',
      },
      {
        q: 'Posso usar o nome do meu pet para repreendê-lo?',
        a: 'Evite. Usar o nome para corrigir transforma-o num sinal que às vezes anuncia encrenca, o que os adestradores chamam de comando contaminado, e o animal passa a hesitar antes de se virar. Reserve um interruptor separado, como "eh-eh" ou "larga", para o comportamento indesejado e deixe o nome só para pedir atenção.',
      },
      {
        q: 'Gatos realmente aprendem o próprio nome?',
        a: 'Sim. Gatos domésticos distinguem o próprio nome de palavras parecidas e aprendem pelo mesmo processo de associação que os cachorros. A meta realista é outra: na maioria dos gatos, uma orelha girando de forma confiável e um olhar já são sucesso, e as sessões funcionam melhor com menos de um minuto, feitas antes das refeições e encerradas ao primeiro sinal de desinteresse.',
      },
      {
        q: 'Como rebatizar um cachorro ou gato adotado?',
        a: 'Faça uma ponte por cerca de uma semana: diga o nome novo, emende imediatamente o antigo e recompense a resposta. Depois de alguns dias, abandone o antigo e recompense a resposta só ao novo. Trocar o nome costuma ser simples, e vale mesmo a pena se o nome anterior era usado com raiva.',
      },
    ],
    related: {
      heading: 'Para onde ir agora',
      html: '<p>Ainda escolhendo? O <a href="{{url:dog}}">gerador de nomes para cachorro</a> e o <a href="{{url:cat}}">gerador de nomes para gato</a> conferem cada sugestão contra os comandos que o seu animal vai precisar aprender, o que elimina de saída a pior versão desse problema. Antes de decidir vale ler quais <a href="{{url:avoid}}">nomes evitar</a> e, se dois animais chegam juntos, no que <a href="{{url:pairs}}">nomear dois pets</a> difere de nomear um duas vezes.</p>',
    },
  },

  avoid: {
    title: 'Nomes de pet a evitar, e por quê',
    description:
      'Os tipos de nome de cachorro e gato que dão problema depois: choque com comandos, colisão com a casa, apelidos que você não escolheu e piadas que vencem.',
    breadcrumb: 'Nomes a evitar',
    h1: 'Nomes de pet a evitar, e por quê',
    keywords:
      'nomes de pet a evitar, nomes de cachorro a evitar, nomes de gato a evitar, nomes que soam como comandos, nomes ruins para pet',
    answerBox:
      'Evite nomes que soem como um comando que você pretende ensinar, nomes que colidem com uma pessoa ou animal que já vive na casa, nomes que você não gostaria de ouvir chamados numa sala de espera e nomes cuja forma curta você não escolheu de propósito. Quase todo arrependimento com nome cai numa dessas quatro categorias, e as quatro aparecem em uns trinta segundos se você disser a lista em voz alta antes de decidir.',
    card: {
      heading: 'Nomes a evitar',
      body: 'Quatro categorias que dão problema meses depois: choque com comandos, colisão com a casa, apelidos indesejados e piadas de vida curta.',
    },
    html: '<h2>1. Nomes que soam como um comando</h2><p>Esta é a categoria com custo mensurável. Um cachorro aprende comandos como padrões sonoros, e dois padrões separados por um único som são realmente difíceis de distinguir — ainda mais à distância, ao ar livre, por cima do vento e do trânsito, com a voz elevada. “Bo” contra “no”, “Kit” contra “sit”, “Kay” contra “stay”, “Dan” contra “down”: cada um desses pares pede ao animal uma discriminação em que ele não tem motivo nenhum para ser bom.</p><p>O que se paga não é o nome, é o comando. Cada repetição ambígua atrasa o comando, e o que costuma ser atrasado é o chamado — justamente o que importa quando um portão fica aberto. Os comandos que valem conferir são os que você vai mesmo ensinar: {{dogCommandsShort}} e o resto do repertório básico, além do que a sua casa diz sem pensar, como “solta”, “espera” ou “sai”.</p><p>A armadilha é a rima, não a grafia. “Kay” e “stay” não compartilham nem a primeira letra e colidem por completo em voz alta, e é por isso que comparar nomes pela escrita perde a maior parte do problema. Os geradores daqui comparam foneticamente, contra {{dogCommandCount}} comandos comuns.</p><h2>2. Nomes que colidem com a casa</h2><p>É no segundo animal da casa que isso morde. Um cachorro que vive com um Bailey vai penar com Hayley; um gato numa casa com um Jake vai penar com Jade. Nomes das crianças, o do parceiro, o da avó que aparece toda semana e o apelido que de fato se usa contam todos: o nome da casa que importa é o que se grita pelo quintal, não o do documento.</p><p>Dois animais com nomes parecidos é a pior versão, porque ambos aprendem a responder a um som ambíguo e você perde a capacidade de falar com um só. Se já existe um Milo, risque Miles, Marlo, Mylo e Nilo antes de começar.</p><h2>3. Nomes que encurtam de um jeito que você não escolheu</h2><p>Nomes longos são encurtados. Isso não é um talvez: Hércules vira Herc, Maximiliano vira Max, Bartolomeu vira Bart, normalmente em quinze dias e normalmente não por você. O nome que você vai usar todo dia é a forma curta, então vale escolhê-la de propósito em vez de descobri-la.</p><p>Diga o nome inteiro dez vezes no volume de quem chama e escute o que a sua boca faz com ele. Se o resultado for uma forma de que você não gosta, ou que colide com um comando, o nome longo é a escolha errada por melhor que fique no papel. Esse é também o argumento prático do filtro de comprimento dos geradores: uma plaquinha gravada aceita cerca de oito caracteres por linha antes de a letra encolher, e o que é cortado é o nome que disputa espaço com o telefone.</p><h2>4. Piadas com pouca validade</h2><p>Nomes engraçados são uma categoria legítima e há {{funnyCount}} deles aqui, mas a piada precisa sobreviver a alguns testes específicos. Ela será lida em voz alta por uma recepcionista numa sala de espera cheia. Será escrita num registro de microchip, numa apólice de seguro e numa ficha de hotelzinho. Será gritada, por você, num parque público, talvez por vários minutos, enquanto as pessoas olham.</p><p>Nomes construídos sobre duplo sentido, uma figura pública ou uma referência presa a um ano específico costumam falhar em pelo menos um desses testes. Os engraçados que aguentam são aqueles cujo humor nasce da distância entre o nome e o animal — um chihuahua chamado Almôndega, um gato enorme e plácido chamado Chonk — porque essa distância não envelhece.</p><h2>Quatro pontos menores que vale conhecer</h2><ul><li><strong>Nomes que significam algo infeliz em outro idioma.</strong> Um nome que fica lindo numa língua às vezes soa péssimo em outra, e isso merece dez segundos de conferência quando o nome tem origem estrangeira. Todos os nomes deste site mostram o significado documentado exatamente por isso.</li><li><strong>Nomes difíceis de soletrar em voz alta.</strong> Você vai soletrar para o veterinário, o banho e tosa, o seguro e o hotelzinho. Um nome que precisa ser soletrado duas vezes toda vez é um pequeno imposto pago por quinze anos.</li><li><strong>Reaproveitar o nome de um pet anterior.</strong> É comum, compreensível e merece ser pensado duas vezes: convida a uma comparação que o animal novo não tem como vencer, e pode deixar o nome mais difícil de dizer justo nos dias em que já é difícil.</li><li><strong>Nomes terminados em som macio que se apaga.</strong> Nomes que se dissolvem numa vogal ou consoante fraca não chegam longe ao ar livre. Uma vogal clara ou uma consoante seca no fim — o “-o” de Milo, o “-t” duro de Bandit — corta o vento e a distância muito melhor.</li></ul><h2>O teste de trinta segundos</h2><p>Antes de decidir, faça isto com a lista. Fique numa ponta da casa ou do quintal e chame cada nome três vezes no volume que você usaria num parque. Depois diga-o logo após cada comando que pretende ensinar — “sit, Kit”, “stay, Kay” — e escute a colisão. Então imagine-o lido em voz alta por um desconhecido numa sala de espera. O que sobreviver aos três é um nome com que dá para viver.</p>',
    faqHeading: 'Perguntas sobre nomes a evitar',
    faqs: [
      {
        q: 'Que nomes de cachorro devo evitar?',
        a: 'Evite nomes que rimem ou se pareçam muito com os comandos que você pretende ensinar — {{dogCommandsShort}} e sinais semelhantes — junto com nomes próximos aos de uma pessoa ou de outro animal que já mora na casa. Evite também nomes longos cuja forma curta você não escolheu de propósito, já que é essa forma curta que você vai usar todo dia.',
      },
      {
        q: 'Por que importa se o nome soa como um comando?',
        a: 'Porque o animal aprende os dois como padrões sonoros, e dois padrões separados por um único som são difíceis de distinguir à distância ou ao ar livre. Cada repetição ambígua atrasa mais o comando do que o nome, e o comando mais afetado costuma ser o chamado, justamente o que mais importa quando falha.',
      },
      {
        q: 'Dois pets na mesma casa podem ter nomes parecidos?',
        a: 'É melhor evitar. Com nomes parecidos, os dois animais respondem a um som ambíguo, então você perde a capacidade de falar com um deles em particular e ambos demoram mais para aprender o próprio nome. Busque sons iniciais diferentes e uma diferença clara na forma vocálica, não apenas uma grafia distinta.',
      },
      {
        q: 'Nome longo para pet é uma má ideia?',
        a: 'Não por si só, mas é quase sempre encurtado no dia a dia, então a escolha prática é a forma curta e não a completa. Diga o nome longo várias vezes no volume de quem chama, escute no que ele se transforma e confira se o resultado agrada e não colide com nenhum comando.',
      },
      {
        q: 'Como saber se um nome engraçado vai envelhecer bem?',
        a: 'Teste-o em três lugares: lido em voz alta por uma recepcionista numa sala de espera cheia, escrito num registro de microchip e num seguro, e gritado por você num parque público. Piadas baseadas em duplo sentido, figura pública ou um único ano costumam falhar em algum deles, enquanto o humor que nasce do contraste entre nome e animal tende a durar.',
      },
    ],
    related: {
      heading: 'Para onde ir agora',
      html: '<p>O <a href="{{url:dog}}">gerador de nomes para cachorro</a> e o <a href="{{url:cat}}">gerador de nomes para gato</a> aplicam sozinhos as duas primeiras regras desta página: informe os nomes da sua casa e cada choque é removido ou sinalizado. Escolhido o nome, <a href="{{url:teach}}">ensiná-lo</a> leva cerca de uma semana, e se você vai nomear dois animais ao mesmo tempo, <a href="{{url:pairs}}">nomear dois pets</a> cobre a restrição extra.</p>',
    },
  },

  pairs: {
    title: 'Dar nome a dois pets ao mesmo tempo',
    description:
      'Nomear uma dupla ou uma ninhada não é nomear duas vezes: as três restrições que fazem um par de nomes funcionar e os temas que aguentam o tempo.',
    breadcrumb: 'Nomear dois pets',
    h1: 'Dar nome a dois pets ao mesmo tempo',
    keywords:
      'nomear dois pets, nomes para dupla de animais, nomes para irmãos de ninhada, nomes combinando, nomes para dois cachorros, nomes para dois gatos',
    answerBox:
      'Um par de nomes precisa de três coisas ao mesmo tempo: um vínculo que os faça ser lidos como conjunto, sons iniciais claramente diferentes e comprimentos que não passem de duas letras de diferença. O tema é a parte fácil e aquela em que a maioria investe demais; o que decide se você consegue chamar um animal sem que os dois apareçam é a distinção, e é justamente a restrição ignorada.',
    card: {
      heading: 'Nomear dois pets',
      body: 'Por que duplas e irmãos de ninhada precisam de nomes que conectam e separam ao mesmo tempo, e os temas que dão conta das duas coisas.',
    },
    html: '<h2>Por que dois é um problema diferente</h2><p>Nomear um animal é procurar um nome de que você goste. Nomear dois é um problema de restrições, e as restrições puxam em sentidos opostos: os nomes devem pertencer ao mesmo conjunto e devem ser impossíveis de confundir. A maioria dos pares falha na segunda parte, porque a primeira é a divertida de pensar.</p><p>A falha é específica e nada sutil. Dois animais cujos nomes compartilham som inicial e número de sílabas aprendem ambos a responder a algo no meio do caminho: você chama um, os dois vêm, e nenhum está de fato respondendo ao próprio nome. Numa casa com dois animais isso é um custo diário, e é pior exatamente quando importa: na porta, no portão, na hora da comida.</p><h2>As três restrições</h2><h3>Um vínculo, e leve</h3><p>A conexão pode ser muito mais leve do que se supõe. Mesma origem, mesma época, mesmo campo, mesmo registro: Nero e Cássio são obviamente uma dupla sem que nenhum seja metade de uma piada combinada. O que convém evitar é um vínculo tão apertado que os dois nomes virem uma unidade só — Sal e Pimenta, Yin e Yang, Coisa Um e Coisa Dois — porque essa fórmula viaja mal se os animais chegarem a se separar, e é uma consideração real numa dupla em que um pode sobreviver ao outro por anos.</p><h3>Sons iniciais diferentes</h3><p>Esta é a restrição que faz o trabalho de verdade. O primeiro som de um nome carrega quase toda a discriminação, então dois nomes não deveriam começar pela mesma consoante nem pela mesma forma vocálica. Bella e Bailey é o erro clássico: mesma abertura, mesmo comprimento, mesmo padrão de acento. Bella e Otto tem o mesmo registro estético sem nada da confusão.</p><p>A rima final é a versão de segunda ordem do mesmo problema. Maisie e Daisy diferem no começo, mas se fundem a qualquer distância. Busque nomes que difiram nas duas pontas se der, e no começo no mínimo.</p><h3>Comprimento e ritmo parecidos</h3><p>Nomes com uma ou duas letras de diferença, de preferência com o mesmo número de sílabas, são lidos como um conjunto deliberado e não como acaso. Milo e Otis funciona; Milo e Bartolomeu parecem duas decisões sem relação e, na prática, o longo acaba encurtado em algo que talvez já não combine com a dupla.</p><h2>Temas que aguentam</h2><p>Os temas que sobrevivem são os que têm membros suficientes para permitir uma busca de verdade e variedade interna bastante para não obrigar a duas escolhas que soam igual. Mitologia de uma única tradição, constelações, árvores, especiarias, músicos de jazz, montanhas, rios, pintores, grupos de palavras de uma mesma origem: todos oferecem dezenas de candidatos no mesmo registro, o que permite descartar os que colidem.</p><p>Os temas que se voltam contra você são os pares fechados: duas metades de uma expressão, dois personagens sempre citados juntos ou qualquer coisa em que um nome não signifique nada sem o outro. São charmosos por um ano e constrangedores depois.</p><h2>Irmãos de ninhada e duplas</h2><p>Irmãos de ninhada que chegam juntos são o caso mais limpo: você escolhe os dois nomes de uma vez e pode otimizar o conjunto inteiro em vez de encaixar um nome ao redor de outro já existente. Aproveite. Aplique as restrições à dupla como conjunto e esteja disposto a abrir mão de um nome de que gosta por outro que separa melhor.</p><p>Duplas — animais adotados juntos e já apegados — trazem uma consideração extra. Todo mundo ao redor costuma chamá-los, alimentá-los e movê-los como uma unidade, o que torna a restrição de distinção mais importante e não menos, já que o ambiente vem misturando os dois. Se um chegar já com nome, trate esse nome como fixo e procure ao redor.</p><h2>Acrescentar um segundo animal a um já existente</h2><p>Aqui o primeiro nome é uma restrição rígida, e o trabalho é achar um segundo que fique ao lado sem colidir. Pegue o nome existente e descarte tudo o que compartilhe o som inicial, tudo o que rime com ele e tudo o que esteja a um som de distância no meio. Depois procure o vínculo — e faça isso com calma, porque uma conexão temática solta é lida como intencional e uma apertada não compensa a confusão que compra.</p><h2>Três ou mais</h2><p>Três nomes multiplicam as verificações aos pares em vez de somá-las: cada nome precisa se separar de todos os outros, não só do último escolhido. Na prática, um tema de campo amplo e três sons iniciais distintos é o método inteiro, e vale escrever os três nomes e chamar cada um em voz alta pensando nos outros dois.</p><p>O modo dupla dos geradores deste site faz exatamente isso: monta conjuntos de dois ou três que compartilham um estilo, ficam próximos em comprimento, começam com sons diferentes e passam entre si na mesma verificação fonética que o filtro de conflitos aplica aos nomes da sua casa.</p>',
    faqHeading: 'Perguntas sobre nomear dois pets',
    faqs: [
      {
        q: 'Dois pets devem ter nomes combinando?',
        a: 'Um vínculo temático leve funciona bem; uma dupla apertadamente combinada normalmente não. Nomes de mesma origem, época ou campo são lidos como um conjunto deliberado sem deixar de ser independentes, enquanto duas metades de uma expressão como Sal e Pimenta perdem o sentido se os animais se separarem, o que importa sobretudo numa dupla em que um pode sobreviver ao outro.',
      },
      {
        q: 'O que deixa dois nomes de pet parecidos demais?',
        a: 'Compartilhar o som inicial é o problema principal, porque o primeiro som carrega quase toda a discriminação: Bella e Bailey é o exemplo clássico. Terminações que rimam, como Maisie e Daisy, vêm em seguida, já que os nomes se fundem à distância. Busque sons iniciais diferentes e, se possível, finais diferentes também.',
      },
      {
        q: 'Como nomear um segundo pet se o primeiro já tem nome?',
        a: 'Trate o nome existente como fixo e procure ao redor. Descarte tudo o que compartilhe o som inicial, tudo o que rime com ele e tudo o que esteja próximo no meio, e então procure um vínculo temático solto. Uma conexão relaxada é lida como intencional sem comprar nada da confusão que uma apertada traz.',
      },
      {
        q: 'Irmãos de ninhada precisam de nomes temáticos?',
        a: 'Não precisam de tema, mas escolher os dois nomes de uma vez é uma vantagem real que vale aproveitar. Como nenhum está fixado, dá para otimizar o conjunto inteiro pela distinção em vez de encaixar um nome ao redor de outro, o que costuma significar estar disposto a soltar um nome de que você gosta por outro que separa melhor.',
      },
      {
        q: 'Como nomear três pets sem confundi-los?',
        a: 'Cada nome precisa se separar de todos os outros, então três nomes significam três verificações aos pares e não duas escolhas sucessivas. Escolha um tema de campo amplo, dê a cada nome um som inicial diferente, depois escreva os três e chame cada um em voz alta pensando nos outros dois antes de decidir.',
      },
    ],
    related: {
      heading: 'Para onde ir agora',
      html: '<p>Ative o modo dupla no <a href="{{url:pet}}">gerador de nomes para pets</a> para que os conjuntos sejam montados e conferidos para você, ou use os geradores de <a href="{{url:dog}}">cachorro</a> e <a href="{{url:cat}}">gato</a> para uma única espécie. Vale ler a lista mais ampla de <a href="{{url:avoid}}">nomes a evitar</a> antes de decidir, e <a href="{{url:teach}}">ensinar os nomes</a> depois fica mais fácil quando os dois são de fato distintos.</p>',
    },
  },

  meanings: {
    title: 'De onde vêm os significados dos nomes',
    description:
      'Como os significados são documentados aqui: que fontes contam, como se tratam as etimologias em disputa e por que nenhum nome tem significado inventado.',
    breadcrumb: 'Significado dos nomes',
    h1: 'De onde vêm os significados dos nomes',
    keywords:
      'significado de nomes de pet, origem dos nomes, significado de nomes de cachorro, significado de nomes de gato, política editorial, etimologia',
    answerBox:
      'Cada um dos {{total}} nomes deste site carrega um significado retirado de uma fonte documentada: uma etimologia registrada, uma figura mitológica ou literária atestada, ou a origem simples de uma palavra. Quando as fontes divergem, a entrada diz do que se trata em vez de escolher um vencedor. Nenhum significado aqui é deduzido do som de um nome, e nenhum nome aparece com significado inventado para preencher espaço.',
    card: {
      heading: 'De onde vêm os significados',
      body: 'O critério de fonte por trás de cada nome do site: o que conta como documentado, como se tratam as divergências e como avisar de um erro.',
    },
    html: '<h2>Por que esta página existe</h2><p>Conteúdo sobre significado de nomes é incomumente fácil de errar e incomumente difícil de conferir. Um significado inventado num lugar é copiado em uma dúzia de outros em um ano, e depois disso parece bem documentado simplesmente porque está em toda parte. Como o significado mostrado ao lado de um nome é uma das duas coisas sobre as quais este site pede que você decida, pareceu justo deixar por escrito a que critério esses significados são submetidos.</p><h2>O que conta como fonte</h2><p>Um nome só aparece aqui se o seu significado remontar a pelo menos um dos seguintes:</p><ul><li><strong>Uma etimologia registrada.</strong> Um nome com derivação documentada numa língua estabelecida — hebraico, grego, latim, nórdico antigo, germânico, irlandês, japonês e assim por diante — em que a raiz e o seu sentido são atestados e não reconstruídos por semelhança.</li><li><strong>Uma figura atestada.</strong> Nomes da mitologia, do folclore, da história ou da ficção publicada, em que o significado dado é quem ou o que a figura foi e não uma afirmação sobre a raiz da palavra. Odin, Atena, Fenrir e Gandalf são descritos assim, porque é isso o que de fato está documentado sobre eles.</li><li><strong>Uma origem lexical simples.</strong> Nomes que são apenas palavras — Pepper, Biscuit, Shadow, Willow — em que o significado é o sentido comum da palavra e a origem consta em obras de consulta gerais.</li><li><strong>Um diminutivo documentado.</strong> Formas curtas cujo nome de origem tem significado registrado, indicado como tal: Abby figura como forma curta de Abigail, com o significado de Abigail anexado em vez de um próprio.</li></ul><h2>O que não conta</h2><ul><li><strong>Derivação por semelhança sonora.</strong> Um nome parecer-se com uma palavra de alguma língua não significa que derive dela. A semelhança é como começa a maioria das etimologias inventadas.</li><li><strong>Significado por associação.</strong> Um nome popular entre gatos pretos não significa “preto”, e um nome comum entre cachorros grandes não significa “forte”.</li><li><strong>Fontes circulares.</strong> Um significado que só aparece em listas de nomes, todas visivelmente copiando umas às outras, é tratado como sem fonte.</li><li><strong>Invenção.</strong> Se nenhum significado pode ser documentado, o nome fica de fora da lista em vez de receber um plausível. É por isso que faltam alguns nomes de pet perfeitamente bons.</li></ul><h2>Significados em disputa e múltiplos</h2><p>As etimologias divergem mais do que as listas de nomes admitem. Nomes atravessam línguas, recolhem etimologias populares e são reinterpretados pelas culturas que os tomam emprestados, e frequentemente não há uma única resposta correta. Quando as fontes colidem, a entrada dá a leitura melhor atestada e diz de que tipo de coisa se trata — uma forma curta, uma figura mitológica, uma palavra de determinada língua — em vez de apresentar uma interpretação como fato encerrado.</p><p>A implicação prática também está na <a href="{{url:terms}}">página de termos</a>, e vale repeti-la aqui: nenhum significado deste site pretende ser a interpretação definitiva nem a única de um nome. Se o significado de um nome importa de forma especial para você — um nome em memória de alguém, um nome com peso religioso ou cultural, um nome numa língua que você não fala —, confira numa fonte de sua confiança antes de se comprometer.</p><h2>Os significados são para você, não para o animal</h2><p>Vale dizer com clareza, porque muda o peso que o significado deve ter. Um animal aprende o nome como som e não tem acesso ao que ele quer dizer. O significado importa porque você vai dizer essa palavra várias vezes por dia por uma década ou mais, e porque saber que Luna é “lua” em latim, ou que Loki é o deus trapaceiro nórdico, é muitas vezes o que transforma uma lista de seis numa decisão.</p><p>É também por isso que os significados aqui ficam à vista no cartão e não atrás de um sanfona, de uma conta ou de um formulário de e-mail. Um significado que dá trabalho ver é um significado que você não vai conferir.</p><h2>Como a lista é mantida</h2><p>A lista de nomes é um arquivo estático com {{dogCount}} nomes de cachorro e {{catCount}} de gato — {{total}} nomes únicos no total, já que um nome adequado às duas espécies é guardado uma vez para cada. Os nomes entram em lotes, e cada acréscimo precisa chegar com significado anexado; um nome sem significado documentado não entra à espera de conseguir um.</p><p>As correções são a principal via pela qual os erros aparecem, e são muito bem-vindas. Se um significado daqui parecer errado, envie o nome e, se tiver, uma fonte que considere confiável para <a href="mailto:{{email}}">{{email}}</a> ou pela <a href="{{url:contact}}">página de contato</a>. As correções que se sustentam são aplicadas ao arquivo de dados, que é o que cada página em cada idioma lê, então um ajuste chega a todos os lugares de uma vez.</p>',
    faqHeading: 'Perguntas sobre o significado dos nomes',
    faqs: [
      {
        q: 'De onde vêm os significados dos nomes deste site?',
        a: 'Cada significado remonta a uma fonte documentada: uma etimologia registrada numa língua estabelecida, uma figura atestada da mitologia, do folclore, da história ou da ficção publicada, uma origem lexical simples, ou um diminutivo cujo nome de origem tem significado registrado. Nomes cujo significado não pode ser documentado ficam de fora em vez de receber um inventado.',
      },
      {
        q: 'Os significados são garantidamente corretos?',
        a: 'Não, e nenhuma fonte sobre significado de nomes pode honestamente afirmar isso. As etimologias são disputadas, os nomes atravessam línguas e recolhem novas interpretações, e muitas vezes não há resposta encerrada. Cada entrada dá a leitura melhor atestada, e se o significado importa de forma especial para você vale conferir numa fonte de sua confiança antes de decidir.',
      },
      {
        q: 'Por que faltam alguns nomes de pet comuns?',
        a: 'Normalmente porque nenhum significado pôde ser documentado para eles. Um nome só é acrescentado com significado com fonte anexado, então um nome popular sem nada confiável por trás fica de fora em vez de aparecer com um palpite plausível. Se você conhece um nome que deveria estar aqui e pode apontar uma fonte, vale enviar.',
      },
      {
        q: 'O significado do nome afeta o meu pet?',
        a: 'Não. Um animal aprende o nome como um padrão sonoro e não tem acesso ao sentido da palavra. Os significados importam para a pessoa que escolhe, que vai dizer essa palavra várias vezes por dia por uma década ou mais, e por isso aparecem em cada cartão em vez de ficarem escondidos atrás de um sanfona ou de uma conta.',
      },
      {
        q: 'Como aviso sobre um significado incorreto?',
        a: 'Envie o nome e, se tiver, uma fonte que considere confiável, e a entrada será verificada. As correções são aplicadas ao único arquivo de dados que cada página lê, então um ajuste aceito aparece em todos os geradores e em todos os idiomas de uma vez. Sugestões de nomes para acrescentar são bem-vindas nas mesmas condições.',
      },
    ],
    related: {
      heading: 'Para onde ir agora',
      html: '<p>Toda sugestão dos geradores de <a href="{{url:dog}}">cachorro</a>, <a href="{{url:cat}}">gato</a> e <a href="{{url:pet}}">pets em geral</a> mostra o significado no cartão. A <a href="{{url:about}}">página sobre</a> conta como o resto da ferramenta é construído, e a <a href="{{url:contact}}">página de contato</a> é para onde vão correções e sugestões.</p>',
    },
  },

  about: {
    title: 'Sobre o Perfect Pet Name Generator',
    description:
      'O que este gerador faz de diferente: significados documentados, pronúncia em voz alta, filtro de conflitos com comandos e modo dupla.',
    breadcrumb: 'Sobre',
    h1: 'Sobre este gerador',
    answerBox:
      'O Perfect Pet Name Generator é uma ferramenta gratuita que sugere nomes de cachorro e gato filtrados por estilo, sexo, letra inicial e tamanho. Toda sugestão mostra o significado documentado, é lida em voz alta quando você pede e é verificada contra os nomes da sua casa e os comandos de adestramento mais comuns — este último ponto quase nenhum outro gerador faz.',
    html: '<h2>Por que isto existe</h2><p>A maioria dos geradores de nomes para pets devolve uma lista de palavras. Essa é a parte fácil do problema. As partes difíceis só aparecem depois: descobrir que o nome significa algo infeliz, perceber que você não consegue pronunciá-lo com segurança, ou passar três meses de treino de retorno brigando com um nome que soa como “no”.</p><p>Esta ferramenta foi construída em torno dessas três falhas, com {{total}} nomes de cachorro e gato como lista base. É deliberadamente uma ferramenta de um passo — definir filtros, gerar — em vez de um questionário de várias perguntas, porque um filtro de estilo já captura o que um quiz pergunta e faz isso numa tela só.</p><h2>O que ela faz de diferente</h2><h3>Significados sempre visíveis</h3><p>Todo nome mostra origem e significado no próprio cartão. Não atrás de um botão, não atrás de uma conta, e nunca atrás de um formulário de e-mail. Os significados vêm de fontes linguísticas e culturais estabelecidas — etimologias registradas, mitologia, origens de palavras documentadas — e quando um significado não é documentado, nenhum é inventado para preencher o espaço.</p><h3>Pronúncia que dá para ouvir</h3><p>Cada nome tem um botão Pronunciar que usa o motor de voz já embutido no seu navegador. Nenhum arquivo de áudio é baixado, nenhum serviço externo de conversão de texto em fala é chamado e nada da sua sessão é transmitido. Importa principalmente em nomes de origem mitológica e não portuguesa, onde a grafia é um guia ruim para o som.</p><h3>Um filtro de conflitos para casas de verdade</h3><p>Esta é a peça que faltava em todas as ferramentas comparáveis que conseguimos encontrar. Digite os nomes de familiares e dos pets atuais e cada sugestão é comparada com eles foneticamente — usando Soundex e distância de edição em vez de coincidência exata de letras — além da verificação automática contra os comandos de adestramento mais comuns. As coincidências claras são removidas; as duvidosas aparecem com uma marca explicando o conflito, de modo que o julgamento continua sendo seu.</p><p>O raciocínio é simples: um cachorro ou um gato aprende o próprio nome como um padrão sonoro distinto. Um nome que rima com um comando ou com outro nome da casa dá ao animal um sinal ambíguo toda vez que é usado, e a ambiguidade é o que atrasa o adestramento.</p><h3>Modo dupla e ninhada</h3><p>Dar nome a dois pets juntos é um problema diferente de dar nome duas vezes. O modo dupla devolve conjuntos de dois ou três nomes que compartilham estilo e ficam próximos no tamanho — para se lerem como um conjunto — enquanto começam com sons diferentes e passam pela mesma verificação fonética entre si. Cobre tanto duplas adotadas juntas quanto irmãos de ninhada que precisam de um tema comum.</p><h2>Como a ferramenta é construída</h2><p>É um site estático. Não há backend, banco de dados, login nem processamento no servidor de nada do que você digita. A lista de nomes é um arquivo estático, e toda a filtragem, o embaralhamento, a comparação fonética e a fala acontecem no seu navegador. As levas são sorteadas com um embaralhamento de Fisher-Yates, então todo nome compatível com seus filtros tem a mesma chance de aparecer em vez de surgirem sempre os mesmos poucos.</p><h2>O que ela deliberadamente não faz</h2><ul><li>Sem quiz de personalidade — o filtro de estilo faz o mesmo trabalho em um passo.</li><li>Sem conta, cadastro ou captura de e-mail para nenhum recurso, inclusive o filtro de conflitos.</li><li>Sem envio de foto nem palpite de raça a partir de imagem.</li><li>Sem significados inventados. Se um significado não é documentado, o nome não entra na lista.</li></ul><h2>Fale com a gente</h2><p>Correções de significado, sugestões de nomes para incluir ou qualquer outra coisa: a <a href="{{url:contact}}">página de contato</a> tem os detalhes. Comece a escolher pelos geradores de <a href="{{url:dog}}">cachorro</a>, <a href="{{url:cat}}">gato</a> ou <a href="{{url:pet}}">pets em geral</a>.</p>',
  },

  contact: {
    title: 'Contato | Perfect Pet Name Generator',
    description:
      'Fale com a gente sobre uma correção de significado, um nome que você gostaria de incluir ou uma dúvida sobre o gerador. Um e-mail, sem formulário.',
    breadcrumb: 'Contato',
    h1: 'Contato',
    answerBoxHtml:
      'Escreva para <a href="mailto:{{email}}" style="color: var(--c-accent-on-soft);">{{email}}</a> sobre qualquer coisa relacionada a este site. Não há formulário de contato, porque este é um site estático sem servidor para recebê-lo — o que também significa que nada do que você envia passa por um serviço de formulários de terceiros.',
    html: '<h2>Sobre o que escrever</h2><ul><li><strong>Um significado parece errado.</strong> Envie o nome e, se tiver, uma fonte. Os significados daqui vêm de referências linguísticas e culturais documentadas, e correções são muito bem-vindas.</li><li><strong>Falta um nome.</strong> Nomes só entram com significado documentado, então uma fonte ajuda.</li><li><strong>Algo quebrou.</strong> O navegador e o aparelho que você estava usando são a informação mais útil — a pronúncia, em particular, depende do motor de voz que vem no seu aparelho.</li><li><strong>Dúvidas de privacidade.</strong> A <a href="{{url:privacy}}">política de privacidade</a> cobre o que é e o que não é coletado; o que ela não responder, pergunte.</li></ul><h2>Tempo de resposta</h2><p>Este é um site pequeno e independente, então as respostas não são imediatas. Conte com alguns dias.</p><h2>Com o que este site não pode ajudar</h2><p>As sugestões daqui são ideias de nomes, não orientação profissional. Para problemas de adestramento, questões de comportamento ou qualquer coisa ligada à saúde do seu animal, procure um adestrador, um especialista em comportamento ou um veterinário qualificado. Os <a href="{{url:terms}}">termos e condições</a> definem os limites do que a ferramenta oferece.</p>',
  },

  privacy: {
    title: 'Política de Privacidade | Nomes para Pets',
    description:
      'Como este gerador estático lida com dados: sem contas, nada do que você digita é armazenado e toda a filtragem acontece dentro do seu navegador.',
    breadcrumb: 'Política de privacidade',
    h1: 'Política de privacidade',
    updatedLabel: 'Última atualização: {{updated}}',
    answerBox:
      'Este site não tem contas de usuário e não guarda nada do que você digita. Perfect Pet Name Generator é um site estático: o gerador de nomes, o filtro de conflitos e a função de pronúncia funcionam inteiramente dentro do seu próprio navegador, e nada do que você digita é transmitido ou armazenado. Cookies de análise e de publicidade, por outro lado, são usados e estão descritos em detalhe abaixo; onde o consentimento é exigido, eles permanecem desligados até você aceitar.',
    html: '<h2>1. Quem esta política cobre</h2><p>Esta política se aplica a perfectpetnamegenerator.com e a todas as suas páginas. Ela descreve o que acontece com as informações quando você usa o site.</p><h2>2. O que não coletamos</h2><p>Não existem contas, logins, cadastros ou inscrições por e-mail em nenhum lugar deste site, e nenhum recurso está condicionado a fornecer um endereço de e-mail. Não pedimos, não recebemos e não armazenamos seu nome, endereço, telefone, dados de pagamento ou qualquer outro identificador pessoal.</p><h3>O campo “evitar nomes parecidos com”</h3><p>Tudo o que você digita no campo “evitar nomes parecidos com” — incluindo nomes de familiares e de pets atuais — é processado inteiramente no seu próprio aparelho. Esse texto é comparado com a lista de nomes pelo JavaScript que roda no seu navegador. Nunca é enviado a um servidor, nunca é gravado em armazenamento, nunca é registrado em log, e desaparece no instante em que você fecha ou recarrega a página. O mesmo vale para todos os outros filtros que você definir.</p><h2>3. Informações coletadas automaticamente</h2><h3>Hospedagem</h3><p>O site é hospedado no Cloudflare Pages. Como qualquer serviço de hospedagem, a Cloudflare processa dados técnicos padrão da requisição, como endereço IP, agente de usuário e URL solicitada, para entregar a página e proteger o serviço contra abusos. Isso é feito pela Cloudflare sob os próprios termos de privacidade dela, e não temos acesso a um registro identificável de visitantes individuais.</p><h3>Análise de uso</h3><p>Este site usa o Google Analytics para entender o uso agregado — quantas pessoas visitam, em que páginas chegam e aproximadamente em que parte do mundo estão. Para isso, o Google Analytics define cookies e processa uma forma anonimizada do seu endereço IP. Os dados que vemos são agregados e estatísticos; não identificam você pessoalmente e não são combinados com nada do que você digita no gerador (que, como dito acima, nunca sai do seu navegador).</p><p>Você pode recusar o Google Analytics por completo usando o <a href="https://tools.google.com/dlpage/gaoptout" rel="nofollow noopener" target="_blank">complemento de desativação do Google</a>, ou pelos controles de cookies do seu navegador ou qualquer bloqueador de conteúdo comum. O gerador funciona exatamente igual nos dois casos.</p><h3>Publicidade</h3><p>Este site se sustenta com publicidade veiculada pelo Google AdSense. O Google é um fornecedor terceiro que usa cookies para exibir anúncios aqui, e esse uso de cookies publicitários permite que o Google e seus parceiros exibam anúncios com base nas suas visitas a este site e a outros sites da internet. O uso de cookies publicitários pelo Google é regido pelas <a href="https://policies.google.com/technologies/ads" rel="nofollow noopener" target="_blank">políticas de publicidade do Google</a>, e a forma como o Google usa dados de sites que utilizam seus serviços está descrita em <a href="https://policies.google.com/technologies/partner-sites" rel="nofollow noopener" target="_blank">policies.google.com</a>.</p><p>Você pode desativar a publicidade personalizada a qualquer momento nas <a href="https://www.google.com/settings/ads" rel="nofollow noopener" target="_blank">configurações de anúncios do Google</a>, e recusar o uso de cookies para publicidade personalizada por fornecedores terceiros em <a href="https://www.aboutads.info/choices/" rel="nofollow noopener" target="_blank">aboutads.info</a>. Não recebemos nenhuma informação que identifique você por meio da publicidade e não temos como ver a quem um anúncio específico foi exibido.</p><h3>Suas escolhas de cookies</h3><p>Onde o consentimento é legalmente exigido — o EEE, o Reino Unido e a Suíça — os cookies de análise e publicidade ficam desligados até você aceitá-los, e um aviso pergunta na sua primeira visita. Recusar leva um clique e é oferecido com o mesmo destaque que aceitar. Sua escolha é guardada no seu próprio navegador e pode ser alterada a qualquer momento pelo link «Configurações de cookies» no rodapé. Nada do site é retirado de você por recusar.</p><h2>4. Armazenamento do navegador</h2><p>Dois itens são guardados no armazenamento local do seu navegador: sua preferência de tema claro ou escuro, para o site não piscar nas cores erradas na próxima visita, e sua escolha sobre cookies, para o aviso não perguntar de novo em cada página. Ambos são valores únicos, ambos ficam no seu dispositivo e nenhum é transmitido. Limpar os dados do navegador remove os dois. O seletor de idioma não guarda nada: cada idioma é um link comum para a própria página. A lista de nomes já mostrados fica só na memória e desaparece assim que você fecha a aba.</p><h2>5. Serviços de terceiros</h2><p>O site carrega fontes, estilos, dados de nomes e scripts do próprio domínio em vez de CDNs de terceiros. A função de pronúncia usa o motor de voz já embutido no seu sistema operacional ou navegador; nenhum áudio é baixado e nenhum serviço de texto para fala é contatado. Fora a Cloudflare como hospedagem e o Google como fornecedor da análise e da publicidade descritas acima, nenhum terceiro recebe dados do seu uso deste site.</p><h2>6. Links para outros sites</h2><p>As páginas daqui podem levar a sites externos. Esses sites têm as próprias práticas de privacidade, e esta política não os cobre.</p><h2>7. Crianças</h2><p>Este site é uma ferramenta de nomes para público geral e não se dirige a crianças menores de 13 anos. Não coletamos conscientemente informações pessoais de ninguém, crianças incluídas — não existe no site nenhum mecanismo pelo qual informações pessoais possam ser enviadas.</p><h2>8. Seus direitos</h2><p>Leis de privacidade como a LGPD, o GDPR e a CCPA dão a você direitos de acesso, correção e exclusão dos dados pessoais mantidos a seu respeito. Como este site não guarda dados pessoais seus, não há nada a recuperar ou apagar do nosso lado. Para os dados analíticos processados pelo Google, use os controles do próprio Google indicados acima. Dúvidas são bem-vindas no endereço abaixo.</p><h2>9. Mudanças nesta política</h2><p>Esta política será atualizada se as práticas de dados do site mudarem — um novo fornecedor de análise ou de publicidade é o motivo mais provável. A data de «última atualização» no topo sempre reflete a versão vigente.</p><h2>10. Contato</h2><p>Dúvidas de privacidade podem ir para <a href="mailto:{{email}}">{{email}}</a>, ou pela <a href="{{url:contact}}">página de contato</a>.</p>',
  },

  terms: {
    title: 'Termos e Condições | Nomes para Pets',
    description:
      'Termos de uso do gerador: uma ferramenta gratuita cujos nomes e significados são fornecidos como estão, para inspiração, sem garantia de exclusividade.',
    breadcrumb: 'Termos e condições',
    h1: 'Termos e condições',
    updatedLabel: 'Última atualização: {{updated}}',
    answerBox:
      'Esta ferramenta é gratuita e o resultado é fornecido como está, para inspiração. As sugestões de nomes e os significados que as acompanham são oferecidos de boa-fé a partir de fontes documentadas, mas nenhum significado é garantido como a interpretação definitiva ou única de um nome. Usar o site significa aceitar estes termos.',
    html: '<h2>1. O serviço</h2><p>Perfect Pet Name Generator oferece sugestões de nomes para pets, significados, reprodução da pronúncia e verificação fonética de conflitos. É gratuito, não exige conta e não tem assinatura, pagamento ou cadastro; o site é financiado por publicidade.</p><h2>2. As sugestões são inspiração, não orientação</h2><p>Todo nome devolvido é uma sugestão. Nada aqui é orientação profissional de adestramento, comportamento ou veterinária. As recomendações de nomes deste site refletem princípios de adestramento amplamente aceitos, mas o seu animal é um indivíduo, e um adestrador, um especialista em comportamento ou um veterinário qualificado é a fonte certa para decisões sobre cuidado e treino.</p><h2>3. Significados dos nomes</h2><p>Significados e origens vêm de fontes linguísticas e culturais estabelecidas e são apresentados de boa-fé. Nomes com frequência carregam significados diferentes entre idiomas, regiões e tradições, e etimologias às vezes são disputadas entre fontes. Nenhum significado aqui é apresentado como a interpretação definitiva, completa ou exclusiva de um nome. Se você escolhe um nome em que o significado pesa muito, confirme em uma fonte de sua confiança antes de decidir.</p><h2>4. O filtro de conflitos</h2><p>O filtro de conflitos compara nomes foneticamente com comandos de adestramento comuns e com quaisquer palavras que você digitar. É uma heurística útil, não uma garantia. Ele não tem como conhecer todas as palavras usadas na sua casa, todos os sotaques com que o nome será falado, nem como um animal específico vai responder. Trate um resultado limpo como bom sinal, não como promessa.</p><h2>5. Disponibilidade</h2><p>O site é fornecido “conforme disponível”. Pode ser alterado, interrompido ou descontinuado a qualquer momento sem aviso. Recursos que dependem do seu navegador — a reprodução da pronúncia em especial — dependem de capacidades que não controlamos e podem não funcionar em todos os aparelhos.</p><h2>6. Uso aceitável</h2><p>Você pode usar o gerador livremente para fins pessoais e comerciais, inclusive para nomear animais em abrigos, resgates ou criação. Você não pode raspar, baixar em massa ou redistribuir a base de nomes e significados como conjunto de dados ou produto concorrente, tentar interromper o site, nem apresentá-lo como seu.</p><h2>7. Propriedade intelectual</h2><p>Nomes individuais não pertencem a ninguém e você é livre para usar qualquer nome que encontrar aqui. O design do site, o conteúdo escrito e a base compilada de nomes e significados como coleção continuam sendo propriedade do Perfect Pet Name Generator.</p><h2>8. Ausência de garantia e limitação de responsabilidade</h2><p>O site e seu conteúdo são fornecidos sem garantias de qualquer espécie, expressas ou implícitas, incluindo exatidão, adequação a uma finalidade específica e disponibilidade ininterrupta. Na máxima extensão permitida por lei, os operadores deste site não se responsabilizam por perdas ou danos decorrentes do seu uso ou de qualquer decisão de nome tomada com ele.</p><h2>9. Links externos</h2><p>Links para sites de terceiros são fornecidos por conveniência. Não somos responsáveis pelo conteúdo, pela exatidão ou pelas práticas deles.</p><h2>10. Alterações nestes termos</h2><p>Estes termos podem ser atualizados conforme o site muda. A data de “última atualização” acima reflete a versão vigente, e continuar usando o site após uma alteração significa que você a aceita.</p><h2>11. Contato</h2><p>Dúvidas sobre estes termos: <a href="mailto:{{email}}">{{email}}</a>, ou use a <a href="{{url:contact}}">página de contato</a>. Veja também a <a href="{{url:privacy}}">política de privacidade</a>.</p>',
  },

  /** Translated in the sitemap-visible pages only; 404/500 stay English. */
  schema: {
    appDescription:
      'Gerador gratuito de nomes para cachorros e gatos com significados documentados, pronúncia no navegador, filtro de conflitos com comandos de adestramento e modo dupla para nomear dois pets juntos.',
    features: [
      'Gerador de nomes para cachorros e gatos',
      'Significado e origem documentados para cada nome',
      'Pronúncia pelo motor de voz do navegador',
      'Filtro de conflitos com comandos de adestramento e nomes da casa',
      'Modo de nomes para duplas e ninhadas',
      'Filtros por sexo, estilo, letra inicial e tamanho máximo',
    ],
  },
};

export default pt;
