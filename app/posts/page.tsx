import BackgroundEffects from "@/app/components/posts/BackgroundEffects";
import ContactButtons from "@/app/components/ContactButtons";
import Header from "@/app/components/Header";
import HeroSection from "@/app/components/posts/HeroSection";
import PostsListSection from "@/app/components/posts/PostsListSection";
import Footer from "@/app/components/home/Footer";

interface PostsPageProps {
  searchParams: Promise<{ page?: string }>;
}

export const metadata = {
  title: "Posts | Blog Wolfstoke",
  description:
    "Conteúdo educacional sobre investimentos, mercados financeiros e estratégias. Conteúdo para ajudá-lo a tomar decisões mais informadas.",
};

export default async function PostsPage({ searchParams }: PostsPageProps) {
  const { page } = await searchParams;
  const currentPage = page ? parseInt(page, 10) : 1;

  return (
    <div className="relative overflow-hidden text-foreground">
      <BackgroundEffects />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <PostsListSection currentPage={currentPage} />
      </main>
      <Footer />
      <ContactButtons />
    </div>
  );
}
