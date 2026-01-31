# Storybook – Wolfstoke

## Comandos

- **Desenvolvimento**: `pnpm storybook` (abre em http://localhost:6006)
- **Build estático**: `pnpm build-storybook` (saída em `storybook-static/`)

## Configuração

- **Framework**: `@storybook/nextjs-vite`
- **Estilos**: `app/globals.css` importado no `preview.ts` (Tailwind + DaisyUI)
- **Alias**: `@` → raiz do projeto (imports `@/app/...`)
- **Stories**: `stories/**` (exemplos) e `app/components/**/*.stories.*` (componentes do app)

## Cobertura de componentes

### Com stories

| Categoria   | Componente       | Arquivo |
|------------|-------------------|---------|
| Layout     | Header            | `app/components/Header.stories.tsx` |
| Layout     | ContactButtons    | `app/components/ContactButtons.stories.tsx` |
| Layout     | Footer            | `app/components/home/Footer.stories.tsx` |
| Brand      | WolfIcon          | `app/components/WolfIcon.stories.tsx` |
| Home       | HeroSection       | `app/components/home/HeroSection.stories.tsx` |
| Home       | MarketsSection    | `app/components/home/MarketsSection.stories.tsx` |
| Crypto     | HeroSection       | `app/components/crypto/HeroSection.stories.tsx` |
| ETFs       | HeroSection       | `app/components/etfs/HeroSection.stories.tsx` |
| Soluções   | HeroSection       | `app/components/solucoes/HeroSection.stories.tsx` |

### Sem stories (para ampliar cobertura)

- **Home**: BackgroundEffects, CTASection, FAQSection, FeaturesSection, HomeHeader, PricingSection, StepsSection
- **Crypto**: BackgroundEffects, ComparisonSection, CryptoHeader, CryptoPairsSection, CTASection, FAQSection, FeaturesSection, PlansSection, StepsSection
- **ETFs**: ETFsHeader, LiquiditySection, MechanismSection, PerformanceSection, RegulationSection, StrategiesSection, TaxSection, TypesSection
- **Soluções**: BackgroundEffects, CTASection, FAQSection, IntegrationsSection, InvestmentSection, NextStepsSection, ProcessSection, SolucoesHeader, SolutionsSection, UseCasesSection, WhySection
- **Posts**: BackgroundEffects, HeroSection, Pagination, PostContent, PostsHeader, PostsListSection
- **Dúvidas**: BackgroundEffects, DuvidasHeader, HeroSection, PostContent, PostsListSection
- **Dashboard**: DashboardLayout, DataCard, EmptyState, LoadingState, PriceChange, SearchInput, StatusBadge

Para adicionar uma nova story, crie `ComponentName.stories.tsx` ao lado do componente e exporte pelo menos uma story `Default`.
