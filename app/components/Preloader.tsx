"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll on mount
    document.body.style.overflow = "hidden";

    // Start exit animation after 1.5s hold
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
      // Failsafe: if unmounted prematurely
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence
      onExitComplete={() => {
        // Unlock scroll only after exit animation completes
        document.body.style.overflow = "";
      }}
    >
      {isLoading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-50 flex items-center justify-center bg-aru-page"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }} // Pure elegant fade out
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }} // Subtle fade-in of the logo
          >
            <h1 className="text-aru-primary font-light text-[12vw] md:text-[7rem] uppercase tracking-[0.2em] md:tracking-[0.25em] whitespace-nowrap">
              JBeatery
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
