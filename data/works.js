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
      "データサイエンスとキャリアアップを目指して参加している、東京大学主催の短期プログラム。修了率は20%前後らしい",
    highlights: [
      "Kaggle形式のコンペティションで実データを扱う経験",
      "マーケティングとデータサイエンスを掛け合わせたビジネス応用型の最終課題",
      "NUmPy・scikit-learnなどのPythonライブラリの知識や教師あり学習などのデータサイエンスの領域における視点を深めることができた",
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
    title: "Weight ヨーグルト ― 離散選択モデルに基づく成長戦略",
    category: "データ分析",
    image: "/image/weight_yogurt_analysis.png",
    alt: "Weightヨーグルトの価格・広告戦略分析",
    summary:
      "授業で扱ったヨーグルト購買データを発展的に分析し、多項ロジットモデルでブランド選択要因とWeightブランドの成長施策を検討した。",
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
    image: "/image/securityacamp-finished-item.png",
    alt: "セキュリティキャンプ2025・全国大会",
    summary:
      "開発コースZ3「セキュリティAI agent開発ゼミ」に参加した、国内最大級のセキュリティ人材育成プログラム。",
    highlights: [
      "外部APIを用いたアプリ開発とWebスクレイピングの実践",
      "セキュリティを意識した開発の基礎知識の習得",
      "本格的なチーム開発での設計・実装・役割分担の経験",
    ],
    techStack: ["Python", "API", "Webスクレイピング"],
    links: [
      "https://www.ipa.go.jp/archive/jinzai/security-camp/2025/camp/zenkoku/program/z.html",
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
    links: [
      "https://github.com/yoguze/my-works-website.git",
      "https://nmw-works-website.vercel.app/",
    ],
  },
   {
    title: "株式会社ソフテム5daysインターン",
    category: "経験・イベント",
    image: "/image/softem-intern.png",
    alt: "株式会社ソフテム5daysインターン",
    summary:
      "LINEWorksのAPIを用いて、指定された設計課題を3人チームで解いた。また自分達は時間に余裕があったので、固定メニュー機能やボタンテンプレートを用いて選択肢から送信する内容を決めるものなどを追加実装しました。また、AIが使用禁止こともあってエンジニアとして必要な基礎体力や知識を得ることができた。（詳しくは「学んだこと」を参照）",
    highlights: [
      "自分でネットでPythonのサンプルコードを調べてシステムに組み込む力",
      "要件定義書・イベント設計書の作成",
      "従来AIによって実装してきたAPIに関するコーディングや仕様の理解度UP",
    ],
    techStack: ["Python", "API", "設計書作成"],
    links: [
      "https://softem-net.co.jp/",
      "https://paiza.jp/student/job_offers/39534"
    ],
  },
  {
    title: "TrueData-2daysサマーインターン",
    category: "経験・イベント",
    image: "/image/truedata_2days_intern.png",
    alt: "TrueData-2daysサマーインターン",
    summary:
      "TrueDataの2daysインターンに参加し、ID-POSデータを用いたデータ分析や施策提案に取り組みました。1日目は個人でSQLやk-meansクラスタリングを用いた分析を行い、2日目はチームで顧客クラスタの特徴からターゲットとなる顧客像を考え、売上向上につながる施策を提案しました。データを分析するだけでなく、分析結果から顧客の特徴を読み取り、施策へつなげる一連の流れを経験しました。",
    highlights: [
      "SQLの基礎知識の習得",
      "k-meansクラスタリングを用いたデータ分析の実践",
      "グループでのデータサイエンティストにおける実務の一部を経験",
    ],
    techStack: ["SQL", "ID-POSデータ", "k-meansクラスタリング"],
    links: [
      "https://www.truedata.co.jp/",
      "https://paiza.jp/student/job_offers/39151"
    ],
  }
];


