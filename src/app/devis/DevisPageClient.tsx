"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  FileText,
  Clock,
  Shield,
  CheckCircle2,
  Upload,
  X,
  Loader2,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

const devisSchema = z.object({
  civilite: z.enum(["M", "Mme"]),
  nom: z.string().min(2, "Nom requis (min 2 caractères)"),
  prenom: z.string().min(2, "Prénom requis (min 2 caractères)"),
  email: z.string().email("Email invalide"),
  telephone: z.string().min(10, "Téléphone requis"),
  adresse: z.string().min(5, "Adresse requise"),
  codePostal: z.string().regex(/^69\d{3}$/, "Code postal du Rhône requis (69XXX)"),
  ville: z.string().min(2, "Ville requise"),
  typeProjet: z.string().min(1, "Sélectionnez un type de projet"),
  surface: z.string().min(1, "Surface requise"),
  description: z.string().min(20, "Description requise (min 20 caractères)"),
  delai: z.string().min(1, "Sélectionnez un délai"),
  source: z.string().optional(),
  rgpd: z.boolean().refine((val) => val === true, "Vous devez accepter"),
});

type DevisForm = z.infer<typeof devisSchema>;

const projectTypes = [
  "Peinture intérieure",
  "Peinture extérieure",
  "Ravalement de façade",
  "Revêtements muraux",
  "Finitions décoratives",
  "Autre",
];

const delais = [
  { value: "urgent", label: "Urgent (sous 15 jours)" },
  { value: "1mois", label: "Sous 1 mois" },
  { value: "3mois", label: "Sous 3 mois" },
  { value: "flexible", label: "Flexible" },
];

const sources = [
  "Recherche Google",
  "Recommandation",
  "Réseaux sociaux",
  "Pages Jaunes",
  "Déjà client",
  "Autre",
];

