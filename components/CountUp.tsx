"use client";

import { useEffect, useRef, useState } from "react";

type Props = { value: string };

function parseValue(v: string) {
  const match = v.match(/[\d.,]+/);
  if (!match) return { prefix: v, num: 0, suffix: "", decimals: 0, hasComma: false };
  const idx = v.indexOf(match[0]);
  const prefix = v.slice(0, idx);
  const suffix = v.slice(idx + match[0].length);
  const hasComma = match[0].includes(",");
  const clean = match[0].replace(/,/g, "");
  const num = Number(clean);
  const decimals = (clean.split(".")[1] || "").length;
  return { prefix, num, suffix, decimals, hasComma };
}

function format(n: number, decimals: number, hasComma: boolean) {
  const fixed = n.toFixed(decimals);
  if (!hasComma) return fixed;
  const [intPart, dec] = fixed.split(".");
  const withCommas = Number(intPart).toLocaleString("en-US");
  return dec ? `${withCommas}.${dec}` : withCommas;
}

export function CountUp({ value }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState<string>(() => {
    const { prefix, suffix } = parseValue(value);
    return `${prefix}0${suffix}`;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const { prefix, num, suffix, decimals, hasComma } = parseValue(value);

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || typeof IntersectionObserver === "undefined") {
      setDisplay(value);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.disconnect();
          const duration = 1500;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 4);
            const cur = num * eased;
            setDisplay(`${prefix}${format(cur, decimals, hasComma)}${suffix}`);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return <span ref={ref}>{display}</span>;
}
