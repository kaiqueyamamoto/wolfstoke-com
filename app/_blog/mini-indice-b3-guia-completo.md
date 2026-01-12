# Mini-Índice (WIN): guia completo e avançado

**Por Equipe Wolfstoke • 11 de janeiro de 2026 • 23 min de leitura**

O mini-índice (código WIN na B3) é a versão fracionada do contrato futuro de Ibovespa. Cada ponto vale R$ 0,20 (1/5 do contrato cheio IND), permitindo que traders e investidores hedgem carteiras ou especulem sobre o Ibovespa com menor margem. Este guia mergulha na estrutura, precificação, operação, riscos, estratégias, microestrutura e rotinas de gestão para que você use o mini-índice com disciplina na plataforma Wolfstoke.

---

## 1. Conceito e finalidade

- **O que é**: contrato futuro de Ibovespa, liquidação financeira, vencimento bimestral.
- **Por que existe**: democratizar acesso ao mercado futuro, viabilizando alocações menores e ajustes finos de beta.
- **Quem usa**: traders de curto prazo, gestores de ações para hedge, investidores que querem exposição tática ao índice.

### 1.1 Relação com o contrato cheio

- IND (cheio) = R$ 1,00/ponto; WIN (mini) = R$ 0,20/ponto.
- Mesma data de vencimento, ajustes e metodologia de preço de ajuste.
- Liquidez concentrada no mini; cheio é usado por institucionais para ordens maiores.

---

## 2. Especificações do WIN

- **Ativo objeto**: índice Bovespa futuro (Ibovespa).
- **Tamanho do contrato**: valor em reais = pontos do índice × R$ 0,20.
- **Cotação**: pontos do Ibovespa com uma casa decimal.
- **Vencimento**: terceiro mês ímpar (jan, mar, mai, jul, set, nov); código WIN<Letra><ano>.
- **Liquidação**: financeira, pelo preço de ajuste na data de vencimento.
- **Horários**: pregão estendido; verificar grade da B3 (normalmente 9h às 18h30, com after).

### 2.1 Código de negociação

- Exemplo: WINJ26 → vencimento abril/2026 (J = abril).
- Sequência de letras: F jan, G fev, H mar, J abr, K mai, M jun, N jul, Q ago, U set, V out, Z nov, F jan.

---

## 3. Margens e alavancagem

- **Margem inicial**: depositada para abrir posição; pode ser dinheiro, Títulos Públicos ou CDBs com haircut.
- **Margem de manutenção**: nível mínimo; abaixo dele ocorre chamada de margem (margin call).
- **Alavancagem**: com ~R$ 1.500-2.500 (varia) controla-se contrato de ~R$ 24.000 (índice a 120 mil), alavancagem ~10-16x.
- **Ajuste diário**: lucros/perdas creditados/debitados ao fim do dia pelo preço de ajuste oficial.

### 3.1 Exemplo numérico

- Índice a 120.000 pontos: contrato vale 120.000 × 0,20 = R$ 24.000.
- Margem R$ 1.800 → alavancagem 13,3x.
- Movimento de 1.000 pontos (0,83%) = R$ 200 de ganho/perda (~11% da margem).

---

## 4. Precificação: custo de carregamento e base

- **Teoria**: Futuro = Spot × e^{(juros – dividendos) × t}.
- **Base**: diferença entre futuro e índice à vista; converge no vencimento.
- **Fatores**: taxa DI, dividend yield esperado, expectativa de proventos extraordinários, prêmio de risco.
- **Contango/backwardation**: se juros > dividendos, futuro tende a ficar acima do spot (contango); se dividendos altos, pode ficar abaixo.

### 4.1 Ajuste diário e impacto na base

- Ajustes diários reduzem risco de crédito e refletem PNL diária.
- Base pode mudar com mudanças na curva DI ou revisões de dividendos.
- Eventos corporativos grandes (dividendos, follow-ons) podem alterar o custo de carregamento.

