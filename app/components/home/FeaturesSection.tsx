import { features } from "@/app/lib/home/data";

export default function FeaturesSection() {
  return (
    <section id="features" className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="badge badge-outline border-secondary/60 bg-secondary/10 text-secondary">
            Recursos Avançados
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Tecnologia Institucional ao{" "}
            <span className="text-accent">Alcance de Todos</span>
          </h2>
          <p className="mt-3 text-muted">
            Ferramentas profissionais que democratizam o acesso a estratégias
            antes exclusivas de grandes fundos.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card glass h-full border border-white/10 bg-base-200/30"
            >
              <div className="card-body gap-3">
                <h3 className="card-title text-xl">{feature.title}</h3>
                <p className="text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
