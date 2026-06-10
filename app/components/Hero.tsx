"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-aru-black">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero.png"
          alt="Wood-fired hearth at JBeatery"
          fill
          className="object-cover object-center opacity-70"
          priority
        />
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-aru-page font-light text-6xl md:text-[7rem] uppercase tracking-[0.2em] md:tracking-[0.25em] text-center px-4 drop-shadow-md opacity-0 animate-fade-in-delay">
          JBeatery
        </h1>
      </div>
    </section>
  );
}
