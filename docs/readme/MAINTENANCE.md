# README design / Mantenimiento

- `README.md`: English. `README.es.md`: español. Edit the prose and links in these Markdown files directly; no workflow overwrites them.
- `design.json`: header, accent colours and ordered section labels. `node docs/readme/build.mjs` regenerates local artwork (Node 22+, no dependencies). Commit the resulting SVGs. If adding or removing sections, update the matching picture references in both READMEs.
- The small mark in the header is based on the existing Zent mark in `public/images/mark.svg`. To reuse this system for another project, change the name, handle, mark and accent in `design.json`, then adapt the two READMEs and regenerate.
- When the ERP repository is public, replace the **Zent ERP** placeholder in both READMEs with a Markdown link using its confirmed URL. Add a reciprocal link in the ERP README to `https://github.com/ArnauAlemanyDev/Zent`.
- Do not change the Vite base, repo name or Pages workflow for README-only edits.
- The old `README.en.md` and `docs/banner-dark.svg` / `docs/banner-light.svg` are superseded by this design and can be removed.
