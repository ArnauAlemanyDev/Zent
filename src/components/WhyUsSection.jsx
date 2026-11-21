import { motion } from "framer-motion";
import { Clock, MapPin, Headphones, Star, Shield, Users } from "lucide-react";

const REASONS = [
  {
    icon: Clock,
    title: "Mantenimiento preventivo",
    description: "Revisamos los equipos y planificamos sus actualizaciones.",
  },
  {
    icon: MapPin,
    title: "Servicio local de proximidad",
    description: "Estamos cerca de ti. Atención presencial en nuestra tienda y desplazamiento a domicilio o empresa.",
  },
  {
    icon: Headphones,
    title: "Soporte remoto inmediato",
    description: "Resolvemos incidencias sin que tengas que salir de casa o parar tu negocio.",
  },
  {
    icon: Shield,
    title: "Protección de dispositivos",
    description: "Ofrecemos las mejores soluciones de ciberseguridad del mercado con licencias oficiales.",
  },
  {
    icon: Star,
    title: "Asesoramiento personalizado",
    description: "No vendemos tecnología, buscamos la solución que mejor se adapta a tus necesidades reales.",
  },
  {
    icon: Users,
    title: "Para empresas y particulares",
    description: "Atendemos tanto a PYMES y autónomos como a usuarios domésticos con el mismo nivel de dedicación.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-surface-ice">
      <div className="mx-auto max-w-7xl px-6 lg:px-[8vw]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold tracking-widest uppercase text-primary font-mono">
              ¿Por qué elegirnos?
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Tu empresa de confianza en informática
          </h2>
          <p className="mt-4 text-muted-foreground">
            Llevamos más de dos décadas resolviendo problemas tecnológicos con cercanía, profesionalidad y honestidad.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/20 hover:shadow-sm transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

