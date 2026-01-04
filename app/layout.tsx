import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Upperhand Zimbabwe | Solar Installation, Electrical & Borehole Drilling - Harare, Bulawayo, Gweru",
  description: "Leading solar installation, electrical services & borehole drilling across Zimbabwe. Serving Harare, Bulawayo, Chitungwiza, Gweru, Mutare & nationwide. Expert technicians. Call 0771 591 526.",
  keywords: "upperhand, upperhandzim, www.upperhandzim.com, upperhandzim.com, upperhand zimbabwe, upperhand zim, upperhand solar, upperhand construction, solar installation zimbabwe, solar panels harare, borehole drilling zimbabwe, electrical services harare, roofing zimbabwe, ceiling designs harare, electrician bulawayo, solar system zimbabwe, construction zimbabwe",
  metadataBase: new URL("https://upperhandzim.com"),
  alternates: {
    canonical: "https://upperhandzim.com",
  },
  openGraph: {
    type: "website",
    locale: "en_ZW",
    siteName: "Upperhand Zimbabwe",
    url: "https://upperhandzim.com",
    title: "Upperhand | Solar, Electrical & Borehole Services Across Zimbabwe",
    description: "Professional solar installation, electrical services, borehole drilling nationwide in Zimbabwe. Based in Harare, serving all cities. Expert technicians, quality materials.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Upperhand - Solar Installation and Construction Services Across Zimbabwe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Upperhand Zimbabwe | Solar Installation Nationwide",
    description: "Professional solar, electrical, borehole drilling & construction services across all Zimbabwe. Call 0771 591 526",
    images: ["/og-image.jpg"],
  },
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  category: "construction",
  authors: [{ name: "Upperhand Zimbabwe" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Upperhand Zimbabwe",
    image: "https://upperhandzim.com/og-image.jpg",
    description: "Professional solar installation, electrical services, borehole drilling, roofing, ceiling designs, and painting services across Zimbabwe. Serving Harare, Bulawayo, Gweru, Mutare, Chitungwiza & all major cities nationwide.",
    url: "https://upperhandzim.com",
    telephone: "+263771591526",
    email: "Takuenyash@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Zimbabwe",
      addressCountry: "ZW",
    },
    areaServed: {
      "@type": "Country",
      name: "Zimbabwe",
    },
    priceRange: "$$",
    sameAs: [
      "https://www.facebook.com/upperhand",
      "https://wa.me/263771591526",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Professional Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Solar Installation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Electrical Services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Borehole Drilling",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Roofing Solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ceiling Designs",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Painting Services",
          },
        },
      ],
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f59e0b" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" defer></script>
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Additional SEO meta tags */}
        <link rel="canonical" href="https://upperhandzim.com" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Upperhand" />
      </head>
      <body
        className={`${inter.className} antialiased bg-white text-slate-600 selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden`}
      >
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
