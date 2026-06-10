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
  { name: "Aru Archives", href: "/archives" },
  { name: "Private Dining", href: "/private-dining" },
  { name: "Kris+ Set Menu", href: "/kris-set" },
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
          transition={{ duration: 0.6, ease: [0.29, 0.63, 0.57, 0.43] }}
          className="fixed inset-0 z-30 bg-aru-primary/40 backdrop-blur-md flex flex-col justify-center items-center pointer-events-auto overflow-y-auto"
        >
          <nav className="flex flex-col gap-8 md:gap-10 text-center mt-20 pb-20">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: i * 0.05 + 0.1, ease: "easeOut" }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="font-light text-xl md:text-3xl text-white/70 uppercase tracking-[0.2em] hover:text-white transition-all duration-300 drop-shadow-md"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
