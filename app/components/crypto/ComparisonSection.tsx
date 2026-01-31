import { comparison } from "@/app/lib/crypto/data";

export default function ComparisonSection() {
  return (
    <section className="px-4 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <p className="inline-block px-3 py-1 text-xs font-semibold rounded-full border-accent/60 bg-accent/10 text-accent">
            Transparência
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Hydra vs. outras props
          </h2>
          <p className="mt-3 text-muted max-w-2xl mx-auto">
            Foco em escala real, sem regras escondidas ou resets forçados.
          </p>
        </div>
        <div className="bg-white rounded-3xl border border-[--color-border-subtle] bg-[--color-surface] p-6 md:p-8 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="bg-base-300/60 text-left font-semibold text-foreground">
                    Recurso
                  </th>
                  <th className="bg-accent/20 text-center font-semibold text-accent">
                    Hydra Crypto
                  </th>
                  <th className="bg-base-300/60 text-center font-semibold text-muted">
                    Outras
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, index) => (
                  <tr
                    key={item.label}
                    className={index % 2 === 0 ? "bg-base-200/20" : ""}
                  >
                    <td className="font-medium py-4">{item.label}</td>
                    <td className="text-center py-4">
                      <span className="badge badge-accent badge-lg text-black font-bold">
                        {item.hydra}
                      </span>
                    </td>
                    <td className="text-center py-4 text-muted">
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full badge-lg">
                        {item.others}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-6 text-center">
          <a
            className="px-6 py-3 bg-[--color-accent] text-white rounded font-semibold hover:bg-[--color-secondary] transition-colors shadow-md text-black"
            href="#steps"
          >
            Como funciona
          </a>
        </div>
      </div>
    </section>
  );
}
