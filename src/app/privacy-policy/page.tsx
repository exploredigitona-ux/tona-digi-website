import type { Metadata } from "next";
import { PageTransition } from "@/components/motion";
import { Container, GlassCard, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Explore Digi Tona.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <PageTransition>
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Privacy Policy"
            title="Your information is handled with care"
            text="This page explains how Explore Digi Tona handles inquiry and consultation information submitted through the website."
          />
          <GlassCard className="mt-10 max-w-3xl">
            <div className="space-y-6 text-sm leading-7 text-slate-300">
              <p>
                Information submitted through forms may include your name, email,
                phone number, company name, service interest, and message. This
                information is used to respond to inquiries and provide consulting
                support.
              </p>
              <p>
                Explore Digi Tona does not sell personal information. Contact
                details are used only for relevant communication connected to your
                request.
              </p>
              <p>
                For privacy questions, contact exploredigitona@gmail.com.
              </p>
            </div>
          </GlassCard>
        </Container>
      </section>
    </PageTransition>
  );
}
