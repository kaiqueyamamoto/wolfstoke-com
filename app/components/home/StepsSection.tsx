import { steps } from "@/app/lib/home/data";

export default function StepsSection() {
  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="badge badge-outline border-secondary/60 bg-secondary/10 text-secondary">
            Como Funciona
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Em 4 Passos Simples
          </h2>
          <p className="mt-3 text-muted">
            Comece a investir globalmente em minutos, com suporte de
            inteligência artificial.
          </p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="steps steps-vertical lg:steps-horizontal">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="step step-accent text-left text-foreground"
              >
                <div className="mt-3">
                  <p className="font-semibold">{step.title}</p>
                  <p className="mt-1 text-sm text-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="glass rounded-2xl border border-white/10 p-8">
            <h3 className="text-2xl font-semibold">Pronto para começar?</h3>
            <p className="mt-3 text-muted">
              Crie sua conta gratuitamente e comece a construir sua carteira
              diversificada globalmente. Sem compromisso, sem cartão de
              crédito.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn btn-accent text-black" href="#features">
                Ver Recursos
              </a>
              <a
                className="btn btn-outline border-accent/60 text-accent hover:border-accent hover:bg-accent/10"
                href="#markets"
              >
                Ver mercados
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
