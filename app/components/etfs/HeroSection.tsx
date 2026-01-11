import { introduction } from "@/app/lib/etfs/data";

export default function HeroSection() {
  return (
    <section className="px-4 pb-16 pt-12 md:px-8 md:pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-6 text-center">
          <div className="badge badge-outline border-accent/60 bg-accent/10 text-accent">
            Manifesto Educacional
          </div>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            {introduction.title}
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            {introduction.description}
          </p>
          <div className="glass rounded-2xl border border-white/10 bg-base-200/30 p-6 md:p-8 mt-8">
            <h2 className="text-2xl font-semibold mb-4">O que é um ETF?</h2>
            <p className="text-lg text-muted leading-relaxed">
              {introduction.definition}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {introduction.benefits.map((benefit, index) => (
              <div
                key={index}
                className="glass rounded-xl border border-white/10 bg-base-200/30 p-4"
              >
                <p className="text-sm text-muted">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