---

## 5. Liquidez e microestrutura

- **Volume**: WIN é um dos contratos mais líquidos da B3; spreads normalmente de 1 ponto em horários cheios.
- **Profundidade**: analisar cinco melhores níveis no book; horários de abertura/fechamento têm spreads mais largos.
- **Leilões**: preço de ajuste diário considera média ponderada em janela de fechamento; cuidado com volatilidade.
- **After-hours**: liquidez menor; slippage maior.

### 5.1 Slippage e execução

- Use ordens limitadas para controlar preço.
- Evite ordens grandes em janelas ilíquidas; fracionar execução ou usar VWAP/TWAP.
- Notícias macro (CPI/FOMC), payroll e abertura dos EUA aumentam volatilidade; ajustar tamanho.

---

## 6. Riscos específicos do mini-índice

- **Alavancagem**: amplifica perdas; margin calls podem encerrar posições automaticamente.
- **Volatilidade**: Ibovespa é sensível a commodities, câmbio e política; movimentos intraday podem ser amplos.
- **Overtrading**: facilidade de operar pode gerar excesso de trades e custos.
- **Erro operacional**: digitando tamanho errado ou lado errado; use confirmações e limites.

### 6.1 Mitigação

- Definir risco fixo por trade (ex.: 0,5%-1% do capital).
- Stops técnicos ou por volatilidade (ATR).
- Colchão de margem (2-3x a margem mínima) para evitar liquidação forçada em spikes.
- Limites de perda diária e máxima.

---

## 7. Estratégias clássicas com o WIN

### 7.1 Hedge de carteira

- Vender WIN para reduzir beta de carteira de ações.
- Número de contratos: (Valor da carteira × beta) / (pontos × 0,20).
- Recalibrar beta periodicamente, principalmente após rebalanceamentos do Ibovespa.

### 7.2 Especulação direcional

- Operar tendências, rompimentos ou reversões intraday.
- Usar stops e sizing por volatilidade; evitar aumentar mão em perda.

### 7.3 Arbitragem e spreads

- **Cash and carry**: arbitragem entre ETF BOVA11/cesta e futuro, menos comum para varejo.
- **Calendar spread**: long/short entre vencimentos (WINJ/WINM) para capturar inclinação da curva.
- **Intermarket**: pares com mini-dólar (WDO) em cenários macro (ex.: risk-on vs risk-off).

---

## 8. Gestão operacional e ferramentas

- Plataformas que suportam OCO (stop + alvo) ajudam na disciplina.
- Checklists antes de entrar: horário, liquidez, eventos do dia, direção macro (commodities/câmbio/juros).
- Log de trades para revisar PNL e erros recorrentes.
- Conexão estável e plano de contingência (telefone da mesa) para quedas de internet.

---

## 9. Considerações fiscais e de custos

- **IR**: 20% sobre lucro em day trade; 15% em operações normais. IRRF: 1% DT, 0,005% demais.
- **Custos**: emolumentos B3 + corretagem (muitas zeram) + ISS sobre corretagem quando aplicável.
- **Controle**: manter planilha com datas, preços de ajuste e PNL; compensar prejuízos de mesma natureza.

---

## 10. Exemplo de hedge passo a passo

1. Carteira ações: R$ 150.000, beta 1,0.
2. Ibovespa futuro (WIN) a 120.000 pontos.
3. Nocional do mini: 120.000 × 0,20 = R$ 24.000.
4. N contratos = (150.000 × 1,0) / 24.000 ≈ 6,25 → 6 ou 7 contratos.
5. Venda 6 contratos (hedge ~96%); monitorar base e rolar antes do vencimento.

---

## 11. Rolo (roll) e vencimento

- Último dia útil do vencimento: posição é ajustada pelo preço final.
- Rolagem: fechar o contrato vigente e abrir no próximo (ex.: vender WINJ, comprar WINM) antes da liquidez migrar.
- Custo/ganho de rolagem depende do contango/backwardation.

