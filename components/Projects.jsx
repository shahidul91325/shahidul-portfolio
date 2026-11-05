import { projectsData } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section-wrap projects-section">
      <SectionHeading
        eyebrow="Selected work"
        title={<>Products built to solve <span className="text-gradient-cyan">practical problems.</span></>}
        description="Two full-stack projects, with their core workflows, technology choices, and source code available to explore."
      />
      <div className="projects-list">
        {projectsData.filter((project) => project.featured).map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
      </div>
    </section>
  );
}
