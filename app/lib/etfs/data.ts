export interface ETFCategory {
  name: string;
  description: string;
  items: string[];
  examples?: string[];
}

export interface TaxTable {
  label: string;
  rate: string;
  mechanism: string;
  deadline?: string;
}

export interface StrategyAllocation {
  type: string;
  description: string;
  examples: string[];
  percentage?: string;
}

export const introduction = {
  title: "O Estado da Arte dos ETFs no Brasil",
  subtitle: "Estrutura, Regulação e Estratégias de Alocação",
  description:
    "O Exchange Traded Fund (ETF), ou Fundo de Índice, consolidou-se como uma das inovações financeiras mais disruptivas, oferecendo eficiência operacional, transparência e acessibilidade.",
  definition:
    "Um ETF é um condomínio aberto de ativos, cujas cotas são admitidas à negociação em mercado organizado (B3), desenhado para replicar fielmente as variações e a rentabilidade de um índice de referência (benchmark) reconhecido pela CVM.",
  benefits: [
    "Diversificação instantânea com uma única ordem de compra",
    "Liquidez intradiária (entrada e saída em tempo real)",
    "Transparência total (cotações em tempo real)",
    "Custos reduzidos comparado a fundos tradicionais",
  ],
};

export const mechanism = {
  title: "Mecanismo de Criação e Resgate",
  description:
    "Para compreender a robustez da liquidez dos ETFs, é essencial entender a infraestrutura 'invisível' que sustenta a negociação em bolsa.",
  process: [
    {
      title: "Mercado Secundário",
      description:
        "O investidor de varejo opera exclusivamente no mercado secundário, comprando e vendendo cotas de outros investidores.",
    },
    {
      title: "Agentes Autorizados",
      description:
        "O mercado primário é acessível apenas a Agentes Autorizados (APs) que garantem a aderência do preço ao Valor Patrimonial Líquido (VPL).",
    },
    {
      title: "Arbitragem Automática",
      description:
        "Quando há prêmio ou desconto, os APs criam ou resgatam cotas, mantendo o preço sempre próximo ao valor justo dos ativos.",
    },
  ],
};

export const regulation = {
  title: "Transformação Regulatória: Resolução CVM 175",
  description:
    "O arcabouço legal dos fundos de investimento no Brasil passou por uma revisão tectônica com a Resolução CVM 175, alinhando o mercado local às melhores práticas internacionais.",
  changes: [
    {
      title: "Antes da CVM 175",
      description:
        "Os proventos eram obrigatoriamente reinvestidos, aumentando apenas o valor patrimonial da cota (ETFs de acumulação).",
    },
    {
      title: "Depois da CVM 175",
      description:
        "Permitida a distribuição direta de dividendos aos cotistas, criando os ETFs de Renda (Distributing ETFs).",
    },
    {
      title: "Impacto Tributário",
      description:
        "Dividendos de ETFs sofrem retenção de 15% na fonte, diferentemente dos dividendos de ações (isentos para pessoa física).",
    },
  ],
};

export const categories: ETFCategory[] = [
  {
    name: "ETFs de Renda Variável",
    description: "Fundos que replicam índices de ações brasileiras",
    items: [
      "BOVA11 - Replica o Ibovespa (benchmark de liquidez)",
      "SMAL11 - Foca em empresas de menor capitalização (Small Caps)",
      "ISE/ESG - Filtram empresas com melhores práticas ambientais e sociais",
      "Setoriais - Exposição tática a setores específicos (FIND11, MATB11, UTIL11)",
    ],
    examples: ["BOVA11", "SMAL11", "FIND11", "MATB11", "UTIL11"],
  },
  {
    name: "ETFs de Renda Fixa",
    description: "Permitem acesso a cestas de títulos públicos e privados",
    items: [
      "Indexados à Inflação (IMAB11, IB5M11) - Proteção robusta contra inflação",
      "Prefixados - Apostas na direção da taxa de juros nominal",
      "Crédito Privado - Spreads de crédito sobre títulos públicos",
    ],
    examples: ["IMAB11", "IB5M11"],
  },
  {
    name: "ETFs Internacionais",
    description: "Exposição a mercados globais via B3",
    items: [
      "Mercado Americano (IVVB11, SPXI11) - Exposição ao S&P 500",
      "Temáticos Globais - Tecnologia (NASD11), Biotecnologia (DNAI11), China (XINA11), Europa (EURP11)",
      "Dupla exposição - Variação de preços e variação cambial (Dólar vs. Real)",
    ],
    examples: ["IVVB11", "SPXI11", "NASD11", "DNAI11", "XINA11", "EURP11"],
  },
  {
    name: "ETFs de Criptoativos",
    description: "Pioneirismo brasileiro em ETFs de cripto",
    items: [
      "Cesta de Ativos (HASH11) - Replica o Nasdaq Crypto Index (NCI)",
      "Mono-Ativos - Bitcoin (QBTC11, BITH11) ou Ethereum (ETHE11)",
      "Exposição pura sem necessidade de gestão de chaves privadas",
    ],
    examples: ["HASH11", "QBTC11", "BITH11", "ETHE11"],
  },
];

