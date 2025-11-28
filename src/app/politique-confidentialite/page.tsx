import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Politique de Confidentialite",
  description: "Politique de confidentialite et protection des donnees personnelles du site RHONEA Peinture.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading font-bold text-4xl text-neutral-900 mb-8">
            Politique de confidentialite
          </h1>

          <div className="prose prose-lg max-w-none font-body text-neutral-700">
            <p className="lead">
              {COMPANY_INFO.name} s&apos;engage a proteger la vie privee des utilisateurs de son site
              internet. Cette politique de confidentialite vous informe sur la maniere dont vos
              donnees personnelles sont collectees, utilisees et protegees.
            </p>

            <h2 className="font-heading font-semibold text-2xl text-neutral-900 mt-8 mb-4">
              1. Responsable du traitement
            </h2>
            <p>
              Le responsable du traitement des donnees personnelles est :
            </p>
            <ul>
              <li><strong>{COMPANY_INFO.name}</strong></li>
              <li>{COMPANY_INFO.address}</li>
              <li>{COMPANY_INFO.postalCode} {COMPANY_INFO.city}</li>
              <li>Email : {COMPANY_INFO.email}</li>
              <li>Telephone : {COMPANY_INFO.phone}</li>
            </ul>

            <h2 className="font-heading font-semibold text-2xl text-neutral-900 mt-8 mb-4">
              2. Donnees collectees
            </h2>
            <p>
              Nous collectons les donnees personnelles suivantes lorsque vous utilisez nos
              formulaires de contact ou de demande de devis :
            </p>
            <ul>
              <li>Nom et prenom</li>
              <li>Adresse email</li>
              <li>Numero de telephone</li>
              <li>Adresse postale (pour les devis)</li>
              <li>Description de votre projet</li>
            </ul>

            <h2 className="font-heading font-semibold text-2xl text-neutral-900 mt-8 mb-4">
              3. Finalites du traitement
            </h2>
            <p>
              Vos donnees personnelles sont collectees pour les finalites suivantes :
            </p>
            <ul>
              <li>Repondre a vos demandes de contact</li>
              <li>Etablir des devis personnalises</li>
              <li>Assurer le suivi de votre dossier client</li>
              <li>Vous informer de nos offres et actualites (avec votre consentement)</li>
            </ul>

            <h2 className="font-heading font-semibold text-2xl text-neutral-900 mt-8 mb-4">
              4. Base legale du traitement
            </h2>
            <p>
              Le traitement de vos donnees repose sur :
            </p>
            <ul>
              <li>Votre consentement (cases a cocher sur les formulaires)</li>
              <li>L&apos;execution d&apos;un contrat ou de mesures precontractuelles</li>
              <li>Les interets legitimes de {COMPANY_INFO.name}</li>
            </ul>

            <h2 className="font-heading font-semibold text-2xl text-neutral-900 mt-8 mb-4">
              5. Destinataires des donnees
            </h2>
            <p>
              Vos donnees personnelles sont destinees uniquement a {COMPANY_INFO.name} et ne
              sont jamais vendues ou cédées a des tiers a des fins commerciales.
            </p>
            <p>
              Elles peuvent etre transmises a nos sous-traitants techniques (hebergeur, service
              d&apos;emailing) dans le strict cadre de leurs missions.
            </p>

            <h2 className="font-heading font-semibold text-2xl text-neutral-900 mt-8 mb-4">
              6. Duree de conservation
            </h2>
            <p>
              Vos donnees personnelles sont conservees pendant :
            </p>
            <ul>
              <li>3 ans apres votre derniere demande de contact (prospects)</li>
              <li>10 ans apres la fin de la relation commerciale (clients, obligation legale)</li>
            </ul>

            <h2 className="font-heading font-semibold text-2xl text-neutral-900 mt-8 mb-4">
              7. Vos droits
            </h2>
            <p>
              Conformement au Reglement General sur la Protection des Donnees (RGPD), vous disposez
              des droits suivants :
            </p>
            <ul>
              <li><strong>Droit d&apos;acces :</strong> obtenir la confirmation que des donnees vous
                concernant sont traitees et en obtenir une copie</li>
              <li><strong>Droit de rectification :</strong> faire corriger des donnees inexactes</li>
              <li><strong>Droit a l&apos;effacement :</strong> demander la suppression de vos donnees</li>
              <li><strong>Droit a la limitation :</strong> limiter le traitement de vos donnees</li>
              <li><strong>Droit a la portabilite :</strong> recevoir vos donnees dans un format structure</li>
              <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos donnees</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous a : {COMPANY_INFO.email}
            </p>

            <h2 className="font-heading font-semibold text-2xl text-neutral-900 mt-8 mb-4">
              8. Cookies
            </h2>
            <p>
              Notre site utilise des cookies pour ameliorer votre experience de navigation.
              Lors de votre premiere visite, un bandeau vous informe de leur utilisation et vous
              permet de les accepter, refuser ou personnaliser.
            </p>
            <p>
              <strong>Types de cookies utilises :</strong>
            </p>
            <ul>
              <li><strong>Cookies necessaires :</strong> indispensables au fonctionnement du site</li>
              <li><strong>Cookies analytiques :</strong> pour comprendre comment vous utilisez le site</li>
              <li><strong>Cookies marketing :</strong> pour la publicite ciblee (avec votre consentement)</li>
            </ul>

            <h2 className="font-heading font-semibold text-2xl text-neutral-900 mt-8 mb-4">
              9. Securite
            </h2>
            <p>
              Nous mettons en oeuvre des mesures techniques et organisationnelles appropriees pour
              proteger vos donnees personnelles contre tout acces non autorise, modification,
              divulgation ou destruction.
            </p>

            <h2 className="font-heading font-semibold text-2xl text-neutral-900 mt-8 mb-4">
              10. Reclamation
            </h2>
            <p>
              Si vous estimez que le traitement de vos donnees personnelles constitue une violation
              de vos droits, vous pouvez introduire une reclamation aupres de la CNIL :
            </p>
            <ul>
              <li>Commission Nationale de l&apos;Informatique et des Libertes</li>
              <li>3 Place de Fontenoy - TSA 80715</li>
              <li>75334 PARIS CEDEX 07</li>
              <li>www.cnil.fr</li>
            </ul>

            <h2 className="font-heading font-semibold text-2xl text-neutral-900 mt-8 mb-4">
              11. Modification de la politique
            </h2>
            <p>
              Nous nous reservons le droit de modifier cette politique de confidentialite a tout
              moment. Les modifications prendront effet des leur publication sur le site.
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
