"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " nav-scrolled" : ""}`}>
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
