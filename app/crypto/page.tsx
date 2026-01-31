import ComparisonSection from "@/app/components/crypto/ComparisonSection";
import ContactButtons from "@/app/components/ContactButtons";
import Header from "@/app/components/Header";
import CryptoPairsSection from "@/app/components/crypto/CryptoPairsSection";
import CTASection from "@/app/components/crypto/CTASection";
import FAQSection from "@/app/components/crypto/FAQSection";
import FeaturesSection from "@/app/components/crypto/FeaturesSection";
import HeroSection from "@/app/components/crypto/HeroSection";
import StepsSection from "@/app/components/crypto/StepsSection";
import Footer from "@/app/components/home/Footer";

export const metadata = {
  title: "Crypto | Wolfstoke",
  description:
    "Trading de criptomoedas: desafio em 4 fases, contas até US$1M, payouts de 90% e desafios sem limite de tempo.",
};

export default function CryptoPage() {
  return (
    <div className="relative text-foreground">
      <Header />
      <main>
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
