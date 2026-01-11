import BackgroundEffects from "@/app/components/crypto/BackgroundEffects";
import ComparisonSection from "@/app/components/crypto/ComparisonSection";
import ContactButtons from "@/app/components/ContactButtons";
import CryptoHeader from "@/app/components/crypto/CryptoHeader";
import CryptoPairsSection from "@/app/components/crypto/CryptoPairsSection";
import CTASection from "@/app/components/crypto/CTASection";
import FAQSection from "@/app/components/crypto/FAQSection";
import FeaturesSection from "@/app/components/crypto/FeaturesSection";
import HeroSection from "@/app/components/crypto/HeroSection";
import StepsSection from "@/app/components/crypto/StepsSection";
import Footer from "@/app/components/home/Footer";

export const metadata = {
  title: "Hydra Funding Crypto | Desafio Prop",
  description:
    "Página inspirada na hydrafunding.io/crypto: desafio em 4 fases, contas até US$1M, payouts de 90% e desafios sem limite de tempo.",
};

export default function CryptoPage() {
  return (
    <div className="relative overflow-hidden text-foreground">
      <BackgroundEffects />
      <CryptoHeader />
      <main className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <StepsSection />
        <ComparisonSection />
        <CryptoPairsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <ContactButtons />
    </div>
  );
}
