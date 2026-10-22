import { practicalExperienceData } from "@/data/experience";
import { Sparkles, Calendar, MapPin, CheckCircle2, Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 relative bg-[#060911]/95">
      {/* Background glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Hands-on Engineering & Web Development
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Practical development experience gained through architecting real-world applications, responsive user interfaces, and modular backend code.
          </p>
        </div>

        {/* Experience Timeline / Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {practicalExperienceData.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-9 rounded-3xl bg-[#090f1d]/85 border border-slate-800/90 hover:border-sky-500/35 transition-all duration-300 shadow-xl relative group card-hover-effect"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 pb-5 border-b border-slate-800/80">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-500/10 text-sky-400 border border-sky-500/25 mb-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{item.type}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {item.role}
                  </h3>
                </div>

                <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs text-slate-300">
                  <span className="flex items-center gap-1.5 font-bold text-sky-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-400 font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {item.summary}
              </p>

              {/* Highlights List */}
              <div className="mt-5 space-y-3">
                {item.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <span className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
