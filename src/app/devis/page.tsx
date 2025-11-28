import { Metadata } from "next";
import DevisPageClient from "./DevisPageClient";

export const metadata: Metadata = {
  title: "Demande de Devis Gratuit",
  description:
    "Demandez votre devis gratuit pour vos travaux de peinture a Lyon et dans le Rhone. Reponse sous 24h, sans engagement.",
  openGraph: {
    title: "Devis Gratuit Peinture | RHONEA Peinture Lyon",
    description:
      "Obtenez un devis gratuit et personnalise pour vos travaux de peinture a Lyon. Reponse garantie sous 24h.",
  },
};

export default function DevisPage() {
  return <DevisPageClient />;
}
