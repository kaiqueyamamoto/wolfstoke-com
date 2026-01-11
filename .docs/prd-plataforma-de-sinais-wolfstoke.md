# PRD - Plataforma de Sinais Wolfstoke
## Product Requirements Document

---

## 📋 Informações do Documento

**Produto:** Wolfstoke Signals  
**Versão:** 1.0  
**Data:** Janeiro 2026  
**Autor:** Equipe Produto Wolfstoke  
**Status:** Proposta Inicial

---

## 🎯 Visão Geral do Produto

### Objetivo
Desenvolver uma plataforma multiplataforma (Web e Mobile) de sinais de trading que utiliza inteligência artificial para gerar, analisar e entregar sinais de alta qualidade cobrindo todos os mercados financeiros: criptomoedas, futuros (americanos, asiáticos e brasileiros), FIIs e ETFs.

### Propósito
Democratizar o acesso a sinais de trading profissionais, permitindo que investidores de todos os níveis possam tomar decisões informadas baseadas em análise técnica, fundamentalista e machine learning em tempo real.

### Público-Alvo

**Primário:**
- Traders ativos (operações day trade e swing trade)
- Investidores que buscam pontos de entrada/saída
- Profissionais que gerenciam múltiplas carteiras

**Secundário:**
- Iniciantes que querem aprender com sinais profissionais
- Investidores de longo prazo buscando otimização
- Assessores de investimento que precisam de ferramentas

---

## 🎨 Problema e Solução

### Problema
1. **Fragmentação**: Sinais de cripto em uma plataforma, ações em outra, futuros em outra
2. **Qualidade Inconsistente**: Muitos "gurus" sem track record comprovado
3. **Falta de Contexto**: Sinais sem explicação ou fundamentação
4. **Timing Ruim**: Notificações que chegam tarde demais
5. **Custo Elevado**: Assinaturas caras de múltiplas fontes de sinais
6. **Ausência de IA**: Análises manuais lentas e suscetíveis a viés

### Solução
Plataforma unificada que:
- Centraliza sinais de TODOS os mercados em um único lugar
- Utiliza IA para gerar sinais baseados em múltiplos indicadores
- Fornece contexto completo (por que, quando entrar, stop, alvo)
- Entrega notificações em tempo real (push, email, SMS)
- Oferece planos acessíveis com trial gratuito
- Aprende continuamente com resultados

---

## 🏗️ Arquitetura do Produto

### Plataformas

#### Web App
- **Tecnologia:** React/Next.js
- **Responsivo:** Desktop e tablet
- **Funcionalidades:** Dashboard completo, análise profunda, backtesting

#### Mobile App
- **iOS:** Swift/SwiftUI ou React Native
- **Android:** Kotlin ou React Native
- **Funcionalidades:** Notificações push, visualização rápida, execução de ordens

#### API
- **REST API:** Para integrações externas
- **WebSocket:** Para dados em tempo real
- **Webhooks:** Para conectar com corretoras

---

## 🎯 Funcionalidades Core (MVP)

### 1. Motor de Sinais com IA

#### Geração de Sinais
**Análise Técnica:**
- Padrões gráficos (triângulos, bandeiras, ombro-cabeça-ombro)
- Indicadores (RSI, MACD, Bandas de Bollinger, Médias Móveis)
- Volume e liquidez
- Suporte e resistência dinâmicos

**Análise Fundamentalista:**
- Para ações/ETFs: P/L, P/VP, ROE, crescimento de receita
- Para FIIs: Dividend yield, vacância, qualidade de inquilinos
- Para cripto: TVL, volume on-chain, whale movements

**Machine Learning:**
- Modelos preditivos treinados em dados históricos
- Reconhecimento de padrões complexos
- Correlação entre ativos
- Sentiment analysis de notícias/redes sociais

**Sinais Gerados:**
- **COMPRA FORTE** (alta convicção)
- **COMPRA** (convicção média)
- **NEUTRO** (aguardar)
- **VENDA** (convicção média)
- **VENDA FORTE** (alta convicção)

#### Estrutura de um Sinal

