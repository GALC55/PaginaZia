/* global React, ReactDOM, BeforeAfterSlider, FacePortrait, TweaksPanel, useTweaks, TweakSection, TweakSlider, TweakToggle, TweakRadio, TweakSelect, TweakColor */
const { useState, useEffect, useMemo } = React;

/* ─── Data ─── */
const SERVICES = [
  { num: "01", title: "Toxina Botulínica", body: "Suavizamos líneas de expresión preservando tu gesto natural. Resultados visibles en 7 días.", time: "30 min", hue: 5 },
  { num: "02", title: "Ácido Hialurónico", body: "Volumen, contorno y proyección personalizados. Labios, surcos, pómulos y mandíbula.", time: "45 min", hue: 15 },
  { num: "03", title: "Bioestimulación con PRP", body: "Tu propio plasma rico en plaquetas regenera la piel desde adentro. 100 % autólogo.", time: "60 min", hue: 35 },
  { num: "04", title: "Hilos Tensores", body: "Reposicionamiento facial sin cirugía. Estimulan colágeno durante 18 meses.", time: "75 min", hue: 50 },
  { num: "05", title: "Peelings Médicos", body: "Renovación celular profunda. Manchas, textura, brillo. Protocolos por fototipo.", time: "40 min", hue: 65 },
  { num: "06", title: "Mesoterapia Capilar", body: "Detenemos la caída y reactivamos el folículo con vitaminas y factores de crecimiento.", time: "30 min", hue: 80 },
];

const CASES = [
  { name: "Rejuvenecimiento Facial",  age: "47 años", tx: "AH + PRP",        sessions: "3 sesiones", note: "Recuperación de volumen en pómulos y suavizado del surco nasogeniano. Piel luminosa.", hue: 18, seed: 1 },
  { name: "Bioestimulación",          age: "52 años", tx: "PRP + Radiesse",   sessions: "4 sesiones", note: "Mejora de la firmeza del tercio medio y atenuación de líneas finas con regeneración natural.", hue: 30, seed: 2 },
  { name: "Perfilado de Labios",      age: "29 años", tx: "Ácido Hialurónico",sessions: "1 sesión",  note: "Diseño personalizado del arco de Cupido respetando la proporción facial original.", hue: 8,  seed: 3 },
  { name: "Definición Mandibular",    age: "35 años", tx: "AH + Toxina",       sessions: "2 sesiones", note: "Realce del ángulo mandibular y armonización del óvalo facial con técnica MD Codes.", hue: 22, seed: 4 },
  { name: "Tratamiento de Manchas",   age: "41 años", tx: "Peeling + Mesoterapia", sessions: "5 sesiones", note: "Reducción significativa de melasma y unificación del tono. Piel renovada y luminosa.", hue: 55, seed: 5 },
];

const TESTIMONIALS = [
  { body: "Volví a verme al espejo y sonreír sin pensarlo. La Dra. escuchó cada detalle y respetó mis rasgos.", name: "Carolina M.", tx: "Bioestimulación · PRP", initial: "C" },
  { body: "Esperaba un cambio. Encontré naturalidad. Nadie nota qué me hice, todos notan que estoy bien.", name: "Sofía R.",     tx: "Ácido Hialurónico",    initial: "S" },
  { body: "Después de años buscando, ZIA es el único lugar donde sentí honestidad clínica y resultados reales.", name: "Mariana L.",  tx: "Hilos + Toxina",        initial: "M" },
];