---

## 12. Comparação WIN vs outros derivativos

- **Mini-dólar (WDO)**: hedge de câmbio; sensível a fluxo externo e juros.
- **Opções de Ibovespa**: oferecem convexidade; exigem entendimento de gregas.
- **CFDs/ETFs alavancados (exterior)**: não disponíveis na B3; WIN é o principal veículo local.

---

## 13. Impacto de eventos macro e corporativos

- **Macro**: decisões do Copom, Fed, payroll, CPI americano, PMIs.
- **Commodities**: petróleo e minério impactam pesos pesados; refletem no índice.
- **Política doméstica**: reformas, fiscal, ruídos políticos.
- **Resultados**: temporada de balanços altera volatilidade setorial; efeito agregado no índice.

---

## 14. Gestão de risco quantitativa aplicada ao WIN

- **VaR/ES**: estimar perda máxima provável por contrato/posição.
- **ATR-based sizing**: tamanho = (risco em R$) / (ATR × valor/ponto).
- **Stress tests**: simular choques de 2.000-3.000 pontos intraday.
- **Correlações**: monitorar correlação com dólar e S&P em crises para ajustar overlay.

---

## 15. Boas práticas para iniciantes

- Começar com 1 contrato; foco em processo, não em lucro absoluto.
- Operar em horários de maior liquidez (evitar primeira/última meia hora até ganhar experiência).
- Documentar estratégia e resultados; revisar semanalmente.
- Evitar operar em notícia se não tem playbook para volatilidade.

---

## 16. Microestrutura de book e fila

- Ordens são priorizadas por preço e depois tempo; entrar cedo na fila melhora execução.
- Em alta volatilidade, ordens a mercado podem executar com múltiplos ticks de slippage.
- Book do cheio (IND) pode ajudar a ler fluxo institucional; mini reflete, mas com ruído.

---

## 17. Ferramentas de apoio e monitoramento

- **Índice de volatilidade implícita (IVIBOV, quando disponível)** para medir risco.
- **Cotações em tempo real**: essencial; atrasos distorcem execução.
- **Calendário econômico**: payroll, decisões de juros, indicadores de inflação.
- **Painéis Wolfstoke**: acompanhar PNL, margem disponível, risco por trade e por dia.

---

## 18. Checklists rápidos

- Margem livre suficiente (≥2x margem inicial)?
- Eventos macro hoje? (CPI, FOMC, Copom, payroll).
- Tendência/estrutura de mercado clara ou chop? Ajustar tamanho.
- Stop e alvo definidos antes da entrada? Ordem OCO configurada?
- Risco total diário dentro do limite?

---

## 19. Estudos de caso

### 19.1 Hedge em período de eleição

- Carteira de ações exposta a risco político; vende 8 WIN para reduzir beta.
- Margens aumentam; mantém caixa extra.
- Após eleição e queda de volatilidade, recompra WIN e remove hedge.

### 19.2 Operação intraday em payroll

- Estratégia: aguardar 5 minutos após divulgação; operar rompimento da primeira faixa de 5 minutos.
- Stop baseado em 1,5× ATR5; alvo 3× ATR5.
- Reduz tamanho pela metade devido a spreads maiores.

### 19.3 Rolagem disciplinada

- Rola 5 dias úteis antes do vencimento; evita liquidez baixa no último dia.
- Avalia custo de rolagem; registra impacto no PNL.

---

## 20. Diferenças do mini para investidores de longo prazo

- WIN não é buy and hold: expira e precisa ser rolado.
- Para exposição longa ao Ibovespa sem rolagem frequente, considerar ETFs (BOVA11, BOVV11) ou fundos.
- WIN é útil como overlay: ajusta beta sem desmontar carteira.

---

## 21. Riscos de base e tracking

