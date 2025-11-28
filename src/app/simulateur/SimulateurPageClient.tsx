"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import {
  Home,
  Building2,
  Paintbrush,
  HelpCircle,
  ChevronRight,
  ChevronLeft,
  Check,
  Calculator,
  Phone,
  Mail,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

const projectTypes = [
  { id: "interieur", label: "Peinture interieure", icon: Home },
  { id: "exterieur", label: "Peinture exterieure", icon: Building2 },
  { id: "ravalement", label: "Ravalement facade", icon: Paintbrush },
  { id: "autre", label: "Autre projet", icon: HelpCircle },
];

const roomTypes = [
  { id: "chambre", label: "Chambre" },
  { id: "salon", label: "Salon/Sejour" },
  { id: "cuisine", label: "Cuisine" },
  { id: "sdb", label: "Salle de bain" },
  { id: "wc", label: "WC" },
  { id: "entree", label: "Entree/Couloir" },
  { id: "bureau", label: "Bureau" },
];

const exteriorTypes = [
  { id: "facade", label: "Facade" },
  { id: "volets", label: "Volets" },
  { id: "portail", label: "Portail" },
  { id: "cloture", label: "Cloture" },
  { id: "terrasse", label: "Terrasse" },
];

const conditions = [
  { id: "bon", label: "Bon etat", description: "Simple rafraichissement" },
  { id: "moyen", label: "Etat moyen", description: "Preparation necessaire" },
  { id: "mauvais", label: "Mauvais etat", description: "Gros travaux de preparation" },
];

const finitions = [
  { id: "standard", label: "Standard", priceMultiplier: 1 },
  { id: "premium", label: "Premium", priceMultiplier: 1.3 },
  { id: "luxe", label: "Haut de gamme", priceMultiplier: 1.6 },
];

