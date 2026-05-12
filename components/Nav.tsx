import { Logo } from "./Logo";

export function Nav() {
  return (
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
        <a href="#contacto" className="btn btn-primary">
          Agenda <span className="arrow" />
        </a>
      </div>
    </nav>
  );
}
