import ScrollReveal from "../components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | Upperhand - Portfolio of Completed Work",
  description: "View Upperhand's portfolio of completed projects including solar installations, electrical work, boreholes, roofing, ceilings, and painting across Zimbabwe.",
};

const projects = [
  {
    title: "Residential Solar System",
    category: "Solar Installation",
    location: "Harare",
    description: "Complete 5kW solar system installation with battery backup for a residential property.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop",
    color: "amber",
  },
  {
    title: "Commercial Office Ceiling",
    category: "Ceiling Design",
    location: "Bulawayo",
    description: "Modern gypsum ceiling with integrated LED lighting for a corporate office space.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
    color: "indigo",
  },
  {
    title: "Farm Borehole Project",
    category: "Borehole Drilling",
    location: "Marondera",
    description: "100-meter borehole with solar-powered pump for agricultural irrigation.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    color: "cyan",
  },
  {
    title: "Warehouse Roofing",
    category: "Roofing",
    location: "Chitungwiza",
    description: "Large-scale IBR roofing installation for an industrial warehouse.",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=800&auto=format&fit=crop",
    color: "slate",
  },
  {
    title: "School Electrical Upgrade",
    category: "Electrical",
    location: "Mutare",
    description: "Complete electrical rewiring and DB board upgrade for a local school.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop",
    color: "blue",
  },
  {
    title: "Villa Exterior Painting",
    category: "Painting",
    location: "Harare",
    description: "Premium exterior painting with texture coating for a luxury residential villa.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop",
    color: "rose",
  },
  {
    title: "Solar Farm Installation",
    category: "Solar Installation",
    location: "Gweru",
    description: "20kW commercial solar installation for a farming operation.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop",
    color: "amber",
  },
  {
    title: "PVC Ceiling Project",
    category: "Ceiling Design",
    location: "Masvingo",
    description: "Modern PVC ceiling installation for a retail shop.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    color: "indigo",
  },
  {
    title: "Community Borehole",
    category: "Borehole Drilling",
    location: "Chipinge",
    description: "Deep borehole installation providing clean water to a rural community.",
    image: "https://images.unsplash.com/photo-1541844053589-346841d0b34c?q=80&w=800&auto=format&fit=crop",
    color: "cyan",
  },
];

const colorClasses: Record<string, { badge: string; hover: string }> = {
  amber: { badge: "bg-amber-100 text-amber-700", hover: "group-hover:text-amber-600" },
  blue: { badge: "bg-blue-100 text-blue-700", hover: "group-hover:text-blue-600" },
  cyan: { badge: "bg-cyan-100 text-cyan-700", hover: "group-hover:text-cyan-600" },
  slate: { badge: "bg-slate-200 text-slate-700", hover: "group-hover:text-slate-600" },
  indigo: { badge: "bg-indigo-100 text-indigo-700", hover: "group-hover:text-indigo-600" },
  rose: { badge: "bg-rose-100 text-rose-700", hover: "group-hover:text-rose-600" },
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase">Our Portfolio</span>
            <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mt-2 mb-6">
              Projects We&apos;re <br className="hidden md:block" />
              <span className="text-amber-500">Proud Of</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              Browse through our completed projects across Zimbabwe. Every project showcases our commitment to quality and customer satisfaction.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={index} delay={index % 3 === 1 ? "100" : index % 3 === 2 ? "200" : undefined}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl bg-slate-100 mb-4 aspect-[4/3] shadow-md group-hover:shadow-xl transition-all duration-500">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className={`absolute top-4 left-4 z-20 ${colorClasses[project.color].badge} px-3 py-1.5 rounded-md text-xs font-semibold`}>
                      {project.category}
                    </div>
                  </div>
                  <h3 className={`text-lg font-medium text-slate-900 mb-1 ${colorClasses[project.color].hover} transition-colors`}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-2 flex items-center gap-1">
                    {/* @ts-expect-error - iconify-icon is a custom element */}
                    <iconify-icon icon="lucide:map-pin" width="14"></iconify-icon>
                    {project.location}
                  </p>
                  <p className="text-sm text-slate-600">{project.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

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
