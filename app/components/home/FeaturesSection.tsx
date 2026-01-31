import { features } from "@/app/lib/home/data";

export default function FeaturesSection() {
  return (
    <section id="features" className="px-6 md:px-8 py-24 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="max-w-[800px] mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[--color-foreground] mb-6 tracking-tight">
            Recursos de nível institucional
          </h2>
          <p className="text-xl text-[--color-muted] leading-relaxed">
            Ferramentas de trading profissionais para investidores e instituições.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-[--color-border-subtle] p-8
                       hover:border-white transition-colors duration-200"
            >
              {/* Number */}
              <div className="text-sm font-bold text-[--color-muted] mb-4 uppercase tracking-wider">
                Recurso {String(features.indexOf(feature) + 1).padStart(2, '0')}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[--color-foreground] mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-base text-[--color-muted] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
