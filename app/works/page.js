import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WorkItem from '../../components/WorkItem';
import {
  portfolioWorks,
  WORK_CATEGORIES,
  HIGHLIGHTS_LABEL_BY_CATEGORY,
} from '../../data/works';
import './globals.css';

export default function WorksPage() {
  const worksByCategory = WORK_CATEGORIES.map((category) => ({
    category,
    items: portfolioWorks.filter((workItem) => workItem.category === category),
  })).filter((group) => group.items.length > 0);

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

            {worksByCategory.map(({ category, items }) => (
              <section key={category} className="work-category-group">
                <h2 className="work-category-heading">{category}</h2>
                <div className="work-list">
                  {items.map((workItem) => (
                    <WorkItem
                      key={workItem.title}
                      {...workItem}
                      highlightsLabel={HIGHLIGHTS_LABEL_BY_CATEGORY[category]}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
