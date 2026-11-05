"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import { profileData } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Certifications", href: "/#certifications" },
  { name: "Contact", href: "/#contact" },
];

export default function Footer() {
  // The year is read after mount in a deferred task: rendering `new Date()`
  // during prerender is rejected by Next.js 16, and a synchronous setState in
  // an effect is rejected by react-hooks/set-state-in-effect.
  const [currentYear, setCurrentYear] = useState("2026");

  useEffect(() => {
    const timer = window.setTimeout(() => setCurrentYear(String(new Date().getFullYear())), 0);
    return () => window.clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <Link href="/#hero" className="footer-brand" aria-label="MSI, back to top"><span className="brand-mark">MSI<span>.</span></span><span>{profileData.name}</span></Link>
          <p>Full-Stack Web Developer building thoughtful, responsive web applications from Bangladesh.</p>
          <Link href={profileData.resumeViewerPath} className="footer-resume-link">View resume <ArrowUpRight size={14} /></Link>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation"><span className="footer-label">Explore</span>{navLinks.map((link) => <Link key={link.name} href={link.href}>{link.name}</Link>)}</nav>

        <div className="footer-connect"><span className="footer-label">Connect</span><a href={`mailto:${profileData.email}`} className="footer-email"><Mail size={15} />{profileData.email}</a><div className="footer-socials">
          <a href={profileData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><GithubIcon className="w-[17px] h-[17px]" /></a>
          <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><LinkedinIcon className="w-[17px] h-[17px]" /></a>
          <button type="button" onClick={scrollToTop} aria-label="Back to top" title="Back to top"><ArrowUp size={16} /></button>
        </div></div>
      </div>
      <div className="footer-bottom"><span>© {currentYear} {profileData.name}</span><span>Designed and built with Next.js</span><Link href="/#hero">Back to top ↑</Link></div>
    </footer>
  );
}
