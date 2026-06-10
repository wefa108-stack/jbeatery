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
      
      <motion.header 
        className="fixed top-0 left-0 w-full z-40 p-6 md:p-10 flex justify-between items-center pointer-events-none"
      >
        <div className="pointer-events-auto">
          <button 
            className="relative w-8 h-6 group flex flex-col justify-between focus:outline-none" 
            aria-label="Menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`block h-[2px] w-full bg-aru-primary transition-all duration-300 origin-left ${isOpen ? 'rotate-45 translate-y-[-1px] translate-x-[4px] w-[110%]' : 'group-hover:scale-x-75'}`}></span>
            <span className={`block h-[2px] w-full bg-aru-primary transition-all duration-300 ${isOpen ? 'opacity-0' : 'group-hover:scale-x-75 delay-75 origin-left'}`}></span>
            <span className={`block h-[2px] w-full bg-aru-primary transition-all duration-300 origin-left ${isOpen ? '-rotate-45 translate-y-[1px] translate-x-[4px] w-[110%]' : 'group-hover:scale-x-75 delay-150'}`}></span>
          </button>
        </div>
        
        <div className="pointer-events-auto flex items-center gap-6 md:gap-10">
          <ContactWidget />
          <ResyWidget />
        </div>
      </motion.header>
    </>
  );
}
