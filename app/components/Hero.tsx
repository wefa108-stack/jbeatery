"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#f3ece6] text-[#231916] px-6">
      {/* Background Image with Warm Beige Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/jbebackground.png"
          alt="JBE West Village Background"
          fill
          className="object-cover object-center opacity-85 transition-transform duration-10000 ease-out hover:scale-103"
          priority
          sizes="100vw"
        />
        {/* Soft Warm Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f3ece6]/70 via-transparent to-[#f3ece6]" />
      </div>

      {/* Hero Content - ONLY JBE-logo.svg */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto pt-24 pb-12">
        <div className="w-44 md:w-64 h-auto shadow-2xl rounded-2xl overflow-hidden border border-[#3b2e28]/15 bg-[#231916] p-2 opacity-0 animate-fade-in transition-transform duration-500 hover:scale-102">
          <Image
            src="/JBE-logo.svg"
            alt="JBE Logo"
            width={561}
            height={581}
            className="w-full h-auto object-contain rounded-xl"
            priority
          />
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
