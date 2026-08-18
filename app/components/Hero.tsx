"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#f3ece6] text-[#231916] px-6">
      {/* Background Image: Plain Beige provided by user */}
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

      {/* Hero Content - Clean Transparent Brown SVG Logo without rounded box container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto pt-24 pb-12 gap-6">
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

        {/* Welcome Subtitle */}
        <div className="space-y-1.5 opacity-0 animate-fade-in-delay">
          <p className="font-serif italic font-light text-base md:text-xl tracking-[0.15em] text-[#3b2e28]">
            We look forward to welcoming you
          </p>
          <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#8c674b] block pt-1">
            West Village &bull; New York
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about-section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#3b2e28]">Scroll</span>
        <div className="w-[1px] h-7 bg-gradient-to-b from-[#8c674b] to-transparent animate-bounce" />
      </a>
    </section>
  );
}
