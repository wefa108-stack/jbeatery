"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ResyWidget from "./ResyWidget";
import ContactWidget from "./ContactWidget";
import MenuOverlay from "./MenuOverlay";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      <MenuOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
      {/* Left side: Hamburger Menu */}
      <div className="fixed top-0 left-0 z-50 p-4 pt-10 md:p-10">
        <button 
          className="w-14 h-14 flex justify-center items-center focus:outline-none cursor-pointer bg-white/10 backdrop-blur-md rounded-full shadow-lg border border-white/20 text-white hover:bg-white/20 transition-all" 
          aria-label="Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          )}
        </button>
      </div>
      
      {/* Right side: Widgets */}
      <div className="fixed top-0 right-0 z-40 p-4 pt-10 md:p-10 flex items-center gap-4 md:gap-10">
        <div className="hidden md:block">
          <ContactWidget />
        </div>
        <ResyWidget />
      </div>
    </>
  );
}
