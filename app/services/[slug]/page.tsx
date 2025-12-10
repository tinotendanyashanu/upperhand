import ScrollReveal from "../../components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const servicesData: Record<string, {
  title: string;
  tagline: string;
  description: string;
  longDescription: string[];
  icon: string;
  color: string;
  bgColor: string;
  heroImage: string;
  galleryImages: string[];
  features: { title: string; description: string; icon: string }[];
  process: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}> = {
  solar: {
    title: "Solar Installation",
    tagline: "Harness the Power of the Sun",
    description: "Professional solar panel installation for homes and businesses across Zimbabwe.",
    longDescription: [
      "At Upperhand, we specialize in complete solar energy solutions that help Zimbabwean homes and businesses achieve energy independence. With the country's abundant sunshine, solar power is not just an environmental choice—it's a smart economic decision.",
      "Our team of certified solar technicians handles everything from initial site assessment to final installation and maintenance. We work with leading solar panel brands to ensure you get the best quality and efficiency for your investment.",
      "Whether you need a small residential system or a large commercial installation, we design customized solutions that meet your specific energy needs and budget.",
    ],
    icon: "lucide:sun",
    color: "amber",
    bgColor: "bg-amber-500",
    heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=600&auto=format&fit=crop",
    ],
    features: [
      { title: "Site Assessment", description: "Professional evaluation of your property's solar potential.", icon: "lucide:clipboard-check" },
      { title: "Custom Design", description: "Tailored system design to maximize efficiency and savings.", icon: "lucide:layout" },
      { title: "Quality Panels", description: "Top-tier solar panels with 25-year warranty.", icon: "lucide:shield-check" },
      { title: "Battery Storage", description: "Advanced battery systems for power during outages.", icon: "lucide:battery-charging" },
      { title: "Inverter Installation", description: "High-efficiency inverters for optimal power conversion.", icon: "lucide:zap" },
      { title: "Ongoing Support", description: "Maintenance and monitoring services included.", icon: "lucide:headphones" },
    ],
    process: [
      { step: "01", title: "Consultation", description: "We visit your property to assess energy needs and site conditions." },
      { step: "02", title: "Design", description: "Our engineers create a customized solar system design." },
      { step: "03", title: "Quote", description: "You receive a detailed quote with all costs and savings projections." },
      { step: "04", title: "Installation", description: "Our certified team installs your system efficiently and safely." },
      { step: "05", title: "Activation", description: "System testing, grid connection, and handover training." },
    ],
    faqs: [
      { question: "How much can I save with solar?", answer: "Most customers save 60-80% on their monthly electricity bills. The exact savings depend on your consumption and system size." },
      { question: "What size system do I need?", answer: "A typical Zimbabwean home needs 3-5kW. We'll assess your usage and recommend the optimal size." },
      { question: "Do you offer financing?", answer: "Yes, we work with several financing partners to make solar affordable for everyone." },
      { question: "What about maintenance?", answer: "Solar panels require minimal maintenance. We offer annual checkup packages to ensure optimal performance." },
    ],
  },
  electrical: {
    title: "Electrical Services",
    tagline: "Powering Your World Safely",
    description: "Complete electrical solutions from wiring to repairs and upgrades.",
    longDescription: [
      "Upperhand provides comprehensive electrical services for residential, commercial, and industrial clients throughout Zimbabwe. Our licensed electricians bring years of experience and a commitment to safety in every project.",
      "From new installations to troubleshooting existing systems, we handle all aspects of electrical work with precision and professionalism. We stay current with the latest electrical codes and technologies to deliver modern, efficient solutions.",
      "Safety is our top priority. Every installation is thoroughly tested and certified to meet national standards, giving you peace of mind that your electrical systems are reliable and safe.",
    ],
    icon: "lucide:plug-zap",
    color: "blue",
    bgColor: "bg-blue-600",
    heroImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=600&auto=format&fit=crop",
    ],
    features: [
      { title: "House Wiring", description: "Complete electrical wiring for new builds and renovations.", icon: "lucide:home" },
      { title: "DB Board Installation", description: "Distribution board installation and upgrades.", icon: "lucide:server" },
      { title: "Fault Finding", description: "Expert diagnosis and repair of electrical faults.", icon: "lucide:search" },
      { title: "Lighting", description: "Indoor and outdoor lighting installation and design.", icon: "lucide:lightbulb" },
      { title: "Generator Connection", description: "Seamless generator integration with changeover switches.", icon: "lucide:power" },
      { title: "Compliance Certificates", description: "Electrical compliance testing and certification.", icon: "lucide:file-check" },
    ],
    process: [
      { step: "01", title: "Assessment", description: "We evaluate your electrical needs and existing infrastructure." },
      { step: "02", title: "Planning", description: "Detailed planning including load calculations and circuit design." },
      { step: "03", title: "Quotation", description: "Transparent pricing with no hidden costs." },
      { step: "04", title: "Installation", description: "Professional installation by licensed electricians." },
      { step: "05", title: "Testing", description: "Comprehensive testing and safety certification." },
    ],
    faqs: [
      { question: "Are your electricians certified?", answer: "Yes, all our electricians are fully licensed and certified to work in Zimbabwe." },
      { question: "Do you handle emergency repairs?", answer: "Yes, we offer emergency electrical services for urgent issues." },
      { question: "Can you upgrade my old wiring?", answer: "Absolutely. We specialize in upgrading outdated electrical systems to modern standards." },
      { question: "Do you provide compliance certificates?", answer: "Yes, we issue electrical compliance certificates for all installations." },
    ],
  },
  boreholes: {
    title: "Borehole Drilling",
    tagline: "Access Clean Water Anywhere",
    description: "From drilling to pump installation—complete borehole solutions.",
    longDescription: [
      "Access to clean, reliable water is essential for homes, farms, and businesses in Zimbabwe. Upperhand offers end-to-end borehole solutions, from geological surveys and drilling to pump installation and maintenance.",
      "Our experienced drilling team uses modern equipment to reach water sources at various depths, ensuring a reliable supply regardless of your location. We work in both urban and rural areas throughout Zimbabwe.",
      "We don't just drill—we provide complete water systems including solar-powered pumps, storage tanks, and piping to deliver water exactly where you need it.",
    ],
    icon: "lucide:droplets",
    color: "cyan",
    bgColor: "bg-cyan-600",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1541844053589-346841d0b34c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518173946687-a4c036bc1d1e?q=80&w=600&auto=format&fit=crop",
    ],
    features: [
      { title: "Site Survey", description: "Geological assessment to locate optimal drilling points.", icon: "lucide:map-pin" },
      { title: "Drilling", description: "Professional drilling with modern rotary rigs.", icon: "lucide:construction" },
      { title: "Casing", description: "Quality casing to protect and stabilize the borehole.", icon: "lucide:cylinder" },
      { title: "Pump Installation", description: "Submersible pump fitting for reliable water delivery.", icon: "lucide:waves" },
      { title: "Solar Pumping", description: "Solar-powered pump systems for off-grid locations.", icon: "lucide:sun" },
      { title: "Water Testing", description: "Quality testing to ensure safe drinking water.", icon: "lucide:flask-conical" },
    ],
    process: [
      { step: "01", title: "Site Visit", description: "Our team visits to assess geology and access requirements." },
      { step: "02", title: "Water Divining", description: "Professional water detection to find the best drilling spot." },
      { step: "03", title: "Drilling", description: "Borehole drilling with continuous progress updates." },
      { step: "04", title: "Development", description: "Borehole development and yield testing." },
      { step: "05", title: "Pump Installation", description: "Complete pump and piping installation." },
    ],
    faqs: [
      { question: "How deep do you drill?", answer: "We drill from 30 meters to over 150 meters depending on the water table in your area." },
      { question: "How long does drilling take?", answer: "Typically 1-3 days depending on depth and ground conditions." },
      { question: "What if you don't find water?", answer: "We conduct thorough site surveys to maximize success. If no water is found, you only pay for drilling costs." },
      { question: "Do you install solar pumps?", answer: "Yes, we specialize in solar-powered borehole systems for sustainable, cost-free water pumping." },
    ],
  },
  roofing: {
    title: "Roofing Solutions",
    tagline: "Protecting What Matters Most",
    description: "Quality roofing installation and repairs for all building types.",
    longDescription: [
      "Your roof is your home's first line of defense against the elements. At Upperhand, we deliver superior roofing solutions that combine durability, aesthetics, and value. From new constructions to repairs and replacements, we've got you covered.",
      "We work with all types of roofing materials including IBR sheets, chromadek, tiles, and thatch. Our skilled roofers ensure precise installation with proper waterproofing and ventilation for long-lasting performance.",
      "Whether you need a complete roof installation for a new building or repairs for an existing structure, we provide reliable service with quality materials and workmanship guarantees.",
    ],
    icon: "lucide:home",
    color: "slate",
    bgColor: "bg-slate-700",
    heroImage: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop",
    ],
    features: [
      { title: "IBR Roofing", description: "Industrial and residential IBR sheet installation.", icon: "lucide:layers" },
      { title: "Tile Roofing", description: "Beautiful concrete and clay tile roofs.", icon: "lucide:grid-3x3" },
      { title: "Roof Repairs", description: "Leak repairs and damaged section replacement.", icon: "lucide:wrench" },
      { title: "Gutters", description: "Seamless gutter and downpipe installation.", icon: "lucide:flow" },
      { title: "Waterproofing", description: "Complete waterproofing solutions for flat roofs.", icon: "lucide:shield" },
      { title: "Insulation", description: "Thermal insulation for energy efficiency.", icon: "lucide:thermometer" },
    ],
    process: [
      { step: "01", title: "Inspection", description: "Thorough roof assessment and measurements." },
      { step: "02", title: "Material Selection", description: "Help you choose the right roofing material." },
      { step: "03", title: "Quotation", description: "Detailed quote including materials and labor." },
      { step: "04", title: "Installation", description: "Expert installation with safety compliance." },
      { step: "05", title: "Final Check", description: "Quality inspection and cleanup." },
    ],
    faqs: [
      { question: "What roofing materials do you recommend?", answer: "It depends on your budget and style preference. IBR is economical, while tiles offer premium aesthetics." },
      { question: "How long does a roof installation take?", answer: "A typical residential roof takes 3-5 days. Larger projects may take longer." },
      { question: "Do you repair existing roofs?", answer: "Yes, we handle all roof repairs including leak fixing, sheet replacement, and restoration." },
      { question: "What warranty do you offer?", answer: "We provide workmanship warranties and pass on manufacturer warranties for materials." },
    ],
  },
  ceilings: {
    title: "Ceiling Designs",
    tagline: "Elevate Your Interior",
    description: "Modern ceiling solutions from gypsum to PVC and beyond.",
    longDescription: [
      "Transform your interior spaces with stunning ceiling designs from Upperhand. Our skilled craftsmen create beautiful, functional ceilings that enhance any room while providing practical benefits like insulation and concealed wiring.",
      "We specialize in gypsum, PVC, wooden, and specialty ceilings for both residential and commercial spaces. From classic flat ceilings to contemporary coffered designs, we bring your vision to life with precision and artistry.",
      "Our team handles complete ceiling solutions including design consultation, material supply, installation, and finishing touches like cornices and integrated lighting.",
    ],
    icon: "lucide:square-stack",
    color: "indigo",
    bgColor: "bg-indigo-600",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop",
    ],
    features: [
      { title: "Gypsum Ceilings", description: "Smooth, paintable gypsum board installations.", icon: "lucide:square" },
      { title: "PVC Ceilings", description: "Durable, water-resistant PVC panels.", icon: "lucide:panel-top" },
      { title: "Coffered Ceilings", description: "Elegant architectural ceiling designs.", icon: "lucide:layout-grid" },
      { title: "Suspended Ceilings", description: "Drop ceilings for commercial spaces.", icon: "lucide:columns" },
      { title: "Cornices", description: "Decorative cornices and moldings.", icon: "lucide:crown" },
      { title: "LED Integration", description: "Built-in LED lighting designs.", icon: "lucide:lightbulb" },
    ],
    process: [
      { step: "01", title: "Consultation", description: "Discuss your style preferences and functional needs." },
      { step: "02", title: "Design", description: "Create a ceiling design that complements your space." },
      { step: "03", title: "Material Prep", description: "Source quality materials for your project." },
      { step: "04", title: "Installation", description: "Precise installation by experienced craftsmen." },
      { step: "05", title: "Finishing", description: "Painting, cornices, and final touches." },
    ],
    faqs: [
      { question: "Gypsum or PVC—which is better?", answer: "Gypsum offers a premium finish and can be painted any color. PVC is more water-resistant and low-maintenance." },
      { question: "Can you install ceilings with recessed lights?", answer: "Yes, we integrate LED downlights and other lighting into ceiling designs." },
      { question: "How long does ceiling installation take?", answer: "A typical room takes 1-2 days. Whole house installations may take a week." },
      { question: "Do you handle ceiling repairs?", answer: "Yes, we repair damaged ceilings including water damage, cracks, and sagging." },
    ],
  },
  painting: {
    title: "Painting Services",
    tagline: "Color Your World",
    description: "Professional interior and exterior painting services.",
    longDescription: [
      "A fresh coat of paint can completely transform your space. Upperhand's professional painting services deliver flawless finishes for both interior and exterior surfaces. We take pride in our attention to detail and clean workmanship.",
      "From residential homes to commercial buildings, our experienced painters use premium paints and proper preparation techniques to ensure lasting, beautiful results. We work with you to select the perfect colors and finishes for your project.",
      "Our services include surface preparation, priming, painting, and specialty finishes like texture coating and feature walls. We leave your space clean and refreshed.",
    ],
    icon: "lucide:paint-roller",
    color: "rose",
    bgColor: "bg-rose-500",
    heroImage: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1200&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?q=80&w=600&auto=format&fit=crop",
    ],
    features: [
      { title: "Interior Painting", description: "Walls, ceilings, and trim painting.", icon: "lucide:home" },
      { title: "Exterior Painting", description: "Weather-resistant exterior coatings.", icon: "lucide:building" },
      { title: "Texture Coating", description: "Decorative textured wall finishes.", icon: "lucide:sparkles" },
      { title: "Surface Prep", description: "Proper preparation for perfect adhesion.", icon: "lucide:eraser" },
      { title: "Color Consultation", description: "Expert help choosing your palette.", icon: "lucide:palette" },
      { title: "Specialty Finishes", description: "Metallic, matte, and gloss options.", icon: "lucide:gem" },
    ],
    process: [
      { step: "01", title: "Assessment", description: "Evaluate surfaces and discuss your vision." },
      { step: "02", title: "Color Selection", description: "Help you choose colors with samples." },
      { step: "03", title: "Preparation", description: "Surface cleaning, filling, and priming." },
      { step: "04", title: "Painting", description: "Professional application with quality paints." },
      { step: "05", title: "Final Touch", description: "Detail work, cleanup, and walkthrough." },
    ],
    faqs: [
      { question: "What paint brands do you use?", answer: "We use premium brands like Dulux, Plascon, and Crown for lasting results." },
      { question: "How long does painting take?", answer: "A standard room takes 1-2 days. Exterior projects vary by size." },
      { question: "Do you move furniture?", answer: "Yes, we move and cover furniture to protect it during painting." },
      { question: "How should I prepare for painting?", answer: "We handle all preparation. Just clear small items from the work area." },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) {
    return { title: "Service Not Found | Upperhand" };
  }
  return {
    title: `${service.title} | Upperhand Zimbabwe`,
    description: service.description,
  };
}

