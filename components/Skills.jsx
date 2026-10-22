import { skillsData } from "@/data/skills";
import { GithubIcon } from "@/components/Icons";
import { 
  Sparkles, 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  CheckCircle, 
  Layers, 
  FileCode, 
  Palette, 
  ShieldCheck, 
  Network, 
  HardDrive, 
  GitBranch, 
  Terminal, 
  Box, 
  Cloud 
} from "lucide-react";

export default function Skills() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Frontend":
        return Code2;
      case "Backend":
        return Server;
      case "Database":
        return Database;
      case "Tools & Workflow":
        return Wrench;
      default:
        return Sparkles;
    }
  };

  const getSkillIcon = (name) => {
    switch (name) {
      case "React":
      case "Next.js":
        return Layers;
      case "Tailwind CSS":
        return Palette;
      case "HTML5":
      case "CSS3":
      case "JavaScript (ES6+)":
        return FileCode;
      case "Node.js":
        return Server;
      case "REST APIs":
        return Network;
      case "Authentication":
        return ShieldCheck;
      case "MongoDB":
      case "PostgreSQL":
        return HardDrive;
      case "Git":
        return GitBranch;
      case "GitHub":
        return GithubIcon;
      case "VS Code":
        return Terminal;
      case "npm":
        return Box;
      case "Vercel":
        return Cloud;
      default:
        return CheckCircle;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-[#060911]/95 bg-dots-pattern overflow-hidden">
      {/* Background glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Core Technologies & Workflow Stack
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Practical development tools and frameworks utilized to build responsive, scalable, and maintainable web applications.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 items-stretch">
          {skillsData.map((categoryGroup, index) => {
            const CatIcon = getCategoryIcon(categoryGroup.category);
            return (
              <div
                key={index}
                className="p-5 sm:p-8 rounded-3xl bg-[#090f1d]/85 border border-slate-800/90 hover:border-sky-500/35 hover:bg-[#0c1426] transition-all duration-300 shadow-xl flex flex-col justify-between h-full group card-hover-effect"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 group-hover:scale-105 group-hover:bg-sky-500/20 group-hover:text-sky-300 transition-all">
                        <CatIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                          {categoryGroup.category}
                        </h3>
                        <p className="text-xs text-slate-300">
                          {categoryGroup.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-900 text-sky-400 border border-slate-800 shadow-xs">
                      {categoryGroup.skills.length} Items
                    </span>
                  </div>

                  {/* Skills Pills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6">
                    {categoryGroup.skills.map((skill, sIdx) => {
                      const SkillIcon = getSkillIcon(skill.name);
                      return (
                        <div
                          key={sIdx}
                          className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-sky-500/40 hover:bg-slate-800/80 transition-all duration-200 flex flex-col items-start gap-1.5 group/skill"
                        >
                          <div className="flex items-center gap-2 text-sky-400 group-hover/skill:text-sky-300">
                            <SkillIcon className="w-4 h-4 shrink-0" />
                            <span className="text-sm font-bold text-slate-100 truncate">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-[11px] font-semibold text-slate-400 group-hover/skill:text-slate-300">
                            {skill.level}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-medium text-slate-300">Verified in Production & Practice</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Tested</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
