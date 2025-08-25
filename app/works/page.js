import Head from 'next/head';
import Link from 'next/link';
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
        <section className="works">
         <div className="container">
            <h1>My Works</h1>
            <div className="work-list">
              <article className="work-item">
                <img src="/finished-item.png" alt="作品4" />
                <div className="body">
                    <h2>セキュリティキャンプ2025・全国大会</h2>
                    <p>自分は開発コースZ3「セキュリティAIagent開発ゼミ」に参加しました。
                      ここで、外部APIを用いたアプリ開発・Webスクレイピング・セキュリティに関する知識を学べました。
                    </p>
                </div>
              </article>
              <article className="work-item">
                <img src="/fruit-akinetor.png" alt="作品1" />
                <div className="body">
                    <h2>フルーツアキネーター</h2>
                    <p>ReactとPythonを用いて作成。あらかじめ設定した20個の果物からランダムなものが1つクイズとして出題される。
                      ユーザーはAIからの質問を通じて答えを絞り込んでいく。このとき始めてReactの利用とLLMを用いたアプリ開発が出来るようになった</p>
                    <li><Link href="https://github.com/yoguze/fruit-akinetor.git">https://github.com/yoguze/fruit-akinetor.git</Link></li>
                </div>
                </article>
                <article className="work-item">
                  <img src="/website.png" alt="作品2" />
                  <div className="body">
                      <h2>ポートフォリオ</h2>
                      <p>Next.jsで作成。メールのお問い合わせフォームはgmail.jsを使用。</p>
                      <li><Link href="https://github.com/yoguze/my-works-website.git">https://github.com/yoguze/my-works-website.git</Link></li>
                  </div>
                </article>
                <article className="work-item">
                  <img src="/button-click-game.png" alt="作品3" />
                  <div className="body">
                      <h2>ボタンクリックゲーム</h2>
                      <p>人生で初めて1人で作った思い出の作品。これにより、プログラミングについて初めて面白さを感じるようになった。</p>
                      <li><Link href="https://github.com/yoguze/button-click-game.git">https://github.com/yoguze/button-click-game.git</Link></li>
                  </div>
                </article>
                
                {/* 以降、アイテムを増やすだけでOK */}
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 My Website</p>
        <p>All rights reserved.</p>
      </footer>
    </>
  );
}