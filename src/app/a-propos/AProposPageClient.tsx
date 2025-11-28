"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import {
  Award,
  Heart,
  Clock,
  Sparkles,
  Shield,
  Users,
  Building2,
  Star,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

const values = [
  {
    icon: Award,
    title: "Qualite",
    description:
      "Nous utilisons exclusivement des peintures professionnelles de haute qualite pour un resultat impeccable et durable.",
  },
  {
    icon: Heart,
    title: "Respect",
    description:
      "Respect de votre domicile, de vos affaires et de votre temps. Nous travaillons avec soin et discretion.",
  },
  {
    icon: Sparkles,
    title: "Proprete",
    description:
      "Un chantier propre est notre signature. Protection complete et nettoyage systematique en fin de travaux.",
  },
  {
    icon: Clock,
    title: "Delais",
    description:
      "Nous nous engageons sur des delais precis et les respectons. Votre planning est notre priorite.",
  },
];

const stats = [
  { value: COMPANY_INFO.yearsExperience, label: "Annees d'experience", suffix: "+" },
  { value: COMPANY_INFO.projectsCompleted, label: "Chantiers realises", suffix: "+" },
  { value: 98, label: "Clients satisfaits", suffix: "%" },
  { value: COMPANY_INFO.googleRating, label: "Note Google", suffix: "/5" },
];

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AProposPageClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
                Votre artisan peintre de confiance depuis{" "}
                {COMPANY_INFO.yearsExperience} ans
              </h1>
              <p className="font-body text-xl text-white/90 leading-relaxed">
                RHONEA Peinture, c&apos;est avant tout une passion pour le metier et
                un engagement total envers la satisfaction de nos clients.
                Decouvrez notre histoire et nos valeurs.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800')",
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-4 rounded-xl shadow-xl">
                <p className="font-heading font-bold text-3xl">
                  {COMPANY_INFO.yearsExperience}+
                </p>
                <p className="font-body text-sm">ans d&apos;experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-3xl text-neutral-900 mb-6">
                Notre histoire
              </h2>
              <div className="space-y-4 font-body text-neutral-600 leading-relaxed">
                <p>
                  Fondee il y a plus de {COMPANY_INFO.yearsExperience} ans,
                  RHONEA Peinture est nee de la passion d&apos;un artisan pour son
                  metier. Ce qui a commence comme une petite entreprise
                  individuelle est devenu une reference dans la region lyonnaise.
                </p>
                <p>
                  Notre fondateur, apres une formation solide aupres des
                  Compagnons du Devoir et plusieurs annees d&apos;experience dans les
                  plus grandes entreprises de peinture de la region, a decide de
                  creer RHONEA Peinture avec une vision claire : proposer un
                  service de qualite superieure tout en restant accessible.
                </p>
                <p>
                  Aujourd&apos;hui, avec plus de {COMPANY_INFO.projectsCompleted}{" "}
                  chantiers realises, nous continuons de porter les valeurs qui
                  ont fait notre reputation : l&apos;excellence du travail, le respect
                  du client et la transparence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-heading font-bold text-4xl md:text-5xl text-white mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="font-body text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading font-bold text-3xl text-neutral-900 mb-4"
            >
              Nos valeurs
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-body text-neutral-600 max-w-2xl mx-auto"
            >
              Ces valeurs guident chacune de nos interventions et font la
              difference sur le terrain.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 text-center shadow-sm"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="font-body text-sm text-neutral-600">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-heading font-bold text-3xl text-neutral-900 mb-4"
              >
                Nos certifications et garanties
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-accent/5 border border-accent/20 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-2">
                      Assurance Decennale
                    </h3>
                    <p className="font-body text-sm text-neutral-600 mb-2">
                      Tous nos travaux sont couverts par une assurance decennale
                      {COMPANY_INFO.insurance.company}.
                    </p>
                    <p className="font-body text-xs text-neutral-500">
                      Contrat n° {COMPANY_INFO.insurance.contract}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-primary/5 border border-primary/20 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-2">
                      Entreprise Enregistree
                    </h3>
                    <p className="font-body text-sm text-neutral-600 mb-2">
                      Entreprise officiellement enregistree au registre du
                      commerce et des societes.
                    </p>
                    <p className="font-body text-xs text-neutral-500">
                      SIRET : {COMPANY_INFO.siret}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-yellow-50 border border-yellow-200 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-2">
                      Note Google 4.9/5
                    </h3>
                    <p className="font-body text-sm text-neutral-600">
                      Plus de {COMPANY_INFO.projectsCompleted} avis clients
                      verifies sur Google. La satisfaction de nos clients est
                      notre meilleure publicite.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-secondary/5 border border-secondary/20 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-2">
                      Equipe Qualifiee
                    </h3>
                    <p className="font-body text-sm text-neutral-600">
                      Tous nos peintres sont formes et experimentes. Nous
                      investissons regulierement dans la formation continue.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">
            Convaincu par notre approche ?
          </h2>
          <p className="font-body text-white/90 mb-8 max-w-2xl mx-auto">
            Discutons de votre projet et decouvrez comment nous pouvons vous
            accompagner.
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
