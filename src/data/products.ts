export interface Product {
  id: number;
  name: string;
  brand: "HASKELL" | "LOLA" | "EUDORA" | "BOTICARIO" | "GOLDSPELL";
  collection?: string;
  size?: string;
  price: number;
  category: string;
  image: string;
  featured?: boolean;
  description: string;
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
    price: 21.95,
    category: "Shampoo",
    image: "/cavalo-forte-shampoo.png",

    groups: ["CRESCIMENTO/FORTALECIMENTO", "CACHOS PERFEITOS"],

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

    groups: ["CRESCIMENTO/FORTALECIMENTO", "CACHOS PERFEITOS"],

    description: "Desembaraça e sela as cutículas, proporcionando força e brilho. Auxilia no combate à quebra e pontas duplas."
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

    groups: ["CRESCIMENTO/FORTALECIMENTO", "CACHOS PERFEITOS"],

    description: "Tratamento profundo que reconstrói a fibra capilar, proporcionando força, brilho e crescimento acelerado."
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

    groups: ["CRESCIMENTO/FORTALECIMENTO", "CACHOS PERFEITOS", "FINALIZADORES"],

    description: "Finalizador sem enxágue que protege os fios, facilita o pentear e reforça a estrutura capilar."
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

    groups: ["OLEOS"],

    description: "Concentrado de vitaminas que potencializa a hidratação e o fortalecimento quando adicionado à máscara."
  },
  {
    id: 8,
    name: "Selante de Pontas Cavalo Forte",
    brand: "HASKELL",
    collection: "Cavalo Forte",
    size: "35ml",
    price: 21.95,
    category: "Tratamento",
    image: "/cavalo-forte-selante-pontas.png",

    groups: ["CRESCIMENTO/FORTALECIMENTO", "CACHOS PERFEITOS"],

    description: "Repara e une as pontas duplas, recuperando a resistência e o aspecto saudável dos fios."
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

    groups: ["LOIROS ILUMINADOS"],

    description: "Reconstrução para cabelos descoloridos. Limpa suavemente enquanto repõe massa e combate o emborrachamento."
  },
  {
    id: 10,
    name: "Condicionador Bendito Loiro",
    brand: "HASKELL",
    collection: "Bendito Loiro",
    size: "300ml",
    price: 21.95,
    category: "Condicionador",
    image: "/bendito-loiro-condicionador.png",

    groups: ["LOIROS ILUMINADOS"],

    description: "Sela as cutículas e devolve a emoliência aos fios loiros, combatendo a porosidade e o frizz."
  },
  {
    id: 11,
    name: "Máscara Bendito Loiro",
    brand: "HASKELL",
    collection: "Bendito Loiro",
    size: "300g",
    price: 21.95,
    category: "Máscara",
    image: "/bendito-loiro-mascara.png",

    groups: ["LOIROS ILUMINADOS"],

    description: "Regeneração intensiva com Vinagre Balsâmico e Complexo de Proteínas. Recupera a resistência e o brilho dos loiros."
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

    groups: ["LOIROS ILUMINADOS", "FINALIZADORES"],

    description: "Protetor térmico e solar que blinda os fios contra danos, reduz o frizz e previne o amarelamento."
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

    groups: ["LOIROS ILUMINADOS"],

    description: "Reposição de massa proteica para cabelos extremamente danificados. Devolve a elasticidade e força."
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

    groups: ["NUTRIÇÃO", "CACHOS PERFEITOS"],

    description: "Low Poo. Limpeza suave com Óleo de Coco e Colágeno, preservando a hidratação natural dos cachos."
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

    groups: ["NUTRIÇÃO", "CACHOS PERFEITOS"],

    description: "Nutre e define os cachos, facilitando o desembaraço e combatendo o frizz."
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

    groups: ["NUTRIÇÃO", "CACHOS PERFEITOS"],

    description: "Hidratação e nutrição intensa. Recupera a elasticidade e memoriza a forma dos cachos."
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

    groups: ["CACHOS PERFEITOS", "FINALIZADORES"],

    description: "Finalizador que ativa e define os cachos, com proteção térmica e efeito memória."
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

    groups: ["CACHOS PERFEITOS", "FINALIZADORES"],

    description: "Textura inovadora que une a definição do gel com a nutrição do creme. Cachos definidos sem rigidez."
  },
  {
    id: 21,
    name: "Shampoo Murumuru",
    brand: "HASKELL",
    collection: "Murumuru",
    size: "300ml",
    price: 21.95,
    category: "Shampoo",
    image: "/murumuru-shampoo-300ml.png",

    groups: ["NUTRIÇÃO", "CACHOS PERFEITOS"],

    description: "Nutrição prolongada para cabelos secos. Limpa enquanto repõe nutrientes essenciais."
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

    groups: ["NUTRIÇÃO", "CACHOS PERFEITOS"],

    description: "Sela as cutículas e devolve a maciez e o brilho aos cabelos ressecados."
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

    groups: ["NUTRIÇÃO", "CACHOS PERFEITOS"],

    description: "Manteiga hidratante de alta performance. Penetra profundamente na fibra para nutrir e recuperar a elasticidade."
  },
  {
    id: 25,
    name: "Leave-in en Crème Murumuru",
    brand: "HASKELL",
    collection: "Murumuru",
    size: "150g",
    price: 21.95,
    category: "Leave-in",
    image: "/murumuru-leave-in-150g.png",

    groups: ["NUTRIÇÃO", "CACHOS PERFEITOS", "FINALIZADORES"],

    description: "Protege contra o ressecamento, facilita o pentear e controla o volume e o frizz."
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

    groups: ["OLEOS"],

    description: "Óleo nutritivo concentrado. Pode ser usado puro ou misturado à máscara para potencializar a nutrição."
  },
  {
    id: 27,
    name: "Shampoo Pós Progressiva",
    brand: "HASKELL",
    collection: "Pós Progressiva",
    size: "300ml",
    price: 21.95,
    category: "Shampoo",
    image: "/pos-progressiva-shampoo-300ml.png",

    groups: ["ALISAMENTO/CONTROLE DE FRIZZ"],

    description: "Prolonga o efeito liso. Limpeza suave com Mix de Óleos que mantém os fios alinhados."
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

    groups: ["ALISAMENTO/CONTROLE DE FRIZZ"],

    description: "Hidrata e reduz o frizz, mantendo o cabelo liso e disciplinado por mais tempo."
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

    groups: ["ALISAMENTO/CONTROLE DE FRIZZ"],

    description: "Tratamento intensivo que repara os danos da química e preserva o alisamento."
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

    groups: ["ALISAMENTO/CONTROLE DE FRIZZ", "FINALIZADORES"],

    description: "Leave-in com proteção térmica. Desembaraça, dá brilho e mantém o efeito liso."
  },
  {
    id: 31,
    name: "Condicionador Ela é Carioca",
    brand: "LOLA",
    collection: "Ela é Carioca",
    size: "500g",
    price: 21.95,
    category: "Condicionador",
    image: "/ela-e-carioca-condicionador-500g.png",

    groups: ["NUTRIÇÃO", "HIDRATAÇÃO", "CACHOS PERFEITOS"],

    description: "Nutrição e hidratação profunda para todos os tipos de cabelo. Protege contra danos climáticos e restaura a maciez."
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

    description: "Desembaraça e define os cachos, proporcionando emoliência e movimento natural."
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

    groups: ["HIDRATAÇÃO"],

    description: "Tratamento diário para cabelos sedentos de vida. Restaura a barreira de hidratação natural e dá suavidade."
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

    groups: ["RECONSTRUÇÃO"],

    description: "Reparação molecular que combate o frizz e o ressecamento. Ideal para cabelos quimicamente tratados."
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

    groups: ["LOIROS ILUMINADOS"],

    description: "Ilumina e realça a cor dos cabelos loiros naturais ou tingidos. Com óleo essencial de Limão Siciliano e Camomila."
  },
  {
    id: 36,
    name: "Condicionador Ondulados Lola",
    brand: "LOLA",
    collection: "Ondulados",
    size: "500g",
    price: 21.95,
    category: "Condicionador",
    image: "/ondulados-condicionador-500g.png",

    groups: ["ONDULADOS"],

    description: "Define as ondas e controla o frizz, proporcionando brilho e leveza."
  },
  {
    id: 37,
    name: "Condicionador/Co Wash Comigo Ninguém Pode",
    brand: "LOLA",
    collection: "Comigo Ninguém Pode",
    size: "450g",
    price: 21.95,
    category: "Condicionador",
    image: "/comigo-ninguem-pode-co-wash-450g.png",

    groups: ["ONDULADOS", "ALISAMENTO/CONTROLE DE FRIZZ"],

    description: "Limpeza suave e condicionamento em um só passo. Ideal para técnicas No Poo e Co-Wash."
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

    groups: ["CACHOS PERFEITOS", "FINALIZADORES"],

    description: "Ativador de cachos com óleo de Buriti. Nutre e define, proporcionando brilho intenso."
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

    groups: ["FINALIZADORES"],

    description: "Finalizador 3 em 1: modelador, protetor térmico e hidratante. Controla o frizz e define."
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

    groups: ["CACHOS PERFEITOS", "FINALIZADORES"],

    description: "Creme de pentear multifuncional que desembaraça, hidrata e dá brilho. Pode ser usado como condicionador."
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

    groups: ["CACHOS PERFEITOS", "FINALIZADORES"],

    description: "Modelador de cachos com extrato de Goiaba. Define e retém a umidade, combatendo o frizz."
  },
  {
    id: 42,
    name: "Creme Texturizador Ondulados Lola",
    brand: "LOLA",
    collection: "Ondulados",
    size: "500g",
    price: 21.95,
    category: "Styling",
    image: "/ondulados-creme-texturizador-500g.png",

    groups: ["ONDULADOS", "FINALIZADORES"],

    description: "Texturizador para ondas definidas e com movimento. Controla o volume sem pesar."
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

    groups: ["TRANSIÇÃO CAPILAR", "FINALIZADORES"],

    description: "Estimula a formação de cachos em cabelos em transição. Disfarça a diferença de texturas."
  },
  {
    id: 44,
    name: "Finalizador Leave In Danos Vorazes",
    brand: "LOLA",
    collection: "Danos Vorazes",
    size: "200ml",
    price: 15.95,
    category: "Leave-in",
    image: "/danos-vorazes-leave-in-200ml.png",

    groups: ["ONDULADOS", "CACHOS PERFEITOS", "FINALIZADORES"],

    description: "Finalizador de reparação imediata. Sela as cutículas, dá brilho intenso e controla o frizz."
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

    groups: ["CACHOS PERFEITOS", "FINALIZADORES"],

    description: "Gel nutritivo para alta definição. Fixa os cachos sem ressecar."
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
    groups: ["HIDRATAÇÃO"],

    description: "Tratamento de reparação total e instantânea. Recupera cabelos danificados e quimicamente tratados em uma aplicação."
  },
  {
    id: 47,
    name: "Máscara Danos Vorazes",
    brand: "LOLA",
    collection: "Danos Vorazes",
    size: "450g",
    price: 18.95,
    category: "Máscara",
    image: "/danos-vorazes-mascara-450g.png",

    groups: ["ONDULADOS", "CACHOS PERFEITOS"],

    description: "Reparação intensiva com Cannabinoid Active System (CBA) e Hair Kombucha. Devolve a vitalidade e saúde aos fios."
  },
  {
    id: 48,
    name: "Máscara Dream Cream",
    brand: "LOLA",
    collection: "Dream Cream",
    size: "200g",
    price: 12.95,
    category: "Máscara",
    image: "/dream-cream-mascara-200g.png",

    groups: ["HIDRATAÇÃO"],

    description: "Máscara super hidratante para cabelos secos e rebeldes. Recupera a fibra capilar e controla o volume."
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

    groups: ["NUTRIÇÃO", "HIDRATAÇÃO", "CACHOS PERFEITOS"],

    description: "Hidronutrição profunda. Repõe a umidade e nutrientes perdidos, deixando os cabelos macios e sedosos."
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

    groups: ["LOIROS ILUMINADOS"],

    description: "Restaura e ilumina cabelos loiros. Com infusão de Camomila e Limão Siciliano."
  },
  {
    id: 51,
    name: "Máscara Densidade",
    brand: "LOLA",
    collection: "Densidade",
    size: "230g",
    price: 15.95,
    category: "Máscara",
    image: "/densidade-mascara-230g.png",

    groups: ["ALISAMENTO/CONTROLE DE FRIZZ", "CRESCIMENTO/FORTALECIMENTO", "RECONSTRUÇÃO"],

    description: "Restaura a densidade de cabelos finos e fracos. Fortalece a fibra e previne a quebra."
  },
  {
    id: 52,
    name: "Máscara Disciplinante Xapadinha",
    brand: "LOLA",
    collection: "Xapadinha",
    size: "100g",
    price: 15.95,
    category: "Máscara",
    image: "/xapadinha-mascara-disciplinante-100g.png",

    groups: ["ALISAMENTO/CONTROLE DE FRIZZ"],

    description: "Alinhamento imediato dos fios. Reduz o frizz em até 40% e proporciona brilho espelhado."
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

    groups: ["RECONSTRUÇÃO"],

    description: "Restauração molecular ultra potente. Repara danos extremos e fortalece a fibra capilar."
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

    description: "Hidratação profunda para cachos. Penetra na fibra capilar, devolvendo o balanço e a definição."
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

    groups: ["CRONOGRAMA CAPILAR", "HIDRATAÇÃO"],

    description: "Hidratação com Banana e Aloe Vera. Repõe a água dos fios, deixando-os macios e brilhantes."
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

    groups: ["LOIROS ILUMINADOS"],

    description: "Matiza e neutraliza os tons amarelados e alaranjados dos cabelos loiros e descoloridos."
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

    groups: ["CRONOGRAMA CAPILAR", "NUTRIÇÃO"],

    description: "Nutrição com Abacaxi e Manteiga de Bacuri. Repõe os lipídios e combate o ressecamento."
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

    groups: ["CRONOGRAMA CAPILAR", "RECONSTRUÇÃO"],

    description: "Versão 100g da Máscara de Reconstrução Be(m)dita Ghee."
  },
  {
    id: 62,
    name: "Máscara Reconst. Argan Oil",
    brand: "LOLA",
    collection: "Argan Oil",
    size: "230g",
    price: 12.95,
    category: "Máscara",
    image: "/argan-oil-mascara-230g.png",

    groups: ["RECONSTRUÇÃO", "OLEOS"],

    description: "Reconstrução rica em Óleo de Argan. Preenche as áreas danificadas da cutícula capilar."
  },
  {
    id: 63,
    name: "Máscara Restauradora Tarja Preta",
    brand: "LOLA",
    collection: "Tarja Preta",
    size: "230g",
    price: 18.95,
    category: "Máscara",
    image: "/tarja-preta-mascara-230g.png",

    groups: ["RECONSTRUÇÃO"],

    description: "Máscara restauradora intensiva com Queratina Vegetal. Repara danos profundos e devolve a elasticidade."
  },
  {
    id: 64,
    name: "O Umidificador Que Sabia Demais",
    brand: "LOLA",
    collection: "Lola",
    size: "250ml",
    price: 15.95,
    category: "Styling",
    image: "/umidificador-que-sabia-demais-250g.png",

    groups: ["TRANSIÇÃO CAPILAR", "FINALIZADORES"],

    description: "Umidificador de cachos que define e controla o frizz sem pesar. Ideal para day after."
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

    groups: ["OLEOS"],

    description: "Óleo multifuncional com proteção térmica. Sela as pontas, dá brilho e controla o frizz."
  },
  {
    id: 66,
    name: "Óleo Açaí/Pracaxi Pinga",
    brand: "LOLA",
    collection: "Pinga",
    size: "50ml",
    price: 18.95,
    category: "Tratamento",
    image: "/pinga-acai-pracaxi-oleo-50ml.png",

    groups: ["OLEOS"],

    description: "Óleo de tratamento pré e pós shampoo. Nutre, protege a cor e previne o desbotamento."
  },
  {
    id: 67,
    name: "Óleo Argan/Pracaxi",
    brand: "LOLA",
    collection: "Lola",
    size: "50ml",
    price: 15.95,
    category: "Tratamento",
    image: "/argan-oil-50ml.png",

    groups: ["OLEOS"],

    description: "Óleo finalizador rico em Argan. Hidrata, dá brilho e controla o frizz."
  },
  {
    id: 68,
    name: "Óleo Disciplinante Xapadinha",
    brand: "LOLA",
    collection: "Xapadinha",
    size: "50ml",
    price: 21.95,
    category: "Tratamento",
    image: "/xapadinha-oleo-disciplinante-50ml.png",

    groups: ["ALISAMENTO/CONTROLE DE FRIZZ", "OLEOS"],

    description: "Óleo disciplinante com proteção térmica. Garante brilho espelhado e controle do frizz por 24h."
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

    groups: ["OLEOS"],

    description: "Óleo hidratante bifásico. Pode ser usado como pré-shampoo ou finalizador para maciez extra."
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

    groups: ["OLEOS"],

    description: "Óleo iluminador para loiros. Realça o brilho e protege contra o calor do secador."
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

    groups: ["OLEOS"],

    description: "Óleo nutritivo para cabelos porosos. Repõe lipídios e devolve a vitalidade."
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

    groups: ["OLEOS"],

    description: "Óleo reconstrutor para cabelos quebradiços. Fortalece e protege contra a quebra."
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

    groups: ["NUTRIÇÃO", "HIDRATAÇÃO", "CACHOS PERFEITOS"],

    description: "Proteína concentrada para reposição de massa. Fortalece e encorpa os fios finos."
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

    groups: ["CACHOS PERFEITOS", "FINALIZADORES"],

    description: "Spray reativador para o day after. Revitaliza os cachos, reduz o frizz e perfuma."
  },
  {
    id: 75,
    name: "Redutor Volume Vintage Girls",
    brand: "LOLA",
    collection: "Vintage Girls",
    size: "100g",
    price: 12.95,
    category: "Tratamento",
    image: "/vintage-girls-redutor-volume-100g.png",

    groups: ["ALISAMENTO/CONTROLE DE FRIZZ"],

    description: "Creme alisante e redutor de volume. Alinha os fios e reduz o frizz com fórmula suave."
  },
  {
    id: 76,
    name: "Reparador/Booster Danos Vorazes",
    brand: "LOLA",
    collection: "Danos Vorazes",
    size: "250ml",
    price: 18.95,
    category: "Tratamento",
    image: "/danos-vorazes-booster-250ml.png",

    groups: ["ONDULADOS", "CACHOS PERFEITOS"],

    description: "Booster de reparação imediata. Recupera a estrutura do fio danificado em segundos."
  },
  {
    id: 77,
    name: "Shampoo Dream",
    brand: "LOLA",
    collection: "Dream",
    size: "250ml",
    price: 18.95,
    category: "Shampoo",
    image: "/dream-shampoo-250ml.png",

    groups: ["HIDRATAÇÃO"],

    description: "Shampoo super hidratante para cabelos secos e rebeldes. Limpa suavemente e acalma os fios."
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

    groups: ["NUTRIÇÃO", "HIDRATAÇÃO", "CACHOS PERFEITOS"],

    description: "Shampoo nutritivo que limpa sem agredir. Prepara os fios para o tratamento hidronutritivo."
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

    groups: ["RECONSTRUÇÃO"],

    description: "Shampoo de limpeza profunda e reparação molecular. Remove impurezas e fortalece."
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

    groups: ["LOIROS ILUMINADOS"],

    description: "Shampoo iluminador para loiros. Realça os reflexos dourados e dá brilho."
  },
  {
    id: 81,
    name: "Shampoo Densidade",
    brand: "LOLA",
    collection: "Densidade",
    size: "250ml",
    price: 15.95,
    category: "Shampoo",
    image: "/densidade-shampoo-250ml.png",

    groups: ["ALISAMENTO/CONTROLE DE FRIZZ", "CRESCIMENTO/FORTALECIMENTO", "RECONSTRUÇÃO"],

    description: "Shampoo restaurador de densidade. Fortalece a raiz e encorpa os fios finos."
  },
  {
    id: 82,
    name: "Shampoo Fortificante Danos Vorazes",
    brand: "LOLA",
    collection: "Danos Vorazes",
    size: "250ml",
    price: 18.95,
    category: "Shampoo",
    image: "/danos-vorazes-shampoo-fortificante-250ml.png",

    groups: ["ONDULADOS", "CACHOS PERFEITOS"],

    description: "Shampoo de reparação suave. Limpa e inicia o processo de reconstrução dos fios danificados."
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

    groups: ["CRONOGRAMA CAPILAR", "HIDRATAÇÃO"],

    description: "Shampoo de hidratação. Limpa suavemente e repõe a umidade natural dos fios."
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

    groups: ["HIDRATAÇÃO"],

    description: "Shampoo esfoliante e hidratante. Remove resíduos e prepara o cabelo para a máscara."
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

    groups: ["LOIROS ILUMINADOS"],

    description: "Shampoo matizador violeta. Neutraliza tons amarelados e limpa sem ressecar."
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

    groups: ["CRONOGRAMA CAPILAR", "NUTRIÇÃO"],

    description: "Shampoo nutritivo. Limpa e devolve os lipídios essenciais para a saúde capilar."
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

    groups: ["CRONOGRAMA CAPILAR", "RECONSTRUÇÃO"],

    description: "Shampoo reconstrutor. Fortalece a fibra capilar durante a limpeza."
  },
  {
    id: 88,
    name: "Shampoo Reconstrutor Argan/Pracaxi",
    brand: "LOLA",
    collection: "Argan/Pracaxi",
    size: "250ml",
    price: 12.95,
    category: "Shampoo",
    image: "/argan-pracaxi-shampoo-250ml.png",

    groups: [],

    description: "Shampoo reparador com Óleo de Argan. Limpa e auxilia na reconstrução dos fios."
  },
  {
    id: 89,
    name: "Shampoo Rejuvenescedor Rapunzel",
    brand: "LOLA",
    collection: "Rapunzel",
    size: "250ml",
    price: 15.95,
    category: "Shampoo",
    image: "/rapunzel-shampoo-250ml.png",

    groups: ["CRESCIMENTO/FORTALECIMENTO"],

    description: "Shampoo fortificante que estimula o crescimento e reduz a queda de cabelo."
  },
  {
    id: 90,
    name: "Shampoo S/ Enxágue Plot Twist",
    brand: "LOLA",
    collection: "Plot Twist",
    size: "200ml",
    price: 18.95,
    category: "Shampoo",
    image: "/plot-twist-shampoo-sem-enxague-200ml.png",

    groups: ["HIDRATAÇÃO", "CACHOS PERFEITOS"],

    description: "Shampoo a seco em espuma. Limpa e revitaliza os cachos sem precisar de água."
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

    groups: ["HIDRATAÇÃO"],

    description: "Shampoo em barra esfoliante. Prático, sustentável e com alto poder de limpeza e hidratação."
  },
  {
    id: 92,
    name: "Lyra",
    brand: "EUDORA",
    collection: "Perfumes",
    size: "75ml",
    price: 39.9,
    category: "Perfume",
    image: "/lyra-desodorante-colonia-75ml.png",

    groups: ["PERFUMARIA"],

    description: "Fragrância exuberante e marcante. Notas de frutas vermelhas e flores brancas, ideal para mulheres que brilham."
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
    id: 96,
    name: "Eudora Eau de Parfum",
    brand: "EUDORA",
    collection: "Perfumes",
    size: "75ml",
    price: 39.9,
    category: "Perfume",
    image: "/eudora-eau-de-parfum-75ml.png",

    groups: [],

    description: "O clássico Eau de Parfum da marca. Chipre Amadeirado marcante, com notas de flores e madeiras nobres."
  },
  {
    id: 97,
    name: "Club 6 Intenso",
    brand: "EUDORA",
    collection: "Perfumes",
    size: "95ml",
    price: 39.9,
    category: "Perfume",
    image: "/club-6-intenso-95ml.png",

    groups: ["PERFUMARIA"],

    description: "Para o homem que sabe o que quer. Fragrância Fougère Amadeirada com notas de Cedro e Sândalo."
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

    groups: ["RECONSTRUÇÃO"],

    description: "Reconstrução total para cabelos danificados. Enriquecido com Óleo de Argan e Queratina, recupera 1 ano de danos em 2 semanas."
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

    groups: ["RECONSTRUÇÃO"],

    description: "Desembaraça e reconstrói os fios. Hidratação intensa que acaba com a sensação de cabelos ásperos e porosos."
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

    groups: ["RECONSTRUÇÃO"],

    description: "Tratamento intensivo que oferece o dobro de força aos fios e combate as pontas duplas."
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

    groups: ["NUTRIÇÃO"],

    description: "Limpa sem ressecar e prepara os fios para um brilho espelhado. Com Flor das Geleiras e GlossFix."
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

    groups: ["NUTRIÇÃO"],

    description: "Sela as cutículas e garante brilho intenso por até 72 horas. Devolve a maciez e vitalidade."
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

    groups: ["NUTRIÇÃO"],

    description: "Cria uma película que uniformiza a fibra capilar, proporcionando fios polidos e com brilho extremo."
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

    groups: ["HIDRATAÇÃO"],

    description: "Plástica capilar que corrige lesões do fio. Com Bio Hialurônico, deixa o cabelo mais encorpado e macio."
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

    groups: ["HIDRATAÇÃO"],

    description: "Hidratação tridimensional que age em todas as camadas do fio. Elimina a porosidade e retém a água."
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

    groups: ["HIDRATAÇÃO"],

    description: "Repõe a massa capilar e deixa os fios mais densos e resistentes. Resultado de salão em casa."
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

    groups: ["CRESCIMENTO/FORTALECIMENTO"],

    description: "Estimula o crescimento de novos fios e reduz a queda. Com Prebiótico e Biotina."
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

    groups: ["CRESCIMENTO/FORTALECIMENTO"],

    description: "Fortalece a fibra capilar e previne a quebra, facilitando o crescimento saudável."
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

    groups: ["CRESCIMENTO/FORTALECIMENTO"],

    description: "Ação antiquebra imediata. Prolonga a vida dos fios e garante crescimento de até 3cm em 2 meses."
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

    groups: ["CRESCIMENTO/FORTALECIMENTO"],

    description: "Age diretamente no bulbo capilar, ativando o metabolismo e estimulando o crescimento."
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

    groups: ["ALISAMENTO/CONTROLE DE FRIZZ"],

    description: "Limpeza que alinha os fios. Fórmula com Creatina que bloqueia o frizz e prolonga o liso."
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

    groups: ["ALISAMENTO/CONTROLE DE FRIZZ"],

    description: "Desembaraça e hidrata sem pesar. Mantém os cabelos lisos e disciplinados por mais tempo."
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

    groups: ["ALISAMENTO/CONTROLE DE FRIZZ"],

    description: "Liso perfeito e hidratado. Reduz a porosidade e as pontas duplas, com proteção térmica."
  },
  {
    id: 117,
    name: "Shampoo Siàge Nutri Rosé",
    brand: "EUDORA",
    collection: "Siàge Nutri Rosé",
    size: "250ml",
    price: 18.95,
    category: "Shampoo",
    image: "/siage-nutri-rose-shampoo-250ml.png",

    groups: ["NUTRIÇÃO"],

    description: "Nutrição e reparação da raiz às pontas. Com Elixir de Rosas e Argila Vermelha, não pesa na raiz."
  },
  {
    id: 118,
    name: "Condicionador Siàge Nutri Rosé",
    brand: "EUDORA",
    collection: "Siàge Nutri Rosé",
    size: "200ml",
    price: 18.95,
    category: "Condicionador",
    image: "/siage-nutri-rose-condicionador-200ml.png",

    groups: ["NUTRIÇÃO"],

    description: "Sela as cutículas e previne a tesoura. Repara as pontas duplas e deixa o cabelo macio."
  },
  {
    id: 119,
    name: "Máscara Siàge Nutri Rosé",
    brand: "EUDORA",
    collection: "Siàge Nutri Rosé",
    size: "250g",
    price: 21.95,
    category: "Máscara",
    image: "/siage-nutri-rose-mascara-250g.png",

    groups: ["NUTRIÇÃO"],

    description: "Nutrição profunda com efeito anti-tesoura. Repara instantaneamente a fibra danificada."
  },
  {
    id: 120,
    name: "Shampoo Siàge Hidratação Micelar",
    brand: "EUDORA",
    collection: "Siàge Hidratação Micelar",
    size: "250ml",
    price: 18.95,
    category: "Shampoo",
    image: "/siage-hidratacao-micelar-shampoo-250ml.png",

    groups: ["HIDRATAÇÃO"],

    description: "Limpeza inteligente que remove impurezas sem ressecar. Com Ativos Micelares e Algas Marinhas."
  },
  {
    id: 121,
    name: "Condicionador Siàge Hidratação Micelar",
    brand: "EUDORA",
    collection: "Siàge Hidratação Micelar",
    size: "200ml",
    price: 18.95,
    category: "Condicionador",
    image: "/siage-hidratacao-micelar-condicionador-200ml.png",

    groups: ["HIDRATAÇÃO"],

    description: "Hidratação balanceada. Desembaraça e deixa os fios soltos e com movimento."
  },
  {
    id: 122,
    name: "Máscara Siàge Hidratação Micelar",
    brand: "EUDORA",
    collection: "Siàge Hidratação Micelar",
    size: "250g",
    price: 21.95,
    category: "Máscara",
    image: "/siage-hidratacao-micelar-mascara-250g.png",

    groups: ["HIDRATAÇÃO"],

    description: "Recupera a hidratação dos fios em 1 minuto. Cabelos 3x mais macios e soltos."
  },
  {
    id: 126,
    name: "Shampoo Siàge Men",
    brand: "EUDORA",
    collection: "Siàge Men",
    size: "250ml",
    price: 18.95,
    category: "Shampoo",
    image: "/siage-men-shampoo-250ml.png",

    groups: [],

    description: "Limpeza refrescante e eficaz para o cabelo masculino. Controla a oleosidade e a caspa."
  },
  {
    id: 127,
    name: "Tônico Siàge Men",
    brand: "EUDORA",
    collection: "Siàge Men",
    size: "100ml",
    price: 24.95,
    category: "Tratamento",
    image: "/siage-men-tonico-100ml.png",

    groups: [],

    description: "Combate a queda e estimula o crescimento de novos fios. Fortalece a raiz."
  },
  {
    id: 128,
    name: "Pomada Modeladora Siàge Men",
    brand: "EUDORA",
    collection: "Siàge Men",
    size: "90g",
    price: 18.95,
    category: "Styling",
    image: "/siage-men-pomada-90g.png",

    groups: [],

    description: "Alta fixação e efeito matte. Modela os fios sem deixar resíduos."
  },
  {
    id: 129,
    name: "Shampoo Siàge Remove a Oleosidade",
    brand: "EUDORA",
    collection: "Siàge Remove a Oleosidade",
    size: "250ml",
    price: 18.95,
    category: "Shampoo",
    image: "/siage-remove-oleosidade-shampoo-250ml.png",

    groups: [],

    description: "Controla a oleosidade por até 8 horas. Limpa profundamente sem ressecar as pontas."
  },
  {
    id: 136,
    name: "Body Splash Instance Karité",
    brand: "EUDORA",
    collection: "Instance",
    size: "200ml",
    price: 28.9,
    category: "Body Splash",
    image: "/instance-karite-body-splash.png",

    groups: ["CORPO E BANHO"],

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

    groups: ["CORPO E BANHO"],

    description: "Spray perfumado desodorante corporal com fragrância de baunilha. Proporciona hidratação e fragrância leve para uso diário."
  },
  {
    id: 140,
    name: "Creme Acetinado La Victorie Intense",
    brand: "EUDORA",
    collection: "La Victorie",
    size: "250g",
    price: 36.9,
    category: "Hidratante",
    image: "/la-victorie-intense-creme-acetinado.png",

    groups: ["CORPO E BANHO"],

    description: "Creme acetinado hidratante desodorante corporal. Toque acetinado e hidratação intensa por até 48h com fragrância floral amadeirada."
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

    groups: ["CORPO E BANHO"],

    description: "Creme hidratante corporal com fragrância de frutas vermelhas. Proporciona hidratação e aroma frutado."
  },
  {
    id: 150,
    name: "Esfoliante Instance Frutas Vermelhas",
    brand: "EUDORA",
    collection: "Instance",
    size: "200ml",
    price: 28.9,
    category: "Esfoliante",
    image: "/instance-frutas-vermelhas-esfoliante.png",

    groups: ["CORPO E BANHO"],

    description: "Esfoliante corporal com fragrância de frutas vermelhas. Remove células mortas e deixa a pele suave e hidratada."
  },
  {
    id: 151,
    name: "Máscara Esfoliante Nina Skin",
    brand: "EUDORA",
    collection: "Nina Skin",
    size: "75ml",
    price: 25.9,
    category: "Skincare",
    image: "/nina-skin-esfoliante.png",

    groups: ["SKINCARE"],

    description: "Máscara esfoliante com enzimas naturais. Remove impurezas e células mortas de forma suave, deixando a pele renovada e luminosa."
  },
  {
    id: 152,
    name: "Gel de Limpeza Nina Secrets",
    brand: "EUDORA",
    collection: "Nina Secrets",
    size: "150ml",
    price: 26.9,
    category: "Skincare",
    image: "/nina-secrets-gel-limpeza.png",

    groups: ["SKINCARE"],

    description: "Gel de limpeza facial. Remove impurezas e deixa a pele limpa e fresca."
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

    groups: ["ONDULADOS", "CACHOS PERFEITOS"],

    description: "Shampoo específico para cabelos cacheados e crespos. Define e realça as curvas naturais."
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

    groups: ["ONDULADOS", "CACHOS PERFEITOS"],

    description: "Condicionador que define e realça as curvas naturais dos cabelos cacheados."
  },
  {
    id: 155,
    name: "Óleo de Argan Siàge Reconstrói",
    brand: "EUDORA",
    collection: "Siàge Reconstrói os Fios",
    size: "50ml",
    price: 21.95,
    category: "Tratamento",
    image: "/siage-reconstroi-fios-oleo-argan.png",

    groups: ["OLEOS"],

    description: "Óleo de Argan reparador. Repõe proteínas, perfuma e protege do calor."
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

    groups: ["RECONSTRUÇÃO"],

    description: "Queratina líquida para cauterização. Repõe proteínas e reconstrói a fibra capilar danificada."
  },
  {
    id: 157,
    name: "Balm Siàge Glow Expert",
    brand: "EUDORA",
    collection: "Siàge Glow Expert",
    size: "200ml",
    price: 28.9,
    category: "Tratamento",
    image: "/siage-glow-expert-balm.png",

    groups: ["NUTRIÇÃO", "FINALIZADORES"],

    description: "Balm finalizador que proporciona brilho e luminosidade instantâneos aos fios."
  },
  {
    id: 158,
    name: "Selante Siàge Liso Intenso",
    brand: "EUDORA",
    collection: "Siàge Liso Intenso",
    size: "100ml",
    price: 28.9,
    category: "Tratamento",
    image: "/siage-liso-intenso-selante.png",

    groups: ["ALISAMENTO/CONTROLE DE FRIZZ"],

    description: "Selante finalizador com proteção térmica. Deixa o cabelo liso, brilhante e sem frizz."
  },
  {
    id: 159,
    name: "Shapoo - acidgold",
    brand: "GOLDSPELL",
    collection: "Acid Gold",
    size: "Standard",
    price: 0,
    category: "Tratamento",
    image: "/placeholder.png",

    groups: ["RECONSTRUÇÃO"],

    description: "Produto da linha Goldspell."
  },
  {
    id: 160,
    name: "Condicionador - acidgold",
    brand: "GOLDSPELL",
    collection: "Acid Gold",
    size: "Standard",
    price: 0,
    category: "Tratamento",
    image: "/placeholder.png",

    groups: ["RECONSTRUÇÃO"],

    description: "Produto da linha Goldspell."
  },
  {
    id: 161,
    name: "Mascara - acidgold",
    brand: "GOLDSPELL",
    collection: "Acid Gold",
    size: "Standard",
    price: 0,
    category: "Tratamento",
    image: "",

    groups: ["RECONSTRUÇÃO"],

    description: "Produto da linha Goldspell."
  },
  {
    id: 162,
    name: "Shapoo - Poderosa",
    brand: "GOLDSPELL",
    collection: "Poderosa",
    size: "Standard",
    price: 0,
    category: "Tratamento",
    image: "",

    groups: ["RECONSTRUÇÃO"],

    description: "Produto da linha Goldspell."
  },
  {
    id: 163,
    name: "condicionador - Poderosa",
    brand: "GOLDSPELL",
    collection: "Poderosa",
    size: "Standard",
    price: 0,
    category: "Tratamento",
    image: "",

    groups: ["RECONSTRUÇÃO"],

    description: "Produto da linha Goldspell."
  },
];
