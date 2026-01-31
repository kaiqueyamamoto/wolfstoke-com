"use client";

import { useState, useMemo } from "react";
import PriceChange from "./PriceChange";
import SearchInput from "./SearchInput";
import { pairs } from "@/app/lib/dashboard/data";

interface MarketListProps {
  selectedSymbol: string;
  onSelectPair: (symbol: string) => void;
}

export default function MarketList({ selectedSymbol, onSelectPair }: MarketListProps) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return pairs;
    return pairs.filter(
      (p) => p.symbol.toLowerCase().includes(q) || p.name.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <div className="h-full flex flex-col bg-[--color-surface] border-r border-[--color-border-subtle] min-w-[200px] max-w-[260px]">
      <div className="p-2 border-b border-[--color-border-subtle] shrink-0">
        <SearchInput
          placeholder="Buscar par..."
          onSearch={setSearch}
          className="text-xs"
        />
      </div>
      <div className="flex-1 overflow-y-auto scrollbar-thin">
        <table className="w-full text-left">
          <thead className="sticky top-0 bg-[--color-surface] z-10">
            <tr>
              <th className="px-2 py-1.5 text-[0.65rem] font-semibold text-[--color-muted] uppercase tracking-wider">
                Par
              </th>
              <th className="px-2 py-1.5 text-[0.65rem] font-semibold text-[--color-muted] uppercase tracking-wider text-right">
                Preço
              </th>
              <th className="px-2 py-1.5 text-[0.65rem] font-semibold text-[--color-muted] uppercase tracking-wider text-right w-14">
                24h
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => {
              const isSelected = p.symbol === selectedSymbol;
              return (
                <tr
                  key={p.symbol}
                  onClick={() => onSelectPair(p.symbol)}
                  className={`
                    border-b border-[--color-border-subtle]/50 cursor-pointer transition-colors
                    ${isSelected ? "bg-[--color-accent-blue]/15" : "hover:bg-[--color-bg-card]"}
                  `}
                >
                  <td className="px-2 py-1.5">
                    <span className={`text-[0.8125rem] font-medium ${isSelected ? "text-[--color-accent-blue]" : "text-[--color-foreground]"}`}>
                      {p.symbol.replace("/USDT", "")}
                    </span>
                  </td>
                  <td className="px-2 py-1.5 text-right">
                    <span className="text-[0.75rem] font-mono text-[--color-foreground]">
                      ${p.price < 1 ? p.price.toFixed(4) : p.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </td>
                  <td className="px-2 py-1.5 text-right">
                    <PriceChange value={p.change24h} size="sm" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
