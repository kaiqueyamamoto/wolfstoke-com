# BTC/USDT: Guia Estratégico de Fundamentos, Liquidez e Histórico de Movimentações

## Relatório de Pesquisa: Estrutura, Narrativas e Riscos do Par Bitcoin / Tether (Atualizado Jan 2026)

---

## 1. Por que o par BTC/USDT é a espinha dorsal de liquidez do mercado cripto

O par BTC/USDT concentra a maior parte do volume global de criptomoedas porque combina o ativo digital mais líquido e descentralizado (Bitcoin) com a stablecoin de maior circulação (Tether). Nas principais corretoras centralizadas (CEXs) e descentralizadas (DEXs), esse par serve como referência de preço, profundidade de livro de ordens, rota de arbitragem e hedge operacional para praticamente todos os demais ativos digitais. Em 2025, o BTC/USDT respondeu, de forma agregada, por mais de 40% do volume spot diário em exchanges com monitoramento de dados confiáveis, além de ancorar derivativos (perpétuos, futuros e opções) que usam USDT como margem. A dominância não decorre apenas de liquidez; ela é resultado de duas narrativas fortes: (i) Bitcoin como ativo de reserva digital, com oferta programada e segurança derivada de hashrate recorde, e (ii) USDT como moeda de liquidação on-chain de baixa fricção, capaz de percorrer múltiplas redes e estabilizar o preço em dólar sem depender do sistema bancário tradicional.

Essa centralidade cria efeitos de segunda ordem: a descoberta de preços de altcoins frequentemente passa por pares intermediários denominados em USDT, e a volatilidade do BTC costuma irradiar-se para o restante do mercado. Por isso, entender o par BTC/USDT significa entender o mecanismo de transmissão de risco e liquidez de todo o ecossistema cripto.

---

## 2. Estrutura do par: dimensão monetária, tecnológica e de microestrutura

O BTC/USDT pode ser decomposto em três camadas: (a) a camada monetária do Bitcoin (escassez programada, políticas de emissão, mecanismos de consenso), (b) a camada de estabilidade e liquidação do USDT (reserva, peg, resgates e transparência) e (c) a microestrutura de mercado que conecta ambos (livros de ordens, mercados perpétuos, pools de liquidez, oráculos de preço e arbitradores). Cada dimensão possui riscos específicos e influências diretas na precificação do par.

| Dimensão | Bitcoin (BTC) | Tether (USDT) | Impacto no par BTC/USDT |
|---|---|---|---|
| Oferta | 21 milhões, emissão previsível e halvings quadrianuais | Oferta elástica conforme demanda e reservas | A previsibilidade do BTC e a elasticidade do USDT criam um par com liquidez profunda e alta alavancagem |
| Garantias | Segurança via Proof of Work, hashrate elevado, rede distribuída | Garantia off-chain baseada em reservas fiat, títulos do Tesouro e cash equivalents | Riscos de contraparte do USDT contrastam com o modelo trustless do BTC |
| Utilidade | Reserva digital, colateral em DeFi, ativo de liquidação cross-chain (Lightning, swaps) | Moeda de cotação, margem de derivativos, meio de pagamento em CEXs/DEXs | Forma o principal par âncora de preços e liquidez |
| Oráculos | Preço BTC capturado por agregadores (Chainlink, Pyth) | Preço do USDT mantido em torno de $1 via arbitragem e resgate | Oráculos robustos são críticos para evitar liquidações indevidas em DeFi |
| Narrativa | Soberania financeira, antifragilidade, hedge macro | Estabilidade operacional, liquidação rápida, "dólar sintético" | A convergência das narrativas cria demanda contínua em ciclos de alta e baixa |

---

## 3. Fundamentos do Bitcoin: escassez programada, halving e segurança

### 3.1 Oferta limitada e política monetária

O protocolo Bitcoin define um limite máximo de 21 milhões de unidades, alcançado por meio de emissões decrescentes e previsíveis. A cada bloco minerado (~10 minutos), novos BTCs são criados como recompensa para mineradores, e essa recompensa sofre halving a cada 210.000 blocos (~4 anos). Os halvings (2012, 2016, 2020, 2024) reduziram a inflação anual de ~25% para cifras inferiores a 1% ao ano, aproximando o Bitcoin de um ativo com inflação estruturalmente menor que a do ouro. A previsibilidade da emissão cria uma expectativa de escassez crescente, reforçando a narrativa de reserva digital.

