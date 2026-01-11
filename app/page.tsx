import BackgroundEffects from "@/app/components/home/BackgroundEffects";
import ContactButtons from "@/app/components/ContactButtons";
import CTASection from "@/app/components/home/CTASection";
import FAQSection from "@/app/components/home/FAQSection";
import FeaturesSection from "@/app/components/home/FeaturesSection";
import Footer from "@/app/components/home/Footer";
import HeroSection from "@/app/components/home/HeroSection";
import HomeHeader from "@/app/components/home/HomeHeader";
import MarketsSection from "@/app/components/home/MarketsSection";
import StepsSection from "@/app/components/home/StepsSection";

export default function Home() {
  return (
    <div className="relative overflow-hidden text-foreground">
      <BackgroundEffects />
      <HomeHeader />
      <main className="relative z-10">
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
