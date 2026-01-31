import {
  tradingPlatforms,
  integrations,
  integrationBenefits,
} from "@/app/lib/solucoes/integrations";

export default function IntegrationsSection() {
  return (
    <section id="integracao-trading" className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="inline-block px-3 py-1 text-xs font-semibold rounded-full border-secondary/60 bg-secondary/10 text-secondary">
            Integrações
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Integrações com <span className="text-accent">Plataformas de Trading</span>
          </h2>
          <p className="mt-3 text-muted">
            Desenvolvemos automações e integrações para as principais plataformas de trading do mercado.
          </p>
        </div>

        {/* Plataformas de Trading */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Plataformas Suportadas
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {tradingPlatforms.map((platform, index) => (
              <div
                key={index}
                className="card bg-white border border-[--color-border-subtle] bg-[--color-surface]"
              >
                <div className="p-6 gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-xl mb-2">{platform.name}</h4>
                    <p className="text-sm text-muted mb-3">{platform.description}</p>
                    <div className="inline-block px-3 py-1 text-xs font-semibold rounded-full badge-sm mb-2">
                      {platform.market}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-2">
                      Linguagens:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {platform.languages.map((lang, idx) => (
                        <span key={idx} className="badge badge-accent badge-sm text-black">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="divider my-2" />

                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-2">
                      Principais Recursos:
                    </h5>
                    <ul className="space-y-1">
                      {platform.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-muted">
                          <span className="text-accent mt-1">▸</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tipos de Integração */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Tipos de Integração
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="card bg-white border border-[--color-border-subtle] bg-[--color-surface]"
              >
                <div className="p-6 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-xl font-bold text-xl">{integration.platform}</h4>
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full badge-sm">
                        {integration.type}
                      </span>
                    </div>
                    <p className="text-sm text-muted mb-4">{integration.description}</p>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-2">
                      Capacidades:
                    </h5>
                    <ul className="space-y-2">
                      {integration.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted">
                          <span className="text-accent mt-1">✓</span>
                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefícios */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">
            {integrationBenefits.title}
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {integrationBenefits.items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-[--color-border-subtle] bg-[--color-surface] p-4"
              >
                <h4 className="font-semibold text-accent mb-2">{item.benefit}</h4>
                <p className="text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-white rounded-lg border border-accent/40 bg-accent/10 p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Quer automatizar suas estratégias?
          </h3>
          <p className="text-lg text-muted mb-6">
            Entre em contato e vamos desenvolver a solução ideal para sua plataforma de trading.
          </p>
          <a href="#contato" className="px-6 py-3 bg-[--color-accent] rounded font-semibold hover:bg-[--color-secondary] transition-colors text-black">
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
