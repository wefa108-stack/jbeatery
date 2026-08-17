"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#14100e] text-[#ede8e5] px-6">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/jbebackground.png"
          alt="JBE West Village Background"
          fill
          className="object-cover object-center opacity-45 transition-transform duration-10000 ease-out hover:scale-105"
          priority
          sizes="100vw"
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#14100e]/80 via-[#14100e]/40 to-[#14100e]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto pt-24 pb-12 gap-8">
        {/* Logo Card */}
        <div className="w-36 md:w-56 h-auto shadow-2xl rounded-xl overflow-hidden border border-[#c9a47c]/30 backdrop-blur-xs opacity-0 animate-fade-in transition-transform duration-500 hover:scale-102">
          <Image
            src="/JBE-logo.svg"
            alt="JBE Logo"
            width={240}
            height={248}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Title */}
        <div className="space-y-3 opacity-0 animate-fade-in-delay">
          <h1 className="font-serif font-light text-3xl md:text-6xl uppercase tracking-[0.25em] text-[#ede8e5]">
            JBE
          </h1>
          <p className="font-mono text-[11px] md:text-xs tracking-[0.3em] text-[#c9a47c] uppercase">
            West Village &bull; New York
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about-section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#ede8e5]">Explore</span>
        <div className="w-[1px] h-7 bg-gradient-to-b from-[#c9a47c] to-transparent animate-bounce" />
      </a>
    </section>
  );
}
