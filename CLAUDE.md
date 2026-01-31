# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Comandos de Desenvolvimento

### Instalação e Execução
```bash
pnpm install          # Instalar dependências (sempre use pnpm, nunca npm/yarn)
pnpm dev              # Servidor de desenvolvimento (http://localhost:3000)
pnpm build            # Build de produção
pnpm start            # Servidor de produção
pnpm lint             # Executar ESLint
```

**Importante**: Este projeto usa **pnpm** como gerenciador de pacotes. Sempre use pnpm para manter consistência com `pnpm-lock.yaml`.

## Arquitetura do Projeto

### Stack Tecnológico
- **Next.js 16.1.1** com App Router
- **React 19.2.3** (Server Components por padrão)
- **TypeScript** (strict mode ativado)
- **Tailwind CSS 4** + **DaisyUI 5.5.14** (tema "business")
- **Markdown**: `react-markdown` + `remark-gfm` para renderização de posts do blog

### Estrutura de Diretórios

```
app/
├── _blog/                    # Posts markdown do blog (não é rota)
│   ├── _agents/             # Diretório ignorado pelo sistema de posts
│   └── *.md                 # Arquivos markdown dos posts
├── components/              # Componentes organizados por feature
│   ├── home/               # Componentes da home
│   ├── crypto/             # Componentes da página /crypto
│   ├── etfs/               # Componentes da página /etfs
│   ├── solucoes/           # Componentes da página /solucoes
│   ├── duvidas/            # Componentes da página /duvidas
│   ├── posts/              # Componentes da página /posts
│   ├── Header.tsx          # Header compartilhado
│   ├── ContactButtons.tsx  # Botões flutuantes de contato
│   └── WolfIcon.tsx        # Ícone da marca
├── lib/                    # Camada de dados (dados, tipos, utilidades)
│   ├── home/data.ts
│   ├── crypto/data.ts
│   ├── etfs/data.ts
│   ├── solucoes/
│   ├── duvidas/
│   └── posts/utils.ts      # Funções para ler posts markdown
├── [feature]/page.tsx      # Páginas das rotas
└── globals.css             # Tema e estilos globais
```

### Padrões de Arquitetura

#### 1. Páginas como Orquestradores Finos
As páginas devem ter **menos de 50 linhas** e servir apenas para importar e compor componentes:

```tsx
// app/page.tsx (exemplo)
import BackgroundEffects from "@/app/components/home/BackgroundEffects";
import Header from "@/app/components/Header";
import HeroSection from "@/app/components/home/HeroSection";
import Footer from "@/app/components/home/Footer";

export default function Home() {
  return (
    <div className="relative overflow-hidden text-foreground">
      <BackgroundEffects />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        {/* ... outros componentes */}
      </main>
      <Footer />
    </div>
  );
}
```

#### 2. Separação de Dados e Lógica
Todos os dados, tipos e constantes devem ficar em `app/lib/<feature>/`:

```tsx
// app/lib/home/data.ts
export interface Market {
  icon: string;
  title: string;
  description: string;
}

export const markets: Market[] = [
  { icon: "₿", title: "Criptomoedas", description: "..." },
  // ...
];
```

#### 3. Componentes por Feature
Componentes são organizados em `app/components/<feature>/` e importam dados da camada `lib/`:

```tsx
// app/components/home/MarketsSection.tsx
import { markets } from "@/app/lib/home/data";

export default function MarketsSection() {
  return (
    <section>
      {markets.map((market) => (
        <div key={market.title}>{market.title}</div>
      ))}
    </section>
  );
}
```

#### 4. Nomenclatura de Componentes
Use **PascalCase** com sufixo descritivo do tipo de componente:
- `HeroSection.tsx` (seção de hero)
- `CryptoHeader.tsx` (cabeçalho da página crypto)
- `FAQSection.tsx` (seção de FAQ)
- `PostsListSection.tsx` (seção de listagem de posts)

#### 5. Import Paths
Use o alias `@/app/` para imports absolutos:

```tsx
import HeroSection from "@/app/components/home/HeroSection";
import { markets } from "@/app/lib/home/data";
```

#### 6. Server Components por Padrão
Todos os componentes são **Server Components** por padrão. Use `"use client"` apenas quando necessário (hooks, eventos, interatividade).

```tsx
// Apenas quando necessário
"use client";

import { useState } from "react";

export default function InteractiveComponent() {
  const [state, setState] = useState(false);
  // ...
}
```

### Sistema de Blog

O projeto possui um sistema de blog baseado em arquivos markdown:

#### Estrutura de Posts
- Posts ficam em `app/_blog/*.md` (diretório prefixado com `_` não vira rota)
- Posts em subdiretórios como `_blog/_agents/` são **ignorados** pela leitura
- Sistema extrai automaticamente título (primeiro H1), excerpt e data de modificação

