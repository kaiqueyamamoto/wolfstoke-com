export default function ETFsHeader() {
  return (
    <header className="sticky top-0 z-20 bg-black backdrop-blur">
      <div className="navbar mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex items-center gap-3">
          <a href="/" className="flex items-center gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                Wolfstoke
              </p>
              <p className="text-xs text-gray-500">Hub de Investimentos Globais</p>
            </div>
          </a>
        </div>
        <div className="flex-1" />
        <div className="hidden items-center gap-3 text-sm md:flex">
          <a href="/" className="text-gray-300 hover:text-accent">
            Início
          </a>
          <a href="/crypto" className="text-gray-300 hover:text-accent">
            Crypto
          </a>
          <a href="/posts" className="text-gray-300 hover:text-accent">
            Posts
          </a>
          <a href="#types" className="text-gray-300 hover:text-accent">
            Tipos
          </a>
          <a href="#taxation" className="text-gray-300 hover:text-accent">
            Tributação
          </a>
          <a href="#strategies" className="text-gray-300 hover:text-accent">
            Estratégias
          </a>
        </div>
      </div>
    </header>
  );
}
