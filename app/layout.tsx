import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Upperhand | Solar, Electrical, Boreholes & Construction Services in Zimbabwe",
  description: "Upperhand provides professional solar installation, electrical services, borehole drilling, roofing, ceiling designs, and painting services across Zimbabwe. Contact us for quality workmanship.",
  keywords: "solar installation zimbabwe, electrician zimbabwe, borehole drilling, roofing zimbabwe, ceiling designs, painting services, upperhand zimbabwe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" defer></script>
      </head>
      <body
        className={`${inter.className} antialiased bg-white text-slate-600 selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden`}
      >
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
