"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { solarMedia, boreholeMedia, ceilingMedia, electricMedia, paintingMedia, roofingMedia } from "../../lib/media";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = useMemo(() => {
    const mixedSlides = [
      ...solarMedia.slice(0, 2),
      ...boreholeMedia.slice(0, 1),
      ...ceilingMedia.slice(0, 1),
      ...electricMedia.slice(0, 1),
      ...paintingMedia.slice(0, 1),
      ...roofingMedia.slice(0, 1),
    ];
    return mixedSlides;
  }, []);

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
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-slate-900/90 z-10"></div>

      {/* Slides */}
      <div id="hero-slider" className="w-full h-full relative">
        {slides.map((slide, index) => (
          <Image
            key={slide.alt}
            src={slide.src}
            alt={slide.alt}
            fill
            className={`object-cover animate-kenburns transition-opacity duration-1000 filter saturate-125 contrast-110 brightness-105 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0}
          />
        ))}
      </div>
    </div>
  );
}
