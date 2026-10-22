import { profileData } from "@/data/profile";
import { 
  Code2, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Layout, 
  Zap, 
  Terminal 
} from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Layout,
      title: "Responsive & Mobile-First UI",
      description: "Crafting pixel-perfect, accessible, and mobile-optimized interfaces that feel responsive and smooth across all device viewports."
    },
    {
      icon: Layers,
      title: "Full-Stack Web Architecture",
      description: "Seamlessly connecting interactive frontend components with clean backend REST APIs, authentication, and structured databases."
    },
    {
      icon: Zap,
      title: "Performance & Clean Code",
      description: "Writing lightweight, maintainable code structured for fast page loads, core web vitals, and effortless long-term scalability."
    },
    {
      icon: Terminal,
      title: "Practical Problem Solving",
      description: "Translating real-world requirements into dependable digital products through iterative engineering and rigorous testing."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative bg-[#060911] overflow-hidden">
      {/* Decorative background glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 left-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Architecting Purposeful Web Applications With Clean Code
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Dedicated Full-Stack Developer with a relentless drive for accessible interfaces, robust APIs, and practical web solutions.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Bio Story Card */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="p-5 sm:p-9 rounded-3xl bg-[#090f1d]/85 border border-slate-800/90 hover:border-sky-500/30 transition-all duration-300 shadow-xl space-y-5 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5 mb-5">
                  <Code2 className="w-6 h-6 text-sky-400" />
                  <span>My Journey & Development Philosophy</span>
                </h3>
                
                <div className="space-y-4">
                  {profileData.aboutBio.map((paragraph, index) => (
                    <p key={index} className="text-slate-300 text-base sm:text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-300">
                <span className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Semantic HTML5 & JSX</span>
                </span>
                <span className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Tailwind CSS Styling</span>
                </span>
                <span className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Next.js App Router Architecture</span>
                </span>
              </div>
            </div>

            {/* Quick Stat Pill Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {profileData.stats.map((stat, i) => (
                <div 
                  key={i} 
                  className="p-4 sm:p-5 rounded-2xl bg-[#090f1d]/90 border border-slate-800/90 text-center hover:border-sky-500/40 hover:bg-[#0d162a] transition-all card-hover-effect"
                >
                  <p className="text-2xl sm:text-3xl font-black text-sky-400 tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Pillars / Highlights */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-5 sm:p-6 rounded-3xl bg-[#090f1d]/80 border border-slate-800/90 hover:border-sky-500/35 hover:bg-[#0c1426] transition-all duration-300 shadow-md flex items-start gap-4 group flex-1"
                >
                  <div className="p-3 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0 group-hover:scale-110 group-hover:bg-sky-500/20 group-hover:text-sky-300 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
