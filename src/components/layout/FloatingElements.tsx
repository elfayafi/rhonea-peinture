"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function FloatingElements() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Fixed buttons - bottom right */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3">
        {/* Scroll to top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="w-12 h-12 bg-neutral-700 hover:bg-neutral-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
              aria-label="Retour en haut"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp */}
        <motion.a
          href={`https://wa.me/${COMPANY_INFO.phoneFormatted.replace("+", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Nous contacter sur WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.a>

        {/* Phone - Mobile only */}
        <motion.a
          href={`tel:${COMPANY_INFO.phoneFormatted}`}
          className="lg:hidden w-14 h-14 bg-secondary hover:bg-secondary-dark text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Nous appeler"
        >
          <Phone className="w-6 h-6" />
        </motion.a>
      </div>
    </>
  );
}
