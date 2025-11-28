"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  PaintBucket,
  Home,
  Building2,
  Wallpaper,
  Sparkles,
  Palette,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { SectionTitle } from "@/components/ui";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  PaintBucket,
  Home,
  Building2,
  Wallpaper,
  Sparkles,
  Palette,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Nos services de peinture"
          subtitle="Des solutions completes pour tous vos projets de peinture et de decoration, realisees par des professionnels qualifies."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || PaintBucket;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group card p-6 hover:border-primary border-2 border-transparent"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-neutral-900 mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-neutral-600 mb-4 leading-relaxed">
                  {service.shortDescription}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-primary font-body font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
