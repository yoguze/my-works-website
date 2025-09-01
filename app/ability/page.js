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
      <main className="ability-container">
              <h1>Ability</h1>

              <section>
                <h2>Python</h2>
                <p>
                  メール送信機能・LLMを用いたアプリ開発・セキュリティツールの開発などといったFlaskを用いたバックエンド開発はかなり得意です。他にも、簡単なデータ加工や基本的なWebスクレイピング
                  もできます。
                </p>
              </section>

              <section>
                <h2>JavaScript</h2>
                <p>
                  Webアプリにおける動的機能の実装、デバッグ処理、入力漏れの確認表示といった基本的なことに加えて、GASとの連携やローディングアニメーションの実施・
                  FullCalendarを用いたスケジュール管理機能の実装など、幅広い開発経験があります。
                </p>
              </section>

              <section>
                <h2>HTML / CSS</h2>
                <p>
                  レスポンシブデザイン、モバイルファースト設計、アクセシビリティを考慮したマークアップ。
                </p>
              </section>

              <section>
                <h2>Next.js</h2>
                <p>
                  KCSでのWebサイト制作企画で取得した。これにより、動的なデータ表示やページの高速切り替え、SEO対策が可能となって本格的なWebサービスの開発に強くなりました。
                </p>
              </section>
              <section>
                <h2>React</h2>
                <p>
                  セキュリティキャンプの事前課題のLLMアプリの開発をする上で取得した。これにより、ユーザー操作に応じたリアルタイムな画面更新や、状態管理を伴う複雑なアプリケーションの開発が可能になっています。
                </p>
              </section>
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