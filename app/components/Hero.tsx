"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#f3ece6] text-[#231916] px-6">
      {/* Background Image: Plain Beige */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/jbe_plain_beige_bg.png"
          alt="JBE Plain Beige Background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* Hero Content - Clean Transparent Brown SVG Logo with Welcome & Address (Positioned lower) */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto pt-32 pb-20 md:pt-44 md:pb-28 mt-6 md:mt-10 gap-8">
        <div className="w-48 md:w-72 h-auto opacity-0 animate-fade-in transition-transform duration-500 hover:scale-102">
          <Image
            src="/JBE-logo-darkbrown.svg"
            alt="JBE Logo"
            width={561}
            height={581}
            className="w-full h-auto object-contain drop-shadow-xs"
            priority
          />
        </div>

        {/* Welcome Subtitle & Address */}
        <div className="space-y-3 opacity-0 animate-fade-in-delay">
          <p className="font-serif italic font-light text-base md:text-xl tracking-[0.15em] text-[#3b2e28]">
            We look forward to welcoming you
          </p>
          <div className="font-mono text-[11px] md:text-xs tracking-[0.25em] text-[#8c674b] uppercase space-y-1 pt-1">
            <p>51 W 8th St</p>
            <p>west village · nyc</p>
          </div>
        </div>
      </div>
    </section>
  );
}
