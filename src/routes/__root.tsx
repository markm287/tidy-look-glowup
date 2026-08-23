import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Radiance Med Spa — Botox, Fillers, Sculptra, Radiesse | Chambersburg, PA" },
      { name: "description", content: "Physician-led med spa in Chambersburg, PA. Botox, fillers, Sculptra, Radiesse, microneedling, laser, RF, peels, skincare, weight loss, peptides & GLP." },
      { name: "author", content: "Lovable" },
      { name: "google-site-verification", content: "OygmQAdWWaQAW4YI3ZqUknubsD48TC3ps5q-0NDWWPc" },
      { property: "og:title", content: "Radiance Med Spa — Botox, Fillers, Sculptra, Radiesse | Chambersburg, PA" },
      { property: "og:description", content: "Physician-led med spa in Chambersburg, PA. Botox, fillers, Sculptra, Radiesse, microneedling, laser, RF, peels, skincare, weight loss, peptides & GLP." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Radiance Med Spa" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Radiance Med Spa — Botox, Fillers, Sculptra, Radiesse | Chambersburg, PA" },
      { name: "twitter:description", content: "Physician-led med spa in Chambersburg, PA. Botox, fillers, Sculptra, Radiesse, microneedling, laser, RF, peels, skincare, weight loss, peptides & GLP." },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "Radiance Med Spa",
          url: "https://radiancepa.com",
          telephone: "+1-717-516-8272",
          email: "contact@radiancepa.com",
          image: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/115c1b1e-58ff-411d-99ce-8365134417f8",
          address: {
            "@type": "PostalAddress",
            streetAddress: "154 Franklin Farm Lane",
            addressLocality: "Chambersburg",
            addressRegion: "PA",
            postalCode: "17202",
            addressCountry: "US",
          },
          medicalSpecialty: "CosmeticProcedure",
          areaServed: "Chambersburg, PA",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Aesthetic and Wellness Services",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Botox / Neurotoxin" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dermal Fillers" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sculptra" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Radiesse" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Microneedling" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "RF Microneedling" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Laser Hair Removal" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "IPL Photofacial" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Non-Invasive Radiofrequency" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chemical Peels" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Medical-Grade Skincare" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "GLP-1 Weight Loss Programs" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Peptide Therapy" } },
            ],
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