- Hedge com WIN pode não ser perfeito se carteira divergir muito do Ibovespa.
- Dividendos inesperados alteram custo de carregamento.
- Em estresse, base pode se abrir; monitore diferença entre spot (índice à vista) e futuro.

---

## 22. Educação e simulação

- Usar simulador/conta demo para testar setups.
- Backtesting de regras simples (timeframes, volatilidade) ajuda a validar ideias.
- Gravação de tela ou prints de book e gráfico auxilia revisão de execução.

---

## 23. Fontes consultadas

- Wikipédia: Contrato de futuros (estrutura e conceitos de base/ajuste).
- B3: página educativa do mini-índice (especificações e horários).
- InfoMoney: Guia de mini-índice (contexto e exemplos).
- GuiaInvest / materiais introdutórios (operacional e códigos).
- Investopedia: mini futures (visão geral internacional).

---

## 24. Conclusão aplicada

O mini-índice é versátil: serve para hedge, especulação e ajustes táticos de beta com pouco capital. A alavancagem embutida exige processo sólido: sizing por risco, stops definidos, rolagem disciplinada e caixa para margens. Compreenda a relação com o contrato cheio, acompanhe eventos macro e respeite limites de risco para que o WIN seja um aliado — não uma fonte de surpresas — na sua estratégia na plataforma Wolfstoke.

---

## 25. Rotina diária sugerida

- **Antes do pregão**: revisar calendário (CPI, payroll, Copom/FOMC), checar overnight de S&P/futuros e commodities, confirmar margem livre.
- **Abertura**: evitar 5-10 minutos iniciais se não houver playbook específico; spreads mais amplos.
- **Meio do dia**: menor volatilidade; ajustar estratégias para ranges menores.
- **Fechamento**: spreads e volatilidade aumentam; cuidado com ordens grandes e ajuste de risco para o dia seguinte.
- **After**: operar apenas se necessário; liquidez reduzida.

---

## 26. Leitura de fluxo e tape reading (contexto)

- Mini tem muito player varejo; ruído é maior. Observar fluxo no cheio (IND) para referência de institucional.
- Cuidado com spoofing/ordens fantasma; usar filtros de tamanho mínimo.
- Times & trades ajudam a identificar agressões consistentes; combine com contexto de preço e horário.

---

## 27. Combinação com opções de índice

- **Protective put**: manter posição comprada em ações e comprar put sobre WIN/IND para proteção.
- **Covered call sintético**: posição longa em ações + venda de futuro/compra de call; atenção ao custo de carregamento.
- **Estratégias de volatilidade**: straddle/strangle em eventos (vol alta) ou venda quando IV está esticada (com hedge de preço).

---

## 28. Requisitos de compliance e suitability

- Corretoras avaliam perfil de risco antes de habilitar derivativos.
- Manter cadastro e termo de ciência de risco atualizados.
- Registros e logs ajudam em auditorias internas (para gestores) e declaração fiscal.

---

## 29. Gestão de capital e psicologia

- **Planejamento**: metas de risco/retorno diárias e mensais; evitar revenge trade.
- **Intervalos**: pausas programadas após sequência de perdas para evitar overtrading.
- **Checklist emocional**: evitar operar cansado ou sob influência de notícias pessoais.

---

## 30. Modelos de dimensionamento de posição

- **Risco fixo**: R$ arriscado por trade / (stop em pontos × 0,20).
- **Kelly fracionado**: usar apenas fração do Kelly para reduzir volatilidade da curva de capital.
- **Bandas de volatilidade**: aumentar/diminuir contratos conforme ATR sobe/desce, mantendo risco constante.

---

## 31. Integração com dólar e renda fixa

- **Macro overlay**: pares WIN vs WDO para plays de risk-on/off.
- **Curva DI**: alta de juros tende a pressionar valuation; pode refletir no índice e no custo de carregamento.
- **Proteção cambial**: posições em WIN podem ser combinadas com WDO para neutralizar efeito de câmbio em carteiras dolarizadas.

