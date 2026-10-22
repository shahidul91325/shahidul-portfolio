import { projectsData } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28 relative bg-[#060911] overflow-hidden">
      {/* Background radial glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[650px] h-[350px] sm:h-[500px] lg:h-[650px] bg-sky-500/10 rounded-full blur-3xl -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Production & Practical Web Projects
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Real-world full-stack web applications engineered with clean code architecture, modern frameworks, and responsive UX design.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projectsData.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* Additional GitHub Prompt Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#090f1d]/85 border border-slate-800/90 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 shadow-lg">
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Interested in more experiments and source code?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Browse repositories, commits, and recent open-source explorations.
            </p>
          </div>
          <a
            href="https://github.com/shahidul91325"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-sky-400 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 transition shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <span>Explore GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
