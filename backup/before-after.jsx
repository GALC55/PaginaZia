/* global React */
const { useState, useRef, useEffect, useCallback } = React;

/* ────────────────────────────────────────────────────
   Placeholder portrait — striped/gradient face silhouette
   Two variants per case so the BEFORE/AFTER differ visibly.
   ──────────────────────────────────────────────────── */
const FacePortrait = ({ variant = "before", hue = 25, seed = 0 }) => {
  const sat = variant === "after" ? 0.04 : 0.02;
  const L1 = variant === "after" ? 88 : 80;
  const L2 = variant === "after" ? 72 : 64;
  const blemishOpacity = variant === "after" ? 0 : 0.5;
  const wrinkleOpacity = variant === "after" ? 0.06 : 0.32;
  const lipColor = variant === "after"
    ? `oklch(55% 0.12 ${hue})`
    : `oklch(48% 0.06 ${hue})`;
  const cheekBlush = variant === "after" ? 0.35 : 0.1;

  // Subtle variation by seed
  const noseW = 14 + (seed % 3);
  const eyeY = 165 + (seed % 5);

  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className="face" aria-hidden="true">
      <defs>
        <linearGradient id={`bg-${variant}-${seed}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor={`oklch(96% 0.01 ${hue + 40})`} />
          <stop offset="1" stopColor={`oklch(88% 0.015 ${hue + 20})`} />
        </linearGradient>
        <radialGradient id={`skin-${variant}-${seed}`} cx="50%" cy="40%" r="60%">
          <stop offset="0" stopColor={`oklch(${L1}% ${sat} ${hue})`} />
          <stop offset="1" stopColor={`oklch(${L2}% ${sat} ${hue})`} />
        </radialGradient>
        <radialGradient id={`cheek-${variant}-${seed}`} cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor={`oklch(75% 0.08 ${hue}) `} stopOpacity={cheekBlush} />
          <stop offset="1" stopColor={`oklch(75% 0.08 ${hue})`} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* background */}
      <rect width="400" height="500" fill={`url(#bg-${variant}-${seed})`} />

      {/* subtle vertical stripes for texture */}
      <g opacity="0.06">
        {Array.from({ length: 40 }).map((_, i) => (
          <rect key={i} x={i * 10} y="0" width="1" height="500" fill={`oklch(60% 0.05 ${hue})`} />
        ))}
      </g>

      {/* neck */}
      <path d="M150 380 L150 460 L250 460 L250 380 Z" fill={`url(#skin-${variant}-${seed})`} />
      {/* shoulder */}
      <path d="M60 500 C90 430 140 410 200 410 C260 410 310 430 340 500 Z" fill={`oklch(${variant === "after" ? 30 : 32}% 0.04 ${hue + 240})`} />

      {/* head shape (oval) */}
      <ellipse cx="200" cy="220" rx="115" ry="145" fill={`url(#skin-${variant}-${seed})`} />

      {/* hair */}
      <path d="M85 180 C85 100 130 60 200 60 C275 60 320 105 318 180 C318 150 290 130 260 135 C255 110 230 100 200 100 C170 100 145 115 135 140 C115 140 85 150 85 180 Z"
            fill={`oklch(${variant === "after" ? 28 : 25}% 0.03 ${hue + 280})`} />

      {/* cheek blush */}
      <ellipse cx="148" cy="250" rx="32" ry="22" fill={`url(#cheek-${variant}-${seed})`} />
      <ellipse cx="252" cy="250" rx="32" ry="22" fill={`url(#cheek-${variant}-${seed})`} />

      {/* eyebrows */}
      <path d={`M150 ${eyeY - 18} q 18 -6 36 0`} stroke={`oklch(30% 0.04 ${hue + 280})`} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d={`M214 ${eyeY - 18} q 18 -6 36 0`} stroke={`oklch(30% 0.04 ${hue + 280})`} strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* eyes */}
      <ellipse cx="168" cy={eyeY} rx="9" ry="5" fill={`oklch(30% 0.04 ${hue + 240})`} />
      <ellipse cx="232" cy={eyeY} rx="9" ry="5" fill={`oklch(30% 0.04 ${hue + 240})`} />

      {/* nose */}
      <path d={`M200 ${eyeY + 8} q -${noseW} 50 -6 60 q 6 4 12 0 q ${noseW} -10 -6 -60`}
            stroke={`oklch(${L2 - 8}% ${sat} ${hue})`} strokeWidth="1.5" fill="none" />

      {/* lips */}
      <path d="M170 300 Q200 290 230 300 Q200 318 170 300 Z" fill={lipColor} />
      <path d="M170 300 Q200 312 230 300" stroke={`oklch(40% 0.06 ${hue})`} strokeWidth="0.8" fill="none" opacity="0.6" />

      {/* wrinkles / fine lines (more on BEFORE) */}
      <g opacity={wrinkleOpacity} stroke={`oklch(60% 0.02 ${hue + 30})`} strokeWidth="0.7" fill="none">
        <path d="M132 200 q 14 -4 26 6" />
        <path d="M242 200 q 14 -4 26 6" />
        <path d="M148 280 q 6 8 -2 22" />
        <path d="M252 280 q -6 8 2 22" />
        <path d="M180 340 q 20 4 40 0" />
        <path d="M170 360 q 30 5 60 0" />
      </g>

      {/* blemishes (BEFORE only) */}
      <g opacity={blemishOpacity} fill={`oklch(58% 0.08 ${hue + 10})`}>
        <circle cx="155" cy="225" r="2.2" />
        <circle cx="245" cy="232" r="1.8" />
        <circle cx="200" cy="260" r="1.4" />
        <circle cx="180" cy="245" r="1.2" />
      </g>

      {/* highlight glow for AFTER */}
      {variant === "after" && (
        <>
          <ellipse cx="170" cy="200" rx="10" ry="14" fill="white" opacity="0.18" />
          <ellipse cx="230" cy="200" rx="10" ry="14" fill="white" opacity="0.18" />
          <ellipse cx="200" cy="245" rx="14" ry="8" fill="white" opacity="0.14" />
        </>
      )}
    </svg>
  );
};

