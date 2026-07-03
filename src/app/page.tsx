import Link from "next/link";
import { ArrowRight, CheckCircle2, Quote } from "lucide-react";
import { HeroVisual } from "@/components/visuals";
import { PageTransition, Reveal } from "@/components/motion";
import { ButtonLink, Container, GlassCard, IconBadge, SectionHeader } from "@/components/ui";
import { NewsletterForm } from "@/components/forms";
import { blogPosts, projects, services, stats, testimonials, whyChoose } from "@/lib/data";

export default function Home() {
  return (
    <PageTransition>
      <section className="overflow-hidden pb-20 pt-16 sm:pt-24 lg:pb-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <p className="mb-4 inline-flex rounded-md border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                AI Marketing Consultant in Kathmandu
              </p>
              <h1 className="max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Transform Your Business with AI-Powered Digital Marketing
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Helping businesses grow through strategic digital marketing, AI
                solutions, SEO, content marketing, and data-driven growth
                strategies.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/book-consultation">Book Consultation</ButtonLink>
                <ButtonLink href="/services" variant="secondary">
                  Explore Services
                </ButtonLink>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <HeroVisual />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeader
            eyebrow="Services Overview"
            title="Premium marketing systems for modern growth"
            text="Explore Digi Tona blends AI-enabled workflows with practical marketing strategy, helping businesses build visibility, trust, and measurable momentum."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.04}>
                <GlassCard className="h-full">
                  <IconBadge icon={service.icon} />
                  <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{service.short}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200"
                  >
                    Learn More <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeader
              eyebrow="Why Choose Us"
              title="Strategic, AI-focused, and built around your business outcomes"
              text="Work directly with Tona Shahi Thakuri to clarify your digital direction, strengthen your marketing assets, and build a practical growth rhythm."
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {whyChoose.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.05}>
                  <GlassCard className="h-full">
                    <IconBadge icon={item.icon} />
                    <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeader
            eyebrow="Featured Portfolio"
            title="Growth projects shaped for clarity, visibility, and conversion"
            centered
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.05}>
                <GlassCard className="h-full">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    {project.type}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{project.result}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeader eyebrow="Testimonials" title="Trusted guidance for ambitious teams" centered />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.06}>
                <GlassCard className="h-full">
                  <Quote className="size-8 text-cyan-300" aria-hidden="true" />
                  <p className="mt-5 text-sm leading-7 text-slate-300">{item.quote}</p>
                  <p className="mt-6 font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeader eyebrow="Latest Blog Articles" title="Ideas for smarter digital growth" />
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
              View all articles <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {blogPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.05}>
                <GlassCard className="h-full">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    {post.category}
                  </p>
                  <h3 className="mt-4 text-lg font-semibold text-white">{post.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{post.excerpt}</p>
                  <p className="mt-5 text-xs text-slate-500">{post.readTime}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <div className="rounded-lg border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(59,130,246,0.18),rgba(6,182,212,0.08))] p-6 backdrop-blur-xl sm:p-10 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
                    Ready to grow smarter?
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                    Build a marketing roadmap that feels clear, modern, and measurable.
                  </h2>
                  <div className="mt-6 grid gap-3 text-sm text-slate-200 sm:grid-cols-3">
                    {["AI workflows", "SEO clarity", "Conversion focus"].map((item) => (
                      <span key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-cyan-300" aria-hidden="true" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <ButtonLink href="/book-consultation">Book Consultation</ButtonLink>
                  <NewsletterForm />
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </PageTransition>
  );
}