```
TIPO: COMPRA FORTE
ATIVO: BTC/USD
MERCADO: Criptomoedas
TIMEFRAME: 4h

PREÇO ENTRADA: $95,500 - $96,000
STOP LOSS: $93,200 (-2.5%)
ALVO 1: $98,500 (+3.0%)
ALVO 2: $101,000 (+5.5%)
ALVO 3: $104,500 (+9.0%)

RISCO/RETORNO: 1:3.6

FUNDAMENTAÇÃO:
- RSI recuperando de oversold (35 → 48)
- MACD cruzamento bullish confirmado
- Rompimento de resistência em $95k com volume
- Médias móveis (20/50) alinhadas em tendência de alta
- Volume on-chain aumentando 45% nas últimas 24h
- Sentiment positivo pós-aprovação ETF

CONFIANÇA IA: 87%
HISTÓRICO SIMILAR: 73% de sucesso (últimos 50 sinais)

VALIDADE: 12 horas
GERADO EM: 11/01/2026 14:23:15
```

### 2. Dashboard Principal

#### Visão Geral
- **Sinais Ativos:** Lista de sinais abertos aguardando execução
- **Sinais em Andamento:** Posições já abertas com tracking
- **Performance do Dia:** % de acerto, lucro/prejuízo
- **Alertas Prioritários:** Sinais de alta urgência

#### Filtros e Personalização
- Por mercado (Cripto, Futuros, FIIs, ETFs, Ações)
- Por timeframe (Scalp, Day Trade, Swing, Position)
- Por risco (Conservador, Moderado, Agressivo)
- Por tipo de ativo específico
- Por score de confiança da IA (>80%, >90%)

#### Cartões de Sinais
Cada sinal exibido como card contendo:
- Ativo e direção (compra/venda)
- Preço de entrada sugerido
- Stop loss e alvos
- Score de confiança
- Gráfico mini com setup
- Botão "Ver Detalhes" / "Executar"

### 3. Detalhes do Sinal

#### Informações Completas
- Gráfico interativo com marcações de entrada/stop/alvos
- Todos os indicadores técnicos plotados
- Análise fundamentalista (quando aplicável)
- Histórico de sinais similares
- Estatísticas de performance deste tipo de setup

#### Educacional
- Explicação do padrão identificado
- Por que a IA recomendou este trade
- Riscos específicos a considerar
- Links para conteúdo educacional sobre o setup

#### Ações Disponíveis
- **Seguir Sinal:** Adiciona aos favoritos e ativa alertas
- **Executar:** Integração com corretora (futuro)
- **Modificar:** Ajustar entrada/stop/alvos conforme perfil
- **Compartilhar:** Enviar para outros usuários
- **Feedback:** "Este sinal foi útil?" para ML

### 4. Sistema de Notificações

#### Canais de Entrega
- **Push Notifications:** Mobile (iOS/Android)
- **Web Push:** Desktop browsers
- **Email:** Resumo diário ou alertas urgentes
- **SMS:** Para sinais de altíssima prioridade (plano premium)
- **Telegram/WhatsApp:** Integração com bots (futuro)

#### Tipos de Alertas
- **Novo Sinal Disponível:** Quando IA identifica oportunidade
- **Ponto de Entrada Atingido:** Preço chegou na zona de entrada
- **Stop Loss Acionado:** Preço tocou no stop
- **Alvo Atingido:** Alvo 1, 2 ou 3 alcançado
- **Sinal Invalidado:** Condições mudaram, sinal cancelado
- **Atualização de Sinal:** Ajustes de stop/alvo
- **Oportunidade Urgente:** Sinais que expiram em breve

#### Configurações de Notificação
- Frequência (tempo real, agrupado a cada X minutos, resumo diário)
- Horário de silêncio (não perturbe)
- Prioridade mínima (só alta convicção)
- Mercados específicos
- Valor mínimo de R/R ratio

### 5. Histórico e Performance

#### Tracking de Sinais
- **Todos os Sinais:** Histórico completo navegável
- **Filtros:** Data, mercado, resultado, timeframe
- **Status:** Aberto, fechado com lucro, fechado com perda, expirado

#### Métricas de Performance
**Globais (da plataforma):**
- Taxa de acerto geral
- Win rate por mercado
- Profit factor
- Drawdown máximo
- Sharpe ratio
- Melhor/pior mês

**Pessoais (do usuário):**
- Sinais seguidos vs ignorados
- Performance dos sinais executados
- Melhor mercado do usuário
- Padrão de uso (horários ativos)

