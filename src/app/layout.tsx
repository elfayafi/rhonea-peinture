import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer, FloatingElements, CookieBanner } from "@/components/layout";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rhonea-peinture.fr"),
  title: {
    default: "RHONEA Peinture | Peintre professionnel à Lyon et dans le Rhône",
    template: "%s | RHONEA Peinture",
  },
  description:
    "Entreprise de peinture professionnelle à Lyon et dans le Rhône. Peinture intérieure, extérieure, ravalement de façade. Devis gratuit sous 24h. 12 ans d'expérience.",
  keywords: [
    "peintre Lyon",
    "peinture Lyon",
    "peintre Rhone",
    "ravalement facade Lyon",
    "peinture interieure Lyon",
    "peinture exterieure Lyon",
    "artisan peintre Lyon",
    "entreprise peinture Lyon",
  ],
  authors: [{ name: "RHONEA Peinture" }],
  creator: "RHONEA Peinture",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://rhonea-peinture.fr",
    siteName: "RHONEA Peinture",
    title: "RHONEA Peinture | Peintre professionnel à Lyon et dans le Rhône",
    description:
      "Entreprise de peinture professionnelle à Lyon et dans le Rhône. Peinture intérieure, extérieure, ravalement de façade. Devis gratuit sous 24h.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RHONEA Peinture - Peintre professionnel Lyon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RHONEA Peinture | Peintre professionnel à Lyon",
    description:
      "Entreprise de peinture professionnelle à Lyon et dans le Rhône. Devis gratuit sous 24h.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "votre-code-verification-google",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${montserrat.variable} ${inter.variable} font-body antialiased bg-white text-neutral-900`}
      >
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <FloatingElements />
        <CookieBanner />
      </body>
    </html>
  );
}
