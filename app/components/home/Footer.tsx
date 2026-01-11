import WolfIcon from "@/app/components/WolfIcon";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black px-4 py-8 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent to-secondary text-black">
            <WolfIcon size={24} className="text-black" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Wolfstoke</p>
            <p className="text-xs text-gray-400">
              Hub Inteligente de Investimentos Globais • 2025
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm md:grid-cols-4">
          <div>
            <p className="mb-2 font-semibold text-gray-400">Produto</p>
            <div className="space-y-1">
              <a className="link block text-gray-300 hover:text-accent" href="#markets">
                Mercados
              </a>
              <a className="link block text-gray-300 hover:text-accent" href="#features">
                Recursos
              </a>
            </div>
          </div>
          <div>
            <p className="mb-2 font-semibold text-gray-400">Suporte</p>
            <div className="space-y-1">
              <a className="link block text-gray-300 hover:text-accent" href="#faq">
                FAQ
              </a>
              <a className="link block text-gray-300 hover:text-accent" href="#">
                Central de Ajuda
              </a>
              <a className="link block text-gray-300 hover:text-accent" href="#">
                Contato
              </a>
            </div>
          </div>
          <div>
            <p className="mb-2 font-semibold text-gray-400">Legal</p>
            <div className="space-y-1">
              <a className="link block text-gray-300 hover:text-accent" href="#">
                Termos de Uso
              </a>
              <a className="link block text-gray-300 hover:text-accent" href="#">
                Privacidade
              </a>
            </div>
          </div>
          <div>
            <p className="mb-2 font-semibold text-gray-400">Empresa</p>
            <div className="space-y-1">
              <a className="link block text-gray-300 hover:text-accent" href="#">
                Sobre
              </a>
              <a className="link block text-gray-300 hover:text-accent" href="#">
                Blog
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-gray-800 pt-6 text-center text-xs text-gray-400">
        <p>
          A Wolfstoke é uma plataforma de tecnologia e não presta serviços de
          assessoria de investimentos. Rentabilidade passada não é garantia de
          rentabilidade futura. Todo investimento envolve riscos.
        </p>
        <p className="mt-2">© 2025 Wolfstoke. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
