import { FaXTwitter, FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer>
      <p>&copy; 2025 My Website</p>
      <p>All rights reserved.</p>
      <div className="social-icons">
        <a href="https://x.com/nmw_2025" target="_blank" rel="noopener noreferrer">
          <FaXTwitter size={28} />
        </a>
        <a href="https://github.com/yoguze" target="_blank" rel="noopener noreferrer">
          <FaGithub size={28} />
        </a>
      </div>
    </footer>
  );
}
