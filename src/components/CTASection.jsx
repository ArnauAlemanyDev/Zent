import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-[8vw]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="brand-dark relative text-white rounded-3xl px-5 py-9 sm:p-10 lg:p-12 overflow-hidden"
          style={{ backgroundColor: "#0c111b" }}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />

          <div className="relative flex flex-col items-start gap-6">
            <div>
              <h2 className="cta-title font-bold tracking-tight">
                ¿Listo para transformar{" "}
                <span className="text-primary">tu infraestructura?</span>
              </h2>
              <p className="mt-4 text-white/75 max-w-2xl leading-relaxed">
                Contacta con nosotros y descubre cómo podemos optimizar tu tecnología.
                Asesoramiento gratuito y sin compromiso.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                to="/contacto"
                className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-primary text-primary-foreground font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]"
              >
                Solicitar asesoramiento
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}