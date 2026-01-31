import {
  taxation,
  taxVariableTable,
  taxFixedTable,
} from "@/app/lib/etfs/data";

export default function TaxSection() {
  return (
    <section id="taxation" className="px-4 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <p className="inline-block px-3 py-1 text-xs font-semibold rounded-full border-secondary/60 bg-secondary/10 text-secondary">
            Tributação
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            O Labirinto Tributário: Regras, Alíquotas e Exceções
          </h2>
          <p className="mt-3 text-muted max-w-2xl mx-auto">
            A tributação dos ETFs no Brasil é o aspecto mais intrincado para o
            investidor, exigindo compreensão detalhada para evitar passivos
            fiscais.
          </p>
        </div>

        <div className="space-y-10">
          {/* Renda Variável */}
          <div className="bg-white rounded-2xl border border-[--color-border-subtle] bg-[--color-surface] p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-3">
              {taxation.variable.title}
            </h3>
            <p className="text-muted mb-6">{taxation.variable.description}</p>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th className="bg-base-300/60">Modalidade</th>
                    <th className="bg-base-300/60 text-center">Alíquota</th>
                    <th className="bg-base-300/60">Recolhimento</th>
                    <th className="bg-base-300/60">Prazo</th>
                  </tr>
                </thead>
                <tbody>
                  {taxVariableTable.map((row) => (
                    <tr key={row.label}>
                      <td className="font-medium">{row.label}</td>
                      <td className="text-center">
                        <span className="badge badge-accent text-black font-bold">
                          {row.rate}
                        </span>
                      </td>
                      <td className="text-muted">{row.mechanism}</td>
                      <td className="text-muted text-sm">{row.deadline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 rounded-xl bg-accent/10 border border-accent/30">
              <p className="text-sm text-muted">
                <strong>Nota:</strong> {taxation.variable.note}
              </p>
              <p className="text-sm text-muted mt-2">
                <strong>Criptoativos:</strong> {taxation.variable.criptoNote}
              </p>
            </div>
          </div>

          {/* Renda Fixa */}
          <div className="bg-white rounded-2xl border border-[--color-border-subtle] bg-[--color-surface] p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-3">
              {taxation.fixed.title}
            </h3>
            <p className="text-muted mb-2">{taxation.fixed.description}</p>
            <p className="text-sm text-accent mb-6 font-semibold">
              {taxation.fixed.advantage}
            </p>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th className="bg-base-300/60">Prazo Médio da Carteira</th>
                    <th className="bg-base-300/60 text-center">Alíquota de IR</th>
                    <th className="bg-base-300/60">Mecanismo de Cobrança</th>
                  </tr>
                </thead>
                <tbody>
                  {taxFixedTable.map((row) => (
                    <tr key={row.label}>
                      <td className="font-medium">{row.label}</td>
                      <td className="text-center">
                        <span className="badge badge-accent text-black font-bold">
                          {row.rate}
                        </span>
                      </td>
                      <td className="text-muted">{row.mechanism}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Dividendos */}
          <div className="bg-white rounded-2xl border border-[--color-border-subtle] bg-[--color-surface] p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-3">
              {taxation.dividends.title}
            </h3>
            <p className="text-muted mb-4">{taxation.dividends.description}</p>
            <div className="flex items-center gap-4">
              <span className="badge badge-accent badge-lg text-black font-bold">
                {taxation.dividends.rate}
              </span>
              <span className="text-muted">retenção na fonte</span>
            </div>
            <p className="text-sm text-muted mt-4">{taxation.dividends.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
