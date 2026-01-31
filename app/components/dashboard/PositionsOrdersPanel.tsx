"use client";

import { useState } from "react";
import PriceChange from "./PriceChange";
import { mockPositions, mockOrders } from "@/app/lib/dashboard/data";

type Tab = "positions" | "orders" | "history";

export default function PositionsOrdersPanel() {
  const [tab, setTab] = useState<Tab>("positions");

  return (
    <div className="bg-[--color-surface] border border-[--color-border-subtle] rounded-lg overflow-hidden">
      <div className="flex border-b border-[--color-border-subtle]">
        {[
          { id: "positions" as Tab, label: "Posições", count: mockPositions.length },
          { id: "orders" as Tab, label: "Ordens Abertas", count: mockOrders.length },
          { id: "history" as Tab, label: "Histórico", count: 0 },
        ].map(({ id, label, count }) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={`flex-1 py-2.5 px-3 text-xs font-semibold transition-colors ${
              tab === id
                ? "text-[--color-accent-blue] border-b-2 border-[--color-accent-blue] bg-[--color-bg-card]/50"
                : "text-[--color-muted] hover:text-[--color-foreground] border-b border-[--color-border-subtle]"
            }`}
          >
            {label}
            {count > 0 && (
              <span className="ml-1 px-1.5 py-0.5 rounded bg-[--color-accent-blue]/15 text-[--color-accent-blue] text-[0.65rem]">
                {count}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        {tab === "positions" && (
          <table className="w-full data-table-professional text-left">
            <thead className="bg-[--color-bg-card]">
              <tr>
                <th className="px-3 py-2 text-[0.65rem] font-semibold text-[--color-muted] uppercase">Par</th>
                <th className="px-3 py-2 text-[0.65rem] font-semibold text-[--color-muted] uppercase">Lado</th>
                <th className="px-3 py-2 text-[0.65rem] font-semibold text-[--color-muted] uppercase text-right">Tamanho</th>
                <th className="px-3 py-2 text-[0.65rem] font-semibold text-[--color-muted] uppercase text-right">Preço Entrada</th>
                <th className="px-3 py-2 text-[0.65rem] font-semibold text-[--color-muted] uppercase text-right">Mark</th>
                <th className="px-3 py-2 text-[0.65rem] font-semibold text-[--color-muted] uppercase text-right">PnL</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[--color-border-subtle]">
              {mockPositions.map((pos) => (
                <tr key={pos.id} className="hover:bg-[--color-bg-card] transition-colors">
                  <td className="px-3 py-2 text-xs font-semibold text-[--color-foreground]">{pos.symbol}</td>
                  <td className="px-3 py-2">
                    <span className={`text-xs font-medium ${pos.side === "long" ? "text-[--color-price-up]" : "text-[--color-price-down]"}`}>
                      {pos.side === "long" ? "Long" : "Short"}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-xs font-mono text-right text-[--color-foreground]">{pos.size}</td>
                  <td className="px-3 py-2 text-xs font-mono text-right text-[--color-foreground]">
                    ${pos.entryPrice.toLocaleString("en-US", { maximumFractionDigits: 2 })}
                  </td>
                  <td className="px-3 py-2 text-xs font-mono text-right text-[--color-foreground]">
                    ${pos.markPrice.toLocaleString("en-US", { maximumFractionDigits: 2 })}
                  </td>
                  <td className="px-3 py-2 text-right">
                    <PriceChange value={pos.pnlPct} size="sm" />
                    <span className="block text-[0.65rem] font-mono text-[--color-muted]">
                      ${pos.pnl.toFixed(2)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {tab === "orders" && (
          <table className="w-full data-table-professional text-left">
            <thead className="bg-[--color-bg-card]">
              <tr>
                <th className="px-3 py-2 text-[0.65rem] font-semibold text-[--color-muted] uppercase">Par</th>
                <th className="px-3 py-2 text-[0.65rem] font-semibold text-[--color-muted] uppercase">Tipo</th>
                <th className="px-3 py-2 text-[0.65rem] font-semibold text-[--color-muted] uppercase text-right">Preço</th>
                <th className="px-3 py-2 text-[0.65rem] font-semibold text-[--color-muted] uppercase text-right">Quantidade</th>
                <th className="px-3 py-2 text-[0.65rem] font-semibold text-[--color-muted] uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[--color-border-subtle]">
              {mockOrders.map((o) => (
                <tr key={o.id} className="hover:bg-[--color-bg-card] transition-colors">
                  <td className="px-3 py-2 text-xs font-semibold text-[--color-foreground]">{o.symbol}</td>
                  <td className="px-3 py-2">
                    <span className={`text-xs font-medium ${o.side === "buy" ? "text-[--color-price-up]" : "text-[--color-price-down]"}`}>
                      {o.side === "buy" ? "Comprar" : "Vender"}
                    </span>
                    <span className="text-[0.65rem] text-[--color-muted] ml-1">{o.type === "limit" ? "Limit" : "Market"}</span>
                  </td>
                  <td className="px-3 py-2 text-xs font-mono text-right text-[--color-foreground]">
                    {o.price != null ? `$${o.price.toLocaleString()}` : "—"}
                  </td>
                  <td className="px-3 py-2 text-xs font-mono text-right text-[--color-foreground]">{o.amount}</td>
                  <td className="px-3 py-2">
                    <span className="text-xs text-[--color-status-warning]">Aberta</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {tab === "history" && (
          <div className="py-8 text-center text-sm text-[--color-muted]">
            Nenhuma ordem no histórico
          </div>
        )}
      </div>
    </div>
  );
}
