import { CountUp } from "./CountUp";

const ITEMS = [
  { n: "+1,200", l: "Tratamientos\nrealizados" },
  { n: "12", l: "Años de\nexperiencia clínica" },
  { n: "98%", l: "Pacientes que\nregresan" },
  { n: "100%", l: "Productos\ncertificados INVIMA" },
];

export function Trust() {
  return (
    <div className="trust">
      <div className="row">
        {ITEMS.map((it, i) => (
          <div key={i} className="item">
            <div className="num">
              <CountUp value={it.n} />
            </div>
            <div className="lbl">{it.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
