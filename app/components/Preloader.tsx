"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (done) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#14100e] animate-preloader-exit pointer-events-none"
      onAnimationEnd={(e) => {
        if (e.animationName === "preloader-exit") {
          setDone(true);
        }
      }}
    >
      <div className="flex flex-col items-center gap-4 opacity-0 animate-fade-in">
        <Image
          src="/JBE-logo.svg"
          alt="JBE Logo"
          width={120}
          height={124}
          className="w-24 md:w-32 h-auto object-contain rounded-lg shadow-xl"
          priority
        />
        <span className="font-serif text-sm tracking-[0.3em] uppercase text-[#c9a47c] mt-2">
          JBE
        </span>
      </div>
    </div>
  );
}
