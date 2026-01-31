"use client";

import { useState, useMemo } from "react";
import MarketTicker from "./MarketTicker";
import TradingPairHeader from "./TradingPairHeader";
import MarketList from "./MarketList";
import ChartArea from "./ChartArea";
import OrderBook from "./OrderBook";
import OrderForm from "./OrderForm";
import PositionsOrdersPanel from "./PositionsOrdersPanel";
import { pairs, defaultPair } from "@/app/lib/dashboard/data";

function getPairBySymbol(symbol: string) {
  return pairs.find((p) => p.symbol === symbol) ?? defaultPair;
}

export default function TradingView() {
  const [selectedSymbol, setSelectedSymbol] = useState(defaultPair.symbol);
  const pair = useMemo(() => getPairBySymbol(selectedSymbol), [selectedSymbol]);

  return (
    <div className="flex flex-col h-full min-h-[calc(100vh-4rem)]">
      {/* Ticker strip */}
      <div className="shrink-0">
        <MarketTicker />
      </div>

      {/* Pair header */}
      <div className="shrink-0">
        <TradingPairHeader pair={pair} onSelectPair={setSelectedSymbol} />
      </div>

      {/* Grid principal */}
      <div className="flex-1 flex gap-0 border-t border-[--color-border-subtle] min-h-0">
        {/* Coluna esquerda: lista de pares */}
        <aside className="hidden lg:block shrink-0">
          <MarketList selectedSymbol={selectedSymbol} onSelectPair={setSelectedSymbol} />
        </aside>

        {/* Centro: gráfico */}
        <section className="flex-1 min-w-0 flex flex-col p-6">
          <ChartArea />
        </section>

        {/* Coluna direita: order book + formulário de ordem */}
        <aside className="hidden xl:flex flex-col w-[320px] shrink-0 gap-4 p-6 border-l border-[--color-border-subtle] bg-[--color-surface]">
          <div className="min-h-0 flex-1 overflow-auto">
            <OrderBook />
          </div>
          <div className="shrink-0">
            <OrderForm />
          </div>
        </aside>
      </div>

      {/* Em telas menores: order book e order form */}
      <div className="xl:hidden grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border-t border-[--color-border-subtle]">
        <OrderBook />
        <OrderForm />
      </div>

      {/* Painel Posições / Ordens Abertas / Histórico */}
      <div className="shrink-0 px-6 pb-6">
        <PositionsOrdersPanel />
      </div>
    </div>
  );
}
