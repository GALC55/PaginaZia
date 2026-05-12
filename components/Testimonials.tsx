import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="testimonials section-pad" id="testimonios">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Testimonios</span>
          <h2>
            Confianza que <em>se siente</em>
          </h2>
          <p>Lo que dicen quienes han hecho parte de su transformación con nosotros.</p>
        </div>
        <div className="t-grid">
          {TESTIMONIALS.map((t, i) => (
            <div className="t-card" key={i}>
              <div className="quote-mark">&ldquo;</div>
              <div className="stars">★★★★★</div>
              <p className="body">{t.body}</p>
              <div className="meta">
                <div className="avatar">{t.initial}</div>
                <div className="who">
                  <b>{t.name}</b>
                  <span>{t.tx}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
