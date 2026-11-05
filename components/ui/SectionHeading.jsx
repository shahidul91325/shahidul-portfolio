export default function SectionHeading({ eyebrow, title, description, className = "" }) {
  return (
    <header className={`section-heading ${className}`.trim()} data-reveal>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  );
}
