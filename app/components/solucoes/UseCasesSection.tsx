import { useCases } from "@/app/lib/solucoes/data";

export default function UseCasesSection() {
  return (
    <section id="casos-de-uso" className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="badge badge-outline border-secondary/60 bg-secondary/10 text-secondary">
            Cases de Uso
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Soluções por <span className="text-accent">Tipo de Cliente</span>
          </h2>
          <p className="mt-3 text-muted">
            Entenda como diferentes players do mercado se beneficiam de soluções personalizadas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="card glass border border-white/10 bg-base-200/30"
            >
              <div className="card-body gap-4">
                <div>
                  <div className="badge badge-accent text-black mb-3">
                    {useCase.client}
                  </div>
                  <h3 className="card-title text-xl mb-3">Desafio</h3>
                  <p className="text-muted">{useCase.challenge}</p>
                </div>

                <div className="divider my-2" />

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Solução</h4>
                  <p className="text-sm text-muted mb-4">{useCase.solution}</p>

                  <h4 className="font-semibold text-accent mb-2">ROI Mensurável</h4>
                  <ul className="space-y-2">
                    {useCase.roi.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted">
                        <span className="text-accent mt-1">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
