"use client";

import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after a small delay for a nice entrance effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="https://wa.me/263771591526?text=Hello%20Upperhand,%20I%20would%20like%20to%20inquire%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all duration-500 hover:scale-110 group ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      aria-label="Chat on WhatsApp"
    >
      {/* @ts-expect-error - iconify-icon is a custom element */}
      <iconify-icon icon="logos:whatsapp-icon" width="24" height="24"></iconify-icon>
      <span className="font-semibold text-sm hidden sm:block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
}
