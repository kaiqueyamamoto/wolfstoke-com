# Repository Guidelines

## Sobre o Projeto

**Wolfstoke Site** é uma plataforma de tecnologia para investimentos que centraliza acesso a múltiplos mercados mundiais através de parcerias com corretoras regulamentadas. O site apresenta informações sobre criptomoedas, ETFs, futuros e outros mercados financeiros, com foco em educação e transparência.

### Propósito

- **Home** (`/`): Landing page principal apresentando a plataforma, mercados disponíveis (Criptomoedas, Futuros Americanos/Asiáticos/Brasileiros, FIIs, ETFs), features (Dashboard Unificado, IA para Carteiras, Análise em Tempo Real, etc.), planos de assinatura e FAQ
- **Crypto** (`/crypto`): Página focada em trading de criptomoedas, inspirada em plataformas de prop trading, apresentando features, passos, comparações, pares de criptomoedas e FAQ
- **ETFs** (`/etfs`): Página educacional sobre Exchange Traded Funds no Brasil, abordando mecanismos, regulação, tipos, tributação, performance, liquidez e estratégias de alocação

### Stack Tecnológico

- **Framework**: Next.js 16.1.1 (App Router)
- **React**: 19.2.3
- **TypeScript**: Modo strict ativado
- **Estilização**: Tailwind CSS 4 com DaisyUI 5.5.14 (tema "business")
- **Fontes**: Geist Sans e Geist Mono (via next/font/google)
- **Gerenciador de Pacotes**: pnpm (preferido, manter alinhado com `pnpm-lock.yaml`)

### Design System

- **Tema**: Dark theme com gradientes radiais e glass morphism
- **Cores Principais** (definidas em `globals.css`):
  - Background: `#04060c`
  - Surface: `#0b1020`
  - Foreground: `#e5ecff`
  - Muted: `#98a3b3`
  - Accent: `#a7ff4f` (verde)
  - Secondary: `#7c7bff` (roxo)
- **Padrão Visual**: Glass cards com bordas sutis (`glass` class), gradientes radiais no background do body
- **Componentes DaisyUI**: Usando tema "business" com customizações via CSS variables

### Histórico de Evolução

O projeto foi inicializado como um site Next.js padrão e evoluiu para uma plataforma completa de apresentação com três páginas principais:

1. **Página Home**: Primeira página desenvolvida, apresentando a visão geral da plataforma Wolfstoke
2. **Página Crypto**: Desenvolvida posteriormente, focada em trading de criptomoedas
3. **Página ETFs**: Última página adicionada, com conteúdo educacional sobre ETFs no Brasil

Cada página segue o mesmo padrão arquitetural:
- Componentes organizados por feature em `app/components/<feature>/`
- Dados centralizados em `app/lib/<feature>/data.ts`
- Páginas como orquestradores finos (< 50 linhas)
- Estrutura visual consistente: BackgroundEffects → Header → Sections → Footer → ContactButtons

## Project Structure & Module Organization
- `app/` uses the Next.js App Router; `layout.tsx` sets fonts/global styles and `globals.css` holds the Tailwind CSS 4 inline theme. Add routes as `app/<route>/page.tsx` and keep shared UI/helpers in `app/components` or `app/lib` to keep pages thin.
- `public/` stores static assets (logos, icons, meta images) referenced with absolute paths like `/next.svg`.
- Configuration lives in `next.config.ts`, `postcss.config.mjs`, `tsconfig.json`, and `eslint.config.mjs` (TypeScript strict mode, `@/*` alias, `eslint-config-next` rules). Avoid editing generated files (`.next/**`, `next-env.d.ts`).

### Component Organization & Layout Patterns
- **Component Structure**: Break pages into reusable components organized by feature/route. Use `app/components/<feature>/` for feature-specific components (e.g., `app/components/crypto/`).
- **Data Layer**: Keep constants, types, and data structures in `app/lib/<feature>/data.ts`. Export TypeScript interfaces alongside data arrays for type safety.
- **Page Composition**: Pages should be thin orchestrators that import and compose components. Aim for pages under 50 lines, using components for all UI sections.
- **Component Naming**: Use descriptive PascalCase names ending with the component type (`HeroSection.tsx`, `CryptoHeader.tsx`, `FAQSection.tsx`). Prefer specific over generic names.
- **Import Paths**: Use `@/app/` alias for imports (e.g., `@/app/components/crypto/HeroSection`, `@/app/lib/crypto/data`).
- **Layout Pattern**: Follow this structure for complex pages:
  ```tsx
  // page.tsx (thin orchestrator)
  import Component1 from "@/app/components/feature/Component1";
  import Component2 from "@/app/components/feature/Component2";
  
  export default function Page() {
    return (
      <div className="relative">
        <Component1 />
        <Component2 />
      </div>
    );
  }
  ```
