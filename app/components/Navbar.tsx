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
      {/* Left side: Menu Button */}
      <div className="fixed top-0 left-0 z-50 p-4 pt-10 md:p-10">
        <a 
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
          className="p-6 -m-6 font-mono font-light text-[12px] md:text-[14px] uppercase tracking-[0.08em] text-white mix-blend-difference hover:opacity-60 transition-opacity inline-block cursor-pointer focus:outline-none"
        >
          {isOpen ? "CLOSE" : "MENU"}
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
