"use client";

import { useCallback, useEffect, useRef } from "react";
import { FacePortrait } from "./FacePortrait";
import { SiteImage } from "./SiteImage";
import type { CaseStudy } from "@/lib/data";

type Props = {
  caseData: CaseStudy;
  index: number;
  position: number;
  setPosition: (n: number) => void;
};

export function BeforeAfterSlider({ caseData, index, position, setPosition }: Props) {
  const slotBase = `case_${index + 1}`;
  const frameRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const onMove = useCallback(
    (clientX: number) => {
      const el = frameRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const pct = ((clientX - rect.left) / rect.width) * 100;
      setPosition(Math.max(2, Math.min(98, pct)));
    },
    [setPosition]
  );

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!draggingRef.current) return;
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      onMove(x);
    };
    const stop = () => {
      draggingRef.current = false;
      document.body.style.userSelect = "";
    };
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

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    draggingRef.current = true;
    document.body.style.userSelect = "none";
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    onMove(x);
  };

  return (
    <div
      className="ba-frame"
      ref={frameRef}
      onMouseDown={startDrag}
      onTouchStart={startDrag}
      style={{ ["--ba-pos" as string]: `${position}%` }}
    >
      <div className="ba-img">
        <SiteImage
          slot={`${slotBase}_before`}
          alt="Antes"
          fallback={<FacePortrait variant="before" hue={caseData.hue} seed={caseData.seed} />}
        />
      </div>
      <div className="ba-after-wrap">
        <div className="ba-img">
          <SiteImage
            slot={`${slotBase}_after`}
            alt="Después"
            fallback={<FacePortrait variant="after" hue={caseData.hue} seed={caseData.seed} />}
          />
        </div>
      </div>
      <span className="ba-label before">Antes</span>
      <span className="ba-label after">Después</span>
      <div className="ba-handle">
        <div className="ba-knob">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
