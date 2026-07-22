#!/usr/bin/env node
/**
 * scripts/check-links.mjs
 *
 * Crawls the built static site in ./dist and fails if any internal link
 * points at a path that wasn't generated. Catches the "some Discover /
 * mega-nav links 404" class of bug at build time instead of in front of a
 * client.
 *
 * Usage:
 *   npm run build            # produces ./dist
 *   node scripts/check-links.mjs
 *
 * Wire into CI / npm so it can't be skipped:
 *   package.json → "scripts": {
 *     "build": "astro build",
 *     "check:links": "node scripts/check-links.mjs",
 *     "verify": "npm run build && npm run check:links"
 *   }
 * Run `npm run verify` in CI (GitHub Actions) on every push.
 *
 * Zero dependencies — plain Node (>=18), reads the filesystem only, makes no
 * network calls, so it's fast and deterministic.
 */

import { readdir, readFile, stat } from "node:fs/promises";
import { join, extname } from "node:path";

const DIST = "dist";
const ROOT = process.cwd();
const distDir = join(ROOT, DIST);

// ---- 1. Collect every HTML file in dist ------------------------------------

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (extname(entry.name) === ".html") out.push(full);
  }
  return out;
}

// ---- 2. Build the set of routes that actually exist ------------------------
// Astro (default, trailing-slash flexible) emits /about → dist/about/index.html
// and /terms → dist/terms/index.html. Normalize both a page's directory form
// and its explicit .html form into path keys.

function fileToRoutes(file) {
  let rel = file.slice(distDir.length).replace(/\\/g, "/"); // /about/index.html
  const routes = new Set();
  if (rel.endsWith("/index.html")) {
    const base = rel.slice(0, -"index.html".length); // /about/
    routes.add(base); // /about/
    routes.add(base.replace(/\/$/, "")); // /about
    if (base === "/") routes.add("/");
  } else if (rel.endsWith(".html")) {
    const base = rel.slice(0, -".html".length); // /about
    routes.add(base);
    routes.add(base + "/");
    routes.add(base + ".html");
  }
  return routes;
}

// ---- 3. Extract internal links from an HTML file ---------------------------

function extractLinks(html) {
  const links = [];
  const re = /(?:href|src)\s*=\s*["']([^"']+)["']/gi;
  let m;
  while ((m = re.exec(html)) !== null) links.push(m[1]);
  return links;
}

function isInternal(href) {
  if (!href) return false;
  // Skip anchors, mailto, tel, external, data URIs, and protocol-relative.
  if (/^(https?:)?\/\//i.test(href)) return false;
  if (/^(mailto:|tel:|#|data:|javascript:)/i.test(href)) return false;
  return href.startsWith("/");
}

function normalize(href) {
  return href.split("#")[0].split("?")[0]; // drop hash + query
}

// ---- 4. Run ----------------------------------------------------------------

async function main() {
  try {
    await stat(distDir);
  } catch {
    console.error(`✗ No ./${DIST} directory. Run \`npm run build\` first.`);
    process.exit(1);
  }

  const files = await walk(distDir);
  const existing = new Set();
  for (const f of files) for (const r of fileToRoutes(f)) existing.add(r);

  // Assets (css/js/img/fonts) live at literal paths in dist — treat any file
  // that exists on disk as valid too.
  const assetOk = async (href) => {
    const p = join(distDir, href);
    try { await stat(p); return true; } catch { return false; }
  };

  const broken = new Map(); // href -> Set(source files)

  for (const file of files) {
    const html = await readFile(file, "utf8");
    const src = file.slice(distDir.length).replace(/\\/g, "/") || "/";
    for (const raw of extractLinks(html)) {
      if (!isInternal(raw)) continue;
      const href = normalize(raw);
      if (!href) continue;
      if (existing.has(href) || existing.has(href.replace(/\/$/, "")) || existing.has(href + "/")) continue;
      if (await assetOk(href)) continue;
      if (!broken.has(href)) broken.set(href, new Set());
      broken.get(href).add(src);
    }
  }

  if (broken.size === 0) {
    console.log(`✓ Link check passed — ${files.length} pages, no broken internal links.`);
    process.exit(0);
  }

  console.error(`✗ ${broken.size} broken internal link(s):\n`);
  for (const [href, sources] of [...broken.entries()].sort()) {
    console.error(`  ${href}`);
    for (const s of [...sources].sort().slice(0, 5)) console.error(`      ← ${s}`);
    if (sources.size > 5) console.error(`      … +${sources.size - 5} more`);
  }
  console.error(`\nAdd a page for each, or ensure the catch-all route covers it.`);
  process.exit(1);
}

main().catch((e) => { console.error(e); process.exit(1); });
