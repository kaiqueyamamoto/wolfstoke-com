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
  "AAVE / USDT", "ACT / USDT", "ADA / USDT", "AEVO / USDT", "AIXBT / USDT",
  "ALGO / USDT", "ANIME / USDT", "APE / USDT", "APT / USDT", "AR / USDT",
  "ARB / USDT", "ARK / USDT", "ARKM / USDT", "ATOM / USDT", "AVAX / USDT",
  "AXS / USDT", "BCH / USDT", "BLUR / USDT", "BNB / USDT", "BOME / USDT",
  "BTC / USDT", "CFX / USDT", "COMP / USDT", "COOKIE / USDT", "CRV / USDT",
  "DOGE / USDT", "DOGS / USDT", "DOT / USDT", "DYDX / USDT", "DYM / USDT",
  "EIGEN / USDT", "ENA / USDT", "ENS / USDT", "ETC / USDT", "ETH / USDT",
  "ETHFI / USDT", "FIL / USDT", "FLOKI / USDT", "FXS / USDT", "GALA / USDT",
  "GMT / USDT", "GMX / USDT", "HBAR / USDT", "ICP / USDT", "ID / USDT",
  "INJ / USDT", "JASMY / USDT", "JTO / USDT", "JUP / USDT", "KNC / USDT",
  "LDO / USDT", "LEVER / USDT", "LINK / USDT", "LTC / USDT", "MAGIC / USDT",
  "ME / USDT", "MKR / USDT", "MOVE / USDT", "NEAR / USDT", "NEIRO / USDT",
  "NOT / USDT", "OM / USDT", "OMNI / USDT", "OP / USDT", "ORDI / USDT",
  "PENDLE / USDT", "PENGU / USDT", "PEOPLE / USDT", "PEPE / USDT", "PNUT / USDT",
  "POL / USDT", "PYTH / USDT", "RENDER / USDT", "RUNE / USDT", "S / USDT",
  "SAGA / USDT", "SAND / USDT", "SEI / USDT", "SHIB / USDT", "SNX / USDT",
  "SOL / USDT", "STORJ / USDT", "STRK / USDT", "STX / USDT", "SUI / USDT",
  "SUN / USDT", "SUSHI / USDT", "SYN / USDT", "TAO / USDT", "THE / USDT",
  "THETA / USDT", "TIA / USDT", "TNSR / USDT", "TON / USDT", "TRB / USDT",
  "TROY / USDT", "TRUMP / USDT", "TRX / USDT", "UNI / USDT", "VANRY / USDT",
  "VET / USDT", "W / USDT", "WIF / USDT", "WLD / USDT", "WOO / USDT",
  "XLM / USDT", "XRP / USDT", "YFI / USDT", "ZIL / USDT", "ZK / USDT",
  "ZRO / USDT",
];

export const cryptoPairsUSA = [
  "AAVE/USDT", "ADA/USDT", "APT/USDT", "AR/USDT", "ATOM/USDT",
  "AVAX/USDT", "AXS/USDT", "BCH/USDT", "BNB/USDT", "BTC/USDT",
  "COMP/USDT", "CRV/USDT", "DOT/USDT", "ETC/USDT", "ETH/USDT",
  "GMX/USDT", "INJ/USDT", "LINK/USDT", "LTC/USDT", "MKR/USDT",
  "SOL/USDT", "TIA/USDT", "TON/USDT", "UNI/USDT", "XRP/USDT",
  "ZRO/USDT",
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
