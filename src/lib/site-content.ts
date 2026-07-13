export const siteContent = {
  profile: {
    name: "小川 大智",
    role: "フルスタックエンジニア",
    location: "Japan",
    responseTime: "原則1時間以内に返信",
  },
  navigation: [
    { label: "私について", href: "#about" },
    { label: "対応領域", href: "#services" },
    { label: "進め方", href: "#process" },
    { label: "相談する", href: "#contact" },
  ],
  hero: {
    eyebrow: "FULL-STACK ENGINEER / JAPAN",
    lines: ["業務に合わせて、", "品質まで設計する。"],
    description:
      "DX化・システム開発・HP／LP制作。目的と業務を整理し、使い続けられる形まで丁寧に仕上げます。",
    cta: "ココナラで相談する",
  },
  about: {
    index: "01 / QUALITY FIRST",
    heading: ["品質は、", "完成前から", "決まる。"],
    description:
      "良い成果物は、実装だけでは生まれません。最初に目的と条件を揃え、認識を共有し、確認を重ねる。小川 大智は、その一つひとつを曖昧にせず、完成まで確実に進めます。",
    values: ["品質", "確実性", "迅速な連絡"],
  },
  services: [
    {
      number: "01",
      title: "DX化",
      titleEn: "DIGITAL TRANSFORMATION",
      tone: "project-yellow",
      accent: "yellow",
      href: "/services/dx",
      label: "業務整理・自動化・効率化",
      description: "現在の業務を整理し、無理なく定着する改善方法とツールを形にします。",
    },
    {
      number: "02",
      title: "HP・LP・ECサイト制作",
      titleEn: "WEB & E-COMMERCE",
      tone: "project-coral",
      accent: "coral",
      href: "/services/web",
      label: "設計・デザイン・実装",
      description: "目的と利用者に合わせ、見た目と使いやすさを両立したサイトを制作します。",
    },
    {
      number: "03",
      title: "システム開発",
      titleEn: "SYSTEM DEVELOPMENT",
      tone: "project-blue",
      accent: "blue",
      href: "/services/system",
      label: "予約・会員・業務システム",
      description: "予約や会員管理など、複雑な仕組みを迷わず使える形に設計・開発します。",
    },
  ],
  process: [
    {
      number: "01",
      title: "システム開発",
      steps: "要件整理 → 設計・開発 → テスト・公開",
      description: "必要な機能と利用場面を明確にし、動作確認まで責任を持って進めます。",
    },
    {
      number: "02",
      title: "DX化",
      steps: "業務整理 → 改善設計 → 導入・定着",
      description: "現場の流れを理解したうえで、続けられる業務改善を段階的に導入します。",
    },
    {
      number: "03",
      title: "HP・LP・EC",
      steps: "目的整理 → デザイン・実装 → 公開・改善",
      description: "伝える内容と達成したい成果を揃え、公開後を見据えて制作します。",
    },
  ],
  contact: {
    eyebrow: "原則1時間以内に返信します",
    heading: "まずは相談する",
    note: "ご相談内容が固まっていない段階でも大丈夫です。",
    url: "https://coconala.com/users/6178773",
  },
} as const;
