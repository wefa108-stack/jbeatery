"use client";

import { useState, useEffect } from "react";

export default function Preloader() {
  const [done, setDone] = useState(false);

  // Bulletproof fallback: remove from DOM after 2s no matter what
  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (done) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-aru-page animate-preloader-exit pointer-events-none"
      onAnimationEnd={(e) => {
        // Only respond to our own animation, not bubbled child animations
        if (e.animationName === "preloader-exit") {
          setDone(true);
        }
      }}
    >
      <h1 className="text-aru-primary font-light text-[10vw] md:text-[7rem] uppercase tracking-[0.2em] md:tracking-[0.25em] whitespace-nowrap opacity-0 animate-fade-in">
        JBeatery
      </h1>
    </div>
  );
}
