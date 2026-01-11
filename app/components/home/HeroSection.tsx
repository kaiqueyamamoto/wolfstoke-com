export default function HeroSection() {
  return (
    <section className="px-4 pb-16 pt-12 md:px-8 md:pt-16">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <div className="badge badge-outline border-accent/60 bg-accent/10 text-accent">
            Hub Inteligente de Investimentos Globais
          </div>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Acesse o Mercado Financeiro Global em{" "}
            <span className="text-accent">Uma Única Plataforma</span>
          </h1>
          <p className="text-lg text-muted">
            Criptomoedas, Futuros Americanos, Asiáticos e Brasileiros, FIIs e ETFs
            reunidos em um ecossistema inteligente. Construa carteiras
            diversificadas com IA, sem precisar de assessor.
          </p>
          <div className="flex flex-wrap gap-3">
            <a className="btn btn-accent text-black" href="#features">
              Ver Recursos
            </a>
            <a
              className="btn btn-outline border-accent/50 text-accent hover:border-accent hover:bg-accent/10"
              href="#markets"
            >
              Ver Mercados
            </a>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="stat glass rounded-box border border-white/5">
              <div className="stat-title text-muted">Segurança</div>
              <div className="stat-value text-2xl text-accent">100%</div>
              <div className="stat-desc text-xs text-muted">
                Criptografado e seguro
              </div>
            </div>
            <div className="stat glass rounded-box border border-white/5">
              <div className="stat-title text-muted">Mercados</div>
              <div className="stat-value text-2xl text-accent">6+</div>
              <div className="stat-desc text-xs text-muted">
                Classes de ativos globais
              </div>
            </div>
            <div className="stat glass rounded-box border border-white/5">
              <div className="stat-title text-muted">IA</div>
              <div className="stat-value text-2xl text-accent">24/7</div>
              <div className="stat-desc text-xs text-muted">
                Análise em tempo real
              </div>
            </div>
          </div>
        </div>
        <div className="glass relative rounded-2xl border border-white/10 p-3 shadow-2xl">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-white/5" />
          <div className="relative space-y-4 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-muted">
              Tecnologia Institucional
            </p>
            <div className="space-y-4">
              <div className="rounded-xl border border-white/10 bg-base-200/40 p-4">
                <p className="text-muted text-sm">Montagem de Carteiras</p>
                <p className="text-xl font-semibold text-accent">IA Avançada</p>
                <p className="text-xs text-muted">
                  Análise de milhares de cenários para criar a carteira ideal.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-base-200/40 p-4">
                <p className="text-muted text-sm">Análise Preditiva</p>
                <p className="text-xl font-semibold text-accent">Tempo Real</p>
                <p className="text-xs text-muted">
                  Análise técnica, fundamentalista e de sentiment em tempo real.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-base-200/40 p-4">
                <p className="text-muted text-sm">Diversificação</p>
                <p className="text-xl font-semibold text-accent">Global</p>
                <p className="text-xs text-muted">
                  Acesso a todos os principais mercados mundiais.
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-accent/50 bg-accent/10 p-4 text-sm text-accent">
              <p className="font-semibold">Invista como Instituições.</p>
              <p className="mt-1">Decida como um Lobo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