const contactSchema = z.object({
  prenom: z.string().min(2, "Prenom requis"),
  email: z.string().email("Email invalide"),
  telephone: z.string().optional(),
  codePostal: z.string().regex(/^69\d{3}$/, "Code postal du Rhone requis (69XXX)"),
  rgpd: z.boolean().refine((val) => val === true, "Vous devez accepter"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function SimulateurPageClient() {
  const [currentStep, setCurrentStep] = useState(1);
  const [projectType, setProjectType] = useState<string | null>(null);
  const [roomCount, setRoomCount] = useState(1);
  const [selectedRooms, setSelectedRooms] = useState<string[]>([]);
  const [selectedExterior, setSelectedExterior] = useState<string[]>([]);
  const [surface, setSurface] = useState(50);
  const [condition, setCondition] = useState<string | null>(null);
  const [finition, setFinition] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const totalSteps = 6;

  const calculatePrice = () => {
    let basePrice = 0;
    const conditionMultiplier =
      condition === "bon" ? 1 : condition === "moyen" ? 1.3 : 1.5;
    const finitionMultiplier =
      finitions.find((f) => f.id === finition)?.priceMultiplier || 1;

    if (projectType === "interieur") {
      basePrice = surface * 25;
    } else if (projectType === "exterieur") {
      basePrice = surface * 35;
    } else if (projectType === "ravalement") {
      basePrice = surface * 45;
    } else {
      basePrice = surface * 30;
    }

    const totalPrice = basePrice * conditionMultiplier * finitionMultiplier;
    const minPrice = Math.round(totalPrice * 0.85);
    const maxPrice = Math.round(totalPrice * 1.15);

    return { minPrice, maxPrice };
  };

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    setIsSubmitting(false);
    setShowResult(true);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return projectType !== null;
      case 2:
        if (projectType === "interieur") {
          return roomCount > 0 && selectedRooms.length > 0;
        }
        if (projectType === "exterieur") {
          return selectedExterior.length > 0;
        }
        return true;
      case 3:
        return surface >= 10;
      case 4:
        return condition !== null;
      case 5:
        return finition !== null;
      default:
        return true;
    }
  };

  const toggleRoom = (roomId: string) => {
    setSelectedRooms((prev) =>
      prev.includes(roomId)
        ? prev.filter((r) => r !== roomId)
        : [...prev, roomId]
    );
  };

  const toggleExterior = (extId: string) => {
    setSelectedExterior((prev) =>
      prev.includes(extId)
        ? prev.filter((e) => e !== extId)
        : [...prev, extId]
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6"
            >
              <Calculator className="w-5 h-5 text-white" />
              <span className="font-body text-white text-sm">
                Estimation gratuite en 2 minutes
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading font-bold text-4xl md:text-5xl text-white mb-4"
            >
              Estimez votre projet de peinture
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-body text-xl text-white/90"
            >
              Repondez a quelques questions et obtenez une estimation de prix
              instantanee.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Simulator */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Progress Bar */}
            {!showResult && (
              <div className="mb-8">
                <div className="flex justify-between text-sm font-body text-neutral-500 mb-2">
                  <span>
                    Etape {currentStep} sur {totalSteps}
                  </span>
                  <span>
                    {Math.round((currentStep / totalSteps) * 100)}% complete
                  </span>
                </div>
                <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{
                      width: `${(currentStep / totalSteps) * 100}%`,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            )}

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <AnimatePresence mode="wait">
                {!showResult ? (
                  <motion.div
                    key={`step-${currentStep}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 md:p-8"
                  >
                    {/* Step 1: Project Type */}
                    {currentStep === 1 && (
                      <div>
                        <h2 className="font-heading font-bold text-2xl text-neutral-900 mb-2">
                          Quel type de projet ?
                        </h2>
                        <p className="font-body text-neutral-500 mb-6">
                          Selectionnez le type de travaux que vous souhaitez
                          realiser.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          {projectTypes.map((type) => {
                            const Icon = type.icon;
                            return (
                              <button
                                key={type.id}
                                onClick={() => setProjectType(type.id)}
                                className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                                  projectType === type.id
                                    ? "border-primary bg-primary/5"
                                    : "border-neutral-200 hover:border-neutral-300"
                                }`}
                              >
                                <Icon
                                  className={`w-8 h-8 mb-3 ${
                                    projectType === type.id
                                      ? "text-primary"
                                      : "text-neutral-400"
                                  }`}
                                />
                                <span className="font-heading font-semibold text-neutral-900">
                                  {type.label}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Step 2: Details */}
                    {currentStep === 2 && (
                      <div>
                        <h2 className="font-heading font-bold text-2xl text-neutral-900 mb-2">
                          Details du projet
                        </h2>
                        {projectType === "interieur" ? (
                          <>
                            <p className="font-body text-neutral-500 mb-6">
                              Combien de pieces souhaitez-vous peindre ?
                            </p>
                            <div className="mb-6">
                              <label className="font-body text-sm text-neutral-700 mb-2 block">
                                Nombre de pieces
                              </label>
                              <div className="flex items-center gap-4">
                                <button
                                  onClick={() =>
                                    setRoomCount(Math.max(1, roomCount - 1))
                                  }
                                  className="w-12 h-12 rounded-lg border-2 border-neutral-200 flex items-center justify-center text-xl font-bold text-neutral-700 hover:border-primary"
                                >
                                  -
                                </button>
                                <span className="font-heading font-bold text-3xl text-neutral-900 w-12 text-center">
                                  {roomCount}
                                </span>
                                <button
                                  onClick={() => setRoomCount(roomCount + 1)}
                                  className="w-12 h-12 rounded-lg border-2 border-neutral-200 flex items-center justify-center text-xl font-bold text-neutral-700 hover:border-primary"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            <div>
                              <label className="font-body text-sm text-neutral-700 mb-2 block">
                                Types de pieces
                              </label>
                              <div className="flex flex-wrap gap-2">
                                {roomTypes.map((room) => (
                                  <button
                                    key={room.id}
                                    onClick={() => toggleRoom(room.id)}
                                    className={`px-4 py-2 rounded-full text-sm font-body transition-all ${
                                      selectedRooms.includes(room.id)
                                        ? "bg-primary text-white"
                                        : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                                    }`}
                                  >
                                    {room.label}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </>
                        ) : projectType === "exterieur" ? (
                          <>
                            <p className="font-body text-neutral-500 mb-6">
                              Quels elements souhaitez-vous peindre ?
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {exteriorTypes.map((ext) => (
                                <button
                                  key={ext.id}
                                  onClick={() => toggleExterior(ext.id)}
                                  className={`px-4 py-2 rounded-full text-sm font-body transition-all ${
                                    selectedExterior.includes(ext.id)
                                      ? "bg-primary text-white"
                                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                                  }`}
                                >
                                  {ext.label}
                                </button>
                              ))}
                            </div>
                          </>
                        ) : (
                          <p className="font-body text-neutral-500">
                            Decrivez votre projet lors de la prochaine etape.
                          </p>
                        )}
                      </div>
                    )}

                    {/* Step 3: Surface */}
                    {currentStep === 3 && (
                      <div>
                        <h2 className="font-heading font-bold text-2xl text-neutral-900 mb-2">
                          Quelle surface ?
                        </h2>
                        <p className="font-body text-neutral-500 mb-6">
                          Estimez la surface totale a peindre en metres carres.
                        </p>
                        <div className="text-center mb-6">
                          <span className="font-heading font-bold text-5xl text-primary">
                            {surface}
                          </span>
                          <span className="font-body text-2xl text-neutral-500 ml-2">
                            m2
                          </span>
                        </div>
                        <input
                          type="range"
                          min="10"
                          max="500"
                          value={surface}
                          onChange={(e) =>
                            setSurface(parseInt(e.target.value))
                          }
                          className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                        <div className="flex justify-between text-sm text-neutral-500 mt-2">
                          <span>10 m2</span>
                          <span>500 m2</span>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Condition */}
                    {currentStep === 4 && (
                      <div>
                        <h2 className="font-heading font-bold text-2xl text-neutral-900 mb-2">
                          Etat actuel des surfaces
                        </h2>
                        <p className="font-body text-neutral-500 mb-6">
                          Cela nous aide a estimer le temps de preparation
                          necessaire.
                        </p>
                        <div className="space-y-3">
                          {conditions.map((cond) => (
                            <button
                              key={cond.id}
                              onClick={() => setCondition(cond.id)}
                              className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                                condition === cond.id
                                  ? "border-primary bg-primary/5"
                                  : "border-neutral-200 hover:border-neutral-300"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <span className="font-heading font-semibold text-neutral-900 block">
                                    {cond.label}
                                  </span>
                                  <span className="font-body text-sm text-neutral-500">
                                    {cond.description}
                                  </span>
                                </div>
                                {condition === cond.id && (
                                  <Check className="w-6 h-6 text-primary" />
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 5: Finition */}
                    {currentStep === 5 && (
                      <div>
                        <h2 className="font-heading font-bold text-2xl text-neutral-900 mb-2">
                          Niveau de finition souhaite
                        </h2>
                        <p className="font-body text-neutral-500 mb-6">
                          Choisissez la qualite de finition souhaitee.
                        </p>
                        <div className="space-y-3">
                          {finitions.map((fin) => (
                            <button
                              key={fin.id}
                              onClick={() => setFinition(fin.id)}
                              className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                                finition === fin.id
                                  ? "border-primary bg-primary/5"
                                  : "border-neutral-200 hover:border-neutral-300"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-heading font-semibold text-neutral-900">
                                  {fin.label}
                                </span>
                                {finition === fin.id && (
                                  <Check className="w-6 h-6 text-primary" />
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 6: Contact */}
                    {currentStep === 6 && (
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="font-heading font-bold text-2xl text-neutral-900 mb-2">
                          Vos coordonnees
                        </h2>
                        <p className="font-body text-neutral-500 mb-6">
                          Pour recevoir votre estimation et etre recontacte.
                        </p>
                        <div className="space-y-4">
                          <div>
                            <label className="font-body text-sm text-neutral-700 mb-1 block">
                              Prenom *
                            </label>
                            <input
                              {...register("prenom")}
                              className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                              placeholder="Votre prenom"
                            />
                            {errors.prenom && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.prenom.message}
                              </p>
                            )}
                          </div>
                          <div>
                            <label className="font-body text-sm text-neutral-700 mb-1 block">
                              Email *
                            </label>
                            <input
                              {...register("email")}
                              type="email"
                              className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                              placeholder="votre@email.com"
                            />
                            {errors.email && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                              </p>
                            )}
                          </div>
                          <div>
                            <label className="font-body text-sm text-neutral-700 mb-1 block">
                              Telephone (optionnel)
                            </label>
                            <input
                              {...register("telephone")}
                              type="tel"
                              className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                              placeholder="06 XX XX XX XX"
                            />
                          </div>
                          <div>
                            <label className="font-body text-sm text-neutral-700 mb-1 block">
                              Code postal *
                            </label>
                            <input
                              {...register("codePostal")}
                              className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                              placeholder="69XXX"
                            />
                            {errors.codePostal && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.codePostal.message}
                              </p>
                            )}
                          </div>
                          <div className="flex items-start gap-3">
                            <input
                              {...register("rgpd")}
                              type="checkbox"
                              className="mt-1"
                            />
                            <label className="font-body text-sm text-neutral-600">
                              J&apos;accepte que mes donnees soient utilisees pour
                              me recontacter concernant mon projet. *
                            </label>
                          </div>
                          {errors.rgpd && (
                            <p className="text-red-500 text-sm">
                              {errors.rgpd.message}
                            </p>
                          )}
                        </div>
                      </form>
                    )}

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-neutral-100">
                      {currentStep > 1 ? (
                        <button
                          onClick={() => setCurrentStep(currentStep - 1)}
                          className="flex items-center gap-2 font-body font-medium text-neutral-600 hover:text-neutral-900"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          Retour
                        </button>
                      ) : (
                        <div />
                      )}
                      {currentStep < 6 ? (
                        <button
                          onClick={() => setCurrentStep(currentStep + 1)}
                          disabled={!canProceed()}
                          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-body font-semibold transition-all ${
                            canProceed()
                              ? "bg-primary text-white hover:bg-primary-dark"
                              : "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                          }`}
                        >
                          Suivant
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      ) : (
                        <button
                          onClick={handleSubmit(onSubmit)}
                          disabled={isSubmitting}
                          className="flex items-center gap-2 px-6 py-3 rounded-lg font-body font-semibold bg-secondary text-white hover:bg-secondary-dark disabled:opacity-50"
                        >
                          {isSubmitting ? "Envoi..." : "Voir mon estimation"}
                        </button>
                      )}
                    </div>
                  </motion.div>
                ) : (
                  /* Result */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 md:p-8 text-center"
                  >
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-10 h-10 text-accent" />
                    </div>
                    <h2 className="font-heading font-bold text-2xl text-neutral-900 mb-2">
                      Votre estimation
                    </h2>
                    <p className="font-body text-neutral-500 mb-8">
                      Basee sur les informations fournies
                    </p>

                    <div className="bg-primary/5 rounded-2xl p-6 mb-6">
                      <p className="font-body text-sm text-neutral-500 mb-2">
                        Fourchette de prix estimee
                      </p>
                      <p className="font-heading font-bold text-4xl text-primary">
                        {calculatePrice().minPrice.toLocaleString()} -{" "}
                        {calculatePrice().maxPrice.toLocaleString()} EUR
                      </p>
                      <p className="font-body text-xs text-neutral-400 mt-2">
                        TTC, pose incluse
                      </p>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 text-left">
                      <p className="font-body text-sm text-yellow-800">
                        <strong>Estimation indicative :</strong> Cette fourchette
                        est calculee sur la base des informations fournies. Seul
                        un devis realise sur place fait foi et vous engage.
                      </p>
                    </div>

                    <p className="font-body text-neutral-600 mb-6">
                      Pour un devis precis et personnalise, nous vous
                      recontactons sous 24h.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href={`tel:${COMPANY_INFO.phoneFormatted}`}
                        className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-body font-semibold px-6 py-3 rounded-lg transition-all"
                      >
                        <Phone className="w-5 h-5" />
                        Etre rappele
                      </a>
                      <Link
                        href="/realisations"
                        className="inline-flex items-center justify-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-body font-semibold px-6 py-3 rounded-lg transition-all"
                      >
                        Voir nos realisations
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Disclaimer */}
            <p className="text-center font-body text-sm text-neutral-500 mt-6">
              Estimation indicative, seul un devis sur place fait foi.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