export const taxVariableTable: TaxTable[] = [
  {
    label: "Operações Comuns (Swing Trade)",
    rate: "15%",
    mechanism: "Investidor (via DARF)",
    deadline: "Até o último dia útil do mês subsequente",
  },
  {
    label: "Day Trade (Mesmo dia)",
    rate: "20%",
    mechanism: "Investidor (via DARF)",
    deadline: "Até o último dia útil do mês subsequente",
  },
];

export const taxFixedTable: TaxTable[] = [
  {
    label: "Até 180 dias",
    rate: "25%",
    mechanism: "Retido na Fonte / Recolhimento Automático",
  },
  {
    label: "De 181 a 720 dias",
    rate: "20%",
    mechanism: "Retido na Fonte / Recolhimento Automático",
  },
  {
    label: "Acima de 720 dias",
    rate: "15%",
    mechanism: "Retido na Fonte / Recolhimento Automático",
  },
];

export const taxation = {
  variable: {
    title: "Tributação de ETFs de Renda Variável",
    description:
      "Diferentemente das ações, onde vendas até R$ 20.000/mês são isentas, ETFs de renda variável não gozam de isenção. O lucro na venda de uma única cota deve ser tributado.",
    note:
      "Prejuízos podem ser compensados com lucros futuros da mesma natureza (ETFs, Ações, Opções).",
    criptoNote:
      "A isenção de R$ 35.000 aplicável a criptoativos em exchanges não se aplica aos ETFs de cripto na bolsa.",
  },
  fixed: {
    title: "Tributação de ETFs de Renda Fixa",
    description:
      "A alíquota é regressiva, baseada no Prazo Médio de Repactuação da Carteira (Duration) do fundo, não no tempo de permanência do investidor.",
    advantage:
      "ETFs de índices longos (como IMAB11) mantêm carteira com prazo médio superior a 720 dias, garantindo alíquota mínima de 15% desde o primeiro dia.",
  },
  dividends: {
    title: "Tributação dos ETFs de Dividendos",
    description:
      "Com a Resolução CVM 175, ETFs podem distribuir dividendos periodicamente.",
    rate: "15% retido na fonte",
    note:
      "O valor que cai na conta já é líquido. Contrasta com dividendos de ações, que são isentos.",
  },
};

export const performance = {
  title: "Gestão Ativa vs. Passiva",
  description:
    "Em horizontes de 5 e 10 anos, mais de 70% a 80% dos fundos de ações geridos ativamente não superam seus índices de referência.",
  comparison: {
    active: {
      title: "Fundos Ativos",
      fees: "Taxa de administração: 2,0% ao ano",
      performance: "Taxa de performance: 20% sobre excedente",
    },
    passive: {
      title: "ETFs (Gestão Passiva)",
      fees: "Taxa de administração: 0,20% a 0,60% ao ano",
      performance: "Sem taxa de performance",
    },
  },
  hiddenCosts: [
    {
      name: "Emolumentos B3",
      description: "Taxas de negociação e liquidação (aprox. 0,03% do volume)",
    },
    {
      name: "Spread (Bid-Ask)",
      description:
        "Diferença entre preço de compra e venda. Em ETFs líquidos como BOVA11, é ínfimo.",
    },
    {
      name: "Tracking Error",
      description:
        "Desvio de rentabilidade entre o ETF e o índice. Deve ser próximo de zero.",
    },
  ],
};

export const liquidity = {
  title: "Liquidez e o Formador de Mercado",
  description:
    "Diferente de uma ação, a liquidez de um ETF é elástica, garantida pelo Formador de Mercado (Market Maker).",
  explanation:
    "O Formador de Mercado mantém ofertas constantes de compra e venda, absorvendo grandes volumes mesmo em ETFs com pouco volume diário. A liquidez real do ETF é a liquidez dos ativos que o compõem.",
};

export const strategies: StrategyAllocation[] = [
  {
    type: "Core (Núcleo)",
    description:
      "Grande parte do portfólio em ETFs de índices amplos e baixo custo",
    examples: [
      "30% em IMAB11 (proteção inflacionária)",
      "25% em WRLD11 (exposição global neutra)",
      "20% em BOVA11/BraX (exposição ao mercado brasileiro)",
    ],
    percentage: "75%",
  },
  {
    type: "Satellite (Satélite)",
    description:
      "Pequenas alocações em ETFs temáticos ou de fatores para buscar retornos excedentes",
    examples: [
      "5% em SMAL11 (Small Caps)",
      "5% em HASH11 (Criptoativos)",
      "5% em NDIV11 (Dividendos)",
    ],
    percentage: "15%",
  },
];

export const conclusion =
  "O ETF no Brasil não é apenas um produto financeiro; é uma tecnologia de acesso que removeu barreiras de entrada, custos excessivos e complexidade operacional, empoderando o investidor individual a gerir seu patrimônio com as mesmas ferramentas dos grandes alocadores institucionais.";
