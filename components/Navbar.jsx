"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, FileText, Menu, X } from "lucide-react";
import { profileData } from "@/data/profile";

const navLinks = [
  { name: "Home", href: "/#hero", id: "hero" },
  { name: "About", href: "/#about", id: "about" },
  { name: "Skills", href: "/#skills", id: "skills" },
  { name: "Projects", href: "/#projects", id: "projects" },
  { name: "Certifications", href: "/#certifications", id: "certifications" },
  { name: "Contact", href: "/#contact", id: "contact" },
];

const HOME_PATH = "/";
const PROJECTS_PATH = "/projects";
// Distance below the viewport top at which a section counts as the current one.
// Matches the fixed header height plus its breathing room.
const ACTIVE_OFFSET = 150;

// Route-based active state: only project case study routes belong to "Projects".
function routeSection(pathname) {
  if (pathname === PROJECTS_PATH || pathname.startsWith(`${PROJECTS_PATH}/`)) return "projects";
  return null;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [homeSection, setHomeSection] = useState("hero");
  const pathname = usePathname();

  const isHome = pathname === HOME_PATH;
  const fallbackSection = routeSection(pathname);
  // Exactly one item can be active: the route answer wins off the homepage,
  // the scroll answer only applies to the homepage itself.
  const activeSection = isHome ? homeSection : fallbackSection;

  useEffect(() => {
    let frame = 0;
    let settleTimer = 0;

    const updatePosition = () => {
      setScrolled(window.scrollY > 16);
      if (!isHome) return;
      // Walk the sections in document order and keep the last one that has
      // crossed the active line while still drawing inside the viewport, so a
      // section that has scrolled fully past can never stay highlighted.
      let current = null;
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        if (rect.top <= ACTIVE_OFFSET && rect.bottom > 0) current = link.id;
      }
      setHomeSection(current);
    };

    // Recompute once now, then again after paint and after a short delay so
    // direct loads, hash jumps, scroll restoration and image-driven layout
    // changes all settle on the right item.
    const scheduleUpdate = () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(settleTimer);
      frame = requestAnimationFrame(updatePosition);
      settleTimer = window.setTimeout(updatePosition, 280);
    };

    const closeOnEscape = (event) => event.key === "Escape" && setIsOpen(false);

    updatePosition();
    scheduleUpdate();
    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(settleTimer);
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isHome]);

  const closeMenu = () => setIsOpen(false);
  const resumeLink = (
    <Link href={profileData.resumeViewerPath} className="nav-resume" onClick={closeMenu}>
      <FileText size={16} aria-hidden="true" /> <span>Resume</span>
    </Link>
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
