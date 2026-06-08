export const works = [
  {
    title: "GCI Summer2026",
    image: "/GCI summer2026.png",
    alt: "インターン1",
    description:
      "データサイエンティストや将来のキャリアアップを目指して参加中です。Kaggle形式のコンペやマーケティング・SQLの知識の取得とデータサイエンスをビジネスに応用させるような最終課題を経験することで、データサイエンティストになるためのアウトプットを経験することができます。なお、こちらの合格率は多くても15%だそうです。",
    links: [{ href: "https://gci2.t.u-tokyo.ac.jp/" }],
  },
  {
    title: "最低賃金と犯罪率 ― 都道府県パネルデータ分析",
    image: "/minimum-wage-crime-analysis.png",
    alt: "最低賃金と犯罪率の分析レポート",
    description:
      "大学の授業で実施したパネル分析の発表資料。日本の都道府県パネルデータ（2016–2022）を用い、実質最低賃金と犯罪認知率の関係を固定効果モデルで分析。e-Stat・警察庁などの公的データを収集・整理し、最低賃金上昇と犯罪率低下の関連を検証。景気変動によるバイアスなどの限界も考察した。",
    links: [{ href: "/minimum-wage-crime-analysis.pdf", label: "minimum-wage-crime-analysis.pdf" }],
  },
  {
    image: "/workshop.png",
    alt: "インターン1",
    description:
      "それぞれのワークショップでWebエンジニアとしての面白い知見を得ることができました。AIに依存しないコードの書き方・Next.jsのコンポーネント設計・Typescript・n8nなどのAIエージェントの使い方・共同開発の際の進め方を教えていただき、スキルや仕事観が大きく向上しました",
  },
  {
    title: "声優リサーチャー",
    image: "/seiyu-researcher.png",
    alt: "作品6",
    description:
      "あらかじめ自分が好きな声優を設定してfeedparserを用いてGoogleニュースRSSを解析して設定したキーワードに関する記事を20件取得してAPSchedulerで10分ごとに自動でニュースを更新する機能を実装した。これにより、PythonでのWebスクレイピングやRSSフィードの解析ができるようになった。",
    links: [{ href: "https://github.com/yoguze/seiyu-researcher.git" }],
  },
  {
    title: "200-calculation-game",
    image: "200-calculation-game.png",
    alt: "作品5",
    description:
      "制限時間内に四則演算して200に限りなく近い値を作るゲーム。React・Pythonを用いて作成した。昔のセキュリティキャンプ・ミニで学んだWebsocketを用いたリアルタイム通信の実装を応用した。なお、VercelでのアプリURLは1人対戦用でRenderでのアプリURLは通信対戦の際にご自由に使ってください。",
    links: [{ href: "https://github.com/yoguze/calculation-game" },
      { href: "https://calculation-game-eta.vercel.app/" },
      { href: "https://calculation-game.onrender.com" }
    ],
  },
  {
    title: "セキュリティキャンプ2025・全国大会",
    image: "/finished-item.png",
    alt: "作品4",
    description:
      "自分は開発コースZ3「セキュリティAIagent開発ゼミ」に参加しました。ここで、外部APIを用いたアプリ開発・Webスクレイピング・セキュリティに関する知識を学べただけでなく、本格的なチームでの開発経験を得ることができました。",
  },
  {
    title: "フルーツアキネーター",
    image: "/fruit-akinetor.png",
    alt: "作品1",
    description:
      "ReactとPythonを用いて作成。あらかじめ設定した20個の果物からランダムなものが1つクイズとして出題される。ユーザーはAIからの質問を通じて答えを絞り込んでいく。このとき始めてReactの利用とLLMを用いたアプリ開発が出来るようになった",
    links: [{ href: "https://github.com/yoguze/fruit-akinetor.git" }],
  },
  {
    title: "ポートフォリオ",
    image: "/website.png",
    alt: "作品2",
    description:
      "Next.jsで作成。メールのお問い合わせフォームはgmail.jsを使用。内容やデザインは検討中。",
    links: [{ href: "https://github.com/yoguze/my-works-website.git" }],
  },
];
