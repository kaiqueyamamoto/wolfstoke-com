# Wolfstoke Site

Plataforma de tecnologia para investimentos que centraliza acesso a múltiplos mercados mundiais através de parcerias com corretoras regulamentadas. O site apresenta informações sobre criptomoedas, ETFs, futuros e outros mercados financeiros, com foco em educação e transparência.

## 📋 Sobre o Projeto

O **Wolfstoke Site** é uma plataforma web desenvolvida em Next.js que oferece:

- **Dashboard Unificado** para visualização de investimentos
- **IA para Carteiras** com montagem automática baseada em perfil
- **Análise em Tempo Real** (técnica e fundamentalista)
- **Alertas Inteligentes** personalizados
- **Simulador e Backtesting** de estratégias
- **Transparência Total** em custos e operações

### Propósito

- **Home** (`/`): Landing page principal apresentando a plataforma, mercados disponíveis, features, planos personalizados e FAQ
- **Crypto** (`/crypto`): Página focada em trading de criptomoedas, inspirada em plataformas de prop trading
- **ETFs** (`/etfs`): Página educacional sobre Exchange Traded Funds no Brasil
- **Soluções** (`/solucoes`): Página de desenvolvimento de soluções personalizadas para o mercado financeiro

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 16.1.1 (App Router)
- **React**: 19.2.3
- **TypeScript**: Modo strict ativado
- **Estilização**: Tailwind CSS 4 com DaisyUI 5.5.14 (tema "business")
- **Fontes**: Geist Sans e Geist Mono (via `next/font/google`)
- **Gerenciador de Pacotes**: pnpm (preferido)

## 🎨 Design System

- **Tema**: Dark theme com gradientes radiais e glass morphism
- **Cores Principais** (definidas em `globals.css`):
  - Background: `#04060c`
  - Surface: `#0b1020`
  - Foreground: `#e5ecff`
  - Muted: `#98a3b3`
  - Accent: `#a7ff4f` (verde)
  - Secondary: `#7c7bff` (roxo)
- **Padrão Visual**: Glass cards com bordas sutis (`glass` class), gradientes radiais no background
- **Componentes DaisyUI**: Usando tema "business" com customizações via CSS variables

## 📁 Estrutura do Projeto

```
app/
├── components/          # Componentes organizados por feature
│   ├── home/           # Componentes da página inicial
│   ├── crypto/         # Componentes da página de criptomoedas
│   ├── etfs/           # Componentes da página de ETFs
│   ├── solucoes/       # Componentes da página de soluções
│   ├── ContactButtons.tsx  # Componente compartilhado
│   └── WolfIcon.tsx    # Ícone da marca
├── lib/                # Camada de dados
│   ├── home/data.ts    # Dados da página home
│   ├── crypto/data.ts  # Dados da página crypto
│   ├── etfs/data.ts    # Dados da página ETFs
│   └── solucoes/       # Dados da página soluções
│       ├── data.ts     # Soluções e dados principais
│       └── integrations.ts  # Dados de integrações com plataformas de trading
├── page.tsx            # Página inicial (/)
├── crypto/page.tsx     # Página de criptomoedas (/crypto)
├── etfs/page.tsx       # Página de ETFs (/etfs)
├── solucoes/page.tsx   # Página de soluções (/solucoes)
├── layout.tsx          # Layout raiz (fontes e metadados)
└── globals.css         # Estilos globais e tema Tailwind
```

## 🚀 Como Rodar

### Pré-requisitos

- Node.js 18+ 
- pnpm (recomendado) ou npm/yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/kaiqueyamamoto/wolfstoke-com.git
cd wolfstoke-site

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev              # Inicia servidor de desenvolvimento

# Build e Produção
pnpm build            # Cria build de produção
pnpm start            # Inicia servidor de produção

