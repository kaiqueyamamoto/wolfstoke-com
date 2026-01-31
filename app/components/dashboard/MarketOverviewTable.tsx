"use client";

import { useState, useEffect } from "react";
import PriceChange from "./PriceChange";
import StatusBadge from "./StatusBadge";

interface MarketItem {
  id: string;
  symbol: string;
  name: string;
  type: 'crypto' | 'stock' | 'forex' | 'etf';
  price: number;
  change24h: number;
  volume24h: number;
  isTrending?: boolean;
}

const mockData: MarketItem[] = [
  { id: '1', symbol: 'BTC/USDT', name: 'Bitcoin', type: 'crypto', price: 42150.50, change24h: 2.35, volume24h: 28500000000, isTrending: true },
  { id: '2', symbol: 'ETH/USDT', name: 'Ethereum', type: 'crypto', price: 2250.75, change24h: -1.20, volume24h: 15200000000, isTrending: true },
  { id: '3', symbol: 'BOVA11', name: 'ETF Ibovespa', type: 'etf', price: 125.30, change24h: 1.20, volume24h: 145000000 },
  { id: '4', symbol: 'PETR4', name: 'Petrobras PN', type: 'stock', price: 38.42, change24h: -0.85, volume24h: 892000000 },
  { id: '5', symbol: 'VALE3', name: 'Vale ON', type: 'stock', price: 67.20, change24h: 1.45, volume24h: 743000000 },
];

export default function MarketOverviewTable() {
  const [data, setData] = useState(mockData);

  // Simular atualizações em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((item) => ({
          ...item,
          price: item.price * (1 + (Math.random() - 0.5) * 0.003),
          change24h: item.change24h + (Math.random() - 0.5) * 0.15,
        }))
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const formatVolume = (vol: number) => {
    if (vol >= 1e9) return `R$ ${(vol / 1e9).toFixed(2)}B`;
    if (vol >= 1e6) return `R$ ${(vol / 1e6).toFixed(1)}M`;
    if (vol >= 1e3) return `R$ ${(vol / 1e3).toFixed(0)}k`;
    return `R$ ${vol.toFixed(0)}`;
  };

  const getTypeColor = (type: string) => {
    const colors = {
      crypto: 'bg-yellow-500/10 text-yellow-500',
      stock: 'bg-blue-500/10 text-blue-500',
      forex: 'bg-green-500/10 text-green-500',
      etf: 'bg-purple-500/10 text-purple-500',
    };
    return colors[type as keyof typeof colors] || colors.stock;
  };

  return (
    <div className="bg-[--color-surface] border border-[--color-border-subtle] rounded-lg overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-[--color-border-subtle] flex items-center justify-between">
        <h3 className="text-sm font-semibold text-[--color-foreground]">Mercados em Destaque</h3>
        <button className="text-xs text-[--color-accent-blue] hover:underline font-medium">
          Ver Todos →
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full data-table-professional">
          <thead className="bg-[--color-bg-card]">
            <tr>
              <th className="px-4 py-2.5 text-left text-[0.65rem] font-semibold text-[--color-muted] uppercase tracking-wider">
                Ativo
              </th>
              <th className="px-4 py-2.5 text-right text-[0.65rem] font-semibold text-[--color-muted] uppercase tracking-wider">
                Preço
              </th>
              <th className="px-4 py-2.5 text-right text-[0.65rem] font-semibold text-[--color-muted] uppercase tracking-wider">
                24h
              </th>
              <th className="px-4 py-2.5 text-right text-[0.65rem] font-semibold text-[--color-muted] uppercase tracking-wider">
                Volume 24h
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[--color-border-subtle]">
            {data.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[--color-bg-card] transition-colors cursor-pointer group"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="text-[0.8125rem] font-semibold text-[--color-foreground]">
                          {item.symbol}
                        </span>
                        {item.isTrending && (
                          <StatusBadge variant="trending" size="sm">
                            🔥
                          </StatusBadge>
                        )}
                      </div>
                      <span className="text-[0.6875rem] text-[--color-muted]">{item.name}</span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-right">
                  <span className="text-[0.8125rem] font-semibold num text-[--color-foreground]">
                    {item.type === 'crypto'
                      ? `$${item.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                      : `R$ ${item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                    }
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <PriceChange value={item.change24h} size="sm" />
                </td>
                <td className="px-4 py-3 text-right">
                  <span className="text-[0.75rem] num text-[--color-muted]">
                    {formatVolume(item.volume24h)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
