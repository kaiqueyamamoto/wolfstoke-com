"use client";

import { useState } from "react";
import Link from "next/link";
import {
  DashboardIcon,
  PortfolioIcon,
  CandlestickIcon,
  ActivityIcon,
  NewsIcon,
  RobotIcon,
  BellIcon,
  PlayCircleIcon,
  LightningIcon,
  SettingsIcon,
} from "@/app/components/dashboard/Icons";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const menuSections = [
  {
    title: "Principal",
    items: [
      { icon: <DashboardIcon size={18} />, label: "Dashboard", href: "/dashboard" },
      { icon: <PortfolioIcon size={18} />, label: "Minha Carteira", href: "/portfolio" },
      { icon: <CandlestickIcon size={18} />, label: "Mercados", href: "/markets" },
    ],
  },
  {
    title: "Análise",
    items: [
      { icon: <ActivityIcon size={18} />, label: "Análise Técnica", href: "/analysis/technical" },
      { icon: <NewsIcon size={18} />, label: "Fundamentalista", href: "/analysis/fundamental" },
      { icon: <RobotIcon size={18} />, label: "IA para Carteiras", href: "/ai" },
    ],
  },
  {
    title: "Ferramentas",
    items: [
      { icon: <BellIcon size={18} />, label: "Alertas", href: "/alerts", badge: "3" },
      { icon: <PlayCircleIcon size={18} />, label: "Simulador", href: "/simulator" },
      { icon: <LightningIcon size={18} />, label: "Retroteste", href: "/backtest" },
    ],
  },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[--color-background]">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex lg:w-[240px] lg:flex-col lg:fixed lg:inset-y-0 lg:z-50
                        bg-[--color-surface] border-r border-[--color-border-subtle]">
        <SidebarContent />
      </aside>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Sidebar - Mobile */}
          <aside className="fixed left-0 top-0 bottom-0 w-[280px] bg-[--color-surface]
                          border-r border-[--color-border-subtle] z-50 lg:hidden
                          overflow-y-auto scrollbar-thin">
            <SidebarContent onClose={() => setIsMobileMenuOpen(false)} />
          </aside>
        </>
      )}

      {/* Main Content */}
      <div className="flex-1 lg:pl-[240px]">
        {/* Header */}
        <header className="sticky top-0 z-40 h-16 bg-[--color-surface]
                          border-b border-[--color-border-subtle] flex items-center px-6 gap-6">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[--color-foreground] hover:bg-[--color-bg-card] rounded
                     transition-colors"
            aria-label="Abrir menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo - Mobile Only */}
          <div className="flex items-center gap-2 lg:hidden">
            <span className="text-lg font-bold tracking-tight">WOLFSTOKE</span>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Header Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <button className="p-2.5 hover:bg-[--color-bg-card] rounded transition-colors">
              <svg className="w-5 h-5 text-[--color-muted] hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Notifications */}
            <button className="p-2.5 hover:bg-[--color-bg-card] rounded transition-colors relative">
              <svg className="w-5 h-5 text-[--color-muted] hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[--color-price-up] rounded-full" />
            </button>

            {/* User Menu */}
            <button className="flex items-center gap-3 p-2 hover:bg-[--color-bg-card] rounded transition-colors">
              <div className="w-8 h-8 bg-gradient-to-br from-[--color-accent] to-[--color-secondary]
                            rounded-full flex items-center justify-center text-sm font-bold">
                W
              </div>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-0">
          {children}
        </main>
      </div>
    </div>
  );
}

function SidebarContent({ onClose }: { onClose?: () => void }) {
  return (
    <>
      {/* Logo */}
      <div className="p-6 border-b border-[--color-border-subtle]">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none tracking-tight">WOLFSTOKE</span>
              <span className="text-xs text-[--color-muted] leading-none mt-1.5">Trading Platform</span>
            </div>
          </Link>
          {onClose && (
            <button
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-[--color-bg-card] rounded transition-colors"
              aria-label="Fechar menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 overflow-y-auto scrollbar-thin">
        {menuSections.map((section) => (
          <div key={section.title} className="mb-8">
            <h3 className="px-3 mb-3 text-xs font-bold text-[--color-muted] uppercase tracking-wider">
              {section.title}
            </h3>
            <div className="space-y-1">
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-3 px-3 py-2.5 rounded
                           text-sm font-medium text-[--color-muted]
                           hover:bg-[--color-bg-card] hover:text-white
                           transition-all duration-150 group"
                >
                  <span className="group-hover:text-[--color-accent-blue] transition-colors">
                    {item.icon}
                  </span>
                  <span className="flex-1">{item.label}</span>
                  {item.badge && (
                    <span className="px-2 py-0.5 bg-[--color-price-up]/20 text-[--color-price-up]
                                 text-xs rounded-full font-semibold">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-[--color-border-subtle]">
        <Link
          href="/settings"
          className="flex items-center gap-3 px-3 py-2.5 rounded
                   text-sm font-medium text-[--color-muted]
                   hover:bg-[--color-bg-card] hover:text-white
                   transition-all duration-150 group"
        >
          <span className="group-hover:text-[--color-accent-blue] transition-colors">
            <SettingsIcon size={18} />
          </span>
          <span>Configurações</span>
        </Link>
      </div>
    </>
  );
}
