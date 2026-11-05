import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, FileText, Mail, MapPin, MoveUpRight } from "lucide-react";
import { profileData } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

const stack = ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"];

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy rise-in">
          <div className="hero-location"><MapPin size={15} /><span>{profileData.location}</span><span className="location-separator" /><span>Building for the web</span></div>
          <p className="hero-kicker"><span className="kicker-line" />Hello, I&apos;m</p>
          <h1><span className="hero-name">Md. Shahidul<br className="desktop-break" /> Islam</span><span className="hero-title">Full-Stack Web Developer</span></h1>
          <p className="hero-intro">I build modern, responsive, and scalable web applications with <strong>React, Next.js, Node.js, and MongoDB.</strong> I enjoy solving real-world problems and turning thoughtful ideas into useful products.</p>

          <div className="hero-actions">
            <Link href="/#contact" className="button-primary">Let&apos;s connect <ArrowRight size={17} /></Link>
            <Link href="/#projects" className="button-secondary">Explore projects <ArrowDown size={16} /></Link>
            <a href={profileData.resumePath} download="MD_Shahidul_Islam_Resume.pdf" className="button-quiet"><FileText size={16} /> View resume</a>
          </div>

          <div className="hero-footer">
            <div className="hero-socials" aria-label="Social profiles">
              <a href={profileData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><GithubIcon className="w-[17px] h-[17px]" /></a>
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><LinkedinIcon className="w-[17px] h-[17px]" /></a>
              <a href={`mailto:${profileData.email}`} aria-label={`Email ${profileData.email}`}><Mail size={18} /></a>
            </div>
            <div className="hero-stack"><span className="stack-label">Working with</span>{stack.map((tech) => <span className="stack-chip" key={tech}>{tech}</span>)}</div>
          </div>
        </div>

        <div className="hero-visual rise-in" style={{ "--delay": "130ms" }}>
          <div className="visual-orbit orbit-one" aria-hidden="true" />
          <div className="visual-orbit orbit-two" aria-hidden="true" />
          <div className="visual-card">
            <div className="visual-topline"><span className="visual-status"><i /> Developer portfolio</span><span className="visual-index">MSI / 01</span></div>
            <div className="portrait-frame">
              <Image src={profileData.profilePhoto} alt={`${profileData.name}, ${profileData.designation}`} fill sizes="(max-width: 768px) 78vw, 430px" priority className="portrait-image" />
              <div className="portrait-shade" />
              <div className="portrait-caption"><span>Based in Bangladesh</span><strong>{profileData.name}</strong></div>
            </div>
            <div className="visual-bottomline"><span>Frontend <b>+</b> Backend</span><span>Curious by practice <MoveUpRight size={14} /></span></div>
          </div>
          <div className="floating-note note-top"><span className="note-glyph">&lt;/&gt;</span><span>Build with intent</span></div>
          <div className="floating-note note-bottom"><span className="note-dot" /><span>Full-stack development</span></div>
        </div>
      </div>
      <a className="hero-scroll" href="#about"><span>Scroll to explore</span><ArrowDown size={14} /></a>
    </section>
  );
}
