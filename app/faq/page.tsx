import ScrollReveal from "../components/ScrollReveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Solar, Electrical & Borehole Services Zimbabwe - Upperhand",
  description: "Get answers to common questions about solar installation, borehole drilling, electrical services in Harare, Zimbabwe. Pricing, warranties, timelines & more. Call 0771 591 526.",
  keywords: "upperhand faq, upperhandzim questions, upperhand zimbabwe faq, solar installation faq, borehole drilling questions, electrical services zimbabwe faq, solar pricing harare, warranty information",
  openGraph: {
    title: "FAQ | Solar & Construction Services Zimbabwe",
    description: "Common questions about our solar, electrical, and borehole services in Harare",
    type: "website",
    url: "https://upperhandzim.com/faq",
  },
};

const faqs = [
  {
    category: "Solar Installation",
    icon: "lucide:sun",
    color: "amber",
    questions: [
      {
        q: "How much does a solar system cost in Zimbabwe?",
        a: "Solar system costs vary based on size and components. A basic 2kVA system starts from $1,800, while a premium 5kVA whole-house system starts from $4,200. The exact cost depends on your power needs, battery capacity, and panel quality. Contact us for a free customized quote based on your specific requirements."
      },
      {
        q: "How long do solar panels last in Zimbabwe?",
        a: "Quality solar panels come with a 25-year manufacturer warranty and can last 30+ years with proper maintenance. Our inverters have a 5-10 year warranty, and lithium batteries typically last 8-12 years. We only install Tier-1 solar panels that are tested for Zimbabwe's climate conditions."
      },
      {
        q: "What happens on cloudy days or during the rainy season?",
        a: "Solar panels still generate power on cloudy days, though at reduced capacity (typically 10-25% of full output). This is why we include battery backup systems that store excess energy from sunny days. Your batteries ensure power availability even during extended cloudy periods or at night."
      },
      {
        q: "Do you offer financing or payment plans?",
        a: "Yes, we offer flexible payment plans for large projects. For diaspora clients, we accept deposits via Stripe, PayPal, and Mukuru, with balance payments in installments upon project milestones. Contact us to discuss payment options that work for your budget."
      },
      {
        q: "How long does installation take?",
        a: "Most residential solar installations are completed within 2-3 days. This includes panel mounting, inverter setup, battery installation, and testing. Larger commercial projects may take 5-7 days depending on system size."
      },
      {
        q: "What maintenance do solar systems require?",
        a: "Solar systems require minimal maintenance. We recommend cleaning panels every 3-6 months (or after the dust season) and annual professional inspections.  We offer maintenance packages and are available 24/7 for any technical support."
      }
    ]
  },
  {
    category: "Borehole Drilling",
    icon: "lucide:droplets",
    color: "cyan",
    questions: [
      {
        q: "What is your success rate for finding water in Harare?",
        a: "We have a 98% success rate in the Harare area and surrounding regions. Before drilling, we conduct a professional site survey using geological data and water table analysis to maximize success probability. In the rare event we don't find water, we discuss options for relocating the borehole."
      },
      {
        q: "How deep do you drill for boreholes?",
        a: "Most boreholes in Harare are between 30-80 meters deep, though we can drill up to 100+ meters if needed. Depth depends on your location and the water table in your area. We determine the optimal depth during the site survey."
      },
      {
        q: "How much does borehole drilling cost?",
        a: "Shallow boreholes (up to 40m) start from $800, while deeper boreholes (60-100m) range from $1,500-$3,000. This includes drilling, casing, and pump installation. The final cost depends on depth, casing materials, and pump specifications. We provide transparent quotes before starting work."
      },
      {
        q: "What is included in your borehole package?",
        a: "Our complete package includes: site survey, drilling to water-bearing depth, installing steel or PVC casing, pump installation (submersible or surface), water tank setup, and pressure tank if needed. We also offer solar-powered pumps for areas without reliable electricity."
      },
      {
        q: "How long does borehole drilling take?",
        a: "Drilling typically takes 1-2 days depending on depth and ground conditions. Complete installation including pump setup and testing takes 3-5 days total. We'll provide a detailed timeline after the site survey."
      },
      {
        q: "What kind of pump do you recommend?",
        a: "For most residential clients, we recommend submersible pumps (placed inside the borehole) as they're more efficient and quieter. For commercial use or deeper boreholes, we may recommend surface pumps. We also offer solar-powered pump options to eliminate electricity costs."
      }
    ]
  },
  {
    category: "Electrical Services",
    icon: "lucide:zap",
    color: "blue",
    questions: [
      {
        q: "Are you licensed electrical contractors?",
        a: "Yes, we are fully licensed and ZESA-approved electrical contractors. Our team includes certified electricians with 5+ years of experience. All our work complies with Zimbabwe electrical safety standards and regulations."
      },
      {
        q: "Do you handle both residential and commercial electrical work?",
        a: "Absolutely! We service residential homes, commercial buildings, industrial facilities, and farms. Our services range from simple light installations to complete electrical system design and DB board upgrades."
      },
      {
        q: "What areas do you cover?",
        a: "We primarily serve Harare and surrounding areas including Chitungwiza, Norton, Ruwa, and Epworth. We also take on projects in Bulawayo, Gweru, and other major cities. Contact us to confirm coverage for your specific location."
      },
      {
        q: "Do you provide emergency electrical services?",
        a: "Yes, we offer 24/7 emergency electrical services for urgent issues like power outages, faulty wiring, or electrical hazards. Call 0771 591 526 for immediate assistance."
      },
      {
        q: "How much do electrical services cost?",
        a: "Costs vary by project scope. Simple repairs start from $20-50, house rewiring ranges from $300-800 depending on size, and DB board upgrades start from $150. We provide free quotes before starting any work."
      }
    ]
  },
  {
    category: "Roofing & Ceiling",
    icon: "lucide:home",
    color: "slate",
    questions: [
      {
        q: "What roofing materials do you work with?",
        a: "We install IBR roofing sheets, corrugated iron, tile roofing, and asbestos replacement. We also fabricate roof trusses and install gutters. We'll recommend the best material based on your budget, building type, and aesthetic preferences."
      },
      {
        q: "What ceiling types do you install?",
        a: "We install PVC ceilings, gypsum ceilings, tongue-and-groove (T&G), rhinoboard, and suspended ceilings. We can also integrate custom lighting and designs to match your interior."
      },
      {
        q: "How long do roofing projects take?",
        a: "A standard residential roof (3-bedroom house) typically takes 5-7 days including truss installation. Ceiling installation for a 3-bedroom house takes 3-5 days. We'll provide a specific timeline based on your project scope."
      },
      {
        q: "Do you offer waterproofing services?",
        a: "Yes, we provide professional waterproofing for roofs, walls, and foundations using quality sealants and membranes. This is especially important during Zimbabwe's rainy season to prevent leaks and water damage."
      }
    ]
  },
  {
    category: "General & Payment",
    icon: "lucide:help-circle",
    color: "indigo",
    questions: [
      {
        q: "Do you work with diaspora clients?",
        a: "Yes! We have extensive experience working with clients in the UK, USA, South Africa, and Australia. We provide weekly photo/video updates, assign a dedicated project manager, and accept international payments via Stripe, PayPal, WorldRemit, and Mukuru."
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept cash (USD/ZWL), bank transfers, mobile money (EcoCash/OneMoney), and international payments via Stripe, PayPal, Mukuru, and WorldRemit. For large projects, we offer payment in installments."
      },
      {
        q: "Do you provide warranties?",
        a: "Yes! Solar systems come with 5-year installation warranty (panels have 25-year manufacturer warranty). Boreholes have 1-year warranty on workmanship. Electrical work is guaranteed for 6 months. Roofing and ceiling work carries a 1-year warranty."
      },
      {
        q: "Can I get a free quote?",
        a: "Absolutely! We provide free, no-obligation quotes for all services. Contact us via phone (0771 591 526), WhatsApp, or our contact form, and we'll schedule a site visit or virtual consultation."
      },
      {
        q: "How quickly can you start my project?",
        a: "For most projects, we can start within 3-5 business days after quote approval. Emergency electrical work can be handled same-day or next-day. Larger projects may require 1-2 weeks lead time for material procurement."
      },
      {
        q: "Do you provide after-sales support?",
        a: "Yes! We offer 24/7 technical support via WhatsApp and phone. For solar systems, we provide ongoing monitoring and maintenance packages. All clients receive direct contact with their project manager even after completion."
      }
    ]
  }
];

