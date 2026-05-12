import { Logo } from "./Logo";
import { SERVICES } from "@/lib/data";

export function Footer() {
  return (
    <footer className="site">
      <div className="wrap-foot">
        <div className="grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
              <Logo size={54} />
              <div className="brand-foot" style={{ fontSize: 32, marginBottom: 0 }}>
                ZIA
              </div>
            </div>
            <p className="tagline-foot">
              Medicina estética y regenerativa. Resultados naturales, respaldados por
              ciencia y arte.
            </p>
          </div>
          <div>
            <h4>Tratamientos</h4>
            <ul>
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.num}>
                  <a href="#tratamientos">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Clínica</h4>
            <ul>
              <li><a href="#nosotros">La doctora</a></li>
              <li><a href="#casos">Casos de éxito</a></li>
              <li><a href="#testimonios">Testimonios</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4>Encuéntranos</h4>
            <ul>
              <li>Cra. 11 #94-22 · Bogotá</li>
              <li>+57 300 123 4567</li>
              <li>hola@zia-estetica.co</li>
              <li>@zia.estetica</li>
            </ul>
          </div>
        </div>
        <div className="copy-bar">
          <span>© 2026 ZIA — Medicina Estética y Regenerativa</span>
          <span>Reg. SAS — INVIMA · Hecho con cuidado en Bogotá</span>
        </div>
      </div>
    </footer>
  );
}
