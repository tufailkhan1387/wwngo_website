import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { DownloadCta } from '../components/ui/DownloadCta';
import { Reveal } from '../components/ui/Reveal';
import { useLanguage } from '../context/LanguageContext';
import '../styles/home.css';
import '../styles/safety.css';

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

function accentRing(text: string, accent: string) {
  const idx = text.lastIndexOf(accent);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <LimeRing>
        <span className="safety-hero__accent">{accent}</span>
      </LimeRing>
      {text.slice(idx + accent.length)}
    </>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M10.3 4.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4L13.6 11H4a1 1 0 1 1 0-2h9.6l-3.3-3.3a1 1 0 0 1 0-1.4Z" />
    </svg>
  );
}

const topicIcons: ReactNode[] = [
  <>
    <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </>,
  <>
    <rect x="4" y="10" width="16" height="11" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14.5v2.5" />
  </>,
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="m5.6 5.6 12.8 12.8" />
  </>,
  <>
    <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />
    <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
  </>,
  <path d="M6 8.5a6 6 0 0 1 0 7M9.5 6a10 10 0 0 1 0 12M13 3.5a14 14 0 0 1 0 17" />,
  <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />,
];

export function Safety() {
  const { t, lang } = useLanguage();
  const s = t.safety;
  const titleAccent = lang === 'fr' ? 'Sécurité' : 'Safety';

  return (
    <div className="safety-page">
      <section className="home-panel home-panel--dark safety-hero" aria-label="Safety hero">
        <div className="safety-hero__bg" aria-hidden="true" />
        <div className="safety-hero__inner">
          <Reveal>
            <nav className="safety-hero__crumbs" aria-label="Breadcrumb">
              <Link to="/">{t.nav.home}</Link>
              <span aria-hidden="true">/</span>
              <span>{t.nav.safety}</span>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="safety-hero__title">{accentRing(s.title, titleAccent)}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="safety-hero__lead">{s.lead}</p>
          </Reveal>
        </div>
      </section>

      <section className="home-panel home-panel--white safety-topics" aria-label="Safety topics">
        <ol className="safety-topics__list">
          {s.sections.map((section, i) => {
            const n = String(i + 1).padStart(2, '0');
            const isLast = i === s.sections.length - 1;
            return (
              <Reveal as="li" key={section.title} className="safety-topic" delay={i * 0.04}>
                <div className="safety-topic__head">
                  <span className="safety-topic__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                      {topicIcons[i]}
                    </svg>
                  </span>
                  <div>
                    <p className="safety-topic__num">{n}</p>
                    <h2 className="safety-topic__title">{section.title}</h2>
                  </div>
                </div>
                <div className="safety-topic__body">
                  <p>{section.body}</p>
                  {section.bullets ? (
                    <ul className="safety-topic__checks">
                      {section.bullets.map((b) => (
                        <li key={b}>
                          <span className="safety-topic__check" aria-hidden="true">
                            <CheckIcon />
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {isLast ? (
                    <Link className="safety-topic__cta" to="/legal/safety-rules">
                      {t.footer.safetyRules}
                      <span className="safety-topic__cta-icon">
                        <ArrowIcon />
                      </span>
                    </Link>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </ol>
      </section>

      <DownloadCta />
    </div>
  );
}
