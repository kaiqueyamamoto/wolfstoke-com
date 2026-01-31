export default function CTASection() {
  return (
    <section id="contato" className="px-4 pb-16 md:px-8">
      <div className="mx-auto max-w-5xl rounded-3xl border border-accent/40 bg-accent/10 p-10 text-center shadow-2xl">
        <p className="inline-block px-3 py-1 text-xs font-semibold rounded-full border-white/40 bg-white/10 text-white">
          Últimas vagas abertas
        </p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
          Comece o desafio, escale para US$1M e receba até 90% de payout.
        </h2>
        <p className="mt-3 text-lg text-foreground/80">
          Sem limite de tempo, regras claras e suporte dedicado para operar
          cripto com confiança.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a className="px-6 py-3 bg-[--color-accent] text-white rounded font-semibold hover:bg-[--color-secondary] transition-colors shadow-md btn-lg text-black" href="#steps">
            Ver fases
          </a>
          <a
            className="btn btn-outline btn-lg border-white/60 text-white hover:border-white hover:bg-white/10"
            href="#faq"
          >
            Ler regras
          </a>
        </div>
        <div className="mt-6 flex items-center justify-center gap-3 text-sm text-white/80">
          <span className="badge badge-success text-black">Suporte 24/7</span>
          <span>Configuração em minutos</span>
        </div>
      </div>
    </section>
  );
}
