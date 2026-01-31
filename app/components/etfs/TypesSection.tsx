import { categories } from "@/app/lib/etfs/data";

export default function TypesSection() {
  return (
    <section id="types" className="px-4 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <p className="inline-block px-3 py-1 text-xs font-semibold rounded-full border-accent/60 bg-accent/10 text-accent">
            Tipologia
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Espectro de ETFs na B3
          </h2>
          <p className="mt-3 text-muted max-w-2xl mx-auto">
            A correta identificação da tipologia é crucial, pois dita não apenas
            o perfil de risco, mas também o regime tributário aplicável.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category.name}
              className="card bg-white border border-[--color-border-subtle] bg-[--color-surface]"
            >
              <div className="card-body gap-4">
                <h3 className="card-title text-2xl">{category.name}</h3>
                <p className="text-muted">{category.description}</p>
                <ul className="space-y-2 text-sm text-muted">
                  {category.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-accent">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {category.examples && (
                  <div className="mt-4 pt-4 border-t border-[--color-border-subtle]">
                    <p className="text-xs text-muted mb-2">Exemplos:</p>
                    <div className="flex flex-wrap gap-2">
                      {category.examples.map((example) => (
                        <span
                          key={example}
                          className="inline-block px-3 py-1 text-xs font-semibold rounded-full text-xs"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