### 3.2 Segurança via Proof of Work e descentralização

O mecanismo de consenso Proof of Work (PoW) ancora a segurança da rede na capacidade computacional total (hashrate). Em 2025, o hashrate atingiu máximos históricos, tornando economicamente proibitivo um ataque de 51% por atores isolados. A diversificação geográfica de mineradores, pools e fabricantes de ASICs reduziu o risco de centralização. Avanços em firmware e eficiência energética (chips de 5nm e 3nm) aumentaram o custo de coordenação de ataques, enquanto a migração para fontes renováveis reduziu críticas ambientais e sustentou margens operacionais dos mineradores mesmo em fases de queda de preço.

### 3.3 A espiral de segurança e o mercado de taxas

Com a recompensa de bloco decrescendo, as taxas de transação tendem a representar parcela crescente da receita dos mineradores. Eventos como a adoção de Ordinals, BRC-20 ou outras inovações que elevam a concorrência por espaço em bloco aumentam as taxas e reforçam a segurança econômica. A relação entre preço, hashrate e dificuldade cria um ciclo de feedback: preços mais altos estimulam mais hashrate, que reforça a segurança e, por tabela, a confiança de longo prazo no ativo.

---

## 4. Fundamentos do USDT: estabilidade, reservas e risco de contraparte

### 4.1 Mecanismo de peg e resgate

O USDT é emitido pela Tether Limited e promete paridade 1:1 com o dólar americano. O peg é mantido por um mecanismo de arbitragem: quando o USDT negocia abaixo de $1, arbitradores compram no mercado secundário e resgatam diretamente com a emissora; quando negocia acima de $1, os participantes compram dólares e cunham novos USDT. A liquidez do USDT em múltiplas redes (Ethereum, Tron, Solana, Avalanche, entre outras) facilita o fluxo transfronteiriço e reduz o atrito para market makers.

### 4.2 Composição de reservas e transparência

As reservas do USDT são majoritariamente compostas por caixa, depósitos bancários, títulos do Tesouro de curto prazo e instrumentos de mercado monetário. Relatórios de atestação publicados trimestralmente fornecem visibilidade sobre a composição, embora não substituam auditorias completas. O risco central é de contraparte e de liquidez: em cenários extremos de resgates, a capacidade de converter títulos em caixa rapidamente torna-se crítica. Eventos de stress (ex.: 2022, com contágio de stablecoins e colapsos de empréstimos centralizados) demonstraram que o USDT manteve o peg, mas a discussão sobre risco sistêmico permanece.

### 4.3 Riscos regulatórios e geográficos

Como emissor off-chain, a Tether está sujeita a regimes regulatórios variados conforme jurisdição de bancos custodiante e usuários finais. Restrições bancárias, bloqueios de OFAC ou novas regras de stablecoins (como projetos de lei nos EUA e na UE) podem afetar a fungibilidade do USDT. Por outro lado, a ausência de dependência direta de bancos americanos oferece alguma antifragilidade geográfica, ainda que aumente a opacidade sobre o circuito de reservas.

---

## 5. Microestrutura do mercado BTC/USDT: spot, perpétuos, DEX e oráculos

### 5.1 Spot em CEXs

Nos livros de ordens centralizados, o BTC/USDT apresenta profundidade de mercado superior à maioria dos pares, com slippage baixo para ordens de tamanho institucional. Market makers automatizam arbitragem entre múltiplas CEXs via colocation e redes de baixa latência, utilizando USDT como ativo de liquidação padrão. A presença de stablecoin reduz custos de funding em relação ao uso de fiat on-ramp tradicional.

### 5.2 Perpétuos e futuros margined em USDT

O par também domina mercados perpétuos denominados em USDT, nos quais traders usam a stablecoin como margem. A taxa de funding, paga entre compradores e vendedores, é o mecanismo que ancora o preço do perpétuo ao mercado spot. Funding positivo persistente indica excesso de alavancagem comprada; funding negativo, excesso de alavancagem vendida. Oscilações de funding impactam diretamente a demanda por USDT como margem e influenciam a pressão de compra ou venda no mercado spot.

### 5.3 DEX, AMMs e pools de liquidez

