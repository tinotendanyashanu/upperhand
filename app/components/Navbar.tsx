"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-amber-500 text-white flex items-center justify-center rounded-lg shadow-lg shadow-amber-200 group-hover:scale-105 transition-transform duration-300">
            <iconify-icon icon="lucide:zap" width="18" height="18"></iconify-icon>
          </div>
          <span className="text-lg font-semibold tracking-tight text-slate-900 group-hover:opacity-80 transition-opacity">
            UPPERHAND
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
            Services
          </Link>
          <Link href="/projects" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
            Portfolio
          </Link>
          <Link href="/about" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:flex items-center justify-center px-4 py-2 text-xs uppercase tracking-wide font-semibold text-white bg-amber-500 rounded-md hover:bg-amber-600 transition-all hover:shadow-lg focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 transform hover:-translate-y-0.5"
          >
            Get Quote
          </Link>
          <button 
            className="md:hidden text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <iconify-icon icon={isMenuOpen ? "lucide:x" : "lucide:menu"} width="24" height="24"></iconify-icon>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 px-6 space-y-4">
          <Link href="/" className="block text-sm font-medium text-slate-700 hover:text-amber-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/services" className="block text-sm font-medium text-slate-700 hover:text-amber-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>
          <Link href="/projects" className="block text-sm font-medium text-slate-700 hover:text-amber-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Portfolio
          </Link>
          <Link href="/about" className="block text-sm font-medium text-slate-700 hover:text-amber-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/contact" className="block text-sm font-medium text-slate-700 hover:text-amber-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          <Link
            href="/contact"
            className="block w-full text-center px-4 py-2 text-sm font-semibold text-white bg-amber-500 rounded-md hover:bg-amber-600 transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
