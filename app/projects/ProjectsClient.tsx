"use client";

import { useMemo, useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { projectMedia } from "../../lib/media";

const accentMap: Record<string, { badge: string; ring: string; glow: string; text: string }> = {
  Solar: { badge: "bg-amber-100 text-amber-700", ring: "ring-amber-200", glow: "shadow-amber-200/40", text: "text-amber-600" },
  Borehole: { badge: "bg-cyan-100 text-cyan-700", ring: "ring-cyan-200", glow: "shadow-cyan-200/40", text: "text-cyan-600" },
  Ceiling: { badge: "bg-indigo-100 text-indigo-700", ring: "ring-indigo-200", glow: "shadow-indigo-200/40", text: "text-indigo-600" },
  Electrical: { badge: "bg-blue-100 text-blue-700", ring: "ring-blue-200", glow: "shadow-blue-200/40", text: "text-blue-600" },
  Painting: { badge: "bg-rose-100 text-rose-700", ring: "ring-rose-200", glow: "shadow-rose-200/40", text: "text-rose-600" },
  Roofing: { badge: "bg-slate-200 text-slate-700", ring: "ring-slate-300", glow: "shadow-slate-300/40", text: "text-slate-700" },
};

export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const categories = useMemo(() => ["All", ...Array.from(new Set(projectMedia.map((item) => item.category)))], []);
  const filteredMedia = useMemo(
    () => (activeFilter === "All" ? projectMedia : projectMedia.filter((item) => item.category === activeFilter)),
    [activeFilter]
  );

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-linear-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase">Our Portfolio</span>
            <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mt-2 mb-6">
              Real Captures <br className="hidden md:block" />
              <span className="text-amber-500">From Our Sites</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              Every photo and video below comes straight from our crews on the ground—no stock fillers. We applied subtle color grading so the work looks as crisp as it feels in person.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex flex-wrap gap-3 items-center">
          {categories.map((category) => {
            const accent = category === "All" ? accentMap.Solar : accentMap[category] ?? accentMap.Solar;
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-300 ${
                  isActive
                    ? `${accent.ring} bg-white shadow-md ${accent.glow} text-slate-900`
                    : "border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300 hover:bg-white"
                }`}
              >
                {category}
                <span className="ml-2 text-xs text-slate-500">{category === "All" ? projectMedia.length : projectMedia.filter((item) => item.category === category).length}</span>
              </button>
            );
          })}
        </div>

        <section className="py-20 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMedia.map((item, index) => {
              const accent = accentMap[item.category] ?? accentMap.Solar;
              const isVideo = item.type === "video";
              const delay = index % 3 === 1 ? "100" : index % 3 === 2 ? "200" : undefined;

              return (
                <ScrollReveal key={item.src} delay={delay}>
                  <div className={`group cursor-pointer rounded-xl overflow-hidden bg-slate-100 ring-1 ${accent.ring} shadow-md hover:shadow-xl ${accent.glow} transition-all duration-500 relative aspect-4/3`}>
                    <div className="absolute inset-0 bg-linear-to-b from-black/35 via-transparent to-black/60 z-10"></div>
                    {isVideo ? (
                      <video
                        className="absolute inset-0 h-full w-full object-cover filter saturate-125 contrast-110 brightness-105"
                        controls
                        poster={item.poster}
                        preload="metadata"
                      >
                        <source src={item.src} type="video/mp4" />
                      </video>
                    ) : (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter saturate-125 contrast-110 brightness-105"
                      />
                    )}
                    <div className={`absolute top-3 left-3 z-20 px-3 py-1.5 rounded-md text-xs font-semibold backdrop-blur-sm ${accent.badge}`}>
                      {item.category}
                    </div>
                    <div className="absolute bottom-3 left-3 z-20 text-white text-sm font-semibold drop-shadow-lg">
                      Upperhand field capture
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
