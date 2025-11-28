import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article non trouve" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | RHONEA Peinture`,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === params.slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white font-body text-sm mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>
            <span className="inline-block bg-white/10 text-white px-3 py-1 rounded-full text-sm font-body mb-4">
              {post.category}
            </span>
            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-white/80">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {new Date(post.date).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {post.readTime} de lecture
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative -mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-xl">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${post.image})` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <div
                className="font-body text-neutral-700 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .replace(/## (.*)/g, '<h2 class="font-heading font-bold text-2xl text-neutral-900 mt-8 mb-4">$1</h2>')
                    .replace(/### (.*)/g, '<h3 class="font-heading font-semibold text-xl text-neutral-900 mt-6 mb-3">$1</h3>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-neutral-900">$1</strong>')
                    .replace(/- (.*)/g, '<li class="ml-4 mb-2">$1</li>')
                    .replace(/\n\n/g, '</p><p class="mb-4">')
                    .replace(/1\. (.*)/g, '<li class="ml-4 mb-2 list-decimal">$1</li>'),
                }}
              />
            </article>

            {/* CTA */}
            <div className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/10">
              <h3 className="font-heading font-semibold text-xl text-neutral-900 mb-2">
                Un projet de peinture ?
              </h3>
              <p className="font-body text-neutral-600 mb-4">
                Nos experts sont la pour vous accompagner. Demandez votre devis
                gratuit et sans engagement.
              </p>
              <Link
                href="/devis"
                className="inline-flex items-center justify-center bg-secondary hover:bg-secondary-dark text-white font-body font-semibold px-6 py-3 rounded-lg transition-all"
              >
                Demander un devis gratuit
              </Link>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                {prevPost ? (
                  <Link
                    href={`/blog/${prevPost.slug}`}
                    className="flex items-center gap-3 p-4 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors group"
                  >
                    <ArrowLeft className="w-5 h-5 text-neutral-400 group-hover:text-primary" />
                    <div>
                      <p className="font-body text-sm text-neutral-500">
                        Article precedent
                      </p>
                      <p className="font-heading font-semibold text-neutral-900 line-clamp-1">
                        {prevPost.title}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}
                {nextPost && (
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="flex items-center gap-3 p-4 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors group text-right"
                  >
                    <div>
                      <p className="font-body text-sm text-neutral-500">
                        Article suivant
                      </p>
                      <p className="font-heading font-semibold text-neutral-900 line-clamp-1">
                        {nextPost.title}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-primary" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
