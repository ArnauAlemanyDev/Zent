// GitHub Pages serves directories directly. Keep incoming paths and fragments
// intact when visitors open a catalogue section or reload a page.
import { copyFile, mkdir } from "node:fs/promises";

for (const route of ["servicios", "descargas", "contacto", "privacidad", "aviso-legal", "cookies"]) {
  await mkdir(`dist/${route}`, { recursive: true });
  await copyFile("dist/index.html", `dist/${route}/index.html`);
}
await copyFile("dist/index.html", "dist/404.html");
