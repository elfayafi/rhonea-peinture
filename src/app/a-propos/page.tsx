import { Metadata } from "next";
import AProposPageClient from "./AProposPageClient";

export const metadata: Metadata = {
  title: "A Propos - Notre Histoire",
  description:
    "Decouvrez RHONEA Peinture, votre artisan peintre de confiance a Lyon depuis 12 ans. Notre histoire, nos valeurs et notre equipe.",
  openGraph: {
    title: "A Propos de RHONEA Peinture | Artisan Peintre Lyon",
    description:
      "12 ans d'experience, plus de 480 chantiers realises. Decouvrez notre histoire et nos valeurs.",
  },
};

export default function AProposPage() {
  return <AProposPageClient />;
}