#### Analytics Avançados
- Gráficos de equity curve
- Distribuição de ganhos/perdas
- Análise de disciplina (seguiu stop? Realizou lucro?)
- Comparação com benchmarks
- Recomendações de melhoria

### 6. Gestão de Risco

#### Calculadora de Position Sizing
**Inputs:**
- Capital disponível
- % de risco por trade (padrão: 1-2%)
- Preço de entrada
- Stop loss

**Outputs:**
- Quantidade de ativos a comprar
- Valor total da posição
- Perda máxima em R$
- Sugestão de lotes (futuros)

#### Gestão de Carteira
- **Exposição Total:** Quanto do capital está em risco
- **Correlação:** Evitar múltiplas posições correlacionadas
- **Diversificação:** Distribuição entre mercados
- **Alertas:** "Você está overexposed em cripto (45%)"

#### Regras Automáticas
- Máximo de posições simultâneas
- Exposição máxima por ativo/mercado
- Stop loss diário (circuit breaker)
- Bloqueio após X perdas consecutivas

---

## 🎨 Design e UX

### Princípios de Design

1. **Clareza Acima de Tudo:** Informação crítica sempre visível
2. **Velocidade:** App deve carregar e responder instantaneamente
3. **Mobile-First:** Maioria usa celular para receber alertas
4. **Dark Mode por Padrão:** Traders preferem tema escuro
5. **Acessibilidade:** Cores, tamanhos de fonte, contraste adequados

### Fluxo do Usuário

#### Primeiro Acesso
1. **Onboarding:**
   - Explicação do que é a plataforma
   - Escolha de mercados de interesse
   - Definição de perfil de risco
   - Configuração de notificações
   - Tour guiado pelo app

2. **Questionário de Perfil:**
   - Experiência em trading
   - Capital disponível para trade
   - Tolerância ao risco
   - Objetivos (renda ativa, complementar, aprendizado)
   - Timeframe preferido

3. **Trial Gratuito:**
   - 7 dias com acesso completo
   - Limite de 5 sinais simultâneos
   - Suporte por chat

#### Uso Diário
1. **Login** → Dashboard com sinais do dia
2. **Notificação Push** → Abre diretamente no sinal
3. **Análise do Sinal** → Vê detalhes e gráfico
4. **Decisão** → Segue, modifica ou ignora
5. **Execução** → Manual ou integrada
6. **Tracking** → Acompanha evolução
7. **Fechamento** → Registra resultado

### Wireframes Principais

#### Mobile - Tela Principal
```
╔══════════════════════════════╗
║  ☰  WOLFSTOKE SIGNALS    🔔  ║
╠══════════════════════════════╣
║  🎯 Sinais Ativos (3)        ║
╠══════════════════════════════╣
║ ┌──────────────────────────┐ ║
║ │ 🟢 COMPRA FORTE          │ ║
║ │ BTC/USD  $95,500         │ ║
║ │ Confiança: 87%  R/R: 3.6x│ ║
║ │ ⏰ Expira em 8h          │ ║
║ │ [Ver Detalhes]           │ ║
║ └──────────────────────────┘ ║
║ ┌──────────────────────────┐ ║
║ │ 🟡 COMPRA                │ ║
║ │ HGLG11  R$ 9,85          │ ║
║ │ Confiança: 72%  R/R: 2.1x│ ║
║ │ ⏰ Expira em 3h          │ ║
║ │ [Ver Detalhes]           │ ║
║ └──────────────────────────┘ ║
╠══════════════════════════════╣
║  📊 Performance Hoje         ║
║  ✅ 4 acertos  ❌ 1 erro     ║
║  💰 +2.3% no dia             ║
╠══════════════════════════════╣
║  [Cripto] [Futuros] [FIIs]   ║
╚══════════════════════════════╝
```

