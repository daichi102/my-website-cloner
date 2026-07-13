"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import portrait from "../../S__31432712.jpg";
import { motionConfig } from "@/lib/motion-config";
import { siteContent } from "@/lib/site-content";
import { ServiceTransitionLink } from "@/components/service-transition-link";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function AnimatedLanding() {
  const root = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      gsap.set("[data-animate]", { clearProps: "all" });
      return;
    }

    gsap.timeline({ defaults: { ease: "power4.out" } })
      .from(".hero-stripe", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: motionConfig.hero.stripeDuration,
        stagger: 0.08,
      })
      .from(".hero-line > span", {
        yPercent: 115,
        rotate: 2,
        duration: motionConfig.hero.introDuration,
        stagger: motionConfig.hero.lineStagger,
      }, 0.18)
      .from(".hero-meta", { opacity: 0, y: 24, duration: 0.7 }, 0.7)
      .from(".site-header", { yPercent: -120, duration: 0.8 }, 0.85);

    gsap.to(".hero-type", {
      y: motionConfig.hero.parallaxDistance,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 0.8,
      },
    });

    gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((section) => {
      gsap.from(section.querySelectorAll<HTMLElement>("[data-animate]"), {
        opacity: 0,
        y: motionConfig.reveal.distance,
        duration: motionConfig.reveal.duration,
        stagger: motionConfig.reveal.stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: motionConfig.reveal.start,
          toggleActions: "play none none reverse",
        },
      });
    });

    const serviceTrack = document.querySelector<HTMLElement>(".service-track");
    if (serviceTrack) {
      gsap.to(serviceTrack, {
        x: () => -(serviceTrack.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: ".service-stage",
          start: "top top",
          end: `+=${motionConfig.menu.scrollLength}`,
          pin: true,
          scrub: motionConfig.menu.scrub,
          invalidateOnRefresh: true,
        },
      });
    }

    gsap.fromTo(".contact-orbit", { scale: 0.55, rotate: -12 }, {
      scale: 1,
      rotate: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".contact-section",
        start: motionConfig.contact.start,
        end: motionConfig.contact.end,
        scrub: motionConfig.contact.scrub,
      },
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    return () => window.removeEventListener("load", refresh);
  }, { scope: root });

  return (
    <div ref={root} className="page-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="小川 大智 ポートフォリオ トップ">
          OGAWA<span>DAICHI</span>
        </a>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          {siteContent.navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <div className={`menu-overlay ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        {siteContent.navigation.map((item, index) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            <span>0{index + 1}</span>{item.label}
          </a>
        ))}
      </div>

      <main>
        <section id="top" className="hero">
          <div className="hero-stripe stripe-coral" />
          <div className="hero-stripe stripe-yellow" />
          <div className="hero-stripe stripe-blue" />
          <div className="hero-type">
            <p className="hero-kicker hero-meta">{siteContent.hero.eyebrow}</p>
            <h1>
              {siteContent.hero.lines.map((line, index) => (
                <span className={`hero-line ${index === 1 ? "hero-line-indent" : ""}`} key={line}>
                  <span>{line}</span>
                </span>
              ))}
            </h1>
            <div className="hero-footer hero-meta">
              <div>
                <p>{siteContent.hero.description}</p>
                <a className="hero-cta" href={siteContent.contact.url} target="_blank" rel="noreferrer">
                  {siteContent.hero.cta}<ArrowUpRight />
                </a>
              </div>
              <a className="scroll-link" href="#about" aria-label="私についてへ移動"><ArrowDown /></a>
            </div>
          </div>
        </section>

        <section id="about" className="story reveal-section">
          <p className="section-index" data-animate>{siteContent.about.index}</p>
          <div className="story-copy">
            <h2 data-animate>
              {siteContent.about.heading.map((line) => <span key={line}>{line}</span>)}
            </h2>
            <div className="about-detail" data-animate>
              <p>{siteContent.about.description}</p>
              <div className="profile-row">
                <div className="profile-image">
                  <Image src={portrait} alt="小川 大智のプロフィールイラスト" fill sizes="112px" />
                </div>
                <div>
                  <strong>{siteContent.profile.name}</strong>
                  <span>{siteContent.profile.role}</span>
                  <small>{siteContent.profile.responseTime}</small>
                </div>
              </div>
            </div>
          </div>
          <div className="statement" data-animate>
            {siteContent.about.values.map((value, index) => (
              <span className="statement-part" key={value}>
                <span>{value}</span>
                {index < siteContent.about.values.length - 1 && <i />}
              </span>
            ))}
          </div>
        </section>

        <section id="services" className="service-stage">
          <div className="service-track">
            <div className="service-intro">
              <p>02 / SERVICES</p>
              <h2>対応できること</h2>
              <span>SCROLL TO EXPLORE</span>
            </div>
            {siteContent.services.map((service) => (
              <ServiceTransitionLink
                className={`service-panel ${service.tone}`}
                href={service.href}
                accent={service.accent}
                label={`${service.title}の詳細を見る`}
                key={service.number}
              >
                <div className="service-art" aria-hidden="true">
                  <span className="art-disc" />
                  <span className="art-line" />
                  <span className="art-square" />
                </div>
                <div className="service-info">
                  <span>{service.number}</span>
                  <p>{service.label}</p>
                  <h3 className={service.title.length > 8 ? "service-title-long" : undefined}>{service.title}</h3>
                  <small>{service.titleEn}</small>
                  <p className="service-description">{service.description}</p>
                  <ArrowUpRight />
                </div>
              </ServiceTransitionLink>
            ))}
          </div>
        </section>

        <section id="process" className="process reveal-section">
          <p className="section-index" data-animate>03 / HOW I WORK</p>
          <h2 data-animate>相談から、<br />公開・定着まで。</h2>
          <div className="process-grid">
            {siteContent.process.map((item) => (
              <article key={item.number} data-animate>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <strong>{item.steps}</strong>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-orbit">
            <p>{siteContent.contact.eyebrow}</p>
            <a href={siteContent.contact.url} target="_blank" rel="noreferrer">
              {siteContent.contact.heading}<ArrowUpRight />
            </a>
            <span>{siteContent.contact.note}</span>
          </div>
          <p className="contact-foot">{siteContent.profile.name} / {siteContent.profile.role} / 2026</p>
        </section>
      </main>
    </div>
  );
}
