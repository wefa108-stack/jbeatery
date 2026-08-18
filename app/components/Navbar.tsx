"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-6 py-5 md:px-12 md:py-6 flex justify-between items-center bg-transparent pointer-events-none">
      {/* Top-Left SVG Logo (No border box, clean & larger) */}
      <div className="flex items-center cursor-default select-none pointer-events-auto">
        <Image
          src="/JBE-logo-darkbrown.svg"
          alt="JBE Logo"
          width={64}
          height={64}
          className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-xs"
        />
      </div>

      {/* Top-Right Address */}
      <div className="font-mono font-light text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#8c674b] text-right leading-tight pointer-events-auto">
        <p>51 W 8th St</p>
        <p className="text-[9px] md:text-[10px] opacity-80">West Village &bull; NYC</p>
      </div>
    </header>
  );
}
