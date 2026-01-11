export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-30">
      <div className="absolute left-12 top-24 h-72 w-72 rounded-full bg-secondary blur-3xl" />
      <div className="absolute right-[-5%] top-10 h-72 w-72 rounded-full bg-accent blur-3xl" />
      <div className="absolute bottom-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary blur-3xl" />
    </div>
  );
}
