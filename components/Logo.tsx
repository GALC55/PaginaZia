export function Logo({ size = 42 }: { size?: number }) {
  return (
    <img
      src="/logo.png"
      alt="Zia"
      width={size}
      height={size}
      style={{ width: size, height: size, objectFit: "contain", display: "block" }}
    />
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
