import { createFileRoute } from "@tanstack/react-router";

// Old site URL — permanently redirect to the current homepage.
export const Route = createFileRoute("/contact")({
  server: { handlers: { GET: () => new Response(null, { status: 301, headers: { Location: "/" } }) } },
});
