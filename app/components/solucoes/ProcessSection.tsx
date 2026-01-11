import { processPhases } from "@/app/lib/solucoes/data";

export default function ProcessSection() {
  return (
    <section id="processo" className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="badge badge-outline border-secondary/60 bg-secondary/10 text-secondary">
            Nosso Processo
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Metodologia Ágil <span className="text-accent">Adaptada para Fintech</span>
          </h2>
          <p className="mt-3 text-muted">
            Desenvolvimento estruturado em fases claras, com entregas incrementais e comunicação constante.
          </p>
        </div>

        <div className="space-y-6">
          {processPhases.map((phase, index) => (
            <div
              key={index}
              className="card glass border border-white/10 bg-base-200/30"
            >
              <div className="card-body gap-4">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="badge badge-accent text-black font-bold">
                        Fase {index + 1}
                      </div>
                      <h3 className="card-title text-2xl">{phase.title}</h3>
                      <div className="badge badge-outline">{phase.duration}</div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="text-accent">▸</span> Principais Atividades
                    </h4>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted">
                          <span className="text-accent mt-1">•</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="text-secondary">▸</span> Entregas (Deliverables)
                    </h4>
                    <ul className="space-y-2">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted">
                          <span className="text-secondary mt-1">•</span>
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
