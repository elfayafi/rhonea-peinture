"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

const contactSchema = z.object({
  nom: z.string().min(2, "Nom requis"),
  email: z.string().email("Email invalide"),
  telephone: z.string().optional(),
  sujet: z.string().min(1, "Sujet requis"),
  message: z.string().min(10, "Message requis (min 10 caractères)"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactPageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Contact form:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
  };

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
              Contactez-nous
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-body text-xl text-white/90"
            >
              Une question ? Un projet ? N&apos;hésitez pas à nous contacter. Notre
              équipe vous répond sous 24h.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-2xl text-neutral-900 mb-6">
                Nos coordonnées
              </h2>

              <div className="space-y-6 mb-8">
                <a
                  href={`tel:${COMPANY_INFO.phoneFormatted}`}
                  className="flex items-start gap-4 p-4 bg-neutral-100 rounded-xl hover:bg-primary/5 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-neutral-900 mb-1">
                      Téléphone
                    </h3>
                    <p className="font-body text-primary font-semibold text-lg">
                      {COMPANY_INFO.phone}
                    </p>
                    <p className="font-body text-sm text-neutral-500">
                      Du lundi au vendredi, {COMPANY_INFO.hours.weekdays}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-4 p-4 bg-neutral-100 rounded-xl hover:bg-primary/5 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-neutral-900 mb-1">
                      Email
                    </h3>
                    <p className="font-body text-primary font-semibold">
                      {COMPANY_INFO.email}
                    </p>
                    <p className="font-body text-sm text-neutral-500">
                      Réponse sous 24h
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-neutral-100 rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-neutral-900 mb-1">
                      Adresse
                    </h3>
                    <p className="font-body text-neutral-700">
                      {COMPANY_INFO.address}
                    </p>
                    <p className="font-body text-neutral-700">
                      {COMPANY_INFO.postalCode} {COMPANY_INFO.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-neutral-100 rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-neutral-900 mb-1">
                      Horaires
                    </h3>
                    <p className="font-body text-neutral-700">
                      Lundi - Vendredi : {COMPANY_INFO.hours.weekdays}
                    </p>
                    <p className="font-body text-neutral-700">
                      Samedi : {COMPANY_INFO.hours.saturday}
                    </p>
                    <p className="font-body text-neutral-500">
                      Dimanche : {COMPANY_INFO.hours.sunday}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-heading font-semibold text-neutral-900 mb-4">
                  Suivez-nous
                </h3>
                <div className="flex gap-4">
                  <a
                    href={COMPANY_INFO.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-neutral-100 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={COMPANY_INFO.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-neutral-100 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={COMPANY_INFO.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-neutral-100 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <div className="aspect-[16/9] rounded-xl overflow-hidden bg-neutral-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89208.49349498564!2d4.791tried8!3d45.764043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea516ae88797%3A0x408ab2ae4bb21f0!2sLyon!5e0!3m2!1sfr!2sfr!4v1699999999999!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation RHONEA Peinture"
                  />
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-heading font-bold text-2xl text-neutral-900 mb-6">
                  Envoyez-nous un message
                </h2>

                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-neutral-900 mb-2">
                      Message envoyé !
                    </h3>
                    <p className="font-body text-neutral-600 mb-6">
                      Nous vous répondrons dans les plus brefs délais.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="font-body font-semibold text-primary hover:underline"
                    >
                      Envoyer un autre message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <label className="font-body text-sm text-neutral-700 mb-1 block">
                        Nom complet *
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
                        Téléphone (optionnel)
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
                        Sujet *
                      </label>
                      <select
                        {...register("sujet")}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      >
                        <option value="">Sélectionnez...</option>
                        <option value="devis">Demande de devis</option>
                        <option value="info">Demande d&apos;information</option>
                        <option value="rdv">Prise de rendez-vous</option>
                        <option value="reclamation">Réclamation</option>
                        <option value="autre">Autre</option>
                      </select>
                      {errors.sujet && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.sujet.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="font-body text-sm text-neutral-700 mb-1 block">
                        Message *
                      </label>
                      <textarea
                        {...register("message")}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                        placeholder="Votre message..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-secondary hover:bg-secondary-dark disabled:opacity-50 text-white font-body font-semibold px-6 py-4 rounded-lg transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Envoyer le message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
