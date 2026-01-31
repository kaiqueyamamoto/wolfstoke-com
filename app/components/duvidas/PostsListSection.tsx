"use client";

import { blogPosts, categories, type BlogPost } from "@/app/lib/duvidas/data";
import { useState } from "react";

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white group relative overflow-hidden rounded-xl border border-white/10 p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10">
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="mb-2 flex items-center gap-3">
              <span className="badge badge-outline border-accent/50 bg-accent/10 text-xs text-accent">
                {post.category}
              </span>
              {post.featured && (
                <span className="badge badge-sm bg-secondary/20 text-secondary">
                  Destaque
                </span>
              )}
            </div>
            <h2 className="mb-2 text-xl font-semibold leading-tight transition-colors group-hover:text-accent md:text-2xl">
              {post.title}
            </h2>
            <p className="mb-4 text-muted line-clamp-2">{post.excerpt}</p>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-white/5 pt-4 text-sm text-muted">
          <div className="flex items-center gap-4">
            <span>{post.author}</span>
            <span>•</span>
            <span>{formatDate(post.date)}</span>
            <span>•</span>
            <span>{post.readTime} de leitura</span>
          </div>
          <a
            href={`/duvidas/${post.slug}`}
            className="text-accent hover:underline"
          >
            Ler mais →
          </a>
        </div>
      </div>
    </article>
  );
}

export default function PostsListSection() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredPosts =
    selectedCategory === "Todos"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  const displayPosts =
    selectedCategory === "Todos"
      ? regularPosts
      : filteredPosts;

  return (
    <section className="px-4 pb-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`badge badge-lg border px-4 py-2 transition-all ${
                selectedCategory === category
                  ? "border-accent bg-accent/20 text-accent"
                  : "border-white/20 bg-transparent text-muted hover:border-accent/50 hover:text-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {selectedCategory === "Todos" && featuredPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-semibold">Posts em Destaque</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {featuredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}

        <div>
          {selectedCategory !== "Todos" && (
            <h2 className="mb-6 text-2xl font-semibold">
              {selectedCategory} ({displayPosts.length})
            </h2>
          )}
          {displayPosts.length === 0 ? (
            <div className="bg-white rounded-xl border border-white/10 p-12 text-center">
              <p className="text-muted">
                Nenhum post encontrado nesta categoria.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {displayPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
