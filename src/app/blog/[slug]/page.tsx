import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from "lucide-react";
import { PageTransition, Reveal } from "@/components/motion";
import { ButtonLink, Container, GlassCard, SectionHeader } from "@/components/ui";
import { blogPosts, brand } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

const ogImage = `${brand.url}/og-image.png`;

function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

function getRelatedPosts(slug: string, category: string) {
  const sameCategory = blogPosts.filter(
    (post) => post.slug !== slug && post.category === category,
  );
  const fallback = blogPosts.filter((post) => post.slug !== slug);
  return (sameCategory.length > 0 ? sameCategory : fallback).slice(0, 3);
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) return {};

  const url = `${brand.url}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      url,
      siteName: brand.name,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
      tags: [post.category],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${post.title} - ${brand.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const url = `${brand.url}/blog/${post.slug}`;
  const relatedPosts = getRelatedPosts(post.slug, post.category);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: brand.name,
      logo: {
        "@type": "ImageObject",
        url: `${brand.url}/logo.png`,
      },
    },
    image: ogImage,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="py-20 sm:py-28">
        <Container>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to Blog
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(280px,0.32fr)] lg:items-start">
            <div>
              <SectionHeader
                eyebrow={post.category}
                title={post.title}
                text={post.excerpt}
              />

              <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="size-4 text-cyan-300" aria-hidden="true" />
                  {new Date(post.date).toLocaleDateString("en", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="size-4 text-cyan-300" aria-hidden="true" />
                  {post.readTime}
                </span>
              </div>

              <Reveal className="mt-10">
                <GlassCard>
                  <div className="space-y-6 text-base leading-8 text-slate-300">
                    {post.content.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>
            </div>

            <aside className="space-y-5">
              <Reveal>
                <GlassCard>
                  <h2 className="text-lg font-semibold text-white">Explore related insights</h2>
                  <div className="mt-5 grid gap-4">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="group rounded-md border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyan-300/50"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                          {related.category}
                        </p>
                        <h3 className="mt-2 text-sm font-semibold leading-6 text-white group-hover:text-cyan-200">
                          {related.title}
                        </h3>
                      </Link>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>

              <Reveal delay={0.05}>
                <GlassCard>
                  <h2 className="text-lg font-semibold text-white">Need a clearer growth plan?</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    Turn this insight into a practical strategy for your business,
                    website, content, SEO, or AI workflows.
                  </p>
                  <div className="mt-6">
                    <ButtonLink href="/book-consultation">Book Consultation</ButtonLink>
                  </div>
                </GlassCard>
              </Reveal>
            </aside>
          </div>

          <Reveal className="mt-14 rounded-lg border border-cyan-300/20 bg-white/[0.04] p-6 backdrop-blur sm:p-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Continue exploring
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  More AI marketing and growth articles
                </h2>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200"
              >
                View all articles <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </article>
    </PageTransition>
  );
}