---

## 32. Efeitos de eventos corporativos

- Dividendos extraordinários de grandes pesos (petrolíferas, bancos) afetam base via redução de custo de carregamento.
- Rebalanceamentos do Ibovespa (trimestrais) mudam pesos e podem alterar sensibilidade a setores.
- IPOs e follow-ons relevantes podem alterar fluxo e volatilidade intraday.

---

## 33. Indicadores e estudos técnicos úteis

- **VWAP**: referência para intraday; preço médio ponderado pelo volume.
- **ATR**: medir volatilidade e calibrar stops.
- **Médias móveis**: 9/21 para curto prazo; 50/200 para tendência maior.
- **Bandas de Bollinger**: detectar compressão/expansão de volatilidade.
- **Market profile**: identificar áreas de valor e possíveis regiões de congestão.

---

## 34. Simulação de PNL e risco agregado

- Exemplo: 3 contratos, stop 300 pontos, alvo 600 pontos.
- Risco por trade: 300 × 0,20 × 3 = R$ 180.
- Dois stops seguidos = R$ 360; avaliar se cabe no limite diário.
- Win rate 45% com RR 1:2 → expectativa positiva; verificar amostra suficiente e custos.

---

## 35. Custos ocultos e ajustes

- **Slippage**: diferença entre preço esperado e executado; aumenta em horários de dado macro.
- **Taxa de registro**: embutida nos emolumentos.
- **Financiamento de margem**: custo de oportunidade do capital em margem; comparar com CDI.

---

## 36. Impacto da curva de juros no WIN

- Juros mais altos elevam custo de carregamento → futuro tende a prêmio maior vs spot, se dividendos não compensarem.
- Queda de juros pode reduzir prêmio ou gerar desconto se dividend yield for alto.
- Mudanças abruptas na curva podem alterar base intraday; atenção em dias de Copom/FOMC.

---

## 37. Operação em diferentes timeframes

- **Scalping**: poucos pontos, alta frequência; exige execução precisa e spreads apertados.
- **Day trade de tendência**: movimentos de 500-1500 pontos; stops maiores, menos trades.
- **Swing trade**: possível, mas requer rolagem se carregar até vencimento; avaliar custo e base.

---

## 38. Gestão de drawdown

- Definir limite de perda mensal (ex.: 5-10% do capital) para pausar e revisar.
- Reduzir tamanho após drawdown; recuperar gradualmente.
- Revisar logs para identificar erros comportamentais e de execução.

---

## 39. Riscos de sistema e infraestrutura

- Queda de energia/internet: usar nobreak e backup de conexão.
- Falha de plataforma: ter telefones da mesa; evitar ficar preso em posição.
- Latência: em alta volatilidade, ordens podem demorar; evitar ordens a mercado sem necessidade.

---

## 40. Planos de contingência

- **Desconexão**: plano para zerar via telefone/mesa.
- **Margem insuficiente**: lista de garantias elegíveis para aporte rápido.
- **Evento inesperado**: se spread abrir muito, reduzir tamanho ou ficar flat até normalizar.

---

## 41. Uso por perfis diferentes

- **Iniciante**: 1 contrato, foco em aprendizado, registrar trades.
- **Intermediário**: 2-5 contratos, estratégias definidas, gestão de risco formal.
- **Avançado**: uso de spreads, rolagem sistemática, hedge de carteira, integração com opções.

---

## 42. Educação contínua

- Acompanhar materiais da B3 e cursos específicos de derivativos.
- Ler relatórios diários de corretoras para contexto macro e de fluxo.
- Participar de comunidades com filtros de qualidade; evitar dicas sem gestão de risco.

---

## 43. Exemplo de rolagem operacional

- Posição comprada em WINJ; cinco dias úteis antes do vencimento, fecha WINJ e abre WINK.
- Se curva em contango: rolagem tem custo (futuro mais caro); registrar no PNL.
- Se em backwardation: rolagem pode gerar crédito.
- Importante: manter tamanho e direção equivalentes; ajustar se base mudou muito.

