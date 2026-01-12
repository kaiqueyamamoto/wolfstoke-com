export default function HeroSection() {
  return (
    <section className="px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl text-center">
        <div className="badge badge-outline mb-4 border-accent/60 bg-accent/10 text-accent">
          Blog Educacional
        </div>
        <h1 className="mb-4 text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
          Minhas <span className="text-accent">Dúvidas</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted md:text-xl">
          Encontre respostas para suas dúvidas sobre investimentos, mercados
          financeiros e estratégias. Conteúdo educacional para ajudá-lo a tomar
          decisões mais informadas.
        </p>
      </div>
    </section>
  );
}
