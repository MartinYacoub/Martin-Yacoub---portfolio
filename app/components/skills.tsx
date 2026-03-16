"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faGitAlt,
  faFigma,
  faTypescript,
  faBootstrap,
  faTailwindCss,
} from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Skill = {
  name: string;
  icon: IconDefinition;
  color: string;
};

type SkillCategories = {
  Languages: Skill[];
  "Frameworks & Libraries": Skill[];
  Tools: Skill[];
};

const skills: SkillCategories = {
  Languages: [
    { name: "HTML5", icon: faHtml5, color: "#E34F26" },
    { name: "CSS3", icon: faCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
    { name: "TypeScript", icon: faTypescript, color: "#3178C6" },
  ],
  "Frameworks & Libraries": [
    { name: "React", icon: faReact, color: "#61DAFB" },
    { name: "Next.js", icon: faReact, color: "#000000" },
    { name: "Bootstrap", icon: faBootstrap, color: "#7952B3" },
    { name: "Tailwind CSS", icon: faTailwindCss, color: "#38B2AC" },
    { name: "MUI", icon: faReact, color: "#007FFF" },
    { name: "Schadan", icon: faReact, color: "#4B5563" },
    { name: "Flowbite", icon: faReact, color: "#3B82F6" },
  ],
  Tools: [
    { name: "GitHub", icon: faGitAlt, color: "#F05032" },
    { name: "Figma", icon: faFigma, color: "#F24E1E" },
    { name: "APIs", icon: faServer, color: "#6E40C9" },
    { name: "TanStack Query", icon: faServer, color: "#FF4154" },
    { name: "Zod", icon: faServer, color: "#4B5563" },
    { name: "Axios", icon: faServer, color: "#5A29E4" },
  ],
};

export default function SkillsTabs() {
  const [activeTab, setActiveTab] =
    useState<keyof SkillCategories>("Languages");

  return (
    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Technical Skills
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-md">
            The tools and technologies I use to bring ideas to life on the web.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {Object.keys(skills).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as keyof SkillCategories)}
              className={`px-4 py-3 font-semibold transition cursor-pointer rounded-xl shadow-sm
                ${
                  activeTab === tab
                    ? "bg-slate-100 dark:bg-slate-300 border border-slate-700 text-slate-700"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-100"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {skills[activeTab].map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 cursor-pointer transition-transform hover:scale-105"
            >
              {/* Box with Icon + Title inside */}
              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow flex flex-col items-center justify-center gap-2 w-full">
                <FontAwesomeIcon
                  icon={skill.icon}
                  className="text-4xl md:text-5xl"
                  style={{ color: skill.color }}
                />
                <span
                  className="text-sm md:text-base font-bold tracking-wide text-slate-700 dark:text-slate-200"
                  style={{
                    textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
                  }}
                >
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