Em DEXs de camada 1 e camada 2 (Ethereum, Arbitrum, Base), pools de BTC envolvem versões tokenizadas (WBTC, tBTC) pareadas com USDT. A liquidez nessas pools depende de incentivos de yield farming, emissões de tokens de governança e eficiência de roteadores. AMMs concentradas (estilo Uniswap v3) permitem provisionar liquidez em faixas específicas de preço, o que reduz slippage, mas exige gestão ativa conforme a volatilidade elevada do BTC.

### 5.4 Oráculos de preço

Protocolos de empréstimo (Aave, Compound) e derivativos sintéticos (Synthetix, GMX) usam oráculos (Chainlink, Pyth) para capturar preço em tempo real. Uma falha de oráculo ou latência em feeds pode gerar liquidações incorretas. Por isso, o par BTC/USDT costuma servir de fonte primária de dados para agregadores, e a redundância de fontes é mandatória em ambientes de alta volatilidade.

---

## 6. Histórico de movimentações e eventos-chave que moldaram o par

### 6.1 Linha do tempo de choques e inovações

- **2009-2013:** Lançamento do Bitcoin e primeiras listagens em exchanges de nicho; ausência de stablecoins, precificação primária em USD/EUR.  
- **2014-2016:** Popularização do USDT como alternativa a bancos corresponsáveis; primeira listagem do par BTC/USDT em grandes exchanges asiáticas.  
- **2017:** Bull market histórico; Tether passa de bilhões em circulação; aumento de críticas sobre reservas e chamadas de regulação.  
- **2018-2019:** Queda de preços do BTC, mas consolidação do USDT como stablecoin dominante; surgimento de derivativos perpétuos margined em USDT.  
- **2020:** Halving do BTC, auge de liquidez durante pandemia; expansão do USDT para redes como Tron, diminuindo custos de transferência.  
- **2021:** Bull market com máximas históricas; aumento da dominância de USDT como par base; crescimento de DeFi e uso de WBTC/USDT em DEXs.  
- **2022:** Crises de crédito (CeFi), colapsos de emprestadores centralizados; o peg do USDT mantém-se com volatilidade intradiária limitada; reforço em relatórios de reservas.  
- **2023-2024:** Adoção de Ordinals e BRC-20 aumenta taxas on-chain; halving de 2024 reduz inflação; mais exchanges listam perpétuos denominados em USDT.  
- **2025:** Hashrate atinge novo pico; discussões regulatórias sobre stablecoins avançam nos EUA e UE; expansão de stablecoins concorrentes, mas USDT mantém liderança de volume no par com BTC.  
- **2026 (até janeiro):** Crescimento de integrações cross-chain de USDT em L2s; intensificação de estratégias de arbitragem entre USDT e outras stablecoins; BTC experimenta períodos de compressão de volatilidade seguidos de quebras rápidas, destacando a necessidade de gestão de risco em funding.

### 6.2 Dinâmica de liquidez em ciclos de mercado

Em fases de alta, o USDT é usado como margem para alavancar compras de BTC, elevando funding e incentivando market makers a vender perpétuos e comprar spot, mantendo o preço ancorado. Em fases de queda, investidores realizam lucros em BTC para USDT, aumentando a oferta de stablecoin nas carteiras e, muitas vezes, pressionando o preço do BTC. Esse fluxo bidirecional faz do USDT um barômetro de sentimento: saldos elevados de USDT em exchanges podem indicar "pólvora seca" pronta para compra; saldos baixos sugerem alavancagem já consumida.

---

## 7. Métricas e indicadores avançados para leitura do par

### 7.1 Métricas on-chain do Bitcoin

- **Hashrate e Dificuldade:** Medem a segurança econômica e a saúde da mineração. Picos de hashrate indicam confiança dos mineradores mesmo com compressão de margens.  
- **HODL Waves e Idade de UTXOs:** Percentual de moedas paradas há mais de 1 ano revela convicção de longo prazo. A redução de oferta circulante líquida pode criar pressão de oferta.  
- **Saldo de BTC em exchanges:** Quedas sustentadas de saldo em CEXs sugerem movimentos para custódia própria ou yield em DeFi; aumentos sugerem preparo para venda.  
- **Realized Cap e MVRV:** Avaliam se o mercado está sobrevalorizado ou subvalorizado versus custo médio realizado.

### 7.2 Métricas do USDT

