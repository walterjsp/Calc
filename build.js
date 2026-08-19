const fs = require("fs");
const path = require("path");

const dist = path.join(__dirname, "dist");

if (fs.existsSync(dist)) {
  fs.rmSync(dist, { recursive: true, force: true });
}

fs.mkdirSync(dist);

for (const file of ["index.html", "style.css", "logic.js", "app.js"]) {
  fs.copyFileSync(path.join(__dirname, file), path.join(dist, file));
}

console.log("Build completado. Archivos copiados a dist/");
