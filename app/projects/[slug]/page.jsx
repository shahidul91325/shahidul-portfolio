import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, ExternalLink, Layers3 } from "lucide-react";
import { projectsData } from "@/data/projects";
import { GithubIcon } from "@/components/Icons";
import PageTransition from "@/components/PageTransition";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectsData.find((item) => item.slug === slug);
  if (!project) return { title: "Project not found | Md. Shahidul Islam" };
  return {
    title: `${project.title} — ${project.subtitle} | Md. Shahidul Islam`,
    description: project.description,
    openGraph: { title: `${project.title} — Case Study`, description: project.description, images: [project.image] },
  };
}

export function generateStaticParams() {
  return projectsData.map(({ slug }) => ({ slug }));
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projectsData.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <PageTransition>
      <article className="case-page">
        <div className="case-page-glow" aria-hidden="true" />
        <div className="case-container">
          <Link href="/#projects" className="case-back rise-in" transitionTypes={["nav-back"]}><ArrowLeft size={15} /> Selected projects</Link>
          <header className="case-header">
            <div className="project-meta rise-in" style={{ "--delay": "70ms" }}><span>{project.category}</span><span className="project-meta-line" /><span>{project.number} / 02</span></div>
            <h1 className="rise-in" style={{ "--delay": "130ms" }}>{project.title}</h1>
            <p className="case-subtitle rise-in" style={{ "--delay": "200ms" }}>{project.subtitle}</p>
            <p className="case-tagline rise-in" style={{ "--delay": "260ms" }}>{project.tagline}</p>
            <div className="case-actions rise-in" style={{ "--delay": "330ms" }}>
              <a className="project-action project-action-primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live demo <ExternalLink size={14} /></a>
              <a className="project-action" href={project.frontendUrl || project.githubUrl} target="_blank" rel="noopener noreferrer"><GithubIcon className="w-[15px] h-[15px]" /> {project.backendUrl ? "Frontend repository" : "GitHub repository"}</a>
              {project.backendUrl && <a className="project-action" href={project.backendUrl} target="_blank" rel="noopener noreferrer"><GithubIcon className="w-[15px] h-[15px]" /> Backend repository</a>}
            </div>
          </header>

          <div className="case-image-frame" data-reveal><Image src={project.image} alt={`${project.title} interface screenshot`} fill sizes="(max-width: 900px) 100vw, 1120px" priority className="case-image" /></div>

          <div className="case-content-grid">
            <section className="case-copy surface-card" data-reveal>
              <span className="eyebrow">Overview</span>
              <h2>What it does</h2>
              <p>{project.overview}</p>
              <div className="case-divider" />
              <h3>Problem addressed</h3>
              <p>{project.problemStatement}</p>
              <div className="case-divider" />
              <h3>My contribution</h3>
              <p>{project.roleAndContributions}</p>
            </section>
            <section className="case-feature-panel surface-card" data-reveal style={{ "--delay": "110ms" }}>
              <span className="eyebrow">Product capabilities</span>
              <h2>Core features</h2>
              <ul className="case-feature-list">{project.keyFeatures.map((feature) => <li key={feature}><Check size={16} /><span>{feature}</span></li>)}</ul>
            </section>
          </div>

          <section className="case-stack-section">
            <div className="case-section-heading" data-reveal><span className="eyebrow"><Layers3 size={14} /> Technology</span><h2>Tools behind the product</h2></div>
            <div className="case-stack-grid">{project.techGroups.map((group, index) => <article className="case-stack-card" key={group.label} data-reveal style={{ "--delay": `${index * 90}ms` }}><h3>{group.label}</h3><div className="project-techs">{group.items.map((tech) => <span className="tech-pill" key={tech}>{tech}</span>)}</div></article>)}</div>
          </section>

          <footer className="case-footer" data-reveal><Link href="/#projects" className="case-back" transitionTypes={["nav-back"]}><ArrowLeft size={15} /> Back to all projects</Link><a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="case-live-link">Visit live project <ArrowUpRight size={16} /></a></footer>
        </div>
      </article>
    </PageTransition>
  );
}