#### Web - Dashboard
```
╔════════════════════════════════════════════════════════════╗
║ WOLFSTOKE SIGNALS          [Cripto][Futuros][FIIs][ETFs]  ║
╠════════════════════════════════════════════════════════════╣
║ SINAIS ATIVOS (8)              PERFORMANCE       CARTEIRA  ║
╠═══════════════════════════╦════════════════════════════════╣
║ 🟢 BTC/USD | Compra Forte  ║   📊 Hoje: +2.3%             ║
║ Entrada: $95,500          ║   📈 Semana: +5.7%            ║
║ Stop: $93,200             ║   📉 Mês: +12.4%              ║
║ Alvo: $104,500 (+9%)      ║   ✅ Win Rate: 73%            ║
║ Confiança: 87% | R/R: 3.6x║                               ║
║ ⏰ Expira: 8h             ║   💼 Posições Abertas: 3      ║
║ [📋 Detalhes] [✅ Seguir] ║   💰 Exposição: R$ 15.000     ║
╠═══════════════════════════╣   ⚖️ Risco Total: 1.8%        ║
║ 🟢 HGLG11 | Compra        ║                               ║
║ Entrada: R$ 9,85          ║   [Ver Histórico Completo]    ║
║ ...                       ║                               ║
╠═══════════════════════════╩════════════════════════════════╣
║ [Gráfico de Equity Curve - Últimos 30 dias]                ║
╚════════════════════════════════════════════════════════════╝
```

---

## 🔧 Especificações Técnicas

### Stack Tecnológico Recomendado

#### Frontend Web
- **Framework:** Next.js 14+ (React)
- **UI Library:** Tailwind CSS + shadcn/ui
- **Gráficos:** TradingView Lightweight Charts ou Recharts
- **State Management:** Zustand ou Redux Toolkit
- **Real-time:** WebSocket (Socket.io)

#### Mobile
- **Opção 1:** React Native (código compartilhado)
- **Opção 2:** Flutter (performance nativa)
- **Opção 3:** Native (Swift + Kotlin, melhor UX)

#### Backend
- **API:** Node.js + Express ou Python + FastAPI
- **Database:** PostgreSQL (dados estruturados) + Redis (cache)
- **Time Series DB:** TimescaleDB ou InfluxDB (dados de mercado)
- **Message Queue:** RabbitMQ ou AWS SQS (processamento assíncrono)
- **AI/ML:** Python (TensorFlow, PyTorch, scikit-learn)

#### Infraestrutura
- **Cloud:** AWS, GCP ou Azure
- **CDN:** CloudFlare
- **Monitoring:** DataDog ou New Relic
- **Logs:** ELK Stack (Elasticsearch, Logstash, Kibana)
- **CI/CD:** GitHub Actions ou GitLab CI

#### Integrações Externas
- **Dados de Mercado:**
  - Criptomoedas: Binance API, CoinGecko, CryptoCompare
  - Futuros: Interactive Brokers, Bloomberg, Refinitiv
  - FIIs/Ações Brasil: B3 API, Economatica
  
- **Notificações:**
  - Push: Firebase Cloud Messaging (FCM), OneSignal
  - Email: SendGrid, AWS SES
  - SMS: Twilio

- **Pagamentos:**
  - Nacional: Stripe, Mercado Pago
  - Internacional: Stripe, PayPal

### Arquitetura do Sistema

```
┌─────────────────────────────────────────────────────┐
│                   FRONTEND LAYER                     │
│  ┌──────────────┐  ┌──────────────┐  ┌───────────┐ │
│  │   Web App    │  │  iOS App     │  │Android App│ │
│  │  (Next.js)   │  │  (Swift)     │  │ (Kotlin)  │ │
│  └──────┬───────┘  └──────┬───────┘  └─────┬─────┘ │
└─────────┼──────────────────┼────────────────┼───────┘
          │                  │                │
          └──────────────────┴────────────────┘
                             │
                    ┌────────▼─────────┐
                    │   API Gateway    │
                    │  (Load Balancer) │
                    └────────┬─────────┘
                             │
          ┌──────────────────┼──────────────────┐
          │                  │                  │
    ┌─────▼─────┐   ┌────────▼────────┐  ┌─────▼──────┐
    │  REST API │   │ WebSocket Server│  │  Auth API  │
    │ (Node.js) │   │   (Socket.io)   │  │   (JWT)    │
    └─────┬─────┘   └────────┬────────┘  └─────┬──────┘
          │                  │                  │
          └──────────────────┴──────────────────┘
                             │
          ┌──────────────────┴──────────────────┐
          │                                     │
    ┌─────▼──────┐                    ┌────────▼────────┐
    │   Signal   │                    │   Market Data   │
    │   Engine   │◄───────────────────│   Aggregator    │
    │   (AI/ML)  │                    │   (Real-time)   │
    └─────┬──────┘                    └────────┬────────┘
          │                                     │
          │          ┌──────────────┐          │
          └─────────►│   Database   │◄─────────┘
                     │  PostgreSQL  │
                     │  TimescaleDB │
                     └──────┬───────┘
                            │
                     ┌──────▼───────┐
                     │     Redis    │
                     │   (Cache)    │
                     └──────────────┘
```

