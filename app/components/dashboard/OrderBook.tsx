"use client";

import type { OrderBookLevel } from "@/app/lib/dashboard/data";
import { orderBookSells, orderBookBuys } from "@/app/lib/dashboard/data";

const maxAmount = Math.max(
  ...orderBookSells.map((l) => l.amount),
  ...orderBookBuys.map((l) => l.amount)
);

function Row({
  price,
  amount,
  side,
}: OrderBookLevel & { side: "buy" | "sell" }) {
  const pct = (amount / maxAmount) * 100;
  return (
    <div className="relative grid grid-cols-3 gap-2 py-0.5 text-xs font-mono group">
      <div
        className={`absolute inset-0 opacity-20 ${
          side === "buy" ? "bg-[--color-price-up]" : "bg-[--color-price-down]"
        }`}
        style={{ width: `${Math.min(pct, 100)}%`, right: side === "sell" ? 0 : undefined, left: side === "buy" ? 0 : undefined }}
      />
      <span className={`relative z-10 ${side === "buy" ? "text-[--color-price-up]" : "text-[--color-price-down]"}`}>
        {price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </span>
      <span className="relative z-10 text-right text-[--color-foreground]">
        {amount.toLocaleString("en-US", { maximumFractionDigits: 4 })}
      </span>
      <span className="relative z-10 text-right text-[--color-muted]">
        {(amount * price).toLocaleString("en-US", { maximumFractionDigits: 0 })}
      </span>
    </div>
  );
}

export default function OrderBook() {
  const sells = [...orderBookSells].reverse();
  const buys = [...orderBookBuys].reverse();

  return (
    <div className="bg-[--color-surface] border border-[--color-border-subtle] rounded overflow-hidden">
      <div className="px-4 py-3 border-b border-[--color-border-subtle] flex items-center justify-between">
        <h3 className="text-sm font-bold text-[--color-foreground]">Livro de ofertas</h3>
        <span className="text-xs text-[--color-muted]">Spread: 0.01%</span>
      </div>
      <div className="grid grid-cols-3 gap-3 px-4 py-2 text-xs font-bold text-[--color-muted] uppercase tracking-wider">
        <span>Preço(USDT)</span>
        <span className="text-right">Quantidade</span>
        <span className="text-right">Total</span>
      </div>
      <div className="px-4 pb-3 max-h-[280px] overflow-y-auto scrollbar-thin">
        {sells.map((level, i) => (
          <Row key={`s-${i}`} {...level} side="sell" />
        ))}
        <div className="py-2 my-1 border-y border-[--color-border-subtle] text-center">
          <span className="text-base font-bold text-[--color-foreground]">97,420.50</span>
          <span className="text-xs text-[--color-muted] ml-2">Último preço</span>
        </div>
        {buys.map((level, i) => (
          <Row key={`b-${i}`} {...level} side="buy" />
        ))}
      </div>
    </div>
  );
}
