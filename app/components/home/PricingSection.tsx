import { plans } from "@/app/lib/home/data";

export default function PricingSection() {
  return (
    <section id="pricing" className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="inline-block px-3 py-1 text-xs font-semibold rounded-full border-secondary/60 bg-secondary/10 text-secondary">
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
              className={`bg-white h-full border ${
                plan.highlight
                  ? "border-accent/70 shadow-[0_20px_60px_rgba(167,255,79,0.25)]"
                  : "border-white/10"
              } bg-[--color-surface]`}
            >
              <div className="p-6 gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-2xl">{plan.name}</h3>
                  {plan.highlight && (
                    <div className="badge inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[--color-accent] text-white text-black/80">
                      Popular
                    </div>
                  )}
                </div>
                <div className="border-t border-[--color-border-subtle] my-4" />
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
                        : "border-2 border-[--color-foreground] text-[--color-foreground] hover:bg-[--color-foreground] hover:text-white border-accent/60 text-accent hover:border-accent hover:bg-accent/10"
                    }`}
                    href="#contato"
                  >
                    Entrar em Contato
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-white rounded-2xl border border-accent/40 bg-accent/10 p-6 text-center">
          <p className="text-lg font-semibold mb-2">
            Quer saber mais sobre nossos planos?
          </p>
          <p className="text-muted mb-4">
            Entre em contato e vamos encontrar o plano ideal para você.
          </p>
          <a href="#contato" className="px-6 py-3 bg-[--color-accent] text-white rounded font-semibold hover:bg-[--color-secondary] transition-colorsaccent text-black">
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
