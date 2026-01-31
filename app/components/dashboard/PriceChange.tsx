import React from "react";

interface PriceChangeProps {
  value: number;
  timeframe?: string;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeStyles = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
};

const iconSizeStyles = {
  sm: 'text-[0.65rem]',
  md: 'text-xs',
  lg: 'text-sm',
};

export default function PriceChange({
  value,
  timeframe,
  showIcon = true,
  size = 'md',
  className = '',
}: PriceChangeProps) {
  const isPositive = value > 0;
  const isNeutral = Math.abs(value) < 0.01;

  const colorClass = isNeutral
    ? 'text-[--color-muted]'
    : isPositive
    ? 'text-[--color-price-up]'
    : 'text-[--color-price-down]';

  const icon = isNeutral ? '—' : isPositive ? '▲' : '▼';

  return (
    <span
      className={`
        inline-flex items-center gap-1 font-mono font-medium
        ${colorClass}
        ${sizeStyles[size]}
        ${className}
      `.trim()}
    >
      {showIcon && (
        <span className={iconSizeStyles[size]}>{icon}</span>
      )}
      <span>
        {isPositive && !isNeutral && '+'}{value.toFixed(2)}%
      </span>
      {timeframe && (
        <span className="text-xs opacity-60">({timeframe})</span>
      )}
    </span>
  );
}
