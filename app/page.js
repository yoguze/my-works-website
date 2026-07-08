import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

export const metadata = {
  title: "Home | NMW",
  description: "nmwのポートフォリオサイト",
};

export default function HomePage() {
  return (
    <>
      <Header />

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

      <Footer />
    </>
  );
}
