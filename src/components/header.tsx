"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { brand, navLinks } from "@/lib/data";
import { clsx } from "clsx";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-[80px] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:h-[96px] lg:px-8">
        <Link href="/" className="flex h-full min-w-0 items-center gap-3" aria-label={`${brand.name} home`}>
          <span className="relative size-[68px] shrink-0 overflow-hidden rounded-md lg:size-[88px]">
            <Image
              src="/logo.png"
              alt="Digi Tona Logo"
              fill
              sizes="(min-width: 1024px) 88px, 68px"
              priority
              className="object-contain"
            />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Explore Digi Tona
            </span>
            <span className="block text-xs text-slate-400">AI Growth Consulting</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "text-sm font-medium transition hover:text-cyan-300",
                pathname === link.href ? "text-cyan-300" : "text-slate-300",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book-consultation"
            className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-200"
          >
            Book Consultation
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md border border-white/15 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-black/95 px-4 py-5 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-slate-200 hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book-consultation"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-blue-500 px-4 py-3 text-center font-semibold text-white"
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
