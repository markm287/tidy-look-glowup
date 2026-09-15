import { defineTool } from "@lovable.dev/mcp-js";
import { practice } from "../practice";

export default defineTool({
  name: "get_practice_info",
  title: "Get practice info",
  description:
    "Get Radiance Med Spa's address, phone, email, Google Maps link, current booking status, hours, consultation policy, and VIP membership tiers.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(practice, null, 2) }],
    structuredContent: { practice },
  }),
});
