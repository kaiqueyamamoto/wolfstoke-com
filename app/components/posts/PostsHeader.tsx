export default function PostsHeader() {
  return (
    <header className="sticky top-0 z-20 bg-black backdrop-blur">
      <div className="navbar mx-auto max-w-6xl rounded-box px-4 md:px-6">
        <a href="/" className="flex items-center gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
              Wolfstoke
            </p>
            <p className="text-xs text-gray-500">Hub de Investimentos Globais</p>
          </div>
        </a>
        <div className="flex-1" />
        <div className="hidden items-center gap-3 text-sm md:flex">
          <a href="/" className="text-gray-300 hover:text-accent">
            Início
          </a>
          <a href="/crypto" className="text-gray-300 hover:text-accent">
            Crypto
          </a>
          <a href="/etfs" className="text-gray-300 hover:text-accent">
            ETFs
          </a>
          <a href="/solucoes" className="text-gray-300 hover:text-accent">
            Soluções
          </a>
          <a href="/posts" className="text-accent font-semibold">
            Posts
          </a>
        </div>
      </div>
    </header>
  );
}
