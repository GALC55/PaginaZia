"use client";

import { useEffect, type FormEvent } from "react";
import { SERVICES } from "@/lib/data";
import { useCreateAppointmentRequest } from "@/features/appointments/queries";

export function Booking() {
  const mutation = useCreateAppointmentRequest();
  const { mutate, isPending, isSuccess, isError, error, reset } = mutation;

  useEffect(() => {
    if (!isSuccess && !isError) return;
    const t = setTimeout(reset, 4000);
    return () => clearTimeout(t);
  }, [isSuccess, isError, reset]);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isPending) return;
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      first_name: String(fd.get("first_name") || "").trim(),
      last_name: String(fd.get("last_name") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      treatment: String(fd.get("treatment") || "").trim(),
      message: String(fd.get("message") || "").trim()
    };

    mutate(payload, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <section className="booking section-pad" id="contacto">
      <div className="wrap wrap-grid">
        <div>
          <span className="eyebrow">Agenda tu valoración</span>
          <h2>
            Hablemos de tu <em>piel</em>
          </h2>
          <p className="info">
            Tu primera valoración incluye análisis facial, plan personalizado y
            propuesta de tratamiento. Sin compromiso, con la transparencia que mereces.
          </p>
          <div className="info-list">
            <div className="row-i">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <b>Sede principal</b>
                <span>Cra. 11 #94-22, piso 4 · Chicó, Bogotá</span>
              </div>
            </div>
            <div className="row-i">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <div>
                <b>Horarios</b>
                <span>Lun – Vie 9:00 – 19:00 · Sáb 9:00 – 14:00</span>
              </div>
            </div>
            <div className="row-i">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              <div>
                <b>Teléfono · WhatsApp</b>
                <span>+57 300 123 4567</span>
              </div>
            </div>
            <div className="row-i">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <div>
                <b>Email</b>
                <span>hola@zia-estetica.co</span>
              </div>
            </div>
          </div>
        </div>

        <form className="book" onSubmit={submit}>
          <div className="row2">
            <div>
              <label>Nombre</label>
              <input name="first_name" type="text" required placeholder="Tu nombre" />
            </div>
            <div>
              <label>Apellido</label>
              <input name="last_name" type="text" required placeholder="Tu apellido" />
            </div>
          </div>
          <div className="row2">
            <div>
              <label>Teléfono</label>
              <input name="phone" type="tel" required placeholder="+57 ___ ___ ____" />
            </div>
            <div>
              <label>Email</label>
              <input name="email" type="email" required placeholder="tu@correo.com" />
            </div>
          </div>
          <label>Tratamiento de interés</label>
          <select name="treatment" defaultValue="">
            <option value="" disabled>
              Selecciona una opción
            </option>
            {SERVICES.map((s) => (
              <option key={s.num} value={s.title}>{s.title}</option>
            ))}
            <option value="Valoración general">Valoración general</option>
          </select>
          <label>Cuéntanos qué buscas</label>
          <textarea name="message" rows={3} placeholder="Objetivos, dudas, preferencias de horario…" />
          <button type="submit" className="btn btn-primary" disabled={isPending} aria-busy={isPending}>
            {isPending ? "Enviando…" : "Solicitar valoración"} <span className="arrow" />
          </button>
          <p className="legal">Te respondemos en menos de 24 horas hábiles.</p>
        </form>

        <div className={`toast${isSuccess ? " show" : ""}`} role="status" aria-live="polite">
          ◆ Solicitud recibida · te contactaremos pronto
        </div>
        <div className={`toast${isError ? " show" : ""}`} role="alert" aria-live="assertive">
          ◆ {error?.message || "No se pudo enviar la solicitud"}
        </div>
      </div>
    </section>
  );
}
