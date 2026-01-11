import { plans } from "@/app/lib/crypto/data";

export default function PlansSection() {
  return (
    <section id="plans" className="px-4 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="badge badge-outline border-secondary/60 bg-secondary/10 text-secondary">
            Planos
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Escolha o desafio e comece hoje.
          </h2>
          <p className="mt-2 text-muted">
            Todos incluem suporte, upgrades de escala e payouts recorrentes.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">
                      {plan.name}
                    </p>
                    <h3 className="card-title text-2xl">{plan.amount}</h3>
                  </div>
                  {plan.highlight && (
                    <div className="badge badge-accent badge-outline text-black/80">
                      Popular
                    </div>
                  )}
                </div>
                <p className="text-lg font-semibold text-accent">
                  {plan.price}
                </p>
                <p className="text-sm text-muted">{plan.target}</p>
                <p className="text-sm text-muted">{plan.dd}</p>
                <div className="divider" />
                <ul className="space-y-2 text-sm text-muted">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2">
                      <span className="text-accent">▸</span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <a className="btn btn-accent w-full text-black" href="#plans">
                    Start challenge
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
