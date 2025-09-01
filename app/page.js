import Head from 'next/head';
import Link from 'next/link';
import { FaXTwitter, FaGithub } from "react-icons/fa6"; 
import './globals.css'; // または styles フォルダに移動した場合は 'styles/contact.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>My WebSite</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

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

      <main>
        <h2 className="title">I'm nmw.</h2>
        <div className="cube-container">
          <div className="cube">
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </div>
        </div>
      </main>

      <footer>
        <p>&copy; 2025 My Website</p>
        <p>All rights reserved.</p>
        <div className="social-icons">
          <a href="https://x.com/mu_ye60941" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={28} />
          </a>
          <a href="https://github.com/yoguze" target="_blank" rel="noopener noreferrer">
            <FaGithub size={28} />
          </a>
        </div>
      </footer>
    </>
  );
}