/* ────────────────────────────────────────────────────
   Before / After interactive slider
   ──────────────────────────────────────────────────── */
const BeforeAfterSlider = ({ caseData, position, setPosition }) => {
  const frameRef = useRef(null);
  const draggingRef = useRef(false);

  const onMove = useCallback((clientX) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(2, Math.min(98, pct)));
  }, [setPosition]);

  useEffect(() => {
    const handleMove = (e) => {
      if (!draggingRef.current) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      onMove(x);
    };
    const stop = () => { draggingRef.current = false; document.body.style.userSelect = ""; };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove, { passive: true });
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
  }, [onMove]);

  const startDrag = (e) => {
    draggingRef.current = true;
    document.body.style.userSelect = "none";
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    onMove(x);
  };

  return (
    <div className="ba-frame" ref={frameRef}
         onMouseDown={startDrag} onTouchStart={startDrag}>
      <div className="ba-img">
        <FacePortrait variant="before" hue={caseData.hue} seed={caseData.seed} />
      </div>
      <div className="ba-after-wrap" style={{ width: `${position}%` }}>
        <div className="ba-img" style={{ width: `${100 / (position / 100)}%` }}>
          <FacePortrait variant="after" hue={caseData.hue} seed={caseData.seed} />
        </div>
      </div>
      <span className="ba-label before">Antes</span>
      <span className="ba-label after">Después</span>
      <div className="ba-handle" style={{ left: `${position}%` }}>
        <div className="ba-knob">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};

window.FacePortrait = FacePortrait;
window.BeforeAfterSlider = BeforeAfterSlider;
