import { Award, BookOpenCheck, Check, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ProfessionalDevelopment() {
  return (
    <section id="certifications" className="section-wrap development-section">
      <SectionHeading
        eyebrow="Professional development"
        title={<>Professional Development <span className="text-gradient-cyan">& Course Completion</span></>}
        description="A completed course supporting my practical full-stack engineering work."
      />
      <article className="course-card surface-card surface-card-interactive" data-reveal style={{ "--delay": "90ms" }}>
        <div className="course-art" aria-hidden="true">
          <div className="course-orbit course-orbit-one" />
          <div className="course-orbit course-orbit-two" />
          <div className="course-emblem"><BookOpenCheck size={35} strokeWidth={1.45} /></div>
          <span className="course-emblem-spark"><Sparkles size={16} /></span>
          <span className="course-art-label">PRACTICE / LEARN / BUILD</span>
        </div>
        <div className="course-details">
          <div className="course-status"><Check size={13} /> Completed</div>
          <span className="eyebrow">Course completion</span>
          <h3>AI-Driven Full Stack Engineering</h3>
          <p className="course-provider">Programming Hero</p>
          <div className="course-meta-row">
            <span><Award size={15} /> Batch 14A</span>
            <span className="course-meta-separator" />
            <span>Completed</span>
          </div>
        </div>
      </article>
    </section>
  );
}
