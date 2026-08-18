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
      {/* Plain Red Background provided by user */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/jbe_plain_red_bg.png"
          alt="JBE Red Background"
          fill
          className="object-cover object-center scale-102"
          priority
        />
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
