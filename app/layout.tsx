import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: {
    default: "Martin Yacoub | Front-End Developer",
    template: "%s | Martin Yacoub",
  },
  description:
    "Front-End Developer specializing in React, Next.js, and modern web experiences. Building fast, accessible, and scalable interfaces.",
  keywords: [
    "Martin Yacoub",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Martin Yacoub" }],
  creator: "Martin Yacoub",
  openGraph: {
    title: "Martin Yacoub | Front-End Developer",
    description:
      "Front-End Developer specializing in React, Next.js, and modern web experiences.",
    url: "https://your-domain.com",
    siteName: "Martin Yacoub Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martin Yacoub | Front-End Developer",
    description: "Front-End Developer specializing in React and Next.js.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body
          className={`${inter.variable} font-display min-h-screen antialiased bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300`}
        >
          {children}
          <Analytics />
        </body>
      </ThemeProvider>
    </html>
  );
}
