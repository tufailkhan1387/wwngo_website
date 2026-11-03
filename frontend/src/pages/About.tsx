import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { DownloadCta } from '../components/ui/DownloadCta';
import { Reveal } from '../components/ui/Reveal';
import { useLanguage } from '../context/LanguageContext';
import '../styles/home.css';
import '../styles/about.css';

function LimeRing({ children }: { children: ReactNode }) {
  return (
    <span className="home-highlight-ring">
      {children}
      <svg
        className="home-highlight-ring__svg"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M14 34C10 14 70 5 118 6c46 1 78 9 76 26-2 17-62 24-112 22C40 52 6 46 8 30 10 18 40 10 70 8"
          fill="none"
          stroke="#D3F36B"
          strokeWidth="2.6"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  );
}

function accentSerif(text: string, accent: string) {
  const idx = text.lastIndexOf(accent);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <em className="serif-accent">{accent}</em>
      {text.slice(idx + accent.length)}
    </>
  );
}

function accentRing(text: string, accent: string) {
  const idx = text.lastIndexOf(accent);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <LimeRing>{accent}</LimeRing>
      {text.slice(idx + accent.length)}
    </>
  );
}

function MissionIcon() {
  return (
    <span className="about-mv__icon about-mv__icon--brand" aria-hidden="true">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    </span>
  );
}

function VisionIcon() {
  return (
    <span className="about-mv__icon about-mv__icon--ink" aria-hidden="true">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    </span>
  );
}

export function About() {
  const { t, lang } = useLanguage();
  const a = t.about;

  const titleAccent = 'WWNGO';
  const missionAccent = lang === 'fr' ? 'mission' : 'mission';
  const visionAccent = lang === 'fr' ? 'vision' : 'vision';
  const marketplaceAccent = lang === 'fr' ? 'coursier' : 'courier';
  const valuesAccent = lang === 'fr' ? 'valeurs' : 'stand for';

  return (
    <div className="about-page">
      {/* 1 — Hero */}
      <section className="home-panel home-panel--dark about-hero" aria-label="About hero">
        <div className="about-hero__bg" aria-hidden="true" />
        <div className="about-hero__inner">
          <Reveal>
            <nav className="about-hero__crumbs" aria-label="Breadcrumb">
              <Link to="/">{t.nav.home}</Link>
              <span aria-hidden="true">/</span>
              <span>{a.eyebrow}</span>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="about-hero__title">{accentRing(a.title, titleAccent)}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="about-hero__lead">
              {accentSerif(a.lead, lang === 'fr' ? 'place de marché' : 'marketplace')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2 — Mission + Vision */}
      <section className="home-panel home-panel--white about-mv" aria-label="Mission and vision">
        <div className="about-mv__grid">
          <Reveal className="about-mv__col">
            <MissionIcon />
            <h2 id="mission-title" className="about-mv__title">
              {accentSerif(a.missionTitle, missionAccent)}
            </h2>
            <p className="about-mv__body">{a.missionBody}</p>
          </Reveal>
          <div className="about-mv__divider" aria-hidden="true" />
          <Reveal delay={0.08} className="about-mv__col">
            <VisionIcon />
            <h2 id="vision-title" className="about-mv__title">
              {accentSerif(a.visionTitle, visionAccent)}
            </h2>
            <p className="about-mv__body">{a.visionBody}</p>
          </Reveal>
        </div>
      </section>

      {/* 3 — Marketplace model */}
      <section className="home-panel home-panel--lilac about-model" aria-labelledby="marketplace-title">
        <div className="about-model__grid">
          <Reveal>
            <h2 id="marketplace-title" className="about-model__title">
              {accentRing(a.marketplaceTitle, marketplaceAccent)}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="about-model__body">{a.marketplaceBody}</p>
          </Reveal>
        </div>
      </section>

      {/* 4 — Values */}
      <section className="home-panel home-panel--white about-values" aria-labelledby="values-title">
        <div className="about-values__wrap">
          <Reveal>
            <h2 id="values-title" className="about-values__title">
              {accentSerif(a.valuesTitle, valuesAccent)}
            </h2>
          </Reveal>
          <ol className="about-values__grid">
            {a.values.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 0.05} className="about-values__item">
                <span className="about-values__index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 5 — Shared download CTA (same as Home) */}
      <DownloadCta />
    </div>
  );
}
