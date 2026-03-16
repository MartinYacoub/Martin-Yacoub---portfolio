"use client";

import Link from "next/link";
import HeroIcons from "./heroIcons";

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-16 md:pt-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div className="flex flex-col gap-6">
          {/* Freelance Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-xs font-bold uppercase tracking-wider w-fit">
            Available for freelance projects
          </div>

          {/* NAME */}
          <h1 className="text-slate-900 dark:text-white text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
            Martin Yacoub
          </h1>

          {/* TITLE */}
          <h2 className=" text-xl md:text-2xl font-semibold">
            Front-End Developer
          </h2>

          {/* DESCRIPTION */}
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-lg">
            Building modern, responsive, and interactive web applications using
            React and modern UI technologies.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-4">
            <Link
              href="#projects"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition shadow-lg"
            >
              View My Work
            </Link>

            <Link
              href="#contact"
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-primary/50 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-xl font-bold transition"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* RIGHT — SKILLS */}
        <HeroIcons />
      </div>
    </section>
  );
}
