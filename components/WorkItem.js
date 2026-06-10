import Link from 'next/link';

export default function WorkItem({
  title,
  category,
  image,
  alt,
  summary,
  highlights = [],
  highlightsLabel,
  techStack = [],
  links = [],
}) {
  return (
    <article className="work-item">
      <img src={image} alt={alt} />
      <div className="body">
        <div className="work-item-header">
          <h2>{title}</h2>
          <span className="work-category-badge">{category}</span>
        </div>

        <section className="work-section">
          <h3 className="work-section-title">概要</h3>
          <p className="work-summary">{summary}</p>
        </section>

        {highlights.length > 0 && (
          <section className="work-section">
            <h3 className="work-section-title">{highlightsLabel}</h3>
            <ul className="work-highlights">
              {highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </section>
        )}

        {techStack.length > 0 && (
          <section className="work-section">
            <h3 className="work-section-title">使用技術</h3>
            <ul className="work-tech-tags">
              {techStack.map((tech) => (
                <li key={tech} className="work-tech-tag">
                  {tech}
                </li>
              ))}
            </ul>
          </section>
        )}

        {links.length > 0 && (
          <section className="work-section">
            <h3 className="work-section-title">リンク</h3>
            <ul className="work-links">
              {links.map((url) => (
                <li key={url}>
                  <Link href={url}>{url}</Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  );
}
