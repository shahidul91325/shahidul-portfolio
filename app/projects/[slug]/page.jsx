import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { GithubIcon } from "@/components/Icons";
import { 
  ArrowLeft, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  Compass, 
  Rocket, 
  Sparkles,
  UserCheck,
  ChevronRight,
  Home
} from "lucide-react";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Shahidul Islam",
      description: "The requested project case study could not be found.",
    };
  }

  return {
    title: `${project.title} — Case Study & Project Details | Shahidul Islam`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study | Shahidul Islam`,
      description: project.description,
      images: [{ url: project.image }],
    },
  };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-28 bg-[#060911] relative overflow-hidden bg-grid-pattern">
      {/* Background ambient glows */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-sky-500/15 via-blue-600/10 to-transparent rounded-full blur-3xl -z-10" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-slate-400">
          <Link href="/" className="hover:text-sky-400 transition-colors flex items-center gap-1 font-medium">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/#projects" className="hover:text-sky-400 transition-colors font-medium">
            Projects
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-sky-400 font-semibold truncate">{project.title}</span>
        </nav>

        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 group shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-sky-400 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Hero Header */}
        <header className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>{project.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl font-bold text-sky-300">
            {project.subtitle}
          </p>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal">
            {project.tagline}
          </p>

          {/* Action Links */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-300 hover:from-sky-300 hover:to-cyan-200 shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-sky-500/50 shadow-md transition-all hover:scale-[1.02] active:scale-95"
              >
                <GithubIcon className="w-5 h-5 text-sky-400" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
        </header>

        {/* Featured Screenshot */}
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden bg-slate-950 border border-slate-800/90 shadow-2xl mb-12">
          <Image
            src={project.image}
            alt={`${project.title} interface preview`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1000px"
            className="object-cover object-top"
          />
        </div>

        {/* Details Grid & Breakdown */}
        <div className="space-y-12">
          
          {/* Overview & Problem */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 items-stretch">
            <div className="p-7 sm:p-8 rounded-3xl bg-[#090f1d]/85 border border-slate-800/90 shadow-xl space-y-3.5 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2.5 mb-3">
                  <Compass className="w-5 h-5 text-sky-400" />
                  <span>Project Overview</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {project.overview}
                </p>
              </div>
            </div>

            <div className="p-7 sm:p-8 rounded-3xl bg-[#090f1d]/85 border border-slate-800/90 shadow-xl space-y-3.5 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2.5 mb-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                  <span>The Problem Addressed</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {project.problemStatement}
                </p>
              </div>
            </div>
          </div>

          {/* Main Technology Stack */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#090f1d]/85 border border-slate-800/90 shadow-xl space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <Layers className="w-5 h-5 text-sky-400" />
              <span>Technology Stack & Tooling</span>
            </h2>
            <div className="flex flex-wrap gap-2.5 pt-1">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-xl text-sm font-bold bg-slate-900 text-sky-300 border border-sky-500/25 shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#090f1d]/85 border border-slate-800/90 shadow-xl space-y-5">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <Rocket className="w-5 h-5 text-sky-400" />
              <span>Key Features & Capabilities</span>
            </h2>
            <div className="grid grid-cols-1 gap-3.5">
              {project.keyFeatures.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Role & Contributions */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#090f1d]/85 border border-slate-800/90 shadow-xl space-y-3.5">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <UserCheck className="w-5 h-5 text-sky-400" />
              <span>My Role & Contributions</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {project.roleAndContributions}
            </p>
          </div>

          {/* Challenges & Solutions */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#090f1d]/85 border border-slate-800/90 shadow-xl space-y-5">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              <span>Challenges Faced & Technical Solutions</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.challengesAndSolutions.map((cs, cIdx) => (
                <div key={cIdx} className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                      Challenge:
                    </span>
                    <p className="text-sm sm:text-base text-slate-200 font-semibold leading-relaxed">
                      {cs.challenge}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-800/80">
                    <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block mb-1">
                      Solution Applied:
                    </span>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                      {cs.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lessons Learned & Future Improvements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 items-stretch">
            <div className="p-7 sm:p-8 rounded-3xl bg-[#090f1d]/85 border border-slate-800/90 shadow-xl space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
                <Lightbulb className="w-5 h-5 text-amber-400" />
                <span>Lessons Learned</span>
              </h2>
              <div className="space-y-3.5">
                {project.lessonsLearned.map((lesson, lIdx) => (
                  <div key={lIdx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-sky-400 mt-2 shrink-0" />
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {lesson}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-7 sm:p-8 rounded-3xl bg-[#090f1d]/85 border border-slate-800/90 shadow-xl space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
                <Rocket className="w-5 h-5 text-sky-400" />
                <span>Future Improvements & Roadmap</span>
              </h2>
              <div className="space-y-3.5">
                {project.futureImprovements.map((improvement, iIdx) => (
                  <div key={iIdx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-sky-400 mt-2 shrink-0" />
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {improvement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Navigation */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/40 transition"
          >
            <ArrowLeft className="w-4 h-4 text-sky-400" />
            <span>Back to Projects</span>
          </Link>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold text-slate-950 bg-sky-400 hover:bg-sky-300 transition shadow-sm"
              >
                <span>Open Live Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

      </div>
    </article>
  );
}
