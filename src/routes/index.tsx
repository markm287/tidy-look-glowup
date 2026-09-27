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
          <li>Glow: $99/month, 5% off eligible services and injectables</li>
          <li>Luminary: $199/month, 10% off eligible services and injectables, plus one complimentary booster per quarter</li>
          <li>Radiant: $349/month, 15% off eligible services and injectables, plus two complimentary boosters per quarter</li>
        </ul>
        <p>Each monthly payment is banked as a service credit. Credits roll over while active and remain usable for 12 months after cancellation. Complimentary quarterly perks expire at the end of their calendar quarter and do not roll over; birth month perks expire at the end of the birth month; all unused perks end immediately upon cancellation. Plans begin with a 6-month commitment, then renew month to month. Plan cancellation is permitted at any time without penalty with 30 days' written notice; VIP appointments require at least 48 hours' notice to cancel or reschedule. During the first 6 months, unused-funds refunds deduct services and treatments at VIP pricing and used perks at standard non-VIP prices. Discounts exclude weight management and peptide programs; all VIP tiers receive package pricing at 20% off regular single-session totals, and tier discounts don't stack on top. Radiance may cancel a plan for abuse of policy or chargebacks with written notice; VIP data is handled per the privacy policy and HIPAA. See the VIP section and text version for full terms.</p>
        <h2>Package policy</h2>
        <p>Packages require a provider consultation and are valid for 18 months from purchase unless a different term is specified in writing at sale. Give at least 48 hours' notice to cancel or reschedule a package session; changes within 48 hours forfeit the session's deposit or hold and require a new deposit to reschedule. Late cancellations or no-shows may count as a used session. Before the first session, refunds are subject to a 10% fee. After the first session, packages are non-refundable except as required by law or under an approved medical exception. Written requests for a qualifying medical pause must be made before expiration. All VIP tiers receive 20% off regular single-session totals on packages, without additional tier discounts. Read the full package terms on the treatments page or in the <a href="/llms.txt">text version</a>.</p>
        <p>
          Full treatment menu and pricing: <a href="/llms.txt">text version</a>.
        </p>
        <nav aria-label="Readable site pages">
          <a href="/ai/home.html">Home</a>{" · "}
          <a href="/ai/about.html">About</a>{" · "}
          <a href="/ai/providers.html">Providers</a>{" · "}
          <a href="/ai/memberships.html">VIP</a>{" · "}
          <a href="/ai/pricing.html">Treatments and pricing</a>{" · "}
          <a href="/ai/contact.html">Booking and contact</a>
        </nav>
      </main>
      <iframe src="/radiance.html" title="Radiance Med Spa" className="radiance-frame" />
    </>
  );
}
