// Regenerates src/lib/mcp/data/pricing.json from public/radiance.html.
// Run with: bun scripts/generate-mcp-pricing.mjs
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const html = readFileSync("public/radiance.html", "utf8");

const decode = (s) =>
  s
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&#39;|&rsquo;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();

const tabTitles = {
  injectables: "Injectables",
  devices: "Devices & Laser",
  wellness: "Wellness",
  facials: "Facials & Peels",
  packages: "Packages",
  boosters: "Boosters",
  retail: "Retail",
};

const categories = [];

for (const [id, title] of Object.entries(tabTitles)) {
  const start = html.indexOf(`id="ptab-${id}"`);
  if (start === -1) continue;
  const nextIdx = Object.keys(tabTitles)
    .map((other) => html.indexOf(`id="ptab-${other}"`))
    .filter((i) => i > start);
  const end = nextIdx.length ? Math.min(...nextIdx) : html.length;
  const section = html.slice(start, end);

  const blocks = [];
  const blockRe = /<div class="category-label">([\s\S]*?)<\/div>([\s\S]*?)(?=<div class="category-label">|<div class="pricing-note">|$)/g;
  let bm;
  while ((bm = blockRe.exec(section))) {
    const label = decode(bm[1]);
    const body = bm[2];
    const items = [];
    const rowRe = /<div class="price-service">([\s\S]*?)<\/div>\s*(?:<div class="price-amount">([\s\S]*?)<\/div>)?/g;
    let rm;
    while ((rm = rowRe.exec(body))) {
      const raw = rm[1];
      const detailMatch = raw.match(/<div class="price-detail">([\s\S]*?)<\/div>/);
      const name = decode(raw.replace(/<div class="price-detail">[\s\S]*?<\/div>/g, ""));
      if (!name) continue;
      items.push({
        name,
        price: rm[2] ? decode(rm[2]) : null,
        detail: detailMatch ? decode(detailMatch[1]) : null,
      });
    }
    if (items.length) blocks.push({ category: label, items });
  }

  const notes = [...section.matchAll(/<div class="pricing-note">([\s\S]*?)<\/div>/g)].map((m) =>
    decode(m[1])
  );

  categories.push({ id, title, blocks, notes });
}

mkdirSync("src/lib/mcp/data", { recursive: true });
writeFileSync(
  "src/lib/mcp/data/pricing.json",
  JSON.stringify({ generatedFrom: "public/radiance.html", categories }, null, 2) + "\n"
);
console.log(
  "wrote",
  categories.length,
  "sections,",
  categories.reduce((n, c) => n + c.blocks.reduce((m, b) => m + b.items.length, 0), 0),
  "items"
);
