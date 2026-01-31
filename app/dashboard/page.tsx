import DashboardLayout from "@/app/components/dashboard/DashboardLayout";
import TradingView from "@/app/components/dashboard/TradingView";

export const metadata = {
  title: "Trade | Wolfstoke",
  description: "Plataforma de trading — gráficos, livro de ofertas e ordens",
};

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <TradingView />
    </DashboardLayout>
  );
}
