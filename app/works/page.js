import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WorkItem from '../../components/WorkItem';
import { portfolioWorks } from '../../data/works';
import './globals.css';

export default function WorksPage() {
  return (
    <>
      <Head>
        <title>My WebSite</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />
      <main>
        <section className="works">
          <div className="container">
            <h1>My Works</h1>
            <div className="work-list">
              {portfolioWorks.map((workItem) => (
                <WorkItem key={workItem.title} {...workItem} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
