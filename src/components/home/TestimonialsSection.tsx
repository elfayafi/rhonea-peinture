"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionTitle } from "@/components/ui";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  return (
    <section className="section-padding bg-neutral-100">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Ce que disent nos clients"
          subtitle="La satisfaction de nos clients est notre meilleure publicité. Découvrez leurs témoignages."
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-lg relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/10">
                <Quote className="w-16 h-16" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < TESTIMONIALS[currentIndex].rating
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-neutral-300"
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="font-body text-lg md:text-xl text-neutral-700 leading-relaxed mb-8">
                &ldquo;{TESTIMONIALS[currentIndex].text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                  <span className="font-heading font-bold text-lg text-white">
                    {TESTIMONIALS[currentIndex].initials}
                  </span>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-neutral-900">
                    {TESTIMONIALS[currentIndex].name}
                  </h4>
                  <p className="font-body text-sm text-neutral-500">
                    {TESTIMONIALS[currentIndex].city}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white hover:bg-primary hover:text-white rounded-full flex items-center justify-center shadow-md transition-colors duration-300"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary w-6" : "bg-neutral-300"
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white hover:bg-primary hover:text-white rounded-full flex items-center justify-center shadow-md transition-colors duration-300"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
