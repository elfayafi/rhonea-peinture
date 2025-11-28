import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Check, Phone, Star, ArrowRight } from "lucide-react";
import { CITIES, COMPANY_INFO, SERVICES, TESTIMONIALS, PROJECTS } from "@/lib/constants";

interface Props {
  params: { slug: string };
}

// Generate static params for all city pages
export async function generateStaticParams() {
  const cityPages = CITIES.map((city) => ({
    slug: city.slug,
  }));

  // Add the special ravalement page
  cityPages.push({ slug: "ravalement-facade-lyon" });

  return cityPages;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = CITIES.find((c) => c.slug === params.slug);

  if (params.slug === "ravalement-facade-lyon") {
    return {
      title: "Ravalement de Facade Lyon - Devis Gratuit",
      description:
        "Specialiste du ravalement de facade a Lyon et dans le Rhone. Diagnostic gratuit, traitement, finition. Devis sous 24h. Assurance decennale.",
    };
  }

  if (!city) return { title: "Page non trouvee" };

  return {
    title: `Peintre a ${city.name} - Devis Gratuit sous 24h`,
    description: `Peintre professionnel a ${city.name}. Peinture interieure, exterieure, ravalement de facade. ${COMPANY_INFO.yearsExperience} ans d'experience. Devis gratuit.`,
    openGraph: {
      title: `Peintre ${city.name} | RHONEA Peinture`,
      description: `Votre artisan peintre de confiance a ${city.name}. Devis gratuit sous 24h.`,
    },
  };
}

