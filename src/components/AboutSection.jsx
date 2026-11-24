import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
const STATS = [
  { value: "6", label: "Áreas de servicio" },
  { value: "Equipos", label: "Protección" },
  { value: "Fibra", label: "Conectividad" },
];

const VALUES = [
  "Diagnóstico de incidencias",
  "Asesoramiento personalizado para cada cliente",
  "Selección de equipos y componentes",
  "Atención presencial y remota",
  "Soluciones adaptadas a PYMES y particulares",
  "Compromiso con la innovación tecnológica",
];

export default function AboutSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-[8vw]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Stats column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs font-semibold tracking-widest uppercase text-primary font-mono">
                Sobre Nosotros
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Tecnología de confianza de proximidad
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              En Zent nos dedicamos a la instalación y el mantenimiento de equipos informáticos. Trabajamos con empresas y particulares, desde la configuración de un ordenador hasta la puesta en marcha de una red de oficina.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 lg:gap-6">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="text-center lg:text-left min-w-0"
                >
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground font-mono mt-1 uppercase tracking-wider leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-surface-ice rounded-2xl p-8 lg:p-10 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-6">Nuestro Compromiso</h3>
              <div className="space-y-4">
                {VALUES.map((value, i) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

