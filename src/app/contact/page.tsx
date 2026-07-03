import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms";
import { PageTransition, Reveal } from "@/components/motion";
import { Container, GlassCard, SectionHeader } from "@/components/ui";
import { brand, socialLinks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Explore Digi Tona for AI marketing consulting, SEO, content marketing, and digital growth strategy.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Contact"
            title="Let’s talk about your next stage of digital growth"
            text="Share your goals, challenges, and the service you are interested in. Explore Digi Tona will help you identify the most useful next steps."
            centered
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <div className="grid gap-5">
                {[
                  { icon: Mail, label: "Email", value: brand.email, href: `mailto:${brand.email}` },
                  { icon: Phone, label: "Phone", value: brand.phone, href: `tel:${brand.phone.replace(/\s/g, "")}` },
                  { icon: MapPin, label: "Location", value: brand.location, href: "https://maps.google.com/?q=Banasthali%20Kathmandu%20Nepal" },
                ].map((item) => (
                  <GlassCard key={item.label}>
                    <div className="flex gap-4">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-md bg-cyan-300/10 text-cyan-300">
                        <item.icon className="size-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
                        <a href={item.href} className="mt-2 block text-white hover:text-cyan-300">
                          {item.value}
                        </a>
                      </div>
                    </div>
                  </GlassCard>
                ))}

                <GlassCard>
                  <h2 className="text-lg font-semibold text-white">Social Media</h2>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="rounded-md border border-white/10 px-3 py-2 text-sm text-slate-300 hover:border-cyan-300/60 hover:text-cyan-300"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <GlassCard>
                <h2 className="text-2xl font-semibold text-white">Send a message</h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Use the form below for consulting inquiries, service questions,
                  partnership discussions, or project requests.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </GlassCard>
            </Reveal>
          </div>

          <Reveal className="mt-8 overflow-hidden rounded-lg border border-white/10">
            <iframe
              title="Google Map showing Banasthali Kathmandu Nepal"
              src="https://www.google.com/maps?q=Banasthali%20Kathmandu%20Nepal&output=embed"
              className="h-80 w-full grayscale invert"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </Container>
      </section>
    </PageTransition>
  );
}
