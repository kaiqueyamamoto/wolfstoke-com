import BackgroundEffects from "@/app/components/duvidas/BackgroundEffects";
import ContactButtons from "@/app/components/ContactButtons";
import Header from "@/app/components/Header";
import HeroSection from "@/app/components/duvidas/HeroSection";
import PostsListSection from "@/app/components/duvidas/PostsListSection";
import Footer from "@/app/components/home/Footer";

export const metadata = {
  title: "Minhas Dúvidas | Blog Wolfstoke",
  description:
    "Encontre respostas para suas dúvidas sobre investimentos, mercados financeiros e estratégias. Conteúdo educacional para ajudá-lo a tomar decisões mais informadas.",
};

export default function DuvidasPage() {
  return (
    <div className="relative overflow-hidden text-foreground">
      <BackgroundEffects />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <PostsListSection />
      </main>
      <Footer />
      <ContactButtons />
    </div>
  );
}
