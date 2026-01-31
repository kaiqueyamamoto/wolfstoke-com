import { steps } from "@/app/lib/home/data";
import Link from "next/link";

export default function StepsSection() {
  return (
    <section className="px-6 md:px-8 py-24 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="max-w-[800px] mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[--color-foreground] mb-6 tracking-tight">
            Como funciona
          </h2>
          <p className="text-xl text-[--color-muted] leading-relaxed">
            Comece a operar em quatro passos com ferramentas de nível institucional.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="border border-[--color-border-subtle] p-8
                       hover:border-white transition-colors duration-200"
            >
              {/* Step Number */}
              <div className="text-sm font-bold text-[--color-muted] mb-4 uppercase tracking-wider">
                Passo {String(index + 1).padStart(2, '0')}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[--color-foreground] mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-base text-[--color-muted] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="border border-[--color-border-subtle] p-12 text-center max-w-[900px] mx-auto">
          <h3 className="text-3xl font-bold text-[--color-foreground] mb-4">
            Pronto para começar?
          </h3>
          <p className="text-lg text-[--color-muted] leading-relaxed mb-8 max-w-[600px] mx-auto">
            Crie sua conta e comece a montar sua carteira diversificada com ferramentas profissionais de trading.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="w-full sm:w-auto px-8 py-4 bg-white text-black text-base font-semibold
                       hover:bg-gray-200 transition-all duration-200"
            >
              Começar a operar
            </Link>
            <Link
              href="#features"
              className="w-full sm:w-auto px-8 py-4 border-2 border-white text-[--color-foreground] text-base font-semibold
                       hover:bg-white hover:text-black transition-all duration-200"
            >
              Ver recursos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
