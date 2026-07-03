import Link from "next/link";
import type { ComponentType, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";
import { Reveal } from "@/components/motion";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={clsx("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

export function SectionHeader({
  eyebrow,
  title,
  text,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  centered?: boolean;
}) {
  return (
    <Reveal className={clsx("max-w-3xl", centered && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text ? <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{text}</p> : null}
    </Reveal>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black",
        variant === "primary"
          ? "bg-blue-500 text-white shadow-[0_0_32px_rgba(59,130,246,0.36)] hover:bg-blue-400"
          : "border border-white/15 bg-white/5 text-white backdrop-blur hover:border-cyan-300/60 hover:bg-white/10",
      )}
    >
      {children}
      <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}

export function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "rounded-lg border border-white/10 bg-slate-950/55 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:border-cyan-300/30 hover:bg-slate-900/70",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function IconBadge({ icon: Icon }: { icon: ComponentType<{ className?: string }> }) {
  return (
    <div className="flex size-12 items-center justify-center rounded-md border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
      <Icon className="size-6" aria-hidden="true" />
    </div>
  );
}
