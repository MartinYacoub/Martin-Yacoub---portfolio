"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | loading | success

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) return null;

  const handleDownload = () => {
    setStatus("loading");

    setTimeout(() => {
      setStatus("success");

      setTimeout(() => setStatus("idle"), 2000);
    }, 1500);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["about", "skills", "contact"].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium transition-colors"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative flex items-center justify-center w-10 h-10 rounded-full border dark:border-slate-200 border-slate-700 dark:bg-slate-100 bg-slate-800 hover:shadow hover:shadow-slate-700 dark:hover:shadow-slate-200 transition cursor-pointer"
          ></button>

          {/* Download CV CTA */}
          <a
            href="/Martin-Yacoub-C.V.pdf"
            download
            onClick={handleDownload}
            className={`px-5 py-2 rounded-lg text-sm font-bold transition-all duration-300 shadow-sm inline-flex items-center gap-2 active:scale-95
            ${
              status === "loading"
                ? "bg-primary/70 cursor-not-allowed"
                : status === "success"
                  ? "bg-green-500 text-white"
                  : "bg-primary hover:bg-primary/90 text-slate-900 dark:text-white"
            }`}
          >
            {status === "loading" && (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Downloading...
              </>
            )}

            {status === "success" && (
              <>
                <span>✔</span>
                Done
              </>
            )}

            {status === "idle" && "Download C.V"}
          </a>
        </div>
      </div>
    </header>
  );
}
