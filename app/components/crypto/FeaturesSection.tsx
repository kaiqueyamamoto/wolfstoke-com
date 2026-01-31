import { features } from "@/app/lib/crypto/data";

export default function FeaturesSection() {
  return (
    <section className="px-4 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="inline-block px-3 py-1 text-xs font-semibold rounded-full border-secondary/60 bg-secondary/10 text-secondary">
            Por que Hydra
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Tudo que você quer em uma prop de cripto — sem o que atrapalha.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card bg-white h-full border border-[--color-border-subtle] bg-[--color-surface]"
            >
              <div className="card-body gap-3">
                <h3 className="card-title text-xl">{feature.title}</h3>
                <p className="text-muted">{feature.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
