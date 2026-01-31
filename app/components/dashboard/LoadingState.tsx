import React from "react";

interface LoadingStateProps {
  type?: 'spinner' | 'skeleton' | 'dots';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

export default function LoadingState({
  type = 'spinner',
  size = 'md',
  text,
}: LoadingStateProps) {
  if (type === 'skeleton') {
    return <SkeletonLoader size={size} />;
  }

  if (type === 'dots') {
    return <DotsLoader size={size} text={text} />;
  }

  return <SpinnerLoader size={size} text={text} />;
}

function SpinnerLoader({ size, text }: { size: string; text?: string }) {
  const sizeClasses = {
    sm: 'w-6 h-6 border-2',
    md: 'w-8 h-8 border-4',
    lg: 'w-12 h-12 border-4',
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 gap-4">
      <div
        className={`
          ${sizeClasses[size as keyof typeof sizeClasses]}
          border-[--color-accent-blue] border-t-transparent
          rounded-full animate-spin
        `}
      />
      {text && (
        <p className="text-sm text-[--color-muted] animate-pulse">{text}</p>
      )}
    </div>
  );
}

function DotsLoader({ size, text }: { size: string; text?: string }) {
  const dotSizes = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-3 h-3',
  };

  const dotSize = dotSizes[size as keyof typeof dotSizes];

  return (
    <div className="flex flex-col items-center justify-center p-8 gap-4">
      <div className="flex items-center gap-2">
        <div className={`${dotSize} bg-[--color-accent-blue] rounded-full animate-bounce`} style={{ animationDelay: '0ms' }} />
        <div className={`${dotSize} bg-[--color-accent-blue] rounded-full animate-bounce`} style={{ animationDelay: '150ms' }} />
        <div className={`${dotSize} bg-[--color-accent-blue] rounded-full animate-bounce`} style={{ animationDelay: '300ms' }} />
      </div>
      {text && (
        <p className="text-sm text-[--color-muted]">{text}</p>
      )}
    </div>
  );
}

function SkeletonLoader({ size }: { size: string }) {
  const heights = {
    sm: 'h-4',
    md: 'h-6',
    lg: 'h-8',
  };

  return (
    <div className="space-y-4 animate-pulse">
      <div className={`${heights[size as keyof typeof heights]} bg-[--color-bg-card] rounded w-1/4`} />
      <div className="h-32 bg-[--color-bg-card] rounded" />
      <div className="grid grid-cols-3 gap-4">
        <div className="h-24 bg-[--color-bg-card] rounded" />
        <div className="h-24 bg-[--color-bg-card] rounded" />
        <div className="h-24 bg-[--color-bg-card] rounded" />
      </div>
    </div>
  );
}
