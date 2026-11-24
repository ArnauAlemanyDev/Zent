import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MonitorDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Inicio", path: "/" },
  { label: "Servicios", path: "/servicios" },
  { label: "Descargas", path: "/descargas" },
  { label: "Contacto", path: "/contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`bg-[#0c111b] fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "shadow-sm"
          : "shadow-none"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-[8vw]">
        <div className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] h-16 lg:h-20 items-center">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <img src={`${import.meta.env.BASE_URL}images/zent.svg`} alt="Zent" width="126" height="29" />
            </Link>
          </div>

          {/* Center: Nav tabs */}
          <div className="hidden md:flex justify-center">
            <nav className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-300 relative py-1 ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Tienda Online + Guía de soporte */}
          <div className="hidden md:flex items-center justify-end gap-2">
            <a
              href={`${import.meta.env.BASE_URL}guia-soporte.txt`}
              download
              className="p-2 border border-border rounded-lg transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 flex items-center justify-center"
              title="Descargar Guía de soporte"
            >
              <MonitorDown className="h-4 w-4 text-primary" />
            </a>
              <Link to="/contacto" className="inline-flex justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Consultar al equipo</Link>
            
          </div>

          <div className="flex md:hidden items-center justify-end col-start-2 -mr-2">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              className="p-2 text-foreground"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll progress line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-border/30">
        <motion.div
          className="h-full bg-primary"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border"
          >
            <div className="px-6 py-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block text-base font-medium py-2 ${
                    location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-border flex flex-col gap-3">
                <a
                  href={`${import.meta.env.BASE_URL}guia-soporte.txt`}
                  download
                  className="block w-full text-center px-5 py-3 border border-border text-foreground text-sm font-semibold rounded-lg hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all flex items-center justify-center gap-2"
                >
                  <MonitorDown className="h-4 w-4" />
                  Guía de soporte
                </a>
              <Link to="/contacto" className="inline-flex justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Consultar al equipo</Link>
                
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