export default function DevisPageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DevisForm>({
    resolver: zodResolver(devisSchema),
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []);
    if (files.length + newFiles.length <= 5) {
      setFiles([...files, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: DevisForm) => {
    setIsSubmitting(true);

    // Prepare form data with files
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, String(value));
    });
    files.forEach((file) => {
      formData.append("photos", file);
    });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form data:", data);
    console.log("Files:", files);

    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setFiles([]);
  };

  if (isSuccess) {
    return (
      <section className="py-20 bg-neutral-100 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center"
          >
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-accent" />
            </div>
            <h1 className="font-heading font-bold text-3xl text-neutral-900 mb-4">
              Demande envoyée !
            </h1>
            <p className="font-body text-neutral-600 mb-8">
              Merci pour votre demande de devis. Notre équipe vous recontactera
              sous 24h pour discuter de votre projet.
            </p>
            <div className="bg-primary/5 rounded-lg p-4 mb-6">
              <p className="font-body text-sm text-primary">
                Un email de confirmation vous a été envoyé.
              </p>
            </div>
            <button
              onClick={() => setIsSuccess(false)}
              className="bg-primary hover:bg-primary-dark text-white font-body font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Envoyer une autre demande
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading font-bold text-4xl md:text-5xl text-white mb-6"
            >
              Demandez votre devis gratuit
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-body text-xl text-white/90 mb-8"
            >
              Remplissez le formulaire ci-dessous et recevez votre devis
              personnalisé sous 24h. C&apos;est gratuit et sans engagement.
            </motion.p>

            {/* Guarantees */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-2 text-white/90">
                <FileText className="w-5 h-5" />
                <span className="font-body text-sm">Devis détaillé</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="w-5 h-5" />
                <span className="font-body text-sm">Réponse sous 24h</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Shield className="w-5 h-5" />
                <span className="font-body text-sm">Sans engagement</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
            >
              {/* Personal Info */}
              <div className="mb-8">
                <h2 className="font-heading font-semibold text-xl text-neutral-900 mb-6 pb-2 border-b border-neutral-200">
                  Vos coordonnées
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Civilite */}
                  <div className="md:col-span-2">
                    <label className="font-body text-sm text-neutral-700 mb-2 block">
                      Civilité *
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          {...register("civilite")}
                          value="M"
                          className="accent-primary"
                        />
                        <span className="font-body text-neutral-700">
                          Monsieur
                        </span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          {...register("civilite")}
                          value="Mme"
                          className="accent-primary"
                        />
                        <span className="font-body text-neutral-700">
                          Madame
                        </span>
                      </label>
                    </div>
                    {errors.civilite && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.civilite.message}
                      </p>
                    )}
                  </div>

                  {/* Nom */}
                  <div>
                    <label className="font-body text-sm text-neutral-700 mb-1 block">
                      Nom *
                    </label>
                    <input
                      {...register("nom")}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Votre nom"
                    />
                    {errors.nom && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.nom.message}
                      </p>
                    )}
                  </div>

                  {/* Prenom */}
                  <div>
                    <label className="font-body text-sm text-neutral-700 mb-1 block">
                      Prénom *
                    </label>
                    <input
                      {...register("prenom")}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Votre prénom"
                    />
                    {errors.prenom && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.prenom.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
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

                  {/* Telephone */}
                  <div>
                    <label className="font-body text-sm text-neutral-700 mb-1 block">
                      Téléphone *
                    </label>
                    <input
                      {...register("telephone")}
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="06 XX XX XX XX"
                    />
                    {errors.telephone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.telephone.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="mb-8">
                <h2 className="font-heading font-semibold text-xl text-neutral-900 mb-6 pb-2 border-b border-neutral-200">
                  Adresse du chantier
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Adresse */}
                  <div className="md:col-span-2">
                    <label className="font-body text-sm text-neutral-700 mb-1 block">
                      Adresse *
                    </label>
                    <input
                      {...register("adresse")}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Numéro et nom de rue"
                    />
                    {errors.adresse && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.adresse.message}
                      </p>
                    )}
                  </div>

                  {/* Code Postal */}
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

                  {/* Ville */}
                  <div>
                    <label className="font-body text-sm text-neutral-700 mb-1 block">
                      Ville *
                    </label>
                    <input
                      {...register("ville")}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Ville"
                    />
                    {errors.ville && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.ville.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Project */}
              <div className="mb-8">
                <h2 className="font-heading font-semibold text-xl text-neutral-900 mb-6 pb-2 border-b border-neutral-200">
                  Votre projet
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Type de projet */}
                  <div>
                    <label className="font-body text-sm text-neutral-700 mb-1 block">
                      Type de projet *
                    </label>
                    <select
                      {...register("typeProjet")}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                    >
                      <option value="">Sélectionnez...</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.typeProjet && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.typeProjet.message}
                      </p>
                    )}
                  </div>

                  {/* Surface */}
                  <div>
                    <label className="font-body text-sm text-neutral-700 mb-1 block">
                      Surface estimée (m²) *
                    </label>
                    <input
                      {...register("surface")}
                      type="number"
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Ex: 50"
                    />
                    {errors.surface && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.surface.message}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <div className="md:col-span-2">
                    <label className="font-body text-sm text-neutral-700 mb-1 block">
                      Description du projet *
                    </label>
                    <textarea
                      {...register("description")}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Décrivez votre projet : nombre de pièces, état actuel des murs, couleurs souhaitées, contraintes particulières..."
                    />
                    {errors.description && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.description.message}
                      </p>
                    )}
                  </div>

                  {/* Photos */}
                  <div className="md:col-span-2">
                    <label className="font-body text-sm text-neutral-700 mb-1 block">
                      Photos (optionnel, max 5)
                    </label>
                    <div className="border-2 border-dashed border-neutral-200 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleFileChange}
                        className="hidden"
                        id="photos"
                        disabled={files.length >= 5}
                      />
                      <label
                        htmlFor="photos"
                        className="cursor-pointer flex flex-col items-center"
                      >
                        <Upload className="w-8 h-8 text-neutral-400 mb-2" />
                        <span className="font-body text-neutral-600">
                          Cliquez pour ajouter des photos
                        </span>
                        <span className="font-body text-sm text-neutral-400">
                          JPG, PNG (max 5MB par fichier)
                        </span>
                      </label>
                    </div>

                    {files.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {files.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 bg-neutral-100 px-3 py-2 rounded-lg"
                          >
                            <span className="font-body text-sm text-neutral-700 truncate max-w-[150px]">
                              {file.name}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="text-neutral-400 hover:text-red-500"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Delai */}
                  <div>
                    <label className="font-body text-sm text-neutral-700 mb-1 block">
                      Délai souhaité *
                    </label>
                    <select
                      {...register("delai")}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                    >
                      <option value="">Sélectionnez...</option>
                      {delais.map((delai) => (
                        <option key={delai.value} value={delai.value}>
                          {delai.label}
                        </option>
                      ))}
                    </select>
                    {errors.delai && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.delai.message}
                      </p>
                    )}
                  </div>

                  {/* Source */}
                  <div>
                    <label className="font-body text-sm text-neutral-700 mb-1 block">
                      Comment nous avez-vous connu ?
                    </label>
                    <select
                      {...register("source")}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                    >
                      <option value="">Sélectionnez...</option>
                      {sources.map((source) => (
                        <option key={source} value={source}>
                          {source}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* RGPD */}
              <div className="mb-8">
                <div className="flex items-start gap-3">
                  <input
                    {...register("rgpd")}
                    type="checkbox"
                    className="mt-1 accent-primary"
                  />
                  <label className="font-body text-sm text-neutral-600">
                    J&apos;accepte que mes données soient utilisées par RHONEA
                    Peinture pour me recontacter concernant ma demande de devis.
                    Consultez notre{" "}
                    <a
                      href="/politique-confidentialite"
                      className="text-primary hover:underline"
                    >
                      politique de confidentialité
                    </a>
                    . *
                  </label>
                </div>
                {errors.rgpd && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.rgpd.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary hover:bg-secondary-dark disabled:opacity-50 text-white font-body font-semibold px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  "Envoyer ma demande de devis"
                )}
              </button>

              <p className="text-center font-body text-sm text-neutral-500 mt-4">
                Devis gratuit et sans engagement - Réponse sous 24h
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
