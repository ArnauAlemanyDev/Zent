# README design / Mantenimiento

- `README.md`: English. `README.es.md`: español. Edit prose and links directly; no workflow overwrites these files.
- `design.json`: header, accent colours, section titles, demo label, services and technology stack in both languages. `node docs/readme/build.mjs` regenerates local artwork (Node 22+, no dependencies). Commit the resulting SVGs. Keep the corresponding picture references and alt text in both READMEs in sync with the configuration.
- The header mark is based on `public/images/mark.svg`. Icon sources are documented in `icons/LICENSES.md`.
- When Zent ERP is public, replace the **Zent ERP** placeholder with a link to its confirmed URL in both READMEs; add a reciprocal link to `https://github.com/ArnauAlemanyDev/Zent-Web` in the ERP README.
- The remote repository name and Vite base must agree: `Zent-Web` and `/Zent-Web/`. Keep the portfolio configuration and repository About website link in sync if this ever changes.
- The old `README.en.md` and `docs/banner-dark.svg` / `docs/banner-light.svg` are superseded by this design and can be removed.
