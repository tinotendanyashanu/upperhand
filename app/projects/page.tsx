import { Metadata } from "next";
import ScrollReveal from "../components/ScrollReveal";
import Link from "next/link";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Our Projects | Upperhand - Portfolio of Completed Work Zimbabwe",
  description: "Browse Upperhand's extensive portfolio of completed projects: solar installations, electrical work, boreholes, roofing, ceiling designs, and painting services across Zimbabwe. Filter by service category.",
  keywords: "completed projects, portfolio, solar projects, electrical projects, borehole projects, roofing projects, ceiling projects, painting projects, zimbabwe",
  openGraph: {
    title: "Our Portfolio | Upperhand Zimbabwe",
    description: "Explore our completed projects and professional work across all service categories",
    type: "website",
    url: "https://upperhand.co.zw/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsClient />

      {/* Stats Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <ScrollReveal>
              <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">100+</div>
              <div className="text-slate-400">Projects Completed</div>
            </ScrollReveal>
            <ScrollReveal delay="100">
              <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">50+</div>
              <div className="text-slate-400">Happy Clients</div>
            </ScrollReveal>
            <ScrollReveal delay="200">
              <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">6</div>
              <div className="text-slate-400">Service Categories</div>
            </ScrollReveal>
            <ScrollReveal delay="300">
              <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">5+</div>
              <div className="text-slate-400">Years Experience</div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-semibold text-white mb-4">Want Your Project Featured?</h2>
            <p className="text-amber-100 mb-8">Let us bring your vision to life. Contact us today to start your project.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-amber-50 transition-colors"
              >
                Start Your Project
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

