# DexScreener Quick Reference
## Guia Rápido de Implementação para Wolfstoke

---

## 🎨 Design Tokens

### Cores Essenciais
```css
--bg-primary: #04060c;
--bg-secondary: #0b1020;
--bg-card: #13172a;
--border-subtle: #1e2235;
--accent-blue: #4a9eff;
--price-up: #00c853;
--price-down: #ff3b30;
```

### Tipografia
```tsx
// Números e dados financeiros
className="font-mono"

// Tamanhos de dados
text-data-xs   // 11px
text-data-sm   // 13px
text-data-base // 15px
text-data-lg   // 18px
```

---

## 📐 Layouts

### Dashboard Layout
```tsx
<div className="flex min-h-screen">
  {/* Sidebar: 210px, sticky */}
  <aside className="hidden lg:flex lg:w-[210px] lg:fixed lg:inset-y-0" />

  {/* Main: offset by sidebar */}
  <div className="flex-1 lg:pl-[210px]">
    {/* Header: 50px, sticky */}
    <header className="sticky top-0 h-[50px]" />

    {/* Content */}
    <main className="p-4 md:p-6 lg:p-8" />
  </div>
</div>
```

### Grid de Cards
```tsx
// Responsivo: 1 → 2 → 3 → 4 colunas
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
```

---

## 🧱 Componentes Prontos

### Data Card
```tsx
<div className="bg-[--bg-secondary] border border-[--border-subtle] rounded-lg p-4
                hover:border-[--border-strong] transition-colors">
  <span className="text-sm text-[--text-secondary]">Volume 24h</span>
  <div className="flex items-baseline gap-2">
    <span className="text-2xl font-semibold font-mono">$2.4M</span>
    <span className="text-sm text-[--price-up]">+12.5%</span>
  </div>
</div>
```

### Status Badge
```tsx
<span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs
               bg-green-500/10 text-green-500 border border-green-500/20
               rounded-full font-medium">
  ✓ Verificado
</span>
```

### Price Change
```tsx
<span className={`font-mono ${change > 0 ? 'text-[--price-up]' : 'text-[--price-down]'}`}>
  {change > 0 ? '▲' : '▼'} {change > 0 ? '+' : ''}{change.toFixed(2)}%
</span>
```

### Search Input
```tsx
<div className="relative">
  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[--text-muted]">
    {/* Ícone de busca */}
  </div>
  <input
    className="w-full pl-10 pr-4 py-2 bg-[--bg-primary] border border-[--border-subtle]
               rounded-lg text-sm focus:border-[--accent-blue] focus:ring-2
               focus:ring-[--accent-blue]/20"
    placeholder="Buscar..."
  />
</div>
```

### Table Row (Hover)
```tsx
<tr className="hover:bg-[--bg-tertiary] transition-colors cursor-pointer">
  <td className="px-4 py-3">...</td>
</tr>
```

---

## 🎯 Estados Visuais

### Hover States
```tsx
// Cards
hover:border-[--border-strong]
hover:shadow-lg hover:shadow-[--accent-blue]/5

// Buttons
hover:bg-[--accent-blue]/90

// Table Rows
hover:bg-[--bg-tertiary]
```

### Focus States
```tsx
focus:outline-none
focus:border-[--accent-blue]
focus:ring-2 focus:ring-[--accent-blue]/20
```

### Loading (Skeleton)
```tsx
<div className="animate-pulse">
  <div className="h-8 bg-[--bg-tertiary] rounded w-1/4 mb-4" />
  <div className="h-32 bg-[--bg-tertiary] rounded" />
</div>
```

### Loading (Spinner)
```tsx
<div className="w-8 h-8 border-4 border-[--accent-blue] border-t-transparent
                rounded-full animate-spin" />
```

---

## 📱 Responsividade

### Breakpoints
```
sm:  480px  (30em)
md:  768px  (48em)
lg:  992px  (62em)
xl:  1280px (80em)
2xl: 1536px (96em)
```

### Padrões Comuns
```tsx
// Sidebar: hidden mobile, visible desktop
className="hidden lg:flex"

// Mobile Nav Toggle
className="lg:hidden"

// Padding responsivo
className="p-4 md:p-6 lg:p-8"

// Font size responsivo
className="text-2xl md:text-3xl lg:text-4xl"

// Grid responsivo
className="grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
```

---

## 📊 Dados Financeiros

### Formatação de Preço
```tsx
// Método 1: Intl.NumberFormat
const formatted = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: price < 1 ? 6 : 2,
}).format(price);

// Método 2: ToFixed
<span className="font-mono">${price.toFixed(2)}</span>
```

### Volume Simplificado
```tsx
// $1,234,567 → $1.2M
const formatVolume = (vol: number) => {
  if (vol >= 1e9) return `$${(vol / 1e9).toFixed(1)}B`;
  if (vol >= 1e6) return `$${(vol / 1e6).toFixed(1)}M`;
  if (vol >= 1e3) return `$${(vol / 1e3).toFixed(1)}k`;
  return `$${vol.toFixed(0)}`;
};
```

