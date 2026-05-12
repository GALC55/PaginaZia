export function Logo({ size = 42 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path d="M36 22 Q50 4 64 22" stroke="oklch(70% 0.09 75)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M50 50 C40 48 32 38 36 20 C42 22 48 28 50 35 Z" stroke="oklch(34% 0.095 5)" strokeWidth="2" fill="none" />
      <path d="M50 50 C60 48 68 38 64 20 C58 22 52 28 50 35 Z" stroke="oklch(62% 0.105 5)" strokeWidth="2" fill="none" />
      <path d="M50 52 C46 42 48 32 50 18 C52 32 54 42 50 52 Z" stroke="oklch(34% 0.095 5)" strokeWidth="2" fill="none" />
      <path d="M50 78 C36 74 28 64 30 56 C42 56 48 64 50 72 Z" stroke="oklch(70% 0.09 75)" strokeWidth="1.5" fill="none" />
      <path d="M50 78 C64 74 72 64 70 56 C58 56 52 64 50 72 Z" stroke="oklch(70% 0.09 75)" strokeWidth="1.5" fill="none" />
      <line x1="50" y1="50" x2="50" y2="78" stroke="oklch(34% 0.095 5)" strokeWidth="1.6" />
      <rect x="46" y="78" width="8" height="14" stroke="oklch(34% 0.095 5)" strokeWidth="1.4" fill="none" />
      <line x1="50" y1="92" x2="50" y2="97" stroke="oklch(34% 0.095 5)" strokeWidth="1.4" />
      <circle cx="50" cy="100" r="1.2" fill="oklch(62% 0.105 5)" />
    </svg>
  );
}

export function PetalDeco({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 300 300" fill="none">
      <g opacity="0.9">
        <path d="M150 40 C120 60 100 110 130 170 C160 130 175 90 150 40 Z" stroke="oklch(70% 0.09 75)" strokeWidth="1" fill="none" />
        <path d="M150 40 C180 60 200 110 170 170 C140 130 125 90 150 40 Z" stroke="oklch(62% 0.105 5)" strokeWidth="1" fill="none" />
        <path d="M120 180 C90 200 80 240 110 260 C140 250 145 220 120 180 Z" stroke="oklch(70% 0.09 75)" strokeWidth="0.8" fill="none" />
      </g>
    </svg>
  );
}
