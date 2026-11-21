import { motion } from "framer-motion";

const PARTNERS = [
  { name: "Equipos", desc: "Ciberseguridad" },
  { name: "Redes", desc: "Distribución IT" },
  { name: "Hardware", desc: "Componentes" },
  { name: "Fibra", desc: "Telecomunicaciones" },
  { name: "Móvil", desc: "Telefonía móvil" },
  { name: "CAD", desc: "Software CAD" },
];

export default function PartnersSection() {
  return (
    <section className="relative py-16 lg:py-20 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-[8vw]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground font-mono">
            Áreas de especialización
          </span>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {PARTNERS.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex flex-col items-center justify-center p-6 rounded-xl border border-border bg-card hover:border-primary/20 hover:shadow-sm transition-all duration-300 group"
            >
              <span className="text-base font-bold text-foreground group-hover:text-primary transition-colors font-mono">
                {partner.name}
              </span>
              <span className="text-xs text-muted-foreground mt-1">{partner.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

