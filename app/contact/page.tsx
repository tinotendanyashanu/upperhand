import ScrollReveal from "../components/ScrollReveal";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Upperhand - Get a Free Quote",
  description: "Contact Upperhand for solar installation, electrical services, borehole drilling, roofing, ceilings, and painting in Zimbabwe. Call 0771591526 or 0718393169.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mt-2 mb-6">
              Get in Touch With Us
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              Ready to start your project? Contact us today for a free consultation and quote. We&apos;re here to help!
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <ScrollReveal>
              <h2 className="text-2xl font-semibold text-slate-900 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                {/* Phone Numbers */}
                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                    <iconify-icon icon="lucide:phone" width="24" className="text-amber-600"></iconify-icon>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Phone Numbers</h3>
                    <div className="space-y-1">
                      <a href="tel:+263771591526" className="block text-slate-600 hover:text-amber-600 transition-colors">
                        0771 591 526
                      </a>
                      <a href="tel:+263718393169" className="block text-slate-600 hover:text-amber-600 transition-colors">
                        0718 393 169
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <a 
                  href="https://wa.me/263771591526?text=Hello%20Upperhand,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <iconify-icon icon="lucide:message-circle" width="24" className="text-white"></iconify-icon>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">WhatsApp Us</h3>
                    <p className="text-slate-600 text-sm">Click to chat on WhatsApp</p>
                    <span className="text-green-600 text-sm font-medium">0771 591 526</span>
                  </div>
                </a>

                {/* Email */}
                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                    <iconify-icon icon="lucide:mail" width="24" className="text-amber-600"></iconify-icon>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Email Address</h3>
                    <a href="mailto:Takuenyash@gmail.com" className="text-slate-600 hover:text-amber-600 transition-colors">
                      Takuenyash@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                    <iconify-icon icon="lucide:map-pin" width="24" className="text-amber-600"></iconify-icon>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Location</h3>
                    <p className="text-slate-600">Zimbabwe</p>
                    <p className="text-sm text-slate-500 mt-1">We serve clients across the country</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                    <iconify-icon icon="lucide:clock" width="24" className="text-amber-600"></iconify-icon>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Working Hours</h3>
                    <p className="text-slate-600">Monday - Saturday: 7:00 AM - 6:00 PM</p>
                    <p className="text-slate-600">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay="100">
              <div className="bg-slate-50 p-8 rounded-2xl">
                <h2 className="text-2xl font-semibold text-slate-900 mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="Your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="solar">Solar Installation</option>
                      <option value="electrical">Electrical Services</option>
                      <option value="borehole">Borehole Drilling</option>
                      <option value="roofing">Roofing Solutions</option>
                      <option value="ceilings">Ceiling Designs</option>
                      <option value="painting">Painting Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-all flex items-center justify-center gap-2"
                  >
                    <iconify-icon icon="lucide:send" width="18"></iconify-icon>
                    Send Message
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-white">Quick Contact Options</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal>
              <a
                href="tel:+263771591526"
                className="block p-6 bg-slate-800 rounded-xl text-center hover:bg-slate-700 transition-colors group"
              >
                <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <iconify-icon icon="lucide:phone" width="24" className="text-white"></iconify-icon>
                </div>
                <h3 className="text-white font-semibold mb-1">Call Us</h3>
                <p className="text-slate-400">0771 591 526</p>
              </a>
            </ScrollReveal>

            <ScrollReveal delay="100">
              <a
                href="https://wa.me/263771591526?text=Hello%20Upperhand,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-green-600 rounded-xl text-center hover:bg-green-500 transition-colors group"
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <iconify-icon icon="lucide:message-circle" width="24" className="text-green-600"></iconify-icon>
                </div>
                <h3 className="text-white font-semibold mb-1">WhatsApp</h3>
                <p className="text-green-100">Chat with us now</p>
              </a>
            </ScrollReveal>

            <ScrollReveal delay="200">
              <a
                href="mailto:Takuenyash@gmail.com"
                className="block p-6 bg-slate-800 rounded-xl text-center hover:bg-slate-700 transition-colors group"
              >
                <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <iconify-icon icon="lucide:mail" width="24" className="text-white"></iconify-icon>
                </div>
                <h3 className="text-white font-semibold mb-1">Email Us</h3>
                <p className="text-slate-400">Takuenyash@gmail.com</p>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
