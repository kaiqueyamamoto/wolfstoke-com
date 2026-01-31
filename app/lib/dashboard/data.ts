export interface PairSummary {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  high24h: number;
  low24h: number;
  volume24h: number;
  quote?: string;
}

export interface OrderBookLevel {
  price: number;
  amount: number;
  total?: number;
}

export interface Position {
  id: string;
  symbol: string;
  side: "long" | "short";
  size: number;
  entryPrice: number;
  markPrice: number;
  liqPrice: number | null;
  margin: number;
  pnl: number;
  pnlPct: number;
}

export interface Order {
  id: string;
  symbol: string;
  side: "buy" | "sell";
  type: "market" | "limit";
  price?: number;
  amount: number;
  filled: number;
  status: "open" | "filled" | "cancelled" | "partial";
  createdAt: string;
}

export const defaultPair: PairSummary = {
  symbol: "BTC/USDT",
  name: "Bitcoin",
  price: 97420.5,
  change24h: 2.35,
  high24h: 98200,
  low24h: 95100,
  volume24h: 28_500_000_000,
  quote: "USDT",
};

export const pairs: PairSummary[] = [
  { ...defaultPair },
  { symbol: "ETH/USDT", name: "Ethereum", price: 3520.75, change24h: -1.2, high24h: 3580, low24h: 3480, volume24h: 15_200_000_000 },
  { symbol: "BNB/USDT", name: "BNB", price: 585.2, change24h: 0.8, high24h: 592, low24h: 578, volume24h: 1_200_000_000 },
  { symbol: "SOL/USDT", name: "Solana", price: 228.4, change24h: 5.1, high24h: 235, low24h: 218, volume24h: 3_500_000_000 },
  { symbol: "XRP/USDT", name: "XRP", price: 2.42, change24h: -0.5, high24h: 2.48, low24h: 2.38, volume24h: 2_100_000_000 },
  { symbol: "DOGE/USDT", name: "Dogecoin", price: 0.385, change24h: 3.2, high24h: 0.392, low24h: 0.368, volume24h: 1_800_000_000 },
  { symbol: "ADA/USDT", name: "Cardano", price: 0.58, change24h: 1.1, high24h: 0.59, low24h: 0.56, volume24h: 450_000_000 },
  { symbol: "AVAX/USDT", name: "Avalanche", price: 35.2, change24h: -2.0, high24h: 36.1, low24h: 34.5, volume24h: 520_000_000 },
];

const sellLevels: OrderBookLevel[] = [
  { price: 97450, amount: 1.25 },
  { price: 97440, amount: 2.1 },
  { price: 97430, amount: 0.85 },
  { price: 97420, amount: 3.5 },
  { price: 97410, amount: 1.8 },
  { price: 97400, amount: 4.2 },
  { price: 97390, amount: 2.0 },
  { price: 97380, amount: 1.5 },
  { price: 97370, amount: 0.9 },
  { price: 97360, amount: 3.1 },
];

const buyLevels: OrderBookLevel[] = [
  { price: 97420, amount: 2.2 },
  { price: 97410, amount: 1.5 },
  { price: 97400, amount: 3.8 },
  { price: 97390, amount: 0.7 },
  { price: 97380, amount: 2.4 },
  { price: 97370, amount: 1.1 },
  { price: 97360, amount: 4.0 },
  { price: 97350, amount: 1.9 },
  { price: 97340, amount: 0.6 },
  { price: 97330, amount: 2.8 },
];

export const orderBookSells = sellLevels;
export const orderBookBuys = buyLevels;

export const mockPositions: Position[] = [
  { id: "1", symbol: "BTC/USDT", side: "long", size: 0.05, entryPrice: 96500, markPrice: 97420.5, liqPrice: null, margin: 4825, pnl: 46.03, pnlPct: 0.95 },
  { id: "2", symbol: "ETH/USDT", side: "short", size: 1.0, entryPrice: 3550, markPrice: 3520.75, liqPrice: 3850, margin: 710, pnl: 29.25, pnlPct: 0.82 },
];

export const mockOrders: Order[] = [
  { id: "o1", symbol: "BTC/USDT", side: "buy", type: "limit", price: 97000, amount: 0.02, filled: 0, status: "open", createdAt: "2025-01-31T10:00:00Z" },
  { id: "o2", symbol: "SOL/USDT", side: "sell", type: "market", amount: 10, filled: 0, status: "open", createdAt: "2025-01-31T10:05:00Z" },
];
