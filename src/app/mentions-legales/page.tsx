import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mentions Legales",
  description: "Mentions legales du site RHONEA Peinture.",
};

export default function MentionsLegalesPage() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading font-bold text-4xl text-neutral-900 mb-8">
            Mentions legales
          </h1>

          <div className="prose prose-lg max-w-none font-body text-neutral-700">
            <h2 className="font-heading font-semibold text-2xl text-neutral-900 mt-8 mb-4">
              1. Editeur du site
            </h2>
            <p>
              Le site rhonea-peinture.fr est edite par :
            </p>
            <ul>
              <li><strong>Raison sociale :</strong> {COMPANY_INFO.name}</li>
              <li><strong>Forme juridique :</strong> Entreprise individuelle</li>
              <li><strong>Adresse :</strong> {COMPANY_INFO.address}, {COMPANY_INFO.postalCode} {COMPANY_INFO.city}</li>
              <li><strong>SIRET :</strong> {COMPANY_INFO.siret}</li>
              <li><strong>Telephone :</strong> {COMPANY_INFO.phone}</li>
              <li><strong>Email :</strong> {COMPANY_INFO.email}</li>
            </ul>

            <h2 className="font-heading font-semibold text-2xl text-neutral-900 mt-8 mb-4">
              2. Directeur de la publication
            </h2>
            <p>
              Le directeur de la publication est le representant legal de {COMPANY_INFO.name}.
            </p>

            <h2 className="font-heading font-semibold text-2xl text-neutral-900 mt-8 mb-4">
              3. Hebergement
            </h2>
            <p>
              Le site est heberge par :
            </p>
            <ul>
              <li><strong>Vercel Inc.</strong></li>
              <li>340 S Lemon Ave #4133</li>
              <li>Walnut, CA 91789, USA</li>
              <li>https://vercel.com</li>
            </ul>

            <h2 className="font-heading font-semibold text-2xl text-neutral-900 mt-8 mb-4">
              4. Propriete intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, videos, logos, icones, etc.)
              est la propriete exclusive de {COMPANY_INFO.name}, sauf mention contraire.
              Toute reproduction, representation, modification, publication, transmission,
              denaturation, totale ou partielle du site ou de son contenu, par quelque procede
              que ce soit, et sur quelque support que ce soit est interdite sans autorisation
              prealable ecrite de {COMPANY_INFO.name}.
            </p>

            <h2 className="font-heading font-semibold text-2xl text-neutral-900 mt-8 mb-4">
              5. Limitation de responsabilite
            </h2>
            <p>
              {COMPANY_INFO.name} s&apos;efforce d&apos;assurer au mieux de ses possibilites l&apos;exactitude
              et la mise a jour des informations diffusees sur ce site. Toutefois,
              {COMPANY_INFO.name} ne peut garantir l&apos;exactitude, la precision ou l&apos;exhaustivite
              des informations mises a disposition sur ce site.
            </p>

            <h2 className="font-heading font-semibold text-2xl text-neutral-900 mt-8 mb-4">
              6. Assurance professionnelle
            </h2>
            <p>
              {COMPANY_INFO.name} beneficie d&apos;une assurance responsabilite civile professionnelle
              et d&apos;une garantie decennale aupres de :
            </p>
            <ul>
              <li><strong>Compagnie :</strong> {COMPANY_INFO.insurance.company}</li>
              <li><strong>N° de contrat :</strong> {COMPANY_INFO.insurance.contract}</li>
            </ul>

            <h2 className="font-heading font-semibold text-2xl text-neutral-900 mt-8 mb-4">
              7. Liens hypertextes
            </h2>
            <p>
              Le site rhonea-peinture.fr peut contenir des liens hypertextes vers d&apos;autres
              sites internet. {COMPANY_INFO.name} n&apos;exerce aucun controle sur ces sites
              et decline toute responsabilite quant a leur contenu.
            </p>

            <h2 className="font-heading font-semibold text-2xl text-neutral-900 mt-8 mb-4">
              8. Droit applicable
            </h2>
            <p>
              Les presentes mentions legales sont regies par le droit francais. En cas de
              litige, les tribunaux francais seront seuls competents.
            </p>

            <p className="text-sm text-neutral-500 mt-12">
              Derniere mise a jour : Janvier 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
