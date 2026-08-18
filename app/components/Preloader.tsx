"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 3600);
    return () => clearTimeout(timer);
  }, []);

  if (done) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#421212] animate-preloader-exit pointer-events-none overflow-hidden"
      onAnimationEnd={(e) => {
        if (e.animationName === "preloader-exit") {
          setDone(true);
        }
      }}
    >
      {/* Red Textured Background from jbeanime.pdf */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/jbe_red_bg.png"
          alt="JBE Red Background"
          fill
          className="object-cover object-center opacity-90 scale-102"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#421212]/30 via-transparent to-[#2b0a0a]/60" />
      </div>

      {/* Calligraphy Brush Write-out Animation Container */}
      <div className="relative z-10 w-64 md:w-96 h-auto flex items-center justify-center p-4">
        <div className="relative w-full h-auto overflow-hidden animate-brush-write">
          <Image
            src="/jbe_calligraphy_logo_cropped.png"
            alt="JBE Calligraphy"
            width={853}
            height={490}
            className="w-full h-auto object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </div>
  );
}
