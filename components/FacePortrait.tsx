type Props = { variant?: "before" | "after"; hue?: number; seed?: number };

export function FacePortrait({ variant = "before", hue = 25, seed = 0 }: Props) {
  const sat = variant === "after" ? 0.04 : 0.02;
  const L1 = variant === "after" ? 88 : 80;
  const L2 = variant === "after" ? 72 : 64;
  const blemishOpacity = variant === "after" ? 0 : 0.5;
  const wrinkleOpacity = variant === "after" ? 0.06 : 0.32;
  const lipColor =
    variant === "after"
      ? `oklch(55% 0.12 ${hue})`
      : `oklch(48% 0.06 ${hue})`;
  const cheekBlush = variant === "after" ? 0.35 : 0.1;
  const noseW = 14 + (seed % 3);
  const eyeY = 165 + (seed % 5);
  const uid = `${variant}-${seed}`;

  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      className="face"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`bg-${uid}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor={`oklch(96% 0.01 ${hue + 40})`} />
          <stop offset="1" stopColor={`oklch(88% 0.015 ${hue + 20})`} />
        </linearGradient>
        <radialGradient id={`skin-${uid}`} cx="50%" cy="40%" r="60%">
          <stop offset="0" stopColor={`oklch(${L1}% ${sat} ${hue})`} />
          <stop offset="1" stopColor={`oklch(${L2}% ${sat} ${hue})`} />
        </radialGradient>
        <radialGradient id={`cheek-${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor={`oklch(75% 0.08 ${hue})`} stopOpacity={cheekBlush} />
          <stop offset="1" stopColor={`oklch(75% 0.08 ${hue})`} stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="500" fill={`url(#bg-${uid})`} />

      <g opacity="0.06">
        {Array.from({ length: 40 }).map((_, i) => (
          <rect key={i} x={i * 10} y="0" width="1" height="500" fill={`oklch(60% 0.05 ${hue})`} />
        ))}
      </g>

      <path d="M150 380 L150 460 L250 460 L250 380 Z" fill={`url(#skin-${uid})`} />
      <path
        d="M60 500 C90 430 140 410 200 410 C260 410 310 430 340 500 Z"
        fill={`oklch(${variant === "after" ? 30 : 32}% 0.04 ${hue + 240})`}
      />

      <ellipse cx="200" cy="220" rx="115" ry="145" fill={`url(#skin-${uid})`} />

      <path
        d="M85 180 C85 100 130 60 200 60 C275 60 320 105 318 180 C318 150 290 130 260 135 C255 110 230 100 200 100 C170 100 145 115 135 140 C115 140 85 150 85 180 Z"
        fill={`oklch(${variant === "after" ? 28 : 25}% 0.03 ${hue + 280})`}
      />

      <ellipse cx="148" cy="250" rx="32" ry="22" fill={`url(#cheek-${uid})`} />
      <ellipse cx="252" cy="250" rx="32" ry="22" fill={`url(#cheek-${uid})`} />

      <path d={`M150 ${eyeY - 18} q 18 -6 36 0`} stroke={`oklch(30% 0.04 ${hue + 280})`} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d={`M214 ${eyeY - 18} q 18 -6 36 0`} stroke={`oklch(30% 0.04 ${hue + 280})`} strokeWidth="3" fill="none" strokeLinecap="round" />

      <ellipse cx="168" cy={eyeY} rx="9" ry="5" fill={`oklch(30% 0.04 ${hue + 240})`} />
      <ellipse cx="232" cy={eyeY} rx="9" ry="5" fill={`oklch(30% 0.04 ${hue + 240})`} />

      <path
        d={`M200 ${eyeY + 8} q -${noseW} 50 -6 60 q 6 4 12 0 q ${noseW} -10 -6 -60`}
        stroke={`oklch(${L2 - 8}% ${sat} ${hue})`}
        strokeWidth="1.5"
        fill="none"
      />

      <path d="M170 300 Q200 290 230 300 Q200 318 170 300 Z" fill={lipColor} />
      <path d="M170 300 Q200 312 230 300" stroke={`oklch(40% 0.06 ${hue})`} strokeWidth="0.8" fill="none" opacity="0.6" />

      <g opacity={wrinkleOpacity} stroke={`oklch(60% 0.02 ${hue + 30})`} strokeWidth="0.7" fill="none">
        <path d="M132 200 q 14 -4 26 6" />
        <path d="M242 200 q 14 -4 26 6" />
        <path d="M148 280 q 6 8 -2 22" />
        <path d="M252 280 q -6 8 2 22" />
        <path d="M180 340 q 20 4 40 0" />
        <path d="M170 360 q 30 5 60 0" />
      </g>

      <g opacity={blemishOpacity} fill={`oklch(58% 0.08 ${hue + 10})`}>
        <circle cx="155" cy="225" r="2.2" />
        <circle cx="245" cy="232" r="1.8" />
        <circle cx="200" cy="260" r="1.4" />
        <circle cx="180" cy="245" r="1.2" />
      </g>

      {variant === "after" && (
        <>
          <ellipse cx="170" cy="200" rx="10" ry="14" fill="white" opacity="0.18" />
          <ellipse cx="230" cy="200" rx="10" ry="14" fill="white" opacity="0.18" />
          <ellipse cx="200" cy="245" rx="14" ry="8" fill="white" opacity="0.14" />
        </>
      )}
    </svg>
  );
}
