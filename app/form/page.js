"use client";

import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './form.css';
import { useState } from "react";
import emailjs from "emailjs-com";

const initialContactFormData = {
  name: "",
  email: "",
  title: "",
  message: "",
};

export default function ContactPage() {
  const [contactFormData, setContactFormData] = useState(initialContactFormData);
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        contactFormData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSubmissionMessage("送信しました！ありがとうございます。");
        setContactFormData(initialContactFormData);
      })
      .catch(() => {
        setSubmissionMessage("送信に失敗しました。時間を置いて再試行してください。");
      });
  };

  return (
    <>
      <Head>
        <title>My WebSite</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />
      <div className="contact-container">
        <h1>Contact Me</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="name"
            placeholder="お名前"
            value={contactFormData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="メールアドレス"
            value={contactFormData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="title"
            placeholder="件名"
            value={contactFormData.title}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="message"
            placeholder="お問い合わせ内容"
            value={contactFormData.message}
            onChange={handleInputChange}
            required
          />
          <button type="submit">送信</button>
        </form>
        {submissionMessage && <p className="status-message">{submissionMessage}</p>}
      </div>
      <Footer />
    </>
  );
}
