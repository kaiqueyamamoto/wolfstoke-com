import { liquidity } from "@/app/lib/etfs/data";

export default function LiquiditySection() {
  return (
    <section className="px-4 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="glass rounded-2xl border border-white/10 bg-base-200/30 p-6 md:p-8">
          <div className="text-center mb-6">
            <p className="badge badge-outline border-secondary/60 bg-secondary/10 text-secondary">
              Liquidez
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              {liquidity.title}
            </h2>
          </div>
          <p className="text-lg text-muted text-center mb-6 max-w-3xl mx-auto">
            {liquidity.description}
          </p>
          <div className="glass rounded-xl border border-accent/30 bg-accent/10 p-6">
            <p className="text-center leading-relaxed">{liquidity.explanation}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
