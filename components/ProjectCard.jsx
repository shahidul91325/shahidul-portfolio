import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function ProjectCard({ project }) {
  return (
    <article className="group rounded-3xl bg-[#090f1d]/85 border border-slate-800/90 hover:border-sky-500/40 hover:bg-[#0c1426] transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between h-full card-hover-effect">
      <div>
        {/* Project Thumbnail Image */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-950 border-b border-slate-800/80">
          <Image
            src={project.image}
            alt={`${project.title} screenshot preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090f1d] via-transparent to-transparent opacity-60" />
          
          <div className="absolute top-3.5 left-3.5">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-950/90 backdrop-blur-md text-sky-400 border border-sky-500/30 shadow-md">
              {project.category}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7 space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-white group-hover:text-sky-300 transition-colors tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs text-sky-400/95 font-semibold mt-1">
              {project.subtitle}
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed line-clamp-3 font-normal">
            {project.description}
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-900/90 text-slate-300 border border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Footer (Pinned to Bottom) */}
      <div className="px-6 pb-6 pt-4 sm:px-7 sm:pb-7 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800/80 mt-auto">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-400 hover:text-sky-300 transition-colors group/link focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg py-1"
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label={`View ${project.title} GitHub repository (opens in new tab)`}
              title="GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold text-slate-950 bg-gradient-to-r from-sky-400 to-cyan-300 hover:from-sky-300 hover:to-cyan-200 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 active:scale-95"
              aria-label={`Open ${project.title} live demo (opens in new tab)`}
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
