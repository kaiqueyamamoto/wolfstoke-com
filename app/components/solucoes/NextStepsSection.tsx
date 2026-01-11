import { nextSteps } from "@/app/lib/solucoes/data";

export default function NextStepsSection() {
  return (
    <section id="proximos-passos" className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="badge badge-outline border-accent/60 bg-accent/10 text-accent">
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
              className="card glass border border-white/10 bg-base-200/30"
            >
              <div className="card-body gap-4">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-4">
                    <div className="badge badge-accent badge-lg text-black font-bold">
                      {step.step.split(".")[0]}
                    </div>
                    <div>
                      <h3 className="card-title text-xl">{step.step}</h3>
                      <div className="badge badge-outline badge-sm mt-1">
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

        <div className="mt-12 glass rounded-2xl border border-accent/40 bg-accent/10 p-6 md:p-8 text-center">
          <p className="text-lg font-semibold mb-2">
            Pronto para começar seu projeto?
          </p>
          <p className="text-muted mb-4">
            Entre em contato e vamos transformar sua ideia em realidade.
          </p>
          <a href="#contato" className="btn btn-accent text-black">
            Agendar Discovery Call Gratuito
          </a>
        </div>
      </div>
    </section>
  );
}
