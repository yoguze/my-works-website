import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';
import './form.css';

export const metadata = {
  title: "Contact | NMW",
  description: "お問い合わせフォーム",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactForm />
      <Footer />
    </>
  );
}
