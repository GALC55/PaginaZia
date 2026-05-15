import { FacePortrait } from "./FacePortrait";
import { SiteImage } from "./SiteImage";

const CREDS = [
  { yr: "2013", what: "Médica cirujana — Universidad de los Andes, Bogotá." },
  { yr: "2016", what: "Especialización en Medicina Estética — Universidad CES." },
  { yr: "2019", what: "Fellowship en Medicina Regenerativa — Buenos Aires." },
  { yr: "2024", what: "Certificación MD Codes™ y técnicas avanzadas de armonización." },
];

export function About() {
  return (
    <section className="about section-pad" id="nosotros">
      <div className="wrap wrap-grid">
        <div className="portrait-wrap">
          <div className="frame" />
          <div className="portrait">
            <SiteImage
              slot="about"
              alt="Doctora"
              fallback={<FacePortrait variant="after" hue={25} seed={7} />}
            />
          </div>
        </div>
        <div>
          <span className="eyebrow">La doctora</span>
          <h2>
            Ciencia, arte y <em>escucha</em>
          </h2>
          <p className="lede">
            La Dra. Valentina Salcedo lidera ZIA con una filosofía clara: realzar lo
            que ya es bello, no imponer un molde. Su práctica une medicina regenerativa,
            armonización facial y un protocolo de seguimiento que acompaña a cada
            paciente mucho más allá de la sesión.
          </p>
          <ul className="creds">
            {CREDS.map((c) => (
              <li key={c.yr}>
                <span className="yr">{c.yr}</span>
                <span className="what">{c.what}</span>
              </li>
            ))}
          </ul>
          <p className="signature">— Dra. Valentina Salcedo</p>
        </div>
      </div>
    </section>
  );
}
