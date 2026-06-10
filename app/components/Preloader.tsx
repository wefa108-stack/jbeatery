"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the preloader after a short delay
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-aru-page pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          key="preloader"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }} // Subtle fade-in of the logo
          >
            <h1 className="text-aru-primary font-light text-[10vw] md:text-[7rem] uppercase tracking-[0.2em] md:tracking-[0.25em] whitespace-nowrap">
              JBeatery
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
