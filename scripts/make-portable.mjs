// Rewrites absolute paths in the static export to relative ones, so the
// site in out/ opens directly from disk (file://) with no server — and
// still works on any static host.
//
// - /_next/, /images/, /videos/ asset paths become relative.
// - Internal route links (/about, /learning, …) become ./<route>.html.
// - CSS/HTML files get a prefix relative to their own location; JS (and the
//   RSC .txt payloads) get "./", because URLs there resolve against the
//   PAGE's location, and every exported page sits flat in out/.
import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join, relative, dirname, sep } from "node:path";

const OUT = join(process.cwd(), "out");

// Route names = top-level html files, e.g. about.html -> "/about"
const routes = readdirSync(OUT)
  .filter((f) => f.endsWith(".html"))
  .map((f) => f.replace(/\.html$/, ""))
  .filter((name) => !["index", "404"].includes(name));

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

let changed = 0;
for (const file of walk(OUT)) {
  if (!/\.(html|css|js|txt)$/.test(file)) continue;
  // Path from this file's folder back to the out/ root, e.g. "" or "../../"
  const toRoot = relative(dirname(file), OUT).split(sep).filter(Boolean);
  const fileRelative = toRoot.length
    ? toRoot.map(() => "..").join("/") + "/"
    : "./";
  // URLs inside JS and RSC payloads resolve against the page, not the file.
  const prefix = /\.(js|txt)$/.test(file) ? "./" : fileRelative;

  const original = readFileSync(file, "utf8");
  let updated = original
    .replaceAll('"/_next/', `"${prefix}_next/`)
    .replaceAll("'/_next/", `'${prefix}_next/`)
    .replaceAll("(/_next/", `(${prefix}_next/`)
    .replaceAll("url(/_next/", `url(${prefix}_next/`)
    .replaceAll('"/images/', `"${prefix}images/`)
    .replaceAll("'/images/", `'${prefix}images/`)
    .replaceAll("(/images/", `(${prefix}images/`)
    .replaceAll('"/videos/', `"${prefix}videos/`)
    .replaceAll("'/videos/", `'${prefix}videos/`);

  // Internal route links -> flat .html files.
  for (const route of routes) {
    updated = updated
      .replaceAll(`"/${route}"`, `"${prefix}${route}.html"`)
      .replaceAll(`"/${route}#`, `"${prefix}${route}.html#`);
  }
  // Home links, with and without an anchor.
  updated = updated
    .replaceAll('"/#', `"${prefix}index.html#`)
    .replaceAll('href="/"', `href="${prefix}index.html"`)
    .replaceAll('href:"/"', `href:"${prefix}index.html"`);

  if (updated !== original) {
    writeFileSync(file, updated);
    changed++;
  }
}
console.log(
  `make-portable: rewrote ${changed} file(s); routes: ${routes.join(", ")}`,
);
