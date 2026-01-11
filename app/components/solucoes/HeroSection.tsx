import { heroData } from "@/app/lib/solucoes/data";

export default function HeroSection() {
  return (
    <section className="px-4 pb-16 pt-12 md:px-8 md:pt-16">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="text-center space-y-6">
          <div className="badge badge-outline border-accent/60 bg-accent/10 text-accent">
            {heroData.subtitle}
          </div>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            {heroData.title}
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted">
            {heroData.description}
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <a className="btn btn-accent text-black" href="#solucoes">
              Ver Soluções
            </a>
            <a
              className="btn btn-outline border-accent/50 text-accent hover:border-accent hover:bg-accent/10"
              href="#processo"
            >
              Nosso Processo
            </a>
            <a
              className="btn btn-outline border-secondary/50 text-secondary hover:border-secondary hover:bg-secondary/10"
              href="#contato"
            >
              Fale Conosco
            </a>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 pt-8">
          <div className="stat glass rounded-box border border-white/5">
            <div className="stat-title text-muted">Controle Total</div>
            <div className="stat-value text-2xl text-accent">100%</div>
            <div className="stat-desc text-xs text-muted">
              Propriedade do código-fonte
            </div>
          </div>
          <div className="stat glass rounded-box border border-white/5">
            <div className="stat-title text-muted">Soluções</div>
            <div className="stat-value text-2xl text-accent">12+</div>
            <div className="stat-desc text-xs text-muted">
              Tipos de plataformas
            </div>
          </div>
          <div className="stat glass rounded-box border border-white/5">
            <div className="stat-title text-muted">Security First</div>
            <div className="stat-value text-2xl text-accent">24/7</div>
            <div className="stat-desc text-xs text-muted">
              Monitoramento e compliance
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl border border-white/10 p-6 md:p-8 mt-8">
          <p className="text-center text-lg font-semibold text-foreground mb-2">
            "No mercado financeiro, tecnologia não é apenas ferramenta, é vantagem competitiva."
          </p>
          <p className="text-center text-muted">
            Vamos construir juntos a solução que seu negócio precisa.
          </p>
        </div>
      </div>
    </section>
  );
}
