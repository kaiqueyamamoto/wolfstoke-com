import { nextSteps } from "@/app/lib/solucoes/data";

export default function NextStepsSection() {
  return (
    <section id="proximos-passos" className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="inline-block px-3 py-1 text-xs font-semibold rounded-full border-accent/60 bg-accent/10 text-accent">
            Próximos Passos
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Como <span className="text-accent">Começar</span>
          </h2>
          <p className="mt-3 text-muted">
            Processo simples e transparente para iniciar seu projeto.
          </p>
        </div>

        <div className="space-y-6">
          {nextSteps.map((step, index) => (
            <div
              key={index}
              className="card bg-white border border-[--color-border-subtle] bg-[--color-surface]"
            >
              <div className="p-6 gap-4">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-4">
                    <div className="badge badge-accent badge-lg text-black font-bold">
                      {step.step.split(".")[0]}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-xl">{step.step}</h3>
                      <div className="inline-block px-3 py-1 text-xs font-semibold rounded-full badge-sm mt-1">
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-muted">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg border border-accent/40 bg-accent/10 p-6 md:p-8 text-center">
          <p className="text-lg font-semibold mb-2">
            Pronto para começar seu projeto?
          </p>
          <p className="text-muted mb-4">
            Entre em contato e vamos transformar sua ideia em realidade.
          </p>
          <a href="#contato" className="px-6 py-3 bg-[--color-accent] rounded font-semibold hover:bg-[--color-secondary] transition-colors text-black">
            Agendar Discovery Call Gratuito
          </a>
        </div>
      </div>
    </section>
  );
}
