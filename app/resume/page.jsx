import Link from "next/link";
import { ArrowLeft, Download, ExternalLink, FileText } from "lucide-react";
import { profileData } from "@/data/profile";

export const metadata = {
  title: "Resume | Md. Shahidul Islam",
  description: "View or download Md. Shahidul Islam's resume.",
};

export default function ResumePage() {
  return (
    <section className="resume-page">
      <div className="resume-container">
        <Link href="/#hero" className="case-back"><ArrowLeft size={15} /> Back to portfolio</Link>
        <header className="resume-header">
          <div className="resume-heading-copy">
            <span className="eyebrow"><FileText size={14} /> Resume</span>
            <h1>Md. Shahidul Islam</h1>
            <p>Full-Stack Web Developer <span /> Bangladesh</p>
          </div>
          <div className="resume-actions">
            <a className="project-action project-action-primary" href={profileData.resumePath} download="MD_Shahidul_Islam_Resume.pdf"><Download size={15} /> Download Resume</a>
            <a className="project-action" href={profileData.resumePath} target="_blank" rel="noopener noreferrer"><ExternalLink size={14} /> Open in new tab</a>
          </div>
        </header>

        <div className="resume-viewer-frame">
          <iframe className="resume-iframe" src={`${profileData.resumePath}#view=FitH`} title="Md. Shahidul Islam resume PDF" />
        </div>
        <p className="resume-fallback">If the PDF viewer is unavailable in your browser, <a href={profileData.resumePath} target="_blank" rel="noopener noreferrer">open the resume PDF</a> or use the download button above.</p>
      </div>
    </section>
  );
}
