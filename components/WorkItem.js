import Link from 'next/link';

export default function WorkItem({ title, image, alt, description, link }) {
  return (
    <article className="work-item">
      <img src={image} alt={alt} />
      <div className="body">
        <h2>{title}</h2>
        <p>{description}</p>
        {link && (
          <ul>
            <li>
              <Link href={link}>{link}</Link>
            </li>
          </ul>
        )}
      </div>
    </article>
  );
}
