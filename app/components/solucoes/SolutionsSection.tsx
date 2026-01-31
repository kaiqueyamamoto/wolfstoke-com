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
          <p className="inline-block px-3 py-1 text-xs font-semibold rounded-full border-secondary/60 bg-secondary/10 text-secondary">
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
            className={`btn px-4 py-2 text-sm ${
              selectedCategory === null
                ? "btn-accent text-black"
                : "border-2 border-[--color-foreground] text-[--color-foreground] hover:bg-[--color-foreground] hover:text-white border-white/20"
            }`}
          >
            Todas
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`btn px-4 py-2 text-sm ${
                selectedCategory === category
                  ? "btn-accent text-black"
                  : "border-2 border-[--color-foreground] text-[--color-foreground] hover:bg-[--color-foreground] hover:text-white border-white/20"
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
              className="card bg-white h-full border border-[--color-border-subtle] bg-[--color-surface]"
            >
              <div className="p-6 gap-4">
                <div>
                  <div className="inline-block px-3 py-1 text-xs font-semibold rounded-full badge-sm mb-2 text-xs">
                    {solution.category.split(" ")[0]}
                  </div>
                  <h3 className="text-xl font-bold text-xl mb-2">{solution.title}</h3>
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
                </div>

                <div className="pt-2">
                  <a
                    href="#contato"
                    className="px-6 py-3 bg-[--color-accent] rounded font-semibold hover:bg-[--color-secondary] transition-colors px-4 py-2 text-sm w-full text-black"
                  >
                    Entrar em Contato
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
