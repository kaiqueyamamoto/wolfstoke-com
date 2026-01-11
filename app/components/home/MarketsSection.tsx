import { markets } from "@/app/lib/home/data";

export default function MarketsSection() {
  return (
    <section id="markets" className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="badge badge-outline border-accent/60 bg-accent/10 text-accent">
            Mercados Globais
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Acesse Múltiplas Classes de Ativos em{" "}
            <span className="text-accent">Uma Única Plataforma</span>
          </h2>
          <p className="mt-3 text-muted">
            O Wolfstoke centraliza acesso aos principais mercados mundiais,
            eliminando a necessidade de múltiplas plataformas e contas.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {markets.map((market) => (
            <div
              key={market.name}
              className="card glass h-full border border-white/10 bg-base-200/30"
            >
              <div className="card-body gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{market.icon}</span>
                  <h3 className="card-title text-xl">{market.name}</h3>
                </div>
                <p className="text-sm text-muted">{market.description}</p>
                <ul className="mt-2 space-y-2 text-sm text-muted">
                  {market.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-accent">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
