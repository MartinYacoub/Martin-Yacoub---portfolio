import Link from "next/link";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "SaaS Dashboard",
    description:
      "Interactive dashboard with real-time data visualization built with React and modern UI patterns.",
    tech: ["Next.js", "Tailwind", "Chart.js"],
    github: "#",
    live: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Modern storefront with optimized checkout flow and dynamic product filtering.",
    tech: ["React", "Framer Motion", "Stripe"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Recent Projects
            </h2>
            <p className="text-slate-400 mt-2">
              A selection of my professional work
            </p>
          </div>

          <Link
            href="https://github.com"
            target="_blank"
            className="text-primary hover:underline font-bold text-sm"
          >
            View All Projects
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