const colorMap: Record<string, { 
  bg: string; 
  bgLight: string; 
  text: string; 
  border: string;
  button: string;
  buttonHover: string;
}> = {
  amber: { bg: "bg-amber-500", bgLight: "bg-amber-50", text: "text-amber-600", border: "border-amber-200", button: "bg-amber-500", buttonHover: "hover:bg-amber-600" },
  blue: { bg: "bg-blue-600", bgLight: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", button: "bg-blue-600", buttonHover: "hover:bg-blue-700" },
  cyan: { bg: "bg-cyan-600", bgLight: "bg-cyan-50", text: "text-cyan-600", border: "border-cyan-200", button: "bg-cyan-600", buttonHover: "hover:bg-cyan-700" },
  slate: { bg: "bg-slate-700", bgLight: "bg-slate-100", text: "text-slate-700", border: "border-slate-200", button: "bg-slate-700", buttonHover: "hover:bg-slate-800" },
  indigo: { bg: "bg-indigo-600", bgLight: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200", button: "bg-indigo-600", buttonHover: "hover:bg-indigo-700" },
  rose: { bg: "bg-rose-500", bgLight: "bg-rose-50", text: "text-rose-600", border: "border-rose-200", button: "bg-rose-500", buttonHover: "hover:bg-rose-600" },
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  const colors = colorMap[service.color];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
          <ScrollReveal>
            <div className={`inline-flex items-center gap-2 ${colors.bg} px-4 py-2 rounded-full text-white text-sm font-medium mb-4`}>
              <iconify-icon icon={service.icon} width="18"></iconify-icon>
              {service.title}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {service.tagline}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className={`px-6 py-3 ${colors.button} ${colors.buttonHover} text-white font-semibold rounded-lg transition-colors`}
              >
                Get a Quote
              </Link>
              <a
                href="tel:+263771591526"
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2"
              >
                <iconify-icon icon="lucide:phone" width="18"></iconify-icon>
                Call Now
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className={`text-xs font-semibold tracking-wider ${colors.text} uppercase`}>About This Service</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mt-2 mb-6">
                Professional {service.title}
              </h2>
              <div className="space-y-4 text-slate-600">
                {service.longDescription.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay="200">
              <div className="grid grid-cols-2 gap-4">
                {service.galleryImages.map((img, i) => (
                  <div key={i} className={`relative aspect-square rounded-xl overflow-hidden ${i === 0 ? 'col-span-2' : ''}`}>
                    <Image
                      src={img}
                      alt={`${service.title} ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-20 ${colors.bgLight}`}>
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className={`text-xs font-semibold tracking-wider ${colors.text} uppercase`}>What We Offer</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mt-2">
                Our {service.title} Services
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <ScrollReveal key={index} delay={index % 3 === 1 ? "100" : index % 3 === 2 ? "200" : undefined}>
                <div className={`bg-white p-6 rounded-xl border ${colors.border} hover:shadow-lg transition-shadow`}>
                  <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center text-white mb-4`}>
                    <iconify-icon icon={feature.icon} width="24"></iconify-icon>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-xs font-semibold tracking-wider text-amber-500 uppercase">How It Works</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mt-2">
                Our Process
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {service.process.map((step, index) => (
              <ScrollReveal key={index} delay={index === 1 || index === 3 ? "100" : index === 2 || index === 4 ? "200" : undefined}>
                <div className="relative text-center">
                  <div className="text-5xl font-bold text-slate-700 mb-4">{step.step}</div>
                  <h3 className={`text-lg font-semibold ${index === 0 ? colors.text : 'text-white'} mb-2`}>{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.description}</p>
                  {index < service.process.length - 1 && (
                    <div className="hidden md:block absolute top-8 right-0 transform translate-x-1/2">
                      <iconify-icon icon="lucide:chevron-right" width="24" class="text-slate-700"></iconify-icon>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className={`text-xs font-semibold tracking-wider ${colors.text} uppercase`}>Common Questions</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mt-2">
                Frequently Asked Questions
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index % 2 === 1 ? "100" : undefined}>
                <div className={`border ${colors.border} rounded-xl p-6`}>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-start gap-3">
                    <iconify-icon icon="lucide:help-circle" width="20" class={colors.text}></iconify-icon>
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 pl-8">{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 ${colors.bg}`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-semibold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-white/90 mb-8">Contact us today for a free consultation and quote for your {service.title.toLowerCase()} project.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
              >
                Request Quote
              </Link>
              <a
                href="https://wa.me/263771591526?text=Hello%20Upperhand,%20I%20am%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 transition-colors flex items-center gap-2"
              >
                <iconify-icon icon="lucide:message-circle" width="18"></iconify-icon>
                WhatsApp Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
