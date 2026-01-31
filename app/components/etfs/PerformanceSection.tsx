import { performance } from "@/app/lib/etfs/data";

export default function PerformanceSection() {
  return (
    <section id="performance" className="px-4 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <p className="inline-block px-3 py-1 text-xs font-semibold rounded-full border-accent/60 bg-accent/10 text-accent">
            Performance
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            {performance.title}
          </h2>
          <p className="mt-3 text-muted max-w-2xl mx-auto">
            {performance.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-10">
          {/* Fundos Ativos */}
          <div className="bg-white rounded-2xl border border-[--color-border-subtle] bg-[--color-surface] p-6">
            <h3 className="text-xl font-semibold mb-4">
              {performance.comparison.active.title}
            </h3>
            <ul className="space-y-3 text-muted">
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>{performance.comparison.active.fees}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>{performance.comparison.active.performance}</span>
              </li>
            </ul>
          </div>

          {/* ETFs */}
          <div className="bg-white rounded-2xl border border-accent/50 bg-accent/10 p-6">
            <h3 className="text-xl font-semibold mb-4 text-accent">
              {performance.comparison.passive.title}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>{performance.comparison.passive.fees}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>{performance.comparison.passive.performance}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Custos Ocultos */}
        <div className="bg-white rounded-2xl border border-[--color-border-subtle] bg-[--color-surface] p-6 md:p-8">
          <h3 className="text-2xl font-semibold mb-6">Custos Ocultos e Totais</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {performance.hiddenCosts.map((cost, index) => (
              <div
                key={index}
                className="rounded-xl border border-[--color-border-subtle] bg-base-300/40 p-4"
              >
                <p className="font-semibold mb-2">{cost.name}</p>
                <p className="text-sm text-muted">{cost.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
