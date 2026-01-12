export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  slug: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Como começar a investir em criptomoedas?",
    excerpt:
      "Guia completo para iniciantes que querem entender o mercado de criptomoedas, desde a criação de uma conta até estratégias básicas de investimento.",
    category: "Criptomoedas",
    date: "2025-01-10",
    author: "Equipe Wolfstoke",
    readTime: "8 min",
    slug: "como-comecar-investir-criptomoedas",
    featured: true,
  },
  {
    id: "2",
    title: "O que são ETFs e como funcionam?",
    excerpt:
      "Entenda tudo sobre Exchange Traded Funds no Brasil: como funcionam, quais são os tipos disponíveis, tributação e estratégias de alocação.",
    category: "ETFs",
    date: "2025-01-08",
    author: "Equipe Wolfstoke",
    readTime: "12 min",
    slug: "o-que-sao-etfs-como-funcionam",
    featured: true,
  },
  {
    id: "3",
    title: "Futuros americanos: guia completo para iniciantes",
    excerpt:
      "Aprenda sobre trading de futuros nos mercados americanos, incluindo S&P 500, NASDAQ e commodities. Tudo que você precisa saber para começar.",
    category: "Futuros",
    date: "2025-01-05",
    author: "Equipe Wolfstoke",
    readTime: "10 min",
    slug: "futuros-americanos-guia-completo",
  },
  {
    id: "4",
    title: "Diversificação de carteira: por que é importante?",
    excerpt:
      "Descubra como a diversificação pode reduzir riscos e melhorar retornos. Estratégias práticas para montar uma carteira diversificada.",
    category: "Educação",
    date: "2025-01-03",
    author: "Equipe Wolfstoke",
    readTime: "7 min",
    slug: "diversificacao-carteira-importancia",
  },
  {
    id: "5",
    title: "Fundos Imobiliários (FIIs): tudo que você precisa saber",
    excerpt:
      "Guia completo sobre FIIs: tipos, segmentos, tributação, liquidez e como escolher os melhores fundos para sua carteira.",
    category: "FIIs",
    date: "2025-01-01",
    author: "Equipe Wolfstoke",
    readTime: "15 min",
    slug: "fundos-imobiliarios-fii-guia-completo",
  },
  {
    id: "6",
    title: "Análise técnica vs análise fundamentalista",
    excerpt:
      "Entenda as diferenças entre análise técnica e fundamentalista, quando usar cada uma e como combiná-las para tomar melhores decisões de investimento.",
    category: "Educação",
    date: "2024-12-28",
    author: "Equipe Wolfstoke",
    readTime: "9 min",
    slug: "analise-tecnica-vs-fundamentalista",
  },
];

export const categories = [
  "Todos",
  "Criptomoedas",
  "ETFs",
  "Futuros",
  "FIIs",
  "Educação",
];
