# Adaptação DexScreener → Wolfstoke
## Guia de Implementação Contextualizada

---

## 🎯 Visão Geral

Este documento mostra como adaptar os padrões do DexScreener para o contexto específico do Wolfstoke, mantendo a identidade visual existente enquanto incorpora os melhores padrões de UX para dados financeiros.

---

## 1. Sistema de Cores Híbrido

### Comparação de Paletas

| Elemento | DexScreener | Wolfstoke Atual | Wolfstoke Novo (Híbrido) |
|----------|-------------|-----------------|--------------------------|
| Background Primary | `#111116` | `#04060c` | `#04060c` ✓ (manter) |
| Background Secondary | `#17171c` | `#0b1020` | `#0b1020` ✓ (manter) |
| Background Cards | `#1e1e24` | *não definido* | `#13172a` ⭐ (novo) |
| Border Subtle | `#2a2a32` | *não definido* | `#1e2235` ⭐ (novo) |
| Accent | `#305dff` | `#a7ff4f` | `#a7ff4f` ✓ (manter) |
| Secondary | `#7c7bff` | `#7c7bff` | `#7c7bff` ✓ (manter) |
| Price Up | `#00c853` | *não definido* | `#00c853` ⭐ (novo) |
| Price Down | `#ff3b30` | *não definido* | `#ff3b30` ⭐ (novo) |

### Implementação no globals.css

```css
/* app/globals.css - ADICIONAR ao existente */

:root {
  /* Cores existentes do Wolfstoke - MANTER */
  --background: #04060c;
  --surface: #0b1020;
  --foreground: #e5ecff;
  --muted: #98a3b3;
  --accent: #a7ff4f;
  --secondary: #7c7bff;

  /* Novas cores inspiradas no DexScreener - ADICIONAR */
  --bg-card: #13172a;          /* Cards elevados */
  --border-subtle: #1e2235;    /* Bordas sutis */
  --border-strong: #2a2f45;    /* Bordas em hover/focus */

  --accent-blue: #4a9eff;      /* Azul neutro para dados */

  /* Cores semânticas para dados financeiros - ADICIONAR */
  --price-up: #00c853;         /* Verde para alta */
  --price-up-light: #26ff7c;   /* Verde claro */
  --price-down: #ff3b30;       /* Vermelho para baixa */
  --price-down-light: #ff6b6b; /* Vermelho claro */
  --price-neutral: #98a3b3;    /* Neutro (< ±2.5%) */

  --volume-high: #4a9eff;      /* Volume alto */
  --volume-medium: #6b7bff;    /* Volume médio */
  --volume-low: #4a4a5a;       /* Volume baixo */

  /* Status - ADICIONAR */
  --status-new: #ffd700;       /* Novo */
  --status-trending: #ff6b35;  /* Trending */
  --status-verified: #00c853;  /* Verificado */
  --status-warning: #ff9500;   /* Aviso */
}

/* Compatibilidade com DaisyUI - ADICIONAR */
[data-theme="business"] {
  --bc: var(--border-subtle);
  --b1: var(--surface);
  --b2: var(--bg-card);
}
```

---

## 2. Páginas Principais Adaptadas

### 2.1 Dashboard Unificado (Nova Página)

**Inspiração**: Página principal do DexScreener
**Contexto Wolfstoke**: Visão geral de investimentos do usuário

```tsx
// app/dashboard/page.tsx
import DashboardLayout from "@/app/components/dashboard/DashboardLayout";
import PortfolioOverview from "@/app/components/dashboard/PortfolioOverview";
import MarketsSummary from "@/app/components/dashboard/MarketsSummary";
import RecentAlerts from "@/app/components/dashboard/RecentAlerts";
import AIRecommendations from "@/app/components/dashboard/AIRecommendations";

export const metadata = {
  title: "Dashboard | Wolfstoke",
  description: "Visão geral dos seus investimentos",
};

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Portfolio Overview - 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <DataCard
            title="Patrimônio Total"
            value="R$ 125.430,50"
            change={5.67}
            subtitle="Últimos 30 dias"
          />
          <DataCard
            title="Rentabilidade (Mês)"
            value="+8.2%"
            change={2.1}
            subtitle="Acima do CDI (6.5%)"
          />
          <DataCard
            title="Ativos na Carteira"
            value="24"
            subtitle="Diversificados em 5 mercados"
          />
          <DataCard
            title="Alertas Ativos"
            value="7"
            badge="3 Novos"
            subtitle="Oportunidades identificadas"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Left: Portfolio + Chart (2 cols) */}
          <div className="xl:col-span-2 space-y-6">
            <PortfolioChart />
            <TopPerformers />
          </div>

          {/* Right: Alerts + AI (1 col) */}
          <div className="space-y-6">
            <RecentAlerts />
            <AIRecommendations />
          </div>
        </div>

        {/* Bottom: Recent Transactions */}
        <RecentTransactionsTable />
      </div>
    </DashboardLayout>
  );
}
```

