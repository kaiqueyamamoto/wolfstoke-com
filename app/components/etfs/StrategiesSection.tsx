import { strategies, conclusion } from "@/app/lib/etfs/data";

export default function StrategiesSection() {
  return (
    <section id="strategies" className="px-4 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <p className="badge badge-outline border-accent/60 bg-accent/10 text-accent">
            Estratégias
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Estratégias de Alocação Core-Satellite
          </h2>
          <p className="mt-3 text-muted max-w-2xl mx-auto">
            O mercado de ETFs brasileiro atingiu maturidade que permite a
            construção de portfólios globais robustos exclusivamente via B3.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-10">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className={`card glass border ${
                index === 0
                  ? "border-accent/70 bg-accent/10"
                  : "border-white/10 bg-base-200/30"
              }`}
            >
              <div className="card-body gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="card-title text-2xl">{strategy.type}</h3>
                  {strategy.percentage && (
                    <span className="badge badge-accent text-black font-bold">
                      {strategy.percentage}
                    </span>
                  )}
                </div>
                <p className="text-muted">{strategy.description}</p>
                <ul className="space-y-2">
                  {strategy.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-accent">▸</span>
                      <span className="text-muted">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusão */}
        <div className="glass rounded-2xl border border-accent/40 bg-accent/10 p-6 md:p-8">
          <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
            {conclusion}
          </p>
        </div>
      </div>
    </section>
  );
}