### Motor de IA - Arquitetura

```
┌───────────────────────────────────────────────────┐
│              DATA INGESTION LAYER                 │
│  ┌──────────┐ ┌──────────┐ ┌───────────────────┐│
│  │  Price   │ │  Volume  │ │  On-Chain Data    ││
│  │  Feeds   │ │  Data    │ │  (Crypto only)    ││
│  └────┬─────┘ └────┬─────┘ └────┬──────────────┘│
└───────┼────────────┼─────────────┼───────────────┘
        │            │             │
        └────────────┴─────────────┘
                     │
        ┌────────────▼─────────────┐
        │   DATA PREPROCESSING     │
        │  - Cleaning              │
        │  - Normalization         │
        │  - Feature Engineering   │
        └────────────┬─────────────┘
                     │
        ┌────────────▼─────────────┐
        │   ANALYSIS ENGINES       │
        │                          │
        │  ┌────────────────────┐  │
        │  │ Technical Analysis │  │
        │  │ - RSI, MACD, etc   │  │
        │  └────────┬───────────┘  │
        │           │              │
        │  ┌────────▼───────────┐  │
        │  │ Pattern Recognition│  │
        │  │ - ML Models        │  │
        │  └────────┬───────────┘  │
        │           │              │
        │  ┌────────▼───────────┐  │
        │  │ Sentiment Analysis │  │
        │  │ - News, Social     │  │
        │  └────────┬───────────┘  │
        └───────────┼──────────────┘
                    │
        ┌───────────▼──────────────┐
        │   SIGNAL GENERATION      │
        │  - Scoring               │
        │  - Confidence Calc       │
        │  - Risk/Reward           │
        └───────────┬──────────────┘
                    │
        ┌───────────▼──────────────┐
        │   SIGNAL VALIDATION      │
        │  - Backtesting           │
        │  - Correlation Check     │
        │  - Risk Management       │
        └───────────┬──────────────┘
                    │
        ┌───────────▼──────────────┐
        │   SIGNAL DISTRIBUTION    │
        │  - Queue Management      │
        │  - User Filtering        │
        │  - Notification Dispatch │
        └──────────────────────────┘
```

---

## 💰 Modelo de Monetização

### Planos de Assinatura

#### 🆓 Plano Gratuito - EXPLORER
**R$ 0/mês**

**Incluído:**
- 5 sinais por dia (limitados)
- Acesso a 1 mercado (escolha entre Cripto, FIIs ou ETFs)
- Notificações por email apenas
- Histórico de 7 dias
- Performance metrics básicos
- Conteúdo educacional gratuito

**Limitações:**
- Sem acesso a sinais de futuros
- Sem notificações push
- Sem alertas em tempo real
- Sem suporte prioritário

#### ⭐ Plano Básico - TRADER
**R$ 97/mês ou R$ 970/ano (2 meses grátis)**

**Incluído:**
- 20 sinais por dia
- Acesso a 2 mercados simultâneos
- Notificações push ilimitadas
- Histórico de 30 dias
- Analytics básicos
- Calculadora de position sizing
- Suporte por email (24h)
- Webinars mensais

**Ideal para:** Traders casuais e investidores em construção de portfólio

#### 🚀 Plano Pro - PROFESSIONAL
**R$ 297/mês ou R$ 2.970/ano (2 meses grátis)**

**Incluído:**
- Sinais ilimitados
- Acesso a TODOS os mercados
- Notificações por todos os canais (push, email, SMS)
- Histórico completo (ilimitado)
- Analytics avançados com backtesting
- Gestão de risco com alertas automáticos
- API access (integração com bots)
- Suporte prioritário (chat ao vivo)
- Consultoria mensal (1h) com analista
- Acesso antecipado a novos mercados
- Sinais exclusivos de alta convicção

**Ideal para:** Traders ativos e profissionais

#### 💎 Plano Enterprise - INSTITUTIONAL
**Sob Consulta (a partir de R$ 997/mês)**

