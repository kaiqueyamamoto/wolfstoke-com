# Documentação Wolfstoke

Repositório centralizado de documentação técnica, design e especificações do projeto Wolfstoke.

---

## 📚 Índice de Documentos

### 🎨 Design & UI/UX

#### [DexScreener Design Templates](./dexscreener-design-templates.md)
**Documento completo e detalhado** sobre padrões de design inspirados no DexScreener.

**Conteúdo**:
- Sistema de cores completo
- Tipografia e hierarquia visual
- Layouts estruturais (dashboard, sidebar, grid)
- Componentes de interface (cards, tabelas, badges, inputs)
- Padrões de navegação
- Responsividade e breakpoints
- Estados de interação (hover, focus, loading)
- Visualização de dados financeiros
- Exemplo de página completa
- Customização do Tailwind Config
- Próximos passos de implementação

**Quando usar**: Para entender profundamente os padrões de design e arquitetura de componentes. Ideal para desenvolvimento inicial e criação de novos componentes.

---

#### [DexScreener Quick Reference](./dexscreener-quick-reference.md)
**Guia rápido de referência** com snippets e padrões prontos para uso.

**Conteúdo**:
- Design tokens (cores, tipografia)
- Layouts essenciais
- Componentes prontos para copiar/colar
- Estados visuais
- Padrões de responsividade
- Formatação de dados financeiros
- Utilitários Tailwind
- Animações
- Stack recomendada
- Exemplos rápidos
- Checklist de implementação

**Quando usar**: Para consultas rápidas durante o desenvolvimento. Ideal para copiar snippets e implementar padrões rapidamente.

---

#### [Wolfstoke-DexScreener Adaptation](./wolfstoke-dexscreener-adaptation.md)
**Guia de adaptação contextualizada** mostrando como implementar os padrões do DexScreener especificamente para o Wolfstoke.

**Conteúdo**:
- Sistema de cores híbrido (Wolfstoke + DexScreener)
- Páginas principais adaptadas (Dashboard, Mercados)
- Componentes Wolfstoke-específicos:
  - Portfolio Overview
  - AI Recommendations
  - Market Type Badge
  - Market Tabs
- Tabela de mercados completa
- Navegação adaptada (sidebar com menu Wolfstoke)
- Roadmap de implementação (7 semanas)
- Considerações finais sobre identidade visual

**Quando usar**: Para implementar os padrões mantendo a identidade visual do Wolfstoke. Ideal para planejar sprints e entender o contexto de negócio.

---

## 🗂️ Organização dos Documentos

```
.docs/
├── README.md (este arquivo)
├── dexscreener-design-templates.md    # Documento técnico completo
├── dexscreener-quick-reference.md      # Referência rápida
└── wolfstoke-dexscreener-adaptation.md # Adaptação para Wolfstoke
```

---

## 🚀 Como Usar Esta Documentação

### Para Desenvolvedores

1. **Começando um novo componente**:
   - Leia o [Quick Reference](./dexscreener-quick-reference.md) para entender os padrões
   - Copie o snippet mais próximo do que você precisa
   - Adapte usando o [Adaptation Guide](./wolfstoke-dexscreener-adaptation.md) como referência

2. **Implementando uma nova página**:
   - Consulte o [Design Templates](./dexscreener-design-templates.md) para ver exemplos completos
   - Use o [Adaptation Guide](./wolfstoke-dexscreener-adaptation.md) para ver páginas adaptadas ao Wolfstoke
   - Siga o roadmap de implementação

3. **Dúvidas sobre cores/espaçamentos**:
   - [Quick Reference](./dexscreener-quick-reference.md) → Seção "Design Tokens"
   - [Adaptation Guide](./wolfstoke-dexscreener-adaptation.md) → Seção "Sistema de Cores Híbrido"

### Para Designers

1. **Criando novos componentes**:
   - Consulte os padrões no [Design Templates](./dexscreener-design-templates.md)
   - Mantenha a identidade Wolfstoke usando o [Adaptation Guide](./wolfstoke-dexscreener-adaptation.md)

