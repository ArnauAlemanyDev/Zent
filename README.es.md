<p align="right"><a href="README.md">EN</a> · <b>ES</b></p>

<picture>
  <source media="(max-width: 600px) and (prefers-color-scheme: dark)" srcset="docs/readme/generated/header-es-dark-m.svg">
  <source media="(max-width: 600px)" srcset="docs/readme/generated/header-es-light-m.svg">
  <source media="(prefers-color-scheme: dark)" srcset="docs/readme/generated/header-es-dark.svg">
  <img src="docs/readme/generated/header-es-light.svg" alt="Zent — Web corporativa" width="100%">
</picture>

<h3>
<picture>
  <source media="(max-width: 600px) and (prefers-color-scheme: dark)" srcset="docs/readme/generated/section-1-es-dark-m.svg">
  <source media="(max-width: 600px)" srcset="docs/readme/generated/section-1-es-light-m.svg">
  <source media="(prefers-color-scheme: dark)" srcset="docs/readme/generated/section-1-es-dark.svg">
  <img src="docs/readme/generated/section-1-es-light.svg" alt="01 — Descripción" width="100%">
</picture>
</h3>

Zent es una web corporativa responsive de una consultora informática ficticia, centrada en equipos, redes y soporte técnico para hogares, oficinas y comercios. La web está en español.

El proyecto nació durante mis prácticas de Desarrollo de Aplicaciones Multiplataforma. Para esta versión de portfolio, conservé la arquitectura original y sustituí la identidad corporativa, los datos de contacto, la ubicación y las referencias comerciales por contenido ficticio.

