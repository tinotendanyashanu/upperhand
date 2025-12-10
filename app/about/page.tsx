import ScrollReveal from "../components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Upperhand - Engineering & Construction Services Zimbabwe",
  description: "Learn about Upperhand, Zimbabwe's trusted provider of solar installation, electrical services, borehole drilling, roofing, ceilings, and painting services.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase">About Us</span>
            <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mt-2 mb-6">
              Building Zimbabwe&apos;s Future, <br className="hidden md:block" />
              <span className="text-amber-500">One Project at a Time</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              Upperhand is a leading provider of engineering and construction services in Zimbabwe, dedicated to delivering quality workmanship and exceptional customer service.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
                  alt="Upperhand Team at Work"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-lg font-medium">Professional Team, Quality Results</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay="100">
              <h2 className="text-3xl font-semibold text-slate-900 mb-6">Who We Are</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Upperhand is a Zimbabwe-based company specializing in comprehensive engineering and construction solutions. We pride ourselves on delivering high-quality services that meet and exceed our clients&apos; expectations.
                </p>
                <p>
                  Our team consists of experienced professionals who are passionate about their work. From solar installations that power homes and businesses, to borehole drilling that provides clean water, we handle every project with the utmost care and professionalism.
                </p>
                <p>
                  We believe in using quality materials, employing skilled technicians, and maintaining transparent communication with our clients throughout every project.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="p-4 bg-amber-50 rounded-xl">
                  <div className="text-3xl font-bold text-amber-600 mb-1">100+</div>
                  <div className="text-sm text-slate-600">Projects Completed</div>
                </div>
                <div className="p-4 bg-amber-50 rounded-xl">
                  <div className="text-3xl font-bold text-amber-600 mb-1">50+</div>
                  <div className="text-sm text-slate-600">Happy Clients</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-white p-8 rounded-2xl shadow-sm h-full">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <iconify-icon icon="lucide:target" width="24" className="text-amber-600"></iconify-icon>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-600">
                  To provide reliable, affordable, and high-quality engineering and construction services to homes and businesses across Zimbabwe. We aim to be the go-to company for solar, electrical, borehole, roofing, ceiling, and painting solutions.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay="100">
              <div className="bg-white p-8 rounded-2xl shadow-sm h-full">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <iconify-icon icon="lucide:eye" width="24" className="text-amber-600"></iconify-icon>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-600">
                  To be Zimbabwe&apos;s most trusted engineering and construction company, known for quality workmanship, integrity, and customer satisfaction. We envision a Zimbabwe where every home and business has access to reliable power, clean water, and beautiful finishes.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase">Our Values</span>
            <h2 className="text-3xl font-semibold text-slate-900 mt-2">What Drives Us</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal>
              <div className="text-center p-6">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <iconify-icon icon="lucide:star" width="24" className="text-amber-600"></iconify-icon>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Quality</h4>
                <p className="text-sm text-slate-500">We never compromise on quality. Every project gets our best work.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay="100">
              <div className="text-center p-6">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <iconify-icon icon="lucide:handshake" width="24" className="text-amber-600"></iconify-icon>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Integrity</h4>
                <p className="text-sm text-slate-500">Honest pricing, clear communication, and keeping our promises.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay="200">
              <div className="text-center p-6">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <iconify-icon icon="lucide:heart" width="24" className="text-amber-600"></iconify-icon>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Customer Focus</h4>
                <p className="text-sm text-slate-500">Your satisfaction is our priority. We listen and deliver.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay="300">
              <div className="text-center p-6">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <iconify-icon icon="lucide:lightbulb" width="24" className="text-amber-600"></iconify-icon>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Innovation</h4>
                <p className="text-sm text-slate-500">We stay updated with the latest techniques and technologies.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-semibold text-white mb-4">Ready to Work With Us?</h2>
            <p className="text-amber-100 mb-8">Contact us today for a free consultation and quote on your project.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-amber-50 transition-colors"
              >
                Get in Touch
              </Link>
              <a
                href="tel:+263771591526"
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <iconify-icon icon="lucide:phone" width="18"></iconify-icon>
                0771 591 526
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
