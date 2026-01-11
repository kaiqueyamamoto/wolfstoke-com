"use client";

import { solutions } from "@/app/lib/solucoes/data";
import { useState } from "react";

export default function SolutionsSection() {
  const categories = Array.from(new Set(solutions.map((s) => s.category)));
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredSolutions = selectedCategory
    ? solutions.filter((s) => s.category === selectedCategory)
    : solutions;

  return (
    <section id="solucoes" className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="badge badge-outline border-secondary/60 bg-secondary/10 text-secondary">
            Soluções que Desenvolvemos
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Plataformas <span className="text-accent">Sob Medida</span>
          </h2>
          <p className="mt-3 text-muted">
            Desenvolvemos soluções completas para diferentes necessidades do mercado financeiro.
          </p>
        </div>

        {/* Filtros de Categoria */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`btn btn-sm ${
              selectedCategory === null
                ? "btn-accent text-black"
                : "btn-outline border-white/20"
            }`}
          >
            Todas
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`btn btn-sm ${
                selectedCategory === category
                  ? "btn-accent text-black"
                  : "btn-outline border-white/20"
              }`}
            >
              {category.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Grid de Soluções */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredSolutions.map((solution) => (
            <div
              key={solution.id}
              className="card glass h-full border border-white/10 bg-base-200/30"
            >
              <div className="card-body gap-4">
                <div>
                  <div className="badge badge-outline badge-sm mb-2 text-xs">
                    {solution.category.split(" ")[0]}
                  </div>
                  <h3 className="card-title text-xl mb-2">{solution.title}</h3>
                  <p className="text-sm text-muted">{solution.description}</p>
                </div>

                <div className="flex-1 space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">
                      Principais Features:
                    </h4>
                    <ul className="space-y-1">
                      {solution.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-muted">
                          <span className="text-accent mt-1">▸</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                      {solution.features.length > 3 && (
                        <li className="text-xs text-muted italic">
                          +{solution.features.length - 3} outras features
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="divider my-2" />

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted">Prazo:</span>
                    <span className="text-foreground font-semibold">{solution.timeline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Investimento:</span>
                    <span className="text-accent font-semibold">{solution.investment}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
