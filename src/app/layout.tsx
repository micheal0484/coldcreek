import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Cold Creek Land Services | Professional Land Management & Clearing",
  description: "Professional land clearing, debris removal, dirt work, and property management services. Licensed & insured. Serving local areas with quality land services.",
  keywords: "land clearing, debris removal, dirt work, site prep, food plot creation, gravel driveway, pond cleanup, fence row cleanup, brush hogging, mulching, septic system, water line, snow removal",
  authors: [{ name: "Cold Creek Land Services" }],
  creator: "Cold Creek Land Services",
  publisher: "Cold Creek Land Services",
  openGraph: {
    title: "Cold Creek Land Services | Professional Land Management",
    description: "Professional land clearing and property management services. Licensed & insured.",
    type: "website",
    locale: "en_US",
    siteName: "Cold Creek Land Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cold Creek Land Services",
    description: "Professional land clearing and property management services.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://coldcreeklandservices.com/#organization",
              "name": "Cold Creek Land Services",
              "description": "Professional land clearing, debris removal, dirt work, and property management services.",
              "url": "https://coldcreeklandservices.com",
              "telephone": "+1-XXX-XXX-XXXX", // TODO: Add actual phone number
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Local Area", // TODO: Add actual location
                "addressRegion": "State",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "XX.XXXX", // TODO: Add actual coordinates
                "longitude": "XX.XXXX"
              },
              "openingHours": "Mo-Fr 08:00-17:00",
              "priceRange": "$$",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Land Management Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Land Clearing",
                      "description": "Professional land clearing services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Debris Removal & Cleanup",
                      "description": "Complete debris removal and property cleanup"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Dirt Work & Site Prep",
                      "description": "Site preparation and dirt work services"
                    }
                  }
                ]
              }
            }),
          }}
        />
      </head>
      <body className={`${inter.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