### Porcentagem com Cor
```tsx
const getChangeColor = (change: number) => {
  if (Math.abs(change) < 0.01) return 'text-[--text-muted]';
  return change > 0 ? 'text-[--price-up]' : 'text-[--price-down]';
};
```

---

## 🔧 Utilitários Tailwind

### Scrollbar Customizada
```css
/* globals.css */
.scrollbar-thin {
  scrollbar-width: thin;
  scrollbar-color: var(--border-strong) transparent;
}

.scrollbar-thin::-webkit-scrollbar {
  width: 6px;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background-color: var(--border-strong);
  border-radius: 3px;
}
```

### Truncate com Ellipsis
```tsx
className="truncate max-w-[200px]"
```

### Sticky Positioning
```tsx
// Header sticky
className="sticky top-0 z-40"

// Sidebar sticky
className="sticky top-0 h-screen"

// Table header sticky
className="sticky top-0 z-10"
```

---

## 🎭 Animações

### Transições Suaves
```tsx
// Cores
transition-colors duration-200

// Tudo
transition-all duration-300

// Transform
transition-transform duration-150
```

### Hover Scale
```tsx
hover:scale-105
active:scale-95
```

### Pulse (Loading)
```tsx
animate-pulse
```

### Spin (Spinner)
```tsx
animate-spin
```

---

## 📦 Stack Recomendada

### Visualização de Dados
```bash
pnpm add recharts          # Gráficos
pnpm add @tanstack/react-table  # Tabelas avançadas
pnpm add date-fns          # Datas
```

### Utilitários
```bash
pnpm add clsx              # Conditional classes
pnpm add tailwind-merge    # Merge Tailwind classes
```

### Ícones
```bash
pnpm add lucide-react      # Ícones modernos
# ou
pnpm add @heroicons/react  # Heroicons
```

---

## 🚀 Exemplos Rápidos

### Card de Mercado
```tsx
<div className="bg-[--bg-secondary] border border-[--border-subtle] rounded-lg p-4">
  {/* Header */}
  <div className="flex items-center justify-between mb-3">
    <div className="flex items-center gap-2">
      <span className="font-semibold">BTC/USDT</span>
      <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-500 text-xs rounded-full">
        Trending
      </span>
    </div>
    <span className="text-xs text-[--text-muted]">Binance</span>
  </div>

  {/* Price */}
  <div className="mb-2">
    <span className="text-2xl font-mono font-semibold">$42,150.50</span>
  </div>

  {/* Change */}
  <div className="flex items-center gap-4 text-sm">
    <span className="text-[--price-up]">▲ +2.35%</span>
    <span className="text-[--text-muted]">Vol: $1.2M</span>
  </div>
</div>
```

### Linha de Tabela
```tsx
<tr className="hover:bg-[--bg-tertiary] transition-colors cursor-pointer">
  <td className="px-4 py-3">
    <div className="flex items-center gap-2">
      <span className="font-semibold">BTC/USDT</span>
      <span className="px-2 py-0.5 bg-green-500/10 text-green-500 text-xs rounded-full">
        ✓
      </span>
    </div>
  </td>
  <td className="px-4 py-3 text-right font-mono">$42,150.50</td>
  <td className="px-4 py-3 text-right text-[--price-up]">▲ +2.35%</td>
  <td className="px-4 py-3 text-right font-mono text-[--text-secondary]">$1.2M</td>
</tr>
```

### Filter Group
```tsx
<div className="mb-6">
  <h3 className="text-xs font-semibold text-[--text-secondary] uppercase mb-3">
    Mercados
  </h3>
  <div className="space-y-2">
    <label className="flex items-center gap-2 cursor-pointer group">
      <input type="checkbox" className="w-4 h-4 rounded" />
      <span className="text-sm group-hover:text-[--accent-blue] flex-1">
        Criptomoedas
      </span>
      <span className="text-xs text-[--text-muted] font-mono">234</span>
    </label>
  </div>
</div>
```

---

## ✅ Checklist de Implementação

### Setup Inicial
- [ ] Atualizar `globals.css` com CSS variables
- [ ] Configurar `tailwind.config.ts`
- [ ] Instalar bibliotecas necessárias

### Componentes Base
- [ ] DataCard
- [ ] DataTable
- [ ] StatusBadge
- [ ] PriceChange
- [ ] SearchInput
- [ ] Loading States
- [ ] Empty States

### Layout
- [ ] DashboardLayout
- [ ] Sidebar
- [ ] MobileNav
- [ ] Header

### Página de Mercados
- [ ] Rota `/markets`
- [ ] Listagem de pares
- [ ] Filtros
- [ ] Busca
- [ ] Integração com dados

---

**Referência Rápida v1.0** | Janeiro 2026
