import { Link } from "react-router-dom";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";

const PARTNERS = ["Equipos", "Redes", "Hardware", "Fibra", "Móvil", "CAD"];

const NAV_LINKS = [
  { label: "Inicio", to: "/" },
  { label: "Servicios", to: "/servicios" },
  { label: "Descargas", to: "/descargas" },
  { label: "Contacto", to: "/contacto" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#111613" }} className="text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-[8vw]">

        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col">
            {/* Logo row — same height as the title rows in other columns */}
            <div className="h-[28px] flex items-center mb-5">
              <img src={`${import.meta.env.BASE_URL}images/invox-claro.svg`} alt="Invox" width="132" height="29" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Consultora ficticia de servicios informáticos, telecomunicaciones y soluciones tecnológicas para empresas y particulares.
            </p>
            
          </div>

          {/* Navigation */}
          <div>
            <div className="h-[28px] flex items-center mb-5">
              <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/65">
                Navegación
              </h4>
            </div>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-white/55 hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div><h4 className="mb-5 text-sm text-white">Contacto de ejemplo</h4>
            <p className="text-sm text-white/60">hola@invox.example<br />Calle del Prisma, 8 · Villa Prisma</p>
          </div>
          <div>
            <div className="h-[28px] flex items-center mb-5">
              <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/65">
                Especialidades
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {PARTNERS.map((p) => (
                <span
                  key={p}
                  className="px-2.5 py-1 rounded-md text-white/60 text-xs font-medium transition-colors duration-200 cursor-default"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/65">
              © {new Date().getFullYear()} Invox · Proyecto de portfolio
            </p>
            
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link to="/aviso-legal" className="text-[11px] text-white/65 hover:text-white/60 transition-colors">
                Aviso Legal
              </Link>
              <Link to="/privacidad" className="text-[11px] text-white/65 hover:text-white/60 transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/cookies" className="text-[11px] text-white/65 hover:text-white/60 transition-colors">
                Política de Cookies
              </Link>
            </div>

            <p className="text-xs text-white/60 font-mono tracking-wider hidden lg:block">
              Proyecto de demostración
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
