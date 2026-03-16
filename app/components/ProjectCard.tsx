import Link from "next/link";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-primary/50 transition-all">
      {/* Image placeholder */}
      <div className="aspect-video bg-slate-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>

        <p className="text-slate-400 text-sm mb-4">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="text-xs font-medium px-2 py-1 bg-slate-700 rounded text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 text-sm">
          <Link
            href={project.github}
            target="_blank"
            className="text-primary hover:underline"
          >
            GitHub
          </Link>

          <Link
            href={project.live}
            target="_blank"
            className="text-primary hover:underline"
          >
            Live Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
