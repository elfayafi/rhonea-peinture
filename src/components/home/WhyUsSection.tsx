"use client";

import { motion } from "framer-motion";
import { Clock, Award, Shield, ThumbsUp } from "lucide-react";
import { SectionTitle } from "@/components/ui";

const reasons = [
  {
    icon: Clock,
    title: "Devis gratuit sous 24h",
    description:
      "Recevez rapidement une estimation detaillee et personnalisee pour votre projet.",
  },
  {
    icon: Award,
    title: "Artisan qualifie",
    description:
      "Plus de 12 ans d'experience et un savoir-faire reconnu dans la region lyonnaise.",
  },
  {
    icon: Shield,
    title: "Assurance decennale",
    description:
      "Travaillez en toute serenite avec notre garantie decennale AXA Assurances.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction garantie",
    description:
      "Note de 4.9/5 sur Google. Votre satisfaction est notre priorite absolue.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function WhyUsSection() {
  return (
    <section className="section-padding bg-neutral-100">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Pourquoi nous choisir ?"
          subtitle="Des garanties concretes pour un travail de qualite et une relation de confiance."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-2">
                  {reason.title}
                </h3>
                <p className="font-body text-sm text-neutral-600 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
