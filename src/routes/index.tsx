import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Radiance Med Spa - Chambersburg, PA" },
      {
        name: "description",
        content:
          "Physician-led med spa in Chambersburg, PA. Botox, fillers, Sculptra, Radiesse, microneedling, laser, RF, peels, skincare, weight loss, peptides & GLP.",
      },
      {
        name: "keywords",
        content:
          "Botox Chambersburg PA, fillers Chambersburg PA, Sculptra Chambersburg PA, Radiesse Chambersburg PA, microneedling Chambersburg PA, skincare Chambersburg PA, weight loss Chambersburg PA, peptides Chambersburg PA, GLP Chambersburg PA, radiofrequency Chambersburg PA, chemical peels Chambersburg PA, laser hair removal Chambersburg PA, med spa Chambersburg PA",
      },
      { property: "og:title", content: "Radiance Med Spa - Chambersburg, PA" },
      {
        property: "og:description",
        content:
          "Physician-led med spa in Chambersburg, PA. Botox, fillers, Sculptra, Radiesse, microneedling, laser, RF, peels, skincare, weight loss, peptides & GLP.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://radiancepa.com/" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/115c1b1e-58ff-411d-99ce-8365134417f8" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Radiance Med Spa - Chambersburg, PA" },
      {
        name: "twitter:description",
        content:
          "Physician-led med spa in Chambersburg, PA. Botox, fillers, Sculptra, Radiesse, microneedling, laser, RF, peels, skincare, weight loss, peptides & GLP.",
      },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/115c1b1e-58ff-411d-99ce-8365134417f8" },
    ],
    links: [{ rel: "canonical", href: "https://radiancepa.com/" }],
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