### 2.2 Mercados (Crypto, ETFs, Futuros)

**Inspiração**: Listagem de pares do DexScreener
**Contexto Wolfstoke**: Explorar oportunidades em diferentes mercados

```tsx
// app/mercados/page.tsx
import DashboardLayout from "@/app/components/dashboard/DashboardLayout";
import MarketTabs from "@/app/components/markets/MarketTabs";
import MarketFilters from "@/app/components/markets/MarketFilters";
import MarketTable from "@/app/components/markets/MarketTable";

export default function MercadosPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Explorar Mercados</h1>
          <p className="text-[--muted]">
            Descubra oportunidades em criptomoedas, ETFs, futuros e mais
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard title="Volume 24h" value="R$ 2.4B" change={12.5} />
          <StatCard title="Ativos Disponíveis" value="1,247" />
          <StatCard title="Mercados" value="6" />
          <StatCard title="Atualizações/min" value="~500" />
        </div>

        {/* Tabs: Cripto | ETFs | Futuros | FIIs */}
        <MarketTabs />

        {/* Content */}
        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <MarketFilters />

          {/* Table */}
          <div className="flex-1">
            <MarketTable />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
```

---

## 3. Componentes Wolfstoke-Específicos

### 3.1 Portfolio Overview Card

```tsx
// app/components/dashboard/PortfolioOverview.tsx
interface Asset {
  symbol: string;
  name: string;
  type: 'crypto' | 'etf' | 'future' | 'fii';
  value: number;
  percentage: number;
  change24h: number;
}

export default function PortfolioOverview() {
  const assets: Asset[] = [
    { symbol: 'BTC', name: 'Bitcoin', type: 'crypto', value: 45200, percentage: 35, change24h: 2.5 },
    { symbol: 'BOVA11', name: 'iShares Ibovespa', type: 'etf', value: 28500, percentage: 25, change24h: 1.2 },
    { symbol: 'WDO', name: 'Mini Dólar', type: 'future', value: 20100, percentage: 20, change24h: -0.8 },
    { symbol: 'HGLG11', name: 'CSHG Logística', type: 'fii', value: 18300, percentage: 15, change24h: 0.3 },
  ];

  return (
    <div className="bg-[--surface] border border-[--border-subtle] rounded-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Minha Carteira</h2>
        <button className="text-sm text-[--accent] hover:underline">
          Ver Detalhes →
        </button>
      </div>

      {/* Assets List */}
      <div className="space-y-4">
        {assets.map((asset) => (
          <div key={asset.symbol} className="flex items-center gap-4">
            {/* Icon + Name */}
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold">{asset.symbol}</span>
                <TypeBadge type={asset.type} />
              </div>
              <span className="text-sm text-[--muted]">{asset.name}</span>
            </div>

            {/* Value */}
            <div className="text-right">
              <div className="font-mono font-semibold">
                R$ {asset.value.toLocaleString('pt-BR')}
              </div>
              <div className="text-sm text-[--muted]">{asset.percentage}%</div>
            </div>

            {/* Change */}
            <div className="w-24 text-right">
              <PriceChange value={asset.change24h} />
            </div>

            {/* Progress Bar */}
            <div className="hidden md:block w-32">
              <div className="h-2 bg-[--bg-card] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[--accent] transition-all"
                  style={{ width: `${asset.percentage}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="mt-6 pt-4 border-t border-[--border-subtle]">
        <div className="flex items-center justify-between">
          <span className="text-[--muted]">Patrimônio Total</span>
          <span className="text-2xl font-bold font-mono">
            R$ 112.100,00
          </span>
        </div>
      </div>
    </div>
  );
}
```

### 3.2 AI Recommendations Card

```tsx
// app/components/dashboard/AIRecommendations.tsx
interface Recommendation {
  id: string;
  type: 'buy' | 'sell' | 'rebalance' | 'alert';
  title: string;
  description: string;
  confidence: number;
  impact: 'high' | 'medium' | 'low';
}

