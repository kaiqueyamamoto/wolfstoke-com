import { markets } from "@/app/lib/home/data";

export default function MarketsSection() {
  return (
    <section id="markets" className="px-6 md:px-8 py-24 md:py-32 bg-[--color-surface]">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="max-w-[800px] mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[--color-foreground] mb-6 tracking-tight">
            Acesso a mercados globais
          </h2>
          <p className="text-xl text-[--color-muted] leading-relaxed">
            Opere múltiplas classes de ativos em uma única plataforma de nível institucional.
          </p>
        </div>

        {/* Markets Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {markets.map((market) => (
            <div
              key={market.name}
              className="bg-white border border-[--color-border-subtle] p-8
                       hover:border-[--color-border-strong] transition-colors duration-200"
            >
              {/* Title */}
              <h3 className="text-2xl font-bold text-[--color-foreground] mb-4">
                {market.name}
              </h3>

              {/* Description */}
              <p className="text-base text-[--color-muted] mb-6 leading-relaxed">
                {market.description}
              </p>

              {/* Items */}
              <ul className="space-y-3">
                {market.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-[--color-muted]">
                    <span className="text-[--color-foreground] mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
