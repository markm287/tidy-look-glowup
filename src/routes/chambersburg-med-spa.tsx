import { createFileRoute, Link } from "@tanstack/react-router";

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Radiance+Med+Spa+Chambersburg%2C+PA";

export const Route = createFileRoute("/chambersburg-med-spa")({
  head: () => ({
    meta: [
      { title: "Med Spa in Chambersburg, PA | Radiance Med Spa" },
      {
        name: "description",
        content:
          "Visit Radiance Med Spa at 154 Franklin Farm Lane in Chambersburg, PA for physician-supervised injectables, skin, laser, and wellness care.",
      },
      { property: "og:title", content: "Med Spa in Chambersburg, PA | Radiance Med Spa" },
      {
        property: "og:description",
        content:
          "Find Radiance Med Spa in Chambersburg, PA. View our address, appointment hours, directions, and physician-supervised treatments.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://radiancepa.com/chambersburg-med-spa" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Med Spa in Chambersburg, PA | Radiance Med Spa" },
      {
        name: "twitter:description",
        content:
          "Address, directions, hours, and treatments at Radiance Med Spa in Chambersburg, Pennsylvania.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://radiancepa.com/chambersburg-med-spa" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "@id": "https://radiancepa.com/#medicalbusiness",
          name: "Radiance Med Spa",
          url: "https://radiancepa.com/chambersburg-med-spa",
          telephone: "+1-717-423-1799",
          email: "contact@radiancepa.com",
          hasMap: mapUrl,
          appointmentRequired: true,
          description:
            "Physician-supervised medical aesthetics practice in Chambersburg, Pennsylvania, currently open by appointment only.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "154 Franklin Farm Lane",
            addressLocality: "Chambersburg",
            addressRegion: "PA",
            postalCode: "17202",
            addressCountry: "US",
          },
          areaServed: {
            "@type": "City",
            name: "Chambersburg",
            containedInPlace: { "@type": "State", name: "Pennsylvania" },
          },
          medicalSpecialty: "CosmeticProcedure",
          sameAs: [
            "https://www.instagram.com/radiancepa",
            "https://m.facebook.com/profile.php?id=61584037294695",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://radiancepa.com/" },
            { "@type": "ListItem", position: 2, name: "Chambersburg Med Spa", item: "https://radiancepa.com/chambersburg-med-spa" },
          ],
        }),
      },
    ],
  }),
  component: ChambersburgLocationPage,
});

function ChambersburgLocationPage() {
  return (
    <main className="location-page">
      <header className="location-nav">
        <Link to="/" aria-label="Radiance Med Spa home">
          <img
            src="/__l5e/assets-v1/5b2f4f42-9e06-434c-91f6-dcf15650198f/radiance-logo.png"
            alt="Radiance Med Spa"
          />
        </Link>
        <a className="location-nav-link" href="tel:7174231799">Call (717) 423-1799</a>
      </header>

      <section className="location-hero">
        <img
          className="location-mark"
          src="/__l5e/assets-v1/2acddc9f-3dde-4483-b365-5dcd91f01251/radiance-starburst-black.png"
          alt=""
        />
        <p className="location-eyebrow">Physician-supervised aesthetic care</p>
        <h1>Radiance Med Spa in <em>Chambersburg, PA</em></h1>
        <p className="location-intro">
          Visit our Chambersburg practice for personalized injectable, skin, laser, and
          wellness treatments delivered with clinical precision and physician oversight.
        </p>
        <div className="location-actions">
          <a className="location-button location-button-primary" href={mapUrl} target="_blank" rel="noopener noreferrer">Get Directions</a>
          <a className="location-button location-button-secondary" href="tel:7174231799">Call to Schedule</a>
        </div>
      </section>

      <section className="location-details" aria-label="Practice information">
        <article>
          <p className="location-label">Visit us</p>
          <h2>Practice Address</h2>
          <address>
            <a href={mapUrl} target="_blank" rel="noopener noreferrer">
              154 Franklin Farm Lane<br />Chambersburg, PA 17202
            </a>
          </address>
          <p><a href="tel:7174231799">(717) 423-1799</a></p>
          <p><a href="mailto:contact@radiancepa.com">contact@radiancepa.com</a></p>
        </article>
        <article>
          <p className="location-label">Hours</p>
          <h2>By Appointment Only</h2>
          <p>We are currently welcoming clients by appointment.</p>
          <h3>Scheduled hours beginning November 2026</h3>
          <dl className="location-hours">
            <div><dt>Monday, Thursday & Friday</dt><dd>9am–4pm</dd></div>
            <div><dt>Tuesday & Wednesday</dt><dd>1pm–7pm</dd></div>
            <div><dt>First Saturday monthly</dt><dd>8am–12pm</dd></div>
            <div><dt>Sunday</dt><dd>Closed</dd></div>
          </dl>
          <p className="location-note">Additional appointment times may be available.</p>
        </article>
      </section>

      <section className="location-map-band">
        <div>
          <p className="location-label">Chambersburg, Pennsylvania</p>
          <h2>Convenient Local Care</h2>
          <p>
            Radiance Med Spa provides physician-supervised Botox and neurotoxins, dermal
            fillers, Sculptra, Radiesse, microneedling, radiofrequency treatments, laser hair
            removal, chemical peels, medical-grade skincare, and personalized wellness care.
          </p>
          <div className="location-text-links">
            <a href="/radiance.html#pricing">Explore Treatments</a>
            <a href="/radiance.html#contact">Book a Consultation</a>
          </div>
        </div>
        <a className="location-map" href={mapUrl} target="_blank" rel="noopener noreferrer" aria-label="Open Radiance Med Spa in Google Maps">
          <iframe
            src="https://maps.google.com/maps?q=Radiance+Med+Spa+Chambersburg+PA&z=14&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map showing Radiance Med Spa in Chambersburg, Pennsylvania"
          />
          <span>Open in Google Maps</span>
        </a>
      </section>

      <footer className="location-footer">
        <Link to="/">Radiance Med Spa</Link>
        <span>154 Franklin Farm Lane · Chambersburg, PA 17202</span>
      </footer>
    </main>
  );
}