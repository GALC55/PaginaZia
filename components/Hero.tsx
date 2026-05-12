import { PetalDeco } from "./Logo";
import { FacePortrait } from "./FacePortrait";

export function Hero() {
  return (
    <section className="hero" id="top">
      <PetalDeco className="petal-bg tl" />
      <PetalDeco className="petal-bg br" />
      <div className="copy">
        <span className="eyebrow">Medicina estética y regenerativa</span>
        <h1>
          Tu belleza,
          <br />
          <em>regenerada</em> <span className="accent">desde adentro</span>
        </h1>
        <p className="lede">
          En ZIA combinamos medicina regenerativa con técnicas estéticas avanzadas
          para resultados naturales que respetan tu identidad. Cada rostro es único;
          cada protocolo, también.
        </p>
        <div className="ctas">
          <a href="#casos" className="btn btn-primary">
            Ver casos <span className="arrow" />
          </a>
          <a href="#contacto" className="btn btn-ghost">
            Reservar valoración
          </a>
        </div>
      </div>
      <div className="visual">
        <div className="frame" />
        <div className="portrait">
          <FacePortrait variant="after" hue={20} seed={9} />
        </div>
        <div className="badge">
          <div>
            <span className="num">+1.2K</span>
            pacientes
            <br />
            satisfechas
          </div>
        </div>
      </div>
    </section>
  );
}
