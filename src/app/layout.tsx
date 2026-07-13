import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.URL ?? "https://ogawa-engineer.netlify.app";

export const metadata: Metadata = {
  title: "小川 大智 | フルスタックエンジニア",
  description:
    "DX化、システム開発、HP・LP・ECサイト制作に対応。業務に合わせた設計から制作、納品後90日サポートまで丁寧に対応します。",
  keywords: [
    "小川大智",
    "フルスタックエンジニア",
    "DX化",
    "業務システム開発",
    "HP制作",
    "LP制作",
    "ECサイト制作",
    "ココナラ",
  ],
  authors: [{ name: "小川 大智" }],
  creator: "小川 大智",
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  alternates: siteUrl ? { canonical: "/" } : undefined,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "小川 大智 ポートフォリオ",
    title: "小川 大智 | フルスタックエンジニア",
    description:
      "DX化、システム開発、HP・LP・ECサイト制作。目的と業務を整理し、使い続けられる形まで丁寧に仕上げます。",
  },
  twitter: {
    card: "summary_large_image",
    title: "小川 大智 | フルスタックエンジニア",
    description: "DX化、システム開発、HP・LP・ECサイト制作に対応するポートフォリオです。",
  },
  robots: { index: true, follow: true },
  verification: {
    google: "x1Igh-McT6RIaMT9PVrqCXmHcpKyIX3cHqjFwbOzRqo",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "小川 大智",
    jobTitle: "フルスタックエンジニア",
    description: "DX化、システム開発、HP・LP・ECサイト制作に対応するフルスタックエンジニア。",
    url: siteUrl,
    sameAs: ["https://coconala.com/users/6178773"],
    knowsAbout: ["DX化", "業務システム開発", "HP制作", "LP制作", "ECサイト制作"],
  };

  return (
    <html lang="ja">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
