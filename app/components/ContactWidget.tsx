"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="font-mono font-light text-[12px] md:text-[14px] uppercase tracking-[0.08em] text-white mix-blend-difference hover:opacity-60 transition-opacity inline-block cursor-pointer"
      >
        Contact
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#ede8e5]/60 backdrop-blur-md pointer-events-auto"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.29, 0.63, 0.57, 0.43] }}
              className="bg-aru-page w-[90%] md:w-full md:max-w-lg p-8 md:p-16 text-center border border-aru-brown/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent clicking inside the modal from closing it
            >
              <h2 className="text-aru-primary font-light text-2xl uppercase tracking-[0.2em] mb-10">
                Contact Us
              </h2>
              <div className="flex flex-col gap-2 mb-12">
                <p className="font-mono font-light text-[#5a483e] text-[12px] leading-[2.5] tracking-[0.05em]">
                  123 Culinary Lane, Gastronomy District
                </p>
                <p className="font-mono font-light text-[#5a483e] text-[12px] leading-[2.5] tracking-[0.05em]">
                  <a href="mailto:hello@jbeatery.com" className="hover:underline">hello@jbeatery.com</a>
                </p>
                <p className="font-mono font-light text-[#5a483e] text-[12px] leading-[2.5] tracking-[0.05em]">
                  <a href="tel:+61123456789" className="hover:underline">+61 123 456 789</a>
                </p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="font-mono font-light text-[10px] uppercase tracking-[0.2em] text-aru-primary border-b border-aru-primary pb-1 hover:opacity-50 transition-opacity"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
