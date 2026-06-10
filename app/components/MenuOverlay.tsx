"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { name: "Menu", href: "/menu" },
  { name: "Reservations", href: "/reservations" },
  { name: "JB Archives", href: "/archives" },
  { name: "Private Dining", href: "/private-dining" },
  { name: "Set Menu", href: "/kris-set" },
  { name: "About", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  return (
    <div
      className={`fixed inset-0 z-30 bg-aru-primary/40 backdrop-blur-md flex flex-col justify-center items-center pointer-events-auto overflow-y-auto px-4 transition-all duration-500 ease-in-out ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="flex flex-col items-center gap-6 md:gap-10">
        {navItems.map((item, i) => (
          <div
            key={item.name}
            style={{
              transform: isOpen ? "translateY(0)" : "translateY(30px)",
              opacity: isOpen ? 1 : 0,
              transition: `all 0.5s ease-out ${isOpen ? i * 0.05 + 0.1 : 0}s`,
            }}
          >
            <Link
              href={item.href}
              onClick={onClose}
              className="font-light text-lg md:text-3xl text-white/70 uppercase tracking-[0.15em] md:tracking-[0.2em] hover:text-white transition-all duration-300 drop-shadow-md"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>

      <div 
        className="mt-12 md:mt-20 flex gap-6 md:gap-12"
        style={{
          transform: isOpen ? "translateY(0)" : "translateY(20px)",
          opacity: isOpen ? 1 : 0,
          transition: `all 0.5s ease-out ${isOpen ? 0.4 : 0}s`,
        }}
      >
        {[
          { name: "Instagram", href: "https://www.instagram.com/jbeaterynyc/" },
          { name: "WeChat", href: "#" },
          { name: "Email", href: "#" }
        ].map((social) => (
          <a
            key={social.name}
            href={social.href}
            target={social.name === "Instagram" ? "_blank" : undefined}
            rel={social.name === "Instagram" ? "noopener noreferrer" : undefined}
            className="font-mono text-xs md:text-sm uppercase tracking-widest text-white/50 hover:text-white transition-colors"
          >
            {social.name}
          </a>
        ))}
      </div>
    </div>
  );
}
