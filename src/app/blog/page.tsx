import type { Metadata } from "next";
import Link from "next/link";
import { BlogBrowser } from "@/components/blog-browser";
import { PageTransition, Reveal } from "@/components/motion";
import { Container, GlassCard, SectionHeader } from "@/components/ui";
import { blogPosts, brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Explore articles on AI marketing, SEO, digital marketing, social media marketing, content marketing, and business growth.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const featured = blogPosts[0];

  return (
    <PageTransition>
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Blog"
            title="Insights for AI marketing, SEO, content, and business growth"
            text="Browse practical articles designed to help business owners and marketing teams make clearer digital growth decisions."
            centered
          />

          <Reveal className="mt-12">
            <GlassCard className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className="h-64 rounded-md border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(6,182,212,0.28),transparent_34%),linear-gradient(135deg,rgba(59,130,246,0.24),rgba(17,24,39,0.78))]" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Featured Article
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-white">{featured.title}</h2>
                <p className="mt-4 text-base leading-8 text-slate-300">{featured.excerpt}</p>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="mt-6 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-200"
                >
                  Read article on {brand.name} - {featured.readTime}
                </Link>
              </div>
            </GlassCard>
          </Reveal>

          <BlogBrowser />
        </Container>
      </section>
    </PageTransition>
  );
}
