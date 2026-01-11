import { plans } from "@/app/lib/home/data";

export default function PricingSection() {
  return (
    <section id="pricing" className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="badge badge-outline border-secondary/60 bg-secondary/10 text-secondary">
            Planos e Preços
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Escolha o Plano Ideal para Você
          </h2>
          <p className="mt-3 text-muted">
            Comece grátis e evolua conforme suas necessidades. Garantia de 30
            dias para todos os planos.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`card glass h-full border ${
                plan.highlight
                  ? "border-accent/70 shadow-[0_20px_60px_rgba(167,255,79,0.25)]"
                  : "border-white/10"
              } bg-base-200/30`}
            >
              <div className="card-body gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="card-title text-2xl">{plan.name}</h3>
                  {plan.highlight && (
                    <div className="badge badge-accent badge-outline text-black/80">
                      Popular
                    </div>
                  )}
                </div>
                <div className="mt-2">
                  <span className="text-3xl font-semibold text-accent">
                    {plan.price}
                  </span>
                  <span className="text-muted">{plan.period}</span>
                </div>
                <div className="divider" />
                <ul className="space-y-2 text-sm text-muted">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <a
                    className={`btn w-full text-black ${
                      plan.highlight
                        ? "btn-accent"
                        : "btn-outline border-accent/60 text-accent hover:border-accent hover:bg-accent/10"
                    }`}
                    href="#pricing"
                  >
                    {plan.name === "Iniciante" ? "Começar grátis" : "Assinar plano"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center text-sm text-muted">
          <p>Garantia de 30 dias: Teste sem risco e cancele quando quiser.</p>
        </div>
      </div>
    </section>
  );
}
