import BackgroundEffects from "@/app/components/crypto/BackgroundEffects";
import ContactButtons from "@/app/components/ContactButtons";
import Footer from "@/app/components/home/Footer";
import HeroSection from "@/app/components/etfs/HeroSection";
import LiquiditySection from "@/app/components/etfs/LiquiditySection";
import MechanismSection from "@/app/components/etfs/MechanismSection";
import PerformanceSection from "@/app/components/etfs/PerformanceSection";
import RegulationSection from "@/app/components/etfs/RegulationSection";
import StrategiesSection from "@/app/components/etfs/StrategiesSection";
import TaxSection from "@/app/components/etfs/TaxSection";
import TypesSection from "@/app/components/etfs/TypesSection";
import Header from "@/app/components/Header";

export const metadata = {
  title: "ETFs no Brasil | Manifesto Educacional | Wolfstoke",
  description:
    "Compreenda como funcionam os Exchange Traded Funds (ETFs) no Brasil: estrutura, regulação, tributação e estratégias de alocação.",
};

export default function ETFsPage() {
  return (
    <div className="relative overflow-hidden text-foreground">
      <BackgroundEffects />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <MechanismSection />
        <RegulationSection />
        <TypesSection />
        <TaxSection />
        <PerformanceSection />
        <LiquiditySection />
        <StrategiesSection />
      </main>
      <Footer />
      <ContactButtons />
    </div>
  );
}
