"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionTitle } from "@/components/ui";
import { PROJECTS } from "@/lib/constants";

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const displayedProjects = PROJECTS.slice(0, 6);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % displayedProjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + displayedProjects.length) % displayedProjects.length
    );
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Nos réalisations"
          subtitle="Découvrez quelques-uns de nos projets récents et laissez-vous inspirer pour votre prochain chantier."
        />

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setIsHovering(project.id)}
              onMouseLeave={() => setIsHovering(null)}
            >
              {/* Before Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-${
                    1558618666 + index * 1000
                  }?q=80&w=800)`,
                  opacity: isHovering === project.id ? 0 : 1,
                }}
              />
              {/* After Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-${
                    1560185007 + index * 1000
                  }?q=80&w=800)`,
                  opacity: isHovering === project.id ? 1 : 0,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent" />

              {/* Label */}
              <div className="absolute top-4 left-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-body font-semibold ${
                    isHovering === project.id
                      ? "bg-accent text-white"
                      : "bg-white/90 text-neutral-900"
                  } transition-colors duration-300`}
                >
                  {isHovering === project.id ? "Après" : "Avant"}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-xs font-body text-white/80 uppercase tracking-wider">
                  {project.type}
                </span>
                <h3 className="font-heading font-semibold text-lg text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-sm font-body text-white/80">
                  {project.city} - {project.surface}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[4/3]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-${
                      1560185007 + currentIndex * 1000
                    }?q=80&w=800)`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-xs font-body text-white/80 uppercase tracking-wider">
                    {displayedProjects[currentIndex].type}
                  </span>
                  <h3 className="font-heading font-semibold text-lg text-white mb-1">
                    {displayedProjects[currentIndex].title}
                  </h3>
                  <p className="text-sm font-body text-white/80">
                    {displayedProjects[currentIndex].city} -{" "}
                    {displayedProjects[currentIndex].surface}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg"
            aria-label="Projet précédent"
          >
            <ChevronLeft className="w-5 h-5 text-neutral-900" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg"
            aria-label="Projet suivant"
          >
            <ChevronRight className="w-5 h-5 text-neutral-900" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {displayedProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-6 bg-primary"
                    : "bg-neutral-300"
                }`}
                aria-label={`Aller au projet ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-body font-semibold px-6 py-3 rounded-lg transition-all duration-300"
          >
            Voir toutes nos réalisations
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
