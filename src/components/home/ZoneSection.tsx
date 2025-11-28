"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { SectionTitle } from "@/components/ui";
import { CITIES } from "@/lib/constants";

export default function ZoneSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Notre zone d'intervention"
          subtitle="Nous intervenons à Lyon et dans toutes les communes du département du Rhône (69)."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 flex items-center justify-center">
              {/* Stylized map representation */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full max-w-md"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Rhone department shape (simplified) */}
                <path
                  d="M200 50 L300 100 L350 200 L320 300 L250 350 L150 350 L80 300 L50 200 L100 100 Z"
                  fill="currentColor"
                  className="text-primary/20"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                {/* Lyon center marker */}
                <circle cx="200" cy="200" r="15" className="fill-secondary" />
                <circle
                  cx="200"
                  cy="200"
                  r="25"
                  className="fill-secondary/30"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="40"
                  className="fill-secondary/10"
                />
                {/* City dots */}
                <circle cx="230" cy="170" r="6" className="fill-primary" />
                <circle cx="170" cy="230" r="6" className="fill-primary" />
                <circle cx="250" cy="220" r="6" className="fill-primary" />
                <circle cx="160" cy="180" r="6" className="fill-primary" />
                <circle cx="220" cy="250" r="6" className="fill-primary" />
                <circle cx="280" cy="180" r="6" className="fill-primary" />
                <circle cx="150" cy="260" r="6" className="fill-primary" />
                <circle cx="260" cy="280" r="6" className="fill-primary" />
                {/* Label Lyon */}
                <text
                  x="200"
                  y="200"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-white font-heading font-bold text-sm"
                >
                  LYON
                </text>
              </svg>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-secondary text-white px-4 py-2 rounded-lg shadow-lg">
              <span className="font-heading font-bold">30 km</span>
              <span className="font-body text-sm ml-1">autour de Lyon</span>
            </div>
          </motion.div>

          {/* Cities List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading font-semibold text-xl text-neutral-900 mb-6">
              Principales villes couvertes :
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {CITIES.map((city, index) => (
                <motion.div
                  key={city.slug}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={`/${city.slug}`}
                    className="flex items-center gap-2 p-3 bg-neutral-100 hover:bg-primary hover:text-white rounded-lg transition-colors duration-300 group"
                  >
                    <MapPin className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-300" />
                    <span className="font-body text-sm font-medium">
                      {city.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
              <p className="font-body text-sm text-neutral-600">
                <strong className="text-primary">Vous ne trouvez pas votre ville ?</strong>{" "}
                Pas de problème ! Nous intervenons dans tout le département du
                Rhône. Contactez-nous pour vérifier que nous couvrons votre
                secteur.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
