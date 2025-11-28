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
  Check,
  ArrowRight,
  Phone,
  ChevronDown,
  LucideIcon,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { useState } from "react";

const iconMap: Record<string, LucideIcon> = {
  PaintBucket,
  Home,
  Building2,
  Wallpaper,
  Sparkles,
  Palette,
};

const services = [
  {
    id: "peinture-interieure",
    icon: "PaintBucket",
    title: "Peinture intérieure",
    description:
      "La peinture intérieure est notre cœur de métier. Nous transformons vos espaces de vie en appliquant des peintures de haute qualité, adaptées à chaque pièce et à vos envies. Que ce soit pour un simple rafraîchissement ou une rénovation complète, notre équipe maîtrise toutes les techniques pour un rendu impeccable.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800",
    features: [
      "Peinture des murs et plafonds",
      "Laquage de boiseries et portes",
      "Peinture de radiateurs",
      "Application de peintures techniques (anti-humidité, isolante)",
      "Finitions mates, satinées ou brillantes",
      "Préparation des supports (rebouchage, enduit, ponçage)",
    ],
    benefits: [
      "Devis détaillé gratuit",
      "Protection complète du mobilier",
      "Nettoyage de fin de chantier",
      "Garantie satisfaction",
    ],
  },
  {
    id: "peinture-exterieure",
    icon: "Home",
    title: "Peinture extérieure",
    description:
      "Protégez et embellissez l'extérieur de votre habitation avec nos services de peinture extérieure. Nous utilisons des peintures spécifiques résistantes aux intempéries et aux UV pour une durabilité maximale. Façades, volets, portails, clôtures : nous prenons en charge tous vos travaux de peinture extérieure.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800",
    features: [
      "Peinture de façades",
      "Peinture de volets bois et PVC",
      "Peinture de portails métalliques",
      "Peinture de clôtures",
      "Traitement anti-mousse",
      "Application de lasure et vernis",
    ],
    benefits: [
      "Peintures haute résistance",
      "Garantie 10 ans",
      "Travail en toute sécurité (échafaudage)",
      "Respect de l'environnement",
    ],
  },
  {
    id: "ravalement-facade",
    icon: "Building2",
    title: "Ravalement de façade",
    description:
      "Le ravalement de façade est une obligation légale tous les 10 ans dans de nombreuses communes. Au-delà de l'aspect réglementaire, c'est l'occasion de valoriser votre patrimoine et d'améliorer l'isolation thermique de votre bâtiment. Notre équipe réalise un diagnostic complet avant d'intervenir.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
    features: [
      "Diagnostic complet de l'état de la façade",
      "Nettoyage haute pression",
      "Traitement des fissures et infiltrations",
      "Application d'enduits de rénovation",
      "Peinture de finition",
      "Imperméabilisation",
    ],
    benefits: [
      "Conformité réglementaire",
      "Amélioration de l'isolation",
      "Valorisation du bien immobilier",
      "Accompagnement pour les aides financières",
    ],
  },
  {
    id: "revetements-muraux",
    icon: "Wallpaper",
    title: "Revêtements muraux",
    description:
      "Envie de changer de décor ? Nos poseurs spécialisés mettent en œuvre tous types de revêtements muraux pour personnaliser vos intérieurs. Du papier peint classique aux toiles de verre en passant par les textures plus élaborées, nous vous conseillons et réalisons la pose avec précision.",
    image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=800",
    features: [
      "Pose de papier peint (intissé, vinyle, traditionnel)",
      "Application de toile de verre",
      "Pose de revêtements vinyles muraux",
      "Crépi d'intérieur décoratif",
      "Enduits décoratifs",
      "Dépose d'anciens revêtements",
    ],
    benefits: [
      "Large choix de motifs et textures",
      "Conseils personnalisés",
      "Pose soignée et durable",
      "Finitions parfaites",
    ],
  },
  {
    id: "finitions-decoratives",
    icon: "Sparkles",
    title: "Finitions décoratives",
    description:
      "Pour les clients qui souhaitent un rendu unique et personnalisé, nous proposons toute une gamme de finitions décoratives. Effets béton ciré, patines, stucco, tadelakt : notre savoir-faire artisanal sublimera vos murs avec des techniques d'exception.",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=800",
    features: [
      "Effet béton ciré",
      "Patines et glacis",
      "Stucco vénitien",
      "Tadelakt",
      "Effet métallisé",
      "Chaux et enduits naturels",
    ],
    benefits: [
      "Finitions uniques et personnalisées",
      "Savoir-faire artisanal",
      "Matériaux nobles et durables",
      "Valorisation de votre intérieur",
    ],
  },
  {
    id: "conseil-couleurs",
    icon: "Palette",
    title: "Conseil couleurs",
    description:
      "Choisir les bonnes couleurs n'est pas toujours simple. Notre service de conseil couleurs vous accompagne pour créer une harmonie parfaite dans votre intérieur. Nous prenons en compte la luminosité, les volumes, votre mobilier et vos goûts pour vous proposer une palette sur mesure.",
    image: "https://images.unsplash.com/photo-1541123603104-512919d6a96c?q=80&w=800",
    features: [
      "Étude de la luminosité naturelle",
      "Analyse des volumes",
      "Prise en compte du mobilier existant",
      "Proposition de palettes harmonieuses",
      "Tests de couleurs sur place",
      "Nuanciers et échantillons",
    ],
    benefits: [
      "Accompagnement personnalisé",
      "Évitez les erreurs coûteuses",
      "Résultat garanti",
      "Service inclus avec nos travaux",
    ],
  },
];

