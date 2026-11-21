import { Link, useLocation } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";

const LINKS = [
  { label: "Inicio", path: "/" },
  { label: "Servicios", path: "/servicios" },
  { label: "Descargas", path: "/descargas" },
  { label: "Contacto", path: "/contacto" },
];

export default function PageNotFound() {
  const location = useLocation();
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 pt-24 pb-10 lg:pt-32">
      <div className="max-w-md w-full min-w-0 text-center space-y-8">
        <div>
          <p className="text-7xl sm:text-8xl font-bold text-primary/20">404</p>
          <h1 className="text-2xl font-semibold text-foreground mt-2">Página no encontrada</h1>
          <p className="text-muted-foreground mt-2 text-sm">
            La ruta <span className="[overflow-wrap:anywhere] font-mono text-foreground bg-muted px-1.5 py-0.5 rounded">{location.pathname}</span> no existe.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {LINKS.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className="flex items-center justify-between px-4 py-3 rounded-xl border border-border hover:border-primary/40 hover:bg-surface-ice transition-all duration-200 group"
            >
              <span className="text-sm font-medium text-foreground">{label}</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
          <Home className="h-4 w-4" />
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