/* ─── Logo mark (rose + syringe) ─── */
const Logo = ({ size = 42 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    {/* gold arc — sits over the petal junction, not a full circle */}
    <path d="M36 22 Q50 4 64 22" stroke="oklch(70% 0.09 75)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {/* tulip petals — wide opening at top, narrow base where stem meets */}
    <path d="M50 50 C40 48 32 38 36 20 C42 22 48 28 50 35 Z" stroke="oklch(34% 0.095 5)" strokeWidth="2" fill="none" />
    <path d="M50 50 C60 48 68 38 64 20 C58 22 52 28 50 35 Z" stroke="oklch(62% 0.105 5)" strokeWidth="2" fill="none" />
    <path d="M50 52 C46 42 48 32 50 18 C52 32 54 42 50 52 Z" stroke="oklch(34% 0.095 5)" strokeWidth="2" fill="none" />
    {/* leaves — bulging upward, tips outward */}
    <path d="M50 78 C36 74 28 64 30 56 C42 56 48 64 50 72 Z" stroke="oklch(70% 0.09 75)" strokeWidth="1.5" fill="none" />
    <path d="M50 78 C64 74 72 64 70 56 C58 56 52 64 50 72 Z" stroke="oklch(70% 0.09 75)" strokeWidth="1.5" fill="none" />
    {/* syringe */}
    <line x1="50" y1="50" x2="50" y2="78" stroke="oklch(34% 0.095 5)" strokeWidth="1.6" />
    <rect x="46" y="78" width="8" height="14" stroke="oklch(34% 0.095 5)" strokeWidth="1.4" fill="none" />
    <line x1="50" y1="92" x2="50" y2="97" stroke="oklch(34% 0.095 5)" strokeWidth="1.4" />
    <circle cx="50" cy="100" r="1.2" fill="oklch(62% 0.105 5)" />
  </svg>
);

/* ─── Petal decoration ─── */
const PetalDeco = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 300 300" fill="none">
    <g opacity="0.9">
      <path d="M150 40 C120 60 100 110 130 170 C160 130 175 90 150 40 Z" stroke="oklch(70% 0.09 75)" strokeWidth="1" fill="none" />
      <path d="M150 40 C180 60 200 110 170 170 C140 130 125 90 150 40 Z" stroke="oklch(62% 0.105 5)" strokeWidth="1" fill="none" />
      <path d="M120 180 C90 200 80 240 110 260 C140 250 145 220 120 180 Z" stroke="oklch(70% 0.09 75)" strokeWidth="0.8" fill="none" />
    </g>
  </svg>
);

/* ─── Top bar ─── */
const TopBar = () => (
  <div className="topbar">
    <div className="row">
      <div className="left">
        <span className="pill">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" style={{display:'inline-block',verticalAlign:'middle',marginRight:8}}>
            <path d="M12 2l2.39 7.36H22l-6.18 4.49 2.36 7.36L12 16.7l-6.18 4.51 2.36-7.36L2 9.36h7.61L12 2z" />
          </svg>
          Clínica certificada · 12 años de experiencia
        </span>
      </div>
      <div className="right">
        <a href="#contacto">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" style={{display:'inline-block',verticalAlign:'middle',marginRight:6}}>
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          +57 300 123 4567
        </a>
        <a href="#contacto">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" style={{display:'inline-block',verticalAlign:'middle',marginRight:6}}>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Cra. 11 #94-22, Bogotá
        </a>
      </div>
    </div>
  </div>
);

/* ─── Nav ─── */
const Nav = () => (
  <nav className="nav">
    <div className="row">
      <a href="#top" className="brand">
        <Logo size={42} />
        <span>ZIA</span>
      </a>
      <div className="links">
        <a href="#tratamientos">Tratamientos</a>
        <a href="#casos">Casos</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#testimonios">Testimonios</a>
        <a href="#contacto">Contacto</a>
      </div>
      <a href="#contacto" className="btn primary">
        Agenda <span className="arrow"></span>
      </a>
    </div>
  </nav>
);

/* ─── Hero ─── */
const Hero = () => (
  <section className="hero" id="top">
    <PetalDeco className="petal-bg tl" />
    <PetalDeco className="petal-bg br" />
    <div className="copy">
      <span className="eyebrow">Medicina estética y regenerativa</span>
      <h1>
        Tu belleza,<br/>
        <em>regenerada</em> <span className="accent">desde adentro</span>
      </h1>
      <p className="lede">
        En ZIA combinamos medicina regenerativa con técnicas estéticas avanzadas
        para resultados naturales que respetan tu identidad. Cada rostro es único;
        cada protocolo, también.
      </p>
      <div className="ctas">
        <a href="#casos" className="btn primary">Ver casos <span className="arrow"></span></a>
        <a href="#contacto" className="btn ghost">Reservar valoración</a>
      </div>
    </div>
    <div className="visual">
      <div className="frame"></div>
      <image-slot id="hero-portrait" shape="rect" placeholder="Retrato hero · 4:5"></image-slot>
      <div className="badge">
        <div>
          <span className="num">+1.2K</span>
          pacientes
          <br/>satisfechas
        </div>
      </div>
    </div>
  </section>
);

