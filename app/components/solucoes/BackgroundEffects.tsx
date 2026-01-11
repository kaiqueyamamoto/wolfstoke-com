export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-30">
      <div className="absolute left-10 top-24 h-80 w-80 rounded-full bg-accent blur-[120px]" />
      <div className="absolute right-[-10%] top-10 h-96 w-96 rounded-full bg-secondary blur-[120px]" />
      <div className="absolute bottom-[-10%] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary blur-[120px]" />
    </div>
  );
}
