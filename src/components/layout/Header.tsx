"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { COMPANY_INFO, NAVIGATION_ITEMS } from "@/lib/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-heading font-bold text-xl">R</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-xl text-neutral-900">
                RHONEA
              </span>
              <span className="font-heading font-medium text-xl text-primary">
                {" "}Peinture
              </span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-body text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-neutral-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phoneFormatted}`}
              className="flex items-center gap-2 text-primary font-body font-semibold"
            >
              <Phone className="w-4 h-4" />
              {COMPANY_INFO.phone}
            </a>
            <Link
              href="/devis"
              className="bg-secondary hover:bg-secondary-dark text-white font-body font-semibold px-6 py-2.5 rounded-lg transition-colors"
            >
              Devis gratuit
            </Link>
          </div>

          {/* Menu Mobile Button */}
          <button
            className="lg:hidden p-2 text-neutral-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-neutral-200"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-2">
                {NAVIGATION_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`font-body text-base font-medium py-2 px-4 rounded-lg transition-colors ${
                      pathname === item.href
                        ? "bg-primary/10 text-primary"
                        : "text-neutral-700 hover:bg-neutral-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-4 pt-4 border-t border-neutral-200 flex flex-col gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phoneFormatted}`}
                  className="flex items-center justify-center gap-2 text-primary font-body font-semibold py-2"
                >
                  <Phone className="w-5 h-5" />
                  {COMPANY_INFO.phone}
                </a>
                <Link
                  href="/devis"
                  className="bg-secondary hover:bg-secondary-dark text-white font-body font-semibold px-6 py-3 rounded-lg transition-colors text-center"
                >
                  Devis gratuit
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
