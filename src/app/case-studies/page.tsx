import type { Metadata } from "next";
import { BarChart3, Bot, CheckCircle2, LineChart, MessageSquareText, Search, Sparkles, Workflow } from "lucide-react";
import { PageTransition, Reveal } from "@/components/motion";
import { ButtonLink, Container, GlassCard, IconBadge, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "AI marketing case studies and demonstration projects showing strategy, automation, SEO, content systems, and growth consulting outcomes by Explore Digi Tona.",
};

const caseStudies = [
  {
    label: "Portfolio demonstration project",
    title: "AI Content Growth System for a Service Brand",
    icon: Sparkles,
    challenge:
      "The business had useful expertise but no repeatable way to plan, brief, publish, and review content across channels.",
    solution:
      "Built an AI-assisted content workflow with audience pillars, monthly topic planning, reusable briefs, and a simple performance review rhythm.",
    results: ["40% faster content planning", "3 core content pillars", "Monthly insight review system"],
  },
  {
    label: "Portfolio demonstration project",
    title: "Local SEO Visibility Sprint",
    icon: Search,
    challenge:
      "A local service website had weak location signals, thin service pages, and unclear calls to action for consultation inquiries.",
    solution:
      "Mapped priority keywords, reorganized service-page structure, improved local relevance, and clarified inquiry paths.",
    results: ["12 priority search terms mapped", "Improved service-page clarity", "Stronger local SEO checklist"],
  },
  {
    label: "Sample consulting engagement",
    title: "Lead Response Automation Blueprint",
    icon: Workflow,
    challenge:
      "New inquiries were being handled manually, which slowed response time and made follow-up inconsistent.",
    solution:
      "Designed a lead intake and follow-up workflow with qualification steps, routing logic, and simple CRM tracking recommendations.",
    results: ["Faster lead response plan", "Reduced manual admin steps", "Clear handoff rules for qualified leads"],
  },
  {
    label: "Sample consulting engagement",
    title: "AI Chatbot Consultation Flow",
    icon: MessageSquareText,
    challenge:
      "Website visitors had common questions before booking, but the team did not have a consistent way to answer and qualify them.",
    solution:
      "Planned a guided chatbot flow with FAQs, service selection, consultation intent capture, and human handoff points.",
    results: ["24/7 first-response structure", "Better lead context before calls", "Consistent FAQ experience"],
  },
  {
    label: "Portfolio demonstration project",
    title: "Marketing Analytics Command Center",
    icon: BarChart3,
    challenge:
      "Campaign data lived in separate tools, making it difficult to see which channels were supporting qualified inquiries.",
    solution:
      "Created a KPI framework connecting visibility, engagement, leads, conversion quality, and monthly decision reviews.",
    results: ["10 KPI dashboard framework", "Lead quality tracking view", "Monthly optimization agenda"],
  },
  {
    label: "Sample strategy sprint",
    title: "90-Day AI Growth Roadmap",
    icon: Bot,
    challenge:
      "The business wanted to use AI but needed a practical starting point that would not overwhelm the team.",
    solution:
      "Prioritized high-value AI use cases across content, reporting, customer questions, and internal workflows.",
    results: ["90-day adoption roadmap", "Tool shortlist by use case", "Clear priority scoring model"],
  },
];

export default function CaseStudiesPage() {
  return (
    <PageTransition>
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeader
              eyebrow="Case Studies"
              title="AI marketing examples built around clarity, systems, and measurable growth"
              text="Explore realistic portfolio and demonstration projects showing how AI-enabled marketing strategy can improve visibility, response speed, content consistency, and decision-making."
            />
            <ButtonLink href="/book-consultation">Book Consultation</ButtonLink>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {caseStudies.map((study, index) => (
              <Reveal key={study.title} delay={index * 0.04}>
                <GlassCard className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <IconBadge icon={study.icon} />
                    <span className="rounded-md border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-right text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cyan-200">
                      {study.label}
                    </span>
                  </div>
                  <h2 className="mt-6 text-xl font-semibold text-white">{study.title}</h2>

                  <div className="mt-5 space-y-5 text-sm leading-7 text-slate-400">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Business Challenge</p>
                      <p className="mt-2">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Solution Provided</p>
                      <p className="mt-2">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex-1 rounded-md border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-sm font-semibold text-white">Illustrative Results</p>
                    <ul className="mt-3 space-y-2">
                      {study.results.map((result) => (
                        <li key={result} className="flex gap-2 text-sm leading-6 text-slate-300">
                          <CheckCircle2 className="mt-1 size-4 shrink-0 text-cyan-300" aria-hidden="true" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
            <Reveal>
              <GlassCard className="h-full">
                <IconBadge icon={LineChart} />
                <h2 className="mt-5 text-2xl font-semibold text-white">Measured around business momentum</h2>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Each example focuses on practical growth signals: better visibility, faster follow-up,
                  clearer content systems, stronger consultation paths, and simpler reporting.
                </p>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.05}>
              <GlassCard className="h-full">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Client Feedback</p>
                <blockquote className="mt-5 text-2xl font-semibold leading-snug text-white">
                  &quot;The strategy made our marketing feel organized, practical, and much easier to act on.
                  We finally had a clear way to connect content, SEO, automation, and reporting.&quot;
                </blockquote>
                <p className="mt-6 text-sm font-semibold text-white">Demonstration testimonial</p>
                <p className="mt-1 text-sm text-slate-400">Service business growth project</p>
              </GlassCard>
            </Reveal>
          </div>

          <Reveal className="mt-16 rounded-lg border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(59,130,246,0.18),rgba(6,182,212,0.08))] p-8 text-center shadow-2xl shadow-black/20 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">Ready to build your growth case?</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Turn scattered marketing activity into a clear AI-powered growth system.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Book a consultation to identify the highest-impact next step for your visibility, lead flow,
              content, automation, or analytics.
            </p>
            <div className="mt-8">
              <ButtonLink href="/book-consultation">Book Consultation</ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </PageTransition>
  );
}
