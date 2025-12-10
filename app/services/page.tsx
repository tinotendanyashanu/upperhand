import ScrollReveal from "../components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Upperhand - Solar, Electrical, Boreholes, Roofing, Ceilings, Painting",
  description: "Explore Upperhand's comprehensive services: Solar installation, electrical work, borehole drilling, roofing, ceiling designs, and painting in Zimbabwe.",
};

const services = [
  {
    title: "Solar Installation",
    slug: "solar",
    description: "Complete solar solutions for homes and businesses. We handle everything from system design to installation and maintenance.",
    icon: "lucide:sun",
    color: "amber",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop",
    features: [
      "Solar panel installation",
      "Inverter setup and configuration",
      "Battery backup systems",
      "Grid-tie and off-grid solutions",
      "Solar water heaters",
      "Maintenance and repairs",
    ],
  },
  {
    title: "Electrical Services",
    slug: "electrical",
    description: "Professional electrical services for residential, commercial, and industrial clients. Safety and quality guaranteed.",
    icon: "lucide:zap",
    color: "blue",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop",
    features: [
      "House wiring & rewiring",
      "DB board installation & upgrades",
      "Industrial electrical work",
      "Electrical repairs",
      "Lighting installation",
      "Power surge protection",
    ],
  },
  {
    title: "Borehole Drilling",
    slug: "boreholes",
    description: "Complete borehole solutions from site survey to pump installation. Get reliable water supply for your property.",
    icon: "lucide:droplets",
    color: "cyan",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    features: [
      "Site surveying",
      "Borehole drilling",
      "Casing installation",
      "Pump installation",
      "Water tank setup",
      "Solar-powered pumps",
    ],
  },
  {
    title: "Roofing Solutions",
    slug: "roofing",
    description: "Quality roofing installation and repairs. We work with various roofing materials to suit your needs and budget.",
    icon: "lucide:home",
    color: "slate",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=800&auto=format&fit=crop",
    features: [
      "IBR roofing sheets",
      "Tile roofing",
      "Truss fabrication",
      "Gutter installation",
      "Roof repairs",
      "Waterproofing",
    ],
  },
  {
    title: "Ceiling Designs",
    slug: "ceilings",
    description: "Transform your space with beautiful ceiling designs. We offer various ceiling types and custom solutions.",
    icon: "lucide:layout-template",
    color: "indigo",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
    features: [
      "PVC ceilings",
      "Gypsum ceilings",
      "T&G (Tongue and Groove)",
      "Rhinoboard ceilings",
      "Suspended ceilings",
      "Custom lighting integration",
    ],
  },
  {
    title: "Painting Services",
    slug: "painting",
    description: "Professional painting services that bring your vision to life. Quality finishes for interiors and exteriors.",
    icon: "lucide:paintbrush",
    color: "rose",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop",
    features: [
      "Interior painting",
      "Exterior painting",
      "Texture coating",
      "Waterproof coating",
      "Decorative finishes",
      "Color consultation",
    ],
  },
];

const colorClasses: Record<string, { bg: string; text: string; hover: string; light: string }> = {
  amber: { bg: "bg-amber-500", text: "text-amber-600", hover: "hover:bg-amber-600", light: "bg-amber-100" },
  blue: { bg: "bg-blue-600", text: "text-blue-600", hover: "hover:bg-blue-700", light: "bg-blue-100" },
  cyan: { bg: "bg-cyan-600", text: "text-cyan-600", hover: "hover:bg-cyan-700", light: "bg-cyan-100" },
  slate: { bg: "bg-slate-800", text: "text-slate-600", hover: "hover:bg-slate-900", light: "bg-slate-100" },
  indigo: { bg: "bg-indigo-600", text: "text-indigo-600", hover: "hover:bg-indigo-700", light: "bg-indigo-100" },
  rose: { bg: "bg-rose-600", text: "text-rose-600", hover: "hover:bg-rose-700", light: "bg-rose-100" },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mt-2 mb-6">
              Comprehensive Solutions <br className="hidden md:block" />
              <span className="text-amber-500">For Every Project</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              From solar power to beautiful finishes, we provide a full range of engineering and construction services to meet your needs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <ScrollReveal key={service.slug}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className={`absolute top-4 left-4 ${colorClasses[service.color].bg} text-white px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2`}>
                        {/* @ts-expect-error - iconify-icon is a custom element */}
                        <iconify-icon icon={service.icon} width="16"></iconify-icon>
                        {service.title}
                      </div>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className={`w-14 h-14 ${colorClasses[service.color].light} rounded-xl flex items-center justify-center mb-6`}>
                      {/* @ts-expect-error - iconify-icon is a custom element */}
                      <iconify-icon icon={service.icon} width="28" className={colorClasses[service.color].text}></iconify-icon>
                    </div>
                    <h2 className="text-3xl font-semibold text-slate-900 mb-4">{service.title}</h2>
                    <p className="text-slate-600 mb-6">{service.description}</p>
                    
                    <h4 className="font-semibold text-slate-900 mb-3">What We Offer:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                          {/* @ts-expect-error - iconify-icon is a custom element */}
                          <iconify-icon icon="lucide:check" width="16" className={colorClasses[service.color].text}></iconify-icon>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      href="/contact"
                      className={`inline-flex items-center gap-2 px-6 py-3 ${colorClasses[service.color].bg} ${colorClasses[service.color].hover} text-white font-semibold rounded-lg transition-colors`}
                    >
                      Get a Quote
                      {/* @ts-expect-error - iconify-icon is a custom element */}
                      <iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-semibold text-white mb-4">Need a Custom Solution?</h2>
            <p className="text-amber-100 mb-8">We can tailor our services to meet your specific requirements. Contact us to discuss your project.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-amber-50 transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="https://wa.me/263771591526?text=Hello%20Upperhand,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 transition-colors flex items-center gap-2"
              >
                {/* @ts-expect-error - iconify-icon is a custom element */}
                <iconify-icon icon="lucide:message-circle" width="18"></iconify-icon>
                WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