# Qualidade de Código
pnpm lint             # Executa ESLint
```

## 📄 Páginas Disponíveis

### Home (`/`)

Landing page principal com:
- Hero section com visão geral da plataforma
- Seção de mercados (Criptomoedas, Futuros, FIIs, ETFs)
- Features principais
- Passos para começar
- FAQ
- CTA para contato

### Crypto (`/crypto`)

Página focada em trading de criptomoedas:
- Hero section com métricas
- Features de trading crypto
- Passos do processo
- Comparação com outras plataformas
- Pares de criptomoedas disponíveis
- FAQ específica
- CTA

### ETFs (`/etfs`)

Página educacional sobre ETFs no Brasil:
- Mecanismos de funcionamento
- Regulação (CVM)
- Tipos de ETFs
- Tributação
- Performance e custos
- Liquidez
- Estratégias de alocação

### Soluções (`/solucoes`)

Página de desenvolvimento de soluções personalizadas:
- Por que soluções personalizadas
- 13 tipos de soluções diferentes:
  - Trading Desk Institucional
  - Plataforma Retail de Trading
  - Portfolio Management System (PMS)
  - Robo-Advisor
  - Risk Management Platform
  - Compliance & Regulatory Reporting
  - Market Data & Analytics Platform
  - Algorithmic Trading Platform
  - Investment Marketplace
  - Crypto Exchange
  - Tokenization Platform
  - Fund Administration System
  - **Automações com Profit/Neologica** (nova)
- Seção de integrações com plataformas de trading:
  - Profit/Neologica (NTSL)
  - MetaTrader (MQL4/MQL5)
  - TradingView (Pine Script)
- Processo de desenvolvimento (6 fases)
- Modelos de investimento
- Casos de uso por tipo de cliente
- Próximos passos
- FAQ
- CTA para contato

## 🏗️ Arquitetura

### Padrão de Componentes

- **Componentes por Feature**: Componentes organizados em `app/components/<feature>/`
- **Separação de Dados**: Dados, tipos e constantes em `app/lib/<feature>/data.ts`
- **Páginas como Orquestradores**: Páginas devem ter menos de 50 linhas, apenas importando e organizando componentes
- **Server Components por Padrão**: Usar `"use client"` apenas quando necessário (hooks, eventos)

### Padrão de Nomenclatura

- **Componentes**: PascalCase com sufixo descritivo (`HeroSection.tsx`, `CryptoHeader.tsx`)
- **Dados**: Named exports para dados e tipos
- **Componentes**: Default export para componentes

### Import Paths

Use o alias `@/app/` para imports absolutos:

```typescript
import HeroSection from "@/app/components/home/HeroSection";
import { plans } from "@/app/lib/home/data";
```

## 🎯 Mercados Suportados

- **Criptomoedas**: Bitcoin, Ethereum, Solana, altcoins, tokens DeFi
- **Futuros Americanos**: S&P 500, NASDAQ 100, Dow Jones, Russell 2000
- **Futuros Asiáticos**: Nikkei 225, Hang Seng, SGX, KOSPI
- **Futuros Brasileiros**: Ibovespa, Mini-Índice, Dólar, Commodities
- **Fundos Imobiliários**: FIIs de diversos segmentos
- **ETFs**: Nacionais e internacionais

## 🔧 Integrações com Plataformas de Trading

O projeto suporta desenvolvimento de automações e integrações para:

- **Profit/Neologica**: Desenvolvimento em NTSL para automação de estratégias
- **MetaTrader**: Expert Advisors em MQL4/MQL5
- **TradingView**: Estratégias e indicadores em Pine Script
- **APIs de Corretoras**: Integração direta via REST/WebSocket

## 📝 Convenções de Código

- **TypeScript**: Modo strict ativado
- **Indentação**: 2 espaços
- **Aspas**: Double quotes
- **Componentes**: Um componente por arquivo
- **Exports**: Default para componentes, named para dados/tipos
- **HTML Semântico**: Uso de elementos semânticos apropriados
- **Acessibilidade**: Atributos `alt` em imagens, ARIA labels em elementos interativos

## 🔐 Segurança e Compliance

- Conformidade com **LGPD** (Lei Geral de Proteção de Dados)
- Foco em segurança e transparência
- Sem armazenamento de dados sensíveis no frontend
- Validação de inputs

## 📚 Documentação Adicional

- **AGENTS.md**: Documentação para desenvolvedores sobre padrões e convenções
- **.docs/**: Documentação de negócio e especificações

## 🚢 Deploy

O projeto está configurado para deploy na Vercel:

1. Conecte o repositório GitHub à Vercel
2. Configure as variáveis de ambiente (se necessário)
3. O deploy será automático em cada push para `main`

## 📞 Contato

- **Email**: dev@wolfstoke.com
- **Website**: wolfstoke.com

## 📄 Licença

Este projeto é proprietário. Todos os direitos reservados.

---

**Desenvolvido com ❤️ pela equipe Wolfstoke**
