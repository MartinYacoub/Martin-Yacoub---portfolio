"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faTypescript } from "@fortawesome/free-brands-svg-icons";
import { faN } from "@fortawesome/free-solid-svg-icons";

export default function HeroTechIcons() {
  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-900 hidden md:flex flex-col items-center justify-center">
      {/* Big React Icon */}
      <div className="relative group mb-16">
        <FontAwesomeIcon
          icon={faReact}
          className="text-9xl md:text-[12rem] text-[#61DBFB] cursor-pointer"
        />
        <span
          className="absolute -bottom-10 left-1/2 -translate-x-1/2
                     opacity-0 group-hover:opacity-100
                     transition-opacity text-lg md:text-2xl font-semibold
                     text-slate-700 dark:text-slate-200 tracking-wide pointer-events-none"
        >
          React
        </span>
      </div>

      {/* Row with Next and TypeScript */}
      <div className="flex gap-16 md:gap-24">
        {/* Next.js */}
        <div className="relative group">
          <FontAwesomeIcon
            icon={faN}
            className="text-5xl md:text-6xl text-black dark:text-slate-50 cursor-pointer"
          />
          <span
            className="absolute -bottom-8 left-1/2 -translate-x-1/2
                       opacity-0 group-hover:opacity-100
                       transition-opacity text-sm md:text-base font-medium
                       text-slate-700 dark:text-slate-200 tracking-wide pointer-events-none"
          >
            Next.js
          </span>
        </div>

        {/* TypeScript */}
        <div className="relative group">
          <FontAwesomeIcon
            icon={faTypescript}
            className="text-5xl md:text-6xl text-[#3178C6] cursor-pointer"
          />
          <span
            className="absolute -bottom-8 left-1/2 -translate-x-1/2
                       opacity-0 group-hover:opacity-100
                       transition-opacity text-sm md:text-base font-medium
                       text-slate-700 dark:text-slate-200 tracking-wide pointer-events-none"
          >
            TypeScript
          </span>
        </div>
      </div>
    </section>
  );
}