export default function AIRecommendations() {
  const recommendations: Recommendation[] = [
    {
      id: '1',
      type: 'buy',
      title: 'Oportunidade em ETH',
      description: 'Ethereum apresenta setup técnico favorável. RSI: 42, suporte em $2,200.',
      confidence: 85,
      impact: 'high',
    },
    {
      id: '2',
      type: 'rebalance',
      title: 'Rebalancear Carteira',
      description: 'Exposição a cripto acima do ideal (38%). Sugestão: reduzir 5%.',
      confidence: 72,
      impact: 'medium',
    },
  ];

  return (
    <div className="bg-[--surface] border border-[--border-subtle] rounded-lg p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 bg-gradient-to-br from-[--accent] to-[--secondary]
                      rounded-lg flex items-center justify-center">
          <span className="text-lg">🤖</span>
        </div>
        <h2 className="text-xl font-semibold">IA para Carteiras</h2>
      </div>

      {/* Recommendations */}
      <div className="space-y-4">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            className="bg-[--bg-card] border border-[--border-subtle] rounded-lg p-4
                     hover:border-[--border-strong] transition-all cursor-pointer"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <RecommendationIcon type={rec.type} />
                <span className="font-semibold text-sm">{rec.title}</span>
              </div>
              <ImpactBadge impact={rec.impact} />
            </div>

            {/* Description */}
            <p className="text-sm text-[--muted] mb-3">
              {rec.description}
            </p>

            {/* Confidence */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-[--muted]">Confiança:</span>
              <div className="flex-1 h-1.5 bg-[--bg-card] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[--accent] to-[--secondary]"
                  style={{ width: `${rec.confidence}%` }}
                />
              </div>
              <span className="text-xs font-mono font-semibold">{rec.confidence}%</span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button className="w-full mt-4 px-4 py-2 bg-[--accent]/10 text-[--accent]
                       border border-[--accent]/20 rounded-lg hover:bg-[--accent]/20
                       transition-colors text-sm font-medium">
        Ver Todas as Recomendações →
      </button>
    </div>
  );
}
```

### 3.3 Market Type Badge

```tsx
// app/components/markets/TypeBadge.tsx
type MarketType = 'crypto' | 'etf' | 'future' | 'fii' | 'stock';

interface TypeBadgeProps {
  type: MarketType;
  size?: 'sm' | 'md';
}

const typeConfig: Record<MarketType, { label: string; color: string; icon: string }> = {
  crypto: { label: 'Cripto', color: 'yellow', icon: '₿' },
  etf: { label: 'ETF', color: 'blue', icon: '📊' },
  future: { label: 'Futuro', color: 'purple', icon: '📈' },
  fii: { label: 'FII', color: 'green', icon: '🏢' },
  stock: { label: 'Ação', color: 'orange', icon: '📉' },
};

export default function TypeBadge({ type, size = 'sm' }: TypeBadgeProps) {
  const config = typeConfig[type];
  const colorClass = `bg-${config.color}-500/10 text-${config.color}-500 border-${config.color}-500/20`;
  const sizeClass = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm';

  return (
    <span className={`inline-flex items-center gap-1 rounded-full border ${colorClass} ${sizeClass}`}>
      <span>{config.icon}</span>
      <span className="font-medium">{config.label}</span>
    </span>
  );
}
```

### 3.4 Market Tabs

```tsx
// app/components/markets/MarketTabs.tsx
"use client";

import { useState } from "react";

const tabs = [
  { id: 'all', label: 'Todos', count: 1247 },
  { id: 'crypto', label: 'Criptomoedas', count: 234, icon: '₿' },
  { id: 'etfs', label: 'ETFs', count: 156, icon: '📊' },
  { id: 'futures', label: 'Futuros', count: 89, icon: '📈' },
  { id: 'fiis', label: 'FIIs', count: 342, icon: '🏢' },
  { id: 'stocks', label: 'Ações', count: 426, icon: '📉' },
];

export default function MarketTabs() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="border-b border-[--border-subtle] overflow-x-auto scrollbar-thin">
      <nav className="flex gap-2 min-w-max">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-4 py-3 text-sm font-medium transition-all relative
              ${activeTab === tab.id
                ? 'text-[--accent]'
                : 'text-[--muted] hover:text-[--foreground]'
              }
            `}
          >
            <div className="flex items-center gap-2">
              {tab.icon && <span>{tab.icon}</span>}
              <span>{tab.label}</span>
              <span className="text-xs opacity-60">({tab.count})</span>
            </div>

            {/* Active Indicator */}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[--accent]" />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}
```

---

## 4. Tabela de Mercados Completa

```tsx
// app/components/markets/MarketTable.tsx
import PriceChange from "@/app/components/dashboard/PriceChange";
import TypeBadge from "@/app/components/markets/TypeBadge";
import Sparkline from "@/app/components/dashboard/Sparkline";

interface MarketData {
  id: string;
  symbol: string;
  name: string;
  type: MarketType;
  price: number;
  change24h: number;
  change7d: number;
  volume24h: number;
  marketCap?: number;
  sparkline: number[];
  isNew?: boolean;
  isTrending?: boolean;
}

export default function MarketTable() {
  const data: MarketData[] = [
    {
      id: '1',
      symbol: 'BTC/USDT',
      name: 'Bitcoin',
      type: 'crypto',
      price: 42150.50,
      change24h: 2.35,
      change7d: 8.67,
      volume24h: 28500000000,
      marketCap: 820000000000,
      sparkline: [40000, 40500, 41000, 40800, 41500, 42000, 42150],
      isTrending: true,
    },
    {
      id: '2',
      symbol: 'BOVA11',
      name: 'iShares Ibovespa Fundo de Índice',
      type: 'etf',
      price: 125.30,
      change24h: 1.20,
      change7d: 3.45,
      volume24h: 145000000,
      sparkline: [123, 124, 125, 124.5, 125.5, 125.8, 125.3],
      isNew: false,
    },
  ];

  return (
    <div className="overflow-x-auto border border-[--border-subtle] rounded-lg">
      <table className="w-full">
        {/* Header */}
        <thead className="bg-[--bg-card] sticky top-0">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold text-[--muted] uppercase">
              Ativo
            </th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-[--muted] uppercase">
              Preço
            </th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-[--muted] uppercase">
              24h
            </th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-[--muted] uppercase">
              7d
            </th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-[--muted] uppercase">
              Volume 24h
            </th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-[--muted] uppercase">
              Gráfico 7d
            </th>
          </tr>
        </thead>

        {/* Body */}
        <tbody className="divide-y divide-[--border-subtle]">
          {data.map((item) => (
            <tr
              key={item.id}
              className="hover:bg-[--bg-card] transition-colors cursor-pointer"
            >
              {/* Asset */}
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold">{item.symbol}</span>
                      <TypeBadge type={item.type} />
                      {item.isNew && <StatusBadge variant="new">Novo</StatusBadge>}
                      {item.isTrending && <span className="text-sm">🔥</span>}
                    </div>
                    <div className="text-sm text-[--muted]">{item.name}</div>
                  </div>
                </div>
              </td>

              {/* Price */}
              <td className="px-4 py-4 text-right">
                <span className="font-mono font-semibold">
                  {item.type === 'crypto'
                    ? `$${item.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}`
                    : `R$ ${item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
                  }
                </span>
              </td>

              {/* 24h Change */}
              <td className="px-4 py-4 text-right">
                <PriceChange value={item.change24h} showIcon />
              </td>

              {/* 7d Change */}
              <td className="px-4 py-4 text-right">
                <PriceChange value={item.change7d} showIcon />
              </td>

              {/* Volume */}
              <td className="px-4 py-4 text-right">
                <span className="font-mono text-sm text-[--muted]">
                  {formatVolume(item.volume24h)}
                </span>
              </td>

              {/* Sparkline */}
              <td className="px-4 py-4 text-right">
                <Sparkline
                  data={item.sparkline}
                  color={item.change7d > 0 ? 'green' : 'red'}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function formatVolume(volume: number): string {
  if (volume >= 1e9) return `$${(volume / 1e9).toFixed(2)}B`;
  if (volume >= 1e6) return `$${(volume / 1e6).toFixed(1)}M`;
  if (volume >= 1e3) return `$${(volume / 1e3).toFixed(0)}k`;
  return `$${volume.toFixed(0)}`;
}
```

---

## 5. Navegação Adaptada para Wolfstoke

### Sidebar Menu

```tsx
// app/components/dashboard/Sidebar.tsx
const menuSections = [
  {
    title: 'Principal',
    items: [
      { icon: '🏠', label: 'Dashboard', href: '/dashboard' },
      { icon: '💼', label: 'Minha Carteira', href: '/portfolio' },
      { icon: '📊', label: 'Mercados', href: '/markets' },
    ],
  },
  {
    title: 'Análise',
    items: [
      { icon: '📈', label: 'Análise Técnica', href: '/analysis/technical' },
      { icon: '📰', label: 'Análise Fundamentalista', href: '/analysis/fundamental' },
      { icon: '🤖', label: 'IA para Carteiras', href: '/ai' },
    ],
  },
  {
    title: 'Ferramentas',
    items: [
      { icon: '🔔', label: 'Alertas', href: '/alerts', badge: '3' },
      { icon: '🎮', label: 'Simulador', href: '/simulator' },
      { icon: '⚡', label: 'Backtesting', href: '/backtest' },
    ],
  },
  {
    title: 'Configurações',
    items: [
      { icon: '⚙️', label: 'Preferências', href: '/settings' },
      { icon: '🔐', label: 'Segurança', href: '/security' },
      { icon: '💳', label: 'Assinatura', href: '/subscription' },
    ],
  },
];

export default function Sidebar() {
  return (
    <aside className="w-[210px] h-screen bg-[--surface] border-r border-[--border-subtle]
                    overflow-y-auto scrollbar-thin sticky top-0">
      {/* Logo */}
      <div className="p-4 border-b border-[--border-subtle]">
        <div className="flex items-center gap-2">
          <WolfIcon className="w-8 h-8" />
          <span className="font-bold text-lg">Wolfstoke</span>
        </div>
      </div>

      {/* Menu */}
      <nav className="p-2">
        {menuSections.map((section) => (
          <div key={section.title} className="mb-6">
            <h3 className="px-3 mb-2 text-xs font-semibold text-[--muted] uppercase">
              {section.title}
            </h3>
            <div className="space-y-1">
              {section.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg
                           text-sm text-[--foreground] hover:bg-[--bg-card]
                           transition-colors group"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="flex-1">{item.label}</span>
                  {item.badge && (
                    <span className="px-2 py-0.5 bg-[--accent]/20 text-[--accent]
                                 text-xs rounded-full font-medium">
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
```

---

## 6. Roadmap de Implementação

### Fase 1: Fundação (Semana 1)
- [x] Atualizar `globals.css` com CSS variables híbridas
- [x] Configurar `tailwind.config.ts`
- [ ] Criar estrutura de pastas `app/components/dashboard/`
- [ ] Criar estrutura de pastas `app/components/markets/`
- [ ] Criar `DashboardLayout.tsx`

### Fase 2: Componentes Base (Semana 2)
- [ ] `DataCard.tsx`
- [ ] `StatusBadge.tsx`
- [ ] `PriceChange.tsx`
- [ ] `TypeBadge.tsx`
- [ ] `SearchInput.tsx`
- [ ] Loading & Empty States

### Fase 3: Navegação (Semana 3)
- [ ] `Sidebar.tsx` com menu Wolfstoke
- [ ] `MobileNav.tsx`
- [ ] `Header.tsx` para dashboard
- [ ] Integrar navegação com páginas existentes

### Fase 4: Dashboard (Semana 4)
- [ ] Criar `/dashboard/page.tsx`
- [ ] `PortfolioOverview.tsx`
- [ ] `AIRecommendations.tsx`
- [ ] `RecentAlerts.tsx`
- [ ] Integração com dados mock

### Fase 5: Mercados (Semana 5-6)
- [ ] Criar `/markets/page.tsx`
- [ ] `MarketTabs.tsx`
- [ ] `MarketTable.tsx`
- [ ] `MarketFilters.tsx`
- [ ] Integração com API real (se disponível)

### Fase 6: Polish & Deploy (Semana 7)
- [ ] Testes de responsividade
- [ ] Ajustes de performance
- [ ] Otimização de imagens e assets
- [ ] Deploy em staging
- [ ] Testes de usuário
- [ ] Deploy em produção

---

## 7. Considerações Finais

### Manter Identidade Wolfstoke
- ✅ Verde `#a7ff4f` e Roxo `#7c7bff` continuam como cores principais
- ✅ Logo e branding permanecem iguais
- ✅ Adicionar cores semânticas (price up/down) sem conflitar
- ✅ Background dark theme (`#04060c`) é mantido

### Adicionar Padrões DexScreener
- ⭐ Layout sticky (sidebar + header)
- ⭐ Tabelas com horizontal scroll
- ⭐ Cards com hover states
- ⭐ Tipografia monospace para dados
- ⭐ Status badges coloridos
- ⭐ Filtros em sidebar
- ⭐ Empty/Loading states consistentes

### Próximos Steps Sugeridos
1. **Criar branch** `feature/dexscreener-ui` para desenvolvimento
2. **Implementar globals.css** com novas CSS variables
3. **Criar primeiro componente** (`DataCard`) como POC
4. **Iterar** com feedback do time
5. **Migrar progressivamente** páginas existentes para novo padrão

---

**Documento de Adaptação v1.0** | Janeiro 2026
