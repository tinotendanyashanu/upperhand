import ScrollReveal from "../../components/ScrollReveal";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Installation Harare | Borehole Drilling & Electrical Services Harare - Upperhand",
  description: "Leading solar installation, borehole drilling & electrical services in Harare, Zimbabwe. Serving Borrowdale, Mount Pleasant, Avondale, Glen Lorne, Highlands. Call 0771 591 526 for free quote.",
  keywords: "solar installation harare, borehole drilling harare, electrician harare, roofing harare, ceiling installation harare, solar panels harare, electrical contractor harare, construction harare",
  openGraph: {
    title: "Upperhand Harare | #1 Solar, Electrical & Borehole Specialists",
    description: "Top-rated solar installation and construction services in Harare. Serving all suburbs. Free quotes available.",
    type: "website",
    url: "https://upperhandzim.com/locations/harare",
  },
};

const services = [
  {
    title: "Solar Installation Harare",
    slug: "solar",
    icon: "lucide:sun",
    color: "amber",
    description: "Professional solar panel installation across Harare suburbs including Borrowdale, Mount Pleasant, Avondale, and Glen Lorne. Beat load shedding with reliable solar power.",
    features: [
      "2kVA - 10kVA systems available",
      "Tier-1 solar panels with 25-year warranty",
      "Lithium & lead-acid battery options",
      "Installation completed in 2-3 days",
      "5-year installation warranty",
      "After-sales support & maintenance"
    ]
  },
  {
    title: "Borehole Drilling Harare",
    slug: "boreholes",
    icon: "lucide:droplets",
    color: "cyan",
    description: "Expert borehole drilling services in Harare and surrounding areas. 98% success rate. Reliable water supply for your home or business.",
    features: [
      "Site survey & geological assessment",
      "Drilling depth up to 100 meters",
      "Steel & PVC casing installation",
      "Submersible & surface pump installation",
      "Solar-powered pump options",
      "Water tank setup included"
    ]
  },
  {
    title: "Electrical Services Harare",
    slug: "electrical",
    icon: "lucide:zap",
    color: "blue",
    description: "ZESA-approved electrical contractors serving Harare. House wiring, rewiring, DB board upgrades, and commercial electrical work.",
    features: [
      "Residential & commercial wiring",
      "DB board installation & upgrades",
      "Electrical fault finding & repairs",
      "Industrial electrical work",
      "24/7 emergency call-outs",
      "Licensed & certified electricians"
    ]
  },
  {
    title: "Roofing Services Harare",
    slug: "roofing",
    icon: "lucide:home",
    color: "slate",
    description: "Quality roofing solutions for homes and businesses in Harare. IBR sheets, tiles, trusses, gutters, and waterproofing.",
    features: [
      "IBR & corrugated iron roofing",
      "Tile roofing installation",
      "Roof truss fabrication",
      "Gutter installation & repairs",
      "Waterproofing services",
      "Roof maintenance & repairs"
    ]
  }
];

const suburbs = [
  "Borrowdale", "Mount Pleasant", "Avondale", "Glen Lorne", "Highlands",
  "Greendale", "Marlborough", "Greystone Park", "Alexandra Park", "Eastlea",
  "Newlands", "Chisipite", "Msasa", "Hatfield", "Warren Park",
  "Mbare", "Highfield", "Glen View", "Waterfalls", "Kuwadzana"
];

const colorClasses: Record<string, { bg: string; text: string; light: string }> = {
  amber: { bg: "bg-amber-500", text: "text-amber-600", light: "bg-amber-50" },
  blue: { bg: "bg-blue-600", text: "text-blue-600", light: "bg-blue-50" },
  cyan: { bg: "bg-cyan-600", text: "text-cyan-600", light: "bg-cyan-50" },
  slate: { bg: "bg-slate-800", text: "text-slate-600", light: "bg-slate-50" },
};

