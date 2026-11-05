"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, FileText, Menu, X } from "lucide-react";
import { profileData } from "@/data/profile";

const navLinks = [
  { name: "Home", href: "/#hero", id: "hero" },
  { name: "About", href: "/#about", id: "about" },
  { name: "Skills", href: "/#skills", id: "skills" },
  { name: "Projects", href: "/#projects", id: "projects" },
  { name: "Contact", href: "/#contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const updatePosition = () => {
      setScrolled(window.scrollY > 16);
      const current = navLinks.reduce((active, link) => {
        const section = document.getElementById(link.id);
        return section && section.getBoundingClientRect().top <= 150 ? link.id : active;
      }, "hero");
      setActiveSection(current);
    };
    const closeOnEscape = (event) => event.key === "Escape" && setIsOpen(false);
    updatePosition();
    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);
  const resumeLink = (
    <a href={profileData.resumePath} download="MD_Shahidul_Islam_Resume.pdf" className="nav-resume" onClick={closeMenu}>
      <FileText size={16} aria-hidden="true" /> <span>Resume</span>
    </a>
  );

  return (
    <>
      <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
        <div className="nav-inner">
          <Link href="/#hero" className="brand-link" onClick={closeMenu} aria-label="MSI, home">
            <span className="brand-mark">MSI<span>.</span></span>
            <span className="brand-copy"><strong>Md. Shahidul Islam</strong><small>Full-Stack Developer</small></span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map((link) => <Link key={link.id} href={link.href} aria-current={activeSection === link.id ? "location" : undefined} className={`nav-link ${activeSection === link.id ? "nav-link-active" : ""}`}>{link.name}</Link>)}
          </nav>

          <div className="desktop-actions">
            {resumeLink}
            <Link href="/#contact" className="nav-contact">Let&apos;s connect <ArrowUpRight size={15} /></Link>
          </div>

          <button className="menu-toggle" type="button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}>
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {isOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((link) => <Link key={link.id} href={link.href} onClick={closeMenu} aria-current={activeSection === link.id ? "location" : undefined} className={`mobile-nav-link ${activeSection === link.id ? "nav-link-active" : ""}`}>{link.name}</Link>)}
          {resumeLink}
          <Link href="/#contact" onClick={closeMenu} className="nav-contact mobile-contact">Let&apos;s connect <ArrowUpRight size={15} /></Link>
        </nav>}
      </header>
      {isOpen && <button className="nav-backdrop" type="button" onClick={closeMenu} aria-label="Close navigation menu" />}
    </>
  );
}
