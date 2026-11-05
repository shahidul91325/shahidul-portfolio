import { Blocks, Braces, Database, LockKeyhole, Sparkles } from "lucide-react";

const focusAreas = [
  { icon: Blocks, number: "01", title: "Product interfaces", copy: "Responsive frontend experiences shaped around clear information and straightforward interaction." },
  { icon: Braces, number: "02", title: "Application logic", copy: "Full-stack features that connect frontend flows with APIs, authentication, and practical business rules." },
  { icon: Database, number: "03", title: "Data & security", copy: "Database-backed applications with validated requests and careful handling of user access." },
];

export default function About() {
  return (
    <section id="about" className="about-section section-wrap">
      <div className="about-heading" data-reveal>
        <span className="eyebrow"><Sparkles size={14} /> About me</span>
        <h2>From the first screen<br />to the <span className="text-gradient-cyan">working system.</span></h2>
      </div>
      <div className="about-content">
        <div className="about-intro surface-card" data-reveal style={{ "--delay": "90ms" }}>
          <p className="about-lead">I&apos;m Md. Shahidul Islam, a full-stack developer focused on building practical web applications from interface to backend.</p>
          <p>I work across frontend and server-side development: shaping user flows, integrating REST APIs, managing database-backed features, and implementing authentication and request validation. I enjoy breaking down real-world problems into clear, maintainable product features.</p>
          <p>I also use AI-assisted development tools as part of my workflow, while reviewing and refining the code and product decisions they help produce.</p>
          <div className="about-practice"><LockKeyhole size={16} /><span>Interfaces</span><i /><span>APIs</span><i /><span>Data</span><i /><span>Authentication</span></div>
        </div>
        <div className="about-focus-list">
          {focusAreas.map(({ icon: Icon, number, title, copy }, index) => <article className="focus-card surface-card-interactive" key={number} data-reveal style={{ "--delay": `${140 + index * 80}ms` }}>
            <span className="focus-icon"><Icon size={19} /></span>
            <div><div className="focus-meta"><span>{number}</span><span className="focus-rule" /></div><h3>{title}</h3><p>{copy}</p></div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
