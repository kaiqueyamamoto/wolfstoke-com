import { whyLimitations, whyAdvantages } from "@/app/lib/solucoes/data";

export default function WhySection() {
  return (
    <section id="porque" className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl space-y-16">
        <div className="text-center">
          <p className="inline-block px-3 py-1 text-xs font-semibold rounded-full border-secondary/60 bg-secondary/10 text-secondary">
            Por Que Soluções Personalizadas?
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            <span className="text-accent">Vantagem Competitiva</span> através de Tecnologia
          </h2>
          <p className="mt-3 text-muted">
            Entenda as limitações das soluções de prateleira e as vantagens de ter uma solução sob medida.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Limitações */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-red-500/20 bg-red-500/5 p-6">
              <h3 className="text-2xl font-semibold text-red-400 mb-4">
                {whyLimitations.title}
              </h3>
              <div className="space-y-4">
                {whyLimitations.items.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-foreground">{item.category}</h4>
                    <ul className="space-y-1">
                      {item.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-2 text-sm text-muted">
                          <span className="text-red-400 mt-1">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vantagens */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-accent/40 bg-accent/10 p-6">
              <h3 className="text-2xl font-semibold text-accent mb-4">
                {whyAdvantages.title}
              </h3>
              <div className="space-y-4">
                {whyAdvantages.items.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-foreground">{item.category}</h4>
                    <ul className="space-y-1">
                      {item.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-2 text-sm text-muted">
                          <span className="text-accent mt-1">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
