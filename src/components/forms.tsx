"use client";

import { Send } from "lucide-react";
import { services } from "@/lib/data";

const inputClass =
  "w-full rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20";

export function ContactForm({ consultation = false }: { consultation?: boolean }) {
  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        alert("Thank you. Your request has been prepared for Explore Digi Tona.");
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-200">
          Full Name
          <input required className={inputClass} name="name" placeholder="Your full name" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-200">
          Email Address
          <input required className={inputClass} type="email" name="email" placeholder="you@example.com" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-200">
          Phone Number
          <input className={inputClass} name="phone" placeholder="+977 ..." />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-200">
          Company Name
          <input className={inputClass} name="company" placeholder="Company or brand" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-slate-200">
        Service Required
        <select required className={inputClass} name="service" defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option className="bg-slate-950" key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </label>
      {consultation ? (
        <label className="grid gap-2 text-sm font-medium text-slate-200">
          Preferred Consultation Focus
          <input className={inputClass} name="focus" placeholder="SEO, AI workflows, social growth..." />
        </label>
      ) : null}
      <label className="grid gap-2 text-sm font-medium text-slate-200">
        Message
        <textarea
          required
          className={`${inputClass} min-h-36 resize-y`}
          name="message"
          placeholder="Tell us about your goals, current challenges, and timeline."
        />
      </label>
      <button
        type="submit"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(59,130,246,0.35)] transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black"
      >
        <Send className="size-4" aria-hidden="true" />
        {consultation ? "Request Consultation" : "Send Message"}
      </button>
    </form>
  );
}

export function NewsletterForm() {
  return (
    <form
      className="mt-6 flex flex-col gap-3 sm:flex-row"
      onSubmit={(event) => {
        event.preventDefault();
        alert("Thanks for joining the Explore Digi Tona newsletter.");
      }}
    >
      <label className="sr-only" htmlFor="newsletter-email">
        Email Address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        className={inputClass}
        placeholder="Email address"
      />
      <button
        type="submit"
        className="min-h-12 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200"
      >
        Subscribe
      </button>
    </form>
  );
}
