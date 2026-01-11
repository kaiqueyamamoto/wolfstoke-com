import { steps } from "@/app/lib/crypto/data";

export default function StepsSection() {
  return (
    <section id="steps" className="px-4 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="badge badge-outline border-accent/60 bg-accent/10 text-accent">
              Como funciona
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              4 fases para chegar ao payout.
            </h2>
          </div>
          <div className="text-sm text-muted">
            Sem prazo, sem resets obrigatórios. Progresso por performance.
          </div>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="steps steps-vertical lg:steps-horizontal">
            {steps.map((step) => (
              <div key={step.title} className="step step-accent">
                <div className="mt-3">
                  <p className="font-semibold">{step.title}</p>
                  <p className="text-sm text-muted">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="glass rounded-2xl border border-white/10 p-8">
            <h3 className="text-xl font-semibold">Regras-chave</h3>
            <ul className="mt-4 space-y-3 text-muted">
              <li>• Drawdown diário 4% / máximo 8%.</li>
              <li>• Sem limite de dias ou semanas.</li>
              <li>• Notícias liberadas; sem trailing oculto.</li>
              <li>• Payouts semanais após consistência.</li>
              <li>• Upgrade automático até US$1M.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
