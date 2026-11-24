// Cache-busting: stamps every page's style.css / main.js link with a hash of the file,
// so browsers load the new version right after a deploy.  Run before deploying:
//   node scripts/stamp.mjs
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const hash = (f) => createHash("sha256").update(readFileSync(join(root, f))).digest("hex").slice(0, 10);
const files = { "assets/css/style.css": hash("assets/css/style.css"), "assets/js/main.js": hash("assets/js/main.js") };

for (const page of readdirSync(root).filter((f) => f.endsWith(".html"))) {
  let html = readFileSync(join(root, page), "utf8");
  for (const [f, h] of Object.entries(files)) {
    html = html.replace(new RegExp(`${f.replace(/[.]/g, "\\.")}(\\?v=[a-z0-9]+)?"`, "g"), `${f}?v=${h}"`);
  }
  writeFileSync(join(root, page), html);
}
console.log("stamped", files);
