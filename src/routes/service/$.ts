import { createFileRoute } from "@tanstack/react-router";

// Old /service/* URLs — permanently redirect to the treatments menu.
export const Route = createFileRoute("/service/$")({
  server: { handlers: { GET: () => new Response(null, { status: 301, headers: { Location: "/ai/pricing.html" } }) } },
});
