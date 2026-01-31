import Link from "next/link";

export default function CTASection() {
  return (
    <section id="contato" className="px-6 md:px-8 py-24 md:py-32">
      <div className="mx-auto max-w-[1000px] bg-white border border-[--color-border-subtle] p-16 text-center rounded-lg shadow-xl">
        <h2 className="text-4xl md:text-5xl font-bold text-[--color-foreground] mb-6 tracking-tight">
          Pronto para transformar seu trading?
        </h2>
        <p className="text-xl text-[--color-muted] leading-relaxed mb-10 max-w-[700px] mx-auto">
          Junte-se a milhares de traders que descobriram o poder de soluções de trading automatizado de nível institucional.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto px-8 py-4 bg-[--color-accent] text-white text-base font-semibold rounded
                     hover:bg-[--color-secondary] transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Começar teste grátis
          </Link>
          <Link
            href="/solucoes"
            className="w-full sm:w-auto px-8 py-4 border-2 border-[--color-foreground] text-[--color-foreground] text-base font-semibold rounded
                     hover:bg-[--color-foreground] hover:text-white transition-all duration-200"
          >
            Ver soluções
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t border-[--color-border-subtle]">
          <div className="flex items-center gap-3 text-sm text-[--color-muted]">
            <svg className="w-5 h-5 text-[--color-foreground]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Sem cartão de crédito</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-[--color-muted]">
            <svg className="w-5 h-5 text-[--color-foreground]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Cancele quando quiser</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-[--color-muted]">
            <svg className="w-5 h-5 text-[--color-foreground]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Suporte 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
}
