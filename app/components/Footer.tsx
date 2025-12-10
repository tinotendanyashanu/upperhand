import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-900 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-amber-500 text-white flex items-center justify-center rounded-lg shadow-sm">
              {/* @ts-expect-error - iconify-icon is a custom element */}
              <iconify-icon icon="lucide:zap" width="16"></iconify-icon>
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-900">UPPERHAND</span>
          </Link>
          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            Zimbabwe&apos;s trusted partner for solar installations, electrical work, boreholes, roofing, ceilings, and painting solutions.
          </p>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-amber-500 transition-colors">
              {/* @ts-expect-error - iconify-icon is a custom element */}
              <iconify-icon icon="lucide:facebook" width="20"></iconify-icon>
            </a>
            <a href="https://wa.me/263771591526" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-green-500 transition-colors">
              {/* @ts-expect-error - iconify-icon is a custom element */}
              <iconify-icon icon="lucide:message-circle" width="20"></iconify-icon>
            </a>
            <a href="mailto:Takuenyash@gmail.com" className="text-slate-500 hover:text-amber-500 transition-colors">
              {/* @ts-expect-error - iconify-icon is a custom element */}
              <iconify-icon icon="lucide:mail" width="20"></iconify-icon>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-slate-900 mb-6">Services</h4>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>
              <Link href="/services/solar" className="hover:text-amber-500 transition-colors">
                Solar Installation
              </Link>
            </li>
            <li>
              <Link href="/services/electrical" className="hover:text-amber-500 transition-colors">
                Electrical Services
              </Link>
            </li>
            <li>
              <Link href="/services/boreholes" className="hover:text-amber-500 transition-colors">
                Borehole Drilling
              </Link>
            </li>
            <li>
              <Link href="/services/roofing" className="hover:text-amber-500 transition-colors">
                Roofing Solutions
              </Link>
            </li>
            <li>
              <Link href="/services/ceilings" className="hover:text-amber-500 transition-colors">
                Ceiling Designs
              </Link>
            </li>
            <li>
              <Link href="/services/painting" className="hover:text-amber-500 transition-colors">
                Painting Services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-slate-900 mb-6">Company</h4>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>
              <Link href="/about" className="hover:text-amber-500 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-amber-500 transition-colors">
                Our Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-amber-500 transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-slate-900 mb-6">Contact Us</h4>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-3">
              {/* @ts-expect-error - iconify-icon is a custom element */}
              <iconify-icon icon="lucide:map-pin" className="mt-0.5 text-amber-500" width="16"></iconify-icon>
              <span>Zimbabwe</span>
            </li>
            <li className="flex items-center gap-3">
              {/* @ts-expect-error - iconify-icon is a custom element */}
              <iconify-icon icon="lucide:phone" className="text-amber-500" width="16"></iconify-icon>
              <div className="flex flex-col">
                <a href="tel:+263771591526" className="hover:text-amber-500 transition-colors">0771 591 526</a>
                <a href="tel:+263718393169" className="hover:text-amber-500 transition-colors">0718 393 169</a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              {/* @ts-expect-error - iconify-icon is a custom element */}
              <iconify-icon icon="lucide:mail" className="text-amber-500" width="16"></iconify-icon>
              <a href="mailto:Takuenyash@gmail.com" className="hover:text-amber-500 transition-colors">Takuenyash@gmail.com</a>
            </li>
          </ul>
          
          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/263771591526?text=Hello%20Upperhand,%20I%20would%20like%20to%20inquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-colors shadow-sm hover:shadow-md"
          >
            {/* @ts-expect-error - iconify-icon is a custom element */}
            <iconify-icon icon="lucide:message-circle" width="18"></iconify-icon>
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Upperhand. All rights reserved.
        </p>
        <p className="text-sm text-slate-500">
          Designed by <a href="#" className="text-amber-600 hover:text-amber-700 transition-colors">Upperhand Tech</a>
        </p>
      </div>
    </footer>
  );
}