/* ─── Trust strip ─── */
const Trust = () => (
  <div className="trust">
    <div className="row">
      {[
        { n: "+1,200", l: "Tratamientos\nrealizados" },
        { n: "12", l: "Años de\nexperiencia clínica" },
        { n: "98%", l: "Pacientes que\nregresan" },
        { n: "100%", l: "Productos\ncertificados INVIMA" },
      ].map((it, i) => (
        <div key={i} className="item">
          <div className="num">{it.n}</div>
          <div className="lbl" style={{whiteSpace:"pre-line"}}>{it.l}</div>
        </div>
      ))}
    </div>
  </div>
);

/* ─── Service glyphs (minimal abstract icons) ─── */
const SvcGlyph = ({ i }) => {
  const glyphs = [
    <path key="0" d="M4 16 Q12 4 20 16 Q12 22 4 16 Z M12 4 L12 22" strokeWidth="1.2"/>,
    <path key="1" d="M6 12 Q12 4 18 12 Q12 20 6 12 Z" strokeWidth="1.2"/>,
    <g key="2"><circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="7" strokeDasharray="2 3"/><circle cx="12" cy="12" r="10" strokeDasharray="1 4" opacity="0.5"/></g>,
    <path key="3" d="M3 18 L12 4 L21 18 M7 12 L17 12" strokeWidth="1.2"/>,
    <g key="4"><circle cx="12" cy="12" r="8" /><path d="M8 12 L11 15 L16 9" strokeWidth="1.4"/></g>,
    <path key="5" d="M12 3 C7 8 7 14 12 21 C17 14 17 8 12 3 Z M12 3 L12 21" strokeWidth="1.2"/>,
  ];
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="glyph">
      {glyphs[i % glyphs.length]}
    </svg>
  );
};

