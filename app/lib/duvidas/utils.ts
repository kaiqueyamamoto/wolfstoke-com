import { blogPosts, type BlogPost } from "./data";
import { readFileSync } from "fs";
import { join } from "path";

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function getPostContent(slug: string): string {
  // Mapear slugs para arquivos markdown (todos em app/_blog com formato slug)
  const contentMap: Record<string, string> = {
    "como-comecar-investir-criptomoedas": "app/_blog/como-comecar-investir-criptomoedas.md",
    "o-que-sao-etfs-como-funcionam": "app/_blog/o-que-sao-etfs-como-funcionam.md",
    "futuros-americanos-guia-completo": "app/_blog/futuros-americanos-guia-completo.md",
    "diversificacao-carteira-importancia": "app/_blog/diversificacao-carteira-importancia.md",
    "fundos-imobiliarios-fii-guia-completo": "app/_blog/fundos-imobiliarios-fii-guia-completo.md",
    "aave-usdt-plano-detalhado": "app/_blog/aave-usdt-plano-detalhado.md",
  };

  const filePath = contentMap[slug];
  if (!filePath) {
    return "";
  }

  try {
    const fullPath = join(process.cwd(), filePath);
    return readFileSync(fullPath, "utf-8");
  } catch (error) {
    console.error(`Error reading file for slug ${slug}:`, error);
    return "";
  }
}
