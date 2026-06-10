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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-30 bg-aru-primary/95 flex flex-col justify-center items-center overflow-y-auto px-4"
        >
          <div className="flex flex-col items-center gap-6 md:gap-10">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="font-light text-lg md:text-3xl text-white/70 uppercase tracking-[0.15em] md:tracking-[0.2em] hover:text-white transition-all duration-300 drop-shadow-md"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            className="mt-12 md:mt-20 flex gap-6 md:gap-12"
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
