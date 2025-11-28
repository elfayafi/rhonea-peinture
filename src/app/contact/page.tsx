import { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contactez-nous",
  description:
    "Contactez RHONEA Peinture pour vos projets de peinture a Lyon. Telephone, email, formulaire de contact. Reponse garantie sous 24h.",
  openGraph: {
    title: "Contact | RHONEA Peinture Lyon",
    description:
      "Besoin d'un peintre a Lyon ? Contactez-nous par telephone, email ou formulaire.",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