- **Oferta circulante por rede:** Distribuição entre Tron, Ethereum e L2s indica preferência por custo de transação versus segurança.  
- **Volume de emissão e resgate:** Fluxos diários podem sinalizar confiança em reservas ou necessidade de liquidez de mercado.  
- **Peg Deviation:** Desvios do preço do USDT em relação a $1 em diferentes venues; spreads ampliados podem sinalizar stress ou arbitragem ativa.

### 7.3 Indicadores de microestrutura

- **Funding Rate (perpétuos):** Indicador de alavancagem direcional. Funding alto e positivo sugere euforia compradora; funding negativo indica pressão vendedora.  
- **Open Interest (OI):** Medida de contratos abertos. OI crescente com preço ascendente reforça tendência; OI alto com funding extremo sugere risco de squeeze.  
- **Basis (futuros trimestrais vs. spot):** Basis positivo alto indica contango e demanda de alavancagem; basis negativo indica backwardation e medo.

### 7.4 Indicadores macro

- **Índices de dólar (DXY) e juros reais:** Dólar forte e juros reais altos tendem a pressionar ativos de risco; juros decrescentes favorecem apetite por BTC.  
- **Fluxos institucionais (ETFs spot de BTC):** Entradas líquidas em ETFs spot influenciam o lado comprador no mercado spot, ainda que negociem em USD em vez de USDT.

---

## 8. Estratégias de negociação e uso do par BTC/USDT

### 8.1 Estratégias spot

- **Buy and Hold com rebalanceamento:** Alocações graduais em BTC, mantendo parte em USDT para rebalancear em quedas acentuadas.  
- **DCA (Dollar-Cost Averaging):** Compras periódicas de BTC usando USDT para reduzir risco de timing.  
- **Rotação de stablecoins:** Aproveitar spreads temporários de peg entre USDT e outras stablecoins para acumular USDT barato e converter em BTC.

### 8.2 Estratégias de derivativos

- **Perpétuos neutros (Cash-and-Carry):** Comprar BTC spot e vender perpétuo BTC/USDT quando o funding está muito alto; captura-se funding positivo com risco de base.  
- **Basis Trade com futuros datados:** Comprar BTC spot, vender futuros trimestrais; recebe-se basis em contango como carry.  
- **Proteção com opções:** Puts financiadas por calls cobertas ou colares (collars) para proteger posições spot denominadas em USDT.

### 8.3 Estratégias em DeFi

- **Provisionamento de liquidez BTC/USDT em AMMs concentradas:** Captura taxas de negociação; exige monitoramento para evitar impermanent loss em movimentos bruscos.  
- **Empréstimo e empréstimo colateralizado:** Depositar BTC e tomar USDT para financiar posições sem vender o ativo; requer atenção ao Health Factor e a quedas abruptas de preço.  
- **Rehypothecation controlada:** Uso de BTC tokenizado (WBTC, tBTC) como colateral; risco adicional de custodiante e de-peg do wrapper.

### 8.4 Gestão de risco aplicada

- **Tamanho de posição e margens:** Evitar alavancagens altas em ambientes de funding extremo; usar USDT como buffer de margem para evitar liquidações.  
- **Stops baseados em volatilidade:** Ajustar stops pelo ATR (Average True Range) diário do BTC para evitar ruído.  
- **Monitoramento de eventos macro:** Decisões de FOMC, CPI, NFP e dados de inflação podem alterar drasticamente volatilidade e funding intradiários.

---

## 9. Riscos específicos do par e planos de contingência

### 9.1 Volatilidade estrutural do BTC

Bitcoin continua sendo um ativo de alta volatilidade; movimentos de 5-10% intradiários são comuns em eventos macro ou técnicos. Para quem opera com USDT como margem, isso significa que a velocidade de liquidações pode ser alta, especialmente se o funding estiver desequilibrado. Contingências incluem redução de alavancagem, uso de ordens limitadas em vez de market e monitoramento contínuo de oráculos.

### 9.2 Risco depeg do USDT

Embora o USDT tenha mantido a paridade na maioria dos choques, o risco depeg é não nulo. Em um cenário de perda de peg, os preços de ativos em pares USDT podem distorcer-se, e contratos derivativos margined em USDT podem sofrer recalibração abrupta. Planos de contingência: manter exposição parcial em outras stablecoins, monitorar spreads USDT/USD em múltiplas venues e possuir rotas de conversão rápidas (CEXs e DEXs).

