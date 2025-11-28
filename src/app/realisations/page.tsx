import { Metadata } from "next";
import RealisationsPageClient from "./RealisationsPageClient";

export const metadata: Metadata = {
  title: "Nos Realisations",
  description:
    "Decouvrez nos realisations de peinture a Lyon et dans le Rhone : avant/apres, peinture interieure, exterieure, ravalement de facade. Plus de 480 projets realises.",
  openGraph: {
    title: "Nos Realisations | RHONEA Peinture Lyon",
    description:
      "Galerie de nos projets de peinture : avant/apres, interieurs, exterieurs, facades. Artisan peintre professionnel Lyon.",
  },
};

export default function RealisationsPage() {
  return <RealisationsPageClient />;
}
