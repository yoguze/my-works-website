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
    image: "/image/GCI summer2026.png",
    alt: "GCI Summer2026 インターン",
    summary:
      "データサイエンスとキャリアアップを目指して参加している、東京大学主催の短期プログラム。",
    highlights: [
      "Kaggle形式のコンペティションで実データを扱う経験",
      "マーケティング・SQLを活用したビジネス応用型の最終課題",
      "修了率は15%前後らしい",
    ],
    techStack: ["Python", "SQL", "Kaggle"],
    links: ["https://gci2.t.u-tokyo.ac.jp/"],
  },
  {
    title: "ポケモンアキネーター",
    category: "開発作品",
    image: "/image/pokemon_akinator.png",
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
    title: "両生類ボイストレーナー",
    category: "開発作品",
    image: "/image/voice_trainer.png",
    alt: "voice_trainer",
    summary:
      "男の人が女性の声を作るための練習用アプリ。",
    highlights: [
      "IndexedDBによって音声解析をフロントエンドで完結させ、サーバー運用コストを抑えつつ練習データを外部送信しない設計にした。",
      "音域・声質・イントネーションの3軸UIで、専門知識がなくても目標の声を直感的に設定できるようにした。",
      "総合スコアに加え各指標の推移をグラフで切り替え表示し、弱点と上達の様子を把握しやすくした。",
    ],
    techStack: ["Next.js", "Web Audio API", "IndexedDB"],
    links: [
      "https://github.com/yoguze/voice_trainer.git",
      "https://voice-trainer-dun.vercel.app/ja",
    ],
  },
  {
    title: "最低賃金と犯罪率 ― 都道府県パネルデータ分析",
    category: "データ分析",
    image: "/image/minimum-wage-crime-analysis.png",
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
    title: "Estimating Conditional Volatility of Japanese Equity Returns",
    category: "データ分析",
    image: "/image/GARCH_report.png",
    alt: "日本株リターンの条件付きボラティリティ推定（GARCH分析）",
    summary:
      "大学の金融計量経済学の最終プロジェクト。Cowpertwait & Metcalfe『Introductory Time Series with R』付属の疑似データ（stockmarket.dat 等）を用い、日本株リターンの条件付きボラティリティをGARCH / GJR-GARCHで推定・比較した。",
    highlights: [
      "M0〜M4のモデル比較と診断統計量による妥当性の検証",
      "条件付きボラティリティの推定結果を可視化し、実現ボラティリティと比較",
      "GJR-GARCHにより下落ショック時のボラティリティ反応の非対称性を捉え、対称GARCHより適合度が向上",
      "使用データは書籍付属の疑似データであり、出典は GitHub 上の Introductory_Time_Series_with_R_datasets リポジトリ",
    ],
    techStack: ["GARCH", "GJR-GARCH", "Python", "R", "金融時系列分析"],
    links: [
      "/GARCH_volatility_analysis.zip",
      "https://github.com/dallascard/Introductory_Time_Series_with_R_datasets.git",
    ],
  },
  {
    title: "Weight ヨーグルト ― 離散選択モデルに基づく成長戦略",
    category: "データ分析",
    image: "/image/weight_yogurt_analysis.png",
    alt: "Weightヨーグルトの価格・広告戦略分析",
    summary:
      "4ブランドのヨーグルト市場を対象に、多項ロジットモデル（MNL）で消費者のブランド選択を推定。シェア3位の Weight をクライアントと想定し、価格・広告の政策シミュレーションから成長戦略を検討した。",
    highlights: [
      "価格・広告・ブランド固有効果を含むMNLを推定し、各係数の有意性を検証",
      "Weight をチャレンジャーブランドとして価格改定・広告投入のシナリオをシミュレーション",
      "市場シェアと収益への影響を比較し、実行可能な政策オプションを整理",
    ],
    techStack: ["多項ロジット", "離散選択モデル", "Python", "pandas", "scipy"],
    links: [
      "/weight_yogurt_analysis.pdf",
      "/weight_yogurt_analysis.zip",
    ],
  },

  {
    title: "200-calculation-game",
    category: "開発作品",
    image: "/image/200-calculation-game.png",
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
    image: "/image/finished-item.png",
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
    image: "/image/website.png",
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