- **Data Pattern**: Centralize data with TypeScript interfaces:
  ```tsx
  // app/lib/feature/data.ts
  export interface Item {
    title: string;
    body: string;
  }
  
  export const items: Item[] = [
    { title: "Title", body: "Body" },
  ];
  ```
- **Component Pattern**: Components should import data from the data layer and render UI. Keep components focused on presentation:
  ```tsx
  // app/components/feature/FeatureSection.tsx
  import { items } from "@/app/lib/feature/data";
  
  export default function FeatureSection() {
    return (
      <section className="px-4 py-14">
        {items.map((item) => (
          <div key={item.title}>{item.title}</div>
        ))}
      </section>
    );
  }
  ```
- **Layout Structure**: For pages with multiple sections, use this structure:
  - Background effects component (if needed)
  - Header component (if page-specific)
  - Main content with section components in order
  - CTA section at the end

## Build, Test, and Development Commands
- `pnpm install` syncs dependencies (pnpm is preferred to stay aligned with `pnpm-lock.yaml`).
- `pnpm dev` starts the local server at `http://localhost:3000`.
- `pnpm build` creates a production bundle; `pnpm start` serves that bundle.
- `pnpm lint` runs ESLint with Next.js and TypeScript rules; fix warnings before committing.

## Coding Style & Naming Conventions
- TypeScript is strict; type component props/returns and prefer React Server Components unless client-side hooks/events require `"use client"`.
- Use PascalCase for components, camelCase for hooks/utilities, and keep file names descriptive (`HeroSection.tsx`, `useScrollLock.ts`).
- Keep 2-space indentation and the existing double-quote style. Leverage Tailwind utility classes; extend theme tokens in `globals.css` rather than duplicating hex values.
- Maintain semantic HTML and accessible defaults (meaningful `alt`, ARIA labels on interactive elements).
- **Component Files**: One component per file. Export default for components. Use named exports for data, types, and utilities.
- **Type Definitions**: Define TypeScript interfaces in the same file as related data, or in a dedicated `types.ts` file if shared across features.
- **Section Components**: Name section components descriptively (e.g., `HeroSection`, `FeaturesSection`, `PlansSection`) to clearly indicate their purpose and location on the page.

## Testing Guidelines
- No automated tests exist yet. When adding features, include component/integration tests (e.g., Jest + React Testing Library) in `__tests__/` or alongside components as `*.test.tsx`.
- Aim to cover new logic and user interactions; keep tests deterministic by mocking network/time. Add a `pnpm test` script once a runner is configured.

## Commit & Pull Request Guidelines
- Write clear, imperative commit messages (`Add hero copy`, `Fix layout spacing`); separate unrelated changes across commits.
- PRs should summarize scope, link issues, and list verification (`pnpm lint`, `pnpm build`). Include screenshots for UI changes and note required env vars or migrations.
- Keep PRs focused and small; update docs when behavior shifts and call out any breaking changes.

## Security & Configuration Tips
- Store secrets in `.env.local`; do not commit `.env*` files. Document required env keys in PRs.
- Validate external inputs on the server and avoid trusting client data. After dependency bumps, scan for issues and verify builds before release.

## Contexto do Negócio

### Mercados Suportados

O Wolfstoke oferece acesso aos seguintes mercados (dados em `app/lib/home/data.ts`):

- **Criptomoedas**: Bitcoin, Ethereum, Solana, altcoins, tokens DeFi, staking
- **Futuros Americanos**: S&P 500, NASDAQ 100, Dow Jones, Russell 2000, commodities, Treasuries
- **Futuros Asiáticos**: Nikkei 225, Hang Seng, SGX, KOSPI
- **Futuros Brasileiros**: Ibovespa, Mini-Índice, Dólar, Euro, commodities agrícolas, DI
- **Fundos Imobiliários**: FIIs de diversos segmentos (lajes, galpões, shopping centers, papel, híbridos)
- **ETFs**: Nacionais (BOVA11, SMAL11, IVVB11), setoriais, internacionais, temáticos

### Features Principais

- Dashboard Unificado
- IA para Carteiras (montagem automática baseada em perfil)
- Análise em Tempo Real (técnica e fundamentalista)
- Alertas Inteligentes
- Simulador e Backtesting
- Transparência Total

### Importante

- O Wolfstoke **NÃO é uma corretora**, é uma plataforma de tecnologia
- Integração com corretoras através de parcerias
- Foco em educação financeira e transparência
- Conteúdo em português brasileiro
- Conformidade com LGPD
