import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageTransition, Reveal } from "@/components/motion";
import { ButtonLink, Container, GlassCard, IconBadge, SectionHeader } from "@/components/ui";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore AI marketing consulting, SEO, content marketing, social media marketing, website consulting, and analytics services.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeader
              eyebrow="Services"
              title="AI-powered marketing services for clear, measurable growth"
              text="Choose a focused service or combine several into a complete digital growth roadmap for your business."
            />
            <ButtonLink href="/book-consultation">Book Consultation</ButtonLink>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.04}>
                <GlassCard className="flex h-full flex-col">
                  <IconBadge icon={service.icon} />
                  <h2 className="mt-5 text-xl font-semibold text-white">{service.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{service.short}</p>
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
    </PageTransition>
  );
}
