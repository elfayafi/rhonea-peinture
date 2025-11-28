"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, Clock, Shield, Star } from "lucide-react";
import { COMPANY_INFO, NAVIGATION_ITEMS, SERVICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-xl">R</span>
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-white">
                  RHONEA
                </span>
                <span className="font-heading font-medium text-xl text-primary-light">
                  {" "}Peinture
                </span>
              </div>
            </Link>
            <p className="text-neutral-400 font-body text-sm mb-6">
              {COMPANY_INFO.slogan}. Entreprise de peinture professionnelle intervenant
              a Lyon et dans tout le departement du Rhone depuis {COMPANY_INFO.yearsExperience} ans.
            </p>
            <div className="flex gap-4">
              <a
                href={COMPANY_INFO.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={COMPANY_INFO.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={COMPANY_INFO.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Navigation</h3>
            <nav className="flex flex-col gap-2">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-neutral-400 hover:text-white font-body text-sm transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/devis"
                className="text-secondary hover:text-secondary-light font-body text-sm font-semibold transition-colors"
              >
                Demander un devis
              </Link>
            </nav>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Nos services</h3>
            <nav className="flex flex-col gap-2">
              {SERVICES.map((service) => (
                <Link
                  key={service.id}
                  href={service.href}
                  className="text-neutral-400 hover:text-white font-body text-sm transition-colors"
                >
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-light flex-shrink-0 mt-0.5" />
                <div className="text-neutral-400 font-body text-sm">
                  <p>{COMPANY_INFO.address}</p>
                  <p>{COMPANY_INFO.postalCode} {COMPANY_INFO.city}</p>
                </div>
              </div>
              <a
                href={`tel:${COMPANY_INFO.phoneFormatted}`}
                className="flex items-center gap-3 text-neutral-400 hover:text-white font-body text-sm transition-colors"
              >
                <Phone className="w-5 h-5 text-primary-light flex-shrink-0" />
                {COMPANY_INFO.phone}
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3 text-neutral-400 hover:text-white font-body text-sm transition-colors"
              >
                <Mail className="w-5 h-5 text-primary-light flex-shrink-0" />
                {COMPANY_INFO.email}
              </a>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-light flex-shrink-0 mt-0.5" />
                <div className="text-neutral-400 font-body text-sm">
                  <p>Lun - Ven : {COMPANY_INFO.hours.weekdays}</p>
                  <p>Samedi : {COMPANY_INFO.hours.saturday}</p>
                  <p>Dimanche : {COMPANY_INFO.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="border-t border-neutral-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <Shield className="w-5 h-5 text-accent" />
              <span>Assurance decennale {COMPANY_INFO.insurance.company}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <Star className="w-5 h-5 text-yellow-500" />
              <span>{COMPANY_INFO.googleRating}/5 sur Google ({COMPANY_INFO.projectsCompleted}+ avis)</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <span>SIRET : {COMPANY_INFO.siret}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
            <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Tous droits reserves.</p>
            <div className="flex items-center gap-6">
              <Link href="/mentions-legales" className="hover:text-white transition-colors">
                Mentions legales
              </Link>
              <Link href="/politique-confidentialite" className="hover:text-white transition-colors">
                Politique de confidentialite
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
