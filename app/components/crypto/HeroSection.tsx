import { metrics } from "@/app/lib/crypto/data";

export default function HeroSection() {
  return (
    <section className="px-4 pb-12 pt-10 md:px-8 md:pt-16">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 text-xs font-semibold rounded-full border-accent/60 bg-accent/10 text-accent">
            Crypto Prop • Sem limite
          </div>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Contas cripto até{" "}
            <span className="text-accent">US$1M</span> com payouts de 90%
            e desafios sem timer.
          </h1>
          <p className="text-lg text-muted">
            Parta do challenge, escale em 4 fases e opere BTC, ETH e FX com
            regras claras. News trading liberado, drawdown justo e suporte
            direto.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#steps"
              className="px-6 py-3 rounded font-semibold shadow-md transition-colors bg-[--color-accent] text-black hover:bg-[--color-secondary] hover:text-white"
            >
              Ver fases
            </a>
            <a
              href="#steps"
              className="px-6 py-3 rounded font-semibold transition-colors border-2 border-[--color-accent] text-[--color-foreground] hover:border-[--color-secondary] hover:bg-[--color-secondary]/10 hover:text-[--color-secondary]"
            >
              Como funciona
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-white rounded-xl border border-[--color-border-subtle] p-4"
              >
                <p className="text-sm text-muted">{metric.label}</p>
                <p className="text-xl font-semibold">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white relative rounded-2xl border border-[--color-border-subtle] p-6 shadow-2xl">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-white/5" />
          <div className="relative space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-muted">
              Segurança e transparência
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-[--color-border-subtle] bg-base-200/40 p-4">
                <p className="text-muted text-sm">Proteções</p>
                <p className="text-xl font-semibold text-accent">
                  Max loss 20%
                </p>
                <p className="text-xs text-muted">
                  Trailing drawdown baseado no saldo inicial.
                </p>
              </div>
              <div className="rounded-xl border border-[--color-border-subtle] bg-base-200/40 p-4">
                <p className="text-muted text-sm">News trading</p>
                <p className="text-xl font-semibold text-accent">Liberado</p>
                <p className="text-xs text-muted">
                  Sem bloqueios para CPI, FOMC e eventos cripto.
                </p>
              </div>
              <div className="rounded-xl border border-[--color-border-subtle] bg-base-200/40 p-4">
                <p className="text-muted text-sm">Pagamentos</p>
                <p className="text-xl font-semibold text-accent">Semanais</p>
                <p className="text-xs text-muted">
                  Solicite após atingir critérios de consistência.
                </p>
              </div>
              <div className="rounded-xl border border-[--color-border-subtle] bg-base-200/40 p-4">
                <p className="text-muted text-sm">Plataformas</p>
                <p className="text-xl font-semibold text-accent">
                  MT5, cTrader, Autotrader
                </p>
                <p className="text-xs text-muted">
                  Conecte via broker parceiro, sem marcação oculta.
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-accent/50 bg-accent/10 p-4 text-sm text-accent">
              KYC somente na funded. Sem limite de tempo para concluir cada
              fase.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
