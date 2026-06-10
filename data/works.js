export const WORK_CATEGORIES = ["開発作品", "データ分析", "経験・イベント"];

export const HIGHLIGHTS_LABEL_BY_CATEGORY = {
  "開発作品": "工夫した点",
  "データ分析": "分析のポイント",
  "経験・イベント": "学んだこと",
};

export const portfolioWorks = [
  {
    title: "GCI Summer2026",
    category: "経験・イベント",
    image: "/GCI summer2026.png",
    alt: "GCI Summer2026 インターン",
    summary:
      "データサイエンスとキャリアアップを目指して参加している、東京大学主催の短期プログラム。",
    highlights: [
      "Kaggle形式のコンペティションで実データを扱う経験",
      "マーケティング・SQLを活用したビジネス応用型の最終課題",
      "合格率15%前後の選考を突破して参加",
    ],
    techStack: ["Python", "SQL", "Kaggle"],
    links: ["https://gci2.t.u-tokyo.ac.jp/"],
  },
  {
    title: "ポケモンアキネーター",
    category: "開発作品",
    image: "/pokemon_akinator.png",
    alt: "ポケモンアキネーター",
    summary:
      "AIとのYES/NOチャットを通じて、あるポケモンを当てるWebアプリ。",
    highlights: [
      "Poke API・OpenAI API・microCMSを組み合わせたAPI設計",
      "Next.js + TypeScriptでフロントエンドと外部APIを連携",
      "OpenAI API のトークン消費を抑えるため、AI の質問チャットとユーザーの回答入力欄を UI 上で分離し、送信するコンテキストを最小化した",
    ],
    techStack: ["Next.js", "TypeScript", "OpenAI API", "microCMS", "Poke API"],
    links: [
      "https://github.com/yoguze/pokemon_akinator",
      "https://pokemon-akinator.vercel.app/",
    ],
  },
  {
    title: "最低賃金と犯罪率 ― 都道府県パネルデータ分析",
    category: "データ分析",
    image: "/minimum-wage-crime-analysis.png",
    alt: "最低賃金と犯罪率の分析レポート",
    summary:
      "大学の授業で実施した、都道府県パネルデータを用いた実証分析の発表資料。",
    highlights: [
      "e-Stat・警察庁などから2016–2022年のデータを収集・整理",
      "固定効果モデルで実質最低賃金と犯罪認知率の関係を推定",
      "景気変動による下方バイアスなど、分析の限界も考察",
    ],
    techStack: ["パネルデータ分析", "固定効果モデル", "e-Stat"],
    links: ["/minimum-wage-crime-analysis.pdf"],
  },
  {
    title: "ワークショップ・インターンシップ",
    category: "経験・イベント",
    image: "/workshop.png",
    alt: "ワークショップ・インターンシップ",
    summary:
      "Sky・GA technologies・TOKIUMなど複数社のワークショップ・インターンに参加。",
    highlights: [
      "AIに依存しないコードの書き方とNext.jsのコンポーネント設計",
      "TypeScriptやn8nを用いたAIエージェントの活用",
      "共同開発におけるタスク分担と進め方",
    ],
    techStack: ["Next.js", "TypeScript", "n8n"],
  },
  {
    title: "200-calculation-game",
    category: "開発作品",
    image: "/200-calculation-game.png",
    alt: "200-calculation-game",
    summary:
      "制限時間内に四則演算で200に近い値を作るゲーム。ソロプレイとオンライン対戦に対応。",
    highlights: [
      "WebSocketを用いたリアルタイム通信の実装",
      "Vercel（ソロ用）とRender（対戦用）で用途に応じたデプロイ先の使い分け",
      "セキュリティキャンプ・ミニで学んだ知識を個人開発に応用",
    ],
    techStack: ["React", "Python", "WebSocket"],
    links: [
      "https://github.com/yoguze/calculation-game",
      "https://calculation-game-eta.vercel.app/",
      "https://calculation-game.onrender.com",
    ],
  },
  {
    title: "セキュリティキャンプ2025・全国大会",
    category: "経験・イベント",
    image: "/finished-item.png",
    alt: "セキュリティキャンプ2025・全国大会",
    summary:
      "開発コースZ3「セキュリティAI agent開発ゼミ」に参加した、国内最大級のセキュリティ人材育成プログラム。",
    highlights: [
      "外部APIを用いたアプリ開発とWebスクレイピングの実践",
      "セキュリティを意識した開発の基礎知識の習得",
      "本格的なチーム開発での設計・実装・役割分担の経験",
    ],
    techStack: ["Python", "外部API", "Webスクレイピング"],
    links: [
      "https://www.ipa.go.jp/archive/jinzai/security-camp/2025/camp/zenkoku/index.html",
    ],
  },
  {
    title: "ポートフォリオ",
    category: "開発作品",
    image: "/website.png",
    alt: "ポートフォリオサイト",
    summary: "Next.jsで制作した、自身のスキルと作品を紹介するWebサイト。",
    highlights: [
      "Header/Footer/WorkItemのコンポーネント化で保守性を確保",
      "作品データとUIの分離（data/works.js）",
      "EmailJSによるお問い合わせフォームの実装",
    ],
    techStack: ["Next.js", "React", "EmailJS"],
    links: ["https://github.com/yoguze/my-works-website.git"],
  },
];
