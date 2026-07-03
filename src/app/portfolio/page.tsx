import type { Metadata } from "next";
import { BarChart3, Search, Share2, Globe2 } from "lucide-react";
import { PageTransition, Reveal } from "@/components/motion";
import { ButtonLink, Container, GlassCard, IconBadge, SectionHeader } from "@/components/ui";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Featured marketing campaigns, SEO projects, website consulting projects, case studies, results, and outcomes by Explore Digi Tona.",
};

const groups = [
  { title: "Featured Projects", icon: BarChart3, text: "Strategic growth work across content, SEO, websites, and campaign planning." },
  { title: "Marketing Campaigns", icon: Share2, text: "Campaign concepts, content pillars, and audience-focused digital marketing systems." },
  { title: "SEO Projects", icon: Search, text: "Search visibility audits, keyword maps, and content plans built for organic growth." },
  { title: "Website Projects", icon: Globe2, text: "Website audits and conversion recommendations for clearer user journeys." },
];

export default function PortfolioPage() {
  return (
    <PageTransition>
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Portfolio"
            title="Case studies and project outcomes for smarter digital growth"
            text="A curated view of the kinds of marketing systems, campaign planning, SEO improvements, and website consulting Explore Digi Tona provides."
            centered
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {groups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.05}>
                <GlassCard className="h-full">
                  <IconBadge icon={group.icon} />
                  <h2 className="mt-5 text-xl font-semibold text-white">{group.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{group.text}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.05}>
                <GlassCard className="group h-full overflow-hidden">
                  <div className="mb-6 h-36 rounded-md border border-white/10 bg-[linear-gradient(135deg,rgba(59,130,246,0.22),rgba(6,182,212,0.08)),linear-gradient(90deg,transparent_0,rgba(255,255,255,0.08)_50%,transparent_100%)] transition group-hover:scale-[1.02]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    {project.type}
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold text-white">{project.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{project.result}</p>
                  <div className="mt-6 rounded-md border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-sm font-semibold text-white">Result and Outcome</p>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      Clearer positioning, stronger execution rhythm, and better
                      visibility into marketing performance.
                    </p>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 text-center">
            <ButtonLink href="/book-consultation">Discuss Your Project</ButtonLink>
          </Reveal>
        </Container>
      </section>
    </PageTransition>
  );
}
