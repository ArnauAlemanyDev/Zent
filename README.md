<p align="right"><b>EN</b> · <a href="README.es.md">ES</a></p>

<picture>
  <source media="(max-width: 600px) and (prefers-color-scheme: dark)" srcset="docs/readme/generated/header-en-dark-m.svg">
  <source media="(max-width: 600px)" srcset="docs/readme/generated/header-en-light-m.svg">
  <source media="(prefers-color-scheme: dark)" srcset="docs/readme/generated/header-en-dark.svg">
  <img src="docs/readme/generated/header-en-light.svg" alt="Zent — Corporate website" width="100%">
</picture>

<h3>
<picture>
  <source media="(max-width: 600px) and (prefers-color-scheme: dark)" srcset="docs/readme/generated/section-1-en-dark-m.svg">
  <source media="(max-width: 600px)" srcset="docs/readme/generated/section-1-en-light-m.svg">
  <source media="(prefers-color-scheme: dark)" srcset="docs/readme/generated/section-1-en-dark.svg">
  <img src="docs/readme/generated/section-1-en-light.svg" alt="01 — Overview" width="100%">
</picture>
</h3>

Zent is a responsive corporate website for a fictional IT consultancy, covering equipment, networks and technical support for homes, offices and shops. The website is in Spanish.

The project originated during my Multiplatform Application Development work placement. For this portfolio edition, I retained the original architecture and replaced the company's identity, contact details, location and commercial references with fictional content.

