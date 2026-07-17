import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { brand, navLinks, services, socialLinks } from "@/lib/data";
import { ButtonLink, Container } from "@/components/ui";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Digi Tona Logo"
                width={52}
                height={52}
                className="size-[52px] shrink-0 rounded-md object-contain"
              />
              <div>
                <p className="font-semibold text-white">{brand.name}</p>
                <p className="text-sm text-slate-400">{brand.title}</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              Helping businesses grow through AI-powered digital marketing, SEO,
              content strategy, social media marketing, and data-driven growth
              solutions.
            </p>
            <div className="mt-6">
              <ButtonLink href="/book-consultation">Book Consultation</ButtonLink>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Quick Links</h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link className="text-sm text-slate-400 transition hover:text-cyan-300" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link className="text-sm text-slate-400 transition hover:text-cyan-300" href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-sm text-slate-400 transition hover:text-cyan-300" href="/terms-of-service">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Services</h2>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    className="text-sm text-slate-400 transition hover:text-cyan-300"
                    href={`/services/${service.slug}`}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Contact</h2>
            <ul className="mt-5 space-y-4 text-sm text-slate-400">
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 text-cyan-300" aria-hidden="true" />
                <a href={`mailto:${brand.email}`} className="hover:text-cyan-300">
                  {brand.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 text-cyan-300" aria-hidden="true" />
                <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="hover:text-cyan-300">
                  {brand.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 text-cyan-300" aria-hidden="true" />
                <span>{brand.location}</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-md border border-white/10 px-3 py-2 text-xs font-semibold text-slate-300 transition hover:border-cyan-300/60 hover:text-cyan-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-500">
          Copyright {new Date().getFullYear()} {brand.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
