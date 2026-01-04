"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Minimum load time to prevent flashing
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      // If already loaded (e.g. navigation within SPA), wait for timer
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-white transition-opacity duration-700 ease-in-out ${
        loading ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Logo/Brand Animation */}
        <div className="w-20 h-20 mb-4 relative">
          <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-amber-500 rounded-full border-t-transparent animate-spin"></div>
          <div className="absolute inset-4 bg-slate-900 rounded-full flex items-center justify-center">
            <span className="text-amber-500 font-bold text-xl">U</span>
          </div>
        </div>
        
        {/* Text Animation */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            UPPERHAND
          </h1>
          <p className="text-xs text-amber-500 font-bold uppercase tracking-[0.3em] mt-1 animate-pulse">
            Loading
          </p>
        </div>
      </div>
    </div>
  );
}
