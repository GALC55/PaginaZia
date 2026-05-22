"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const LINKS = [
  { href: "#tratamientos", label: "Tratamientos" },
  { href: "#casos", label: "Casos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav className={`nav${scrolled ? " nav-scrolled" : ""}`} aria-label="Navegación principal">
      <div className="row">
        <a href="#top" className="brand" aria-label="ZIA · Inicio">
          <Logo size={42} />
          <span>ZIA</span>
        </a>
        <div className="links" role="menubar">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} role="menuitem">{l.label}</a>
          ))}
        </div>
        <a href="#contacto" className="btn btn-primary nav-cta">
          Agenda <span className="arrow" />
        </a>
        <button
          type="button"
          className="nav-burger"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`burger-bars${open ? " is-open" : ""}`} aria-hidden="true">
            <span /><span /><span />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        hidden={!open}
      >
        <div className="mobile-menu-inner">
          <ul className="mobile-links">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={close}>{l.label}</a>
              </li>
            ))}
          </ul>
          <a href="#contacto" className="btn btn-primary mobile-cta" onClick={close}>
            Agenda valoración <span className="arrow" />
          </a>
          <div className="mobile-contact">
            <a href="tel:+573001234567" aria-label="Llamar al +57 300 123 4567">+57 300 123 4567</a>
            <a
              href="https://wa.me/573001234567"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir conversación de WhatsApp"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <button
        type="button"
        className={`mobile-backdrop${open ? " is-open" : ""}`}
        aria-label="Cerrar menú"
        onClick={close}
        tabIndex={open ? 0 : -1}
      />
    </nav>
  );
}
