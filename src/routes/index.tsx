import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Radiance Med Spa — Chambersburg, PA" },
      {
        name: "description",
        content:
          "Radiance Med Spa in Chambersburg, PA — refined aesthetic treatments, injectables, and skin care in an elegant setting.",
      },
      { property: "og:title", content: "Radiance Med Spa — Chambersburg, PA" },
      {
        property: "og:description",
        content:
          "Refined aesthetic treatments, injectables, and skin care in Chambersburg, PA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/radiance.html"
      title="Radiance Med Spa"
      style={{
        border: "none",
        width: "100vw",
        height: "100vh",
        display: "block",
      }}
    />
  );
}
