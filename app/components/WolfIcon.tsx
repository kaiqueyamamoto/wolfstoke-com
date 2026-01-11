interface WolfIconProps {
  className?: string;
  size?: number;
}

export default function WolfIcon({ className = "", size = 40 }: WolfIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Cabeça do lobo */}
      <ellipse cx="50" cy="35" rx="25" ry="30" fill="currentColor" />
      {/* Orelhas */}
      <path
        d="M32 15L38 5L44 15L32 15Z"
        fill="currentColor"
      />
      <path
        d="M56 15L62 5L68 15L56 15Z"
        fill="currentColor"
      />
      {/* Focinho */}
      <ellipse cx="50" cy="42" rx="10" ry="12" fill="white" />
      {/* Nariz */}
      <ellipse cx="50" cy="46" rx="4" ry="4" fill="currentColor" />
      {/* Olhos */}
      <circle cx="40" cy="32" r="5" fill="white" />
      <circle cx="60" cy="32" r="5" fill="white" />
      <circle cx="40" cy="32" r="2.5" fill="currentColor" />
      <circle cx="60" cy="32" r="2.5" fill="currentColor" />
      {/* Corpo */}
      <ellipse cx="50" cy="70" rx="20" ry="25" fill="currentColor" />
      {/* Cauda curvada */}
      <path
        d="M70 65Q85 55 90 60Q92 65 88 70Q85 75 72 72L70 65Z"
        fill="currentColor"
      />
    </svg>
  );
}
