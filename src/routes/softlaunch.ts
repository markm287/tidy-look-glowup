import { createFileRoute } from "@tanstack/react-router";
import asset from "@/assets/radiance-soft-launch-menu-v21.pdf.asset.json";

const FILENAME = "radiance-soft-launch-menu.pdf";

export const Route = createFileRoute("/softlaunch")({
  server: {
    handlers: {
      GET: async () => {
        // Never resolve outbound requests against a caller-controlled host.
        const target = new URL(asset.url, "https://radiancepa.com");
        try {
          const upstream = await fetch(target, {
            headers: { accept: "application/pdf" },
            redirect: "error",
          });
          if (upstream.ok && upstream.body) {
            return new Response(upstream.body, {
              status: 200,
              headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": `inline; filename="${FILENAME}"`,
                "Cache-Control": "public, max-age=3600",
                // Direct-address only: keep it out of search results and AI crawlers.
                "X-Robots-Tag": "noindex, nofollow, noarchive",
              },
            });
          }
        } catch {
          // Asset unreachable from this runtime; send the browser to it directly.
        }
        return new Response(null, {
          status: 302,
          headers: {
            Location: asset.url,
            "X-Robots-Tag": "noindex, nofollow, noarchive",
          },
        });
      },
    },
  },
});
