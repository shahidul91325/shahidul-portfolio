import { educationData } from "@/data/education";
import { GraduationCap, Award, Clock, Building, Sparkles } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-28 relative bg-[#060911] overflow-hidden">
      {/* Background glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Education & Academic Credentials
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Transparent and verified academic history detailing vocational excellence, science background, and ongoing higher education.
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, index) => {
            return (
              <div
                key={index}
                className={`p-5 sm:p-9 rounded-3xl border transition-all duration-300 shadow-xl relative overflow-hidden card-hover-effect ${
                  edu.isCurrent
                    ? "bg-gradient-to-r from-[#0a1428] via-[#091122] to-[#060b16] border-sky-500/40 glow-cyan"
                    : "bg-[#090f1d]/85 border-slate-800/90 hover:border-slate-700 hover:bg-[#0c1426]"
                }`}
              >
                {/* Top Badge and Status */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide ${
                      edu.isCurrent
                        ? "bg-sky-500/20 text-sky-300 border border-sky-400/40"
                        : "bg-slate-900 text-slate-300 border border-slate-800"
                    }`}
                  >
                    {edu.isCurrent && (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
                      </span>
                    )}
                    <span>{edu.badge}</span>
                  </span>

                  <span className="text-xs sm:text-sm text-sky-400 font-bold flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </span>
                </div>

                {/* Main Titles */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {edu.degree}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm text-sky-300 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Building className="w-4 h-4 shrink-0 text-slate-400" />
                      <span>{edu.institution}</span>
                    </span>

                    {edu.department && (
                      <>
                        <span className="text-slate-600">•</span>
                        <span>Department: {edu.department}</span>
                      </>
                    )}

                    {edu.subject && (
                      <>
                        <span className="text-slate-600">•</span>
                        <span>Subject: {edu.subject}</span>
                      </>
                    )}

                    {edu.board && (
                      <>
                        <span className="text-slate-600">•</span>
                        <span>Board: {edu.board}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Score / GPA if available */}
                {edu.gpa && (
                  <div className="mt-3.5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-bold text-emerald-400 shadow-xs">
                    <Award className="w-4 h-4" />
                    <span>GPA: {edu.gpa}</span>
                  </div>
                )}

                {/* Description */}
                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {edu.description}
                </p>

                {/* Status Notice for current degree */}
                {edu.isCurrent && (
                  <div className="mt-5 pt-3.5 border-t border-sky-500/20 text-xs text-sky-300/95 flex items-center gap-2 font-medium">
                    <span className="font-bold uppercase tracking-wider text-sky-400">Status Notice:</span>
                    <span>Degree is currently ongoing / in progress, not presented as completed.</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
