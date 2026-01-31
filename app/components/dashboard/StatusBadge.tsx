import React from "react";

type BadgeVariant = 'new' | 'trending' | 'verified' | 'warning' | 'info' | 'success' | 'error';

interface StatusBadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  new: 'bg-[--color-status-new]/10 text-[--color-status-new] border-[--color-status-new]/20',
  trending: 'bg-[--color-status-trending]/10 text-[--color-status-trending] border-[--color-status-trending]/20',
  verified: 'bg-[--color-status-verified]/10 text-[--color-status-verified] border-[--color-status-verified]/20',
  warning: 'bg-[--color-status-warning]/10 text-[--color-status-warning] border-[--color-status-warning]/20',
  info: 'bg-[--color-accent-blue]/10 text-[--color-accent-blue] border-[--color-accent-blue]/20',
  success: 'bg-[--color-price-up]/10 text-[--color-price-up] border-[--color-price-up]/20',
  error: 'bg-[--color-price-down]/10 text-[--color-price-down] border-[--color-price-down]/20',
};

const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
};

export default function StatusBadge({
  variant,
  children,
  size = 'sm',
  className = '',
}: StatusBadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1 rounded-full border font-medium
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `.trim()}
    >
      {children}
    </span>
  );
}
