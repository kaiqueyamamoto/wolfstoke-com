# Histórico de Evolução do Projeto Wolfstoke Site

Este documento detalha a evolução e contexto do projeto Wolfstoke Site ao longo do tempo.

## Visão Geral

**Nome do Projeto**: wolfstoke-site  
**Tipo**: Website institucional/landing pages  
**Plataforma**: Wolfstoke - Plataforma de tecnologia para investimentos  
**Status**: Em desenvolvimento ativo

## Stack Tecnológico

### Versões Atuais

- **Next.js**: 16.1.1 (App Router)
- **React**: 19.2.3
- **React DOM**: 19.2.3
- **TypeScript**: ^5
- **Tailwind CSS**: ^4
- **DaisyUI**: ^5.5.14
- **ESLint**: ^9 com eslint-config-next

### Decisões Arquiteturais

1. **Next.js App Router**: Escolhido para aproveitar as vantagens do novo sistema de roteamento do Next.js
2. **TypeScript Strict Mode**: Ativado para maior segurança de tipos
3. **Tailwind CSS 4**: Versão mais recente com sintaxe `@theme inline`
4. **DaisyUI**: Biblioteca de componentes para acelerar desenvolvimento, usando tema "business"
5. **pnpm**: Gerenciador de pacotes preferido para alinhamento com `pnpm-lock.yaml`

## Estrutura do Projeto

### Organização Atual

```
wolfstoke-site/
├── app/
│   ├── components/           # Componentes React organizados por feature
│   │   ├── home/             # Componentes da página inicial
│   │   ├── crypto/           # Componentes da página de criptomoedas
│   │   ├── etfs/             # Componentes da página de ETFs
│   │   ├── ContactButtons.tsx
│   │   └── WolfIcon.tsx
│   ├── lib/                  # Camada de dados e tipos
│   │   ├── home/data.ts      # Dados da página home
│   │   ├── crypto/data.ts    # Dados da página crypto
│   │   └── etfs/data.ts      # Dados da página ETFs
│   ├── crypto/
│   │   └── page.tsx          # Página de criptomoedas
│   ├── etfs/
│   │   └── page.tsx          # Página de ETFs
│   ├── page.tsx              # Página inicial
│   ├── layout.tsx            # Layout raiz
│   └── globals.css           # Estilos globais e tema
├── public/                   # Assets estáticos
└── [config files]            # Configurações do projeto
```

### Padrões Arquiteturais

#### Separação de Responsabilidades

1. **Páginas** (`app/*/page.tsx`): Orquestradores finos (< 50 linhas) que apenas importam e organizam componentes
2. **Componentes** (`app/components/<feature>/`): Componentes React focados em apresentação
3. **Dados** (`app/lib/<feature>/data.ts`): Interfaces TypeScript e arrays de dados, separados da lógica de apresentação

#### Nomenclatura

- Componentes: PascalCase com sufixo descritivo (`HeroSection.tsx`, `CryptoHeader.tsx`)
- Hooks/Utilities: camelCase (`useScrollLock.ts`)
- Dados/Tipos: camelCase para constantes, PascalCase para interfaces (`features: Feature[]`)

#### Import Paths

- Usar alias `@/app/` para imports absolutos
- Exemplo: `import HeroSection from "@/app/components/home/HeroSection"`

## Evolução das Páginas

### 1. Página Home (`/`)

**Quando**: Primeira página desenvolvida  
**Propósito**: Landing page principal apresentando a plataforma Wolfstoke

**Componentes**:
- `HomeHeader`: Navegação principal
- `HeroSection`: Hero principal com CTA
- `MarketsSection`: Lista de mercados suportados (6 mercados)
- `FeaturesSection`: 6 features principais
- `StepsSection`: 4 passos do processo
- `FAQSection`: 6 perguntas frequentes
- `CTASection`: Call-to-action final
- `Footer`: Rodapé com links e informações
- `BackgroundEffects`: Efeitos visuais de fundo
- `ContactButtons`: Botões de contato flutuantes

**Dados** (`app/lib/home/data.ts`):
- `markets`: Array com 6 mercados
- `features`: Array com 6 features
- `steps`: Array com 4 passos
- `plans`: Array com 3 planos de assinatura
- `faqs`: Array com 6 FAQs

### 2. Página Crypto (`/crypto`)

**Quando**: Desenvolvida após a página home  
**Propósito**: Página focada em trading de criptomoedas, inspirada em plataformas de prop trading

**Componentes**:
- `CryptoHeader`: Header específico da página
- `HeroSection`: Hero com foco em crypto
- `FeaturesSection`: Features específicas de crypto
- `StepsSection`: Passos para começar
- `ComparisonSection`: Comparação com concorrentes
- `CryptoPairsSection`: Lista de pares de criptomoedas
- `FAQSection`: FAQ específica de crypto
- `CTASection`: Call-to-action
- `BackgroundEffects`: Efeitos visuais (reutilizado de crypto)
- `Footer`: Rodapé (reutilizado de home)
- `ContactButtons`: Botões de contato (reutilizado)

**Metadados**:
- Title: "Hydra Funding Crypto | Desafio Prop"
- Description: Foco em desafio em 4 fases, contas até US$1M, payouts de 90%

### 3. Página ETFs (`/etfs`)

