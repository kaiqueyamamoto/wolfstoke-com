import { investmentRanges } from "@/app/lib/solucoes/data";

export default function InvestmentSection() {
  return (
    <section id="investimento" className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="badge badge-outline border-secondary/60 bg-secondary/10 text-secondary">
            Modelo de Investimento
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Faixas de <span className="text-accent">Investimento</span>
          </h2>
          <p className="mt-3 text-muted">
            Projetos personalizados para diferentes necessidades e orçamentos.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {investmentRanges.map((range, index) => (
            <div
              key={index}
              className={`card glass h-full border ${
                index === 1 || index === 2
                  ? "border-accent/40 bg-accent/10"
                  : "border-white/10 bg-base-200/30"
              }`}
            >
              <div className="card-body gap-4">
                <div>
                  <h3 className="card-title text-xl mb-1">{range.label}</h3>
                  <p className="text-2xl font-bold text-accent mb-2">{range.range}</p>
                  <p className="text-sm text-muted">{range.description}</p>
                </div>

                <div className="divider my-2" />

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    Exemplos:
                  </h4>
                  <ul className="space-y-1">
                    {range.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-muted">
                        <span className="text-accent mt-1">▸</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 glass rounded-2xl border border-white/10 bg-base-200/30 p-6 md:p-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold">Modelos Disponíveis</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <h4 className="font-semibold text-accent">Projeto Fechado</h4>
                <p className="text-sm text-muted">
                  Escopo definido, preço fixo, pagamento por milestones. Ideal para projetos com requisitos claros.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-accent">Time & Materials</h4>
                <p className="text-sm text-muted">
                  Equipe dedicada, cobrança mensal, flexibilidade total. Ideal para projetos evolutivos.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-accent">Híbrido</h4>
                <p className="text-sm text-muted">
                  MVP com preço fixo, depois T&M para evolução. Melhor dos dois mundos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