### 9.3 Risco regulatório

Mudanças regulatórias que limitem a circulação de stablecoins ou imponham requisitos de reservas podem afetar a fungibilidade do USDT. Para o BTC, regulações sobre custódia e tributação podem influenciar fluxos institucionais. Diversificar rotas de liquidação (incluindo USD on-ramp, stablecoins alternativas e Lightning) pode mitigar riscos.

### 9.4 Risco tecnológico e de infraestrutura

Falhas em ponte de tokens (bridge) para BTC tokenizado, bugs em contratos DeFi ou interrupções em exchanges podem causar gaps de preço entre mercados spot e perpétuos. Redundância de venues, monitoramento de status de rede e limites de exposição por protocolo são medidas prudentes.

---

## 10. Aspectos operacionais e boas práticas de execução

1. **Escolha de venue e liquidez:** Priorizar exchanges com profundidade comprovada no livro BTC/USDT e histórico de uptime; para DeFi, avaliar TVL e auditorias de contratos.  
2. **Custódia:** Para holdings estratégicos, usar hardware wallets; para operações frequentes, manter somente o necessário em CEXs.  
3. **Gestão de chaves e segurança:** MFA, chaves FIDO2 e segregação de contas para trading e custódia.  
4. **Slippage e impacto de mercado:** Usar TWAP/VWAP para ordens grandes; em AMMs, definir faixas de preço estreitas apenas com monitoramento contínuo.  
5. **Financiamento e taxas:** Monitorar funding a cada 8 horas em perpétuos; revisar taxas de saque/rede ao mover USDT entre blockchains.  
6. **Conciliação e compliance:** Registrar bases de custo em USDT e em fiat para fins fiscais; armazenar hashes de transações como prova.  
7. **Planos de contingência:** Definir triggers de redução de risco quando funding exceder limites (ex.: >0.25% por 8h), quando o peg do USDT desviar >0.2%, ou quando o preço do BTC romper níveis técnicos críticos.

---

## 11. Checklist de leitura de mercado diária para o par

- Funding rate atual e projeção para o próximo intervalo em principais CEXs.  
- Open interest agregado e variação diária; identificar se o OI cresce junto com preço (tendência) ou diverge (squeeze potencial).  
- Saldo de USDT e BTC em exchanges monitorado por dashboards on-chain.  
- Spreads de peg do USDT em diferentes redes (CEX vs. DEX) e diferenças de preço BTC/USDT vs. BTC/USD.  
- Agenda macro do dia (FOMC, CPI, Payroll, discursos de autoridades monetárias) e eventos específicos de protocolo (soft forks, releases).  
- Mapas de liquidez (heatmaps) de livros de ordens para identificar zonas de stop clusters.

---

## 12. Cenários prospectivos para 2026: teses de alta e baixa

### 12.1 Tese de alta

Se os ETFs spot de Bitcoin continuarem recebendo fluxos líquidos, a pressão compradora em USD tende a repercutir nos livros BTC/USDT via arbitragem. A combinação de queda de juros reais, aumento da adoção de Lightning para pagamentos e maior clareza regulatória para stablecoins pode expandir a base de usuários. Nessa hipótese, a demanda por USDT como margem e par de referência cresce, fortalecendo a liquidez e potencialmente reduzindo volatilidade relativa.

### 12.2 Tese de baixa

Um aperto monetário prolongado, combinado com choques regulatórios sobre stablecoins (por exemplo, limites de emissão ou exigência de depósitos em bancos específicos), poderia reduzir a fungibilidade do USDT e criar spreads regionais de preço. Simultaneamente, um decréscimo do hashrate por razões geopolíticas ou energéticas poderia enfraquecer a segurança percebida do BTC, elevando o custo de capital para mineradores e pressionando o preço.

### 12.3 Riscos de cauda

Eventos de cauda incluem: ataque coordenado a grandes CEXs com livros profundos de BTC/USDT; falha de oráculo em protocolos sistêmicos de DeFi; decisão judicial que restrinja a circulação do USDT em jurisdições-chave; ou um avanço tecnológico inesperado (computação quântica aplicada à criptografia) que force mudanças rápidas de protocolo.

---

## 13. Procedimento operacional para produzir artigos de pares (template aplicado)

