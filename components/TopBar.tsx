export function TopBar() {
  return (
    <div className="topbar">
      <div className="row">
        <div className="left">
          <span className="pill">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              style={{ display: "inline-block", verticalAlign: "middle", marginRight: 8 }}
            >
              <path d="M12 2l2.39 7.36H22l-6.18 4.49 2.36 7.36L12 16.7l-6.18 4.51 2.36-7.36L2 9.36h7.61L12 2z" />
            </svg>
            Clínica certificada · 12 años de experiencia
          </span>
        </div>
        <div className="right">
          <a href="#contacto">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              style={{ display: "inline-block", verticalAlign: "middle", marginRight: 6 }}
            >
              <path
                d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            +57 300 123 4567
          </a>
          <a href="#contacto">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              style={{ display: "inline-block", verticalAlign: "middle", marginRight: 6 }}
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Cra. 11 #94-22, Bogotá
          </a>
        </div>
      </div>
    </div>
  );
}
