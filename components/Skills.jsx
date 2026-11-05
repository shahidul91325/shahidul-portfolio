import { Braces, Code2, Component, Database, Server, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillsData } from "@/data/skills";

const categoryIcons = [Code2, Component, Server, Database, Braces, Sparkles];

export default function Skills() {
  return (
    <section id="skills" className="section-wrap skills-section">
      <SectionHeading
        eyebrow="Technical skills"
        title={<>A practical toolkit for building <span className="text-gradient-cyan">end to end.</span></>}
        description="Technologies and concepts I use across interface development, application logic, data, and AI-assisted workflows."
      />

      <div className="skills-grid">
        {skillsData.map((group, index) => {
          const Icon = categoryIcons[index];
          return (
            <article className="skill-panel" data-reveal style={{ "--delay": `${index * 90}ms` }} key={group.category}>
              <div className="skill-group-heading">
                <span className="icon-tile"><Icon size={19} aria-hidden="true" /></span>
                <div className="skill-group-title">
                  <div className="skill-group-meta"><span>0{index + 1}</span><span className="skill-group-rule" /></div>
                  <h3>{group.category}</h3>
                  <p>{group.description}</p>
                </div>
              </div>
              <ul className="skill-list" aria-label={group.category}>
                {group.skills.map((skill, skillIndex) => <li className="skill-chip" key={skill} style={{ "--chip-delay": `${skillIndex * 35}ms` }}>
                  <span className="skill-chip-dot" aria-hidden="true" />{skill}
                </li>)}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