#### Funções de Leitura (app/lib/posts/utils.ts)
```tsx
import { getAllBlogPosts, getPostBySlug } from "@/app/lib/posts/utils";

// Retorna todos os posts ordenados por data (mais recente primeiro)
const posts = getAllBlogPosts();

// Retorna um post específico pelo slug
const post = getPostBySlug("btc-usdt-guia-completo");
```

#### Rotas de Blog
- `/posts` - Listagem paginada de todos os posts
- `/posts/[slug]` - Post individual renderizado com react-markdown
- `/duvidas` - Listagem de posts filtrados (mesmo sistema)
- `/duvidas/[slug]` - Post individual da seção duvidas

### Design System

#### Tema e Cores
O projeto usa um **dark theme** com as seguintes cores (definidas em `globals.css`):

```css
--background: #04060c;      /* Fundo principal */
--surface: #0b1020;         /* Superfícies e cards */
--foreground: #e5ecff;      /* Texto principal */
--muted: #98a3b3;           /* Texto secundário */
--accent: #a7ff4f;          /* Verde de destaque */
--secondary: #7c7bff;       /* Roxo secundário */
```

#### Padrão Visual
- **Glass morphism**: Cards com classe `glass` (borda sutil, backdrop-blur)
- **Gradientes radiais**: Background com gradientes em `--accent` e `--secondary`
- **DaisyUI**: Tema "business" com customizações via CSS variables

#### Componente BackgroundEffects
Cada página tem seu próprio `BackgroundEffects.tsx` que cria gradientes radiais animados no background.

## Convenções de Código

### TypeScript
- **Strict mode** sempre ativado
- Tipar props de componentes e retornos de funções
- Definir interfaces para dados estruturados

### Exports
- **Default export** para componentes
- **Named exports** para dados, tipos e utilidades

```tsx
// Componente
export default function MyComponent() { }

// Dados e tipos
export interface Item { }
export const items: Item[] = [];
```

### Formatação
- **Indentação**: 2 espaços
- **Aspas**: Double quotes (`"`)
- **Um componente por arquivo**

### HTML Semântico e Acessibilidade
- Usar elementos semânticos apropriados (`<section>`, `<article>`, `<nav>`)
- Atributos `alt` em todas as imagens
- ARIA labels em elementos interativos

## Contexto do Negócio

### O que é Wolfstoke
Wolfstoke é uma **plataforma de tecnologia para investimentos** que centraliza acesso a múltiplos mercados mundiais através de parcerias com corretoras regulamentadas.

**IMPORTANTE**: Wolfstoke **NÃO é uma corretora**, é uma plataforma de tecnologia. A integração com mercados é feita via parcerias.

### Mercados Suportados
- **Criptomoedas**: Bitcoin, Ethereum, Solana, altcoins, tokens DeFi
- **Futuros Americanos**: S&P 500, NASDAQ 100, Dow Jones, Russell 2000
- **Futuros Asiáticos**: Nikkei 225, Hang Seng, SGX, KOSPI
- **Futuros Brasileiros**: Ibovespa, Mini-Índice, Dólar, Commodities
- **Fundos Imobiliários (FIIs)**: Diversos segmentos
- **ETFs**: Nacionais e internacionais

### Features Principais
- Dashboard Unificado para visualização de investimentos
- IA para Carteiras (montagem automática baseada em perfil)
- Análise em Tempo Real (técnica e fundamentalista)
- Alertas Inteligentes personalizados
- Simulador e Backtesting de estratégias
- Transparência Total em custos e operações

### Páginas do Site
- **`/`** (Home): Landing page principal com visão geral da plataforma
- **`/crypto`**: Página focada em trading de criptomoedas
- **`/etfs`**: Página educacional sobre ETFs no Brasil
- **`/solucoes`**: Desenvolvimento de soluções personalizadas (13 tipos diferentes, incluindo automações com Profit/Neologica)
- **`/duvidas`**: Blog com posts sobre dúvidas de investimentos
- **`/posts`**: Blog com conteúdo educacional geral

### Integrações com Plataformas de Trading
O projeto oferece desenvolvimento de soluções para:
- **Profit/Neologica**: Desenvolvimento em NTSL
- **MetaTrader**: Expert Advisors em MQL4/MQL5
- **TradingView**: Estratégias em Pine Script
- **APIs de Corretoras**: Integração REST/WebSocket

## Notas Importantes

### Segurança e Compliance
- Conformidade com **LGPD**
- Foco em segurança e transparência
- Sem armazenamento de dados sensíveis no frontend
- Validação de inputs

### Conteúdo
- Todo conteúdo em **português brasileiro**
- Foco em educação financeira
- Transparência total
