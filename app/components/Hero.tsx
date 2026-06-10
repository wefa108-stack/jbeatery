"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  
  // Subtle parallax effect on the background image
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  
  // Fade out the logo as the user scrolls past the hero
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-aru-black">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <Image
          src="/hero.png"
          alt="Wood-fired hearth at JBeatery"
          fill
          className="object-cover object-center opacity-70"
          priority
        />
      </motion.div>
      
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <h1 className="text-aru-page font-light text-5xl md:text-[7rem] uppercase tracking-[0.25em] text-center px-4 drop-shadow-md">
          JBeatery
        </h1>
      </motion.div>
    </section>
  );
}
