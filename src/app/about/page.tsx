import type { Metadata } from "next";
import { Award, Compass, Lightbulb, ShieldCheck, Sparkles, UserRound } from "lucide-react";
import { PageTransition, Reveal } from "@/components/motion";
import { ButtonLink, Container, GlassCard, IconBadge, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Tona Shahi Thakuri",
  description:
    "Learn about Tona Shahi Thakuri, founder of Explore Digi Tona and AI Marketing Consultant in Kathmandu, Nepal.",
  alternates: {
    canonical: "/about",
  },
};

const sections = [
  {
    icon: UserRound,
    title: "My Story",
    text: "Hi, I'm Tona Shahi Thakuri, founder of Explore Digi Tona. I help businesses navigate the digital landscape through AI-powered marketing strategies, SEO optimization, content marketing, and growth consulting. My mission is to help businesses establish a strong online presence and achieve sustainable growth through innovative marketing solutions.",
  },
  {
    icon: Compass,
    title: "Professional Journey",
    text: "Explore Digi Tona was created to bring strategic clarity to businesses that want modern marketing without confusion. The work combines research, customer insight, search visibility, content systems, and AI-enabled execution.",
  },
  {
    icon: Lightbulb,
    title: "Skills and Expertise",
    text: "AI marketing workflows, SEO strategy, social media planning, content architecture, analytics reporting, conversion consulting, and digital growth roadmaps.",
  },
  {
    icon: Award,
    title: "Certifications",
    text: "A commitment to continuous learning across digital marketing, analytics, search, AI tools, and business growth frameworks.",
  },
  {
    icon: Sparkles,
    title: "Mission and Vision",
    text: "The mission is to help ambitious businesses grow with practical, ethical, AI-powered marketing. The vision is a stronger digital ecosystem where businesses use technology with confidence and purpose.",
  },
  {
    icon: ShieldCheck,
    title: "Why Work With Me",
    text: "You get a personal, consultant-led approach with clear priorities, actionable recommendations, and a focus on long-term trust rather than short-term noise.",
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeader
              eyebrow="About"
              title="Personal guidance for businesses ready to grow with AI and digital strategy"
              text="Explore Digi Tona is led by Tona Shahi Thakuri, an AI Marketing Consultant and Digital Growth Strategist based in Kathmandu, Nepal."
            />
            <Reveal>
              <GlassCard>
                <p className="text-lg leading-9 text-slate-200">
                  My goal is to make modern marketing feel clear and useful for
                  real businesses. AI is powerful, but growth still comes from
                  knowing your audience, communicating with purpose, and measuring
                  what matters.
                </p>
                <p className="mt-6 font-semibold text-white">Tona Shahi Thakuri</p>
                <p className="text-sm text-slate-400">Founder, Explore Digi Tona</p>
              </GlassCard>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {sections.map((section, index) => (
              <Reveal key={section.title} delay={index * 0.04}>
                <GlassCard className="h-full">
                  <IconBadge icon={section.icon} />
                  <h2 className="mt-5 text-xl font-semibold text-white">{section.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{section.text}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 rounded-lg border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur">
            <h2 className="text-3xl font-semibold text-white">Let’s shape your next growth chapter.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Start with a focused consultation and leave with a clearer view of
              your opportunities, priorities, and next steps.
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
