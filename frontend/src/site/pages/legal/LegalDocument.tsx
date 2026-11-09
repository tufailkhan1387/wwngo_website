import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../../components/ui/PageHero';
import { Reveal } from '../../components/ui/Reveal';
import { useLanguage } from '../../context/LanguageContext';
import type { LegalPageCopy } from '../../i18n/types';
import '../../styles/home.css';
import '../../styles/how-it-works.css';
import '../../styles/legal.css';

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

function accentRing(text: string, accent?: string) {
  if (!accent) return text;
  const idx = text.lastIndexOf(accent);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <LimeRing>
        <span className="hiw-hero__accent">{accent}</span>
      </LimeRing>
      {text.slice(idx + accent.length)}
    </>
  );
}

type Props = {
  copy: LegalPageCopy;
  /** Centered dark hero like How it works */
  centered?: boolean;
  crumb?: string;
  titleAccent?: string;
};

export function LegalDocument({ copy, centered = false, crumb, titleAccent }: Props) {
  const { t } = useLanguage();

  if (!centered) {
    return (
      <>
        <PageHero title={copy.title} lead={copy.lead} compact />
        <section className="section section--tight">
          <div className="container legal-content fade-up">
            {copy.draftNotice ? <div className="legal-draft-banner">{copy.draftNotice}</div> : null}
            {copy.lastUpdatedValue ? (
              <p className="placeholder-note">
                {copy.lastUpdatedLabel}: {copy.lastUpdatedValue}
              </p>
            ) : null}
            {copy.sections.map((section) => (
              <div key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs
                  .filter((p) => p.trim().length > 0)
                  .map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                {section.list ? (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      </>
    );
  }

  return (
    <div className="legal-page">
      <section className="home-panel home-panel--dark hiw-hero" aria-label={copy.title}>
        <div className="hiw-hero__bg" aria-hidden="true" />
        <div className="hiw-hero__inner">
          <Reveal>
            <nav className="hiw-hero__crumbs" aria-label="Breadcrumb">
              <Link to="/">{t.nav.home}</Link>
              <span aria-hidden="true">/</span>
              <span>{crumb ?? copy.title}</span>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="hiw-hero__title">{accentRing(copy.title, titleAccent)}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="hiw-hero__lead">{copy.lead}</p>
          </Reveal>
        </div>
      </section>

      <section className="home-panel home-panel--white legal-body" aria-label={`${copy.title} content`}>
        <div className="legal-body__inner">
          {copy.sections.map((section, index) => (
            <Reveal key={section.heading} delay={Math.min(index * 0.04, 0.2)} className="legal-section">
              <div className="legal-section__head">
                <span className="legal-section__num" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="legal-section__title">{section.heading.replace(/^\d+\.\s*/, '')}</h2>
              </div>
              {section.paragraphs
                .filter((p) => p.trim().length > 0)
                .map((p) => (
                  <p className="legal-section__p" key={p.slice(0, 48)}>
                    {p}
                  </p>
                ))}
              {section.list ? (
                <ul className="legal-section__list">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