---

## 44. Monitoramento de margem intraday

- Ajustes intraday são raros, mas em volatilidade extrema podem ocorrer.
- Manter saldo de caixa na corretora para absorver variações.
- Retirar lucro só após verificar que margem continua confortável.

---

## 45. Relação com ETFs e BDRs

- ETFs (BOVA11/BOVV11) não exigem margem, mas não oferecem alavancagem nem ajustes diários.
- WIN é mais eficiente para ajustes rápidos de beta; ETFs para exposição passiva.
- BDRs de ETFs de S&P/Nasdaq não substituem hedge do Ibovespa; cada um cobre mercado diferente.

---

## 46. Métricas de desempenho do trader de WIN

- **Expectativa**: (win rate × ganho médio) – (loss rate × perda média).
- **Payoff**: ganho médio / perda média.
- **SQN**: mede qualidade do sistema considerando número de trades.
- **Max drawdown**: pior sequência; usar para calibrar risco.

---

## 47. Aprendizados de falhas comuns

- Aumentar mão após perda (martingale) → risco de ruína.
- Ignorar calendário e ser pego por dado macro → stops grandes.
- Operar cansado → erros de digitação, entradas impulsivas.
- Deixar posição virar swing sem plano → risco de gap e de rolagem.

---

## 48. Segurança e governança pessoal

- Usar 2FA na corretora.
- Conceder acessos limitados se operar via APIs; revogar chaves não usadas.
- Conferir extratos de PNL e ajustes diariamente.

---

## 49. Checklists finais de semana

- Revisar PNL semanal; calcular métricas (win rate, payoff, expectativa).
- Ajustar metas e tamanhos se volatilidade mudou.
- Limpar gráficos/planos para a próxima semana; listar níveis importantes.

---

## 50. Perspectivas e atualizações

- Reformas de mercado (novo arcabouço de margens, mudanças na metodologia de ajuste) podem ocorrer; acompanhar comunicados da B3.
- Crescimento de volumes em sessões estendidas e integração com investidores estrangeiros podem mudar horários de maior liquidez.
- Evolução de produtos (microcontratos no futuro) pode ampliar granularidade; monitorar lançamentos.

---

## 51. Conclusão estendida

Usar o mini-índice com consistência exige dominar especificações, custos, riscos e o próprio comportamento. Combine disciplina de risco, leitura de contexto macro e execução cuidadosa. Hedgeie carteiras com cálculo de beta, especule com tamanho controlado e registre tudo. Ao seguir rotinas e checklists, o WIN deixa de ser apenas um ticket e vira uma ferramenta profissional na arquitetura de risco e retorno da Wolfstoke.

---

## 52. Perguntas frequentes

**Preciso zerar no vencimento?**  
Se não rolar, a clearing liquida financeiramente pelo preço de ajuste final. Para manter exposição, role antes da migração de liquidez.

**Há come-cotas ou IR retido?**  
Não há come-cotas. IR: 20% day trade, 15% demais; IRRF simbólico (1% DT, 0,005% swing) dedutível.

**Posso carregar WIN por meses?**  
Pode, mas deve rolar a cada vencimento; avalie custo de base e margens. ETFs podem ser mais práticos para buy and hold.

**Quantos contratos preciso para hedgear R$ 50 mil?**  
Se índice 120.000: nocional do mini = R$ 24.000; com beta 1, N ≈ 50.000/24.000 ≈ 2,1 → 2 contratos.

**Qual horário mais líquido?**  
Geralmente 10h30-12h e 15h-17h (BRT), alinhado com pregão local e abertura dos EUA.

---

## 53. Estudo numérico de stress intraday

