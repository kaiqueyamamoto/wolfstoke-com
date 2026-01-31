import { liquidity } from "@/app/lib/etfs/data";

export default function LiquiditySection() {
  return (
    <section className="px-4 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="bg-white rounded-2xl border border-[--color-border-subtle] bg-[--color-surface] p-6 md:p-8">
          <div className="text-center mb-6">
            <p className="inline-block px-3 py-1 text-xs font-semibold rounded-full border-secondary/60 bg-secondary/10 text-secondary">
              Liquidez
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              {liquidity.title}
            </h2>
          </div>
          <p className="text-lg text-muted text-center mb-6 max-w-3xl mx-auto">
            {liquidity.description}
          </p>
          <div className="bg-white rounded-xl border border-accent/30 bg-accent/10 p-6">
            <p className="text-center leading-relaxed">{liquidity.explanation}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
