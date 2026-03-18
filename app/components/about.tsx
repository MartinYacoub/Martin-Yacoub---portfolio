import StatCard from "./statCard";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-50 dark:bg-slate-950 border-y border-gray-200 dark:border-slate-700 py-20 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* LEFT TITLE */}
          <div className="md:col-span-4">
            <h2 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">
              About Me
            </h2>
            <div className="h-1 w-12 bg-primary dark:bg-primary-light mt-4 rounded-full"></div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:col-span-8 flex flex-col gap-6">
            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
              I am a front-end developer passionate about building modern,
              accessible, and visually polished web experiences. I specialize in
              React and Next.js, focusing on performance, usability, and clean
              architecture.
            </p>

            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
              Currently starting my freelance journey, I aim to collaborate on
              meaningful projects and help clients bring their ideas to life. I
              enjoy turning complex problems into elegant, user-friendly
              solutions.
            </p>

            {/* Stats / Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <StatCard number="React & Next.js" label="Focused Skills" />
              <StatCard number="Portfolio" label="Projects Built" />
              <StatCard number="Client Collaboration" label="Approach" />
              <StatCard number="Responsive Support" label="Commitment" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
