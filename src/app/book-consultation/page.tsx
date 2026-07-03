import type { Metadata } from "next";
import { CalendarCheck, CheckCircle2, Clock, Target } from "lucide-react";
import { ContactForm } from "@/components/forms";
import { PageTransition, Reveal } from "@/components/motion";
import { Container, GlassCard, IconBadge, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Book Consultation",
  description:
    "Request a professional consultation with Explore Digi Tona for AI marketing, SEO, digital strategy, and growth planning.",
};

const expectations = [
  {
    icon: Target,
    title: "Focused diagnosis",
    text: "Clarify what is blocking growth and where the strongest opportunities sit.",
  },
  {
    icon: CalendarCheck,
    title: "Practical next steps",
    text: "Leave with a focused direction for SEO, content, AI workflows, or campaigns.",
  },
  {
    icon: Clock,
    title: "Efficient planning",
    text: "Use the consultation to align goals, priorities, timeline, and success metrics.",
  },
];

export default function BookConsultationPage() {
  return (
    <PageTransition>
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeader
                eyebrow="Book Consultation"
                title="Start with a clear growth conversation"
                text="Request a consultation with Tona Shahi Thakuri to explore your business goals, digital marketing priorities, and the right next steps."
              />
              <div className="mt-8 grid gap-5">
                {expectations.map((item, index) => (
                  <Reveal key={item.title} delay={index * 0.05}>
                    <GlassCard>
                      <div className="flex gap-4">
                        <IconBadge icon={item.icon} />
                        <div>
                          <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                          <p className="mt-2 text-sm leading-7 text-slate-400">{item.text}</p>
                        </div>
                      </div>
                    </GlassCard>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={0.08}>
              <GlassCard>
                <h2 className="text-2xl font-semibold text-white">Consultation request form</h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Share enough context to make the first conversation useful and
                  action-oriented.
                </p>
                <div className="mt-6">
                  <ContactForm consultation />
                </div>
              </GlassCard>
            </Reveal>
          </div>

          <Reveal className="mt-14 rounded-lg border border-cyan-300/20 bg-white/[0.04] p-8 backdrop-blur">
            <h2 className="text-2xl font-semibold text-white">Good-fit consultation topics</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {["AI marketing systems", "SEO and content strategy", "Social media growth", "Analytics and reporting"].map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="size-4 text-cyan-300" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>
    </PageTransition>
  );
}
