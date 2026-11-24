import { motion } from "framer-motion";
import { Shield, Cloud, Monitor, Phone, Wrench, ShoppingCart } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  {
    id: "ciberseguridad",
    title: "Ciberseguridad",
    description: "Protección integral de endpoints y redes con protección por capas. Seguridad premium para empresas y hogares.",
    image: `${import.meta.env.BASE_URL}images/service-ciberseguridad.svg`,
    icon: Shield,
    subServices: ["Protección multidispositivo", "Seguridad doméstica", "Seguridad móvil", "Auditoría de seguridad"],
  },
  {
    id: "infraestructura-cloud",
    title: "Infraestructura Cloud",
    description: "Diseño e implementación de infraestructura cloud escalable. Migración, optimización y mantenimiento continuo.",
    image: `${import.meta.env.BASE_URL}images/service-cloud.svg`,
    icon: Cloud,
    subServices: ["Migración a la nube", "Servidores virtuales", "Backup cloud", "Disaster recovery"],
  },
  {
    id: "servicios-gestionados",
    title: "Servicios Gestionados",
    description: "Mantenimiento proactivo de equipos informáticos. Soporte remoto y presencial para mantener tu negocio operativo.",
    image: `${import.meta.env.BASE_URL}images/service-gestionados.svg`,
    icon: Wrench,
    subServices: ["Asistencia remota", "Mantenimiento preventivo", "Reparación de equipos", "Instalación de software"],
  },
  {
    id: "sistemas-tpv",
    title: "Sistemas TPV",
    description: "Soluciones punto de venta para hostelería, comercio, gestión, peluquería y talleres. Carta digital con QR.",
    image: `${import.meta.env.BASE_URL}images/service-tpv.svg`,
    icon: ShoppingCart,
    subServices: ["TPV Hostelería", "TPV Comercio", "TPV Gestión", "Carta menú digital QR"],
  },
  {
    id: "telecomunicaciones",
    title: "Telecomunicaciones",
    description: "Diseñamos soluciones de conectividad. Las mejores tarifas de fibra, móvil y convergentes.",
    image: `${import.meta.env.BASE_URL}images/service-telecomunicaciones.svg`,
    icon: Phone,
    subServices: ["Fibra óptica", "Tarifas móviles", "Packs convergentes", "Telefonía empresarial"],
  },
  {
    id: "equipos-hardware",
    title: "Equipos & Hardware",
    description: "Venta y distribución de equipos informáticos. Asesoramiento personalizado.",
    image: `${import.meta.env.BASE_URL}images/service-hardware.svg`,
    icon: Monitor,
    subServices: ["Ordenadores y portátiles", "Componentes", "Periféricos", "Redes y conectividad"],
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-surface-ice">
      <div className="mx-auto max-w-7xl px-6 lg:px-[8vw]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold tracking-widest uppercase text-primary font-mono">
              Soluciones
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Matriz de Soluciones
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Infraestructura tecnológica completa para impulsar tu negocio. Desde ciberseguridad hasta telecomunicaciones.
          </p>
        </motion.div>

        <div className="grid auto-rows-fr sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              className="grid min-w-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
          >
            Ver todos los servicios en detalle
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

