"use client";

import { useState } from "react";
import PriceChange from "./PriceChange";
import type { PairSummary } from "@/app/lib/dashboard/data";

interface TradingPairHeaderProps {
  pair: PairSummary;
  onSelectPair?: (symbol: string) => void;
}

function formatVolume(vol: number) {
  if (vol >= 1e9) return `${(vol / 1e9).toFixed(2)}B`;
  if (vol >= 1e6) return `${(vol / 1e6).toFixed(1)}M`;
  if (vol >= 1e3) return `${(vol / 1e3).toFixed(0)}K`;
  return vol.toFixed(0);
}

export default function TradingPairHeader({ pair, onSelectPair }: TradingPairHeaderProps) {
  const [showPairDropdown, setShowPairDropdown] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-6 md:gap-8 py-5 px-6 bg-[--color-surface] border-b border-[--color-border-subtle]">
      {/* Pair selector */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setShowPairDropdown(!showPairDropdown)}
          className="flex items-center gap-2 py-2 px-4 rounded bg-[--color-bg-card] border border-[--color-border-subtle]
                     hover:border-[--color-border-strong] transition-colors text-[--color-foreground] font-bold text-base"
        >
          <span>{pair.symbol}</span>
          <svg className="w-4 h-4 text-[--color-muted]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {showPairDropdown && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setShowPairDropdown(false)} aria-hidden />
            <div className="absolute left-0 top-full mt-2 z-20 w-52 py-2 bg-[--color-surface] border border-[--color-border-subtle] rounded shadow-xl">
              {["BTC/USDT", "ETH/USDT", "BNB/USDT", "SOL/USDT"].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    onSelectPair?.(s);
                    setShowPairDropdown(false);
                  }}
                  className="w-full text-left px-4 py-2.5 text-sm font-medium hover:bg-[--color-bg-card] text-[--color-foreground] transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Price & change */}
      <div className="flex items-baseline gap-4">
        <span className="text-2xl md:text-3xl font-bold font-mono text-[--color-foreground]">
          ${pair.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </span>
        <PriceChange value={pair.change24h} size="md" />
      </div>

      {/* Stats row */}
      <div className="flex flex-wrap items-center gap-6 md:gap-8 text-sm text-[--color-muted]">
        <div>
          <span className="text-[--color-muted] mr-2">Alta 24h:</span>
          <span className="text-[--color-price-up] font-mono font-medium">${pair.high24h.toLocaleString("en-US", { maximumFractionDigits: 2 })}</span>
        </div>
        <div>
          <span className="text-[--color-muted] mr-2">Baixa 24h:</span>
          <span className="text-[--color-price-down] font-mono font-medium">${pair.low24h.toLocaleString("en-US", { maximumFractionDigits: 2 })}</span>
        </div>
        <div>
          <span className="text-[--color-muted] mr-2">Vol 24h:</span>
          <span className="font-mono text-[--color-foreground] font-medium">${formatVolume(pair.volume24h)}</span>
        </div>
      </div>

      {/* Timeframe tabs */}
      <div className="hidden md:flex items-center gap-1 ml-auto">
        {["1m", "5m", "15m", "1H", "4H", "1D", "1W"].map((tf) => (
          <button
            key={tf}
            type="button"
            className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${
              tf === "1H"
                ? "bg-[--color-accent-blue] text-white"
                : "text-[--color-muted] hover:text-white hover:bg-[--color-bg-card]"
            }`}
          >
            {tf}
          </button>
        ))}
      </div>
    </div>
  );
}
