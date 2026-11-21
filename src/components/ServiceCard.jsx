import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function ServiceCard({ id, title, description, image, subServices, icon: Icon }) {
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [linkFocused, setLinkFocused] = useState(false);
  const open = hovered || pinned || linkFocused;
  const panelId = "detalles-" + id;

  return (
    <article className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/20"
      onPointerEnter={event => setHovered(event.pointerType === "mouse")}
      onPointerLeave={() => setHovered(false)}
      onKeyDown={event => {
        if (event.key === "Escape" && open) {
          event.currentTarget.querySelector("button").focus();
          setHovered(false);
          setPinned(false);
        }
      }}>
      <div className="relative h-56 overflow-hidden">
        <img src={image} alt="" loading="lazy" decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute top-4 left-4 h-10 w-10 rounded-xl bg-background/80 border border-border flex items-center justify-center">
          <Icon aria-hidden="true" className="h-5 w-5 text-primary" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{description}</p>
        <button type="button" aria-expanded={open} aria-controls={panelId}
          aria-label={(open ? "Ocultar detalles de " : "Ver detalles de ") + title}
          className="py-2 text-sm font-semibold text-primary underline underline-offset-4"
          onClick={() => { setPinned(!open); setHovered(false); }}>
          {open ? "Ocultar detalles" : "Ver detalles"}
        </button>
        <div id={panelId} hidden={!open} className="absolute inset-x-0 top-0 h-56 overflow-auto bg-background/95 px-6 py-4">
          <ul className="space-y-2">
            {subServices.map(item => <li key={item} className="flex items-center gap-2 text-sm">
              <ChevronRight aria-hidden="true" className="h-3 w-3 text-primary shrink-0" />{item}
            </li>)}
          </ul>
          <Link to={"/servicios#" + id} onFocus={() => setLinkFocused(true)} onBlur={() => setLinkFocused(false)}
            aria-label={"Ver servicio de " + title} className="inline-block mt-2 py-2 text-sm font-semibold text-primary underline">
            Ver servicio
          </Link>
        </div>
      </div>
    </article>
  );
}
