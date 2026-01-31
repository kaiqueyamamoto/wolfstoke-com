import { mechanism } from "@/app/lib/etfs/data";

export default function MechanismSection() {
  return (
    <section className="px-4 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <p className="inline-block px-3 py-1 text-xs font-semibold rounded-full border-secondary/60 bg-secondary/10 text-secondary">
            Como Funciona
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            {mechanism.title}
          </h2>
          <p className="mt-3 text-muted max-w-2xl mx-auto">
            {mechanism.description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {mechanism.process.map((step, index) => (
            <div
              key={index}
              className="card bg-white border border-[--color-border-subtle] bg-[--color-surface]"
            >
              <div className="card-body gap-3">
                <div className="badge badge-accent badge-outline text-black/80 w-fit">
                  {index + 1}
                </div>
                <h3 className="card-title text-xl">{step.title}</h3>
                <p className="text-muted">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