1. **Contextualização inicial:** Apresentar o par, sua relevância e por que é central para liquidez.  
2. **Fundamentos dos dois ativos:** Explicar política monetária, modelo de segurança (BTC) e mecanismo de peg/reservas (USDT).  
3. **Microestrutura de mercado:** Detalhar comportamento em spot, perpétuos, DEX e oráculos.  
4. **Histórico de eventos e linhas do tempo:** Destacar choques, inovações, regulações e respostas de mercado.  
5. **Indicadores-chave:** On-chain (hashrate, HODL waves), métricas de stablecoin (emissão/resgate) e microestrutura (funding, basis, OI).  
6. **Estratégias e casos de uso:** Spot, derivativos, DeFi, gestão de margem, arbitragem.  
7. **Riscos e planos de contingência:** Volatilidade, depeg, riscos regulatórios e tecnológicos.  
8. **Checklist operacional:** Pontos diários de monitoramento para traders e analistas.  
9. **Cenários prospectivos:** Teses de alta/baixa e riscos de cauda.  
10. **Fontes e referências:** Listar 5+ fontes primárias/segundárias para validação contínua e atualização do artigo.

---

## 14. Fontes recomendadas (mínimo 5) para consolidação e atualização

1. Whitepaper do Bitcoin e documentação técnica em `bitcoin.org` (referência primária de protocolo).  
2. Relatórios de atestação e transparência da Tether (site oficial e comunicados regulatórios).  
3. Dados on-chain e métricas de mercado em CoinMetrics, Glassnode ou IntoTheBlock.  
4. Agregadores de preço e oráculos (Chainlink, Pyth) para feeds de BTC/USDT.  
5. Pesquisas e relatórios de instituições financeiras e regulatórias (BIS, IMF, relatórios de stablecoins de bancos centrais).  
6. Dados de derivativos em exchanges com auditoria de prova de reservas e monitoramento de funding (Deribit, Binance, OKX, Bybit).  
7. Cobertura de eventos macro e decisões de política monetária (Federal Reserve, BCE) para correlacionar com fluxo de liquidez para o par.

---

## 15. Considerações finais

O par BTC/USDT é o barômetro de liquidez e sentimento do mercado cripto. Ele condensa as virtudes e fragilidades do ecossistema: escassez programada e segurança descentralizada do Bitcoin, aliadas à conveniência e aos riscos de contraparte de uma stablecoin onipresente. Produzir análises consistentes desse par exige monitoramento contínuo de fundamentos on-chain, microestrutura de derivativos e saúde do peg do USDT. O template acima oferece um caminho estruturado para replicar artigos para os demais pares listados em `pares-de-crypto.md`, garantindo profundidade, consistência e foco em fundamentos históricos e operacionais.

> Este material é para fins educacionais e não constitui recomendação de investimento. Adapte o texto com dados atualizados sempre que novas informações de mercado ou regulatórias surgirem.

---

## 16. Apêndice: Playbook semanal para acompanhar fundamentos e liquidez

- **Segunda-feira:** Revisar funding e basis após o fim de semana, quando livros de ordens costumam afinar; atualizar posições de hedge se o funding abrir a semana em extremos.  
- **Terça-feira:** Consolidar dados on-chain de hashrate e fluxos para exchanges; verificar se mineradores estão vendendo mais BTC que a média móvel semanal.  
- **Quarta-feira:** Monitorar anúncios de política monetária (FOMC, BCE) e dados de inflação; recalibrar alavancagem se a volatilidade implícita das opções de BTC subir abruptamente.  
- **Quinta-feira:** Avaliar relatórios de resgate/queima de USDT e eventuais comunicados de Tether; auditar peg em DEXs com alta velocidade de bloco para identificar micro-desvios.  
- **Sexta-feira:** Rodar backtests curtos de estratégias de funding ou basis com os dados da semana; decidir se mantém posições abertas para o fim de semana ou se reduz exposição para evitar gaps.  
- **Domingo:** Rebalancear carteiras com base em percentuais pré-definidos de BTC e USDT, ajustando buffers de margem para a abertura asiática; atualizar documentação de trades e premissas.

Este playbook resume ações táticas que reforçam disciplina operacional e criam um trilho replicável para outros pares listados, mantendo o foco em fundamentos, liquidez e gerenciamento de riscos ao longo de cada semana.
