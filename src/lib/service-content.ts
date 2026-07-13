export type ServiceSlug = "dx" | "web" | "system";

export type ServiceContent = {
  slug: ServiceSlug;
  number: string;
  title: string;
  titleEn: string;
  eyebrow: string;
  accent: "yellow" | "coral" | "blue";
  statement: string;
  description: string;
  delivery: string;
  scope: readonly string[];
  support: readonly string[];
  process: readonly {
    title: string;
    description: string;
  }[];
};

export const serviceContents: Record<ServiceSlug, ServiceContent> = {
  dx: {
    slug: "dx",
    number: "01",
    title: "DX化",
    titleEn: "DIGITAL TRANSFORMATION",
    eyebrow: "業務整理・自動化・効率化",
    accent: "yellow",
    statement: "仕事の流れを、\n見える形にする。",
    description:
      "現在の業務を丁寧に整理し、現場で無理なく使い続けられる管理画面と仕組みを設計します。",
    delivery: "業務内容を確認後、工程と納期を個別にご案内します。",
    scope: [
      "営業・顧客管理",
      "在庫・受発注管理",
      "制作・進行管理",
      "申請・請求などの業務管理",
      "定型作業の自動化",
      "既存業務の整理と改善提案",
    ],
    support: [
      "操作方法のご説明",
      "軽微な画面調整",
      "実際の運用に合わせた相談",
    ],
    process: [
      { title: "業務を知る", description: "現在の作業、担当者、困っている点を一緒に整理します。" },
      { title: "改善を設計する", description: "必要な画面と運用方法を、実務に合わせてご提案します。" },
      { title: "小さく試す", description: "確認用の画面から始め、使い勝手を見ながら仕上げます。" },
      { title: "定着を支える", description: "納品後も操作と運用を90日間サポートします。" },
    ],
  },
  web: {
    slug: "web",
    number: "02",
    title: "HP・LP・ECサイト制作",
    titleEn: "WEB & E-COMMERCE",
    eyebrow: "設計・デザイン・実装",
    accent: "coral",
    statement: "伝わる動きで、\n選ばれる理由をつくる。",
    description:
      "目的と利用者に合わせて、印象に残るビジュアルと迷わない導線を両立したサイトを制作します。",
    delivery: "HP・LP制作は最短7日から。内容・ページ数に応じて事前にご案内します。",
    scope: [
      "HP・LPの設計と制作",
      "BASE・ShopifyなどのEC構築",
      "既存テーマの調整",
      "商品移行・決済・配送設定",
      "外部ツール連携",
      "スマホ最適化と更新しやすい設計",
      "SEO対策・構造化データ設定",
    ],
    support: [
      "表示崩れ・不具合の修正",
      "軽微な文言・画像変更",
      "更新方法のご説明",
    ],
    process: [
      { title: "目的を揃える", description: "誰に何を伝え、どの行動につなげるかを整理します。" },
      { title: "見せ方を決める", description: "構成、デザイン、動きの方向性をご提案します。" },
      { title: "制作・確認", description: "スマホ表示まで実装し、確認と修正を重ねます。" },
      { title: "公開を支える", description: "公開作業と、その後90日間の運用を支援します。" },
    ],
  },
  system: {
    slug: "system",
    number: "03",
    title: "システム開発",
    titleEn: "SYSTEM DEVELOPMENT",
    eyebrow: "予約・会員・業務システム",
    accent: "blue",
    statement: "複雑な仕組みを、\n迷わず使える形へ。",
    description:
      "予約や会員管理を中心に、複雑な処理と日々の操作を、使いやすいひとつのシステムにまとめます。",
    delivery: "内容確認後に、必要な工程と納期を明確にご案内します。",
    scope: [
      "会員・予約システム",
      "ログイン・権限管理",
      "予約枠・メール通知",
      "CSV取込・集計・帳票出力",
      "既存システムの改善・機能追加",
      "API・バックエンド・外部サービス連携",
    ],
    support: [
      "納品機能の不具合修正",
      "操作方法のご説明",
      "ログ確認と運用相談",
    ],
    process: [
      { title: "要件を整理する", description: "利用者、権限、必要な処理と例外を明確にします。" },
      { title: "動きを設計する", description: "画面とデータの流れを、確認できる形で共有します。" },
      { title: "開発・テスト", description: "段階的に実装し、利用場面に沿って動作を確認します。" },
      { title: "安定運用へ", description: "90日サポート後は月額の運用・保守も承ります。" },
    ],
  },
};

export const serviceSlugs = Object.keys(serviceContents) as ServiceSlug[];
