export default function InvestmentSection() {
  return (
    <section id="investimento" className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="badge badge-outline border-secondary/60 bg-secondary/10 text-secondary">
            Modelo de Investimento
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Projetos <span className="text-accent">Personalizados</span>
          </h2>
          <p className="mt-3 text-muted">
            Desenvolvemos soluções sob medida para diferentes necessidades e orçamentos.
          </p>
        </div>

        <div className="mt-12 glass rounded-2xl border border-white/10 bg-base-200/30 p-6 md:p-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold">Modelos Disponíveis</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <h4 className="font-semibold text-accent">Projeto Fechado</h4>
                <p className="text-sm text-muted">
                  Escopo definido, pagamento por milestones. Ideal para projetos com requisitos claros.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-accent">Time & Materials</h4>
                <p className="text-sm text-muted">
                  Equipe dedicada, cobrança mensal, flexibilidade total. Ideal para projetos evolutivos.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-accent">Híbrido</h4>
                <p className="text-sm text-muted">
                  MVP definido, depois T&M para evolução. Melhor dos dois mundos.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 glass rounded-2xl border border-accent/40 bg-accent/10 p-8 md:p-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Quer conhecer mais sobre nossos modelos de investimento?
          </h3>
          <p className="text-lg text-muted mb-6">
            Entre em contato e vamos conversar sobre a melhor opção para o seu projeto.
          </p>
          <a href="#contato" className="btn btn-accent text-black">
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
