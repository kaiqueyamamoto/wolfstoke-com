"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Início" },
    { href: "/dashboard", label: "Plataforma", comingSoon: true },
    { href: "/solucoes", label: "Soluções" },
    { href: "/crypto", label: "Mercados" },
    { href: "/posts", label: "Recursos" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[--color-border-subtle] shadow-sm">
      <div className="mx-auto max-w-[1400px] px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <span className="text-xl font-bold text-[--color-foreground] tracking-tight">
              WOLFSTOKE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) =>
              "comingSoon" in item && item.comingSoon ? (
                <span
                  key={item.href}
                  className="text-sm font-medium text-[--color-muted] cursor-not-allowed"
                >
                  Em breve
                </span>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[--color-muted] hover:text-[--color-foreground]
                           transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <span
              className="px-6 py-2.5 bg-[--color-muted]/20 text-[--color-muted] text-sm font-semibold rounded
                       cursor-not-allowed"
            >
              Em breve
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[--color-foreground]"
            aria-label="Abrir menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[--color-border-subtle] py-6 bg-white">
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) =>
                "comingSoon" in item && item.comingSoon ? (
                  <span
                    key={item.href}
                    className="text-base font-medium text-[--color-muted] cursor-not-allowed"
                  >
                    Em breve
                  </span>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-medium text-[--color-muted] hover:text-[--color-foreground]
                             transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <span
                className="mt-4 px-6 py-3 bg-[--color-muted]/20 text-[--color-muted] text-center text-sm font-semibold rounded
                cursor-not-allowed inline-block w-full"
              >
                Em breve
              </span>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