- Posição: 4 contratos, comprado.
- Índice cai 1.500 pontos em 10 minutos (ex.: notícia inesperada). Perda = 1.500 × 0,20 × 4 = R$ 1.200.
- Se margem disponível era R$ 2.500 e margem mínima R$ 1.800, margem cai para ~R$ 1.300 → chamada de margem imediata.
- Lição: manter colchão >2x margem mínima para resistir a swings bruscos; usar stops automáticos.

---

## 54. Interpretação do preço de ajuste

- Ajuste diário é calculado pela média ponderada de negócios em janela específica de fechamento.
- PNL diária usa diferença entre ajustes consecutivos, não o último negócio.
- Estratégias que entram/saiem próximo ao ajuste precisam considerar essa janela para evitar surpresas.

---

## 55. Influência de ETFs e fluxo passivo

- ETFs que replicam Ibovespa podem rolar carteiras na virada de mês ou rebalanceamento; impacto no índice e no futuro.
- Fluxo passivo estrangeiro (via ETFs internacionais/derivativos) pode aumentar volume em horários de abertura de NY.

---

## 56. Convergência entre mini e cheio

- Preços de WIN e IND tendem a andar juntos; arbitradores exploram distorções.
- Em momentos de stress, mini pode ter pequenas diferenças por liquidez; não dura muito.
- Olhar book do cheio ajuda a validar níveis importantes (ex.: defesas em números redondos).

---

## 57. Planejamento de risco semanal

- Definir meta de risco agregado (ex.: perder no máximo R$ 1.500/semana).
- Distribuir por dia (ex.: 300/dia) e por trade.
- Se atingir perda semanal, pausar e revisar; evita espiral de overtrading.

---

## 58. Logging estruturado

- Campos mínimos: data/hora, direção, setup, tamanho, entrada, stop, alvo, saída, motivo, emoção percebida, notas de melhoria.
- Revisar semanalmente para identificar padrões de erro (horário, notícia, fadiga).
- Ajustar regras (não operar em certas janelas, reduzir tamanho em eventos).

---

## 59. Uso de múltiplos tempos gráficos

- Top-down: diário para níveis macro, 60/15 min para contexto, 5/1 min para execução.
- Evitar conflito de sinais; seguir prioridade do timeframe superior.
- Marcar suportes/resistências principais e esperar confirmações no intraday.

---

## 60. Fechamento

O mini-índice combina liquidez, alavancagem e acessibilidade. Com processos robustos, ele permite hedgear, alocar taticamente e operar com precisão. Sem disciplina, a alavancagem cobra caro. Use as ferramentas de risco da Wolfstoke, mantenha rotina clara e trate cada operação como parte de um sistema — não como aposta isolada. Segurança de margem, execução criteriosa e revisões constantes mantêm o WIN sob controle e a seu favor.

---

## 61. Roteiro de revisão mensal

- Consolidar métricas (expectativa, payoff, drawdown, taxa de acerto).
- Verificar se horários e setups mais lucrativos permanecem; cortar o que não entrega.
- Ajustar limites de risco conforme volatilidade do mercado (ATR do índice).
- Recalibrar hedge de carteira (beta, número de contratos) após rebalanceamentos do Ibovespa.
- Atualizar playbook com lições de incidentes e boas práticas aprendidas no mês.

---

## 62. Próximos passos de estudo

- Ler o manual de especificações da B3 para WIN e acompanhar eventuais revisões.
- Praticar backtests simples de estratégias de volatilidade e tendência.
- Estudar opções de índice para complementar hedges com convexidade.
- Explorar correlação com WDO e curva DI para compor visões macro integradas.
- Usar simuladores e replay de mercado para refinar execução em horários de alto fluxo.

---

## 63. Nota final

Disciplina com WIN não é opcional: defina regras claras, monitore-as e ajuste com dados. A alavancagem entrega eficiência quando combinada com método e respeito às margens. Mantenha o aprendizado contínuo e use a infraestrutura da Wolfstoke para medir, controlar e evoluir cada aspecto do seu trading ou hedge com mini-índice.