[Visitar la demo ↗](https://arnaualemanydev.github.io/Zent/) · [Explorar el catálogo ↗](https://arnaualemanydev.github.io/Zent/servicios/)

<h3>
<picture>
  <source media="(max-width: 600px) and (prefers-color-scheme: dark)" srcset="docs/readme/generated/section-2-es-dark-m.svg">
  <source media="(max-width: 600px)" srcset="docs/readme/generated/section-2-es-light-m.svg">
  <source media="(prefers-color-scheme: dark)" srcset="docs/readme/generated/section-2-es-dark.svg">
  <img src="docs/readme/generated/section-2-es-light.svg" alt="02 — Catálogo de servicios" width="100%">
</picture>
</h3>

El catálogo reúne seis áreas de servicio. Cada enlace abre su sección correspondiente en la demo.

| Servicio | Alcance |
| --- | --- |
| [Ciberseguridad](https://arnaualemanydev.github.io/Zent/servicios/#ciberseguridad) | Protección, auditorías, análisis de vulnerabilidades y seguridad perimetral |
| [Cloud y redes](https://arnaualemanydev.github.io/Zent/servicios/#infraestructura-cloud) | Redes, servidores, migración, copias de seguridad y monitorización |
| [Servicios gestionados](https://arnaualemanydev.github.io/Zent/servicios/#servicios-gestionados) | Asistencia remota, mantenimiento, reparación y soporte |
| [Sistemas TPV](https://arnaualemanydev.github.io/Zent/servicios/#sistemas-tpv) | TPV para comercio y hostelería, cartas digitales QR |
| [Telecomunicaciones](https://arnaualemanydev.github.io/Zent/servicios/#telecomunicaciones) | Fibra, telefonía móvil y telefonía IP |
| [Equipos y hardware](https://arnaualemanydev.github.io/Zent/servicios/#equipos-hardware) | Ordenadores, periféricos, redes y software CAD |

La web también incluye una [página de descargas](https://arnaualemanydev.github.io/Zent/descargas/) con una guía de soporte local y enlaces a fabricantes, una [página de contacto](https://arnaualemanydev.github.io/Zent/contacto/) con datos ficticios y páginas de aviso legal, privacidad y cookies.

<h3>
<picture>
  <source media="(max-width: 600px) and (prefers-color-scheme: dark)" srcset="docs/readme/generated/section-3-es-dark-m.svg">
  <source media="(max-width: 600px)" srcset="docs/readme/generated/section-3-es-light-m.svg">
  <source media="(prefers-color-scheme: dark)" srcset="docs/readme/generated/section-3-es-dark.svg">
  <img src="docs/readme/generated/section-3-es-light.svg" alt="03 — Decisiones de desarrollo" width="100%">
</picture>
</h3>

**01 / Interacciones accesibles**  
Las tarjetas de servicios muestran sus detalles mediante el ratón, un botón operable con teclado y la interacción táctil. Utilizan `aria-expanded`, admiten Escape y enlazan con las secciones del catálogo. Véase [`ServiceCard.jsx`](src/components/ServiceCard.jsx).

**02 / Presentación ligera**  
La cabecera utiliza una pequeña ilustración vectorial en lugar de una imagen rasterizada. La página de inicio se carga con el módulo de entrada; las páginas secundarias se cargan bajo demanda. Véanse [`HeroSection.jsx`](src/components/HeroSection.jsx) y [`App.jsx`](src/App.jsx).

**03 / Identidad visual coherente**  
La paleta azul oscuro y cian, las ilustraciones SVG reutilizables y las variables de diseño mantienen una interfaz coherente. Véanse [`index.css`](src/index.css) y [`tailwind.config.js`](tailwind.config.js).

**04 / Alojamiento estático con rutas en cliente**  
React Router utiliza la ruta base `/Zent/` de Vite. Un script posterior a la compilación genera un `index.html` para cada ruta conocida y un `404.html`, facilitando la navegación directa y las recargas en GitHub Pages. Véase [`pages-routes.mjs`](scripts/pages-routes.mjs).

<h3>
<picture>
  <source media="(max-width: 600px) and (prefers-color-scheme: dark)" srcset="docs/readme/generated/section-4-es-dark-m.svg">
  <source media="(max-width: 600px)" srcset="docs/readme/generated/section-4-es-light-m.svg">
  <source media="(prefers-color-scheme: dark)" srcset="docs/readme/generated/section-4-es-dark.svg">
  <img src="docs/readme/generated/section-4-es-light.svg" alt="04 — Tecnologías" width="100%">
</picture>
</h3>

| Tecnología | Función |
| --- | --- |
| React 18 · React Router 6 | Interfaz por componentes, rutas y carga diferida |
| Vite 5 | Servidor de desarrollo y compilación |
| Tailwind CSS 3 | Estilos responsive y variables de diseño |
| Framer Motion 11 | Transiciones y animaciones de entrada |
| Lucide React | Iconos de la interfaz |
| GitHub Actions · GitHub Pages | Compilación y despliegue |

<h3>
<picture>
  <source media="(max-width: 600px) and (prefers-color-scheme: dark)" srcset="docs/readme/generated/section-5-es-dark-m.svg">
  <source media="(max-width: 600px)" srcset="docs/readme/generated/section-5-es-light-m.svg">
  <source media="(prefers-color-scheme: dark)" srcset="docs/readme/generated/section-5-es-dark.svg">
  <img src="docs/readme/generated/section-5-es-light.svg" alt="05 — Puesta en marcha" width="100%">
</picture>
</h3>

El workflow de despliegue utiliza Node.js 22. Instala Node.js 22 y Git para reproducir el proyecto localmente.

```bash
git clone https://github.com/ArnauAlemanyDev/Zent.git
cd Zent
npm ci
npm run dev
```

Abre la dirección local indicada por Vite (normalmente `http://localhost:5173/Zent/`).

Para compilar y previsualizar la versión de producción:

```bash
npm run build
npm run preview
```

La web compilada se genera en `dist/`. El [workflow de Pages](.github/workflows/pages.yml) la publica al subir cambios a `main` y también permite la ejecución manual.

<h3>
<picture>
  <source media="(max-width: 600px) and (prefers-color-scheme: dark)" srcset="docs/readme/generated/section-6-es-dark-m.svg">
  <source media="(max-width: 600px)" srcset="docs/readme/generated/section-6-es-light-m.svg">
  <source media="(prefers-color-scheme: dark)" srcset="docs/readme/generated/section-6-es-dark.svg">
  <img src="docs/readme/generated/section-6-es-light.svg" alt="06 — Estructura del repositorio" width="100%">
</picture>
</h3>

```text
Zent/
├── src/
│   ├── components/     Estructura, navegación e interfaz reutilizable
│   ├── pages/          Inicio, catálogo, descargas, contacto y legal
│   └── lib/            Hook de título y vista 404
├── public/
│   ├── images/         Marca e ilustraciones de servicios (SVG)
│   └── guia-soporte.txt
├── scripts/            Generación de rutas estáticas
├── docs/readme/        Recursos y mantenimiento del README
└── .github/workflows/  Despliegue en GitHub Pages
```

<h3>
<picture>
  <source media="(max-width: 600px) and (prefers-color-scheme: dark)" srcset="docs/readme/generated/section-7-es-dark-m.svg">
  <source media="(max-width: 600px)" srcset="docs/readme/generated/section-7-es-light-m.svg">
  <source media="(prefers-color-scheme: dark)" srcset="docs/readme/generated/section-7-es-dark.svg">
  <img src="docs/readme/generated/section-7-es-light.svg" alt="07 — Proyectos relacionados" width="100%">
</picture>
</h3>

**Zent ERP** — Aplicación independiente de gestión empresarial dentro del ecosistema Zent. Repositorio aún no publicado.

<sub>Proyecto de portfolio de <a href="https://github.com/ArnauAlemanyDev">Arnau Alemany</a>. Zent es una marca ficticia; los datos de contacto y las referencias comerciales de la demo son ilustrativos.</sub>