[Visit the live demo ↗](https://arnaualemanydev.github.io/Zent/) · [Explore the catalogue ↗](https://arnaualemanydev.github.io/Zent/servicios/)

<h3>
<picture>
  <source media="(max-width: 600px) and (prefers-color-scheme: dark)" srcset="docs/readme/generated/section-2-en-dark-m.svg">
  <source media="(max-width: 600px)" srcset="docs/readme/generated/section-2-en-light-m.svg">
  <source media="(prefers-color-scheme: dark)" srcset="docs/readme/generated/section-2-en-dark.svg">
  <img src="docs/readme/generated/section-2-en-light.svg" alt="02 — Service catalogue" width="100%">
</picture>
</h3>

Six service areas form the catalogue. Each link opens its corresponding section in the demo.

| Service | Scope |
| --- | --- |
| [Cybersecurity](https://arnaualemanydev.github.io/Zent/servicios/#ciberseguridad) | Protection, audits, vulnerability analysis and perimeter security |
| [Cloud & networks](https://arnaualemanydev.github.io/Zent/servicios/#infraestructura-cloud) | Networks, servers, migration, backups and monitoring |
| [Managed services](https://arnaualemanydev.github.io/Zent/servicios/#servicios-gestionados) | Remote assistance, maintenance, repairs and support |
| [Point-of-sale systems](https://arnaualemanydev.github.io/Zent/servicios/#sistemas-tpv) | Retail and hospitality POS, QR digital menus |
| [Telecommunications](https://arnaualemanydev.github.io/Zent/servicios/#telecomunicaciones) | Fibre, mobile services and IP telephony |
| [Equipment & hardware](https://arnaualemanydev.github.io/Zent/servicios/#equipos-hardware) | Computers, peripherals, networking and CAD software |

The site also includes a [downloads page](https://arnaualemanydev.github.io/Zent/descargas/) with a local support guide and vendor links, a [contact page](https://arnaualemanydev.github.io/Zent/contacto/) with fictional details, and legal notice, privacy and cookie pages.

<h3>
<picture>
  <source media="(max-width: 600px) and (prefers-color-scheme: dark)" srcset="docs/readme/generated/section-3-en-dark-m.svg">
  <source media="(max-width: 600px)" srcset="docs/readme/generated/section-3-en-light-m.svg">
  <source media="(prefers-color-scheme: dark)" srcset="docs/readme/generated/section-3-en-dark.svg">
  <img src="docs/readme/generated/section-3-en-light.svg" alt="03 — Development decisions" width="100%">
</picture>
</h3>

**01 / Accessible interactions**  
Service cards expose their details through mouse hover, a keyboard-operable button and touch. They use `aria-expanded`, support Escape and link to catalogue sections. See [`ServiceCard.jsx`](src/components/ServiceCard.jsx).

**02 / Lightweight presentation**  
The hero uses a small vector illustration instead of a raster image. The home page is loaded with the entry module; secondary pages are loaded on demand. See [`HeroSection.jsx`](src/components/HeroSection.jsx) and [`App.jsx`](src/App.jsx).

**03 / Consistent visual identity**  
The ink-blue and cyan palette, reusable SVG illustrations and design variables form a cohesive interface. See [`index.css`](src/index.css) and [`tailwind.config.js`](tailwind.config.js).

**04 / Static hosting with client-side routing**  
React Router uses Vite's `/Zent/` base. A post-build script creates an `index.html` for each known route plus `404.html`, supporting direct navigation and reloads on GitHub Pages. See [`pages-routes.mjs`](scripts/pages-routes.mjs).

<h3>
<picture>
  <source media="(max-width: 600px) and (prefers-color-scheme: dark)" srcset="docs/readme/generated/section-4-en-dark-m.svg">
  <source media="(max-width: 600px)" srcset="docs/readme/generated/section-4-en-light-m.svg">
  <source media="(prefers-color-scheme: dark)" srcset="docs/readme/generated/section-4-en-dark.svg">
  <img src="docs/readme/generated/section-4-en-light.svg" alt="04 — Technical stack" width="100%">
</picture>
</h3>

| Technology | Role |
| --- | --- |
| React 18 · React Router 6 | Component-based UI, routing and lazy loading |
| Vite 5 | Development server and production build |
| Tailwind CSS 3 | Responsive styling and design tokens |
| Framer Motion 11 | UI transitions and entrance animations |
| Lucide React | Interface icons |
| GitHub Actions · GitHub Pages | Build and deployment |

<h3>
<picture>
  <source media="(max-width: 600px) and (prefers-color-scheme: dark)" srcset="docs/readme/generated/section-5-en-dark-m.svg">
  <source media="(max-width: 600px)" srcset="docs/readme/generated/section-5-en-light-m.svg">
  <source media="(prefers-color-scheme: dark)" srcset="docs/readme/generated/section-5-en-dark.svg">
  <img src="docs/readme/generated/section-5-en-light.svg" alt="05 — Getting started" width="100%">
</picture>
</h3>

The deployment workflow uses Node.js 22. Install Node.js 22 and Git to reproduce the project locally.

```bash
git clone https://github.com/ArnauAlemanyDev/Zent.git
cd Zent
npm ci
npm run dev
```

Open the local address displayed by Vite (normally `http://localhost:5173/Zent/`).

To build and preview the production version:

```bash
npm run build
npm run preview
```

The generated site is placed in `dist/`. The [Pages workflow](.github/workflows/pages.yml) publishes it on pushes to `main` and can also be triggered manually.

<h3>
<picture>
  <source media="(max-width: 600px) and (prefers-color-scheme: dark)" srcset="docs/readme/generated/section-6-en-dark-m.svg">
  <source media="(max-width: 600px)" srcset="docs/readme/generated/section-6-en-light-m.svg">
  <source media="(prefers-color-scheme: dark)" srcset="docs/readme/generated/section-6-en-dark.svg">
  <img src="docs/readme/generated/section-6-en-light.svg" alt="06 — Repository structure" width="100%">
</picture>
</h3>

```text
Zent/
├── src/
│   ├── components/     Layout, navigation and reusable UI
│   ├── pages/          Home, catalogue, downloads, contact, legal
│   └── lib/            Page title hook and 404 view
├── public/
│   ├── images/         Brand and service illustrations (SVG)
│   └── guia-soporte.txt
├── scripts/            Static route generation
├── docs/readme/        README artwork and maintenance
└── .github/workflows/  GitHub Pages deployment
```

<h3>
<picture>
  <source media="(max-width: 600px) and (prefers-color-scheme: dark)" srcset="docs/readme/generated/section-7-en-dark-m.svg">
  <source media="(max-width: 600px)" srcset="docs/readme/generated/section-7-en-light-m.svg">
  <source media="(prefers-color-scheme: dark)" srcset="docs/readme/generated/section-7-en-dark.svg">
  <img src="docs/readme/generated/section-7-en-light.svg" alt="07 — Related projects" width="100%">
</picture>
</h3>

**Zent ERP** — A separate business management application in the Zent ecosystem. Repository not published yet.

<sub>Portfolio project by <a href="https://github.com/ArnauAlemanyDev">Arnau Alemany</a>. Zent is a fictional brand; the contact and commercial information in the demo are illustrative.</sub>
