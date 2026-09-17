import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Radiance Med Spa - Chambersburg, PA" },
      {
        name: "description",
        content:
          "Physician-supervised med spa in Chambersburg, PA offering Botox, fillers, Sculptra, Radiesse, microneedling, laser, skincare, and wellness care.",
      },
      {
        name: "keywords",
        content:
          "Botox Chambersburg PA, fillers Chambersburg PA, Sculptra Chambersburg PA, Radiesse Chambersburg PA, microneedling Chambersburg PA, skincare Chambersburg PA, weight loss Chambersburg PA, peptides Chambersburg PA, GLP Chambersburg PA, radiofrequency Chambersburg PA, chemical peels Chambersburg PA, laser hair removal Chambersburg PA, med spa Chambersburg PA",
      },
      { property: "og:title", content: "Med Spa in Chambersburg, PA | Radiance Med Spa" },
      {
        property: "og:description",
        content:
          "Physician-supervised med spa in Chambersburg, PA offering injectables, skin, laser, and wellness treatments.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://radiancepa.com/" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/115c1b1e-58ff-411d-99ce-8365134417f8" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Med Spa in Chambersburg, PA | Radiance Med Spa" },
      {
        name: "twitter:description",
        content:
          "Physician-supervised med spa in Chambersburg, PA offering injectables, skin, laser, and wellness treatments.",
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
        .radiance-summary {
          position: absolute;
          width: 1px;
          height: 1px;
          margin: -1px;
          padding: 0;
          overflow: hidden;
          clip: rect(0 0 0 0);
          clip-path: inset(50%);
          white-space: nowrap;
          border: 0;
        }
      `}</style>
      <main className="radiance-summary">
        <h1>Radiance Med Spa — Med Spa in Chambersburg, PA</h1>
        <p>
          Physician-overseen aesthetic and wellness treatments in Chambersburg, Pennsylvania.
          Botox, Jeuveau, Dysport, dermal filler, Sculptra, Radiesse, RF microneedling,
          microneedling, IPL photofacials, laser hair removal, non-invasive radiofrequency,
          chemical peels, facials, IV therapy, GLP-1 weight loss, peptide therapy, and
          medical-grade PCA Skin retail.
        </p>
        <h2>Contact</h2>
        <ul>
          <li>Address: 154 Franklin Farm Lane, Chambersburg, PA 17202</li>
          <li>
            Phone: <a href="tel:+17174231799">(717) 423-1799</a>
          </li>
          <li>
            Email: <a href="mailto:contact@radiancepa.com">contact@radiancepa.com</a>
          </li>
        </ul>
        <h2>Booking</h2>
        <p>
          By appointment only. Treatments other than neurotoxin and dermal filler are unavailable
          until renovation is complete in November/December 2026. A $50 provider consultation,
          fully credited toward any service booked at or after the visit, is required prior to any
          treatment.
        </p>
        <h2>Scheduled hours (beginning November 2026)</h2>
        <ul>
          <li>Monday: 9:00 AM – 4:00 PM</li>
          <li>Tuesday: 1:00 PM – 7:00 PM</li>
          <li>Wednesday: 1:00 PM – 7:00 PM</li>
          <li>Thursday: 9:00 AM – 4:00 PM</li>
          <li>Friday: 9:00 AM – 4:00 PM</li>
          <li>Saturday: First Saturday of the month, 8:00 AM – 12:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
        <h2>VIP membership</h2>
        <ul>
          <li>Glow: 5% off treatments and retail</li>
          <li>Luminary: 10% off, plus one complimentary booster per quarter</li>
          <li>Radiant: 15% off, plus two complimentary boosters per quarter</li>
        </ul>
        <p>
          Full treatment menu and pricing: <a href="/llms.txt">text version</a>.
        </p>
      </main>
      <iframe src="/radiance.html" title="Radiance Med Spa" className="radiance-frame" />
    </>
  );
}
