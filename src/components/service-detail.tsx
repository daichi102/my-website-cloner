"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, Check, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ServiceContent } from "@/lib/service-content";
import { ContactForm } from "@/components/contact-form";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const coconalaUrl = "https://coconala.com/users/6178773";

const webProjects = [
  {
    type: "店舗・サロン向けサイト",
    title: "余白から、\n心地よさを伝える。",
    detail: "予約まで迷わない導線と、空間の温度が伝わるビジュアル。",
    className: "salon-project",
  },
  {
    type: "サービス紹介LP",
    title: "価値を、\nひと続きの体験に。",
    detail: "ファーストビューから問い合わせまで、読む順番を設計。",
    className: "lp-project",
  },
  {
    type: "ECサイト",
    title: "選ぶ時間まで、\nブランドになる。",
    detail: "商品を探しやすく、運営側も更新しやすいストア設計。",
    className: "ec-project",
  },
] as const;

const ecPlatforms = [
  ["BASE", "初期構築・テーマ調整"],
  ["Shopify", "ストア構築・アプリ連携"],
  ["STORES", "デザイン・商品設定"],
  ["makeshop", "テーマ調整・移行"],
  ["カラーミーショップ", "デザイン・運用改善"],
] as const;

function DetailHeader({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (open: boolean) => void }) {
  const links = [
    ["サービス", "#overview"],
    ["制作例", "#example"],
    ["進め方", "#process"],
    ["相談する", "#contact"],
  ] as const;

  return (
    <>
      <header className="site-header detail-header">
        <Link className="brand" href="/" aria-label="小川 大智 ポートフォリオ トップ">
          OGAWA<span>DAICHI</span>
        </Link>
        <nav className="desktop-nav" aria-label="サービスページナビゲーション">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <button className="menu-button" type="button" aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>
      <div className={`menu-overlay detail-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        {links.map(([label, href], index) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{label}</a>
        ))}
      </div>
    </>
  );
}

function KanbanDemo() {
  const columns = [
    { title: "相談受付", count: 3, cards: [["青山商事", "業務管理のご相談", "7/18"], ["KITO STUDIO", "顧客情報の整理", "7/20"]] },
    { title: "提案中", count: 2, cards: [["中村製作所", "進捗管理ツール", "7/15"], ["MORI FOODS", "受発注フロー改善", "7/17"]] },
    { title: "制作中", count: 2, cards: [["SETO DESIGN", "営業ダッシュボード", "7/12"], ["北野物流", "在庫アラート", "7/22"]] },
    { title: "確認待ち", count: 1, cards: [["LIFE CLINIC", "予約管理画面", "7/11"]] },
  ] as const;

  return (
    <div className="app-window kanban-window">
      <div className="app-topbar"><strong>FLOW / SALES</strong><span>案件進捗</span><button type="button">＋ 案件を追加</button></div>
      <div className="metric-row">
        <div><span>進行中</span><strong>08</strong></div>
        <div><span>今週の連絡</span><strong>05</strong></div>
        <div><span>確認待ち</span><strong>01</strong></div>
      </div>
      <div className="kanban-board">
        {columns.map((column, columnIndex) => (
          <section key={column.title}>
            <header><span className={`status-dot status-${columnIndex}`} />{column.title}<b>{column.count}</b></header>
            {column.cards.map(([client, project, date]) => (
              <article key={client}><small>{project}</small><strong>{client}</strong><footer><span>次回連絡</span><b>{date}</b></footer></article>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}

function ReservationDemo() {
  const days = ["MON 14", "TUE 15", "WED 16", "THU 17", "FRI 18", "SAT 19"];
  const times = ["09:00", "10:30", "12:00", "13:30", "15:00", "16:30"];
  return (
    <div className="app-window reservation-window">
      <aside><strong>RESERVE /</strong><nav><b>予約カレンダー</b><span>会員管理</span><span>メニュー設定</span><span>通知</span></nav><small>ADMIN / DAICHI</small></aside>
      <div className="calendar-main">
        <header><div><small>JULY 2026</small><strong>予約カレンダー</strong></div><div className="calendar-controls"><button type="button"><ChevronLeft /></button><button type="button">今日</button><button type="button"><ChevronRight /></button></div></header>
        <div className="calendar-grid">
          <div className="calendar-time" />
          {days.map((day) => <b key={day}>{day}</b>)}
          {times.map((time, row) => (
            <div className="calendar-row" key={time}>
              <span className="calendar-time">{time}</span>
              {days.map((day, col) => {
                const booked = (row + col) % 4 === 1 || (row === 3 && col === 3);
                return <span className={booked ? "booking-slot is-booked" : "booking-slot"} key={day}>{booked ? <><strong>{row % 2 ? "初回相談" : "定期予約"}</strong><small>{row % 2 ? "山田様" : "佐藤様"}</small></> : null}</span>;
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WebShowcase() {
  const [active, setActive] = useState(0);
  const project = webProjects[active];
  return (
    <div className="web-showcase">
      <div className={`browser-mockup ${project.className}`}>
        <div className="browser-bar"><i /><i /><i /><span>ogawa.design / works</span></div>
        <div className="project-canvas">
          <small>{project.type}</small>
          <h3>{project.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
          <p>{project.detail}</p>
          <div className="mock-image" aria-hidden="true"><span /><span /><span /></div>
        </div>
      </div>
      <div className="showcase-controls">
        <div><span>0{active + 1} / 03</span><strong>{project.type}</strong></div>
        <div>
          <button type="button" aria-label="前の制作例" onClick={() => setActive((active + webProjects.length - 1) % webProjects.length)}><ArrowLeft /></button>
          <button type="button" aria-label="次の制作例" onClick={() => setActive((active + 1) % webProjects.length)}><ArrowRight /></button>
        </div>
      </div>
    </div>
  );
}

function MainExample({ slug }: Pick<ServiceContent, "slug">) {
  if (slug === "dx") return <KanbanDemo />;
  if (slug === "system") return <ReservationDemo />;
  return <WebShowcase />;
}

export function ServiceDetail({ service }: { service: ServiceContent }) {
  const root = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.timeline({ defaults: { ease: "power4.out" } })
      .from(".detail-band", { scaleX: 0, transformOrigin: "left center", duration: 1, stagger: 0.08 })
      .from(".detail-title-line span", { yPercent: 120, duration: 0.9, stagger: 0.1 }, 0.18)
      .from(".detail-hero-meta", { opacity: 0, y: 20, duration: 0.7 }, 0.55);

    gsap.utils.toArray<HTMLElement>(".detail-reveal").forEach((section) => {
      gsap.from(section.querySelectorAll("[data-reveal]"), {
        opacity: 0,
        y: 56,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 78%" },
      });
    });
  }, { scope: root });

  return (
    <div ref={root} className={`service-page accent-${service.accent}`}>
      <DetailHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <section className="detail-hero" id="overview">
          <div className="detail-band band-main" />
          <div className="detail-band band-secondary" />
          <div className="detail-hero-inner">
            <div className="detail-hero-meta"><span>{service.number} / SERVICE</span><span>{service.titleEn}</span></div>
            <h1>{service.statement.split("\n").map((line) => <span className="detail-title-line" key={line}><span>{line}</span></span>)}</h1>
            <div className="detail-hero-bottom detail-hero-meta">
              <p>{service.description}</p>
              <a href="#example">制作例を見る <CalendarDays /></a>
            </div>
          </div>
        </section>

        <section className="example-section detail-reveal" id="example">
          <div className="section-heading" data-reveal><span>01 / MAIN EXAMPLE</span><h2>{service.slug === "dx" ? "案件進捗を、ひと目で。" : service.slug === "system" ? "予約状況を、迷わず管理。" : "3つの見せ方、3つの目的。"}</h2></div>
          <div data-reveal><MainExample slug={service.slug} /></div>
        </section>

        {service.slug === "web" && (
          <section className="platform-section detail-reveal">
            <div className="section-heading" data-reveal><span>02 / E-COMMERCE</span><h2>使いたいサービスに、合わせます。</h2></div>
            <div className="platform-grid" data-reveal>
              {ecPlatforms.map(([name, detail]) => <article key={name}><strong>{name}</strong><span>{detail}</span><Check /></article>)}
            </div>
          </section>
        )}

        <section className="scope-section detail-reveal">
          <div className="section-heading" data-reveal><span>{service.slug === "web" ? "03" : "02"} / SCOPE</span><h2>相談できること。</h2></div>
          <div className="scope-grid" data-reveal>{service.scope.map((item, index) => <article key={item}><span>0{index + 1}</span><strong>{item}</strong></article>)}</div>
          <p className="delivery-note" data-reveal>{service.delivery}</p>
        </section>

        <section className="detail-process detail-reveal" id="process">
          <div className="section-heading" data-reveal><span>{service.slug === "web" ? "04" : "03"} / PROCESS</span><h2>相談から、定着まで。</h2></div>
          <div className="detail-process-grid">
            {service.process.map((item, index) => <article key={item.title} data-reveal><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}
          </div>
        </section>

        <section className="support-section detail-reveal">
          <div data-reveal><span className="support-days">90</span><strong>DAYS SUPPORT</strong></div>
          <div data-reveal><h2>納品後も、90日間。</h2><p>案件に合わせて、以下の範囲をサポートします。継続的な運用・保守は、別途月額契約で承ります。</p><ul>{service.support.map((item) => <li key={item}><Check />{item}</li>)}</ul></div>
        </section>

        <section className="detail-contact detail-reveal" id="contact">
          <div className="section-heading" data-reveal><span>CONTACT</span><h2>まずは、話すことから。</h2><p>内容が固まっていなくても大丈夫です。名前・メールアドレス・相談内容だけで始められます。</p></div>
          <div data-reveal><ContactForm /></div>
          <div className="coconala-cta" data-reveal><span>ココナラからのご相談はこちら</span><a href={coconalaUrl} target="_blank" rel="noreferrer">プロフィールを見る <ArrowUpRight /></a></div>
        </section>
      </main>
      <footer className="detail-footer"><Link href="/">← TOPへ戻る</Link><span>OGAWA DAICHI / 2026</span></footer>
    </div>
  );
}

