"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 3000);
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

      {/* Calligraphy Stroke-by-Stroke Animation (J -> B -> E) */}
      <div className="relative z-10 w-64 md:w-96 aspect-[853/490] flex items-center justify-center p-4">
        {/* Stroke J */}
        <div className="absolute inset-0 animate-stroke-j">
          <Image
            src="/jbe_letter_J.png"
            alt="JBE Stroke J"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* Stroke B */}
        <div className="absolute inset-0 animate-stroke-b">
          <Image
            src="/jbe_letter_B.png"
            alt="JBE Stroke B"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* Stroke E */}
        <div className="absolute inset-0 animate-stroke-e">
          <Image
            src="/jbe_letter_E.png"
            alt="JBE Stroke E"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </div>
  );
}
