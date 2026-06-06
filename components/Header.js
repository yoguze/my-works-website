import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/ability">Ability</Link></li>
          <li><Link href="/works">Works</Link></li>
          <li><Link href="/form">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
