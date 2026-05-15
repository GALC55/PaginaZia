"use client";

import { useState } from "react";
import { CASES } from "@/lib/data";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { FacePortrait } from "./FacePortrait";
import { SiteImage } from "./SiteImage";

export function Cases() {
  const [idx, setIdx] = useState(0);
  const [pos, setPos] = useState(50);
  const c = CASES[idx];

  const change = (n: number) => {
    setIdx((idx + n + CASES.length) % CASES.length);
    setPos(50);
  };
  const select = (n: number) => {
    setIdx(n);
    setPos(50);
  };

  return (
    <section className="cases section-pad" id="casos">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Casos de éxito</span>
          <h2>
            Resultados <em>antes</em> y <em>después</em>
          </h2>
          <p>
            Arrastra el control para revelar la transformación. Cada caso es real,
            documentado y autorizado para publicación.
          </p>
        </div>

        <div className="ba-stage">
          <BeforeAfterSlider caseData={c} index={idx} position={pos} setPosition={setPos} />

          <div className="case-panel">
            <span className="eyebrow">Caso #{String(idx + 1).padStart(2, "0")}</span>
            <h3>{c.name}</h3>
            <p className="case-desc">{c.note}</p>
            <dl className="case-meta">
              <div>
                <dt>Edad</dt>
                <dd>{c.age}</dd>
              </div>
              <div>
                <dt>Tratamiento</dt>
                <dd>{c.tx}</dd>
              </div>
              <div>
                <dt>Sesiones</dt>
                <dd>{c.sessions}</dd>
              </div>
              <div>
                <dt>Resultado</dt>
                <dd>Permanente*</dd>
              </div>
            </dl>
            <div className="case-nav">
              <button onClick={() => change(-1)} aria-label="Caso anterior">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button onClick={() => change(1)} aria-label="Caso siguiente">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
              <span className="counter">
                <b>{String(idx + 1).padStart(2, "0")}</b> / {String(CASES.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        <div className="case-thumbs">
          {CASES.map((cs, i) => (
            <button
              key={i}
              className={`case-thumb${i === idx ? " active" : ""}`}
              onClick={() => select(i)}
            >
              <SiteImage
                slot={`case_${i + 1}_after`}
                alt={cs.name}
                fallback={<FacePortrait variant="after" hue={cs.hue} seed={cs.seed} />}
              />
              <span className="lbl">{cs.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
