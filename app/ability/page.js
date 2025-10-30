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
                  もできます。また2026年からは機械学習やデータ分析などに関することも少しずつ進行しています。
                </p>
              </section>

              <section>
                <h2>Ruby</h2>
                <p>
                  Ruby on Railsを用いたWebアプリケーション開発が可能です。これにより、従来のPythonによる
                  Webアプリケーション開発よりも効率的に開発を進めることができるようになりました。なお、以下
                  にWebアプリケーションにおけるPythonとRubyの違いを表で示します。
                </p>
              </section>

              <table className="compare-table">
                <thead>
                  <tr>
                    <th>項目</th>
                    <th>Python</th>
                    <th>Ruby</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>主なWebフレームワーク</td>
                    <td>Django / Flask / FastAPI</td>
                    <td>Ruby on Rails</td>
                  </tr>
                  <tr>
                    <td>特徴</td>
                    <td>構造が明確で保守しやすい</td>
                    <td>規約重視で開発スピードが速い</td>
                  </tr>
                  <tr>
                    <td>開発文化</td>
                    <td>安定性と可読性を重視</td>
                    <td>開発者の幸福度と自由度を重視</td>
                  </tr>
                  <tr>
                    <td>向いている用途</td>
                    <td>データ分析・AI・API開発</td>
                    <td>Webサービス・スタートアップ開発</td>
                  </tr>
                  <tr>
                    <td>学習難易度</td>
                    <td>初心者でも理解しやすい構文</td>
                    <td>柔軟な文法で応用が効く</td>
                  </tr>
                </tbody>
              </table>


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
                  レスポンシブデザイン、モバイルファースト設計、アクセシビリティを考慮したマークアップなどが設計可能。
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
              <section>
                <h2>Git / GitHub</h2>
                <p>
                  チーム開発におけるバージョン管理、ブランチによる管理、プルリクエストなどによるチーム開発が可能です。
                </p>
              </section>
      </main>
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