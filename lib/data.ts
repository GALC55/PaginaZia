export type Service = {
  num: string;
  title: string;
  body: string;
  time: string;
  hue: number;
};

export const SERVICES: Service[] = [
  { num: "01", title: "Toxina Botulínica", body: "Suavizamos líneas de expresión preservando tu gesto natural. Resultados visibles en 7 días.", time: "30 min", hue: 5 },
  { num: "02", title: "Ácido Hialurónico", body: "Volumen, contorno y proyección personalizados. Labios, surcos, pómulos y mandíbula.", time: "45 min", hue: 15 },
  { num: "03", title: "Bioestimulación con PRP", body: "Tu propio plasma rico en plaquetas regenera la piel desde adentro. 100 % autólogo.", time: "60 min", hue: 35 },
  { num: "04", title: "Hilos Tensores", body: "Reposicionamiento facial sin cirugía. Estimulan colágeno durante 18 meses.", time: "75 min", hue: 50 },
  { num: "05", title: "Peelings Médicos", body: "Renovación celular profunda. Manchas, textura, brillo. Protocolos por fototipo.", time: "40 min", hue: 65 },
  { num: "06", title: "Mesoterapia Capilar", body: "Detenemos la caída y reactivamos el folículo con vitaminas y factores de crecimiento.", time: "30 min", hue: 80 },
];

export type CaseStudy = {
  name: string;
  age: string;
  tx: string;
  sessions: string;
  note: string;
  hue: number;
  seed: number;
};

export const CASES: CaseStudy[] = [
  { name: "Rejuvenecimiento Facial", age: "47 años", tx: "AH + PRP", sessions: "3 sesiones", note: "Recuperación de volumen en pómulos y suavizado del surco nasogeniano. Piel luminosa.", hue: 18, seed: 1 },
  { name: "Bioestimulación", age: "52 años", tx: "PRP + Radiesse", sessions: "4 sesiones", note: "Mejora de la firmeza del tercio medio y atenuación de líneas finas con regeneración natural.", hue: 30, seed: 2 },
  { name: "Perfilado de Labios", age: "29 años", tx: "Ácido Hialurónico", sessions: "1 sesión", note: "Diseño personalizado del arco de Cupido respetando la proporción facial original.", hue: 8, seed: 3 },
  { name: "Definición Mandibular", age: "35 años", tx: "AH + Toxina", sessions: "2 sesiones", note: "Realce del ángulo mandibular y armonización del óvalo facial con técnica MD Codes.", hue: 22, seed: 4 },
  { name: "Tratamiento de Manchas", age: "41 años", tx: "Peeling + Mesoterapia", sessions: "5 sesiones", note: "Reducción significativa de melasma y unificación del tono. Piel renovada y luminosa.", hue: 55, seed: 5 },
];

export type Testimonial = {
  body: string;
  name: string;
  tx: string;
  initial: string;
};

export const TESTIMONIALS: Testimonial[] = [
  { body: "Volví a verme al espejo y sonreír sin pensarlo. La Dra. escuchó cada detalle y respetó mis rasgos.", name: "Carolina M.", tx: "Bioestimulación · PRP", initial: "C" },
  { body: "Esperaba un cambio. Encontré naturalidad. Nadie nota qué me hice, todos notan que estoy bien.", name: "Sofía R.", tx: "Ácido Hialurónico", initial: "S" },
  { body: "Después de años buscando, ZIA es el único lugar donde sentí honestidad clínica y resultados reales.", name: "Mariana L.", tx: "Hilos + Toxina", initial: "M" },
];
