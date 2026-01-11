import {
  cryptoPairsInternational,
  cryptoPairsUSA,
} from "@/app/lib/crypto/data";

export default function CryptoPairsSection() {
  return (
    <section id="pairs" className="px-4 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="badge badge-outline border-accent/60 bg-accent/10 text-accent">
            Pares Disponíveis
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Mais de 100+ pares de criptomoedas
          </h2>
          <p className="mt-2 text-muted">
            Negocie BTC, ETH, SOL e mais de 100 altcoins com spreads apertados.
          </p>
        </div>

        <div className="mt-10 space-y-10">
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold">Internacional</h3>
              <span className="badge badge-outline text-muted">
                {cryptoPairsInternational.length} pares
              </span>
            </div>
            <div className="glass rounded-2xl border border-white/10 bg-base-200/30 p-6">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {cryptoPairsInternational.map((pair) => (
                  <div
                    key={pair}
                    className="rounded-lg border border-white/10 bg-base-300/40 px-3 py-2 text-center text-sm font-mono transition-colors hover:border-accent/50 hover:bg-accent/10"
                  >
                    {pair}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold">USA</h3>
              <span className="badge badge-outline text-muted">
                {cryptoPairsUSA.length} pares
              </span>
            </div>
            <div className="glass rounded-2xl border border-white/10 bg-base-200/30 p-6">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {cryptoPairsUSA.map((pair) => (
                  <div
                    key={pair}
                    className="rounded-lg border border-white/10 bg-base-300/40 px-3 py-2 text-center text-sm font-mono transition-colors hover:border-accent/50 hover:bg-accent/10"
                  >
                    {pair}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