export default function HararePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase">Harare Services</span>
            <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight mt-2 mb-6">
              Solar, Electrical & Borehole <br className="hidden md:block" />
              <span className="text-amber-500">Services in Harare</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mb-8">
              Upperhand is Harare's leading provider of solar installation, borehole drilling, electrical services, roofing, and construction solutions. Serving all Harare suburbs with professional technicians and quality materials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+263771591526"
                className="inline-flex items-center justify-center px-8 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors"
              >
                {/* @ts-expect-error - iconify-icon is a custom element */}
                <iconify-icon icon="lucide:phone" width="18" className="mr-2"></iconify-icon>
                Call 0771 591 526
              </a>
              <a
                href="https://wa.me/263771591526?text=Hello%20Upperhand,%20I%20need%20services%20in%20Harare."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 transition-colors"
              >
                {/* @ts-expect-error - iconify-icon is a custom element */}
                <iconify-icon icon="lucide:message-circle" width="18" className="mr-2"></iconify-icon>
                WhatsApp Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services We Offer in Harare */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">Services We Offer in Harare</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Professional construction and installation services for homes and businesses across all Harare suburbs.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <ScrollReveal key={service.slug}>
                <div className="border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className={`w-14 h-14 ${colorClasses[service.color].light} rounded-xl flex items-center justify-center mb-4`}>
                    {/* @ts-expect-error - iconify-icon is a custom element */}
                    <iconify-icon icon={service.icon} width="28" className={colorClasses[service.color].text}></iconify-icon>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>

                  <h4 className="font-semibold text-slate-900 mb-3 text-sm">What We Offer:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        {/* @ts-expect-error - iconify-icon is a custom element */}
                        <iconify-icon icon="lucide:check" width="16" className={`mt-0.5 ${colorClasses[service.color].text}`}></iconify-icon>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services/${service.slug}`}
                    className={`inline-flex items-center gap-2 px-6 py-3 ${colorClasses[service.color].bg} text-white font-semibold rounded-lg hover:opacity-90 transition-opacity`}
                  >
                    Learn More
                    {/* @ts-expect-error - iconify-icon is a custom element */}
                    <iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Suburbs We Serve */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Harare Suburbs We Serve</h2>
            <p className="text-slate-600">We provide our services across all Harare suburbs and surrounding areas</p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {suburbs.map((suburb) => (
                <div key={suburb} className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                  <p className="text-sm font-medium text-slate-700">{suburb}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <div className="mt-8 text-center">
            <p className="text-slate-600 text-sm">
              Don't see your area listed? <a href="/contact" className="text-amber-600 hover:underline font-medium">Contact us</a> - we likely service your area too!
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us in Harare */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Why Choose Upperhand in Harare?</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {/* @ts-expect-error - iconify-icon is a custom element */}
                  <iconify-icon icon="lucide:map-pin" width="28" className="text-amber-600"></iconify-icon>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Local Harare Team</h3>
                <p className="text-slate-600 text-sm">
                  Based in Harare with deep knowledge of local conditions, regulations, and best practices for Zimbabwe's climate.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay="100">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {/* @ts-expect-error - iconify-icon is a custom element */}
                  <iconify-icon icon="lucide:clock" width="28" className="text-amber-600"></iconify-icon>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Fast Response Time</h3>
                <p className="text-slate-600 text-sm">
                  Same-day quotes and emergency services available. Most projects start within 3-5 business days.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay="200">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {/* @ts-expect-error - iconify-icon is a custom element */}
                  <iconify-icon icon="lucide:shield-check" width="28" className="text-amber-600"></iconify-icon>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Quality Guaranteed</h3>
                <p className="text-slate-600 text-sm">
                  100+ completed projects in Harare. All work comes with warranty and ongoing support.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Ready to Start Your Project in Harare?
            </h2>
            <p className="text-amber-100 text-lg mb-8">
              Get your free quote today. We serve all Harare suburbs with professional technicians.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-amber-50 transition-colors"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+263771591526"
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Call 0771 591 526
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Upperhand Zimbabwe - Harare Branch",
            "image": "https://upperhandzim.com/og-image.jpg",
            "description": "Professional solar installation, borehole drilling, electrical services, and construction in Harare, Zimbabwe",
"@id": "https://upperhandzim.com/locations/harare",
            "url": "https://upperhandzim.com/locations/harare",
            "telephone": "+263771591526",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Harare",
              "addressCountry": "ZW"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -17.8252,
              "longitude": 31.0335
            },
            "areaServed": {
              "@type": "City",
              "name": "Harare"
            },
            "priceRange": "$$",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "07:00",
              "closes": "18:00"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Harare Services",
              "itemListElement": services.map(service => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.description,
                  "areaServed": {
                    "@type": "City",
                    "name": "Harare"
                  }
                }
              }))
            }
          })
        }}
      />
    </>
  );
}
