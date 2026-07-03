import type { Metadata } from "next";
import { PageTransition } from "@/components/motion";
import { Container, GlassCard, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Explore Digi Tona.",
};

export default function TermsOfServicePage() {
  return (
    <PageTransition>
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Terms"
            title="Terms of Service"
            text="These general terms describe the use of the Explore Digi Tona website and consultation inquiry process."
          />
          <GlassCard className="mt-10 max-w-3xl">
            <div className="space-y-6 text-sm leading-7 text-slate-300">
              <p>
                Website content is provided for general business and marketing
                information. Submitting a form does not create a formal consulting
                engagement until scope, pricing, and terms are agreed in writing.
              </p>
              <p>
                Recommendations are based on information available during the
                consultation or project. Results may vary depending on market,
                execution, budget, timeline, and external factors.
              </p>
              <p>
                For service questions, contact exploredigitona@gmail.com.
              </p>
            </div>
          </GlassCard>
        </Container>
      </section>
    </PageTransition>
  );
}
