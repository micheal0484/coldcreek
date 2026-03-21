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
        {/* Structured Data for Landscaping Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LandscapingService",
              "name": "Cold Creek Land Services",
              "url": "https://www.coldcreeklandservices.com",
              "logo": "https://www.coldcreeklandservices.com/logo.png",
              "image": "https://www.coldcreeklandservices.com/hero-image.jpg",
              "description": "Professional land management and site prep services. We specialize in land clearing, dirt work, forestry mulching, debris removal, new septic and water line installations, gravel driveways, and snow removal.",
              "telephone": "+1-555-555-5555",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "YOUR_STREET_ADDRESS",
                "addressLocality": "YOUR_CITY",
                "addressRegion": "YOUR_STATE_ABBREVIATION",
                "postalCode": "YOUR_ZIP_CODE",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "YOUR_LATITUDE",
                "longitude": "YOUR_LONGITUDE"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "07:00",
                  "closes": "17:00"
                }
              ],
              "areaServed": [
                {
                  "@type": "City",
                  "name": "PRIMARY_CITY_SERVED"
                },
                {
                  "@type": "City",
                  "name": "SECONDARY_CITY_SERVED"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Land Management & Site Prep Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Land Clearing & Brush Hogging"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Dirt Work & Site Prep"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "New Septic System & Water Line Install"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Gravel Driveway Construction & Repair"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Debris, Pond & Fence Row Cleanup"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Food Plot Creation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Snow Removal"
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