const faqs = [
  {
    question: "Combien de temps durent vos travaux de peinture ?",
    answer:
      "La durée dépend de la surface et du type de travaux. En moyenne, comptez 1 à 2 jours par pièce pour une peinture intérieure, et 1 à 3 semaines pour un ravalement de façade. Nous établissons un planning précis lors du devis.",
  },
  {
    question: "Quelles marques de peinture utilisez-vous ?",
    answer:
      "Nous travaillons exclusivement avec des peintures professionnelles de grandes marques françaises et européennes : Tollens, Sikkens, Zolpan, Little Greene. Nous sélectionnons les produits les plus adaptés à chaque chantier.",
  },
  {
    question: "Faut-il vider les pièces avant vos interventions ?",
    answer:
      "Pas nécessairement. Nous assurons la protection complète de votre mobilier avec des bâches et films plastiques. Nous vous conseillons simplement de déplacer les objets fragiles et de valeur.",
  },
  {
    question: "Proposez-vous des peintures écologiques ?",
    answer:
      "Oui, nous disposons d'une gamme complète de peintures écologiques et naturelles : peintures à faible COV, peintures biosourcées, chaux, etc. N'hésitez pas à nous en faire part lors du devis.",
  },
  {
    question: "Intervenez-vous le week-end ?",
    answer:
      "Nous pouvons nous adapter à vos contraintes. Des interventions le samedi sont possibles sur demande, avec un supplément pour couvrir les frais supplémentaires.",
  },
];

export default function ServicesPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
              Nos services de peinture
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-body text-xl text-white/90 leading-relaxed"
            >
              Découvrez l'ensemble de nos prestations de peinture et de
              décoration. De la préparation des supports aux finitions les plus
              élaborées, nous mettons notre savoir-faire à votre service.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || PaintBucket;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="py-16 border-b border-neutral-200 last:border-0 scroll-mt-24"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`${isEven ? "" : "lg:order-2"}`}
                  >
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${service.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 to-transparent" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`${isEven ? "" : "lg:order-1"}`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h2 className="font-heading font-bold text-2xl md:text-3xl text-neutral-900">
                        {service.title}
                      </h2>
                    </div>

                    <p className="font-body text-neutral-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-3">
                        Nos prestations :
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-neutral-600"
                          >
                            <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="bg-neutral-100 rounded-xl p-4 mb-6">
                      <h3 className="font-heading font-semibold text-sm text-neutral-900 mb-2">
                        Nos garanties :
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.benefits.map((benefit, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full text-xs font-body text-neutral-700"
                          >
                            <Check className="w-3 h-3 text-accent" />
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href="/devis"
                      className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-body font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                    >
                      Demander un devis
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading font-bold text-3xl text-neutral-900 mb-4">
                Questions fréquentes
              </h2>
              <p className="font-body text-neutral-600">
                Trouvez les réponses aux questions les plus courantes sur nos
                services.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-heading font-semibold text-neutral-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-neutral-500 transition-transform duration-300 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <p className="px-6 pb-6 font-body text-neutral-600">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">
            Un projet de peinture ?
          </h2>
          <p className="font-body text-white/90 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour obtenir un devis gratuit et personnalisé. Notre
            équipe vous répond sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devis"
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-body font-semibold px-8 py-4 rounded-lg transition-all duration-300"
            >
              Demander un devis gratuit
            </Link>
            <a
              href={`tel:${COMPANY_INFO.phoneFormatted}`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-body font-semibold px-8 py-4 rounded-lg transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
