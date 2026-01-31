import React from "react";

interface DataCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
  subtitle?: string;
  badge?: string;
  trend?: 'up' | 'down' | 'neutral';
  loading?: boolean;
}

export default function DataCard({
  title,
  value,
  change,
  icon,
  subtitle,
  badge,
  trend,
  loading = false,
}: DataCardProps) {
  // Determinar cor da mudança baseado no valor ou trend
  const getChangeColor = () => {
    if (trend) {
      if (trend === 'up') return 'text-[--color-price-up]';
      if (trend === 'down') return 'text-[--color-price-down]';
      return 'text-[--color-muted]';
    }

    if (change === undefined) return 'text-[--color-muted]';
    if (Math.abs(change) < 0.01) return 'text-[--color-muted]';
    return change > 0 ? 'text-[--color-price-up]' : 'text-[--color-price-down]';
  };

  const changeColor = getChangeColor();
  const changeIcon = change !== undefined && Math.abs(change) >= 0.01
    ? change > 0 ? '▲' : '▼'
    : '—';

  if (loading) {
    return (
      <div className="bg-[--color-surface] border border-[--color-border-subtle] rounded-lg p-4 animate-pulse">
        <div className="h-4 bg-[--color-bg-card] rounded w-2/3 mb-2" />
        <div className="h-8 bg-[--color-bg-card] rounded w-1/2 mb-2" />
        <div className="h-3 bg-[--color-bg-card] rounded w-3/4" />
      </div>
    );
  }

  return (
    <div className="bg-[--color-surface] border border-[--color-border-subtle] rounded-lg p-4
                    hover:border-[--color-border-strong] transition-all duration-200
                    hover:shadow-lg hover:shadow-[--color-accent-blue]/5">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-[--color-muted] font-medium">{title}</span>
        <div className="flex items-center gap-2">
          {badge && (
            <span className="px-2 py-0.5 bg-[--color-accent]/20 text-[--color-accent]
                           text-xs rounded-full font-medium">
              {badge}
            </span>
          )}
          {icon && <span className="text-[--color-muted]">{icon}</span>}
        </div>
      </div>

      {/* Value */}
      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-2xl font-semibold text-[--color-foreground] font-mono">
          {value}
        </span>
        {change !== undefined && (
          <span className={`text-sm font-medium ${changeColor} flex items-center gap-1`}>
            <span className="text-xs">{changeIcon}</span>
            <span>{change > 0 ? '+' : ''}{change.toFixed(2)}%</span>
          </span>
        )}
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-xs text-[--color-muted]">{subtitle}</p>
      )}
    </div>
  );
}
