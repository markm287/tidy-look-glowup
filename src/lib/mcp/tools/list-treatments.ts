import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import pricing from "../data/pricing.json";

const sectionIds = pricing.categories.map((c) => c.id);

export default defineTool({
  name: "list_treatments",
  title: "List treatments and pricing",
  description:
    "List Radiance Med Spa's published treatment menu with pricing. Sections: injectables (Botox, Jeuveau, Dysport, dermal filler, Sculptra, Radiesse, Kybella), devices (RF microneedling, non-invasive RF, microneedling, IPL, laser hair removal, spider veins), wellness (IV therapy, GLP-1 weight loss, peptides), facials (facials and chemical peels), packages, boosters, and retail skincare. Omit the section to get everything.",
  inputSchema: {
    section: z
      .enum(["injectables", "devices", "wellness", "facials", "packages", "boosters", "retail"])
      .nullable()
      .describe(`One of: ${sectionIds.join(", ")}. Null or omitted returns all sections.`),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ section }) => {
    const categories = section
      ? pricing.categories.filter((c) => c.id === section)
      : pricing.categories;

    const text = categories
      .map((c) => {
        const blocks = c.blocks
          .map((b) => {
            const rows = b.items
              .map(
                (i) =>
                  `  - ${i.name}${i.price ? `: ${i.price}` : ""}${i.detail ? ` (${i.detail})` : ""}`
              )
              .join("\n");
            return `${b.category}\n${rows}`;
          })
          .join("\n\n");
        const notes = c.notes.length ? `\n\nNotes: ${c.notes.join(" ")}` : "";
        return `# ${c.title}\n\n${blocks}${notes}`;
      })
      .join("\n\n");

    return {
      content: [{ type: "text", text: text || "No treatments found for that section." }],
      structuredContent: { sections: categories },
    };
  },
});
