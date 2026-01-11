// Dados sobre integrações com plataformas de trading

export interface TradingPlatform {
  name: string;
  description: string;
  features: string[];
  languages: string[];
  market: string;
  useCases: string[];
}

export interface Integration {
  platform: string;
  type: string;
  description: string;
  capabilities: string[];
}

export const tradingPlatforms: TradingPlatform[] = [
  {
    name: "Profit/Neologica",
    description:
      "Plataforma líder no mercado brasileiro para trading de ações, futuros e opções, com recursos avançados de automação.",
    features: [
      "Módulo de Automação de Estratégias integrado",
      "Linguagem NTSL (Nelogica Trading Script Language)",
      "Profit AI para assistência inteligente",
      "Backtesting e otimização de estratégias",
      "Integração com múltiplas corretoras brasileiras",
      "Análise técnica avançada e indicadores customizáveis",
    ],
    languages: ["NTSL (Nelogica Trading Script Language)"],
    market: "Mercado Brasileiro (B3)",
    useCases: [
      "Day trading e swing trading automatizado",
      "Estratégias de arbitragem",
      "Operações algorítmicas em futuros",
      "Gestão de carteiras automatizada",
    ],
  },
  {
    name: "MetaTrader (MT4/MT5)",
    description:
      "Plataforma internacional amplamente utilizada para trading de Forex, CFDs e futuros globais.",
    features: [
      "Linguagem MQL4/MQL5 para programação",
      "MetaTrader Market para estratégias prontas",
      "Copy Trading e Signal Service",
      "Backtesting com histórico completo",
      "EAs (Expert Advisors) para automação",
      "Multi-terminal para gestão de múltiplas contas",
    ],
    languages: ["MQL4", "MQL5"],
    market: "Mercados Internacionais (Forex, CFDs, Futuros)",
    useCases: [
      "Trading automatizado de Forex",
      "Estratégias de scalping",
      "Copy trading e sinais",
      "Operações multi-ativo",
    ],
  },
  {
    name: "TradingView",
    description:
      "Plataforma web e mobile para análise técnica, com capacidade de automação através de Pine Script.",
    features: [
      "Pine Script para estratégias customizadas",
      "Backtesting integrado",
      "Alertas e notificações personalizadas",
      "Social trading e compartilhamento de estratégias",
      "Integrações com corretoras via API",
      "Gráficos avançados e indicadores técnicos",
    ],
    languages: ["Pine Script"],
    market: "Múltiplos mercados globais",
    useCases: [
      "Desenvolvimento de indicadores customizados",
      "Estratégias de swing trading",
      "Alertas automáticos para sinais",
      "Análise técnica colaborativa",
    ],
  },
];

export const integrations: Integration[] = [
  {
    platform: "Profit/Neologica",
    type: "Desenvolvimento de Estratégias",
    description:
      "Criação de robôs e estratégias automatizadas em NTSL para a plataforma Profit.",
    capabilities: [
      "Desenvolvimento de Trade Systems personalizados",
      "Criação de indicadores customizados",
      "Automação de estratégias de entrada e saída",
      "Gestão de risco automatizada",
      "Integração com Excel e bancos de dados externos",
      "Backtesting e otimização de parâmetros",
    ],
  },
  {
    platform: "MetaTrader",
    type: "Expert Advisors (EAs)",
    description:
      "Desenvolvimento de Expert Advisors em MQL4/MQL5 para automação completa no MetaTrader.",
    capabilities: [
      "EAs personalizados para estratégias específicas",
      "Indicadores técnicos customizados",
      "Scripts para automação de tarefas",
      "Integração com APIs externas",
      "Gestão de múltiplas contas e símbolos",
      "Backtesting e forward testing",
    ],
  },
  {
    platform: "TradingView",
    type: "Pine Script Strategies",
    description:
      "Desenvolvimento de estratégias e indicadores em Pine Script para TradingView.",
    capabilities: [
      "Estratégias de trading automatizadas",
      "Indicadores técnicos personalizados",
      "Alertas inteligentes e notificações",
      "Integração com webhooks para execução externa",
      "Bibliotecas de funções reutilizáveis",
      "Otimização e análise de performance",
    ],
  },
  {
    platform: "APIs de Corretoras",
    type: "Integração Direta",
    description:
      "Integração direta com APIs de corretoras para execução automatizada de ordens.",
    capabilities: [
      "Integração com APIs REST e WebSocket",
      "Execução automatizada de ordens",
      "Sincronização de posições em tempo real",
      "Gestão de risco e limites automáticos",
      "Reconciliação de trades e P&L",
      "Integração multi-corretora",
    ],
  },
];

export const integrationBenefits = {
  title: "Benefícios das Integrações com Plataformas de Trading",
  items: [
    {
      benefit: "Automação Completa",
      description:
        "Reduza intervenção manual e execute estratégias 24/7 com precisão e disciplina.",
    },
    {
      benefit: "Backtesting Avançado",
      description:
        "Teste estratégias em dados históricos antes de aplicar capital real, reduzindo riscos.",
    },
    {
      benefit: "Gestão de Risco",
      description:
        "Implemente stop loss, take profit e gestão de posição automática para proteger capital.",
    },
    {
      benefit: "Escalabilidade",
      description:
        "Execute múltiplas estratégias simultaneamente em diferentes ativos e mercados.",
    },
    {
      benefit: "Eliminação de Emoções",
      description:
        "Remova fatores emocionais das decisões de trading, seguindo regras objetivas.",
    },
    {
      benefit: "Performance Otimizada",
      description:
        "Ajuste e otimize parâmetros de estratégias baseado em dados históricos e análise quantitativa.",
    },
  ],
};
