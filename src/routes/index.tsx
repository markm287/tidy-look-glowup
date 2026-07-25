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
          "Radiance Med Spa in Chambersburg, PA — refined aesthetic treatments, injectables, and skin care in an elegant setting.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <style>{`
        html, body { margin: 0; height: 100%; overflow: hidden; overscroll-behavior: none; }
        .radiance-frame {
          border: 0;
          display: block;
          width: 100vw;
          height: 100vh;
          height: 100dvh;
        }
      `}</style>
      <iframe src="/radiance.html" title="Radiance Med Spa" className="radiance-frame" />
    </>
  );
}
