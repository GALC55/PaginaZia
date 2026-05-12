import { SERVICES } from "@/lib/data";
import type { JSX } from "react";

function SvcGlyph({ i }: { i: number }) {
  const glyphs: JSX.Element[] = [
    <path key="0" d="M4 16 Q12 4 20 16 Q12 22 4 16 Z M12 4 L12 22" strokeWidth="1.2" />,
    <path key="1" d="M6 12 Q12 4 18 12 Q12 20 6 12 Z" strokeWidth="1.2" />,
    <g key="2">
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="7" strokeDasharray="2 3" />
      <circle cx="12" cy="12" r="10" strokeDasharray="1 4" opacity="0.5" />
    </g>,
    <path key="3" d="M3 18 L12 4 L21 18 M7 12 L17 12" strokeWidth="1.2" />,
    <g key="4">
      <circle cx="12" cy="12" r="8" />
      <path d="M8 12 L11 15 L16 9" strokeWidth="1.4" />
    </g>,
    <path key="5" d="M12 3 C7 8 7 14 12 21 C17 14 17 8 12 3 Z M12 3 L12 21" strokeWidth="1.2" />,
  ];
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="glyph"
    >
      {glyphs[i % glyphs.length]}
    </svg>
  );
}

export function Services() {
  return (
    <section className="services section-pad" id="tratamientos">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Tratamientos</span>
          <h2>
            Un protocolo para <em>cada historia</em>
          </h2>
          <p>
            Diseñamos cada plan sobre tu anatomía, tu edad biológica y tus objetivos.
            Nada estándar, nada de excesos.
          </p>
        </div>
        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <div className="svc" key={s.num}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span className="svc-num">— {s.num}</span>
                <SvcGlyph i={i} />
              </div>
              <h3>{s.title}</h3>
              <p className="svc-body">{s.body}</p>
              <div className="svc-foot">
                <span className="svc-time">◆ {s.time}</span>
                <a className="svc-link" href="#contacto">
                  Detalles →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
