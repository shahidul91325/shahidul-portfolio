"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { Menu, X, FileDown, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ["hero", "about", "skills", "projects", "experience", "education", "contact"];
      const scrollPos = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const navLinks = [
    { name: "About", href: "/#about", id: "about" },
    { name: "Skills", href: "/#skills", id: "skills" },
    { name: "Projects", href: "/#projects", id: "projects" },
    { name: "Education", href: "/#education", id: "education" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#060911]/90 backdrop-blur-md border-b border-sky-500/15 py-3 shadow-xl shadow-black/50"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            
            {/* Logo / Monogram */}
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-xl p-1 min-w-0"
              aria-label="MD Shahidul Islam Portfolio Homepage"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-sky-400 via-blue-600 to-indigo-700 flex items-center justify-center text-white font-black text-sm sm:text-base shadow-md shadow-sky-500/25 group-hover:scale-105 transition-transform shrink-0">
                <span>MSI</span>
              </div>
              <div className="flex flex-col text-left min-w-0">
                <span className="font-bold text-sm sm:text-base lg:text-lg text-white tracking-tight group-hover:text-sky-300 transition-colors leading-tight truncate">
                  {profileData.name}
                </span>
                <span className="text-[10px] sm:text-[11px] text-sky-400 font-semibold tracking-wide truncate">
                  Full-Stack Web Developer
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                      isActive
                        ? "text-sky-400 bg-sky-500/10 shadow-sm"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-sky-400 shadow-sm shadow-sky-400" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA & Actions — sm and above (tablet + desktop) */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={profileData.resumePath}
                download="MD_Shahidul_Islam_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-sky-400 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 hover:border-sky-400 transition-all duration-200 shadow-sm hover:shadow-sky-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 active:scale-95"
                aria-label="Download MD Shahidul Islam Resume (PDF)"
              >
                <FileDown className="w-4 h-4 text-sky-400" />
                <span>Resume</span>
              </a>

              <Link
                href="/#contact"
                className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-sky-400 to-cyan-300 hover:from-sky-300 hover:to-cyan-200 shadow-md shadow-sky-500/25 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 active:scale-95"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile-only avatar + hamburger (visible on mobile screens <sm, hidden at sm and above) */}
            <div className="flex sm:hidden items-center gap-2 shrink-0">
              {/* Circular profile avatar — 32-36px, object-fit cover, subtle border */}
              <div 
                className="relative w-[34px] h-[34px] rounded-full overflow-hidden border border-sky-400/50 ring-2 ring-sky-400/20 bg-slate-900 shrink-0" 
                title="MD Shahidul Islam – Profile Photo"
              >
                <Image
                  src={profileData.profilePhoto}
                  alt="MD Shahidul Islam – Profile Photo"
                  width={34}
                  height={34}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>

              <button
                type="button"
                onClick={toggleMenu}
                className="p-2 rounded-xl text-slate-200 hover:text-white bg-slate-900/90 border border-slate-800 hover:border-sky-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 transition shrink-0"
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-5 h-5 text-sky-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Tablet hamburger only (sm–lg), no avatar */}
            <div className="hidden sm:flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={toggleMenu}
                className="p-2.5 rounded-xl text-slate-200 hover:text-white bg-slate-900/90 border border-slate-800 hover:border-sky-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 transition"
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6 text-sky-400" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>

          {/* Mobile Navigation Dropdown */}
          {isOpen && (
            <div className="lg:hidden mt-3 p-4 rounded-3xl bg-[#090e1a]/95 backdrop-blur-xl border border-sky-500/25 shadow-2xl shadow-black/90">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={closeMenu}
                      className={`px-4 py-3 rounded-2xl text-base font-semibold transition flex items-center justify-between ${
                        isActive
                          ? "text-sky-300 bg-sky-500/15"
                          : "text-slate-200 hover:text-sky-400 hover:bg-white/5"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-sky-400" />}
                    </Link>
                  );
                })}

                <div className="pt-3 border-t border-slate-800/80 mt-2 flex flex-col gap-2.5">
                  <a
                    href={profileData.resumePath}
                    download="MD_Shahidul_Islam_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-sm font-bold text-sky-400 bg-sky-500/10 border border-sky-500/30 hover:bg-sky-500/20 transition"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>Download Resume (PDF)</span>
                  </a>

                  <Link
                    href="/#contact"
                    onClick={closeMenu}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-sm font-bold text-slate-950 bg-gradient-to-r from-sky-400 to-cyan-300 transition shadow-md shadow-sky-500/25"
                  >
                    <span>Get in Touch</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Backdrop overlay for mobile menu */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden"
          aria-hidden="true"
        />
      )}
    </>
  );
}