2. **Definindo cores/tipografia**:
   - Use a paleta híbrida definida no [Adaptation Guide](./wolfstoke-dexscreener-adaptation.md)
   - Consulte cores semânticas no [Design Templates](./dexscreener-design-templates.md)

### Para Product Managers

1. **Planejando sprints**:
   - Use o roadmap no [Adaptation Guide](./wolfstoke-dexscreener-adaptation.md) → Seção 6
   - Priorize baseado nas fases definidas

2. **Entendendo o scope de features**:
   - Veja exemplos de páginas completas no [Design Templates](./dexscreener-design-templates.md)
   - Componentes específicos do negócio no [Adaptation Guide](./wolfstoke-dexscreener-adaptation.md)

---

## 📋 Checklist de Implementação

Use esta checklist para acompanhar o progresso da implementação:

### Setup Inicial
- [ ] Atualizar `app/globals.css` com CSS variables híbridas
- [ ] Configurar `tailwind.config.ts` com cores e espaçamentos
- [ ] Criar estrutura de pastas para componentes de dashboard
- [ ] Instalar bibliotecas necessárias (recharts, lucide-react, etc.)

### Componentes Base
- [ ] DataCard
- [ ] DataTable
- [ ] StatusBadge
- [ ] PriceChange
- [ ] TypeBadge
- [ ] SearchInput
- [ ] Loading States (skeleton, spinner)
- [ ] Empty States

### Layout e Navegação
- [ ] DashboardLayout
- [ ] Sidebar (com menu Wolfstoke)
- [ ] MobileNav
- [ ] Header (dashboard)
- [ ] FilterSidebar

### Páginas Principais
- [ ] Dashboard (`/dashboard`)
- [ ] Mercados (`/markets`)
- [ ] Portfolio (`/portfolio`)
- [ ] Análise Técnica
- [ ] IA para Carteiras

### Visualização de Dados
- [ ] Sparkline (mini-gráfico)
- [ ] VolumeBar
- [ ] Portfolio Chart
- [ ] Price Display
- [ ] Integração com biblioteca de charts

### Polish & Deploy
- [ ] Testes de responsividade
- [ ] Otimização de performance
- [ ] Testes de acessibilidade
- [ ] Deploy em staging
- [ ] Testes de usuário
- [ ] Deploy em produção

---

## 🎯 Objetivos da Implementação

### Curto Prazo (1-2 meses)
- ✅ Implementar design system base
- ✅ Criar componentes reutilizáveis
- ✅ Dashboard unificado funcional
- ✅ Página de mercados com dados mockados

### Médio Prazo (3-4 meses)
- 📊 Integração com APIs reais
- 🤖 IA para Carteiras funcional
- 📈 Análise técnica básica
- 🔔 Sistema de alertas

### Longo Prazo (6+ meses)
- 🎮 Simulador completo
- ⚡ Backtesting avançado
- 📱 App mobile (React Native)
- 🌐 Integração com mais corretoras

---

## 🔗 Links Úteis

### Referências de Design
- [DexScreener](https://dexscreener.com) - Inspiração principal
- [TradingView](https://tradingview.com) - Charts e análises
- [CoinMarketCap](https://coinmarketcap.com) - Listagens
- [Binance](https://binance.com) - Interface de trading

### Documentação Técnica
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [React Server Components](https://react.dev/reference/rsc/server-components)
- [Recharts](https://recharts.org/en-US/)

### Ferramentas
- [Figma](https://figma.com) - Design
- [Excalidraw](https://excalidraw.com) - Wireframes
- [Coolors](https://coolors.co) - Paletas de cores

---

## 📝 Notas de Atualização

**Versão 1.0** - Janeiro 2026
- ✅ Criação dos três documentos principais
- ✅ Análise completa do DexScreener
- ✅ Adaptação para contexto Wolfstoke
- ✅ Roadmap de implementação de 7 semanas

---

## 🤝 Contribuindo

Para adicionar ou atualizar documentação:

1. Crie/edite o arquivo Markdown na pasta `.docs/`
2. Adicione referência neste README.md
3. Atualize a seção "Notas de Atualização"
4. Faça commit com mensagem descritiva

---

**Última atualização**: Janeiro 2026
**Mantido por**: Equipe Wolfstoke
