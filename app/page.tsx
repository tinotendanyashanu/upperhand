import HeroSlider from "./components/HeroSlider";
import ScrollReveal from "./components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section with Background Slider */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <HeroSlider />

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center mt-8">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-medium text-white bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
              Serving Zimbabwe&apos;s Homes &amp; Businesses
            </div>
          </ScrollReveal>

          <ScrollReveal delay="100">
            <h1 className="max-w-4xl mx-auto text-5xl md:text-7xl font-semibold text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-lg">
              Powering Zimbabwe. <br className="hidden md:block" />
              <span className="text-amber-400">Building Excellence.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay="200">
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-200 font-normal leading-relaxed mb-10 drop-shadow-md">
              Professional solar installations, certified electrical services, borehole drilling, roofing, ceiling designs, and quality painting finishes across Zimbabwe.
            </p>
          </ScrollReveal>

          <ScrollReveal delay="300">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-amber-500 rounded-lg hover:bg-amber-600 transition-all shadow-xl shadow-amber-900/20 hover:-translate-y-1"
              >
                Get a Free Quote
              </Link>
              <a
                href="https://wa.me/263771591526?text=Hello%20Upperhand,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/20 hover:border-green-400 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 group"
              >
                <iconify-icon
                  icon="lucide:message-circle"
                  width="18"
                  height="18"
                  className="text-green-400"
                ></iconify-icon>
                WhatsApp Us
              </a>
            </div>
          </ScrollReveal>

          {/* Trust Indicators */}
          <ScrollReveal delay="300">
            <div className="mt-20 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center justify-center gap-2 group cursor-default">
                <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                  <iconify-icon
                    icon="lucide:shield-check"
                    className="text-amber-400 group-hover:scale-110 transition-transform duration-300"
                    width="20"
                  ></iconify-icon>
                </div>
                <span className="text-xs font-semibold tracking-tight uppercase text-slate-300 group-hover:text-white transition-colors">
                  Quality Guaranteed
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 group cursor-default">
                <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                  <iconify-icon
                    icon="lucide:award"
                    className="text-amber-400 group-hover:scale-110 transition-transform duration-300"
                    width="20"
                  ></iconify-icon>
                </div>
                <span className="text-xs font-semibold tracking-tight uppercase text-slate-300 group-hover:text-white transition-colors">
                  Expert Team
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 group cursor-default">
                <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                  <iconify-icon
                    icon="lucide:clock"
                    className="text-amber-400 group-hover:scale-110 transition-transform duration-300"
                    width="20"
                  ></iconify-icon>
                </div>
                <span className="text-xs font-semibold tracking-tight uppercase text-slate-300 group-hover:text-white transition-colors">
                  On-Time Delivery
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 group cursor-default">
                <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                  <iconify-icon
                    icon="lucide:thumbs-up"
                    className="text-amber-400 group-hover:scale-110 transition-transform duration-300"
                    width="20"
                  ></iconify-icon>
                </div>
                <span className="text-xs font-semibold tracking-tight uppercase text-slate-300 group-hover:text-white transition-colors">
                  100% Satisfaction
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Services Grid */}
      <section id="services" className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="mb-16 text-center">
            <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4 mt-2">
              Our Professional Services
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Comprehensive engineering and construction solutions delivered with technical precision and quality materials.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Solar */}
            <ScrollReveal>
              <Link href="/services/solar" className="block group p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-amber-200 hover:shadow-xl hover:shadow-amber-100/50 transition-all duration-500 cursor-pointer">
                <div className="w-12 h-12 bg-white border border-slate-100 shadow-sm rounded-xl flex items-center justify-center mb-6 text-amber-500 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 transition-all duration-300">
                  <iconify-icon icon="lucide:sun" width="24"></iconify-icon>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Solar Installation</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed group-hover:text-slate-600 transition-colors">
                  Complete solar solutions including panels, inverters, batteries, and installation for homes and businesses.
                </p>
                <span className="inline-flex items-center text-xs font-semibold text-amber-600 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  Learn More <iconify-icon icon="lucide:arrow-right" className="ml-1" width="14"></iconify-icon>
                </span>
              </Link>
            </ScrollReveal>

            {/* Electrical */}
            <ScrollReveal delay="100">
              <Link href="/services/electrical" className="block group p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-500 cursor-pointer">
                <div className="w-12 h-12 bg-white border border-slate-100 shadow-sm rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                  <iconify-icon icon="lucide:zap" width="24"></iconify-icon>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Electrical Services</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed group-hover:text-slate-600 transition-colors">
                  Professional electrical wiring, installations, repairs, DB board upgrades, and industrial electrical work.
                </p>
                <span className="inline-flex items-center text-xs font-semibold text-blue-600 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  Learn More <iconify-icon icon="lucide:arrow-right" className="ml-1" width="14"></iconify-icon>
                </span>
              </Link>
            </ScrollReveal>

            {/* Borehole */}
            <ScrollReveal delay="200">
              <Link href="/services/boreholes" className="block group p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-100/50 transition-all duration-500 cursor-pointer">
                <div className="w-12 h-12 bg-white border border-slate-100 shadow-sm rounded-xl flex items-center justify-center mb-6 text-cyan-600 group-hover:scale-110 group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600 transition-all duration-300">
                  <iconify-icon icon="lucide:droplets" width="24"></iconify-icon>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Borehole Drilling</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed group-hover:text-slate-600 transition-colors">
                  Complete borehole services from site survey, drilling, casing to pump installation and water tank setup.
                </p>
                <span className="inline-flex items-center text-xs font-semibold text-cyan-600 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  Learn More <iconify-icon icon="lucide:arrow-right" className="ml-1" width="14"></iconify-icon>
                </span>
              </Link>
            </ScrollReveal>

            {/* Roofing */}
            <ScrollReveal>
              <Link href="/services/roofing" className="block group p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 cursor-pointer">
                <div className="w-12 h-12 bg-white border border-slate-100 shadow-sm rounded-xl flex items-center justify-center mb-6 text-slate-600 group-hover:scale-110 group-hover:bg-slate-800 group-hover:text-white group-hover:border-slate-800 transition-all duration-300">
                  <iconify-icon icon="lucide:home" width="24"></iconify-icon>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Roofing Solutions</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed group-hover:text-slate-600 transition-colors">
                  Quality roofing installation including IBR sheets, tiles, trusses, gutters, and waterproofing solutions.
                </p>
                <span className="inline-flex items-center text-xs font-semibold text-slate-600 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  Learn More <iconify-icon icon="lucide:arrow-right" className="ml-1" width="14"></iconify-icon>
                </span>
              </Link>
            </ScrollReveal>

            {/* Ceilings */}
            <ScrollReveal delay="100">
              <Link href="/services/ceilings" className="block group p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-500 cursor-pointer">
                <div className="w-12 h-12 bg-white border border-slate-100 shadow-sm rounded-xl flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all duration-300">
                  <iconify-icon icon="lucide:layout-template" width="24"></iconify-icon>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Ceiling Designs</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed group-hover:text-slate-600 transition-colors">
                  All ceiling types including PVC, gypsum, T&amp;G, rhinoboard, suspended ceilings with custom lighting.
                </p>
                <span className="inline-flex items-center text-xs font-semibold text-indigo-600 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  Learn More <iconify-icon icon="lucide:arrow-right" className="ml-1" width="14"></iconify-icon>
                </span>
              </Link>
            </ScrollReveal>

            {/* Painting */}
            <ScrollReveal delay="200">
              <Link href="/services/painting" className="block group p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-rose-200 hover:shadow-xl hover:shadow-rose-100/50 transition-all duration-500 cursor-pointer">
                <div className="w-12 h-12 bg-white border border-slate-100 shadow-sm rounded-xl flex items-center justify-center mb-6 text-rose-600 group-hover:scale-110 group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-600 transition-all duration-300">
                  <iconify-icon icon="lucide:paintbrush" width="24"></iconify-icon>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Painting Services</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed group-hover:text-slate-600 transition-colors">
                  Professional interior and exterior painting, texture coating, waterproofing, and decorative finishes.
                </p>
                <span className="inline-flex items-center text-xs font-semibold text-rose-600 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  Learn More <iconify-icon icon="lucide:arrow-right" className="ml-1" width="14"></iconify-icon>
                </span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-amber-50 border-y border-amber-100">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase">Why Upperhand</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4 mt-2">
              The Upperhand Advantage
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <ScrollReveal>
              <div className="mb-4 text-amber-600 bg-white p-3 rounded-lg w-fit shadow-sm">
                <iconify-icon icon="lucide:users" width="24"></iconify-icon>
              </div>
              <h4 className="text-base font-semibold text-slate-900 mb-2">Skilled Technicians</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Our team consists of qualified professionals with years of experience in their respective fields.
              </p>
            </ScrollReveal>
            <ScrollReveal delay="100">
              <div className="mb-4 text-amber-600 bg-white p-3 rounded-lg w-fit shadow-sm">
                <iconify-icon icon="lucide:badge-check" width="24"></iconify-icon>
              </div>
              <h4 className="text-base font-semibold text-slate-900 mb-2">Quality Materials</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                We use only the best quality materials sourced from trusted suppliers for lasting results.
              </p>
            </ScrollReveal>
            <ScrollReveal delay="200">
              <div className="mb-4 text-amber-600 bg-white p-3 rounded-lg w-fit shadow-sm">
                <iconify-icon icon="lucide:wallet" width="24"></iconify-icon>
              </div>
              <h4 className="text-base font-semibold text-slate-900 mb-2">Affordable Pricing</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Competitive rates with transparent quotations. No hidden costs - we respect your budget.
              </p>
            </ScrollReveal>
            <ScrollReveal delay="300">
              <div className="mb-4 text-amber-600 bg-white p-3 rounded-lg w-fit shadow-sm">
                <iconify-icon icon="lucide:headphones" width="24"></iconify-icon>
              </div>
              <h4 className="text-base font-semibold text-slate-900 mb-2">24/7 Support</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                We&apos;re always available to answer your questions and provide after-sales support.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase">Our Work</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mt-2">Featured Projects</h2>
              <p className="text-slate-500 mt-2">Some of our recent completed projects across Zimbabwe.</p>
            </div>
            <Link href="/projects" className="inline-flex items-center text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors">
              View All Projects <iconify-icon icon="lucide:arrow-right" className="ml-1" width="16"></iconify-icon>
            </Link>
          </ScrollReveal>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <ScrollReveal>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl bg-slate-100 mb-4 aspect-[4/3] shadow-md group-hover:shadow-xl transition-all duration-500">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                  <Image
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop"
                    alt="Solar Installation Project"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur px-3 py-1.5 rounded-md text-xs font-semibold text-amber-600 shadow-sm">
                    Solar Installation
                  </div>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">
                  Residential Solar System
                </h3>
                <p className="text-sm text-slate-500">5kW System • Harare</p>
              </div>
            </ScrollReveal>

            {/* Project 2 */}
            <ScrollReveal delay="100">
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl bg-slate-100 mb-4 aspect-[4/3] shadow-md group-hover:shadow-xl transition-all duration-500">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop"
                    alt="Ceiling Installation"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur px-3 py-1.5 rounded-md text-xs font-semibold text-indigo-600 shadow-sm">
                    Ceiling Design
                  </div>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
                  Modern Office Ceiling
                </h3>
                <p className="text-sm text-slate-500">Gypsum Ceiling • Bulawayo</p>
              </div>
            </ScrollReveal>

            {/* Project 3 */}
            <ScrollReveal delay="200">
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl bg-slate-100 mb-4 aspect-[4/3] shadow-md group-hover:shadow-xl transition-all duration-500">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                  <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
                    alt="Borehole Drilling"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur px-3 py-1.5 rounded-md text-xs font-semibold text-cyan-600 shadow-sm">
                    Borehole
                  </div>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-1 group-hover:text-cyan-600 transition-colors">
                  Farm Borehole &amp; Pump
                </h3>
                <p className="text-sm text-slate-500">100m Depth • Marondera</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mt-2">What Our Clients Say</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Review 1 */}
            <ScrollReveal>
              <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <iconify-icon key={i} icon="lucide:star" width="16"></iconify-icon>
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  &quot;Upperhand installed our solar system and it&apos;s been working perfectly. No more load shedding worries! Professional team and great after-sales support.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-semibold text-xs">
                    TM
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-900">Tendai M.</div>
                    <div className="text-xs text-slate-400">Homeowner, Harare</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Review 2 */}
            <ScrollReveal delay="100">
              <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <iconify-icon key={i} icon="lucide:star" width="16"></iconify-icon>
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  &quot;They drilled our borehole and installed the pump system. Very professional and the water supply has been excellent. Highly recommend their services.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 font-semibold text-xs">
                    CM
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-900">Chipo M.</div>
                    <div className="text-xs text-slate-400">Farm Owner, Marondera</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Review 3 */}
            <ScrollReveal delay="200">
              <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <iconify-icon key={i} icon="lucide:star" width="16"></iconify-icon>
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  &quot;The ceiling work they did for our new house is beautiful! Clean work, reasonable prices, and they finished on time. Will use them again.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-semibold text-xs">
                    PM
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-900">Peter M.</div>
                    <div className="text-xs text-slate-400">Business Owner, Bulawayo</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Animated Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-[128px] opacity-20 pointer-events-none animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600 rounded-full blur-[128px] opacity-10 pointer-events-none animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Ready to Start Your Project?</h2>
          </ScrollReveal>
          <ScrollReveal delay="100">
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Get in touch with us today for a free consultation and quote. We serve clients across Zimbabwe.
            </p>
          </ScrollReveal>

          <ScrollReveal delay="200">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-slate-900 bg-amber-500 rounded-lg hover:bg-amber-400 transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <iconify-icon icon="lucide:mail" width="18"></iconify-icon>
                Contact Us
              </Link>
              <a
                href="tel:+263771591526"
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-transparent border border-white/30 rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <iconify-icon icon="lucide:phone" width="18"></iconify-icon>
                0771 591 526
              </a>
              <a
                href="https://wa.me/263771591526?text=Hello%20Upperhand,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-green-600 rounded-lg hover:bg-green-500 transition-all flex items-center justify-center gap-2"
              >
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
