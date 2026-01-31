"use client";

import { useEffect, useState } from "react";
import PriceChange from "./PriceChange";

interface TickerItem {
  symbol: string;
  name: string;
  price: number;
  change: number;
}

const mockTickers: TickerItem[] = [
  { symbol: "BTC/USD", name: "Bitcoin", price: 42150.50, change: 2.35 },
  { symbol: "ETH/USD", name: "Ethereum", price: 2250.75, change: -1.20 },
  { symbol: "IBOV", name: "Ibovespa", price: 127845, change: 0.45 },
  { symbol: "USD/BRL", name: "Dólar", price: 4.9320, change: -0.15 },
  { symbol: "EUR/BRL", name: "Euro", price: 5.3520, change: 0.28 },
  { symbol: "BOVA11", name: "ETF Ibovespa", price: 125.30, change: 0.42 },
];

export default function MarketTicker() {
  const [tickers, setTickers] = useState(mockTickers);

  // Simular atualização em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setTickers((prev) =>
        prev.map((ticker) => ({
          ...ticker,
          price: ticker.price * (1 + (Math.random() - 0.5) * 0.002),
          change: ticker.change + (Math.random() - 0.5) * 0.1,
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[--color-surface] border-b border-[--color-border-subtle] overflow-hidden">
      <div className="flex overflow-x-auto scrollbar-thin py-3 px-6 gap-8">
        {tickers.map((ticker) => (
          <div
            key={ticker.symbol}
            className="flex items-center gap-4 min-w-fit group cursor-pointer
                     hover:bg-[--color-bg-card] px-4 py-2 rounded transition-colors"
          >
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white leading-none">
                {ticker.symbol}
              </span>
              <span className="text-xs text-[--color-muted] leading-none mt-1">
                {ticker.name}
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm font-bold num text-white leading-none">
                {ticker.price.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: ticker.symbol.includes('BTC') || ticker.symbol.includes('ETH') ? 2 : 4,
                })}
              </span>
              <div className="mt-1">
                <PriceChange value={ticker.change} size="sm" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
