import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Server, Shield, Wifi } from "lucide-react";
export default function HeroSection() {
  return (
    <section className="invox-hero relative flex items-center pt-28 pb-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-[8vw] w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[0.95] text-foreground">
              Equipos, redes
              <br />
              y <span className="text-primary">soporte.</span>
            </h1>

            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-lg font-medium">
              Instalación y mantenimiento informático para hogares, oficinas y comercios.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contacto"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-primary-foreground font-medium rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.02]"
              >
                Contactar con nosotros
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/servicios"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-border text-foreground font-medium rounded-xl transition-all duration-300 hover:bg-secondary hover:border-primary/20"
              >
                Ver Servicios
              </Link>
            </div>

            {/* Quick stats */}
            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-6">
              {[
                { icon: Shield, label: "Ciberseguridad", value: "Protección de equipos" },
                { icon: Wifi, label: "Telecomunicaciones", value: "Fibra" },
                { icon: Server, label: "Infraestructura", value: "TPV & Redes" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="space-y-1 min-w-0">
                  <Icon className="h-4 w-4 text-primary mb-2 shrink-0" />
                  <p className="text-[10px] sm:text-xs text-muted-foreground font-mono uppercase tracking-wide leading-tight break-words">{label}</p>
                  <p className="text-xs sm:text-sm font-semibold text-foreground break-words">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <img src={`${import.meta.env.BASE_URL}images/signal.webp`} width="1100" height="950" alt="" fetchPriority="high" srcSet={`${import.meta.env.BASE_URL}images/signal-small.webp 480w, ${import.meta.env.BASE_URL}images/signal.webp 800w`} sizes="(max-width: 639px) 90vw, (max-width: 1023px) 75vw, 480px" className="w-full h-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
