"use client";

import { motion } from "framer-motion";
import { Phone, FileText, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { COMPANY_INFO } from "@/lib/constants";

const reassuranceItems = [
  "Devis sous 24h",
  "Assurance décennale",
  `${COMPANY_INFO.yearsExperience} ans d'expérience`,
  `${COMPANY_INFO.googleRating}/5 sur Google`,
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/70 to-neutral-900/50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
          >
            Peintre professionnel à{" "}
            <span className="text-secondary">Lyon</span> et dans le{" "}
            <span className="text-secondary">Rhône</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-body text-xl text-white/90 mb-8 leading-relaxed"
          >
            Transformez votre intérieur et votre extérieur avec un artisan de
            confiance. Peinture, ravalement, décoration : nous donnons vie à vos
            projets depuis {COMPANY_INFO.yearsExperience} ans.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link
              href="/devis"
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-body font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl text-lg"
            >
              <FileText className="w-5 h-5" />
              Devis gratuit
            </Link>
            <a
              href={`tel:${COMPANY_INFO.phoneFormatted}`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-body font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-lg"
            >
              <Phone className="w-5 h-5" />
              Appeler maintenant
            </a>
          </motion.div>

          {/* Reassurance Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 md:gap-6"
          >
            {reassuranceItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white/90"
              >
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="font-body text-sm md:text-base">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
