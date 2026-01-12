import { notFound } from "next/navigation";
import BackgroundEffects from "@/app/components/duvidas/BackgroundEffects";
import ContactButtons from "@/app/components/ContactButtons";
import Header from "@/app/components/Header";
import PostContent from "@/app/components/duvidas/PostContent";
import Footer from "@/app/components/home/Footer";
import { getPostBySlug, getPostContent, getAllPostSlugs } from "@/app/lib/duvidas/utils";
import type { Metadata } from "next";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post não encontrado | Wolfstoke",
    };
  }

  return {
    title: `${post.title} | Wolfstoke`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const content = getPostContent(slug);

  return (
    <div className="relative overflow-hidden text-foreground">
      <BackgroundEffects />
      <Header />
      <main className="relative z-10">
        <article className="px-4 py-12 md:px-8 md:py-16">
          <div className="mx-auto max-w-4xl">
            {/* Header do Post */}
            <div className="mb-8">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="badge badge-outline border-accent/50 bg-accent/10 text-accent">
                  {post.category}
                </span>
                {post.featured && (
                  <span className="badge badge-sm bg-secondary/20 text-secondary">
                    Destaque
                  </span>
                )}
              </div>
              <h1 className="mb-4 text-4xl font-semibold leading-tight md:text-5xl">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
                <span>{post.author}</span>
                <span>•</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>•</span>
                <span>{post.readTime} de leitura</span>
              </div>
            </div>

            {/* Conteúdo do Post */}
            <div className="glass rounded-2xl border border-white/10 p-8 md:p-12">
              {content ? (
                <PostContent content={content} />
              ) : (
                <div className="text-center text-muted">
                  <p>Conteúdo não disponível.</p>
                </div>
              )}
            </div>

            {/* Footer do Post */}
            <div className="mt-8 flex justify-center">
              <a
                href="/duvidas"
                className="btn btn-outline border-accent/50 text-accent hover:border-accent hover:bg-accent/10"
              >
                ← Voltar para posts
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <ContactButtons />
    </div>
  );
}
