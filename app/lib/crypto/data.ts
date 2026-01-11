export interface Metric {
  label: string;
  value: string;
}

export interface Feature {
  title: string;
  body: string;
}

export interface Step {
  title: string;
  detail: string;
}

export interface Plan {
  name: string;
  amount: string;
  price: string;
  target: string;
  dd: string;
  perks: string[];
  highlight?: boolean;
}

export interface Comparison {
  label: string;
  hydra: string;
  others: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export const metrics: Metric[] = [
  { label: "Funding até", value: "US$1M" },
  { label: "Payout", value: "90%" },
  { label: "Time limit", value: "Sem limite" },
  { label: "Mercados", value: "Cripto / FX" },
];

export const features: Feature[] = [
  {
    title: "Sem limite de tempo",
    body: "Avance no seu ritmo. O relógio não derruba sua conta.",
  },
  {
    title: "4 fases claras",
    body: "Consistência, alvos definidos e upgrade de conta automático.",
  },
  {
    title: "News e holds liberados",
    body: "Negocie ciclos cripto e eventos sem bloqueios.",
  },
  {
    title: "Pagamentos semanais",
    body: "Payouts até 90% com pedidos recorrentes.",
  },
];

export const steps: Step[] = [
  {
    title: "Fase 1 — Challenge",
    detail: "Atinge o alvo de lucro com proteção de drawdown e sem tempo limite.",
  },
  {
    title: "Fase 2 — Verificação",
    detail: "Repete a consistência com alvos menores para validar risco.",
  },
  {
    title: "Fases 3 e 4 — Scaling",
    detail: "Aumenta capital e mantém disciplina de risco enquanto escala.",
  },
  {
    title: "Conta Funded",
    detail: "Receba até 90% de payout, com relatórios e suporte ativos.",
  },
];

export const plans: Plan[] = [
  {
    name: "Starter",
    amount: "US$25K",
    price: "US$99",
    target: "Alvo Fase 1: 10%",
    dd: "Max loss: 8% / daily 4%",
    perks: ["Sem time limit", "Consistência simples", "Payouts semanais"],
  },
  {
    name: "Growth",
    amount: "US$50K",
    price: "US$199",
    target: "Alvo Fase 1: 10%",
    dd: "Max loss: 8% / daily 4%",
    perks: ["Alavancagem aumentada", "Suporte prioritário", "KYC apenas no funded"],
  },
  {
    name: "Pro",
    amount: "US$100K",
    price: "US$349",
    target: "Alvo Fase 1: 8%",
    dd: "Max loss: 8% / daily 4%",
    perks: ["90% payout", "Saques rápidos", "Acesso a mesa cripto"],
    highlight: true,
  },
  {
    name: "Elite",
    amount: "US$200K",
    price: "US$599",
    target: "Alvo Fase 1: 8%",
    dd: "Max loss: 8% / daily 4%",
    perks: ["Prioridade em upgrades", "Análise semanal", "Pipeline para US$1M"],
  },
];

export const comparison: Comparison[] = [
  {
    label: "Sem limite de tempo",
    hydra: "✔",
    others: "✖",
  },
  {
    label: "Cripto + FX + Índices",
    hydra: "✔",
    others: "Limitado",
  },
  {
    label: "Payout até 90%",
    hydra: "✔",
    others: "70–80%",
  },
  {
    label: "Escala até US$1M",
    hydra: "✔",
    others: "US$200–400K",
  },
  {
    label: "News trading liberado",
    hydra: "✔",
    others: "Restrito",
  },
];

export const cryptoPairsInternational = [
  "AAVE / USD", "ACT / USD", "ADA / USD", "AEVO / USD", "AIXBT / USD",
  "ALGO / USD", "ANIME / USD", "APE / USD", "APT / USD", "AR / USD",
  "ARB / USD", "ARK / USD", "ARKM / USD", "ATOM / USD", "AVAX / USD",
  "AXS / USD", "BCH / USD", "BLUR / USD", "BNB / USD", "BOME / USD",
  "BTC / USD", "CFX / USD", "COMP / USD", "COOKIE / USD", "CRV / USD",
  "DOGE / USD", "DOGS / USD", "DOT / USD", "DYDX / USD", "DYM / USD",
  "EIGEN / USD", "ENA / USD", "ENS / USD", "ETC / USD", "ETH / USD",
  "ETHFI / USD", "FIL / USD", "FLOKI / USD", "FXS / USD", "GALA / USD",
  "GMT / USD", "GMX / USD", "HBAR / USD", "ICP / USD", "ID / USD",
  "INJ / USD", "JASMY / USD", "JTO / USD", "JUP / USD", "KNC / USD",
  "LDO / USD", "LEVER / USD", "LINK / USD", "LTC / USD", "MAGIC / USD",
  "ME / USD", "MKR / USD", "MOVE / USD", "NEAR / USD", "NEIRO / USD",
  "NOT / USD", "OM / USD", "OMNI / USD", "OP / USD", "ORDI / USD",
  "PENDLE / USD", "PENGU / USD", "PEOPLE / USD", "PEPE / USD", "PNUT / USD",
  "POL / USD", "PYTH / USD", "RENDER / USD", "RUNE / USD", "S / USD",
  "SAGA / USD", "SAND / USD", "SEI / USD", "SHIB / USD", "SNX / USD",
  "SOL / USD", "STORJ / USD", "STRK / USD", "STX / USD", "SUI / USD",
  "SUN / USD", "SUSHI / USD", "SYN / USD", "TAO / USD", "THE / USD",
  "THETA / USD", "TIA / USD", "TNSR / USD", "TON / USD", "TRB / USD",
  "TROY / USD", "TRUMP / USD", "TRX / USD", "UNI / USD", "VANRY / USD",
  "VET / USD", "W / USD", "WIF / USD", "WLD / USD", "WOO / USD",
  "XLM / USD", "XRP / USD", "YFI / USD", "ZIL / USD", "ZK / USD",
  "ZRO / USD",
];

export const cryptoPairsUSA = [
  "AAVE/USD", "ADA/USD", "APT/USD", "AR/USD", "ATOM/USD",
  "AVAX/USD", "AXS/USD", "BCH/USD", "BNB/USD", "BTC/USD",
  "COMP/USD", "CRV/USD", "DOT/USD", "ETC/USD", "ETH/USD",
  "GMX/USD", "INJ/USD", "LINK/USD", "LTC/USD", "MKR/USD",
  "SOL/USD", "TIA/USD", "TON/USD", "UNI/USD", "XRP/USD",
  "ZRO/USD",
];

export const faqs: FAQ[] = [
  {
    q: "Posso operar durante notícias?",
    a: "Sim. Notícias são liberadas; apenas gerencie risco e volatilidade.",
  },
  {
    q: "Existe mínimo de dias para passar?",
    a: "Não. Basta atingir o alvo respeitando limites de perda.",
  },
  {
    q: "Quando faço KYC?",
    a: "Somente na conta funded para liberar payouts.",
  },
  {
    q: "Qual o split de payout?",
    a: "Até 90% para o trader, pagos semanalmente.",
  },
];
