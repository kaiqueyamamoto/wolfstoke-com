import { getAllBlogPosts, type BlogPost } from "@/app/lib/posts/utils";
import Pagination from "./Pagination";

const POSTS_PER_PAGE = 12;

function formatDate(date: Date): string {
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
            <h2 className="mb-2 text-xl font-semibold leading-tight transition-colors group-hover:text-accent md:text-2xl">
              {post.title}
            </h2>
            <p className="mb-4 text-muted line-clamp-3">{post.excerpt}</p>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-white/5 pt-4 text-sm text-muted">
          <div className="flex items-center gap-4">
            <time dateTime={post.date.toISOString()}>
              {formatDate(post.date)}
            </time>
          </div>
          <a
            href={`/posts/${post.slug}`}
            className="text-accent hover:underline"
          >
            Ler mais →
          </a>
        </div>
      </div>
    </article>
  );
}

interface PostsListSectionProps {
  currentPage?: number;
}

export default function PostsListSection({
  currentPage = 1,
}: PostsListSectionProps) {
  const allPosts = getAllBlogPosts();
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  
  // Validar página atual
  const page = Math.max(1, Math.min(currentPage, totalPages || 1));
  
  // Calcular índices para paginação
  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = allPosts.slice(startIndex, endIndex);

  return (
    <section className="px-4 pb-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            Todos os Posts ({allPosts.length})
          </h2>
          <p className="text-muted">
            Conteúdo educacional sobre investimentos e mercados financeiros
            {totalPages > 1 && ` • Página ${page} de ${totalPages}`}
          </p>
        </div>

        {paginatedPosts.length === 0 ? (
          <div className="bg-white rounded-xl border border-white/10 p-12 text-center">
            <p className="text-muted">Nenhum post encontrado.</p>
          </div>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {paginatedPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              basePath="/posts"
            />
          </>
        )}
      </div>
    </section>
  );
}
