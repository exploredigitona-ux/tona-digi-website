"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { blogPosts, categories } from "@/lib/data";
import { GlassCard } from "@/components/ui";
import { clsx } from "clsx";

export function BlogBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const posts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesQuery = `${post.title} ${post.excerpt} ${post.category}`
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesCategory = category === "All" || post.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <div className="mt-10">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
        <label className="relative block">
          <span className="sr-only">Search articles</span>
          <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-500" aria-hidden="true" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="min-h-12 w-full rounded-md border border-white/10 bg-white/[0.04] py-3 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
            placeholder="Search AI marketing, SEO, growth..."
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {["All", ...categories].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={clsx(
                "min-h-10 rounded-md border px-3 py-2 text-xs font-semibold transition",
                category === item
                  ? "border-cyan-300 bg-cyan-300/15 text-cyan-100"
                  : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-cyan-300/50",
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <GlassCard key={post.slug} className="h-full">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              {post.category}
            </p>
            <h2 className="mt-4 text-xl font-semibold text-white">
              <Link href={`/blog/${post.slug}`} className="transition hover:text-cyan-300">
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">{post.excerpt}</p>
            <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
              <span>{new Date(post.date).toLocaleDateString("en", { month: "short", day: "numeric", year: "numeric" })}</span>
              <Link href={`/blog/${post.slug}`} className="font-semibold text-cyan-300 hover:text-cyan-200">
                {post.readTime}
              </Link>
            </div>
          </GlassCard>
        ))}
      </div>

      {posts.length === 0 ? (
        <p className="mt-8 rounded-md border border-white/10 bg-white/[0.04] p-5 text-center text-slate-400">
          No articles match that search yet.
        </p>
      ) : null}
    </div>
  );
}
