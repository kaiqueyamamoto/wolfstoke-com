"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  basePath = "/posts",
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const getPageUrl = (page: number) => {
    if (page === 1) {
      return basePath;
    }
    return `${basePath}?page=${page}`;
  };

  // Calcular quais páginas mostrar
  const getVisiblePages = () => {
    const delta = 2; // Número de páginas a mostrar de cada lado
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="mt-12 flex justify-center">
      <nav className="flex items-center gap-2" aria-label="Navegação de páginas">
        {/* Botão Anterior */}
        {currentPage > 1 ? (
          <a
            href={getPageUrl(currentPage - 1)}
            className="px-6 py-3 bg-[--color-accent] text-white rounded font-semibold hover:bg-[--color-secondary] transition-colorsoutline btn-sm border-white/20 text-foreground hover:border-accent hover:bg-accent/10"
          >
            ← Anterior
          </a>
        ) : (
          <button
            disabled
            className="px-6 py-3 bg-[--color-accent] text-white rounded font-semibold hover:bg-[--color-secondary] transition-colorsoutline btn-sm border-white/10 text-muted opacity-50"
          >
            ← Anterior
          </button>
        )}

        {/* Números de página */}
        <div className="hidden items-center gap-1 sm:flex">
          {visiblePages.map((page, index) => {
            if (page === "...") {
              return (
                <span
                  key={`dots-${index}`}
                  className="px-2 text-muted"
                >
                  ...
                </span>
              );
            }

            const pageNum = page as number;
            const isActive = pageNum === currentPage;

            return (
              <a
                key={pageNum}
                href={getPageUrl(pageNum)}
                className={`px-6 py-3 bg-[--color-accent] text-white rounded font-semibold hover:bg-[--color-secondary] transition-colorssm min-w-[2.5rem] border ${
                  isActive
                    ? "border-accent bg-accent/20 text-accent"
                    : "border-white/20 bg-transparent text-foreground hover:border-accent/50 hover:bg-accent/10"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {pageNum}
              </a>
            );
          })}
        </div>

        {/* Página atual em mobile */}
        <div className="flex items-center gap-2 sm:hidden">
          <span className="text-sm text-muted">
            Página {currentPage} de {totalPages}
          </span>
        </div>

        {/* Botão Próximo */}
        {currentPage < totalPages ? (
          <a
            href={getPageUrl(currentPage + 1)}
            className="px-6 py-3 bg-[--color-accent] text-white rounded font-semibold hover:bg-[--color-secondary] transition-colorsoutline btn-sm border-white/20 text-foreground hover:border-accent hover:bg-accent/10"
          >
            Próximo →
          </a>
        ) : (
          <button
            disabled
            className="px-6 py-3 bg-[--color-accent] text-white rounded font-semibold hover:bg-[--color-secondary] transition-colorsoutline btn-sm border-white/10 text-muted opacity-50"
          >
            Próximo →
          </button>
        )}
      </nav>
    </div>
  );
}
