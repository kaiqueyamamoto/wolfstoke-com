// Tipos e interfaces
export interface Solution {
  id: string;
  title: string;
  description: string;
  features: string[];
  useCases: string[];
  technologies: string[];
  timeline: string;
  category: string;
}

export interface ProcessPhase {
  title: string;
  duration: string;
  activities: string[];
  deliverables: string[];
}


export interface UseCase {
  client: string;
  challenge: string;
  solution: string;
  roi: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

// Dados
export const heroData = {
  title: "Desenvolvimento de Soluções para o Mercado Financeiro",
  subtitle: "Por Demanda e Personalizadas",
  description:
    "Desenvolvemos plataformas, sistemas e ferramentas sob medida para atender necessidades específicas de diferentes players do mercado financeiro: corretoras, asset managers, family offices, bancos, fintechs, fundos de investimento e investidores institucionais.",
};

export const whyLimitations = {
  title: "Limitações das Soluções de Prateleira",
  items: [
    {
      category: "Falta de Flexibilidade",
      points: [
        "Funcionalidades genéricas que não atendem processos específicos",
        "Impossibilidade de adaptação a workflows únicos",
        "Dependência de roadmap do fornecedor",
      ],
    },
    {
      category: "Integração Deficiente",
      points: [
        "Dificuldade para conectar com sistemas legados",
        "APIs limitadas ou inexistentes",
        "Múltiplas plataformas desconexas",
      ],
    },
    {
      category: "Custos Ocultos",
      points: [
        "Licenças por usuário que escalam rapidamente",
        "Módulos adicionais caros",
        "Vendor lock-in (dependência do fornecedor)",
      ],
    },
    {
      category: "Segurança e Compliance",
      points: [
        "Dados em servidores de terceiros",
        "Impossibilidade de auditoria completa",
        "Conformidade regulatória genérica",
      ],
    },
  ],
};

export const whyAdvantages = {
  title: "Vantagens das Soluções Personalizadas",
  items: [
    {
      category: "Total Controle",
      points: [
        "Propriedade integral do código-fonte",
        "Decisão sobre hospedagem e infraestrutura",
        "Roadmap definido pelas suas necessidades",
      ],
    },
    {
      category: "Vantagem Competitiva",
      points: [
        "Funcionalidades únicas que diferenciam no mercado",
        "Inovação sem limitações",
        "Propriedade intelectual exclusiva",
      ],
    },
    {
      category: "Escalabilidade Real",
      points: [
        "Arquitetura desenhada para seu crescimento",
        "Custos previsíveis (sem surpresas de licenciamento)",
        "Performance otimizada para seus casos de uso",
      ],
    },
    {
      category: "Integração Total",
      points: [
        "Conexão nativa com todos os seus sistemas",
        "API desenhada especificamente para suas necessidades",
        "Fluxo de dados unificado",
      ],
    },
  ],
};

export const solutions: Solution[] = [
  {
    id: "trading-desk",
    title: "Trading Desk Institucional",
    category: "Plataformas de Trading e Execução",
    description: "Sistema completo para mesas de operação profissionais.",
    features: [
      "Multi-asset: Ações, derivativos, renda fixa, FIIs, ETFs, cripto",
      "Multi-mercado: B3, NYSE, Nasdaq, CME, Binance, etc.",
      "Order Management System (OMS) com roteamento inteligente",
      "Execution Management System (EMS) com pre-trade analytics",
      "Risk Management com pre-trade checks e VaR em tempo real",
    ],
    useCases: [
      "Asset managers gerenciando múltiplos fundos",
      "Prop trading firms",
      "Corretoras institucionais",
      "Family offices com operação ativa",
    ],
    technologies: [
      "Backend: C++, Java, Python (baixa latência)",
      "Trading Platforms: Profit/Neologica, MetaTrader, plataformas proprietárias",
      "Message Bus: FIX, Kafka",
      "Database: PostgreSQL, TimescaleDB, Redis",
      "Frontend: React, WebSocket para real-time",
    ],
    timeline: "6-12 meses",
  },
  {
    id: "retail-trading",
    title: "Plataforma Retail de Trading",
    category: "Plataformas de Trading e Execução",
    description: "Sistema para investidores pessoa física com experiência institucional.",
    features: [
      "Interface intuitiva para iniciantes",
      "Gráficos avançados (TradingView integration)",
      "One-click trading e paper trading",
      "Copy trading e social features",
      "IA para sugestões personalizadas",
    ],
    useCases: [
      "Corretoras digitais",
      "Fintechs de investimento",
      "Plataformas de educação financeira",
    ],
    technologies: [
      "Frontend: React Native (iOS/Android) + Next.js (Web)",
      "Trading Platforms: Integração com Profit/Neologica, TradingView, MetaTrader",
      "Backend: Node.js + Python",
      "Real-time: WebSocket, Server-Sent Events",
      "Cache: Redis, Database: PostgreSQL",
    ],
    timeline: "4-8 meses",
  },
  {
    id: "pms",
    title: "Portfolio Management System (PMS)",
    category: "Sistemas de Gestão de Carteiras",
    description: "Sistema completo para gestão profissional de carteiras.",
    features: [
      "Multi-portfólio (gestão de vários clientes)",
      "Rebalanceamento automático e tax-loss harvesting",
      "Performance & Reporting com atribuição Brinson",
      "Compliance com IPS enforcement",
      "Client Portal com dashboard personalizado",
    ],
    useCases: [
      "Asset managers",
      "Gestoras de fundos",
      "Family offices",
      "Bancos de investimento",
    ],
    technologies: [
      "Backend: Python (pandas, numpy)",
      "Database: PostgreSQL + TimescaleDB",
      "Reports: LaTeX, Jasper Reports",
      "Frontend: React + D3.js",
    ],
    timeline: "6-10 meses",
  },
  {
    id: "robo-advisor",
    title: "Robo-Advisor",
    category: "Sistemas de Gestão de Carteiras",
    description: "Gestão automatizada de investimentos baseada em IA.",
    features: [
      "Onboarding inteligente com questionário adaptativo",
      "Alocação baseada em Modern Portfolio Theory (MPT)",
      "Rebalanceamento automático com thresholds",
      "Machine Learning para predição de retornos",
      "Transparência total com explicação de decisões",
    ],
    useCases: [
      "Fintechs de investimento",
      "Bancos digitais",
      "Corretoras retail",
    ],
    technologies: [
      "AI/ML: Python (scikit-learn, TensorFlow)",
      "Otimização: cvxpy, scipy",
      "Backend: FastAPI",
      "Frontend: Next.js, Database: PostgreSQL",
    ],
    timeline: "5-9 meses",
  },
  {
    id: "risk-management",
    title: "Risk Management Platform",
    category: "Sistemas de Risco e Compliance",
    description: "Plataforma completa de gestão de riscos financeiros.",
    features: [
      "Market Risk: VaR (Histórico, Paramétrico, Monte Carlo)",
      "Credit Risk: Credit scoring, PD, LGD, EAD",
      "Operational Risk: KRIs, incident management",
      "Liquidity Risk: Cash flow forecasting",
      "Dashboards com risk heat maps e alertas em tempo real",
    ],
    useCases: [
      "Bancos",
      "Asset managers",
      "Corretoras institucionais",
      "Fundos de investimento",
    ],
    technologies: [
      "Cálculos: Python, R",
      "Database: PostgreSQL, MongoDB",
      "Big Data: Apache Spark",
      "Visualization: Tableau, D3.js",
    ],
    timeline: "8-14 meses",
  },
  {
    id: "compliance",
    title: "Compliance & Regulatory Reporting",
    category: "Sistemas de Risco e Compliance",
    description: "Sistema para garantir conformidade regulatória.",
    features: [
      "Monitoramento: Chinese wall, insider trading detection",
      "Reportes Regulatórios: CVM, BACEN, ANBIMA, FATCA/CRS",
      "KYC/AML: Customer due diligence, transaction monitoring",
      "Audit Trail: Logging completo e imutabilidade",
    ],
    useCases: [
      "Corretoras",
      "Bancos",
      "Asset managers",
      "Fundos de investimento",
    ],
    technologies: [
      "Backend: Java/Spring Boot",
      "Database: PostgreSQL + Elasticsearch",
      "ETL: Apache NiFi",
      "Blockchain: Hyperledger (opcional)",
    ],
    timeline: "6-12 meses",
  },
  {
    id: "market-data",
    title: "Market Data & Analytics Platform",
    category: "Plataformas de Análise e Intelligence",
    description: "Plataforma de dados e análises de mercado.",
    features: [
      "Data Aggregation: Consolidação de múltiplas fontes",
      "Analytics Engine: 200+ indicadores técnicos",
      "Alternative Data: Sentiment analysis, web scraping",
      "API & Distribution: REST, WebSocket, SDK Python/R",
    ],
    useCases: [
      "Data providers",
      "Asset managers",
      "Corretoras",
      "Fintechs",
    ],
    technologies: [
      "Data Pipeline: Apache Airflow",
      "Processing: Apache Spark, Dask",
      "Storage: S3, PostgreSQL, ClickHouse",
      "API: FastAPI, GraphQL, Cache: Redis",
    ],
    timeline: "6-10 meses",
  },
  {
    id: "algo-trading",
    title: "Algorithmic Trading Platform",
    category: "Plataformas de Análise e Intelligence",
    description: "Plataforma para desenvolvimento e execução de estratégias algorítmicas.",
    features: [
      "Strategy Development: IDE integrado, backtesting engine",
      "Execution: Paper trading, live trading multi-broker",
      "Monitoring: Real-time P&L, performance metrics",
      "Infrastructure: Co-location, low-latency (sub-millisecond)",
      "Integração com Profit/Neologica, MetaTrader, e outras plataformas",
    ],
    useCases: [
      "Prop trading firms",
      "Hedge funds",
      "Asset managers quantitativos",
    ],
    technologies: [
      "Core Engine: C++, Python",
      "Platforms: Profit/Neologica (NTSL), MetaTrader (MQL), TradingView",
      "Backtesting: Backtrader, Zipline",
      "Database: TimescaleDB, KDB+",
    ],
    timeline: "8-14 meses",
  },
  {
    id: "profit-automation",
    title: "Automações com Profit/Neologica",
    category: "Plataformas de Trading e Execução",
    description: "Desenvolvimento de robôs e estratégias automatizadas para a plataforma Profit da Neologica.",
    features: [
      "Desenvolvimento de estratégias em NTSL (Nelogica Trading Script Language)",
      "Criação de robôs personalizados para automação completa",
      "Integração com múltiplas corretoras através do Profit",
      "Backtesting e otimização de estratégias",
      "Gestão de risco automatizada e stop loss inteligente",
      "Monitoramento e alertas em tempo real",
    ],
    useCases: [
      "Traders que querem automatizar estratégias existentes",
      "Desenvolvimento de robôs para day trading e swing trading",
      "Automação de operações em futuros, ações e opções",
      "Integração de estratégias entre Profit e outros sistemas",
    ],
    technologies: [
      "Linguagem: NTSL (Nelogica Trading Script Language)",
      "Plataforma: Profit Pro/Ultra da Neologica",
      "Integrações: APIs de corretoras, Excel, bancos de dados",
      "Auxiliares: Python para análise de dados, backtesting externo",
    ],
    timeline: "1-4 meses",
  },
  {
    id: "marketplace",
    title: "Investment Marketplace",
    category: "Plataformas de Distribuição e Marketplace",
    description: "Marketplace conectando gestores e investidores.",
    features: [
      "Para Gestores: Showcase de fundos, performance tracking",
      "Para Investidores: Discovery, comparação, one-click investment",
      "Marketplace Features: Rating & reviews, due diligence reports",
      "Compliance: Suitability checks automáticos",
    ],
    useCases: [
      "Marketplaces de investimentos",
      "Plataformas de fundos",
      "Distribuidores",
    ],
    technologies: [
      "Frontend: Next.js, React Native",
      "Backend: Node.js, PostgreSQL",
      "Payments: Stripe Connect",
      "KYC: Integração com bureaus",
    ],
    timeline: "6-12 meses",
  },
  {
    id: "crypto-exchange",
    title: "Crypto Exchange",
    category: "Blockchain e Crypto Solutions",
    description: "Exchange completa de criptomoedas.",
    features: [
      "Trading Engine: 100k+ orders/sec, spot, margin, futures",
      "Wallet Infrastructure: Multi-sig cold wallets, hot wallet",
      "Security: 2FA, biometria, withdrawal limits",
      "Regulatory: KYC/AML, travel rule, proof of reserves",
    ],
    useCases: ["Exchanges de cripto", "Corretoras crypto", "Fintechs"],
    technologies: [
      "Matching Engine: C++, Rust",
      "Backend: Go, Node.js",
      "Database: PostgreSQL, Redis",
      "Blockchain: Bitcoin Core, Geth",
    ],
    timeline: "10-18 meses",
  },
  {
    id: "tokenization",
    title: "Tokenization Platform",
    category: "Blockchain e Crypto Solutions",
    description: "Plataforma para tokenizar ativos reais.",
    features: [
      "Asset Classes: Imóveis, arte, commodities, recebíveis",
      "Smart Contracts: ERC-20/ERC-1400, compliance embedded",
      "Lifecycle Management: Issuance, distribution, secondary market",
      "Regulatory: Securities compliance (CVM), reporting automático",
    ],
    useCases: [
      "Plataformas de tokenização",
      "Asset managers",
      "Real estate companies",
    ],
    technologies: [
      "Blockchain: Ethereum, Polygon, Hyperledger",
      "Smart Contracts: Solidity",
      "Backend: Node.js, Python",
      "IPFS: Metadata storage",
    ],
    timeline: "8-14 meses",
  },
  {
    id: "fund-administration",
    title: "Fund Administration System",
    category: "Back-Office e Infraestrutura",
    description: "Sistema completo de administração de fundos.",
    features: [
      "Accounting: Double-entry, multi-currency, NAV calculation",
      "Investor Services: Subscription/redemption, capital calls",
      "Compliance & Reporting: Regulatory filings, board reports",
      "Integrations: Custodians, brokers, transfer agents",
    ],
    useCases: [
      "Administradoras de fundos",
      "Asset managers",
      "Family offices",
    ],
    technologies: [
      "ERP Core: Java/Spring",
      "Database: Oracle, PostgreSQL",
      "Reporting: Crystal Reports, Jasper",
      "Integration: ESB (Mulesoft)",
    ],
    timeline: "10-16 meses",
  },
];

export const processPhases: ProcessPhase[] = [
  {
    title: "Discovery & Planning",
    duration: "2-4 semanas",
    activities: [
      "Kickoff Meeting: Entendimento profundo do negócio",
      "Requirements Gathering: User stories detalhadas",
      "Technical Discovery: Auditoria de sistemas existentes",
    ],
    deliverables: [
      "Product Requirements Document (PRD)",
      "Technical Architecture Document",
      "Project roadmap com milestones",
      "Budget detalhado",
    ],
  },
  {
    title: "Design & Architecture",
    duration: "3-6 semanas",
    activities: [
      "System Architecture: Diagramas C4, database schema",
      "UX/UI Design: Wireframes, mockups, prototypes",
      "Infrastructure Design: Cloud architecture, CI/CD",
    ],
    deliverables: [
      "Architecture diagrams",
      "UI/UX designs aprovados",
      "Technical specifications",
      "Infrastructure as Code templates",
    ],
  },
  {
    title: "Development",
    duration: "Sprints de 2 semanas",
    activities: [
      "Sprint Planning: Seleção de user stories",
      "Daily Standups: Progresso diário",
      "Sprint Development: Feature development com TDD",
      "DevOps Integration: CI/CD, automated testing",
    ],
    deliverables: [
      "Features desenvolvidas incrementalmente",
      "Code reviews e documentação",
      "Deploy contínuo em staging",
    ],
  },
  {
    title: "Testing & QA",
    duration: "Contínuo + 2-4 semanas dedicadas",
    activities: [
      "Unit Testing: Cobertura mínima 80%",
      "Integration Testing: APIs, database, third-party",
      "Security Testing: Penetration testing, vulnerability scanning",
      "UAT: Beta testing com usuários reais",
    ],
    deliverables: [
      "Test reports",
      "Security audit report",
      "UAT feedback e ajustes",
    ],
  },
  {
    title: "Deployment & Go-Live",
    duration: "1-2 semanas",
    activities: [
      "Pre-Launch: Security audit, performance tuning",
      "Migration: Data migration, rollback plan",
      "Launch: Phased rollout, monitoring intensivo",
      "Post-Launch: Monitoring, bug fixing prioritário",
    ],
    deliverables: [
      "Sistema em produção",
      "Documentação de deployment",
      "Runbook operacional",
    ],
  },
  {
    title: "Suporte & Evolução",
    duration: "Ongoing",
    activities: [
      "Suporte Contínuo: Bug fixes, security patches",
      "Evolutiva: Novas features, otimizações",
      "Monitoring: Performance e métricas",
    ],
    deliverables: [
      "Releases regulares",
      "Documentação atualizada",
      "Métricas de performance",
    ],
  },
];


export const useCases: UseCase[] = [
  {
    client: "Asset Managers e Gestoras",
    challenge:
      "Gerenciar múltiplos fundos, reportar para cotistas, cumprir regulações da CVM.",
    solution:
      "Portfolio Management System integrado com custódia, contabilidade, reporting automático e portal do cotista.",
    roi: [
      "Redução de 70% no tempo de reporting",
      "Eliminação de erros manuais",
      "Compliance automático",
      "Escalabilidade sem contratar",
    ],
  },
  {
    client: "Corretoras",
    challenge: "Oferecer experiência de trading moderna para competir com players digitais.",
    solution:
      "Plataforma de trading white-label: mobile app nativo, ordem com 1 clique, gráficos avançados, alertas personalizados.",
    roi: [
      "Aumento de 40% em ativos sob custódia",
      "Redução de 60% em churn",
      "Clientes mais ativos (2x volume)",
      "Atração de público jovem",
    ],
  },
  {
    client: "Family Offices",
    challenge:
      "Consolidar investimentos de múltiplos membros da família em diferentes jurisdições.",
    solution:
      "Plataforma consolidada: multi-currency, multi-asset, reporting personalizado, gestão de impostos, sucessão patrimonial.",
    roi: [
      "Visão única de todo patrimônio",
      "Otimização fiscal",
      "Redução de custos operacionais",
      "Confidencialidade total",
    ],
  },
  {
    client: "Fintechs e Startups",
    challenge: "Lançar produto inovador rapidamente sem gastar fortunas.",
    solution:
      "MVP enxuto com tecnologia moderna: arquitetura cloud-native, microserviços, API-first, pronto para escalar.",
    roi: [
      "Time-to-market 3x mais rápido",
      "Custos de infraestrutura otimizados",
      "Escalabilidade garantida",
      "Investidores impressionados",
    ],
  },
];

export const nextSteps = [
  {
    step: "1. Agendar Discovery Call",
    duration: "Gratuito - 1h",
    description: "Entender seu negócio e desafios, apresentar cases similares, fornecer estimativa preliminar",
  },
  {
    step: "2. Workshop de Discovery",
    duration: "Opcional - 2-5 dias",
    description: "Imersão no seu negócio, mapeamento de processos, identificação de requisitos, prototipagem rápida",
  },
  {
    step: "3. Proposta Técnica e Comercial",
    duration: "1-2 semanas",
    description: "PRD completo, arquitetura proposta, timeline com milestones, termos contratuais",
  },
  {
    step: "4. Kick-off",
    duration: "1 semana após aceite",
    description: "Início imediato do desenvolvimento, setup de ferramentas, primeiro sprint planning, demonstração na semana 2",
  },
];

export const faqs: FAQ[] = [
  {
    question: "Qual a diferença entre solução personalizada e software de prateleira?",
    answer:
      "Soluções personalizadas são desenvolvidas especificamente para suas necessidades, com controle total do código-fonte, integração nativa com seus sistemas e roadmap definido por você. Software de prateleira oferece funcionalidades genéricas, com limitações de customização e dependência do roadmap do fornecedor.",
  },
  {
    question: "Quanto tempo leva para desenvolver uma solução personalizada?",
    answer:
      "Depende da complexidade. Projetos pequenos (MVP) levam 2-4 meses, projetos médios 4-8 meses, projetos grandes 8-14 meses e projetos enterprise 12-24 meses. Oferecemos timeline detalhado na proposta técnica.",
  },
  {
    question: "Como funciona o modelo de investimento?",
    answer:
      "Oferecemos três modelos: Projeto Fechado (escopo definido, pagamento por milestones), Time & Materials (equipe dedicada, cobrança mensal, flexibilidade total) e Híbrido (MVP definido, depois T&M para evolução). Entre em contato para conhecer qual modelo se encaixa melhor no seu projeto.",
  },
  {
    question: "Vocês oferecem suporte após o lançamento?",
    answer:
      "Sim! Oferecemos três níveis: Suporte Básico (incluído 3 meses), Standard e Premium com SLA diferenciado e suporte dedicado. Entre em contato para conhecer os detalhes de cada nível.",
  },
  {
    question: "Como garantem segurança e compliance?",
    answer:
      "Desenvolvemos com security by design, seguindo OWASP, com criptografia AES-256, TLS 1.3, RBAC, MFA e auditoria completa. Suportamos compliance com CVM, BACEN, ANBIMA, LGPD, MiFID II, GDPR e certificações ISO 27001, SOC 2.",
  },
  {
    question: "Posso integrar com sistemas legados?",
    answer:
      "Sim! Fazemos integração nativa com sistemas legados através de APIs REST, GraphQL, WebSocket, ou protocolos específicos como FIX. Incluímos análise de integrações necessárias na fase de Discovery.",
  },
];

export const contactInfo = {
  email: "dev@wolfstoke.com",
  whatsapp: "+55 (11) 9xxxx-xxxx",
  website: "wolfstoke.com/custom-development",
  hours: "Segunda a Sexta: 9h às 19h (horário de Brasília)",
};
