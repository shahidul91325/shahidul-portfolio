import Image from "next/image";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { 
  FileDown, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Sparkles,
  Code2,
  CheckCircle2,
  Terminal
} from "lucide-react";

export default function Hero() {
  const coreTech = [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Background ambient glows */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 w-full max-w-[700px] h-[350px] sm:h-[500px] lg:h-[700px] bg-gradient-to-tr from-sky-500/20 via-blue-600/15 to-transparent rounded-full blur-3xl -z-10"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 -right-48 w-72 sm:w-[450px] h-72 sm:h-[450px] bg-sky-500/10 rounded-full blur-3xl -z-10"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-0 -left-48 w-72 sm:w-[450px] h-72 sm:h-[450px] bg-blue-600/10 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-7">
            
            {/* Status & Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs sm:text-sm font-semibold shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <span>Available for Full-Stack Opportunities</span>
            </div>

            {/* Location & Name */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1 text-slate-400 text-xs sm:text-sm font-medium">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="text-slate-300 font-semibold">{profileData.location}</span>
                </div>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <span className="text-slate-400">Open to Remote & On-site</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1]">
                Hi, I'm{" "}
                <span className="text-gradient-cyan">
                  {profileData.name}
                </span>
              </h1>

              <p className="text-xl sm:text-2xl font-bold text-sky-300 tracking-tight">
                {profileData.designation}
              </p>
            </div>

            {/* Bio Introduction */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Specializing in building modern, responsive, and performance-driven web applications with{" "}
              <span className="text-white font-semibold">React</span>,{" "}
              <span className="text-white font-semibold">Next.js</span>, and{" "}
              <span className="text-white font-semibold">Node.js</span>. 
              Dedicated to clean code architecture, fluid interfaces, and practical problem solving.
            </p>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1 hidden sm:inline">
                Core Stack:
              </span>
              {coreTech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-xl text-xs font-semibold bg-slate-900/90 text-sky-300 border border-sky-500/25 shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Main CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-2 w-full sm:w-auto">
              <a
                href={profileData.resumePath}
                download="MD_Shahidul_Islam_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-300 hover:from-sky-300 hover:to-cyan-200 shadow-lg shadow-sky-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 min-h-[48px]"
                aria-label="Download MD Shahidul Islam Resume PDF"
              >
                <FileDown className="w-5 h-5 text-slate-950" />
                <span>Download Resume</span>
              </a>

              <Link
                href="/#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-sky-500/50 shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 min-h-[48px]"
              >
                <span>Featured Projects</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </Link>

              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-300 hover:text-white hover:bg-white/5 transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 min-h-[48px]"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Contact Me</span>
              </Link>
            </div>

            {/* Social Links & Trust Indicators */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 w-full justify-center lg:justify-start">
              <div className="flex items-center gap-3">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-white transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 hover:scale-105"
                  aria-label="MD Shahidul Islam GitHub Profile (opens in new tab)"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/40 text-sky-400 hover:text-sky-300 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 hover:scale-105"
                  aria-label="MD Shahidul Islam LinkedIn Profile (opens in new tab)"
                >
                  <LinkedinIcon className="w-5 h-5 text-sky-400" />
                </a>

                <a
                  href={`mailto:${profileData.email}`}
                  className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-white transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 hover:scale-105"
                  aria-label={`Send email to ${profileData.email}`}
                >
                  <Mail className="w-5 h-5 text-cyan-400" />
                </a>
              </div>

              <div className="h-4 w-px bg-slate-800 hidden sm:block" />

              <div className="text-xs text-slate-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-medium text-slate-300">Clean Code & High Performance Standards</span>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Photo Card */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative group max-w-[300px] sm:max-w-[380px] lg:max-w-[420px] w-full animate-float">
              
              {/* Outer decorative ambient glow */}
              <div 
                aria-hidden="true" 
                className="absolute -inset-2 bg-gradient-to-r from-sky-400 via-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition duration-500 -z-10"
              />

              <div className="relative rounded-3xl p-3 sm:p-4 bg-gradient-to-b from-[#0f172a] via-[#090e1a] to-[#060911] border border-sky-500/30 shadow-2xl overflow-hidden card-hover-effect">
                
                {/* Photo frame */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center">
                  <Image
                    src={profileData.profilePhoto}
                    alt={`${profileData.name} - ${profileData.designation}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                    priority
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle dark gradient overlay at base for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060911] via-transparent to-transparent opacity-65" />
                  
                  {/* Bottom badge overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-sky-500/25 text-left shadow-lg">
                    <p className="text-[11px] font-bold text-sky-400 tracking-wider uppercase">
                      Full-Stack Craftsman
                    </p>
                    <p className="text-base font-extrabold text-white">
                      {profileData.name}
                    </p>
                  </div>
                </div>

                {/* Mini Stat counters below photo */}
                <div className="grid grid-cols-2 gap-2.5 mt-3">
                  <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                    <p className="text-xs text-slate-400 font-medium">Focus Area</p>
                    <p className="text-sm font-extrabold text-sky-400 mt-0.5">Next.js & React</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                    <p className="text-xs text-slate-400 font-medium">Based in</p>
                    <p className="text-sm font-extrabold text-slate-200 mt-0.5">Dhaka, BD</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
