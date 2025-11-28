import { Metadata } from "next";
import SimulateurPageClient from "./SimulateurPageClient";

export const metadata: Metadata = {
  title: "Simulateur de Prix Peinture",
  description:
    "Estimez le cout de votre projet de peinture en 2 minutes. Simulateur gratuit pour peinture interieure, exterieure et ravalement de facade a Lyon.",
  openGraph: {
    title: "Simulateur de Prix Peinture | RHONEA Peinture Lyon",
    description:
      "Estimez gratuitement le prix de votre projet de peinture a Lyon en 2 minutes.",
  },
};

export default function SimulateurPage() {
  return <SimulateurPageClient />;
}
