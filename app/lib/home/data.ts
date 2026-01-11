export interface Market {
  name: string;
  icon: string;
  description: string;
  items: string[];
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Plan {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlight?: boolean;
}

export const markets: Market[] = [
  {
    name: "Criptomoedas",
    icon: "🪙",
    description: "Mais de 100 pares de criptomoedas disponíveis",
    items: [
      "Bitcoin, Ethereum, Solana e principais altcoins",
      "Tokens DeFi e projetos emergentes",
      "Staking e oportunidades de yield",
      "Trading 24/7 com liquidez global",
    ],
  },
  {
    name: "Futuros Americanos",
    icon: "🇺🇸",
    description: "Principais índices e commodities",
    items: [
      "S&P 500, NASDAQ 100, Dow Jones",
      "Russell 2000 e outros índices",
      "Commodities (Ouro, Prata, Petróleo)",
      "Treasuries e taxas de juros",
    ],
  },
  {
    name: "Futuros Asiáticos",
    icon: "🇯🇵",
    description: "Mercados asiáticos em tempo real",
    items: [
      "Nikkei 225 (Japão)",
      "Hang Seng (Hong Kong)",
      "SGX (Singapura)",
      "KOSPI (Coreia do Sul)",
    ],
  },
  {
    name: "Futuros Brasileiros",
    icon: "🇧🇷",
    description: "Mercado doméstico completo",
    items: [
      "Ibovespa e Mini-Índice",
      "Dólar, Euro e outras moedas",
      "Commodities agrícolas (Café, Boi, Soja)",
      "DI e taxas de juros",
    ],
  },
  {
    name: "Fundos Imobiliários",
    icon: "🏢",
    description: "FIIs de diversos segmentos",
    items: [
      "FIIs de Lajes Corporativas",
      "FIIs de Galpões Logísticos",
      "FIIs de Shopping Centers",
      "FIIs de Papel (CRIs)",
      "FIIs Híbridos e FOFs",
    ],
  },
  {
    name: "ETFs",
    icon: "📊",
    description: "Nacionais e internacionais",
    items: [
      "ETFs de Índices (BOVA11, SMAL11, IVVB11)",
      "ETFs Setoriais (Tecnologia, Saúde, Energia)",
      "ETFs Internacionais (S&P 500, Nasdaq, Emergentes)",
      "ETFs Temáticos (ESG, Dividendos, Smart Beta)",
    ],
  },
];

export const features: Feature[] = [
  {
    title: "Dashboard Unificado",
    description:
      "Visualize todos os seus investimentos em uma única tela com gráficos interativos e performance consolidada.",
  },
  {
    title: "IA para Carteiras",
    description:
      "Nossa inteligência artificial analisa seu perfil e cria carteiras personalizadas e otimizadas automaticamente.",
  },
  {
    title: "Análise em Tempo Real",
    description:
      "Análise técnica e fundamentalista automatizada com sinais de compra/venda baseados em múltiplos indicadores.",
  },
  {
    title: "Alertas Inteligentes",
    description:
      "Receba notificações personalizadas sobre oportunidades, riscos e movimentos importantes do mercado.",
  },
  {
    title: "Simulador e Backtesting",
    description:
      "Teste estratégias antes de investir com simulação de cenários históricos e projeções de retorno.",
  },
  {
    title: "Transparência Total",
    description:
      "Sem taxas ocultas. Todos os custos são claramente informados com dados em tempo real e rentabilidade líquida.",
  },
];

export const steps = [
  {
    title: "Cadastro e Perfil",
    description:
      "Crie sua conta em minutos e complete o questionário de perfil para definir seus objetivos financeiros.",
  },
  {
    title: "Análise pela IA",
    description:
      "Nosso sistema analisa seu perfil e processa milhares de cenários para gerar recomendações personalizadas.",
  },
  {
    title: "Construção da Carteira",
    description:
      "Revise a carteira sugerida pela IA, ajuste conforme sua preferência e aprove para iniciar os investimentos.",
  },
  {
    title: "Gestão Contínua",
    description:
      "Monitore em tempo real, receba alertas inteligentes e rebalanceie quando necessário com suporte da IA.",
  },
];

export const plans: Plan[] = [
  {
    name: "Iniciante",
    price: "R$ 0",
    period: "/mês",
    features: [
      "Dashboard básico",
      "Acesso a cotações em tempo real",
      "1 carteira simulada",
      "Conteúdo educacional básico",
      "Suporte por email",
    ],
  },
  {
    name: "Investidor",
    price: "R$ 49,90",
    period: "/mês",
    features: [
      "Tudo do plano Iniciante",
      "IA para montagem de carteiras",
      "Até 5 carteiras ativas",
      "Alertas ilimitados",
      "Análise técnica e fundamentalista",
      "Relatórios avançados",
      "Suporte prioritário",
    ],
    highlight: true,
  },
  {
    name: "Trader",
    price: "R$ 149,90",
    period: "/mês",
    features: [
      "Tudo do plano Investidor",
      "Carteiras ilimitadas",
      "API para integração",
      "Backtesting avançado",
      "Dados históricos completos",
      "Análise preditiva premium",
      "Consultoria mensal com especialista",
      "Acesso antecipado a novos recursos",
    ],
  },
];

export const faqs: FAQ[] = [
  {
    question: "O Wolfstoke é uma corretora?",
    answer:
      "Não, somos uma plataforma de tecnologia que integra acesso a múltiplos mercados através de parcerias com corretoras regulamentadas.",
  },
  {
    question: "Preciso ter experiência para usar?",
    answer:
      "Não. Nossa IA foi desenvolvida para atender desde iniciantes até traders experientes, guiando você passo a passo.",
  },
  {
    question: "Como funciona a IA de montagem de carteiras?",
    answer:
      "Nossa IA analisa seu perfil, objetivos e mercados globalmente para criar carteiras otimizadas e diversificadas automaticamente, considerando risco, correlação e tendências de mercado.",
  },
  {
    question: "Meus dados estão seguros?",
    answer:
      "Sim. Utilizamos criptografia de nível bancário (SSL/TLS 256-bit), autenticação multifator, conformidade total com LGPD e auditoria independente.",
  },
  {
    question: "Existem taxas ocultas?",
    answer:
      "Não. Todos os custos são claramente informados antes de qualquer operação. Transparência total em todas as transações.",
  },
  {
    question: "Qual o investimento mínimo?",
    answer:
      "Varia por classe de ativo, mas é possível começar com valores a partir de R$ 100, dependendo do mercado escolhido.",
  },
];
