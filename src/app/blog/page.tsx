import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog - Conseils Peinture",
  description:
    "Conseils et astuces peinture par RHONEA Peinture Lyon. Prix, tendances, techniques et guides pratiques pour vos projets.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              Notre blog
            </h1>
            <p className="font-body text-xl text-white/90">
              Conseils, astuces et actualites sur la peinture et la decoration.
              Restez informe des tendances et des bonnes pratiques.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 lg:py-24 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.slug}
                className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div
                    className={`${
                      index === 0 ? "md:flex" : ""
                    }`}
                  >
                    <div
                      className={`relative ${
                        index === 0
                          ? "md:w-1/2 aspect-[16/9] md:aspect-auto"
                          : "aspect-[16/9]"
                      }`}
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${post.image})` }}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-body font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`p-6 ${
                        index === 0 ? "md:w-1/2 md:flex md:flex-col md:justify-center" : ""
                      }`}
                    >
                      <div className="flex items-center gap-4 text-sm text-neutral-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString("fr-FR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime} de lecture
                        </span>
                      </div>
                      <h2
                        className={`font-heading font-bold text-neutral-900 mb-3 ${
                          index === 0 ? "text-2xl md:text-3xl" : "text-xl"
                        }`}
                      >
                        {post.title}
                      </h2>
                      <p className="font-body text-neutral-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-primary font-body font-semibold group-hover:gap-3 transition-all">
                        Lire l&apos;article
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-2xl text-neutral-900 mb-4">
            Un projet de peinture ?
          </h2>
          <p className="font-body text-neutral-600 mb-6">
            Nos articles vous ont inspire ? Passez a l&apos;action et demandez votre
            devis gratuit.
          </p>
          <Link
            href="/devis"
            className="inline-flex items-center justify-center bg-secondary hover:bg-secondary-dark text-white font-body font-semibold px-6 py-3 rounded-lg transition-all"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </>
  );
}
