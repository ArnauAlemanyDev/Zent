import { motion } from "framer-motion";
import { usePageTitle } from "@/lib/usePageTitle";
import { Shield, Cloud, Wrench, ShoppingCart, Phone, Monitor, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const SERVICES_DETAIL = [
  {
    icon: Shield,
    id: "ciberseguridad",
    title: "Ciberseguridad",
    tagline: "Protección sin fisuras",
    description: "Configuramos soluciones de protección según el tipo de dispositivo. Protegemos tu infraestructura frente a amenazas, malware y ataques de nueva generación.",
    features: [
      "Protección total multidispositivo",
      "Seguridad esencial para hogares",
      "Protección para smartphones y tablets",
      "Auditoría de seguridad y análisis de vulnerabilidades",
      "Configuración de firewalls y seguridad perimetral",
    ],
    image: `${import.meta.env.BASE_URL}images/service-ciberseguridad.svg`,

  },
  {
    icon: Cloud,
    id: "infraestructura-cloud",
    title: "Infraestructura Cloud & Redes",
    tagline: "Arquitectura escalable",
    description: "Diseñamos e implementamos infraestructura de red y soluciones cloud adaptadas a las necesidades de tu negocio. Desde la instalación de redes locales hasta la migración completa a la nube.",
    features: [
      "Diseño e instalación de redes LAN/WAN",
      "Migración a entornos cloud",
      "Servidores físicos y virtuales",
      "Backup y disaster recovery",
      "Monitorización y mantenimiento proactivo",
    ],
    image: `${import.meta.env.BASE_URL}images/service-cloud.svg`,
  },
  {
    icon: Wrench,
    id: "servicios-gestionados",
    title: "Servicios Gestionados",
    tagline: "Siempre a tu lado",
    description: "Mantenimiento preventivo y correctivo de toda tu infraestructura informática. Nuestro equipo técnico está disponible para resolver cualquier incidencia de forma rápida y eficiente.",
    features: [
      "Asistencia remota inmediata",
      "Mantenimiento preventivo de equipos",
      "Reparación y diagnóstico de hardware",
      "Instalación y configuración de software",
      "Soporte técnico presencial en tu empresa",
    ],
    image: `${import.meta.env.BASE_URL}images/service-gestionados.svg`,
  },
  {
    icon: ShoppingCart,
    id: "sistemas-tpv",
    title: "Sistemas TPV",
    tagline: "Punto de venta inteligente",
    description: "Soluciones completas de punto de venta adaptadas a cada sector: hostelería, comercio, peluquería, talleres y gestión. Incluye nuestro sistema de carta digital con código QR.",
    features: [
      "TPV especializado para bares y restaurantes",
      "TPV para comercio y retail",
      "TPV para peluquerías y centros de estética",
      "TPV para talleres mecánicos",
      "Carta digital con QR",
    ],
    image: `${import.meta.env.BASE_URL}images/service-tpv.svg`,
  },
  {
    icon: Phone,
    id: "telecomunicaciones",
    title: "Telecomunicaciones",
    tagline: "Conectividad total",
    description: "Diseñamos soluciones de conectividad. Te asesoramos para encontrar la mejor tarifa de fibra, móvil o packs convergentes para tu hogar o empresa.",
    features: [
      "Fibra óptica de alta velocidad",
      "Tarifas móviles competitivas",
      "Packs convergentes fibra + móvil",
      "Centralitas y telefonía IP para empresas",
      "Asesoramiento personalizado de tarifas",
    ],
    image: `${import.meta.env.BASE_URL}images/service-telecomunicaciones.svg`,
  },
  {
    icon: Monitor,
    id: "equipos-hardware",
    title: "Equipos & Hardware",
    tagline: "La mejor tecnología",
    description: "Venta de equipos informáticos, componentes y periféricos. Asesoramiento experto para elegir el equipo perfecto.",
    features: [
      "Ordenadores de sobremesa y portátiles",
      "Componentes y upgrades",
      "Periféricos y accesorios",
      "Equipamiento de red profesional",
      "Software CAD y licencias",
    ],
    image: `${import.meta.env.BASE_URL}images/service-hardware.svg`,
  },
];

export default function Services() {
  usePageTitle("Servicios");
  return (
    <div className="relative z-10 pt-24 lg:pt-32">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-[8vw] pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold tracking-widest uppercase text-primary font-mono">
              Catálogo Completo
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Nuestros Servicios
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Soluciones tecnológicas integrales para empresas y particulares. 
            Cada servicio diseñado para maximizar el rendimiento de tu infraestructura.
          </p>
        </motion.div>
      </div>

      {/* Service details */}
      <div className="space-y-0">
        {SERVICES_DETAIL.map((service, i) => {
          const Icon = service.icon;
          const isEven = i % 2 === 0;
          return (
            <section
              key={service.id} id={service.id} tabIndex={-1}
              className={`scroll-mt-20 py-20 lg:py-28 ${isEven ? "" : "bg-surface-ice"}`}
            >
              <div className="mx-auto max-w-7xl px-6 lg:px-[8vw]">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className={!isEven ? "lg:order-2" : ""}
                  >
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className={!isEven ? "lg:order-1" : ""}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground font-mono">
                        {service.tagline}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                      {service.title}
                    </h2>

                    <p className="mt-4 text-muted-foreground leading-relaxed text-[1.05rem]">
                      {service.description}
                    </p>

                    <ul className="mt-8 space-y-3">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <ArrowRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          <span className="text-sm text-muted-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>

                    {service.cta && (
                      <div className="mt-8">
                        {service.cta.external ? (
                          <a
                            href={service.cta.href || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                          >
                            {service.cta.label}
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        ) : (
                          <Link
                            to={service.cta.href}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl"
                          >
                            {service.cta.label}
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        )}
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA bottom */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-[8vw] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              ¿Necesitas una solución a medida?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Contacta con nuestro equipo técnico y diseñaremos la solución perfecta para tu negocio.
            </p>
            <Link
              to="/contacto"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
            >
              Solicitar Asesoramiento
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

