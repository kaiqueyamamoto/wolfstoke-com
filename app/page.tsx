import ContactButtons from "@/app/components/ContactButtons";
import CTASection from "@/app/components/home/CTASection";
import FAQSection from "@/app/components/home/FAQSection";
import FeaturesSection from "@/app/components/home/FeaturesSection";
import Footer from "@/app/components/home/Footer";
import HeroSection from "@/app/components/home/HeroSection";
import Header from "@/app/components/Header";
import MarketsSection from "@/app/components/home/MarketsSection";
import StepsSection from "@/app/components/home/StepsSection";

export default function Home() {
  return (
    <div className="relative text-foreground">
      <Header />
      <main>
        <HeroSection />
        <MarketsSection />
        <FeaturesSection />
        <StepsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <ContactButtons />
    </div>
  );
}
