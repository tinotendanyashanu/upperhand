"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1920&auto=format&fit=crop",
    alt: "Solar Installation",
  },
  {
    src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1920&auto=format&fit=crop",
    alt: "Electrical Work",
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1920&auto=format&fit=crop",
    alt: "Borehole Drilling",
  },
  {
    src: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=1920&auto=format&fit=crop",
    alt: "Roofing",
  },
  {
    src: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1920&auto=format&fit=crop",
    alt: "Painting",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-slate-900/90 z-10"></div>

      {/* Slides */}
      <div id="hero-slider" className="w-full h-full relative">
        {slides.map((slide, index) => (
          <Image
            key={slide.alt}
            src={slide.src}
            alt={slide.alt}
            fill
            className={`object-cover animate-kenburns transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0}
          />
        ))}
      </div>
    </div>
  );
}
