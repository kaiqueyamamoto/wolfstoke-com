"use client";

import { useState } from "react";

type OrderType = "market" | "limit";

export default function OrderForm() {
  const [side, setSide] = useState<"buy" | "sell">("buy");
  const [orderType, setOrderType] = useState<OrderType>("limit");
  const [price, setPrice] = useState("97420");
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState("");

  return (
    <div className="bg-[--color-surface] border border-[--color-border-subtle] rounded overflow-hidden">
      {/* Buy / Sell tabs */}
      <div className="grid grid-cols-2">
        <button
          type="button"
          onClick={() => setSide("buy")}
          className={`py-3 text-sm font-bold transition-colors ${
            side === "buy"
              ? "bg-[--color-price-up]/20 text-[--color-price-up] border-b-2 border-[--color-price-up]"
              : "text-[--color-muted] hover:text-white border-b border-[--color-border-subtle]"
          }`}
        >
          Comprar
        </button>
        <button
          type="button"
          onClick={() => setSide("sell")}
          className={`py-3 text-sm font-bold transition-colors ${
            side === "sell"
              ? "bg-[--color-price-down]/20 text-[--color-price-down] border-b-2 border-[--color-price-down]"
              : "text-[--color-muted] hover:text-white border-b border-[--color-border-subtle]"
          }`}
        >
          Vender
        </button>
      </div>

      {/* Market / Limit */}
      <div className="flex gap-2 p-3 border-b border-[--color-border-subtle]">
        <button
          type="button"
          onClick={() => setOrderType("market")}
          className={`flex-1 py-2 text-sm font-medium rounded transition-colors ${
            orderType === "market"
              ? "bg-[--color-bg-card] text-white"
              : "text-[--color-muted] hover:text-white"
          }`}
        >
          Mercado
        </button>
        <button
          type="button"
          onClick={() => setOrderType("limit")}
          className={`flex-1 py-2 text-sm font-medium rounded transition-colors ${
            orderType === "limit"
              ? "bg-[--color-bg-card] text-white"
              : "text-[--color-muted] hover:text-white"
          }`}
        >
          Limitada
        </button>
      </div>

      <div className="p-4 space-y-4">
        {orderType === "limit" && (
          <div>
            <label className="block text-xs font-bold text-[--color-muted] uppercase tracking-wider mb-2">
              Preço (USDT)
            </label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full py-2.5 px-3 bg-[--color-background] border border-[--color-border-subtle] rounded
                       text-sm font-mono text-white focus:outline-none focus:border-[--color-accent-blue] transition-colors"
            />
          </div>
        )}
        <div>
          <label className="block text-xs font-bold text-[--color-muted] uppercase tracking-wider mb-2">
            Quantidade
          </label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="w-full py-2.5 px-3 bg-[--color-background] border border-[--color-border-subtle] rounded
                     text-sm font-mono text-white placeholder:text-[--color-muted]
                     focus:outline-none focus:border-[--color-accent-blue] transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[--color-muted] uppercase tracking-wider mb-2">
            Total
          </label>
          <input
            type="text"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            placeholder="0.00"
            className="w-full py-2.5 px-3 bg-[--color-background] border border-[--color-border-subtle] rounded
                     text-sm font-mono text-white placeholder:text-[--color-muted]
                     focus:outline-none focus:border-[--color-accent-blue] transition-colors"
          />
        </div>

        <button
          type="button"
          className={`w-full py-3.5 rounded text-sm font-bold transition-opacity hover:opacity-90 ${
            side === "buy"
              ? "bg-[--color-price-up] text-black"
              : "bg-[--color-price-down] text-white"
          }`}
        >
          {side === "buy" ? "Comprar BTC" : "Vender BTC"}
        </button>

        <p className="text-xs text-[--color-muted] text-center pt-1">
          Saldo disponível: 0.00 USDT
        </p>
      </div>
    </div>
  );
}
