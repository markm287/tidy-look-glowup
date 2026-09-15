import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import pricing from "../data/pricing.json";

type Match = {
  section: string;
  category: string;
  name: string;
  price: string | null;
  detail: string | null;
};

export default defineTool({
  name: "search_treatments",
  title: "Search treatments",
  description:
    "Search Radiance Med Spa's treatment, package, booster, and retail menu by keyword (for example \"botox\", \"microneedling\", \"laser hair removal\", \"peel\", \"weight loss\", \"retinol\") and get matching services with pricing.",
  inputSchema: {
    query: z.string().trim().min(2).describe("Keyword or treatment name to search for."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query.toLowerCase();
    const matches: Match[] = [];

    for (const section of pricing.categories) {
      for (const block of section.blocks) {
        for (const item of block.items) {
          const haystack = `${block.category} ${item.name} ${item.detail ?? ""}`.toLowerCase();
          if (haystack.includes(q)) {
            matches.push({
              section: section.title,
              category: block.category,
              name: item.name,
              price: item.price,
              detail: item.detail,
            });
          }
        }
      }
    }

    if (matches.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: `No published services match "${query}". Use list_treatments to see the full menu.`,
          },
        ],
        structuredContent: { matches: [] },
      };
    }

    const text = matches
      .map(
        (m) =>
          `- ${m.name}${m.price ? `: ${m.price}` : ""} — ${m.section} / ${m.category}${
            m.detail ? ` (${m.detail})` : ""
          }`
      )
      .join("\n");

    return {
      content: [{ type: "text", text }],
      structuredContent: { matches },
    };
  },
});
