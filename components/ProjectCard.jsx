import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

function ExternalAction({ href, children, primary = false }) {
  return <a className={`project-action ${primary ? "project-action-primary" : ""}`} href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
}

export default function ProjectCard({ project, index = 0 }) {
  const isPrimary = index === 0;
  return (
    <article className={`project-showcase surface-card ${isPrimary ? "project-showcase-primary" : ""}`} data-reveal style={{ "--delay": `${index * 120}ms` }}>
      <Link href={`/projects/${project.slug}`} className="project-image-link" aria-label={`Read the ${project.title} case study`} transitionTypes={["nav-forward"]}>
        <div className="project-image-frame">
          <Image src={project.image} alt={`${project.title} application screenshot`} fill sizes="(max-width: 767px) 100vw, 52vw" className="project-image" priority={isPrimary} />
          <span className="project-image-index">{project.number} / 02</span>
          <span className="project-image-open"><ArrowRight size={17} /></span>
        </div>
      </Link>
      <div className="project-info">
        <div className="project-meta"><span>{project.category}</span><span className="project-meta-line" /><span>0{index + 1}</span></div>
        <h3><Link href={`/projects/${project.slug}`} transitionTypes={["nav-forward"]}>{project.title}<span className="project-title-dash"> — </span>{project.subtitle}</Link></h3>
        <p className="project-summary">{project.description}</p>
        <ul className="project-highlights">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
        <div className="project-techs" aria-label="Technology stack">{project.techStack.slice(0, isPrimary ? 8 : 7).map((tech) => <span className="tech-pill" key={tech}>{tech}</span>)}</div>
        <div className="project-actions">
          <ExternalAction href={project.liveUrl} primary>Live demo <ExternalLink size={14} /></ExternalAction>
          <ExternalAction href={project.frontendUrl || project.githubUrl}><GithubIcon className="w-[15px] h-[15px]" /> {isPrimary ? "Frontend" : "Source"}</ExternalAction>
          {project.backendUrl && <ExternalAction href={project.backendUrl}><GithubIcon className="w-[15px] h-[15px]" /> Backend</ExternalAction>}
          <Link className="project-case-link" href={`/projects/${project.slug}`} transitionTypes={["nav-forward"]}>Case study <ArrowRight size={15} /></Link>
        </div>
      </div>
    </article>
  );
}
