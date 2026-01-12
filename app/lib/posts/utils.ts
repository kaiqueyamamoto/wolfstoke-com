import { readdirSync, readFileSync, statSync } from "fs";
import { join } from "path";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: Date;
  fileName: string;
}

const BLOG_DIR = join(process.cwd(), "app/_blog");

/**
 * Lê todos os arquivos markdown da pasta app/_blog, ignorando _agents e subpastas
 */
export function getAllBlogPosts(): BlogPost[] {
  try {
    const files = readdirSync(BLOG_DIR);
    const posts: BlogPost[] = [];

    for (const file of files) {
      // Ignorar pasta _agents e outras pastas
      const filePath = join(BLOG_DIR, file);
      const stats = statSync(filePath);
      
      if (stats.isDirectory()) {
        continue;
      }

      // Processar apenas arquivos .md
      if (!file.endsWith(".md")) {
        continue;
      }

      try {
        const content = readFileSync(filePath, "utf-8");
        const title = extractTitle(content);
        const excerpt = extractExcerpt(content);
        const slug = file.replace(".md", "");
        const date = getFileDate(filePath);

        posts.push({
          slug,
          title,
          excerpt,
          content,
          date,
          fileName: file,
        });
      } catch (error) {
        console.error(`Erro ao processar arquivo ${file}:`, error);
      }
    }

    // Ordenar por data (mais recente primeiro)
    return posts.sort((a, b) => b.date.getTime() - a.date.getTime());
  } catch (error) {
    console.error("Erro ao ler posts do blog:", error);
    return [];
  }
}

/**
 * Extrai o título do primeiro H1 do markdown
 */
function extractTitle(content: string): string {
  const h1Match = content.match(/^#\s+(.+)$/m);
  if (h1Match) {
    return h1Match[1].trim();
  }
  
  // Fallback: usar primeira linha não vazia
  const firstLine = content.split("\n").find((line) => line.trim());
  return firstLine?.replace(/^#+\s+/, "").trim() || "Sem título";
}

/**
 * Extrai um excerpt do conteúdo (primeiras 150 caracteres)
 */
function extractExcerpt(content: string): string {
  // Remover headers e código
  const cleanContent = content
    .replace(/^#+\s+.+$/gm, "")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`]+`/g, "")
    .trim();

  // Pegar primeira linha ou parágrafo significativo
  const firstParagraph = cleanContent
    .split("\n\n")
    .find((para) => para.trim().length > 50);

  if (firstParagraph) {
    const excerpt = firstParagraph.trim().substring(0, 200);
    return excerpt.length < firstParagraph.length ? `${excerpt}...` : excerpt;
  }

  // Fallback: primeiros 150 caracteres
  const excerpt = cleanContent.substring(0, 150);
  return excerpt.length < cleanContent.length ? `${excerpt}...` : excerpt;
}

/**
 * Obtém a data de modificação do arquivo
 */
function getFileDate(filePath: string): Date {
  try {
    const stats = statSync(filePath);
    return stats.mtime;
  } catch {
    return new Date();
  }
}

/**
 * Obtém um post específico pelo slug
 */
export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllBlogPosts();
  return posts.find((post) => post.slug === slug) || null;
}

/**
 * Obtém todos os slugs disponíveis
 */
export function getAllPostSlugs(): string[] {
  return getAllBlogPosts().map((post) => post.slug);
}

/**
 * Obtém apenas o conteúdo do post
 */
export function getPostContent(slug: string): string {
  const post = getPostBySlug(slug);
  return post?.content || "";
}