**Quando**: Última página adicionada  
**Propósito**: Página educacional sobre Exchange Traded Funds no Brasil

**Componentes**:
- `ETFsHeader`: Header específico da página
- `HeroSection`: Hero educacional sobre ETFs
- `MechanismSection`: Como funcionam os ETFs
- `RegulationSection`: Regulação no Brasil
- `TypesSection`: Tipos de ETFs
- `TaxSection`: Tributação
- `PerformanceSection`: Performance e histórico
- `LiquiditySection`: Liquidez e negociação
- `StrategiesSection`: Estratégias de alocação
- `BackgroundEffects`: Efeitos visuais (reutilizado)
- `Footer`: Rodapé (reutilizado)
- `ContactButtons`: Botões de contato (reutilizado)

**Metadados**:
- Title: "ETFs no Brasil | Manifesto Educacional | Wolfstoke"
- Description: Foco educacional em estrutura, regulação, tributação e estratégias

## Design System

### Tema Visual

**Estilo**: Dark theme moderno com glass morphism

**Cores** (definidas em `app/globals.css` via `@theme inline`):
```css
--color-background: #04060c    /* Fundo principal (azul muito escuro) */
--color-surface: #0b1020       /* Superfícies (azul escuro) */
--color-foreground: #e5ecff    /* Texto principal (azul claro) */
--color-muted: #98a3b3         /* Texto secundário (cinza) */
--color-accent: #a7ff4f        /* Destaque (verde) */
--color-secondary: #7c7bff     /* Secundária (roxo) */
```

**Background**:
- Gradientes radiais no body com cores secondary e accent
- Linear gradient de cima para baixo
- Efeito de profundidade

**Componentes**:
- Glass cards: `glass` class com background translúcido, bordas sutis e sombras
- DaisyUI tema "business" com customizações via CSS variables

### Tipografia

- **Fonte Principal**: Geist Sans (via next/font/google)
- **Fonte Mono**: Geist Mono (via next/font/google)
- **Carregamento**: Otimizado via Next.js Font Optimization

## Mercados e Features

### Mercados Suportados

1. **Criptomoedas**: Bitcoin, Ethereum, Solana, altcoins, DeFi, staking
2. **Futuros Americanos**: S&P 500, NASDAQ 100, Dow Jones, Russell 2000, commodities, Treasuries
3. **Futuros Asiáticos**: Nikkei 225, Hang Seng, SGX, KOSPI
4. **Futuros Brasileiros**: Ibovespa, Mini-Índice, Dólar, Euro, commodities agrícolas, DI
5. **Fundos Imobiliários**: FIIs diversos segmentos
6. **ETFs**: Nacionais, setoriais, internacionais, temáticos

### Features Principais

1. Dashboard Unificado
2. IA para Carteiras
3. Análise em Tempo Real
4. Alertas Inteligentes
5. Simulador e Backtesting
6. Transparência Total

## Contexto do Negócio

### Propósito da Plataforma

O **Wolfstoke** é uma **plataforma de tecnologia** que:
- Centraliza acesso a múltiplos mercados mundiais
- Integra com corretoras através de parcerias
- **NÃO é uma corretora** (importante para comunicação)
- Oferece tecnologia institucional para investidores

### Valores e Princípios

- **Transparência**: Sem taxas ocultas, todos os custos claros
- **Educação**: Conteúdo educacional sobre mercados e investimentos
- **Segurança**: Criptografia nível bancário, conformidade LGPD
- **Acessibilidade**: Tecnologia institucional para todos os perfis de investidor
- **Inovação**: IA para montagem de carteiras, análise em tempo real

### Conteúdo

- **Idioma**: Português brasileiro
- **Público**: Investidores brasileiros (iniciantes a experientes)
- **Tom**: Educacional, transparente, profissional
- **Foco**: Educação financeira e apresentação da plataforma

## Padrões de Desenvolvimento

### Estrutura de Página

Todas as páginas seguem o mesmo padrão:

```tsx
<div className="relative overflow-hidden text-foreground">
  <BackgroundEffects />
  <[Feature]Header />
  <main className="relative z-10">
    <HeroSection />
    {/* Seções específicas */}
    <[LastSection] />
  </main>
  <Footer />
  <ContactButtons />
</div>
```

### Padrão de Componente

```tsx
import { data } from "@/app/lib/feature/data";

export default function FeatureSection() {
  return (
    <section className="px-4 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Conteúdo */}
      </div>
    </section>
  );
}
```

### Padrão de Dados

```tsx
export interface Item {
  title: string;
  description: string;
}

export const items: Item[] = [
  { title: "Título", description: "Descrição" },
];
```

## Futuro do Projeto

### Possíveis Expansões

- Páginas adicionais para outros mercados ou features
- Integração com APIs reais
- Dashboard interativo
- Sistema de autenticação
- Área do usuário
- Blog/conteúdo educacional dinâmico

### Melhorias Técnicas

- Testes automatizados (Jest + React Testing Library)
- Otimização de performance
- SEO avançado
- Analytics
- Internacionalização (i18n) se necessário

## Notas Importantes

- Sempre usar `pnpm` para gerenciamento de pacotes
- Manter consistência visual entre páginas
- Seguir padrões arquiteturais estabelecidos
- Documentar mudanças significativas
- Manter componentes reutilizáveis quando possível
- Separar dados da lógica de apresentação
