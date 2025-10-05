"use client";

import Head from 'next/head';
import Link from 'next/link';
import './form.css'; // または styles フォルダに移動した場合は 'styles/contact.css'
import { FaXTwitter, FaGithub } from "react-icons/fa6"; 
import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  // 入力変更時
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // 送信処理
  const sendEmail = (e) => {
    e.preventDefault();

    // EmailJSに送信
        emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      .then(() => {
        setStatus("送信しました！ありがとうございます。");
        setForm({ name: "", email: "", title: "", message: "" });
      })
      .catch(() => {
        setStatus("送信に失敗しました。時間を置いて再試行してください。");
      });
  };
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
      <div className="contact-container">
        <h1>Contact Me</h1>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="お名前"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="メールアドレス"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="title"
            placeholder="件名"
            value={form.title}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="お問い合わせ内容"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit">送信</button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div> 
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
    </>
  );
}