# DexScreener Design Templates
## Estudo de Layout e Componentes para Wolfstoke

**Data de Análise**: Janeiro 2026
**Site Analisado**: [dexscreener.com](https://dexscreener.com)
**Objetivo**: Extrair padrões de design, componentes e estruturas de layout para implementar no site Wolfstoke

---

## 1. Visão Geral do Design System

### Filosofia de Design
O DexScreener utiliza uma abordagem **data-dense** (densa em dados) com foco em:
- **Maximização de informação visível**: Exibir o máximo de dados sem sobrecarregar
- **Hierarquia visual clara**: Uso de tamanhos, cores e espaçamento para guiar o olhar
- **Performance primeiro**: Layout otimizado para renderização rápida de grandes volumes de dados
- **Mobile-first responsivo**: Adaptação inteligente para diferentes tamanhos de tela

### Princípios de UX
1. **Sticky Positioning**: Navegação e cabeçalhos fixos para contexto constante
2. **Horizontal Scrolling**: Tabelas rolam horizontalmente para preservar largura de colunas
3. **Visual Feedback**: Estados de hover, focus e loading bem definidos
4. **Hierarquia de Dados**: Métricas mais importantes recebem destaque visual

---

## 2. Sistema de Cores

### Paleta Base (Dark Theme)

```css
/* Backgrounds */
--bg-primary: #111116;      /* Fundo principal (azul escuro profundo) */
--bg-secondary: #17171c;    /* Fundo de cards e containers */
--bg-tertiary: #1e1e24;     /* Fundo de elementos elevados */

/* Borders */
--border-primary: #2a2a32;  /* Bordas principais */
--border-secondary: #1e1e24; /* Bordas sutis */

/* Text */
--text-primary: #ffffff;     /* Texto principal */
--text-secondary: #a0a0b0;   /* Texto secundário */
--text-muted: #6b6b7b;       /* Texto desabilitado/terciário */

/* Accent Colors */
--accent-blue: #305dff;      /* Azul de destaque */
--accent-green: #00c853;     /* Verde (positivo) */
--accent-red: #ff3b30;       /* Vermelho (negativo) */
--accent-yellow: #ffd700;    /* Amarelo (moonshot/alerta) */
--accent-gold: #d4af37;      /* Dourado (boost/premium) */
```

### Cores Semânticas para Dados Financeiros

```css
/* Price Changes */
--price-up: #00c853;         /* +2.5% ou mais */
--price-up-light: #26ff7c;   /* +5% ou mais */
--price-down: #ff3b30;       /* -2.5% ou menos */
--price-down-light: #ff6b6b; /* -5% ou menos */
--price-neutral: #a0a0b0;    /* < ±2.5% */

/* Volume Indicators */
--volume-high: #305dff;      /* Volume alto */
--volume-medium: #6b7bff;    /* Volume médio */
--volume-low: #4a4a5a;       /* Volume baixo */

/* Status Badges */
--status-new: #ffd700;       /* Novo token/par */
--status-trending: #ff6b35;  /* Trending */
--status-verified: #00c853;  /* Verificado */
--status-warning: #ff9500;   /* Aviso */
```

### Aplicação no Wolfstoke

**Recomendação**: Adaptar a paleta base mantendo a identidade visual do Wolfstoke:

```css
/* Wolfstoke + DexScreener Hybrid */
--bg-primary: #04060c;       /* Manter Wolfstoke */
--bg-secondary: #0b1020;     /* Manter Wolfstoke */
--bg-card: #13172a;          /* Novo: entre secondary e surface */

--border-subtle: #1e2235;    /* Bordas mais visíveis que o atual */
--border-strong: #2a2f45;    /* Para separadores importantes */

--accent: #a7ff4f;           /* Verde Wolfstoke (manter) */
--secondary: #7c7bff;        /* Roxo Wolfstoke (manter) */
--accent-blue: #4a9eff;      /* Novo: azul para dados neutros */
```

---

## 3. Tipografia

### Fontes Utilizadas no DexScreener

```css
/* Headings */
font-family: "Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

/* Body Text */
font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

/* Monospace (números, dados) */
font-family: "Fira Mono", "SF Mono", "Monaco", "Consolas", monospace;
```

### Hierarquia de Tamanhos

| Elemento | Tamanho | Peso | Uso |
|----------|---------|------|-----|
| H1 Display | 3rem (48px) | 900 | Hero sections |
| H2 Section | 2rem (32px) | 700 | Seções principais |
| H3 Card Title | 1.5rem (24px) | 600 | Títulos de cards |
| H4 Subsection | 1.25rem (20px) | 600 | Subtítulos |
| Body Large | 1.125rem (18px) | 400 | Texto destacado |
| Body | 1rem (16px) | 400 | Texto padrão |
| Body Small | 0.875rem (14px) | 400 | Legendas |
| Caption | 0.75rem (12px) | 500 | Labels, badges |

### Aplicação no Wolfstoke

**Recomendação**: Manter Geist Sans/Mono, mas adicionar peso monospace para dados:

```tsx
// tailwind.config.ts
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        'data-xs': ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.01em' }],    // 11px
        'data-sm': ['0.8125rem', { lineHeight: '1.25rem', letterSpacing: '0.01em' }], // 13px
        'data-base': ['0.9375rem', { lineHeight: '1.5rem', letterSpacing: '0.01em' }], // 15px
        'data-lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0.01em' }],  // 18px
      },
    },
  },
};
```

---

## 4. Layout Estrutural

### Grid System e Breakpoints

**DexScreener usa sistema baseado em Chakra UI**:

```css
/* Breakpoints */
--breakpoint-sm: 30em;    /* 480px - Mobile pequeno */
--breakpoint-md: 48em;    /* 768px - Tablet */
--breakpoint-lg: 62em;    /* 992px - Desktop pequeno */
--breakpoint-xl: 80em;    /* 1280px - Desktop */
--breakpoint-2xl: 96em;   /* 1536px - Desktop grande */
--breakpoint-3xl: 108em;  /* 1728px - Ultra-wide */
```

### Estrutura de Layout Principal

```
┌─────────────────────────────────────────┐
│           Header (50px fixed)           │
├──────────┬──────────────────────────────┤
│          │                              │
│ Sidebar  │      Main Content Area       │
│ (210px)  │                              │
│  Sticky  │    (Scrollable, flexible)    │
│          │                              │
│          │                              │
└──────────┴──────────────────────────────┘
```

### Implementação no Wolfstoke

```tsx
// app/components/dashboard/DashboardLayout.tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[--bg-primary]">
      {/* Sidebar */}
      <aside className="hidden lg:flex lg:w-[210px] lg:flex-col lg:fixed lg:inset-y-0 lg:z-50
                        bg-[--bg-secondary] border-r border-[--border-subtle]">
        <SidebarContent />
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:pl-[210px]">
        {/* Header */}
        <header className="sticky top-0 z-40 h-[50px] bg-[--bg-secondary]
                          border-b border-[--border-subtle] flex items-center px-4">
          <HeaderContent />
        </header>

        {/* Page Content */}
        <main className="p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
```

---

## 5. Componentes de Interface

### 5.1 Data Cards

**Padrão DexScreener**: Cards com bordas, backgrounds sutis, padding consistente

```tsx
// app/components/dashboard/DataCard.tsx
interface DataCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
  subtitle?: string;
}

export default function DataCard({ title, value, change, icon, subtitle }: DataCardProps) {
  const changeColor = change && change > 0
    ? 'text-[--price-up]'
    : change && change < 0
    ? 'text-[--price-down]'
    : 'text-[--text-muted]';

  return (
    <div className="bg-[--bg-secondary] border border-[--border-subtle] rounded-lg p-4
                    hover:border-[--border-strong] transition-colors">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-[--text-secondary]">{title}</span>
        {icon && <span className="text-[--text-muted]">{icon}</span>}
      </div>

      {/* Value */}
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-semibold text-[--text-primary] font-mono">
          {value}
        </span>
        {change !== undefined && (
          <span className={`text-sm font-medium ${changeColor}`}>
            {change > 0 ? '+' : ''}{change.toFixed(2)}%
          </span>
        )}
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-xs text-[--text-muted] mt-1">{subtitle}</p>
      )}
    </div>
  );
}
```

**Uso**:
```tsx
<DataCard
  title="Volume 24h"
  value="$2.4M"
  change={12.5}
  subtitle="Últimas 24 horas"
/>
```

### 5.2 Data Tables

**Padrão DexScreener**: Tabelas com sticky headers, horizontal scroll, colunas sortable

```tsx
// app/components/dashboard/DataTable.tsx
interface Column<T> {
  key: keyof T;
  label: string;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  stickyHeader?: boolean;
}

export default function DataTable<T extends { id: string | number }>({
  columns,
  data,
  stickyHeader = true
}: DataTableProps<T>) {
  return (
    <div className="overflow-x-auto border border-[--border-subtle] rounded-lg">
      <table className="w-full">
        {/* Header */}
        <thead className={`bg-[--bg-tertiary] ${stickyHeader ? 'sticky top-0 z-10' : ''}`}>
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className={`px-4 py-3 text-xs font-semibold text-[--text-secondary]
                           uppercase tracking-wider border-b border-[--border-subtle]
                           ${col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left'}`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody className="divide-y divide-[--border-subtle]">
          {data.map((row) => (
            <tr
              key={row.id}
              className="hover:bg-[--bg-tertiary] transition-colors"
            >
              {columns.map((col) => (
                <td
                  key={String(col.key)}
                  className={`px-4 py-3 text-sm text-[--text-primary]
                             ${col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left'}`}
                >
                  {col.render ? col.render(row[col.key], row) : String(row[col.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

**Uso**:
```tsx
const columns: Column<CryptoData>[] = [
  { key: 'symbol', label: 'Par', align: 'left' },
  {
    key: 'price',
    label: 'Preço',
    align: 'right',
    render: (price) => <span className="font-mono">${price.toFixed(2)}</span>
  },
  {
    key: 'change24h',
    label: '24h',
    align: 'right',
    render: (change) => (
      <span className={change > 0 ? 'text-[--price-up]' : 'text-[--price-down]'}>
        {change > 0 ? '+' : ''}{change.toFixed(2)}%
      </span>
    )
  },
];

<DataTable columns={columns} data={cryptoData} />
```

### 5.3 Status Badges

**Padrão DexScreener**: Badges coloridos, arredondados, com variações semânticas

```tsx
// app/components/dashboard/StatusBadge.tsx
type BadgeVariant = 'new' | 'trending' | 'verified' | 'warning' | 'info';

interface StatusBadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

const variantStyles: Record<BadgeVariant, string> = {
  new: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
  trending: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
  verified: 'bg-green-500/10 text-green-500 border-green-500/20',
  warning: 'bg-red-500/10 text-red-500 border-red-500/20',
  info: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
};

const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
};

export default function StatusBadge({ variant, children, size = 'sm' }: StatusBadgeProps) {
  return (
    <span className={`
      inline-flex items-center gap-1 rounded-full border font-medium
      ${variantStyles[variant]}
      ${sizeStyles[size]}
    `}>
      {children}
    </span>
  );
}
```

**Uso**:
```tsx
<StatusBadge variant="new">Novo</StatusBadge>
<StatusBadge variant="trending">🔥 Trending</StatusBadge>
<StatusBadge variant="verified">✓ Verificado</StatusBadge>
```

### 5.4 Price Change Indicator

**Padrão DexScreener**: Indicadores visuais de variação com cores e ícones

```tsx
// app/components/dashboard/PriceChange.tsx
interface PriceChangeProps {
  value: number;
  timeframe?: string;
  showIcon?: boolean;
}

export default function PriceChange({ value, timeframe, showIcon = true }: PriceChangeProps) {
  const isPositive = value > 0;
  const isNeutral = Math.abs(value) < 0.01;

  const colorClass = isNeutral
    ? 'text-[--text-muted]'
    : isPositive
    ? 'text-[--price-up]'
    : 'text-[--price-down]';

  const icon = isNeutral ? '—' : isPositive ? '▲' : '▼';

  return (
    <span className={`inline-flex items-center gap-1 font-mono text-sm font-medium ${colorClass}`}>
      {showIcon && <span className="text-xs">{icon}</span>}
      <span>{isPositive && '+'}{value.toFixed(2)}%</span>
      {timeframe && <span className="text-xs opacity-60">({timeframe})</span>}
    </span>
  );
}
```

### 5.5 Filter Sidebar

**Padrão DexScreener**: Sidebar com filtros sticky e scroll independente

```tsx
// app/components/dashboard/FilterSidebar.tsx
interface FilterGroup {
  title: string;
  options: { label: string; value: string; count?: number }[];
}

interface FilterSidebarProps {
  groups: FilterGroup[];
  onFilterChange: (filters: Record<string, string[]>) => void;
}

export default function FilterSidebar({ groups, onFilterChange }: FilterSidebarProps) {
  return (
    <aside className="w-[210px] h-screen sticky top-0 overflow-y-auto bg-[--bg-secondary]
                      border-r border-[--border-subtle] p-4
                      scrollbar-thin scrollbar-thumb-[--border-strong] scrollbar-track-transparent">
      {groups.map((group) => (
        <div key={group.title} className="mb-6">
          {/* Group Title */}
          <h3 className="text-xs font-semibold text-[--text-secondary] uppercase tracking-wider mb-3">
            {group.title}
          </h3>

          {/* Options */}
          <div className="space-y-2">
            {group.options.map((option) => (
              <label
                key={option.value}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  value={option.value}
                  className="w-4 h-4 rounded border-[--border-strong] bg-[--bg-primary]
                           text-[--accent-blue] focus:ring-2 focus:ring-[--accent-blue] focus:ring-offset-0"
                />
                <span className="text-sm text-[--text-primary] group-hover:text-[--accent-blue]
                               transition-colors flex-1">
                  {option.label}
                </span>
                {option.count !== undefined && (
                  <span className="text-xs text-[--text-muted] font-mono">
                    {option.count}
                  </span>
                )}
              </label>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
}
```

### 5.6 Search Input

**Padrão DexScreener**: Input de busca com ícone e estilo minimalista

```tsx
// app/components/dashboard/SearchInput.tsx
interface SearchInputProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

export default function SearchInput({ placeholder = "Buscar...", onSearch }: SearchInputProps) {
  return (
    <div className="relative">
      {/* Search Icon */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[--text-muted]">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* Input */}
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full pl-10 pr-4 py-2 bg-[--bg-primary] border border-[--border-subtle]
                 rounded-lg text-sm text-[--text-primary] placeholder:text-[--text-muted]
                 focus:outline-none focus:border-[--accent-blue] focus:ring-2
                 focus:ring-[--accent-blue]/20 transition-all"
      />
    </div>
  );
}
```

---

## 6. Padrões de Navegação

### 6.1 Sidebar Navigation

```tsx
// app/components/dashboard/Sidebar.tsx
interface NavItem {
  label: string;
  icon: React.ReactNode;
  href: string;
  badge?: string;
}

const navItems: NavItem[] = [
  { label: 'Dashboard', icon: <DashboardIcon />, href: '/dashboard' },
  { label: 'Mercados', icon: <MarketsIcon />, href: '/markets' },
  { label: 'Carteira', icon: <WalletIcon />, href: '/portfolio', badge: 'Novo' },
  { label: 'Alertas', icon: <BellIcon />, href: '/alerts', badge: '3' },
];

export default function Sidebar() {
  return (
    <nav className="flex flex-col gap-1 p-2">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm
                   text-[--text-primary] hover:bg-[--bg-tertiary] transition-colors
                   group"
        >
          <span className="text-[--text-muted] group-hover:text-[--accent-blue]">
            {item.icon}
          </span>
          <span className="flex-1">{item.label}</span>
          {item.badge && (
            <span className="px-2 py-0.5 bg-[--accent-blue] text-white text-xs rounded-full">
              {item.badge}
            </span>
          )}
        </a>
      ))}
    </nav>
  );
}
```

### 6.2 Mobile Navigation

```tsx
// app/components/dashboard/MobileNav.tsx
"use client";

import { useState } from "react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 text-[--text-primary] hover:bg-[--bg-tertiary] rounded-lg"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar */}
          <aside className="fixed left-0 top-0 bottom-0 w-[280px] bg-[--bg-secondary]
                          border-r border-[--border-subtle] z-50 lg:hidden
                          transform transition-transform">
            <div className="p-4">
              <Sidebar />
            </div>
          </aside>
        </>
      )}
    </>
  );
}
```

---

## 7. Responsividade

### Breakpoints e Comportamentos

```tsx
// Tailwind classes para responsividade baseada no DexScreener

/* Mobile First Approach */

// Sidebar: Hidden no mobile, visível no desktop
<aside className="hidden lg:flex lg:w-[210px] ...">

// Cards: 1 coluna mobile, 2 tablet, 3+ desktop
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">

// Tabelas: Scroll horizontal no mobile
<div className="overflow-x-auto lg:overflow-visible">

// Padding: Menor no mobile, maior no desktop
<main className="p-4 md:p-6 lg:p-8">

// Font sizes: Menores no mobile
<h1 className="text-2xl md:text-3xl lg:text-4xl">
```

### Container Widths

```tsx
// app/components/dashboard/Container.tsx
export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="
      w-full
      mx-auto
      px-4 sm:px-6 lg:px-8
      max-w-[1920px]
    ">
      {children}
    </div>
  );
}
```

---

## 8. Estados de Interação

### Hover, Focus, Active

```css
/* Button States */
.btn-primary {
  @apply bg-[--accent-blue] text-white px-4 py-2 rounded-lg;
  @apply hover:bg-[--accent-blue]/90 transition-colors;
  @apply focus:outline-none focus:ring-2 focus:ring-[--accent-blue] focus:ring-offset-2 focus:ring-offset-[--bg-primary];
  @apply active:scale-95 transition-transform;
  @apply disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[--accent-blue];
}

/* Card Hover */
.card-interactive {
  @apply border border-[--border-subtle];
  @apply hover:border-[--border-strong] hover:shadow-lg hover:shadow-[--accent-blue]/5;
  @apply transition-all duration-200;
}

/* Row Hover */
.table-row {
  @apply hover:bg-[--bg-tertiary] cursor-pointer;
  @apply transition-colors duration-150;
}
```

### Loading States

```tsx
// app/components/dashboard/LoadingState.tsx
export default function LoadingState({ type = 'spinner' }: { type?: 'spinner' | 'skeleton' }) {
  if (type === 'skeleton') {
    return (
      <div className="space-y-4 animate-pulse">
        <div className="h-8 bg-[--bg-tertiary] rounded w-1/4" />
        <div className="h-32 bg-[--bg-tertiary] rounded" />
        <div className="grid grid-cols-3 gap-4">
          <div className="h-24 bg-[--bg-tertiary] rounded" />
          <div className="h-24 bg-[--bg-tertiary] rounded" />
          <div className="h-24 bg-[--bg-tertiary] rounded" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-8 h-8 border-4 border-[--accent-blue] border-t-transparent
                    rounded-full animate-spin" />
    </div>
  );
}
```

### Empty States

```tsx
// app/components/dashboard/EmptyState.tsx
interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  action?: { label: string; onClick: () => void };
}

export default function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center">
      {icon && (
        <div className="text-[--text-muted] mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-[--text-primary] mb-2">
        {title}
      </h3>
      <p className="text-sm text-[--text-secondary] mb-6 max-w-md">
        {description}
      </p>
      {action && (
        <button
          onClick={action.onClick}
          className="px-6 py-2 bg-[--accent-blue] text-white rounded-lg
                   hover:bg-[--accent-blue]/90 transition-colors"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
```

---

## 9. Visualização de Dados Financeiros

### 9.1 Price Display Component

```tsx
// app/components/dashboard/PriceDisplay.tsx
interface PriceDisplayProps {
  price: number;
  currency?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showCurrency?: boolean;
}

const sizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-2xl',
  xl: 'text-4xl',
};

export default function PriceDisplay({
  price,
  currency = 'USD',
  size = 'md',
  showCurrency = true
}: PriceDisplayProps) {
  const formatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: price < 1 ? 6 : 2,
  }).format(price);

  return (
    <span className={`font-mono font-semibold text-[--text-primary] ${sizeClasses[size]}`}>
      {showCurrency ? formatted : formatted.replace(/[^\d.,]/g, '')}
    </span>
  );
}
```

### 9.2 Volume Bar Chart (Mini)

```tsx
// app/components/dashboard/VolumeBar.tsx
interface VolumeBarProps {
  current: number;
  max: number;
  color?: 'blue' | 'green' | 'red';
}

const colorClasses = {
  blue: 'bg-[--accent-blue]',
  green: 'bg-[--price-up]',
  red: 'bg-[--price-down]',
};

export default function VolumeBar({ current, max, color = 'blue' }: VolumeBarProps) {
  const percentage = Math.min((current / max) * 100, 100);

  return (
    <div className="w-full h-1.5 bg-[--bg-tertiary] rounded-full overflow-hidden">
      <div
        className={`h-full ${colorClasses[color]} transition-all duration-300`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
```

### 9.3 Sparkline Chart (Mini Chart)

```tsx
// app/components/dashboard/Sparkline.tsx
interface SparklineProps {
  data: number[];
  color?: 'green' | 'red' | 'blue';
  width?: number;
  height?: number;
}

export default function Sparkline({
  data,
  color = 'blue',
  width = 80,
  height = 24
}: SparklineProps) {
  const colorMap = {
    green: '#00c853',
    red: '#ff3b30',
    blue: '#305dff',
  };

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min;

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * width;
    const y = height - ((value - min) / range) * height;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg width={width} height={height} className="inline-block">
      <polyline
        fill="none"
        stroke={colorMap[color]}
        strokeWidth="1.5"
        points={points}
      />
    </svg>
  );
}
```

---

## 10. Implementação Completa: Página de Mercados

### Exemplo de Página Completa Inspirada no DexScreener

```tsx
// app/markets/page.tsx
import DashboardLayout from "@/app/components/dashboard/DashboardLayout";
import SearchInput from "@/app/components/dashboard/SearchInput";
import FilterSidebar from "@/app/components/dashboard/FilterSidebar";
import DataTable from "@/app/components/dashboard/DataTable";
import DataCard from "@/app/components/dashboard/DataCard";
import PriceChange from "@/app/components/dashboard/PriceChange";
import StatusBadge from "@/app/components/dashboard/StatusBadge";

export const metadata = {
  title: "Mercados | Wolfstoke",
  description: "Acompanhe os mercados em tempo real",
};

export default function MarketsPage() {
  // Mock data (em produção, vir de API)
  const stats = [
    { title: "Volume 24h", value: "$2.4M", change: 12.5 },
    { title: "Pares Ativos", value: "1,247", change: 3.2 },
    { title: "Tokens Listados", value: "842", change: -1.1 },
    { title: "Usuários Online", value: "12,456", change: 8.7 },
  ];

  const filterGroups = [
    {
      title: "Mercados",
      options: [
        { label: "Cripto", value: "crypto", count: 234 },
        { label: "ETFs", value: "etfs", count: 156 },
        { label: "Futuros", value: "futures", count: 89 },
      ],
    },
    {
      title: "Volume",
      options: [
        { label: "Alto (>$1M)", value: "high" },
        { label: "Médio ($100k-$1M)", value: "medium" },
        { label: "Baixo (<$100k)", value: "low" },
      ],
    },
  ];

  const columns = [
    {
      key: 'symbol',
      label: 'Par',
      align: 'left' as const,
      render: (symbol: string, row: any) => (
        <div className="flex items-center gap-2">
          <span className="font-semibold">{symbol}</span>
          {row.isNew && <StatusBadge variant="new">Novo</StatusBadge>}
          {row.isTrending && <StatusBadge variant="trending">🔥</StatusBadge>}
        </div>
      ),
    },
    {
      key: 'price',
      label: 'Preço',
      align: 'right' as const,
      render: (price: number) => (
        <span className="font-mono">${price.toFixed(2)}</span>
      ),
    },
    {
      key: 'change24h',
      label: '24h',
      align: 'right' as const,
      render: (change: number) => <PriceChange value={change} showIcon />,
    },
    {
      key: 'volume24h',
      label: 'Volume 24h',
      align: 'right' as const,
      render: (volume: number) => (
        <span className="font-mono">${(volume / 1000).toFixed(1)}k</span>
      ),
    },
  ];

  const mockData = [
    { id: 1, symbol: 'BTC/USDT', price: 42150.50, change24h: 2.35, volume24h: 1250000, isNew: false, isTrending: true },
    { id: 2, symbol: 'ETH/USDT', price: 2250.75, change24h: -1.20, volume24h: 890000, isNew: false, isTrending: true },
    { id: 3, symbol: 'SOL/USDT', price: 98.40, change24h: 5.67, volume24h: 450000, isNew: true, isTrending: false },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <DataCard key={stat.title} {...stat} />
          ))}
        </div>

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Filters */}
          <div className="hidden lg:block">
            <FilterSidebar groups={filterGroups} onFilterChange={() => {}} />
          </div>

          {/* Table */}
          <div className="flex-1 space-y-4">
            <SearchInput onSearch={() => {}} placeholder="Buscar pares..." />
            <DataTable columns={columns} data={mockData} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
```

---

## 11. Customização do Tailwind Config

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-tertiary': 'var(--bg-tertiary)',
        'border-subtle': 'var(--border-subtle)',
        'border-strong': 'var(--border-strong)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'accent-blue': 'var(--accent-blue)',
        'price-up': 'var(--price-up)',
        'price-down': 'var(--price-down)',
      },
      spacing: {
        'sidebar': '210px',
        'header': '50px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};

export default config;
```

---

## 12. CSS Variables Globais

```css
/* app/globals.css */

:root {
  /* Backgrounds */
  --bg-primary: #04060c;
  --bg-secondary: #0b1020;
  --bg-tertiary: #13172a;
  --bg-card: #13172a;

  /* Borders */
  --border-subtle: #1e2235;
  --border-strong: #2a2f45;

  /* Text */
  --text-primary: #e5ecff;
  --text-secondary: #98a3b3;
  --text-muted: #6b7088;

  /* Accent Colors */
  --accent: #a7ff4f;
  --secondary: #7c7bff;
  --accent-blue: #4a9eff;

  /* Price Colors */
  --price-up: #00c853;
  --price-up-light: #26ff7c;
  --price-down: #ff3b30;
  --price-down-light: #ff6b6b;
  --price-neutral: #98a3b3;

  /* Volume Indicators */
  --volume-high: #305dff;
  --volume-medium: #6b7bff;
  --volume-low: #4a4a5a;

  /* Status Colors */
  --status-new: #ffd700;
  --status-trending: #ff6b35;
  --status-verified: #00c853;
  --status-warning: #ff9500;
}

/* Custom Scrollbar */
.scrollbar-thin {
  scrollbar-width: thin;
  scrollbar-color: var(--border-strong) transparent;
}

.scrollbar-thin::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background-color: var(--border-strong);
  border-radius: 3px;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background-color: var(--accent-blue);
}
```

---

## 13. Próximos Passos para Implementação

### Fase 1: Setup Base (1-2 dias)
1. ✅ Atualizar `globals.css` com novas CSS variables
2. ✅ Configurar `tailwind.config.ts` com cores e espaçamentos
3. ✅ Criar estrutura de pastas para componentes de dashboard

### Fase 2: Componentes Base (3-5 dias)
1. ✅ Implementar `DataCard`
2. ✅ Implementar `DataTable`
3. ✅ Implementar `StatusBadge`
4. ✅ Implementar `PriceChange`
5. ✅ Implementar `SearchInput`
6. ✅ Implementar estados (Loading, Empty)

### Fase 3: Layout e Navegação (2-3 dias)
1. ✅ Implementar `DashboardLayout`
2. ✅ Implementar `Sidebar`
3. ✅ Implementar `MobileNav`
4. ✅ Implementar `FilterSidebar`

### Fase 4: Página de Mercados (2-3 dias)
1. ✅ Criar rota `/markets`
2. ✅ Implementar listagem de pares
3. ✅ Implementar filtros funcionais
4. ✅ Integrar com API (se disponível)

### Fase 5: Visualizações de Dados (3-4 dias)
1. ✅ Implementar componentes de gráficos (Sparkline, VolumeBar)
2. ✅ Integrar biblioteca de charts (recharts, chart.js, ou tradingview)
3. ✅ Criar página de detalhes de par individual

---

## 14. Referências e Recursos

### Design Inspirations
- [DexScreener](https://dexscreener.com) - Referência principal
- [TradingView](https://tradingview.com) - Charts e análises
- [CoinMarketCap](https://coinmarketcap.com) - Listagens de mercado
- [Binance](https://binance.com) - Interface de trading

### Bibliotecas Recomendadas
- **Charts**: `recharts` ou `tradingview-charting-library`
- **Tables**: `@tanstack/react-table`
- **Virtualization**: `@tanstack/react-virtual` (para longas listas)
- **Date/Time**: `date-fns`
- **Number Formatting**: `numeral` ou nativo `Intl.NumberFormat`

### Documentação
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [React Server Components](https://react.dev/reference/rsc/server-components)

---

**Documento criado em**: Janeiro 2026
**Última atualização**: Janeiro 2026
**Versão**: 1.0
