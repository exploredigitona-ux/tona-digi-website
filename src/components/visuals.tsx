"use client";

import { motion } from "framer-motion";
import { ArrowUp, CircuitBoard, MousePointerClick, Radar, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#0A0A0A]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.08)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <motion.div
        className="absolute left-[-12%] top-[8%] h-[34rem] w-[34rem] rounded-full bg-blue-500/20 blur-3xl"
        animate={{ x: [0, 80, 0], y: [0, 40, 0], opacity: [0.22, 0.35, 0.22] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[5%] right-[-10%] h-[32rem] w-[32rem] rounded-full bg-cyan-400/14 blur-3xl"
        animate={{ x: [0, -70, 0], y: [0, -35, 0], opacity: [0.2, 0.32, 0.2] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent_0%,#0A0A0A_72%)]" />
    </div>
  );
}

export function HeroVisual() {
  const metrics = [
    { label: "AI campaigns", value: "Active" },
    { label: "Organic reach", value: "+42%" },
    { label: "Lead quality", value: "High" },
  ];

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-lg border border-white/10 bg-slate-950/70 p-5 shadow-2xl shadow-blue-950/40 backdrop-blur-xl sm:aspect-square lg:max-w-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(59,130,246,0.32),transparent_34%),linear-gradient(135deg,rgba(139,92,246,0.16),rgba(6,182,212,0.08))]" />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">Growth Console</p>
            <p className="mt-2 text-2xl font-semibold text-white">Explore Digi Tona</p>
          </div>
          <Radar className="size-10 text-cyan-300" aria-hidden="true" />
        </div>

        <div className="relative mx-auto grid size-52 place-items-center sm:size-64">
          <motion.div
            className="absolute inset-0 rounded-full border border-cyan-300/35"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-8 rounded-full border border-blue-400/30"
            animate={{ rotate: -360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          />
          <div className="grid size-28 place-items-center rounded-full border border-white/15 bg-black/70 text-center shadow-[0_0_36px_rgba(6,182,212,0.28)]">
            <CircuitBoard className="mx-auto size-8 text-cyan-200" aria-hidden="true" />
            <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.18em] text-white">
              AI Engine
            </span>
          </div>
          {[Zap, MousePointerClick, Radar].map((Icon, index) => (
            <motion.div
              key={index}
              className="absolute flex size-12 items-center justify-center rounded-md border border-white/10 bg-white/10 text-cyan-200 backdrop-blur"
              style={{
                left: index === 0 ? "5%" : index === 1 ? "72%" : "42%",
                top: index === 0 ? "22%" : index === 1 ? "55%" : "2%",
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3 + index, repeat: Infinity, ease: "easeInOut" }}
            >
              <Icon className="size-5" aria-hidden="true" />
            </motion.div>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-md border border-white/10 bg-white/[0.06] p-3">
              <p className="text-xs text-slate-400">{metric.label}</p>
              <p className="mt-1 text-sm font-semibold text-white">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5 z-40 flex size-12 items-center justify-center rounded-md border border-white/15 bg-slate-950/90 text-white shadow-xl backdrop-blur transition hover:border-cyan-300 hover:text-cyan-300"
      aria-label="Back to top"
    >
      <ArrowUp className="size-5" aria-hidden="true" />
    </button>
  );
}