/* ─── Services ─── */
const Services = () => (
  <section className="services" id="tratamientos">
    <div className="wrap">
      <div className="section-head">
        <span className="eyebrow">Tratamientos</span>
        <h2>Un protocolo para <em>cada historia</em></h2>
        <p>Diseñamos cada plan sobre tu anatomía, tu edad biológica y tus objetivos. Nada estándar, nada de excesos.</p>
      </div>
      <div className="svc-grid">
        {SERVICES.map((s, i) => (
          <div className="svc" key={i}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
              <span className="svc-num">— {s.num}</span>
              <SvcGlyph i={i} />
            </div>
            <h3>{s.title}</h3>
            <p className="svc-body">{s.body}</p>
            <div className="svc-foot">
              <span className="svc-time">◆ {s.time}</span>
              <a className="svc-link" href="#contacto">Detalles →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Cases section with B/A slider ─── */
const Cases = () => {
  const [idx, setIdx] = useState(0);
  const [pos, setPos] = useState(50);
  const c = CASES[idx];
  const change = (n) => { setIdx((idx + n + CASES.length) % CASES.length); setPos(50); };
  const select = (n) => { setIdx(n); setPos(50); };

  return (
    <section className="cases" id="casos">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Casos de éxito</span>
          <h2>Resultados <em>antes</em> y <em>después</em></h2>
          <p>Arrastra el control para revelar la transformación. Cada caso es real, documentado y autorizado para publicación.</p>
        </div>

        <div className="ba-stage">
          <BeforeAfterSlider caseData={c} position={pos} setPosition={setPos} />

          <div className="case-panel">
            <span className="eyebrow">Caso #{String(idx + 1).padStart(2, "0")}</span>
            <h3>{c.name}</h3>
            <p className="case-desc">{c.note}</p>
            <dl className="case-meta">
              <div><dt>Edad</dt><dd>{c.age}</dd></div>
              <div><dt>Tratamiento</dt><dd>{c.tx}</dd></div>
              <div><dt>Sesiones</dt><dd>{c.sessions}</dd></div>
              <div><dt>Resultado</dt><dd>Permanente*</dd></div>
            </dl>
            <div className="case-nav">
              <button onClick={() => change(-1)} aria-label="Caso anterior">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button onClick={() => change(1)} aria-label="Caso siguiente">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </button>
              <span className="counter"><b>{String(idx + 1).padStart(2, "0")}</b> / {String(CASES.length).padStart(2, "0")}</span>
            </div>
          </div>
        </div>

        <div className="case-thumbs">
          {CASES.map((cs, i) => (
            <button key={i} className={`case-thumb${i === idx ? " active" : ""}`} onClick={() => select(i)}>
              <FacePortrait variant="after" hue={cs.hue} seed={cs.seed} />
              <span className="lbl">{cs.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── About ─── */
const About = () => (
  <section className="about" id="nosotros">
    <div className="wrap">
      <div className="portrait-wrap">
        <div className="frame"></div>
        <image-slot id="doctor-portrait" shape="rect" placeholder="Retrato de la médica · 4:5"></image-slot>
      </div>
      <div>
        <span className="eyebrow">La doctora</span>
        <h2>Ciencia, arte y <em>escucha</em></h2>
        <p className="lede">
          La Dra. Valentina Salcedo lidera ZIA con una filosofía clara: realzar lo que ya
          es bello, no imponer un molde. Su práctica une medicina regenerativa,
          armonización facial y un protocolo de seguimiento que acompaña a cada paciente
          mucho más allá de la sesión.
        </p>
        <ul className="creds">
          <li><span className="yr">2013</span><span className="what">Médica cirujana — Universidad de los Andes, Bogotá.</span></li>
          <li><span className="yr">2016</span><span className="what">Especialización en Medicina Estética — Universidad CES.</span></li>
          <li><span className="yr">2019</span><span className="what">Fellowship en Medicina Regenerativa — Buenos Aires.</span></li>
          <li><span className="yr">2024</span><span className="what">Certificación MD Codes™ y técnicas avanzadas de armonización.</span></li>
        </ul>
        <p className="signature">— Dra. Valentina Salcedo</p>
      </div>
    </div>
  </section>
);

/* ─── Testimonials ─── */
const Testimonials = () => (
  <section className="testimonials" id="testimonios">
    <div className="wrap">
      <div className="section-head">
        <span className="eyebrow">Testimonios</span>
        <h2>Confianza que <em>se siente</em></h2>
        <p>Lo que dicen quienes han hecho parte de su transformación con nosotros.</p>
      </div>
      <div className="t-grid">
        {TESTIMONIALS.map((t, i) => (
          <div className="t-card" key={i}>
            <div className="quote-mark">“</div>
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

/* ─── Booking / Contact ─── */
const Booking = () => {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    e.target.reset();
  };

  return (
    <section className="booking" id="contacto">
      <div className="wrap">
        <div>
          <span className="eyebrow">Agenda tu valoración</span>
          <h2>Hablemos de tu <em>piel</em></h2>
          <p className="info">
            Tu primera valoración incluye análisis facial, plan personalizado y propuesta de
            tratamiento. Sin compromiso, con la transparencia que mereces.
          </p>
          <div className="info-list">
            <div className="row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <div><b>Sede principal</b><span>Cra. 11 #94-22, piso 4 · Chicó, Bogotá</span></div>
            </div>
            <div className="row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              <div><b>Horarios</b><span>Lun – Vie 9:00 – 19:00 · Sáb 9:00 – 14:00</span></div>
            </div>
            <div className="row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/></svg>
              <div><b>Teléfono · WhatsApp</b><span>+57 300 123 4567</span></div>
            </div>
            <div className="row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <div><b>Email</b><span>hola@zia-estetica.co</span></div>
            </div>
          </div>
        </div>

        <form className="book" onSubmit={submit}>
          <div className="row2">
            <div>
              <label>Nombre</label>
              <input type="text" required placeholder="Tu nombre" />
            </div>
            <div>
              <label>Apellido</label>
              <input type="text" required placeholder="Tu apellido" />
            </div>
          </div>
          <div className="row2">
            <div>
              <label>Teléfono</label>
              <input type="tel" required placeholder="+57 ___ ___ ____" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" required placeholder="tu@correo.com" />
            </div>
          </div>
          <label>Tratamiento de interés</label>
          <select defaultValue="">
            <option value="" disabled>Selecciona una opción</option>
            {SERVICES.map((s, i) => <option key={i}>{s.title}</option>)}
            <option>Valoración general</option>
          </select>
          <label>Cuéntanos qué buscas</label>
          <textarea rows="3" placeholder="Objetivos, dudas, preferencias de horario…"></textarea>
          <button type="submit" className="btn primary">Solicitar valoración <span className="arrow"></span></button>
          <p className="legal">Te respondemos en menos de 24 horas hábiles.</p>
        </form>

        <div className={`toast${sent ? " show" : ""}`}>◆ Solicitud recibida · te contactaremos pronto</div>
      </div>
    </section>
  );
};

/* ─── Footer ─── */
const Footer = () => (
  <footer>
    <div className="wrap">
      <div className="grid">
        <div>
          <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:18}}>
            <Logo size={54} />
            <div className="brand-foot" style={{fontSize:32,marginBottom:0}}>ZIA</div>
          </div>
          <p className="tagline-foot">Medicina estética y regenerativa. Resultados naturales, respaldados por ciencia y arte.</p>
        </div>
        <div>
          <h4>Tratamientos</h4>
          <ul>
            {SERVICES.slice(0,5).map((s,i) => <li key={i}><a href="#tratamientos">{s.title}</a></li>)}
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
      <div className="copy">
        <span>© 2026 ZIA — Medicina Estética y Regenerativa</span>
        <span>Reg. SAS — INVIMA · Hecho con cuidado en Bogotá</span>
      </div>
    </div>
  </footer>
);

/* ─── Tweaks ─── */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "wine",
  "showTopbar": true,
  "ctaText": "Agenda tu valoración",
  "heroLine": "Tu belleza, regenerada"
}/*EDITMODE-END*/;

const PALETTES = {
  wine:   { "--wine":"oklch(34% 0.095 5)",   "--rose":"oklch(62% 0.105 5)",  "--gold":"oklch(70% 0.09 75)" },
  noir:   { "--wine":"oklch(22% 0.03 280)",  "--rose":"oklch(58% 0.10 25)",  "--gold":"oklch(72% 0.11 75)" },
  emerald:{ "--wine":"oklch(32% 0.08 165)",  "--rose":"oklch(60% 0.10 30)",  "--gold":"oklch(72% 0.10 80)" },
  blush:  { "--wine":"oklch(40% 0.08 15)",   "--rose":"oklch(68% 0.10 15)",  "--gold":"oklch(76% 0.07 75)" },
};

const ZiaTweaks = () => {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useEffect(() => {
    const p = PALETTES[t.palette] || PALETTES.wine;
    Object.entries(p).forEach(([k,v]) => document.documentElement.style.setProperty(k, v));
  }, [t.palette]);
  useEffect(() => {
    document.querySelectorAll("[data-topbar]").forEach(el => el.style.display = t.showTopbar ? "" : "none");
  }, [t.showTopbar]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Identidad">
        <TweakRadio label="Paleta" value={t.palette} onChange={v => setTweak("palette", v)}
          options={[
            { value: "wine", label: "Vino" },
            { value: "blush", label: "Blush" },
          ]} />
        <TweakSelect label="Paleta completa" value={t.palette} onChange={v => setTweak("palette", v)}
          options={[
            { value: "wine", label: "Vino + Oro (original)" },
            { value: "blush", label: "Blush + Oro" },
            { value: "noir", label: "Noir + Oro" },
            { value: "emerald", label: "Esmeralda + Oro" },
          ]} />
      </TweakSection>
      <TweakSection title="Layout">
        <TweakToggle label="Mostrar barra superior" value={t.showTopbar} onChange={v => setTweak("showTopbar", v)} />
      </TweakSection>
    </TweaksPanel>
  );
};

/* ─── App ─── */
const App = () => (
  <>
    <div data-topbar><TopBar /></div>
    <Nav />
    <Hero />
    <Trust />
    <Services />
    <Cases />
    <About />
    <Testimonials />
    <Booking />
    <Footer />
    <ZiaTweaks />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
