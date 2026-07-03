import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { PageTransition, Reveal } from "@/components/motion";
import { ButtonLink, Container, GlassCard, IconBadge, SectionHeader } from "@/components/ui";
import { services } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) return {};

  return {
    title: service.title,
    description: service.short,
    openGraph: {
      title: service.title,
      description: service.short,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  return (
    <PageTransition>
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeader
              eyebrow="Service"
              title={service.title}
              text={service.short}
            />
            <Reveal>
              <GlassCard>
                <IconBadge icon={service.icon} />
                <h2 className="mt-5 text-2xl font-semibold text-white">Service Overview</h2>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  This service helps your business move from scattered marketing
                  activity to a clearer growth system. The work is strategic,
                  practical, and shaped around your audience, offers, channels,
                  and measurable business goals.
                </p>
                <div className="mt-7">
                  <ButtonLink href="/book-consultation">Book Consultation</ButtonLink>
                </div>
              </GlassCard>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            <Reveal>
              <GlassCard className="h-full">
                <h2 className="text-xl font-semibold text-white">Benefits</h2>
                <ul className="mt-5 space-y-4">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3 text-sm leading-7 text-slate-300">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-cyan-300" aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
            <Reveal delay={0.05}>
              <GlassCard className="h-full">
                <h2 className="text-xl font-semibold text-white">Deliverables</h2>
                <ul className="mt-5 space-y-4">
                  {service.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex gap-3 text-sm leading-7 text-slate-300">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-cyan-300" aria-hidden="true" />
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
            <Reveal delay={0.1}>
              <GlassCard className="h-full">
                <h2 className="text-xl font-semibold text-white">Process</h2>
                <ol className="mt-5 space-y-4">
                  {service.process.map((step, index) => (
                    <li key={step} className="flex gap-3 text-sm leading-7 text-slate-300">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-blue-500 text-xs font-semibold text-white">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </GlassCard>
            </Reveal>
          </div>

          <section className="mt-16">
            <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" />
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {service.faqs.map((faq, index) => (
                <Reveal key={faq.q} delay={index * 0.04}>
                  <GlassCard className="h-full">
                    <h3 className="text-lg font-semibold text-white">{faq.q}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{faq.a}</p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </section>

          <Reveal className="mt-16 rounded-lg border border-cyan-300/20 bg-white/[0.05] p-8 text-center backdrop-blur">
            <h2 className="text-3xl font-semibold text-white">Ready to explore {service.title}?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Request a consultation and get a focused view of what this service
              can do for your business.
            </p>
            <div className="mt-7">
              <ButtonLink href="/book-consultation">Book Consultation</ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </PageTransition>
  );
}
