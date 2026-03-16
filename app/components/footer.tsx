"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {year} Martin Yacoub. All rights reserved.
        </p>

        {/* Center Navigation */}
        <div className="flex gap-6 text-sm text-slate-600 dark:text-slate-400">
          <a href="#about" className="hover:text-primary transition">
            About
          </a>
          <a href="#skills" className="hover:text-primary transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-primary transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-primary transition">
            Contact
          </a>
        </div>

        {/* Social / Email Links */}
        <div className="flex gap-4 text-2xl">
          <Link
            href="https://github.com/MartinYacoub"
            target="_blank"
            className="transition hover:opacity-80"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-[#181717] dark:text-[#A8A8A8]"
            />
          </Link>

          <Link
            href="https://www.linkedin.com/in/martin-yacoub-423069282/"
            target="_blank"
            className="hover:opacity-80 transition"
          >
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0077B5" }} />
          </Link>

          <Link
            href="mailto:yacoubmartin@gmail.com"
            className="hover:opacity-80 transition"
          >
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#D14836" }} />
          </Link>
        </div>
      </div>

      {/* Bottom small line */}
      <div className="text-center text-xs text-slate-400 mt-6">
        Built with Next.js & Tailwind CSS
      </div>
    </footer>
  );
}
