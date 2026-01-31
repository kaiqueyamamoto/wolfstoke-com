"use client";

import { useState } from "react";

const TIMEFRAMES = ["1m", "5m", "15m", "1H", "4H", "1D", "1W"];

export default function ChartArea() {
  const [timeframe, setTimeframe] = useState("1H");

  return (
    <div className="flex flex-col h-full min-h-[400px] bg-[--color-surface] border border-[--color-border-subtle] rounded overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[--color-border-subtle] shrink-0">
        <div className="flex gap-1">
          {TIMEFRAMES.map((tf) => (
            <button
              key={tf}
              type="button"
              onClick={() => setTimeframe(tf)}
              className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${
                timeframe === tf
                  ? "bg-[--color-accent-blue] text-white"
                  : "text-[--color-muted] hover:text-white hover:bg-[--color-bg-card]"
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="p-2 rounded hover:bg-[--color-bg-card] text-[--color-muted] hover:text-white transition-colors"
            title="Indicadores"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
          </button>
          <button
            type="button"
            className="p-2 rounded hover:bg-[--color-bg-card] text-[--color-muted] hover:text-white transition-colors"
            title="Fullscreen"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </button>
        </div>
      </div>

      {/* Chart placeholder */}
      <div className="flex-1 flex items-center justify-center bg-[--color-bg-card] min-h-[320px]">
        <div className="text-center px-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[--color-surface] border border-[--color-border-subtle] mb-4">
            <svg className="w-10 h-10 text-[--color-muted]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
          </div>
          <p className="text-base font-semibold text-[--color-foreground] mb-2">Gráfico de velas</p>
          <p className="text-sm text-[--color-muted] max-w-[280px]">
            Integração com TradingView ou biblioteca de charts em desenvolvimento
          </p>
        </div>
      </div>
    </div>
  );
}
