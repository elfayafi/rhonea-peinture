"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, MapPin, Clock, Ruler, ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";

const filters = [
  { id: "all", label: "Tous" },
  { id: "Interieur", label: "Intérieur" },
  { id: "Exterieur", label: "Extérieur" },
  { id: "Facade", label: "Façade" },
  { id: "Professionnel", label: "Professionnel" },
];

const projectImages = [
  "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=800",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800",
  "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800",
  "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=800",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800",
  "https://images.unsplash.com/photo-1560185127-6a8c91d4c6e0?q=80&w=800",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
  "https://images.unsplash.com/photo-1541123603104-512919d6a96c?q=80&w=800",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800",
];

interface Project {
  id: number;
  title: string;
  type: string;
  city: string;
  surface: string;
  duration: string;
  description: string;
  imageBefore: string;
  imageAfter: string;
}

export default function RealisationsPageClient() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isShowingAfter, setIsShowingAfter] = useState(false);

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.type === activeFilter);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsShowingAfter(false);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsShowingAfter(false);
  };

  const navigateProject = (direction: "prev" | "next") => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(
      (p) => p.id === selectedProject.id
    );
    let newIndex;
    if (direction === "prev") {
      newIndex =
        currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1;
    } else {
      newIndex =
        currentIndex === filteredProjects.length - 1 ? 0 : currentIndex + 1;
    }
    setSelectedProject(filteredProjects[newIndex]);
    setIsShowingAfter(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-heading font-bold text-4xl md:text-5xl text-white mb-6"
            >
              Nos réalisations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-body text-xl text-white/90 leading-relaxed"
            >
              Découvrez nos projets avant/après et laissez-vous inspirer pour
              votre propre rénovation. Plus de 480 chantiers réalisés à Lyon et
              dans le Rhône.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-neutral-200 sticky top-20 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-body font-medium text-sm transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-primary text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => handleProjectClick(project)}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${
                          projectImages[index % projectImages.length]
                        })`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Type Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-neutral-900 px-3 py-1 rounded-full text-xs font-body font-semibold">
                        {project.type}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-white font-body text-sm">
                        Cliquez pour voir le avant/après
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-neutral-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {project.city}
                      </span>
                      <span className="flex items-center gap-1">
                        <Ruler className="w-4 h-4" />
                        {project.surface}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="font-body text-neutral-500">
                Aucun projet trouvé pour ce filtre.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-neutral-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateProject("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-neutral-100 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => navigateProject("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-neutral-100 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image with Before/After Toggle */}
              <div className="relative aspect-video">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                  style={{
                    backgroundImage: `url(${
                      projectImages[
                        (selectedProject.id - 1) % projectImages.length
                      ]
                    })`,
                    filter: isShowingAfter ? "none" : "grayscale(50%) brightness(0.9)",
                  }}
                />

                {/* Before/After Toggle */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full p-1 shadow-lg flex">
                  <button
                    onClick={() => setIsShowingAfter(false)}
                    className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-colors ${
                      !isShowingAfter
                        ? "bg-primary text-white"
                        : "text-neutral-700 hover:bg-neutral-100"
                    }`}
                  >
                    Avant
                  </button>
                  <button
                    onClick={() => setIsShowingAfter(true)}
                    className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-colors ${
                      isShowingAfter
                        ? "bg-accent text-white"
                        : "text-neutral-700 hover:bg-neutral-100"
                    }`}
                  >
                    Après
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-body font-semibold">
                      {selectedProject.type}
                    </span>
                    <h2 className="font-heading font-bold text-2xl md:text-3xl text-neutral-900 mt-3">
                      {selectedProject.title}
                    </h2>
                  </div>
                </div>

                {/* Details */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-neutral-100 rounded-lg p-4 text-center">
                    <MapPin className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="font-body text-sm text-neutral-500">Lieu</p>
                    <p className="font-heading font-semibold text-neutral-900">
                      {selectedProject.city}
                    </p>
                  </div>
                  <div className="bg-neutral-100 rounded-lg p-4 text-center">
                    <Ruler className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="font-body text-sm text-neutral-500">Surface</p>
                    <p className="font-heading font-semibold text-neutral-900">
                      {selectedProject.surface}
                    </p>
                  </div>
                  <div className="bg-neutral-100 rounded-lg p-4 text-center">
                    <Clock className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="font-body text-sm text-neutral-500">Durée</p>
                    <p className="font-heading font-semibold text-neutral-900">
                      {selectedProject.duration}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="font-body text-neutral-600 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* CTA */}
                <Link
                  href="/devis"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-secondary hover:bg-secondary-dark text-white font-body font-semibold px-8 py-4 rounded-lg transition-all duration-300"
                >
                  Un projet similaire ? Demandez un devis
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl text-neutral-900 mb-4">
            Vous avez un projet de peinture ?
          </h2>
          <p className="font-body text-neutral-600 mb-8 max-w-2xl mx-auto">
            Inspirez-vous de nos réalisations et confiez-nous votre projet. Devis
            gratuit sous 24h.
          </p>
          <Link
            href="/devis"
            className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-body font-semibold px-8 py-4 rounded-lg transition-all duration-300"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </>
  );
}
