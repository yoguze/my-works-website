import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './globals.css';

export const metadata = {
  title: "Ability | NMW",
  description: "スキルと技術スタック",
};

export default function AbilityPage() {
  return (
    <>
      <Header />
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
            最近ではTailwind CSSを用いたスタイリングも可能になりました。
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
      <Footer />
    </>
  );
}
