"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center bg-gradient-to-b from-[#14100e]/80 to-transparent backdrop-blur-[2px]">
      <div className="flex items-center gap-3 cursor-default select-none">
        <Image
          src="/JBE-logo.svg"
          alt="JBE Logo"
          width={36}
          height={36}
          className="w-7 h-7 md:w-9 md:h-9 object-contain rounded-md"
        />
        <span className="font-serif text-sm md:text-base tracking-[0.25em] uppercase text-[#ede8e5]">
          JBE
        </span>
      </div>

      <span className="font-mono font-light text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#c9a47c]/80">
        West Village
      </span>
    </header>
  );
}
