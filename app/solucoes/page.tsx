import ContactButtons from "@/app/components/ContactButtons";
import CTASection from "@/app/components/solucoes/CTASection";
import FAQSection from "@/app/components/solucoes/FAQSection";
import HeroSection from "@/app/components/solucoes/HeroSection";
import IntegrationsSection from "@/app/components/solucoes/IntegrationsSection";
import InvestmentSection from "@/app/components/solucoes/InvestmentSection";
import NextStepsSection from "@/app/components/solucoes/NextStepsSection";
import ProcessSection from "@/app/components/solucoes/ProcessSection";
import Header from "@/app/components/Header";
import SolutionsSection from "@/app/components/solucoes/SolutionsSection";
import UseCasesSection from "@/app/components/solucoes/UseCasesSection";
import WhySection from "@/app/components/solucoes/WhySection";
import Footer from "@/app/components/home/Footer";

export const metadata = {
  title: "Desenvolvimento de Soluções para o Mercado Financeiro | Wolfstoke",
  description:
    "Desenvolvemos plataformas, sistemas e ferramentas sob medida para corretoras, asset managers, family offices, bancos, fintechs e fundos de investimento.",
};

export default function SolucoesPage() {
  return (
    <div className="relative text-foreground">
      <Header />
      <main>
        <HeroSection />
        <WhySection />
        <SolutionsSection />
        <IntegrationsSection />
        <ProcessSection />
        <InvestmentSection />
        <UseCasesSection />
        <NextStepsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <ContactButtons />
    </div>
  );
}
