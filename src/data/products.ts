export interface Product {
  id: number;
  name: string;
  brand: "HASKELL" | "LOLA" | "EUDORA" | "BOTICARIO" | "GOLDSPELL" | "NATURA";
  collection?: string;
  size?: string;
  price: number;
  category: string;
  image: string;
  featured?: boolean;
  description: string;
  usage?: string;
  imageClassName?: string;
  groups?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Shampoo Cavalo Forte",
    brand: "HASKELL",
    collection: "Cavalo Forte",
    size: "300ml",
    price: 27.9,
    category: "Shampoo",
    image: "/cavalo-forte-shampoo.png",
    groups: [
      "CRESCIMENTO/FORTALECIMENTO",
      "CACHOS PERFEITOS"
    ],
    description: "Fortalece e restaura profundamente os fios, auxiliando no crescimento saudável. Com Biotina, Pantenol e Queratina, aumenta a elasticidade e o brilho."
  },
  {
    id: 3,
    name: "Condicionador Cavalo Forte",
    brand: "HASKELL",
    collection: "Cavalo Forte",
    size: "300ml",
    price: 21.95,
    category: "Condicionador",
    image: "/cavalo-forte-condicionador.png",
    groups: [
      "CRESCIMENTO/FORTALECIMENTO",
      "CACHOS PERFEITOS"
    ],
    description: "cabelos cacheados\r\nProporciona alta emoliência aos cabelos cacheados e deixa os fios mais definidos e brilhantes.\r\n    • Desenvolvida para nutrir e fortalecer os fios, valorizando a beleza dos cachos;\r\n    • A linha é livre de sulfatos, petrolatos e parabenos;\r\n    • Sua fórmula conta com óleo de coco e colágeno, que promovem hidratação e definição aso cabelos cacheados.\r\nDireção olfativa: floral, fruity, gourmand,oriental",
    usage: "após lavar os cabelos, aplique o condicionador uniformemente, do comprimento às pontas. Massageie suavemente e deixe agir por 1 minuto. Enxágue bem. O uso do condicionador também é indicado após máscaras de tratamento, para promover maior selamento das cutículas. Potencialize os resultados utilizando toda a linha Cachos Sim!."
  },
  {
    id: 4,
    name: "Máscara Cavalo Forte",
    brand: "HASKELL",
    collection: "Cavalo Forte",
    size: "300g",
    price: 21.95,
    category: "Máscara",
    image: "/cavalo-forte-mascara-300g.png",
    groups: [
      "CRESCIMENTO/FORTALECIMENTO",
      "CACHOS PERFEITOS"
    ],
    description: "Máscara fortalecedora para cabelos fracos",
    usage: "Aplicar na fibra capilar, deixar agir 10-15 minutos e enxaguar bem"
  },
  {
    id: 6,
    name: "Leave-in Cavalo Forte",
    brand: "HASKELL",
    collection: "Cavalo Forte",
    size: "150g",
    price: 21.95,
    category: "Leave-in",
    image: "/cavalo-forte-leave-in.png",
    groups: [
      "CRESCIMENTO/FORTALECIMENTO",
      "CACHOS PERFEITOS",
      "FINALIZADORES"
    ],
    description: "Seus cabelos são lisos ou alisados e precisam de ajuda na hora de controlar o frizz? O \r\n\r\n\r\nLeave-In Capilar Selante Finalizador Siàge Liso Intenso ajuda a desembaraçar os fios enquanto bloqueia o efeito arrepiado, deixando seus cabelos 2x mais lisos. \r\n\r\n\r\nComo o Leave-In Capilar Selante Finalizador Siàge Liso Intenso age?\r\n\r\n\r\nPossui ação selante para que seus cabelos ganhem um efeito de liso prolongado. A Creatina e o complexo Liss Effect reduzem a porosidade do fio, suavizam ondas indesejadas e controlam o frizz. Seus fios ganham aparência de liso natural. \r\n\r\n\r\nQuais são os benefícios?\r\n\r\n\r\n-Hidratação: sua ação seladora trata os fios sem deixá-los com aspecto pesado. Seus cabelos ficam macios e cheios de brilho, com efeito de liso natural da raiz às pontas.\r\n\r\n\r\n-Elimina pontas duplas: o produto recupera o dano e reduz em até 88% o surgimento das pontas danificadas e quebradiças\r\n\r\n\r\n-Fortalecimento dos fios: o leave-in reduz a porosidade e o frizz, devolvendo a saúde e a força dos fios.\r\n\r\nO que diz o especialista:\r\n\r\n\"Se o seu cabelo é liso ou alisado e está ressecado, sem brilho e com frizz, ele precisa de HIDRATAÇÃO. Use este leave-in selante para manter a umidade dentro dos fios , com uma ação que bloqueia o efeito arrepiado e reduz a porosidade.” Especialista em cabelo de Eudora",
    usage: "Conselho de Aplicação"
  },
  {
    id: 7,
    name: "Complexo Fortalecedor Cavalo Forte",
    brand: "HASKELL",
    collection: "Cavalo Forte",
    size: "35ml",
    price: 12.95,
    category: "Tratamento",
    image: "/cavalo-forte-complexo-fortalecedor.png",
    groups: [
      "OLEOS"
    ],
    description: "Óleo selador de pontas para proteção dos fios",
    usage: "Aplicar nas pontas dos cabelos"
  },
  {
    id: 9,
    name: "Shampoo Bendito Loiro",
    brand: "HASKELL",
    collection: "Bendito Loiro",
    size: "300ml",
    price: 21.95,
    category: "Shampoo",
    image: "/bendito-loiro-shampoo.png",
    groups: [
      "LOIROS ILUMINADOS"
    ],
    description: "Prepara o cabelo para o tratamento intensivo. Possui pH equilibrado e evita a alta rigidez característica de shampoo.\r\n    • Ideal para recuperar os cabelos descoloridos;\r\n    • A linha possui ação antiemborrachamento e antiporosidade, protegendo os fios de danos futuros;\r\n    • Sua formulação conta com complexo de proteínas e vinagre balsâmico que, juntos, promovem a regeneração capilar de maneira intensiva, repondo a massa proteica nos fios.\r\nDireção olfativa: floral frutal",
    usage: "nos cabelos molhados, aplique o shampoo, massageando o couro cabeludo em suaves movimentos circulares. Enxágue bem. Se necessário, repita a aplicação. Potencialize os resultados utilizando toda a linha Bendito Loiro."
  },
  {
    id: 11,
    name: "Máscara Bendito Loiro",
    brand: "HASKELL",
    collection: "Bendito Loiro",
    size: "300g",
    price: 27.9,
    category: "Máscara",
    image: "/bendito-loiro-mascara.png",
    groups: [
      "LOIROS ILUMINADOS"
    ],
    description: "Máscara fortalecedora para cabelos fracos",
    usage: "Aplicar na fibra capilar, deixar agir 10-15 minutos e enxaguar bem"
  },
  {
    id: 12,
    name: "Fluido Bendito Loiro",
    brand: "HASKELL",
    collection: "Bendito Loiro",
    size: "120ml",
    price: 21.95,
    category: "Tratamento",
    image: "/bendito-loiro-fluido.png",
    groups: [
      "LOIROS ILUMINADOS",
      "FINALIZADORES"
    ],
    description: "Óleo selador de pontas para proteção dos fios",
    usage: "Aplicar nas pontas dos cabelos"
  },
  {
    id: 13,
    name: "Proteína Bendito Loiro",
    brand: "HASKELL",
    collection: "Bendito Loiro",
    size: "150g",
    price: 21.95,
    category: "Tratamento",
    image: "/bendito-loiro-proteina.png",
    groups: [
      "LOIROS ILUMINADOS"
    ],
    description: "Óleo selador de pontas para proteção dos fios",
    usage: "Aplicar nas pontas dos cabelos"
  },
  {
    id: 14,
    name: "Shampoo Cachos Sim",
    brand: "HASKELL",
    collection: "Cachos Sim",
    size: "300ml",
    price: 21.95,
    category: "Shampoo",
    image: "/cachos-sim-shampoo-300ml.png",
    groups: [
      "NUTRIÇÃO",
      "CACHOS PERFEITOS"
    ],
    description: "Prepara o cabelo para o tratamento intensivo. Possui pH equilibrado e evita a alta rigidez característica de shampoo.\r\n    • Ideal para recuperar os cabelos descoloridos;\r\n    • A linha possui ação antiemborrachamento e antiporosidade, protegendo os fios de danos futuros;\r\n    • Sua formulação conta com complexo de proteínas e vinagre balsâmico que, juntos, promovem a regeneração capilar de maneira intensiva, repondo a massa proteica nos fios.\r\nDireção olfativa: floral frutal",
    usage: "nos cabelos molhados, aplique o shampoo, massageando o couro cabeludo em suaves movimentos circulares. Enxágue bem. Se necessário, repita a aplicação. Potencialize os resultados utilizando toda a linha Bendito Loiro."
  },
  {
    id: 16,
    name: "Condicionador Cachos Sim",
    brand: "HASKELL",
    collection: "Cachos Sim",
    size: "300ml",
    price: 21.95,
    category: "Condicionador",
    image: "/cachos-sim-condicionador-300ml.png",
    groups: [
      "NUTRIÇÃO",
      "CACHOS PERFEITOS"
    ],
    description: "cabelos cacheados\r\nProporciona alta emoliência aos cabelos cacheados e deixa os fios mais definidos e brilhantes.\r\n    • Desenvolvida para nutrir e fortalecer os fios, valorizando a beleza dos cachos;\r\n    • A linha é livre de sulfatos, petrolatos e parabenos;\r\n    • Sua fórmula conta com óleo de coco e colágeno, que promovem hidratação e definição aso cabelos cacheados.\r\nDireção olfativa: floral, fruity, gourmand,oriental",
    usage: "após lavar os cabelos, aplique o condicionador uniformemente, do comprimento às pontas. Massageie suavemente e deixe agir por 1 minuto. Enxágue bem. O uso do condicionador também é indicado após máscaras de tratamento, para promover maior selamento das cutículas. Potencialize os resultados utilizando toda a linha Cachos Sim!."
  },
  {
    id: 18,
    name: "Máscara Cachos Sim",
    brand: "HASKELL",
    collection: "Cachos Sim",
    size: "300g",
    price: 21.95,
    category: "Máscara",
    image: "/cachos-sim-mascara-300g.png",
    groups: [
      "NUTRIÇÃO",
      "CACHOS PERFEITOS"
    ],
    description: "Máscara para definição e hidratação de cachos",
    usage: "Aplicar na fibra capilar, deixar agir 10-15 minutos e enxaguar bem"
  },
  {
    id: 19,
    name: "Leave-in Memorizer Cachos Sim",
    brand: "HASKELL",
    collection: "Cachos Sim",
    size: "300ml",
    price: 21.95,
    category: "Leave-in",
    image: "/cachos-sim-leave-in-300ml.png",
    groups: [
      "CACHOS PERFEITOS",
      "FINALIZADORES"
    ],
    description: "Seus cabelos são lisos ou alisados e precisam de ajuda na hora de controlar o frizz? O \r\n\r\n\r\nLeave-In Capilar Selante Finalizador Siàge Liso Intenso ajuda a desembaraçar os fios enquanto bloqueia o efeito arrepiado, deixando seus cabelos 2x mais lisos. \r\n\r\n\r\nComo o Leave-In Capilar Selante Finalizador Siàge Liso Intenso age?\r\n\r\n\r\nPossui ação selante para que seus cabelos ganhem um efeito de liso prolongado. A Creatina e o complexo Liss Effect reduzem a porosidade do fio, suavizam ondas indesejadas e controlam o frizz. Seus fios ganham aparência de liso natural. \r\n\r\n\r\nQuais são os benefícios?\r\n\r\n\r\n-Hidratação: sua ação seladora trata os fios sem deixá-los com aspecto pesado. Seus cabelos ficam macios e cheios de brilho, com efeito de liso natural da raiz às pontas.\r\n\r\n\r\n-Elimina pontas duplas: o produto recupera o dano e reduz em até 88% o surgimento das pontas danificadas e quebradiças\r\n\r\n\r\n-Fortalecimento dos fios: o leave-in reduz a porosidade e o frizz, devolvendo a saúde e a força dos fios.\r\n\r\nO que diz o especialista:\r\n\r\n\"Se o seu cabelo é liso ou alisado e está ressecado, sem brilho e com frizz, ele precisa de HIDRATAÇÃO. Use este leave-in selante para manter a umidade dentro dos fios , com uma ação que bloqueia o efeito arrepiado e reduz a porosidade.” Especialista em cabelo de Eudora",
    usage: "Conselho de Aplicação"
  },
  {
    id: 20,
    name: "Gel Crème Cachos Sim",
    brand: "HASKELL",
    collection: "Cachos Sim",
    size: "240g",
    price: 21.95,
    category: "Styling",
    image: "/cachos-sim-gel-creme-240g.png",
    groups: [
      "CACHOS PERFEITOS",
      "FINALIZADORES"
    ],
    description: "Creme em gel para definição de cachos",
    usage: "Aplicar nos fios úmidos e modelar"
  },
  {
    id: 21,
    name: "Shampoo Murumuru",
    brand: "HASKELL",
    collection: "Murumuru",
    size: "300ml",
    price: 26.9,
    category: "Shampoo",
    image: "/murumuru-shampoo-300ml.png",
    groups: [
      "NUTRIÇÃO",
      "CACHOS PERFEITOS"
    ],
    description: "Prepara o cabelo para o tratamento intensivo. Possui pH equilibrado e evita a alta rigidez característica de shampoo.\r\n    • Ideal para recuperar os cabelos descoloridos;\r\n    • A linha possui ação antiemborrachamento e antiporosidade, protegendo os fios de danos futuros;\r\n    • Sua formulação conta com complexo de proteínas e vinagre balsâmico que, juntos, promovem a regeneração capilar de maneira intensiva, repondo a massa proteica nos fios.\r\nDireção olfativa: floral frutal",
    usage: "nos cabelos molhados, aplique o shampoo, massageando o couro cabeludo em suaves movimentos circulares. Enxágue bem. Se necessário, repita a aplicação. Potencialize os resultados utilizando toda a linha Bendito Loiro."
  },
  {
    id: 22,
    name: "Condicionador Murumuru",
    brand: "HASKELL",
    collection: "Murumuru",
    size: "300ml",
    price: 21.95,
    category: "Condicionador",
    image: "/murumuru-condicionador-300ml.png",
    groups: [
      "NUTRIÇÃO",
      "CACHOS PERFEITOS"
    ],
    description: "cabelos cacheados\r\nProporciona alta emoliência aos cabelos cacheados e deixa os fios mais definidos e brilhantes.\r\n    • Desenvolvida para nutrir e fortalecer os fios, valorizando a beleza dos cachos;\r\n    • A linha é livre de sulfatos, petrolatos e parabenos;\r\n    • Sua fórmula conta com óleo de coco e colágeno, que promovem hidratação e definição aso cabelos cacheados.\r\nDireção olfativa: floral, fruity, gourmand,oriental",
    usage: "após lavar os cabelos, aplique o condicionador uniformemente, do comprimento às pontas. Massageie suavemente e deixe agir por 1 minuto. Enxágue bem. O uso do condicionador também é indicado após máscaras de tratamento, para promover maior selamento das cutículas. Potencialize os resultados utilizando toda a linha Cachos Sim!."
  },
  {
    id: 23,
    name: "Máscara Murumuru",
    brand: "HASKELL",
    collection: "Murumuru",
    size: "300g",
    price: 21.95,
    category: "Máscara",
    image: "/murumuru-mascara-300g.png",
    groups: [
      "NUTRIÇÃO",
      "CACHOS PERFEITOS"
    ],
    description: "Manteiga nutritiva com murumuru para hidratação profunda",
    usage: "Aplicar na fibra capilar, deixar agir e enxaguar"
  },
  {
    id: 26,
    name: "Néctar Murumuru",
    brand: "HASKELL",
    collection: "Murumuru",
    size: "35ml",
    price: 21.95,
    category: "Tratamento",
    image: "/murumuru-nectar-35ml.png",
    groups: [
      "OLEOS"
    ],
    description: "Óleo nutritivo concentrado. Pode ser usado puro ou misturado à máscara para potencializar a nutrição."
  },
  {
    id: 28,
    name: "Condicionador Pós Progressiva",
    brand: "HASKELL",
    collection: "Pós Progressiva",
    size: "300ml",
    price: 21.95,
    category: "Condicionador",
    image: "/pos-progressiva-condicionador-300ml.png",
    groups: [
      "ALISAMENTO/CONTROLE DE FRIZZ"
    ],
    description: "cabelos cacheados\r\nProporciona alta emoliência aos cabelos cacheados e deixa os fios mais definidos e brilhantes.\r\n    • Desenvolvida para nutrir e fortalecer os fios, valorizando a beleza dos cachos;\r\n    • A linha é livre de sulfatos, petrolatos e parabenos;\r\n    • Sua fórmula conta com óleo de coco e colágeno, que promovem hidratação e definição aso cabelos cacheados.\r\nDireção olfativa: floral, fruity, gourmand,oriental",
    usage: "após lavar os cabelos, aplique o condicionador uniformemente, do comprimento às pontas. Massageie suavemente e deixe agir por 1 minuto. Enxágue bem. O uso do condicionador também é indicado após máscaras de tratamento, para promover maior selamento das cutículas. Potencialize os resultados utilizando toda a linha Cachos Sim!."
  },
  {
    id: 29,
    name: "Máscara Pós Progressiva",
    brand: "HASKELL",
    collection: "Pós Progressiva",
    size: "300g",
    price: 21.95,
    category: "Máscara",
    image: "/pos-progressiva-mascara-300g.png",
    groups: [
      "ALISAMENTO/CONTROLE DE FRIZZ"
    ],
    description: "Máscara para cabelos lisos pós-progressiva",
    usage: "Aplicar na fibra capilar, deixar agir 10-15 minutos e enxaguar bem"
  },
  {
    id: 30,
    name: "Fluido Pós Progressiva",
    brand: "HASKELL",
    collection: "Pós Progressiva",
    size: "120ml",
    price: 21.95,
    category: "Tratamento",
    image: "/pos-progressiva-fluido-120ml.png",
    groups: [
      "ALISAMENTO/CONTROLE DE FRIZZ",
      "FINALIZADORES"
    ],
    description: "Indicação: cabelos quimicamente alisados\r\nProlonga o efeito liso dos cabelos, diminui o frizz e aumenta a resistência do fio.\r\n    • Desenvolvida, especialmente, para os cabelos com alisamentos químicos;\r\n    • Essa linha prolonga o efeito da escova progressiva e mantém os cabelos com brilho e saudáveis da raiz às pontas;\r\n    • A Tâmara da Índia, associada ao Lisselini, age na restauração da fibra capilar, reforçando a sua estrutura interna, além de alinhar o fio e combater o frizz.\r\nDireção olfativa: floral frutal gourmand\r\nEspecificações:\r\npH 3.5\r\nsem parabenos| sem corantes\r\nproteção térmica | proteção solar\r\nsem enxágue",
    usage: "agite antes de usar. Nos cabelos limpos e úmidos, borrife o Fluido Alinhador em todo o comprimento dos fios e espalhe uniformemente pelos cabelos. Finalize como desejar. Sem enxágue. Potencialize os resultados utilizando toda a linha Pós Progressiva."
  },
  {
    id: 31,
    name: "Condicionador Ela é Carioca",
    brand: "LOLA",
    collection: "Ela é Carioca",
    size: "500g",
    price: 26.9,
    category: "Condicionador",
    image: "/ela-e-carioca-condicionador-500g.png",
    groups: [
      "NUTRIÇÃO",
      "HIDRATAÇÃO",
      "CACHOS PERFEITOS"
    ],
    description: "cabelos cacheados\r\nProporciona alta emoliência aos cabelos cacheados e deixa os fios mais definidos e brilhantes.\r\n    • Desenvolvida para nutrir e fortalecer os fios, valorizando a beleza dos cachos;\r\n    • A linha é livre de sulfatos, petrolatos e parabenos;\r\n    • Sua fórmula conta com óleo de coco e colágeno, que promovem hidratação e definição aso cabelos cacheados.\r\nDireção olfativa: floral, fruity, gourmand,oriental",
    usage: "após lavar os cabelos, aplique o condicionador uniformemente, do comprimento às pontas. Massageie suavemente e deixe agir por 1 minuto. Enxágue bem. O uso do condicionador também é indicado após máscaras de tratamento, para promover maior selamento das cutículas. Potencialize os resultados utilizando toda a linha Cachos Sim!."
  },
  {
    id: 32,
    name: "Condicionador Meu Cacho Minha Vida",
    brand: "LOLA",
    collection: "Meu Cacho Minha Vida",
    size: "500g",
    price: 21.95,
    category: "Condicionador",
    image: "/meu-cacho-minha-vida-condicionador-500g.png",
    groups: [],
    description: "cabelos cacheados\r\nProporciona alta emoliência aos cabelos cacheados e deixa os fios mais definidos e brilhantes.\r\n    • Desenvolvida para nutrir e fortalecer os fios, valorizando a beleza dos cachos;\r\n    • A linha é livre de sulfatos, petrolatos e parabenos;\r\n    • Sua fórmula conta com óleo de coco e colágeno, que promovem hidratação e definição aso cabelos cacheados.\r\nDireção olfativa: floral, fruity, gourmand,oriental",
    usage: "após lavar os cabelos, aplique o condicionador uniformemente, do comprimento às pontas. Massageie suavemente e deixe agir por 1 minuto. Enxágue bem. O uso do condicionador também é indicado após máscaras de tratamento, para promover maior selamento das cutículas. Potencialize os resultados utilizando toda a linha Cachos Sim!."
  },
  {
    id: 33,
    name: "Condicionador Morte Súbita",
    brand: "LOLA",
    collection: "Morte Súbita",
    size: "250ml",
    price: 15.95,
    category: "Condicionador",
    image: "/morte-subita-condicionador-250ml.png",
    groups: [
      "HIDRATAÇÃO"
    ],
    description: "cabelos cacheados\r\nProporciona alta emoliência aos cabelos cacheados e deixa os fios mais definidos e brilhantes.\r\n    • Desenvolvida para nutrir e fortalecer os fios, valorizando a beleza dos cachos;\r\n    • A linha é livre de sulfatos, petrolatos e parabenos;\r\n    • Sua fórmula conta com óleo de coco e colágeno, que promovem hidratação e definição aso cabelos cacheados.\r\nDireção olfativa: floral, fruity, gourmand,oriental",
    usage: "após lavar os cabelos, aplique o condicionador uniformemente, do comprimento às pontas. Massageie suavemente e deixe agir por 1 minuto. Enxágue bem. O uso do condicionador também é indicado após máscaras de tratamento, para promover maior selamento das cutículas. Potencialize os resultados utilizando toda a linha Cachos Sim!."
  },
  {
    id: 34,
    name: "Condicionador Papo Reto",
    brand: "LOLA",
    collection: "Papo Reto",
    size: "270ml",
    price: 18.95,
    category: "Condicionador",
    image: "/papo-reto-condicionador-270ml.png",
    groups: [
      "RECONSTRUÇÃO"
    ],
    description: "cabelos cacheados\r\nProporciona alta emoliência aos cabelos cacheados e deixa os fios mais definidos e brilhantes.\r\n    • Desenvolvida para nutrir e fortalecer os fios, valorizando a beleza dos cachos;\r\n    • A linha é livre de sulfatos, petrolatos e parabenos;\r\n    • Sua fórmula conta com óleo de coco e colágeno, que promovem hidratação e definição aso cabelos cacheados.\r\nDireção olfativa: floral, fruity, gourmand,oriental",
    usage: "após lavar os cabelos, aplique o condicionador uniformemente, do comprimento às pontas. Massageie suavemente e deixe agir por 1 minuto. Enxágue bem. O uso do condicionador também é indicado após máscaras de tratamento, para promover maior selamento das cutículas. Potencialize os resultados utilizando toda a linha Cachos Sim!."
  },
  {
    id: 35,
    name: "Condicionador Camomila",
    brand: "LOLA",
    collection: "Camomila",
    size: "250ml",
    price: 15.95,
    category: "Condicionador",
    image: "/camomila-condicionador-250ml.png",
    groups: [
      "LOIROS ILUMINADOS"
    ],
    description: "cabelos cacheados\r\nProporciona alta emoliência aos cabelos cacheados e deixa os fios mais definidos e brilhantes.\r\n    • Desenvolvida para nutrir e fortalecer os fios, valorizando a beleza dos cachos;\r\n    • A linha é livre de sulfatos, petrolatos e parabenos;\r\n    • Sua fórmula conta com óleo de coco e colágeno, que promovem hidratação e definição aso cabelos cacheados.\r\nDireção olfativa: floral, fruity, gourmand,oriental",
    usage: "após lavar os cabelos, aplique o condicionador uniformemente, do comprimento às pontas. Massageie suavemente e deixe agir por 1 minuto. Enxágue bem. O uso do condicionador também é indicado após máscaras de tratamento, para promover maior selamento das cutículas. Potencialize os resultados utilizando toda a linha Cachos Sim!."
  },
  {
    id: 38,
    name: "Creme Buriti Ativador de Cachos Plot Twist",
    brand: "LOLA",
    collection: "Plot Twist",
    size: "480g",
    price: 21.95,
    category: "Styling",
    image: "/plot-twist-creme-buriti-480g.png",
    groups: [
      "CACHOS PERFEITOS",
      "FINALIZADORES"
    ],
    description: "Gel nutritivo para definição de cachos",
    usage: "Aplicar nos fios úmidos e modelar"
  },
  {
    id: 39,
    name: "Creme de Pentear Ela é Carioca",
    brand: "LOLA",
    collection: "Ela é Carioca",
    size: "480g",
    price: 21.95,
    category: "Styling",
    image: "/ela-e-carioca-creme-pentear-480g.png",
    groups: [
      "FINALIZADORES"
    ],
    description: "Meu ativo patenteado para estimular o crescimentoé perfeito e vai ajudar seu cabelo a crescer mais forte e resistente. Além disso sou feito com Água de Rosas, Alecrim e Cera de Rosas, nutrientes poderosos que vão cuidar do interior do seu fio. Tudo que você precisa para esse momento. Fórmula vegana, dermatologicamente testada e que protege seus fios do calor do secador.",
    usage: "Divida o seu cabelo úmido (não molhado) em seis seções iguais, depois generosamente aplique o Creme Multi Texturas em cada seção. A quantidade certinha vai variar de acordo com a necessidade do seu fio. Finalize como de costume, preferencialmente modelando com as mãos de baixo para cima para estimular os cachos, deixando secar naturalmente ou usando o difusor."
  },
  {
    id: 40,
    name: "Creme de Pentear Milagre",
    brand: "LOLA",
    collection: "Milagre",
    size: "450g",
    price: 21.95,
    category: "Styling",
    image: "/milagre-creme-pentear-450g.png",
    groups: [
      "CACHOS PERFEITOS",
      "FINALIZADORES"
    ],
    description: "Meu ativo patenteado para estimular o crescimentoé perfeito e vai ajudar seu cabelo a crescer mais forte e resistente. Além disso sou feito com Água de Rosas, Alecrim e Cera de Rosas, nutrientes poderosos que vão cuidar do interior do seu fio. Tudo que você precisa para esse momento. Fórmula vegana, dermatologicamente testada e que protege seus fios do calor do secador.",
    usage: "Divida o seu cabelo úmido (não molhado) em seis seções iguais, depois generosamente aplique o Creme Multi Texturas em cada seção. A quantidade certinha vai variar de acordo com a necessidade do seu fio. Finalize como de costume, preferencialmente modelando com as mãos de baixo para cima para estimular os cachos, deixando secar naturalmente ou usando o difusor."
  },
  {
    id: 41,
    name: "Creme Modelador Guava Plot Twist",
    brand: "LOLA",
    collection: "Plot Twist",
    size: "480g",
    price: 21.95,
    category: "Styling",
    image: "/plot-twist-creme-guava-480g.png",
    groups: [
      "CACHOS PERFEITOS",
      "FINALIZADORES"
    ],
    description: "Creme modelador para definição de cachos",
    usage: "Aplicar nos fios úmidos e modelar"
  },
  {
    id: 43,
    name: "Creme Texturizador Transição",
    brand: "LOLA",
    collection: "Transição",
    size: "500ml",
    price: 21.95,
    category: "Styling",
    image: "/transicao-creme-texturizador-500ml.png",
    groups: [
      "TRANSIÇÃO CAPILAR",
      "FINALIZADORES"
    ],
    description: "Meu ativo patenteado para estimular o crescimentoé perfeito e vai ajudar seu cabelo a crescer mais forte e resistente. Além disso sou feito com Água de Rosas, Alecrim e Cera de Rosas, nutrientes poderosos que vão cuidar do interior do seu fio. Tudo que você precisa para esse momento. Fórmula vegana, dermatologicamente testada e que protege seus fios do calor do secador.",
    usage: "Divida o seu cabelo úmido (não molhado) em seis seções iguais, depois generosamente aplique o Creme Multi Texturas em cada seção. A quantidade certinha vai variar de acordo com a necessidade do seu fio. Finalize como de costume, preferencialmente modelando com as mãos de baixo para cima para estimular os cachos, deixando secar naturalmente ou usando o difusor."
  },
  {
    id: 45,
    name: "Gel Nut Plot Twist",
    brand: "LOLA",
    collection: "Plot Twist",
    size: "230g",
    price: 18.95,
    category: "Styling",
    image: "/plot-twist-nut-gel-230g.png",
    groups: [
      "CACHOS PERFEITOS",
      "FINALIZADORES"
    ],
    description: "Gel nutritivo para definição de cachos",
    usage: "Aplicar nos fios úmidos e modelar"
  },
  {
    id: 46,
    name: "Máscara Morte Súbita",
    brand: "LOLA",
    collection: "Morte Súbita",
    size: "450g",
    price: 18.95,
    category: "Máscara",
    image: "/morte-subita-mascara-450g.png",
    featured: true,
    groups: [
      "HIDRATAÇÃO"
    ],
    description: "Tratamento de reparação total e instantânea. Recupera cabelos danificados e quimicamente tratados em uma aplicação."
  },
  {
    id: 49,
    name: "Máscara Ela é Carioca",
    brand: "LOLA",
    collection: "Ela é Carioca",
    size: "450g",
    price: 21.95,
    category: "Máscara",
    image: "/ela-e-carioca-mascara-450g.png",
    groups: [
      "NUTRIÇÃO",
      "HIDRATAÇÃO",
      "CACHOS PERFEITOS"
    ],
    description: "Máscara de tratamento para cabelos crespos",
    usage: "Aplicar na fibra capilar, deixar agir 10-15 minutos e enxaguar bem"
  },
  {
    id: 50,
    name: "Máscara Camomila",
    brand: "LOLA",
    collection: "Camomila",
    size: "230g",
    price: 15.95,
    category: "Máscara",
    image: "/camomila-mascara-230g.png",
    groups: [
      "LOIROS ILUMINADOS"
    ],
    description: "Máscara com camomila para restauração",
    usage: "Aplicar na fibra capilar, deixar agir 10-15 minutos e enxaguar bem"
  },
  {
    id: 53,
    name: "Máscara Fluida Papo Reto",
    brand: "LOLA",
    collection: "Papo Reto",
    size: "270ml",
    price: 18.95,
    category: "Máscara",
    image: "/papo-reto-mascara-fluida-270ml.png",
    groups: [
      "RECONSTRUÇÃO"
    ],
    description: "Máscara de tratamento para cabelos lisos",
    usage: "Aplicar na fibra capilar, deixar agir 10-15 minutos e enxaguar bem"
  },
  {
    id: 54,
    name: "Máscara Hidrat. Meu Cacho Minha Vida",
    brand: "LOLA",
    collection: "Meu Cacho Minha Vida",
    size: "450g",
    price: 18.95,
    category: "Máscara",
    image: "/meu-cacho-minha-vida-mascara-450g.png",
    groups: [],
    description: "Máscara hidratante para cabelos cacheados",
    usage: "Aplicar na fibra capilar, deixar agir 10-15 minutos e enxaguar bem"
  },
  {
    id: 55,
    name: "Máscara Hidrat. Ban/Aloe Vera Be(m)dita Ghee",
    brand: "LOLA",
    collection: "Be(m)dita Ghee",
    size: "350g",
    price: 21.95,
    category: "Máscara",
    image: "/ghee-hidratacao-mascara-350g.png",
    groups: [
      "CRONOGRAMA CAPILAR",
      "HIDRATAÇÃO"
    ],
    description: "Máscara de tratamento para cabelos lisos",
    usage: "Aplicar na fibra capilar, deixar agir 10-15 minutos e enxaguar bem"
  },
  {
    id: 57,
    name: "Máscara Matizadora Loira de Farmácia",
    brand: "LOLA",
    collection: "Loira de Farmácia",
    size: "230g",
    price: 18.95,
    category: "Máscara",
    image: "/loira-de-farmacia-mascara-230g.png",
    groups: [
      "LOIROS ILUMINADOS"
    ],
    description: "Máscara matizadora para cabelos loiros",
    usage: "Aplicar na fibra capilar, deixar agir 10-15 minutos e enxaguar bem"
  },
  {
    id: 58,
    name: "Máscara Nutri. Abacaxi/Mant. Bacuri Be(m)dita Ghee",
    brand: "LOLA",
    collection: "Be(m)dita Ghee",
    size: "350g",
    price: 21.95,
    category: "Máscara",
    image: "/ghee-nutricao-mascara-350g.png",
    groups: [
      "CRONOGRAMA CAPILAR",
      "NUTRIÇÃO"
    ],
    description: "Máscara de tratamento para cabelos lisos",
    usage: "Aplicar na fibra capilar, deixar agir 10-15 minutos e enxaguar bem"
  },
  {
    id: 60,
    name: "Máscara Recons. Papaia/Queratina Be(m)dita Ghee",
    brand: "LOLA",
    collection: "Be(m)dita Ghee",
    size: "100g",
    price: 15.95,
    category: "Máscara",
    image: "/ghee-reconstrucao-mascara-100g.png",
    groups: [
      "CRONOGRAMA CAPILAR",
      "RECONSTRUÇÃO"
    ],
    description: "Máscara de tratamento para cabelos lisos",
    usage: "Aplicar na fibra capilar, deixar agir 10-15 minutos e enxaguar bem"
  },
  {
    id: 65,
    name: "Óleo Papo Reto",
    brand: "LOLA",
    collection: "Papo Reto",
    size: "50ml",
    price: 18.95,
    category: "Tratamento",
    image: "/papo-reto-oleo-50ml.png",
    groups: [
      "OLEOS"
    ],
    description: "Óleo para cabelos lisos com proteção térmica",
    usage: "Usar como pré-shampoo ou finalização"
  },
  {
    id: 69,
    name: "Óleo Hidr. Ban/Aloe Vera Be(m)dita Ghee",
    brand: "LOLA",
    collection: "Be(m)dita Ghee",
    size: "50ml",
    price: 18.95,
    category: "Tratamento",
    image: "/ghee-hidratacao-oleo-50ml.png",
    groups: [
      "OLEOS"
    ],
    description: "Óleo para cabelos lisos com proteção térmica",
    usage: "Usar como pré-shampoo ou finalização"
  },
  {
    id: 70,
    name: "Óleo Iluminador Camomila",
    brand: "LOLA",
    collection: "Camomila",
    size: "50ml",
    price: 18.95,
    category: "Tratamento",
    image: "/camomila-oleo-50ml.png",
    groups: [
      "OLEOS"
    ],
    description: "Óleo com camomila para hidratação",
    usage: "Usar como pré-shampoo ou finalização"
  },
  {
    id: 71,
    name: "Óleo Nutri. Abacaxi/Mant. Bacuri Be(m)dita Ghee",
    brand: "LOLA",
    collection: "Be(m)dita Ghee",
    size: "50ml",
    price: 18.95,
    category: "Tratamento",
    image: "/ghee-nutricao-oleo-50ml.png",
    groups: [
      "OLEOS"
    ],
    description: "Óleo para cabelos lisos com proteção térmica",
    usage: "Usar como pré-shampoo ou finalização"
  },
  {
    id: 72,
    name: "Óleo Reconst. Papaia/Queratina Be(m)dita Ghee",
    brand: "LOLA",
    collection: "Be(m)dita Ghee",
    size: "50ml",
    price: 18.95,
    category: "Tratamento",
    image: "/ghee-reconstrucao-oleo-50ml.png",
    groups: [
      "OLEOS"
    ],
    description: "Óleo para cabelos lisos com proteção térmica",
    usage: "Usar como pré-shampoo ou finalização"
  },
  {
    id: 73,
    name: "Proteína Ela é Carioca",
    brand: "LOLA",
    collection: "Ela é Carioca",
    size: "90g",
    price: 12.95,
    category: "Tratamento",
    image: "/ela-e-carioca-proteina-90ml.png",
    groups: [
      "NUTRIÇÃO",
      "HIDRATAÇÃO",
      "CACHOS PERFEITOS"
    ],
    description: "Proteína para fortalecimento de fios",
    usage: "Aplicar nos fios e deixar agir"
  },
  {
    id: 74,
    name: "Reativador de Cachos Guava Plot Twist",
    brand: "LOLA",
    collection: "Plot Twist",
    size: "280ml",
    price: 21.95,
    category: "Styling",
    image: "/plot-twist-reativador-guava-280ml.png",
    groups: [
      "CACHOS PERFEITOS",
      "FINALIZADORES"
    ],
    description: "Gel nutritivo para definição de cachos",
    usage: "Aplicar nos fios úmidos e modelar"
  },
  {
    id: 78,
    name: "Shampoo Ela é Carioca",
    brand: "LOLA",
    collection: "Ela é Carioca",
    size: "500g",
    price: 21.95,
    category: "Shampoo",
    image: "/ela-e-carioca-shampoo-500ml.png",
    groups: [
      "NUTRIÇÃO",
      "HIDRATAÇÃO",
      "CACHOS PERFEITOS"
    ],
    description: "O Shampoo Siàge Liso Intenso limpa os fios sem ressecar, entregando cabelos macios, brilhantes e com liso alinhado.\r\n\r\n\r\n﻿\r\n\r\n\r\nSua fórmula com proteína Creatina, aliada ao complexo Liss Effect, bloqueia os agentes causadores do frizz e de fios indisciplinados, deixando os cabelos hidratados, macios e com muito brilho. Além de proteger do calor do secador e chapinha por até 230º. \r\n\r\n\r\nIdeal para todos os tipos de lisos, o Shampoo Siàge Liso Intenso entrega cuidado intenso, brilho extremo e hidratação para seus fios diariamente.\r\n\r\n\r\nLiso Intenso em cabelos alisados:\r\n\r\n\r\n-Aparência de lisos naturais;\r\n\r\n\r\n-Liso prolongado sem química;\r\n\r\n\r\n-Reduz porosidade dos fios;\r\n\r\n\r\n-Pontas hidratadas sem aspecto alisado;\r\n\r\n\r\nLiso Intenso em cabelos lisos com ondas:\r\n\r\n\r\n-Suaviza ondulações indesejadas;\r\n\r\n\r\n-2x menos volume.\r\n\r\n\r\nLiso Intenso em cabelos lisos naturais:\r\n\r\n\r\n-Frizz controlado;\r\n\r\n\r\n-Hidrata sem pesar.",
    usage: "Conselho de Aplicação"
  },
  {
    id: 79,
    name: "Shampoo Papo Reto",
    brand: "LOLA",
    collection: "Papo Reto",
    size: "270ml",
    price: 18.95,
    category: "Shampoo",
    image: "/papo-reto-shampoo-270ml.png",
    groups: [
      "RECONSTRUÇÃO"
    ],
    description: "O Shampoo Siàge Liso Intenso limpa os fios sem ressecar, entregando cabelos macios, brilhantes e com liso alinhado.\r\n\r\n\r\n﻿\r\n\r\n\r\nSua fórmula com proteína Creatina, aliada ao complexo Liss Effect, bloqueia os agentes causadores do frizz e de fios indisciplinados, deixando os cabelos hidratados, macios e com muito brilho. Além de proteger do calor do secador e chapinha por até 230º. \r\n\r\n\r\nIdeal para todos os tipos de lisos, o Shampoo Siàge Liso Intenso entrega cuidado intenso, brilho extremo e hidratação para seus fios diariamente.\r\n\r\n\r\nLiso Intenso em cabelos alisados:\r\n\r\n\r\n-Aparência de lisos naturais;\r\n\r\n\r\n-Liso prolongado sem química;\r\n\r\n\r\n-Reduz porosidade dos fios;\r\n\r\n\r\n-Pontas hidratadas sem aspecto alisado;\r\n\r\n\r\nLiso Intenso em cabelos lisos com ondas:\r\n\r\n\r\n-Suaviza ondulações indesejadas;\r\n\r\n\r\n-2x menos volume.\r\n\r\n\r\nLiso Intenso em cabelos lisos naturais:\r\n\r\n\r\n-Frizz controlado;\r\n\r\n\r\n-Hidrata sem pesar.",
    usage: "Conselho de Aplicação"
  },
  {
    id: 80,
    name: "Shampoo Camomila",
    brand: "LOLA",
    collection: "Camomila",
    size: "250ml",
    price: 18.95,
    category: "Shampoo",
    image: "/camomila-shampoo-250ml.png",
    groups: [
      "LOIROS ILUMINADOS"
    ],
    description: "O Shampoo Siàge Liso Intenso limpa os fios sem ressecar, entregando cabelos macios, brilhantes e com liso alinhado.\r\n\r\n\r\n﻿\r\n\r\n\r\nSua fórmula com proteína Creatina, aliada ao complexo Liss Effect, bloqueia os agentes causadores do frizz e de fios indisciplinados, deixando os cabelos hidratados, macios e com muito brilho. Além de proteger do calor do secador e chapinha por até 230º. \r\n\r\n\r\nIdeal para todos os tipos de lisos, o Shampoo Siàge Liso Intenso entrega cuidado intenso, brilho extremo e hidratação para seus fios diariamente.\r\n\r\n\r\nLiso Intenso em cabelos alisados:\r\n\r\n\r\n-Aparência de lisos naturais;\r\n\r\n\r\n-Liso prolongado sem química;\r\n\r\n\r\n-Reduz porosidade dos fios;\r\n\r\n\r\n-Pontas hidratadas sem aspecto alisado;\r\n\r\n\r\nLiso Intenso em cabelos lisos com ondas:\r\n\r\n\r\n-Suaviza ondulações indesejadas;\r\n\r\n\r\n-2x menos volume.\r\n\r\n\r\nLiso Intenso em cabelos lisos naturais:\r\n\r\n\r\n-Frizz controlado;\r\n\r\n\r\n-Hidrata sem pesar.",
    usage: "Conselho de Aplicação"
  },
  {
    id: 83,
    name: "Shampoo Hidr. Ban/Aloe Vera Be(m)dita Ghee",
    brand: "LOLA",
    collection: "Be(m)dita Ghee",
    size: "250ml",
    price: 18.95,
    category: "Shampoo",
    image: "/ghee-hidratacao-shampoo-250ml.png",
    groups: [
      "CRONOGRAMA CAPILAR",
      "HIDRATAÇÃO"
    ],
    description: "O Shampoo Siàge Liso Intenso limpa os fios sem ressecar, entregando cabelos macios, brilhantes e com liso alinhado.\r\n\r\n\r\n﻿\r\n\r\n\r\nSua fórmula com proteína Creatina, aliada ao complexo Liss Effect, bloqueia os agentes causadores do frizz e de fios indisciplinados, deixando os cabelos hidratados, macios e com muito brilho. Além de proteger do calor do secador e chapinha por até 230º. \r\n\r\n\r\nIdeal para todos os tipos de lisos, o Shampoo Siàge Liso Intenso entrega cuidado intenso, brilho extremo e hidratação para seus fios diariamente.\r\n\r\n\r\nLiso Intenso em cabelos alisados:\r\n\r\n\r\n-Aparência de lisos naturais;\r\n\r\n\r\n-Liso prolongado sem química;\r\n\r\n\r\n-Reduz porosidade dos fios;\r\n\r\n\r\n-Pontas hidratadas sem aspecto alisado;\r\n\r\n\r\nLiso Intenso em cabelos lisos com ondas:\r\n\r\n\r\n-Suaviza ondulações indesejadas;\r\n\r\n\r\n-2x menos volume.\r\n\r\n\r\nLiso Intenso em cabelos lisos naturais:\r\n\r\n\r\n-Frizz controlado;\r\n\r\n\r\n-Hidrata sem pesar.",
    usage: "Conselho de Aplicação"
  },
  {
    id: 84,
    name: "Shampoo Hidratante Morte Súbita",
    brand: "LOLA",
    collection: "Morte Súbita",
    size: "250ml",
    price: 15.95,
    category: "Shampoo",
    image: "/morte-subita-shampoo-250ml.png",
    groups: [
      "HIDRATAÇÃO"
    ],
    description: "O Shampoo Siàge Liso Intenso limpa os fios sem ressecar, entregando cabelos macios, brilhantes e com liso alinhado.\r\n\r\n\r\n﻿\r\n\r\n\r\nSua fórmula com proteína Creatina, aliada ao complexo Liss Effect, bloqueia os agentes causadores do frizz e de fios indisciplinados, deixando os cabelos hidratados, macios e com muito brilho. Além de proteger do calor do secador e chapinha por até 230º. \r\n\r\n\r\nIdeal para todos os tipos de lisos, o Shampoo Siàge Liso Intenso entrega cuidado intenso, brilho extremo e hidratação para seus fios diariamente.\r\n\r\n\r\nLiso Intenso em cabelos alisados:\r\n\r\n\r\n-Aparência de lisos naturais;\r\n\r\n\r\n-Liso prolongado sem química;\r\n\r\n\r\n-Reduz porosidade dos fios;\r\n\r\n\r\n-Pontas hidratadas sem aspecto alisado;\r\n\r\n\r\nLiso Intenso em cabelos lisos com ondas:\r\n\r\n\r\n-Suaviza ondulações indesejadas;\r\n\r\n\r\n-2x menos volume.\r\n\r\n\r\nLiso Intenso em cabelos lisos naturais:\r\n\r\n\r\n-Frizz controlado;\r\n\r\n\r\n-Hidrata sem pesar.",
    usage: "Conselho de Aplicação"
  },
  {
    id: 85,
    name: "Shampoo Matizador Loira de Farmácia",
    brand: "LOLA",
    collection: "Loira de Farmácia",
    size: "250ml",
    price: 15.95,
    category: "Shampoo",
    image: "/loira-de-farmacia-shampoo-250ml.png",
    groups: [
      "LOIROS ILUMINADOS"
    ],
    description: "Shampoo para cabelos loiros mais bonitos e saudáveis. Rico em antioxidantes, matizo e neutralizo os tons amarelados dos fios, deixando seu tom de loiro revitalizado e mais brilhante. Com proteção térmica contra os danos dos raios UV e da poluição ambiental, protegendo sua cor por mais tempo.",
    usage: "Aplique nos cabelos molhados e massageie delicadamente até fazer espuma. Repita a operação se necessário. Siga o tratamento usando a Máscara Matizadora Loira de Farmácia. #FicaADica: Se desejar um efeito matizador mais intenso, deixe nos fios pelo tempo necessário para alcançar a matização desejada e sempre acompanhado da Máscara Matizadora Loira de Farmácia."
  },
  {
    id: 86,
    name: "Shampoo Nutri. Abacaxi/Mant. Bacuri Be(m)dita Ghee",
    brand: "LOLA",
    collection: "Be(m)dita Ghee",
    size: "250ml",
    price: 18.95,
    category: "Shampoo",
    image: "/ghee-nutricao-shampoo-250ml.png",
    groups: [
      "CRONOGRAMA CAPILAR",
      "NUTRIÇÃO"
    ],
    description: "O Shampoo Siàge Liso Intenso limpa os fios sem ressecar, entregando cabelos macios, brilhantes e com liso alinhado.\r\n\r\n\r\n﻿\r\n\r\n\r\nSua fórmula com proteína Creatina, aliada ao complexo Liss Effect, bloqueia os agentes causadores do frizz e de fios indisciplinados, deixando os cabelos hidratados, macios e com muito brilho. Além de proteger do calor do secador e chapinha por até 230º. \r\n\r\n\r\nIdeal para todos os tipos de lisos, o Shampoo Siàge Liso Intenso entrega cuidado intenso, brilho extremo e hidratação para seus fios diariamente.\r\n\r\n\r\nLiso Intenso em cabelos alisados:\r\n\r\n\r\n-Aparência de lisos naturais;\r\n\r\n\r\n-Liso prolongado sem química;\r\n\r\n\r\n-Reduz porosidade dos fios;\r\n\r\n\r\n-Pontas hidratadas sem aspecto alisado;\r\n\r\n\r\nLiso Intenso em cabelos lisos com ondas:\r\n\r\n\r\n-Suaviza ondulações indesejadas;\r\n\r\n\r\n-2x menos volume.\r\n\r\n\r\nLiso Intenso em cabelos lisos naturais:\r\n\r\n\r\n-Frizz controlado;\r\n\r\n\r\n-Hidrata sem pesar.",
    usage: "Conselho de Aplicação"
  },
  {
    id: 87,
    name: "Shampoo Reconst. Papaia/Queratina Be(m)dita Ghee",
    brand: "LOLA",
    collection: "Be(m)dita Ghee",
    size: "250ml",
    price: 18.95,
    category: "Shampoo",
    image: "/ghee-reconstrucao-shampoo-250ml.png",
    groups: [
      "CRONOGRAMA CAPILAR",
      "RECONSTRUÇÃO"
    ],
    description: "O Shampoo Siàge Liso Intenso limpa os fios sem ressecar, entregando cabelos macios, brilhantes e com liso alinhado.\r\n\r\n\r\n﻿\r\n\r\n\r\nSua fórmula com proteína Creatina, aliada ao complexo Liss Effect, bloqueia os agentes causadores do frizz e de fios indisciplinados, deixando os cabelos hidratados, macios e com muito brilho. Além de proteger do calor do secador e chapinha por até 230º. \r\n\r\n\r\nIdeal para todos os tipos de lisos, o Shampoo Siàge Liso Intenso entrega cuidado intenso, brilho extremo e hidratação para seus fios diariamente.\r\n\r\n\r\nLiso Intenso em cabelos alisados:\r\n\r\n\r\n-Aparência de lisos naturais;\r\n\r\n\r\n-Liso prolongado sem química;\r\n\r\n\r\n-Reduz porosidade dos fios;\r\n\r\n\r\n-Pontas hidratadas sem aspecto alisado;\r\n\r\n\r\nLiso Intenso em cabelos lisos com ondas:\r\n\r\n\r\n-Suaviza ondulações indesejadas;\r\n\r\n\r\n-2x menos volume.\r\n\r\n\r\nLiso Intenso em cabelos lisos naturais:\r\n\r\n\r\n-Frizz controlado;\r\n\r\n\r\n-Hidrata sem pesar.",
    usage: "Conselho de Aplicação"
  },
  {
    id: 91,
    name: "Shampoo Sólido Morte Súbita",
    brand: "LOLA",
    collection: "Morte Súbita",
    size: "100g",
    price: 18.95,
    category: "Shampoo",
    image: "/morte-subita-shampoo-solido-100g.png",
    groups: [
      "HIDRATAÇÃO"
    ],
    description: "O Shampoo Siàge Liso Intenso limpa os fios sem ressecar, entregando cabelos macios, brilhantes e com liso alinhado.\r\n\r\n\r\n﻿\r\n\r\n\r\nSua fórmula com proteína Creatina, aliada ao complexo Liss Effect, bloqueia os agentes causadores do frizz e de fios indisciplinados, deixando os cabelos hidratados, macios e com muito brilho. Além de proteger do calor do secador e chapinha por até 230º. \r\n\r\n\r\nIdeal para todos os tipos de lisos, o Shampoo Siàge Liso Intenso entrega cuidado intenso, brilho extremo e hidratação para seus fios diariamente.\r\n\r\n\r\nLiso Intenso em cabelos alisados:\r\n\r\n\r\n-Aparência de lisos naturais;\r\n\r\n\r\n-Liso prolongado sem química;\r\n\r\n\r\n-Reduz porosidade dos fios;\r\n\r\n\r\n-Pontas hidratadas sem aspecto alisado;\r\n\r\n\r\nLiso Intenso em cabelos lisos com ondas:\r\n\r\n\r\n-Suaviza ondulações indesejadas;\r\n\r\n\r\n-2x menos volume.\r\n\r\n\r\nLiso Intenso em cabelos lisos naturais:\r\n\r\n\r\n-Frizz controlado;\r\n\r\n\r\n-Hidrata sem pesar.",
    usage: "Conselho de Aplicação"
  },
  {
    id: 92,
    name: "Lyra",
    brand: "EUDORA",
    collection: "Perfumes",
    size: "75ml",
    price: 49.9,
    category: "Perfume",
    image: "/lyra-desodorante-colonia-75ml.png",
    groups: [
      "PERFUMARIA"
    ],
    description: "Lyra Desodorante Colônia traz o valor de uma joia em forma de fragrância para uma rotina mais perfumada!\r\n\r\n\r\nEudora Lyra se inspirou no mundo das joalherias para trazer em um frasco valioso uma fragrância exuberante e valiosa, uma combinação única de frutas vermelhas e flores intensas com a cremosidade do musk e cedro.\r\n\r\n\r\nLyra é o nome de uma constelação conhecida por ter uma das estrelas mais brilhantes, ideal para trazer um universo de brilho e glamour para você. \r\n\r\n\r\nDesodorante Colônia Lyra é um verdadeiro ícone de brilho que desperta emoções e cria memórias preciosas. \r\n\r\n\r\nApresentando o inovador acorde Joya, essa colônia feminina floral une os ingredientes mais sofisticados da perfumaria feminina em uma preciosa criação, tornando Lyra uma experiência única e inesquecível.\r\n\r\n\r\nLyra ilumina e inspira, assim como as joias em nossas vidas! \r\n\r\n\r\nFamília Olfativa: Oriental Floral.",
    usage: "Conselho de Aplicação"
  },
  {
    id: 93,
    name: "La Victorie Intense",
    brand: "EUDORA",
    collection: "Perfumes",
    size: "75ml",
    price: 39.9,
    category: "Perfume",
    image: "/la-victorie-intense-perfume-75ml-v2.png",
    groups: [],
    description: "Eau de Parfum intenso e sofisticado. Combina a força da flor de Tuberosa com a doçura do Caramelo."
  },
  {
    id: 98,
    name: "Shampoo Siàge Reconstrói os Fios",
    brand: "EUDORA",
    collection: "Siàge Reconstrói os Fios",
    size: "250ml",
    price: 18.95,
    category: "Shampoo",
    image: "/siage-reconstroi-fios-shampoo-250ml.png",
    groups: [
      "RECONSTRUÇÃO"
    ],
    description: "Indicação: cabelos cacheados\r\nSem sulfato, promove limpeza suave, sem remover os óleos naturais dos fios.\r\n    • Desenvolvida para nutrir e fortalecer os fios, valorizando a beleza dos cachos;\r\n    • A linha é livre de sulfatos, petrolatos e parabenos;\r\n    • Sua fórmula conta com óleo de coco e colágeno, que promovem hidratação e definição aso cabelos cacheados.\r\nDireção olfativa: floral, fruity, gourmand,oriental",
    usage: "nos cabelos molhados, aplique o shampoo, massageando o couro cabeludo em suaves movimentos circulares. Enxágue bem. Se necessário, repita a aplicação. Potencialize os resultados utilizando toda a linha Cachos Sim!."
  },
  {
    id: 99,
    name: "Condicionador Siàge Reconstrói os Fios",
    brand: "EUDORA",
    collection: "Siàge Reconstrói os Fios",
    size: "200ml",
    price: 18.95,
    category: "Condicionador",
    image: "/siage-reconstroi-fios-condicionador-200ml.png",
    groups: [
      "RECONSTRUÇÃO"
    ],
    description: "cabelos cacheados\r\nProporciona alta emoliência aos cabelos cacheados e deixa os fios mais definidos e brilhantes.\r\n    • Desenvolvida para nutrir e fortalecer os fios, valorizando a beleza dos cachos;\r\n    • A linha é livre de sulfatos, petrolatos e parabenos;\r\n    • Sua fórmula conta com óleo de coco e colágeno, que promovem hidratação e definição aso cabelos cacheados.\r\nDireção olfativa: floral, fruity, gourmand,oriental",
    usage: "após lavar os cabelos, aplique o condicionador uniformemente, do comprimento às pontas. Massageie suavemente e deixe agir por 1 minuto. Enxágue bem. O uso do condicionador também é indicado após máscaras de tratamento, para promover maior selamento das cutículas. Potencialize os resultados utilizando toda a linha Cachos Sim!."
  },
  {
    id: 100,
    name: "Máscara Siàge Reconstrói os Fios",
    brand: "EUDORA",
    collection: "Siàge Reconstrói os Fios",
    size: "250g",
    price: 21.95,
    category: "Máscara",
    image: "/siage-reconstroi-fios-mascara-250g.png",
    groups: [
      "RECONSTRUÇÃO"
    ],
    description: "Máscara para reconstrução dos fios",
    usage: "Aplicar na fibra capilar, deixar agir 10-15 minutos e enxaguar bem"
  },
  {
    id: 101,
    name: "Shampoo Siàge Glow Expert",
    brand: "EUDORA",
    collection: "Siàge Glow Expert",
    size: "250ml",
    price: 18.95,
    category: "Shampoo",
    image: "/siage-glow-expert-shampoo-250ml.png",
    groups: [
      "NUTRIÇÃO"
    ],
    description: "Indicação: cabelos cacheados\r\nSem sulfato, promove limpeza suave, sem remover os óleos naturais dos fios.\r\n    • Desenvolvida para nutrir e fortalecer os fios, valorizando a beleza dos cachos;\r\n    • A linha é livre de sulfatos, petrolatos e parabenos;\r\n    • Sua fórmula conta com óleo de coco e colágeno, que promovem hidratação e definição aso cabelos cacheados.\r\nDireção olfativa: floral, fruity, gourmand,oriental",
    usage: "nos cabelos molhados, aplique o shampoo, massageando o couro cabeludo em suaves movimentos circulares. Enxágue bem. Se necessário, repita a aplicação. Potencialize os resultados utilizando toda a linha Cachos Sim!."
  },
  {
    id: 102,
    name: "Condicionador Siàge Glow Expert",
    brand: "EUDORA",
    collection: "Siàge Glow Expert",
    size: "200ml",
    price: 18.95,
    category: "Condicionador",
    image: "/siage-glow-expert-condicionador-200ml.png",
    groups: [
      "NUTRIÇÃO"
    ],
    description: "cabelos cacheados\r\nProporciona alta emoliência aos cabelos cacheados e deixa os fios mais definidos e brilhantes.\r\n    • Desenvolvida para nutrir e fortalecer os fios, valorizando a beleza dos cachos;\r\n    • A linha é livre de sulfatos, petrolatos e parabenos;\r\n    • Sua fórmula conta com óleo de coco e colágeno, que promovem hidratação e definição aso cabelos cacheados.\r\nDireção olfativa: floral, fruity, gourmand,oriental",
    usage: "após lavar os cabelos, aplique o condicionador uniformemente, do comprimento às pontas. Massageie suavemente e deixe agir por 1 minuto. Enxágue bem. O uso do condicionador também é indicado após máscaras de tratamento, para promover maior selamento das cutículas. Potencialize os resultados utilizando toda a linha Cachos Sim!."
  },
  {
    id: 103,
    name: "Máscara Siàge Glow Expert",
    brand: "EUDORA",
    collection: "Siàge Glow Expert",
    size: "250g",
    price: 21.95,
    category: "Máscara",
    image: "/siage-glow-expert-mascara-250g.png",
    groups: [
      "NUTRIÇÃO"
    ],
    description: "Máscara para brilho e luminosidade",
    usage: "Aplicar na fibra capilar, deixar agir 10-15 minutos e enxaguar bem"
  },
  {
    id: 104,
    name: "Shampoo Siàge Hair-Plastia",
    brand: "EUDORA",
    collection: "Siàge Hair-Plastia",
    size: "250ml",
    price: 18.95,
    category: "Shampoo",
    image: "/siage-hair-plastia-shampoo-250ml.png",
    groups: [
      "HIDRATAÇÃO"
    ],
    description: "Indicação: cabelos cacheados\r\nSem sulfato, promove limpeza suave, sem remover os óleos naturais dos fios.\r\n    • Desenvolvida para nutrir e fortalecer os fios, valorizando a beleza dos cachos;\r\n    • A linha é livre de sulfatos, petrolatos e parabenos;\r\n    • Sua fórmula conta com óleo de coco e colágeno, que promovem hidratação e definição aso cabelos cacheados.\r\nDireção olfativa: floral, fruity, gourmand,oriental",
    usage: "nos cabelos molhados, aplique o shampoo, massageando o couro cabeludo em suaves movimentos circulares. Enxágue bem. Se necessário, repita a aplicação. Potencialize os resultados utilizando toda a linha Cachos Sim!."
  },
  {
    id: 105,
    name: "Condicionador Siàge Hair-Plastia",
    brand: "EUDORA",
    collection: "Siàge Hair-Plastia",
    size: "200ml",
    price: 18.95,
    category: "Condicionador",
    image: "/siage-hair-plastia-condicionador-200ml.png",
    groups: [
      "HIDRATAÇÃO"
    ],
    description: "cabelos cacheados\r\nProporciona alta emoliência aos cabelos cacheados e deixa os fios mais definidos e brilhantes.\r\n    • Desenvolvida para nutrir e fortalecer os fios, valorizando a beleza dos cachos;\r\n    • A linha é livre de sulfatos, petrolatos e parabenos;\r\n    • Sua fórmula conta com óleo de coco e colágeno, que promovem hidratação e definição aso cabelos cacheados.\r\nDireção olfativa: floral, fruity, gourmand,oriental",
    usage: "após lavar os cabelos, aplique o condicionador uniformemente, do comprimento às pontas. Massageie suavemente e deixe agir por 1 minuto. Enxágue bem. O uso do condicionador também é indicado após máscaras de tratamento, para promover maior selamento das cutículas. Potencialize os resultados utilizando toda a linha Cachos Sim!."
  },
  {
    id: 106,
    name: "Máscara Siàge Hair-Plastia",
    brand: "EUDORA",
    collection: "Siàge Hair-Plastia",
    size: "250g",
    price: 21.95,
    category: "Máscara",
    image: "/siage-hair-plastia-mascara-250g.png",
    groups: [
      "HIDRATAÇÃO"
    ],
    description: "Máscara para reconstrução capilar",
    usage: "Aplicar na fibra capilar, deixar agir 10-15 minutos e enxaguar bem"
  },
  {
    id: 107,
    name: "Shampoo Siàge Acelera o Crescimento",
    brand: "EUDORA",
    collection: "Siàge Acelera o Crescimento",
    size: "250ml",
    price: 18.95,
    category: "Shampoo",
    image: "/siage-acelera-crescimento-shampoo-250ml.png",
    groups: [
      "CRESCIMENTO/FORTALECIMENTO"
    ],
    description: "Indicação: cabelos cacheados\r\nSem sulfato, promove limpeza suave, sem remover os óleos naturais dos fios.\r\n    • Desenvolvida para nutrir e fortalecer os fios, valorizando a beleza dos cachos;\r\n    • A linha é livre de sulfatos, petrolatos e parabenos;\r\n    • Sua fórmula conta com óleo de coco e colágeno, que promovem hidratação e definição aso cabelos cacheados.\r\nDireção olfativa: floral, fruity, gourmand,oriental",
    usage: "nos cabelos molhados, aplique o shampoo, massageando o couro cabeludo em suaves movimentos circulares. Enxágue bem. Se necessário, repita a aplicação. Potencialize os resultados utilizando toda a linha Cachos Sim!."
  },
  {
    id: 108,
    name: "Condicionador Siàge Acelera o Crescimento",
    brand: "EUDORA",
    collection: "Siàge Acelera o Crescimento",
    size: "200ml",
    price: 18.95,
    category: "Condicionador",
    image: "/siage-acelera-crescimento-condicionador-200ml.png",
    groups: [
      "CRESCIMENTO/FORTALECIMENTO"
    ],
    description: "cabelos cacheados\r\nProporciona alta emoliência aos cabelos cacheados e deixa os fios mais definidos e brilhantes.\r\n    • Desenvolvida para nutrir e fortalecer os fios, valorizando a beleza dos cachos;\r\n    • A linha é livre de sulfatos, petrolatos e parabenos;\r\n    • Sua fórmula conta com óleo de coco e colágeno, que promovem hidratação e definição aso cabelos cacheados.\r\nDireção olfativa: floral, fruity, gourmand,oriental",
    usage: "após lavar os cabelos, aplique o condicionador uniformemente, do comprimento às pontas. Massageie suavemente e deixe agir por 1 minuto. Enxágue bem. O uso do condicionador também é indicado após máscaras de tratamento, para promover maior selamento das cutículas. Potencialize os resultados utilizando toda a linha Cachos Sim!."
  },
  {
    id: 109,
    name: "Máscara Siàge Acelera o Crescimento",
    brand: "EUDORA",
    collection: "Siàge Acelera o Crescimento",
    size: "250g",
    price: 21.95,
    category: "Máscara",
    image: "/siage-acelera-crescimento-mascara-250g.png",
    groups: [
      "CRESCIMENTO/FORTALECIMENTO"
    ],
    description: "Máscara estimuladora de crescimento",
    usage: "Aplicar na fibra capilar, deixar agir 10-15 minutos e enxaguar bem"
  },
  {
    id: 110,
    name: "Tônico Siàge Acelera o Crescimento",
    brand: "EUDORA",
    collection: "Siàge Acelera o Crescimento",
    size: "65ml",
    price: 21.95,
    category: "Tratamento",
    image: "/siage-acelera-crescimento-tonico-65ml.png",
    groups: [
      "CRESCIMENTO/FORTALECIMENTO"
    ],
    description: "Tônico capilar estimulador de crescimento",
    usage: "Aplicar no couro cabeludo"
  },
  {
    id: 111,
    name: "Shampoo Siàge Liso Intenso",
    brand: "EUDORA",
    collection: "Siàge Liso Intenso",
    size: "250ml",
    price: 18.95,
    category: "Shampoo",
    image: "/siage-liso-intenso-shampoo-250ml.png",
    groups: [
      "ALISAMENTO/CONTROLE DE FRIZZ"
    ],
    description: "Indicação: cabelos cacheados\r\nSem sulfato, promove limpeza suave, sem remover os óleos naturais dos fios.\r\n    • Desenvolvida para nutrir e fortalecer os fios, valorizando a beleza dos cachos;\r\n    • A linha é livre de sulfatos, petrolatos e parabenos;\r\n    • Sua fórmula conta com óleo de coco e colágeno, que promovem hidratação e definição aso cabelos cacheados.\r\nDireção olfativa: floral, fruity, gourmand,oriental",
    usage: "nos cabelos molhados, aplique o shampoo, massageando o couro cabeludo em suaves movimentos circulares. Enxágue bem. Se necessário, repita a aplicação. Potencialize os resultados utilizando toda a linha Cachos Sim!."
  },
  {
    id: 112,
    name: "Condicionador Siàge Liso Intenso",
    brand: "EUDORA",
    collection: "Siàge Liso Intenso",
    size: "200ml",
    price: 18.95,
    category: "Condicionador",
    image: "/siage-liso-intenso-condicionador-200ml.png",
    groups: [
      "ALISAMENTO/CONTROLE DE FRIZZ"
    ],
    description: "cabelos cacheados\r\nProporciona alta emoliência aos cabelos cacheados e deixa os fios mais definidos e brilhantes.\r\n    • Desenvolvida para nutrir e fortalecer os fios, valorizando a beleza dos cachos;\r\n    • A linha é livre de sulfatos, petrolatos e parabenos;\r\n    • Sua fórmula conta com óleo de coco e colágeno, que promovem hidratação e definição aso cabelos cacheados.\r\nDireção olfativa: floral, fruity, gourmand,oriental",
    usage: "após lavar os cabelos, aplique o condicionador uniformemente, do comprimento às pontas. Massageie suavemente e deixe agir por 1 minuto. Enxágue bem. O uso do condicionador também é indicado após máscaras de tratamento, para promover maior selamento das cutículas. Potencialize os resultados utilizando toda a linha Cachos Sim!."
  },
  {
    id: 113,
    name: "Máscara Siàge Liso Intenso",
    brand: "EUDORA",
    collection: "Siàge Liso Intenso",
    size: "250g",
    price: 21.95,
    category: "Máscara",
    image: "/siage-liso-intenso-mascara-250g.png",
    groups: [
      "ALISAMENTO/CONTROLE DE FRIZZ"
    ],
    description: "Máscara micelar para tratamento intensivo",
    usage: "Aplicar na fibra capilar, deixar agir 10-15 minutos e enxaguar bem"
  },
  {
    id: 136,
    name: "Body Splash Instance Karité",
    brand: "EUDORA",
    collection: "Instance",
    size: "200ml",
    price: 34.9,
    category: "Body Splash",
    image: "/instance-karite-body-splash.png",
    groups: [
      "CORPO E BANHO",
      "PERFUMARIA"
    ],
    description: "Spray perfumado desodorante corporal com karité. Proporciona hidratação e fragrância leve para uso diário."
  },
  {
    id: 137,
    name: "Body Splash Instance Baunilha",
    brand: "EUDORA",
    collection: "Instance",
    size: "200ml",
    price: 28.9,
    category: "Body Splash",
    image: "/instance-baunilha-body-splash.png",
    groups: [
      "CORPO E BANHO",
      "PERFUMARIA"
    ],
    description: "Spray perfumado desodorante corporal com fragrância de baunilha. Proporciona hidratação e fragrância leve para uso diário."
  },
  {
    id: 149,
    name: "Hidratante Instance Frutas Vermelhas",
    brand: "EUDORA",
    collection: "Instance",
    size: "200ml",
    price: 28.9,
    category: "Hidratante",
    image: "/instance-frutas-vermelhas-hidratante.png",
    groups: [
      "CORPO E BANHO",
      "HIDRATAÇÃO CORPORAL"
    ],
    description: "Esfoliante corporal perfumado. Eudora Instance Frutas Vermelhas traz esfoliação delicada para uma pele renovada e macia.\r\n\r\n\r\nO Esfoliante Corporal Perfumado Eudora Instance Frutas Vermelha conta com sementes de morango e extratos naturais, garantindo uma fragrância surpreendente para deixar seu banho mais prazeroso. A combinação do dulçor das frutas vermelhas com a cremosidade de notas de baunilha traz uma fragrância frutal alegre e surpreendente para uma pele renovada e perfumada. Este esfoliante vegano age de maneira delicada, sem agredir a pele, renovando-a e proporcionando mais maciez. \r\n\r\n\r\nBenefícios do Esfoliante Corporal Perfumado Eudora Instance Frutas Vermelhas:\r\n\r\n\r\n    • ▸Esfoliante corporal que promove uma esfoliação suave e renovação da pele;\r\n    • ▸Fórmula vegana que age de forma delicada, sem agredir a pele;\r\n    • ▸Contém sementes de morango e extratos naturais para uma esfoliação eficaz;\r\n    • ▸Fragrância Frutal Alegre e surpreendente (Frutas Vermelhas e Baunilha);\r\n    • ▸Deixa a pele renovada, macia e intensamente perfumada após o banho;\r\n    • ▸Livre de parabenos, sulfatos, petrolatos e óleo mineral, para um cuidado consciente;\r\n    • ▸Ideal para completar a rotina de autocuidado, transformando o banho em um momento prazeroso.",
    usage: "Conselho de Aplicação"
  },
  {
    id: 150,
    name: "Esfoliante Instance Frutas Vermelhas",
    brand: "EUDORA",
    collection: "Instance",
    size: "200ml",
    price: 34.9,
    category: "Esfoliante",
    image: "/instance-frutas-vermelhas-esfoliante.png",
    groups: [
      "CORPO E BANHO",
      "HIDRATAÇÃO CORPORAL"
    ],
    description: "Esfoliante corporal perfumado. Eudora Instance Frutas Vermelhas traz esfoliação delicada para uma pele renovada e macia.\r\n\r\n\r\nO Esfoliante Corporal Perfumado Eudora Instance Frutas Vermelha conta com sementes de morango e extratos naturais, garantindo uma fragrância surpreendente para deixar seu banho mais prazeroso. A combinação do dulçor das frutas vermelhas com a cremosidade de notas de baunilha traz uma fragrância frutal alegre e surpreendente para uma pele renovada e perfumada. Este esfoliante vegano age de maneira delicada, sem agredir a pele, renovando-a e proporcionando mais maciez. \r\n\r\n\r\nBenefícios do Esfoliante Corporal Perfumado Eudora Instance Frutas Vermelhas:\r\n\r\n\r\n    • ▸Esfoliante corporal que promove uma esfoliação suave e renovação da pele;\r\n    • ▸Fórmula vegana que age de forma delicada, sem agredir a pele;\r\n    • ▸Contém sementes de morango e extratos naturais para uma esfoliação eficaz;\r\n    • ▸Fragrância Frutal Alegre e surpreendente (Frutas Vermelhas e Baunilha);\r\n    • ▸Deixa a pele renovada, macia e intensamente perfumada após o banho;\r\n    • ▸Livre de parabenos, sulfatos, petrolatos e óleo mineral, para um cuidado consciente;\r\n    • ▸Ideal para completar a rotina de autocuidado, transformando o banho em um momento prazeroso.",
    usage: "Conselho de Aplicação"
  },
  {
    id: 153,
    name: "Shampoo Siàge Pro Cronology Curvas",
    brand: "EUDORA",
    collection: "Siàge Pro Cronology Curvas",
    size: "250ml",
    price: 29.9,
    category: "Shampoo",
    image: "/siage-pro-cronology-curvas-shampoo.png",
    groups: [
      "ONDULADOS",
      "CACHOS PERFEITOS"
    ],
    description: "Indicação: cabelos cacheados\r\nSem sulfato, promove limpeza suave, sem remover os óleos naturais dos fios.\r\n    • Desenvolvida para nutrir e fortalecer os fios, valorizando a beleza dos cachos;\r\n    • A linha é livre de sulfatos, petrolatos e parabenos;\r\n    • Sua fórmula conta com óleo de coco e colágeno, que promovem hidratação e definição aso cabelos cacheados.\r\nDireção olfativa: floral, fruity, gourmand,oriental",
    usage: "nos cabelos molhados, aplique o shampoo, massageando o couro cabeludo em suaves movimentos circulares. Enxágue bem. Se necessário, repita a aplicação. Potencialize os resultados utilizando toda a linha Cachos Sim!."
  },
  {
    id: 154,
    name: "Condicionador Siàge Pro Cronology Curvas",
    brand: "EUDORA",
    collection: "Siàge Pro Cronology Curvas",
    size: "200ml",
    price: 26.9,
    category: "Condicionador",
    image: "/siage-pro-cronology-curvas-condicionador.png",
    groups: [
      "ONDULADOS",
      "CACHOS PERFEITOS"
    ],
    description: "cabelos cacheados\r\nProporciona alta emoliência aos cabelos cacheados e deixa os fios mais definidos e brilhantes.\r\n    • Desenvolvida para nutrir e fortalecer os fios, valorizando a beleza dos cachos;\r\n    • A linha é livre de sulfatos, petrolatos e parabenos;\r\n    • Sua fórmula conta com óleo de coco e colágeno, que promovem hidratação e definição aso cabelos cacheados.\r\nDireção olfativa: floral, fruity, gourmand,oriental",
    usage: "após lavar os cabelos, aplique o condicionador uniformemente, do comprimento às pontas. Massageie suavemente e deixe agir por 1 minuto. Enxágue bem. O uso do condicionador também é indicado após máscaras de tratamento, para promover maior selamento das cutículas. Potencialize os resultados utilizando toda a linha Cachos Sim!."
  },
  {
    id: 156,
    name: "Queratina Líquida Siàge Reconstrói",
    brand: "EUDORA",
    collection: "Siàge Reconstrói os Fios",
    size: "100ml",
    price: 29.9,
    category: "Tratamento",
    image: "/siage-reconstroi-fios-queratina.png",
    groups: [
      "RECONSTRUÇÃO"
    ],
    description: "Queratina líquida para fortalecimento",
    usage: "Aplicar nos fios e deixar agir"
  },
  {
    id: 157,
    name: "Balm Siàge Glow Expert",
    brand: "EUDORA",
    collection: "Siàge Glow Expert",
    size: "200ml",
    price: 39.9,
    category: "Tratamento",
    image: "/images/products/eudora/siage-glow-expert-balm-100ml.png",
    groups: [
      "NUTRIÇÃO",
      "FINALIZADORES"
    ],
    description: "Balm finalizador que proporciona brilho e luminosidade instantâneos aos fios."
  },
  {
    id: 158,
    name: "Selante Siàge Liso Intenso",
    brand: "EUDORA",
    collection: "Siàge Liso Intenso",
    size: "100ml",
    price: 39.9,
    category: "Tratamento",
    image: "/images/products/eudora/siage-liso-intenso-selante-100ml.png",
    groups: [
      "ALISAMENTO/CONTROLE DE FRIZZ"
    ],
    description: "Tônico capilar estimulador de crescimento",
    usage: "Aplicar no couro cabeludo"
  },
  {
    id: 159,
    name: "Shampoo Acid Gold",
    brand: "GOLDSPELL",
    collection: "Acid Gold",
    size: "250ml",
    price: 32.9,
    category: "Shampoo",
    image: "/images/products/goldspell/kit-acid-gold.png",
    groups: [
      "RECONSTRUÇÃO"
    ],
    description: "O Shampoo Siàge Liso Intenso limpa os fios sem ressecar, entregando cabelos macios, brilhantes e com liso alinhado.\r\n\r\n\r\n﻿\r\n\r\n\r\nSua fórmula com proteína Creatina, aliada ao complexo Liss Effect, bloqueia os agentes causadores do frizz e de fios indisciplinados, deixando os cabelos hidratados, macios e com muito brilho. Além de proteger do calor do secador e chapinha por até 230º. \r\n\r\n\r\nIdeal para todos os tipos de lisos, o Shampoo Siàge Liso Intenso entrega cuidado intenso, brilho extremo e hidratação para seus fios diariamente.\r\n\r\n\r\nLiso Intenso em cabelos alisados:\r\n\r\n\r\n-Aparência de lisos naturais;\r\n\r\n\r\n-Liso prolongado sem química;\r\n\r\n\r\n-Reduz porosidade dos fios;\r\n\r\n\r\n-Pontas hidratadas sem aspecto alisado;\r\n\r\n\r\nLiso Intenso em cabelos lisos com ondas:\r\n\r\n\r\n-Suaviza ondulações indesejadas;\r\n\r\n\r\n-2x menos volume.\r\n\r\n\r\nLiso Intenso em cabelos lisos naturais:\r\n\r\n\r\n-Frizz controlado;\r\n\r\n\r\n-Hidrata sem pesar.",
    usage: "Conselho de Aplicação"
  },
  {
    id: 160,
    name: "Condicionador Acid Gold",
    brand: "GOLDSPELL",
    collection: "Acid Gold",
    size: "250ml",
    price: 29.9,
    category: "Condicionador",
    image: "/images/products/goldspell/kit-acid-gold.png",
    groups: [
      "RECONSTRUÇÃO"
    ],
    description: "cabelos cacheados\r\nProporciona alta emoliência aos cabelos cacheados e deixa os fios mais definidos e brilhantes.\r\n    • Desenvolvida para nutrir e fortalecer os fios, valorizando a beleza dos cachos;\r\n    • A linha é livre de sulfatos, petrolatos e parabenos;\r\n    • Sua fórmula conta com óleo de coco e colágeno, que promovem hidratação e definição aso cabelos cacheados.\r\nDireção olfativa: floral, fruity, gourmand,oriental",
    usage: "após lavar os cabelos, aplique o condicionador uniformemente, do comprimento às pontas. Massageie suavemente e deixe agir por 1 minuto. Enxágue bem. O uso do condicionador também é indicado após máscaras de tratamento, para promover maior selamento das cutículas. Potencialize os resultados utilizando toda a linha Cachos Sim!."
  },
  {
    id: 161,
    name: "Máscara Capilar Acid Gold",
    brand: "GOLDSPELL",
    collection: "Acid Gold",
    size: "250ml",
    price: 32.9,
    category: "Máscara",
    image: "/images/products/goldspell/mascara-acid-gold.png",
    groups: [
      "RECONSTRUÇÃO"
    ],
    description: "Máscara com ácido para tratamento",
    usage: "Aplicar na fibra capilar, deixar agir 10-15 minutos e enxaguar bem"
  },
  {
    id: 162,
    name: "Shampoo Poderoso",
    brand: "GOLDSPELL",
    collection: "Poderosa",
    size: "250ml",
    price: 32.9,
    category: "Shampoo",
    image: "/images/products/goldspell/shampoo-poderoso.png",
    groups: [
      "RECONSTRUÇÃO",
      "CRESCIMENTO/FORTALECIMENTO"
    ],
    description: "O Shampoo Siàge Liso Intenso limpa os fios sem ressecar, entregando cabelos macios, brilhantes e com liso alinhado.\r\n\r\n\r\n﻿\r\n\r\n\r\nSua fórmula com proteína Creatina, aliada ao complexo Liss Effect, bloqueia os agentes causadores do frizz e de fios indisciplinados, deixando os cabelos hidratados, macios e com muito brilho. Além de proteger do calor do secador e chapinha por até 230º. \r\n\r\n\r\nIdeal para todos os tipos de lisos, o Shampoo Siàge Liso Intenso entrega cuidado intenso, brilho extremo e hidratação para seus fios diariamente.\r\n\r\n\r\nLiso Intenso em cabelos alisados:\r\n\r\n\r\n-Aparência de lisos naturais;\r\n\r\n\r\n-Liso prolongado sem química;\r\n\r\n\r\n-Reduz porosidade dos fios;\r\n\r\n\r\n-Pontas hidratadas sem aspecto alisado;\r\n\r\n\r\nLiso Intenso em cabelos lisos com ondas:\r\n\r\n\r\n-Suaviza ondulações indesejadas;\r\n\r\n\r\n-2x menos volume.\r\n\r\n\r\nLiso Intenso em cabelos lisos naturais:\r\n\r\n\r\n-Frizz controlado;\r\n\r\n\r\n-Hidrata sem pesar.",
    usage: "Conselho de Aplicação"
  },
  {
    id: 163,
    name: "Condicionador Poderoso",
    brand: "GOLDSPELL",
    collection: "Poderosa",
    size: "250ml",
    price: 29.9,
    category: "Condicionador",
    image: "/images/products/goldspell/kit-poderoso.png",
    groups: [
      "RECONSTRUÇÃO",
      "CRESCIMENTO/FORTALECIMENTO"
    ],
    description: "cabelos cacheados\r\nProporciona alta emoliência aos cabelos cacheados e deixa os fios mais definidos e brilhantes.\r\n    • Desenvolvida para nutrir e fortalecer os fios, valorizando a beleza dos cachos;\r\n    • A linha é livre de sulfatos, petrolatos e parabenos;\r\n    • Sua fórmula conta com óleo de coco e colágeno, que promovem hidratação e definição aso cabelos cacheados.\r\nDireção olfativa: floral, fruity, gourmand,oriental",
    usage: "após lavar os cabelos, aplique o condicionador uniformemente, do comprimento às pontas. Massageie suavemente e deixe agir por 1 minuto. Enxágue bem. O uso do condicionador também é indicado após máscaras de tratamento, para promover maior selamento das cutículas. Potencialize os resultados utilizando toda a linha Cachos Sim!."
  },
  {
    id: 164,
    name: "Loção Desodorante Hidratante Cuide-se Bem Deleite",
    brand: "BOTICARIO",
    collection: "Cuide-se Bem",
    size: "400ml",
    price: 26.9,
    category: "Hidratante",
    image: "/images/products/boticario/deleite-locao.png",
    groups: [
      "CORPO E BANHO",
      "HIDRATAÇÃO CORPORAL"
    ],
    description: "Linha de cuidados diários com fragrâncias icônicas. Hidratação com cheirinho de leite e doçura."
  },
  {
    id: 165,
    name: "Body Splash Cuide-se Bem Cereja Livre",
    brand: "BOTICARIO",
    collection: "Cuide-se Bem",
    size: "200ml",
    price: 26.9,
    category: "Body Splash",
    image: "/images/products/boticario/cereja-livre-splash.png",
    groups: [
      "CORPO E BANHO",
      "PERFUMARIA"
    ],
    description: "Fragrância leve e fresca com notas de cereja. Sensação de frescor prolongado."
  },
  {
    id: 166,
    name: "Loção Hidratante Cuide-se Bem Doçura na Pessegura",
    brand: "BOTICARIO",
    collection: "Cuide-se Bem",
    size: "400ml",
    price: 26.9,
    category: "Hidratante",
    image: "/images/products/boticario/pessegura-locao-400ml.png",
    groups: [
      "CORPO E BANHO",
      "HIDRATAÇÃO CORPORAL"
    ],
    description: "Pele macia e perfumada com o doce cheirinho de pêssego. Rápida absorção."
  },
  {
    id: 167,
    name: "Loção Hidratante Cuide-se Bem Pessegura",
    brand: "BOTICARIO",
    collection: "Cuide-se Bem",
    size: "200ml",
    price: 26.9,
    category: "Hidratante",
    image: "/images/products/boticario/pessegura-locao-200ml.png",
    groups: [
      "CORPO E BANHO",
      "HIDRATAÇÃO CORPORAL"
    ],
    description: "Versão prática de 200ml. Hidratação profunda com aroma delicioso de pêssego."
  },
  {
    id: 168,
    name: "Loção Hidratante Cuide-se Bem Nuvem",
    brand: "BOTICARIO",
    collection: "Cuide-se Bem",
    size: "400ml",
    price: 26.9,
    category: "Hidratante",
    image: "/images/products/boticario/nuvem-locao.png",
    groups: [
      "CORPO E BANHO",
      "HIDRATAÇÃO CORPORAL"
    ],
    description: "Fragrância leve e confortável, como um abraço. Deixa a pele macia e hidratada."
  },
  {
    id: 169,
    name: "Body Splash Cuide-se Bem Nuvem de Alegria",
    brand: "BOTICARIO",
    collection: "Cuide-se Bem",
    size: "200ml",
    price: 26.9,
    category: "Body Splash",
    image: "/images/products/boticario/nuvem-alegria-splash.png",
    groups: [
      "CORPO E BANHO",
      "PERFUMARIA"
    ],
    description: "Fragrância revigorante e leve, perfeita para prolongar a sensação de banho tomado."
  },
  {
    id: 170,
    name: "Loção Hidratante Cuide-se Bem Amoruda",
    brand: "BOTICARIO",
    collection: "Cuide-se Bem",
    size: "400ml",
    price: 26.9,
    category: "Hidratante",
    image: "/images/products/boticario/amoruda-locao.png",
    groups: [
      "CORPO E BANHO",
      "HIDRATAÇÃO CORPORAL"
    ],
    description: "Hidratação com carinho e fragrância envolvente de amora. Pele macia o dia todo."
  },
  {
    id: 171,
    name: "Creme Esfoliante Cuide-se Bem Pessegura",
    brand: "BOTICARIO",
    collection: "Cuide-se Bem",
    size: "200g",
    price: 28.9,
    category: "Esfoliante",
    image: "/images/products/boticario/pessegura-esfoliante.png",
    groups: [
      "CORPO E BANHO",
      "HIDRATAÇÃO CORPORAL"
    ],
    description: "Esfoliação intensa que remove células mortas e deixa a pele renovada e com cheirinho de pêssego."
  },
  {
    id: 172,
    name: "Loção Hidratante Cuide-se Bem Boa Noite",
    brand: "BOTICARIO",
    collection: "Cuide-se Bem",
    size: "400ml",
    price: 28.9,
    category: "Hidratante",
    image: "/images/products/boticario/boa-noite-locao.png",
    groups: [
      "CORPO E BANHO",
      "HIDRATAÇÃO CORPORAL"
    ],
    description: "Fórmula com Camomila e fragrância relaxante. Ideal para usar antes de dormir."
  },
  {
    id: 173,
    name: "Body Splash Cuide-se Bem Beijinho",
    brand: "BOTICARIO",
    collection: "Cuide-se Bem",
    size: "200ml",
    price: 28.29,
    category: "Body Splash",
    image: "/images/products/boticario/beijinho-splash.png",
    groups: [
      "CORPO E BANHO",
      "PERFUMARIA"
    ],
    description: "Fragrância floral oriental, doce e suave, com extrato de flores e manteiga de karité."
  },
  {
    id: 174,
    name: "Body Splash Tododia Manga Rosa e Água de Coco",
    brand: "NATURA",
    collection: "Tododia",
    size: "200ml",
    price: 28.95,
    category: "Body Splash",
    image: "/images/products/natura/manga-rosa-splash.png",
    groups: [
      "CORPO E BANHO",
      "PERFUMARIA"
    ],
    description: "Fragrância refrescante com notas frutais de manga rosa e água de coco. Sensação de frescor."
  },
  {
    id: 175,
    name: "Body Splash Tododia Acerola e Hibisco",
    brand: "NATURA",
    collection: "Tododia",
    size: "200ml",
    price: 32.95,
    category: "Body Splash",
    image: "/images/products/natura/acerola-hibisco-splash.png",
    groups: [
      "CORPO E BANHO",
      "PERFUMARIA"
    ],
    description: "Notas cítricas e vibrantes de acerola com o toque floral do hibisco. Muita energia para o dia."
  },
  {
    id: 176,
    name: "Body Splash Tododia Amora e Flor de Pêssego",
    brand: "NATURA",
    collection: "Tododia",
    size: "200ml",
    price: 32.95,
    category: "Body Splash",
    image: "/images/products/natura/amora-pessego-splash.png",
    groups: [
      "CORPO E BANHO",
      "PERFUMARIA"
    ],
    description: "Fragrância adocicada e envolvente. Notas frutais de amora combinadas com flores."
  },
  {
    id: 177,
    name: "Body Splash Tododia Jambo Rosa e Flor de Caju",
    brand: "NATURA",
    collection: "Tododia",
    size: "200ml",
    price: 32.95,
    category: "Body Splash",
    image: "/images/products/natura/jambo-caju-splash.png",
    groups: [
      "CORPO E BANHO",
      "PERFUMARIA"
    ],
    description: "Fragrância floral delicada com notas frutais. Toque suave e feminino."
  },
  {
    id: 178,
    name: "Creme Nutritivo Tododia Amora e Flor de Pêssego",
    brand: "NATURA",
    collection: "Tododia",
    size: "400ml",
    price: 38.95,
    category: "Hidratante",
    image: "/images/products/natura/amora-pessego-creme.png",
    groups: [
      "CORPO E BANHO",
      "HIDRATAÇÃO CORPORAL"
    ],
    description: "Nutrição prebiótica que se adapta à sua pele. Deixa a pele firme e ultramacia."
  },
  {
    id: 179,
    name: "Creme Nutritivo Tododia Jambo Rosa e Flor de Caju",
    brand: "NATURA",
    collection: "Tododia",
    size: "400ml",
    price: 38.95,
    category: "Hidratante",
    image: "/images/products/natura/jambo-caju-creme.png",
    groups: [
      "CORPO E BANHO",
      "HIDRATAÇÃO CORPORAL"
    ],
    description: "Pele firme e macia com nutrição inteligente. Fragrância floral marcante."
  },
  {
    id: 180,
    name: "Creme Nutritivo Tododia Manga Rosa e Água de Coco",
    brand: "NATURA",
    collection: "Tododia",
    size: "400ml",
    price: 41.95,
    category: "Hidratante",
    image: "/images/products/natura/manga-rosa-creme.png",
    groups: [
      "CORPO E BANHO",
      "HIDRATAÇÃO CORPORAL"
    ],
    description: "Toque geladinho e refrescante, ideal para o verão. Nutre e acalma a pele."
  },
  {
    id: 181,
    name: "Óleo Bifásico Tododia Macadâmia",
    brand: "NATURA",
    collection: "Tododia",
    size: "120ml",
    price: 27.95,
    category: "Tratamento",
    image: "/images/products/natura/macadamia-oleo.png",
    groups: [
      "CORPO E BANHO",
      "OLEOS",
      "HIDRATAÇÃO CORPORAL"
    ],
    description: "Óleo bifásico para corpo com macadamia",
    usage: "Aplicar no corpo"
  },
  {
    id: 182,
    name: "Esfoliante para o Corpo Tododia Macadâmia",
    brand: "NATURA",
    collection: "Tododia",
    size: "300g",
    price: 29.95,
    category: "Esfoliante",
    image: "/images/products/natura/macadamia-esfoliante.png",
    groups: [
      "CORPO E BANHO",
      "HIDRATAÇÃO CORPORAL"
    ],
    description: "Pele renovada e macia. Remove impurezas e células mortas com delicadeza."
  },
  {
    id: 183,
    name: "Polpa Hidratante Ekos Pitanga",
    brand: "NATURA",
    collection: "Ekos",
    size: "400ml",
    price: 49.95,
    category: "Hidratante",
    image: "/images/products/natura/ekos-pitanga-polpa.png",
    groups: [
      "CORPO E BANHO",
      "HIDRATAÇÃO CORPORAL"
    ],
    description: "Hidratação refrescante com óleo essencial de pitanga. Deixa a pele perfumada e radiante."
  },
  {
    id: 184,
    name: "Polpa Hidratante Ekos Açaí",
    brand: "NATURA",
    collection: "Ekos",
    size: "400ml",
    price: 45.95,
    category: "Hidratante",
    image: "/images/products/natura/ekos-acai-polpa.png",
    groups: [
      "CORPO E BANHO",
      "HIDRATAÇÃO CORPORAL"
    ],
    description: "Produto corporal com açaí",
    usage: "Aplicar no corpo"
  },
  {
    id: 185,
    name: "Colônia Frescor Ekos Pitanga",
    brand: "NATURA",
    collection: "Ekos",
    size: "150ml",
    price: 42.95,
    category: "Body Splash",
    image: "/images/products/natura/ekos-pitanga-frescor.png",
    groups: [
      "CORPO E BANHO",
      "PERFUMARIA"
    ],
    description: "Fragrância vibrante das folhas de pitanga. Frescor imediato e prolongado."
  },
  {
    id: 186,
    name: "Óleo Trifásico Ekos Andiroba",
    brand: "NATURA",
    collection: "Ekos",
    size: "200ml",
    price: 42.95,
    category: "Tratamento",
    image: "/images/products/natura/ekos-andiroba-oleo.png",
    groups: [
      "CORPO E BANHO",
      "OLEOS",
      "HIDRATAÇÃO CORPORAL"
    ],
    description: "Óleo trifásico com andiroba para corpo",
    usage: "Aplicar no corpo"
  },
  {
    id: 187,
    name: "Shampoo Cachos Sim",
    brand: "HASKELL",
    collection: "Cachos Sim",
    size: "1L",
    price: 21.95,
    category: "Shampoo",
    image: "/images/products/haskell/cachos-sim-shampoo-1l.webp",
    groups: [
      "NUTRIÇÃO",
      "CACHOS PERFEITOS"
    ],
    description: "Prepara o cabelo para o tratamento intensivo. Possui pH equilibrado e evita a alta rigidez característica de shampoo.\r\n    • Ideal para recuperar os cabelos descoloridos;\r\n    • A linha possui ação antiemborrachamento e antiporosidade, protegendo os fios de danos futuros;\r\n    • Sua formulação conta com complexo de proteínas e vinagre balsâmico que, juntos, promovem a regeneração capilar de maneira intensiva, repondo a massa proteica nos fios.\r\nDireção olfativa: floral frutal",
    usage: "nos cabelos molhados, aplique o shampoo, massageando o couro cabeludo em suaves movimentos circulares. Enxágue bem. Se necessário, repita a aplicação. Potencialize os resultados utilizando toda a linha Bendito Loiro."
  }
];