import { motion } from "framer-motion";
import { usePageTitle } from "@/lib/usePageTitle";
import { Download, MonitorDown } from "lucide-react";

const DOWNLOADS = [
  {
    name: "Guía de soporte",
    description: "Una lista breve para documentar una incidencia antes de solicitar ayuda.",
    href: `${import.meta.env.BASE_URL}guia-soporte.txt`,
    badge: "Zent",
    highlight: true,
  },
  {
    name: "AnyDesk",
    description: "Software de escritorio remoto ligero y rápido. Ideal para acceso remoto profesional con alta velocidad de respuesta y máxima compatibilidad.",
    href: "https://anydesk.com/es/downloads",
    badge: "AnyDesk",
    highlight: false,
  },
  {
    name: "TeamViewer",
    description: "La solución de acceso remoto más popular del mundo. Permite conexiones seguras entre dispositivos para soporte técnico y trabajo remoto.",
    href: "https://www.teamviewer.com/es/descarga/windows/",
    badge: "TeamViewer",
    highlight: false,
  },
];

export default function Downloads() {
  usePageTitle("Descargas");
  return (
    <div className="relative z-10 pt-24 lg:pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-[8vw]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold tracking-widest uppercase text-primary font-mono">
              Soporte Técnico
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Descargas
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Herramientas de asistencia remota para que nuestro equipo técnico pueda ayudarte desde cualquier lugar de forma segura y eficiente.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOWNLOADS.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`group relative flex flex-col bg-card border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 ${
                item.highlight
                  ? "border-primary/30 shadow-md shadow-primary/10"
                  : "border-border"
              }`}
            >
              {item.highlight && (
                <div className="absolute top-4 right-4 px-2.5 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full font-mono">
                  Recomendado
                </div>
              )}

              {/* Image area */}
              <div className={`flex items-center justify-center h-40 ${item.highlight ? "bg-primary/5" : "bg-surface-ice"}`}>
                <MonitorDown aria-hidden="true" className="h-10 w-10 text-primary" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.description}</p>

                <a
                  href={item.href}
                  target={item.highlight ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  download={item.highlight}
                  className={`mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 font-medium rounded-xl text-sm transition-all duration-300 ${
                    item.highlight
                      ? "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25"
                      : "border border-border text-foreground hover:border-primary/30 hover:bg-surface-ice"
                  }`}
                >
                  <Download className="h-4 w-4" />
                  {item.highlight ? "Descargar Ahora" : "Ir a Descarga"}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 p-6 bg-surface-ice border border-border rounded-2xl"
        >
          <p className="text-sm text-muted-foreground leading-relaxed">
            La guía es un archivo de texto. Los otros dos enlaces abren las páginas de sus respectivos fabricantes.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
