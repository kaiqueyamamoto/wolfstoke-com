import React from "react";

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

export default function EmptyState({
  icon,
  title,
  description,
  action,
  className = '',
}: EmptyStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center p-12 text-center ${className}`}>
      {/* Icon */}
      {icon && (
        <div className="text-[--color-muted] mb-4 text-4xl">
          {icon}
        </div>
      )}

      {/* Title */}
      <h3 className="text-lg font-semibold text-[--color-foreground] mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[--color-muted] mb-6 max-w-md">
        {description}
      </p>

      {/* Action Button */}
      {action && (
        <button
          onClick={action.onClick}
          className="px-6 py-2 bg-[--color-accent-blue] text-white rounded-lg
                   hover:bg-[--color-accent-blue]/90 transition-colors
                   focus:outline-none focus:ring-2 focus:ring-[--color-accent-blue] focus:ring-offset-2
                   focus:ring-offset-[--color-background]"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