const colorClasses: Record<string, { bg: string; text: string; border: string; light: string }> = {
  amber: { bg: "bg-amber-500", text: "text-amber-600", border: "border-amber-200", light: "bg-amber-50" },
  blue: { bg: "bg-blue-600", text: "text-blue-600", border: "border-blue-200", light: "bg-blue-50" },
  cyan: { bg: "bg-cyan-600", text: "text-cyan-600", border: "border-cyan-200", light: "bg-cyan-50" },
  slate: { bg: "bg-slate-800", text: "text-slate-600", border: "border-slate-200", light: "bg-slate-50" },
  indigo: { bg: "bg-indigo-600", text: "text-indigo-600", border: "border-indigo-200", light: "bg-indigo-50" },
};

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase">FAQ</span>
            <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mt-2 mb-6">
              Frequently Asked <br className="hidden md:block" />
              <span className="text-amber-500">Questions</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              Find answers to common questions about our solar installation, borehole drilling, electrical services, and more.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-16">
            {faqs.map((section, idx) => (
              <ScrollReveal key={section.category}>
                <div>
                  {/* Section Header */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className={`w-12 h-12 ${colorClasses[section.color].light} rounded-xl flex items-center justify-center`}>
                      {/* @ts-expect-error - iconify-icon is a custom element */}
                      <iconify-icon icon={section.icon} width="24" className={colorClasses[section.color].text}></iconify-icon>
                    </div>
                    <h2 className="text-2xl font-semibold text-slate-900">{section.category}</h2>
                  </div>

                  {/* Questions */}
                  <div className="space-y-6">
                    {section.questions.map((faq, qIdx) => (
                      <div key={qIdx} className={`border ${colorClasses[section.color].border} rounded-xl p-6 hover:shadow-md transition-shadow`}>
                        <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-start gap-2">
                          {/* @ts-expect-error - iconify-icon is a custom element */}
                          <iconify-icon icon="lucide:help-circle" width="20" className={`mt-0.5 ${colorClasses[section.color].text}`}></iconify-icon>
                          {faq.q}
                        </h3>
                        <p className="text-slate-600 leading-relaxed pl-7">{faq.a}</p>
                      </div>
                    ))}
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
            <h2 className="text-3xl font-semibold text-white mb-4">Still Have Questions?</h2>
            <p className="text-amber-100 mb-8">
              Can't find the answer you're looking for? Our team is here to help. Contact us today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-amber-50 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="https://wa.me/263771591526?text=Hello%20Upperhand,%20I%20have%20a%20question%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 transition-colors flex items-center gap-2"
              >
                {/* @ts-expect-error - iconify-icon is a custom element */}
                <iconify-icon icon="lucide:message-circle" width="18"></iconify-icon>
                WhatsApp Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* JSON-LD for FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.flatMap(section =>
              section.questions.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a
                }
              }))
            )
          })
        }}
      />
    </>
  );
}
