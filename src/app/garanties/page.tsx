import { Metadata } from "next";
import { Shield, Clock, Sparkles, ThumbsUp, FileCheck, Users } from "lucide-react";
import Link from "next/link";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nos Garanties",
  description:
    "Decouvrez toutes les garanties RHONEA Peinture : assurance decennale, devis gratuit, satisfaction garantie, respect des delais.",
};

const guarantees = [
  {
    icon: FileCheck,
    title: "Devis gratuit et sans engagement",
    description:
      "Nous nous deplacons gratuitement pour evaluer votre projet et vous remettre un devis detaille. Aucune obligation de votre part, vous etes libre de comparer et de choisir en toute serenite.",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Assurance decennale",
    description:
      `Tous nos travaux sont couverts par une assurance decennale ${COMPANY_INFO.insurance.company}. Cette garantie vous protege pendant 10 ans contre les malfacons et defauts de conformite.`,
    color: "accent",
  },
  {
    icon: ThumbsUp,
    title: "Garantie satisfaction",
    description:
      "Votre satisfaction est notre priorite absolue. Si le resultat ne correspond pas a vos attentes, nous nous engageons a effectuer les retouches necessaires sans frais supplementaires.",
    color: "secondary",
  },
  {
    icon: Clock,
    title: "Respect des delais",
    description:
      "Nous nous engageons sur un planning precis des le depart. En cas de retard de notre fait (hors intemperies et cas de force majeure), nous vous dedommagerons.",
    color: "primary",
  },
  {
    icon: Sparkles,
    title: "Proprete du chantier",
    description:
      "Nous protegeons soigneusement vos sols et meubles. A la fin de chaque journee et en fin de chantier, nous nettoyons integralement les zones de travail.",
    color: "accent",
  },
  {
    icon: Users,
    title: "Conseils personnalises",
    description:
      "Notre expertise est a votre service. Nous vous conseillons sur le choix des couleurs, des finitions et des techniques les plus adaptees a votre projet.",
    color: "secondary",
  },
];

export default function GarantiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              Nos garanties
            </h1>
            <p className="font-body text-xl text-white/90">
              Des engagements concrets pour des travaux en toute serenite.
              Decouvrez ce qui fait la difference RHONEA Peinture.
            </p>
          </div>
        </div>
      </section>

      {/* Guarantees Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => {
              const Icon = guarantee.icon;
              const bgColor =
                guarantee.color === "primary"
                  ? "bg-primary/10"
                  : guarantee.color === "accent"
                  ? "bg-accent/10"
                  : "bg-secondary/10";
              const iconColor =
                guarantee.color === "primary"
                  ? "text-primary"
                  : guarantee.color === "accent"
                  ? "text-accent"
                  : "text-secondary";

              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-neutral-100"
                >
                  <div
                    className={`w-14 h-14 ${bgColor} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-7 h-7 ${iconColor}`} />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-neutral-900 mb-3">
                    {guarantee.title}
                  </h3>
                  <p className="font-body text-neutral-600 leading-relaxed">
                    {guarantee.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Insurance Logos */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-heading font-bold text-2xl text-neutral-900 mb-4">
              Nos partenaires assurances
            </h2>
            <p className="font-body text-neutral-600">
              Nous travaillons avec les meilleurs assureurs pour vous garantir
              une couverture optimale.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="bg-white px-8 py-4 rounded-xl shadow-sm">
              <p className="font-heading font-bold text-2xl text-primary">AXA</p>
              <p className="font-body text-sm text-neutral-500">Assurances</p>
            </div>
            <div className="bg-white px-6 py-4 rounded-xl shadow-sm">
              <p className="font-body text-sm text-neutral-500">
                Contrat decennale n°
              </p>
              <p className="font-heading font-semibold text-neutral-900">
                {COMPANY_INFO.insurance.contract}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">
            Travaillez en toute confiance
          </h2>
          <p className="font-body text-white/90 mb-8 max-w-2xl mx-auto">
            Nos garanties vous assurent des travaux de qualite realises dans les
            regles de l&apos;art. Demandez votre devis gratuit.
          </p>
          <Link
            href="/devis"
            className="inline-flex items-center justify-center bg-secondary hover:bg-secondary-dark text-white font-body font-semibold px-8 py-4 rounded-lg transition-all"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </>
  );
}