**Incluído:**
- Tudo do plano Pro
- Múltiplos usuários (5-50)
- White-label opcional
- Sinais customizados por perfil
- Integração com corretoras
- Relatórios personalizados
- Suporte dedicado 24/7
- SLA garantido
- Treinamento da equipe
- Dashboard administrativo

**Ideal para:** Casas de análise, family offices, fundos

### Receitas Adicionais

#### Affiliate/Referral Program
- **Para Usuários:** R$ 50 por indicação que assinar plano pago
- **Para Influencers:** 20% recorrente das assinaturas indicadas

#### Marketplace de Estratégias (Futuro)
- Usuários podem criar e vender suas próprias estratégias
- Wolfstoke fica com 30% de comissão
- Criadores recebem 70%

#### Integrações Premium
- Conexão com corretoras para execução automática: R$ 97/mês adicional
- Copy trading (copiar trades de traders top): R$ 147/mês adicional

#### Cursos e Educação
- Curso completo "De Zero a Trader": R$ 497 (único)
- Mentoria em grupo: R$ 497/mês
- Mentoria individual: R$ 1.997/mês

---

## 📊 Métricas de Sucesso (KPIs)

### Métricas de Produto

**Adoção:**
- Número de downloads (iOS + Android)
- Usuários ativos mensais (MAU)
- Usuários ativos diários (DAU)
- Taxa de conversão (trial → pago)

**Engajamento:**
- Sinais visualizados por usuário/dia
- Taxa de sinais executados
- Tempo médio no app/dia
- Taxa de retenção (D1, D7, D30)

**Performance:**
- Win rate médio dos sinais
- Profit factor
- Média de R/R ratio
- Feedback positivo dos usuários (NPS)

### Métricas de Negócio

**Receita:**
- MRR (Monthly Recurring Revenue)
- ARR (Annual Recurring Revenue)
- ARPU (Average Revenue Per User)
- LTV (Lifetime Value)

**Custos:**
- CAC (Customer Acquisition Cost)
- Churn rate mensal
- LTV/CAC ratio (meta: >3)

**Crescimento:**
- Taxa de crescimento MoM (mês sobre mês)
- Viral coefficient (K-factor)
- Tempo para payback do CAC

### Metas Primeiro Ano

**Mês 1-3 (Beta):**
- 1.000 usuários beta
- 100 assinantes pagos
- Win rate > 65%
- NPS > 40

**Mês 4-6:**
- 5.000 usuários totais
- 500 assinantes pagos
- MRR: R$ 50.000
- Churn < 10%

**Mês 7-12:**
- 20.000 usuários totais
- 2.500 assinantes pagos
- MRR: R$ 250.000
- Win rate > 70%
- NPS > 50

---

## 🗓️ Roadmap de Desenvolvimento

### Fase 1: MVP (3 meses)

**Mês 1 - Setup & Core:**
- ✅ Definição de arquitetura
- ✅ Setup de infraestrutura (AWS/GCP)
- ✅ Desenvolvimento do motor de sinais básico (análise técnica)
- ✅ API REST inicial
- ✅ Integração com feeds de dados

**Mês 2 - Frontend & Features:**
- ✅ Web app (dashboard, visualização de sinais)
- ✅ Sistema de autenticação
- ✅ Geração de sinais para 1 mercado (cripto)
- ✅ Notificações por email
- ✅ Histórico básico

**Mês 3 - Mobile & Testes:**
- ✅ App mobile iOS
- ✅ App mobile Android
- ✅ Notificações push
- ✅ Testes com beta users (100 pessoas)
- ✅ Ajustes baseados em feedback
- 🚀 Launch do MVP

### Fase 2: Expansão (3 meses)

**Mês 4:**
- Adição de análise fundamentalista
- Expansão para FIIs e ETFs
- Melhorias na IA (primeiros modelos de ML)
- Sistema de pagamentos

**Mês 5:**
- Futuros brasileiros
- Analytics avançados
- Calculadora de position sizing
- Gestão de risco

**Mês 6:**
- Futuros americanos e asiáticos
- Backtesting de estratégias
- API pública (beta)
- Programa de afiliados

### Fase 3: Inteligência Avançada (3 meses)

**Mês 7-9:**
- Modelos de ML treinados em dados históricos