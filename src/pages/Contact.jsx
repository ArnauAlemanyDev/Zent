import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { usePageTitle } from "@/lib/usePageTitle";

const CONTACT_ITEMS = [
  { icon: MapPin, label: "Oficina ficticia", primary: "Calle del Prisma, 8", secondary: "Villa Prisma" },
  { icon: Phone, label: "Teléfono", primary: "+34 9XX XXX XXX" },
  { icon: MessageCircle, label: "Mensajería", primary: "+34 6XX XXX XXX" },
  { icon: Mail, label: "Correo de ejemplo", primary: "hola@invox.example" },
  { icon: Clock, label: "Horario de ejemplo", primary: "Lunes a viernes, de 9 a 17 h" },
];

export default function Contact() {
  usePageTitle("Contacto");

  return (
    <div className="relative z-10 pt-24 lg:pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-[8vw]">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold tracking-widest uppercase text-primary font-mono">
              Hablemos
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Contacto
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl">
            Estos datos ilustran la página de contacto de una consultora ficticia.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {CONTACT_ITEMS.map(({ icon: Icon, label, primary, secondary, href, external }, i) => {
            const Inner = (
              <>
                <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-1">{label}</p>
                <p className="text-sm font-semibold text-foreground leading-snug">{primary}</p>
                {secondary && <p className="text-xs text-muted-foreground mt-0.5">{secondary}</p>}
              </>
            );

            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                {href ? (
                  <a
                    href={href}
                    target={external ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex flex-col h-full bg-surface-ice border border-border rounded-2xl p-5 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    {Inner}
                  </a>
                ) : (
                  <div className="flex flex-col h-full bg-surface-ice border border-border rounded-2xl p-5">
                    {Inner}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>



        <motion.figure initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden border border-border bg-surface-ice">
          <svg viewBox="0 0 800 230" className="w-full h-56" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
            <defs><pattern id="streets" width="105" height="80" patternTransform="rotate(-18)" patternUnits="userSpaceOnUse"><rect x="5" y="5" width="95" height="70" rx="6" fill="#dce2d3"/></pattern></defs>
            <rect width="800" height="230" fill="url(#streets)"/><path d="M-20 180 Q180 90 310 129 T820 55" fill="none" stroke="white" strokeWidth="21"/>
            <path d="M400 121s-17-18-17-29a17 17 0 0 1 34 0c0 11-17 29-17 29" fill="#4d712d"/><circle cx="400" cy="92" r="6" fill="white"/>
          </svg>
          <figcaption className="px-5 py-3 text-sm text-muted-foreground">Plano ilustrativo · Calle del Prisma, 8</figcaption>
        </motion.figure>
      </div>
    </div>
  );
}
