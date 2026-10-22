"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { Mail, ArrowUp, FileDown, Heart } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState("2026");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Education", href: "/#education" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="w-full bg-[#04060c] border-t border-slate-800/90 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
          
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-3 text-center md:text-left">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group"
              aria-label="MD Shahidul Islam Portfolio"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-white font-black text-[11px] shadow-sm group-hover:scale-105 transition-transform">
                <span>MSI</span>
              </div>
              <span className="font-bold text-lg text-white group-hover:text-sky-300 transition-colors">
                {profileData.name}
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto md:mx-0 leading-relaxed font-normal">
              Full-Stack Web Developer crafting modern, accessible, and high-performance digital solutions from Dhaka, Bangladesh.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm font-semibold text-slate-300 hover:text-sky-400 transition-colors py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Icons & Back To Top */}
          <div className="md:col-span-3 flex items-center justify-center md:justify-end gap-3">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label="Shahidul Islam GitHub Profile (opens in new tab)"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-sky-400 hover:text-sky-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label="Shahidul Islam LinkedIn Profile (opens in new tab)"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${profileData.email}`}
              className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label={`Send email to ${profileData.email}`}
            >
              <Mail className="w-4 h-4 text-cyan-400" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-400 hover:text-sky-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer"
              aria-label="Scroll back to top of the page"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright Line */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p className="font-normal">
            © {currentYear} {profileData.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={profileData.resumePath}
              download="MD_Shahidul_Islam_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition flex items-center gap-1 font-semibold text-slate-300"
            >
              <FileDown className="w-3.5 h-3.5 text-sky-400" />
              <span>Resume (PDF)</span>
            </a>
            <span>•</span>
            <span className="text-slate-400">
              Built with Next.js & Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
