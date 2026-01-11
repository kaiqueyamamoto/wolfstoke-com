export default function CTASection() {
  return (
    <section id="apply" className="px-4 pb-16 md:px-8">
      <div className="mx-auto max-w-5xl rounded-3xl border border-accent/30 bg-accent/10 p-10 text-center shadow-2xl">
        <p className="badge badge-outline border-white/40 bg-white/10 text-white">
          Comece Hoje
        </p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
          Pronto para Transformar Seus Investimentos?
        </h2>
        <p className="mt-3 text-lg text-foreground/80">
          Junte-se a milhares de investidores que já descobriram o poder da
          diversificação global com inteligência artificial.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a className="btn btn-accent btn-lg text-black" href="#features">
            Ver Recursos
          </a>
          <a
            className="btn btn-outline btn-lg border-white/60 text-white hover:border-white hover:bg-white/10"
            href="#markets"
          >
            Ver Mercados
          </a>
        </div>
        <div className="mt-6 flex items-center justify-center gap-3 text-sm text-white/80">
          <span className="badge badge-success text-black">✓</span>
          <span>Sem cartão de crédito necessário</span>
          <span className="badge badge-success text-black">✓</span>
          <span>Cancele quando quiser</span>
          <span className="badge badge-success text-black">✓</span>
          <span>Suporte em português</span>
        </div>
      </div>
    </section>
  );
}
