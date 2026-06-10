"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-aru-page font-light text-[10vw] md:text-[7rem] uppercase tracking-[0.2em] md:tracking-[0.25em] text-center px-4 drop-shadow-md whitespace-nowrap"
        >
          JBeatery
        </motion.h1>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-aru-page/60 text-xs tracking-widest uppercase font-mono">Discover</span>
        <div className="w-[1px] h-12 bg-aru-page/30 overflow-hidden relative">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-full bg-aru-page"
          />
        </div>
      </motion.div>
    </section>
  );
}
