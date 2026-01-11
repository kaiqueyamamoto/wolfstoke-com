import { regulation } from "@/app/lib/etfs/data";

export default function RegulationSection() {
  return (
    <section className="px-4 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <p className="badge badge-outline border-accent/60 bg-accent/10 text-accent">
            Regulação
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            {regulation.title}
          </h2>
          <p className="mt-3 text-muted max-w-2xl mx-auto">
            {regulation.description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {regulation.changes.map((change, index) => (
            <div
              key={index}
              className={`card glass border ${
                index === 1
                  ? "border-accent/70 bg-accent/10"
                  : "border-white/10 bg-base-200/30"
              }`}
            >
              <div className="card-body gap-4">
                <h3 className="card-title text-xl">{change.title}</h3>
                <p className="text-muted">{change.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
