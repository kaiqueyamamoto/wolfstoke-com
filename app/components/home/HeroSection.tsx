import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="px-6 md:px-8 py-24 md:py-32 lg:py-40 bg-white">
      <div className="mx-auto max-w-[1200px]">
        {/* Main Content */}
        <div className="max-w-[900px] mx-auto text-center space-y-8">
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[--color-foreground] leading-[1.1] tracking-tight">
            Plataforma profissional de trading de criptomoedas
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-[--color-muted] leading-relaxed max-w-[700px] mx-auto">
            Soluções de trading automatizado para investidores institucionais e profissionais.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <span
              className="w-full sm:w-auto px-8 py-4 bg-[--color-muted]/20 text-[--color-muted] text-base font-semibold rounded
                       cursor-not-allowed inline-block text-center"
            >
              Em breve
            </span>
            <Link
              href="/solucoes"
              className="w-full sm:w-auto px-8 py-4 border-2 border-[--color-foreground] text-[--color-foreground] text-base font-semibold rounded
                       hover:bg-[--color-foreground] hover:text-white transition-all duration-200"
            >
              Ver soluções
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-[800px] mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[--color-foreground] mb-2">24/7</div>
              <div className="text-sm text-[--color-muted] uppercase tracking-wider">
                Análise de mercado
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[--color-foreground] mb-2">6+</div>
              <div className="text-sm text-[--color-muted] uppercase tracking-wider">
                Mercados globais
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[--color-foreground] mb-2">100%</div>
              <div className="text-sm text-[--color-muted] uppercase tracking-wider">
                Plataforma segura
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-24 max-w-[1100px] mx-auto">
          <div className="bg-white border border-[--color-border-subtle] p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-[--color-foreground] mb-4">
              Trading automatizado
            </h3>
            <p className="text-base text-[--color-muted] leading-relaxed">
              Algoritmos executam operações 24/7 com base na sua estratégia e parâmetros de risco.
            </p>
          </div>

          <div className="bg-white border border-[--color-border-subtle] p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-[--color-foreground] mb-4">
              Gestão de risco
            </h3>
            <p className="text-base text-[--color-muted] leading-relaxed">
              Controles de risco de nível institucional protegem seu capital em qualquer cenário de mercado.
            </p>
          </div>

          <div className="bg-white border border-[--color-border-subtle] p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-[--color-foreground] mb-4">
              Acesso multi-mercado
            </h3>
            <p className="text-base text-[--color-muted] leading-relaxed">
              Opere criptomoedas, futuros, ETFs e fundos imobiliários em uma única plataforma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
