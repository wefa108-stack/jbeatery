"use client";

import { useState } from "react";

export default function Preloader() {
  const [done, setDone] = useState(false);

  if (done) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-aru-page animate-preloader-exit"
      onAnimationEnd={() => setDone(true)}
    >
      <h1 className="text-aru-primary font-light text-[10vw] md:text-[7rem] uppercase tracking-[0.2em] md:tracking-[0.25em] whitespace-nowrap opacity-0 animate-fade-in">
        JBeatery
      </h1>
    </div>
  );
}
