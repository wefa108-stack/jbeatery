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
        <a 
          href="#"
          className="relative w-12 h-12 flex flex-col justify-center items-center gap-[5px] focus:outline-none cursor-pointer" 
          aria-label="Menu"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
        >
          {/* Safari Fix: Invisible solid background to ensure the entire area is clickable */}
          <div className="absolute inset-0 bg-white opacity-0"></div>
          
          <span className={`block h-[2px] w-7 bg-aru-primary transition-all duration-300 origin-center relative z-10 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
          <span className={`block h-[2px] w-7 bg-aru-primary transition-all duration-300 relative z-10 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block h-[2px] w-7 bg-aru-primary transition-all duration-300 origin-center relative z-10 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
        </a>
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