export default function LocalPage({ params }: Props) {
  const city = CITIES.find((c) => c.slug === params.slug);
  const isRavalementPage = params.slug === "ravalement-facade-lyon";

  if (!city && !isRavalementPage) {
    notFound();
  }

  const cityName = city?.name || "Lyon";
  const pageTitle = isRavalementPage
    ? "Ravalement de facade a Lyon"
    : `Peintre a ${cityName}`;
  const pageSubtitle = isRavalementPage
    ? "Specialistes du ravalement de facade dans la metropole lyonnaise"
    : `Votre artisan peintre de confiance a ${cityName} et ses environs`;

  // Get relevant projects (filter by city if possible, otherwise random 4)
  const relevantProjects = PROJECTS.slice(0, 4);
  const relevantTestimonial = TESTIMONIALS[0];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-white/80 mb-4">
              <MapPin className="w-5 h-5" />
              <span className="font-body">{cityName}, Rhone (69)</span>
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              {pageTitle}
            </h1>
            <p className="font-body text-xl text-white/90 mb-8">
              {pageSubtitle}. Devis gratuit sous 24h, {COMPANY_INFO.yearsExperience}{" "}
              ans d&apos;experience, plus de {COMPANY_INFO.projectsCompleted} chantiers
              realises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/devis"
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-body font-semibold px-8 py-4 rounded-lg transition-all"
              >
                Devis gratuit
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phoneFormatted}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-body font-semibold px-8 py-4 rounded-lg transition-all"
              >
                <Phone className="w-5 h-5" />
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction SEO */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="font-body text-lg text-neutral-700 leading-relaxed mb-6">
                {isRavalementPage ? (
                  <>
                    Vous recherchez un <strong>specialiste du ravalement de facade a Lyon</strong> ?
                    RHONEA Peinture intervient dans toute la metropole lyonnaise pour realiser vos
                    travaux de ravalement. Notre equipe de professionnels qualifies prend en charge
                    le diagnostic complet de votre facade, le traitement des fissures et
                    imperfections, ainsi que l&apos;application des enduits et peintures de finition.
                  </>
                ) : (
                  <>
                    Vous recherchez un <strong>peintre professionnel a {cityName}</strong> ?
                    RHONEA Peinture est votre artisan de confiance pour tous vos travaux de
                    peinture interieure, peinture exterieure et ravalement de facade a {cityName}
                    et dans tout le departement du Rhone.
                  </>
                )}
              </p>
              <p className="font-body text-neutral-600 leading-relaxed">
                Depuis {COMPANY_INFO.yearsExperience} ans, nous accompagnons les particuliers et
                professionnels de {cityName} dans leurs projets de renovation. Notre expertise,
                notre serieux et notre sens du service nous ont permis de batir une solide reputation
                dans la region, avec une note de {COMPANY_INFO.googleRating}/5 sur Google.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-neutral-900 mb-4">
              Nos services a {cityName}
            </h2>
            <p className="font-body text-neutral-600 max-w-2xl mx-auto">
              Decouvrez l&apos;ensemble de nos prestations disponibles a {cityName} et ses
              environs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-neutral-600 mb-4">
                  {service.shortDescription}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-primary font-body font-semibold text-sm"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-neutral-900 mb-4">
              Nos realisations a {cityName}
            </h2>
            <p className="font-body text-neutral-600">
              Quelques exemples de travaux realises dans votre secteur.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relevantProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="aspect-[4/3] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-${1560185007 + project.id * 1000}?q=80&w=400)`,
                  }}
                />
                <div className="p-4">
                  <span className="text-xs font-body text-primary font-semibold">
                    {project.type}
                  </span>
                  <h3 className="font-heading font-semibold text-neutral-900">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-neutral-500">
                    {project.surface}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 text-primary font-body font-semibold"
            >
              Voir toutes nos realisations
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <blockquote className="font-body text-xl text-white/90 italic mb-6">
              &ldquo;{relevantTestimonial.text}&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="font-heading font-bold text-white">
                  {relevantTestimonial.initials}
                </span>
              </div>
              <div className="text-left">
                <p className="font-heading font-semibold text-white">
                  {relevantTestimonial.name}
                </p>
                <p className="font-body text-sm text-white/70">
                  {relevantTestimonial.city}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Local */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-neutral-900 mb-8 text-center">
              Questions frequentes - {cityName}
            </h2>

            <div className="space-y-4">
              <div className="bg-neutral-100 rounded-xl p-6">
                <h3 className="font-heading font-semibold text-neutral-900 mb-2">
                  Intervenez-vous bien a {cityName} ?
                </h3>
                <p className="font-body text-neutral-600">
                  Oui, nous intervenons a {cityName} et dans toutes les communes du
                  Rhone dans un rayon de 30km autour de Lyon.
                </p>
              </div>

              <div className="bg-neutral-100 rounded-xl p-6">
                <h3 className="font-heading font-semibold text-neutral-900 mb-2">
                  Quel est le delai pour obtenir un devis ?
                </h3>
                <p className="font-body text-neutral-600">
                  Nous vous contactons sous 24h apres votre demande et pouvons nous
                  deplacer rapidement pour etablir un devis gratuit sur place.
                </p>
              </div>

              <div className="bg-neutral-100 rounded-xl p-6">
                <h3 className="font-heading font-semibold text-neutral-900 mb-2">
                  Quels sont vos tarifs a {cityName} ?
                </h3>
                <p className="font-body text-neutral-600">
                  Nos tarifs sont les memes sur toute notre zone d&apos;intervention.
                  Comptez en moyenne 25 a 45 EUR/m2 pour une peinture interieure selon
                  l&apos;etat des supports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA with Form */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="font-heading font-bold text-2xl text-neutral-900 mb-4">
                    Demandez votre devis gratuit a {cityName}
                  </h2>
                  <p className="font-body text-neutral-600 mb-6">
                    Remplissez le formulaire et recevez votre devis personnalise sous
                    24h. C&apos;est gratuit et sans engagement.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-accent" />
                      <span className="font-body text-neutral-700">
                        Devis detaille gratuit
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-accent" />
                      <span className="font-body text-neutral-700">
                        Reponse sous 24h
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-accent" />
                      <span className="font-body text-neutral-700">
                        Sans engagement
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <Link
                    href="/devis"
                    className="inline-flex items-center justify-center gap-2 w-full bg-secondary hover:bg-secondary-dark text-white font-body font-semibold px-8 py-4 rounded-lg transition-all text-lg"
                  >
                    Demander mon devis gratuit
                  </Link>
                  <p className="font-body text-sm text-neutral-500 mt-4">
                    Ou appelez-nous directement au{" "}
                    <a
                      href={`tel:${COMPANY_INFO.phoneFormatted}`}
                      className="text-primary font-semibold"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zone Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-heading font-bold text-2xl text-neutral-900 mb-4">
              Notre zone d&apos;intervention
            </h2>
            <p className="font-body text-neutral-600">
              Nous intervenons a {cityName} et dans toutes les communes du Rhone.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className={`px-4 py-2 rounded-full font-body text-sm transition-colors ${
                  c.slug === params.slug
                    ? "bg-primary text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
