import Link from 'next/link';

export default function WorkItem({ title, image, alt, description, links = [] }) {
  return (
    <article className="work-item">
      <img src={image} alt={alt} />
      <div className="body">
        <h2>{title}</h2>
        <p>{description}</p>
        {links.length > 0 && (
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label ?? link.href}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
