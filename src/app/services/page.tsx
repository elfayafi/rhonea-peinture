import { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Nos Services de Peinture",
  description:
    "Decouvrez tous nos services de peinture : peinture interieure, exterieure, ravalement de facade, revetements muraux, finitions decoratives et conseil couleurs a Lyon et dans le Rhone.",
  openGraph: {
    title: "Nos Services de Peinture | RHONEA Peinture Lyon",
    description:
      "Peinture interieure, exterieure, ravalement de facade et plus. Artisan peintre professionnel a Lyon.",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
