import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from '../components/ui/Accordion';
import { DownloadCta } from '../components/ui/DownloadCta';
import { Reveal } from '../components/ui/Reveal';
import { useLanguage } from '../context/LanguageContext';
import '../styles/home.css';
import '../styles/faq.css';
import '../styles/travelers.css';

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
        <span className="trav-hero__accent">{accent}</span>
      </LimeRing>
      {text.slice(idx + accent.length)}
    </>
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

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M10.3 4.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4L13.6 11H4a1 1 0 1 1 0-2h9.6l-3.3-3.3a1 1 0 0 1 0-1.4Z" />
    </svg>
  );
}

const benefitIcons: ReactNode[] = [
  <>
    <circle cx="6" cy="18" r="2.5" />
    <circle cx="18" cy="6" r="2.5" />
    <path d="M8.5 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.5" />
  </>,
  <>
    <rect x="2.5" y="5" width="19" height="14" rx="2" />
    <path d="M2.5 10h19M6 15h4" />
  </>,
  <>
    <rect x="4" y="10" width="16" height="11" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14.5v2.5" />
  </>,
  <>
    <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
  </>,
];

export function Travelers() {
  const { t, lang } = useLanguage();
  const page = t.travelers;
  const titleAccent = lang === 'fr' ? 'voyageurs' : 'travelers';
  const journeyAccent = lang === 'fr' ? 'voyageur' : 'traveler';
  const whyAccent = 'WWNGO';
  const faqAccent = 'FAQ';
  const stepCount = String(page.steps.length).padStart(2, '0');

  const roleLinks = [
    { to: '/customers', label: t.nav.forCustomers, current: false },
    { to: '/travelers', label: t.nav.forTravelers, current: true },
    { to: '/receivers', label: t.nav.forReceivers, current: false },
  ];

  return (
    <div className="trav-page">
      <section className="home-panel home-panel--dark trav-hero" aria-label="Travelers hero">
        <div className="trav-hero__bg" aria-hidden="true" />
        <div className="trav-hero__inner">
          <Reveal>
            <nav className="trav-hero__crumbs" aria-label="Breadcrumb">
              <Link to="/">{t.nav.home}</Link>
              <span aria-hidden="true">/</span>
              <span>{t.nav.solutions}</span>
              <span aria-hidden="true">/</span>
              <span>{t.nav.forTravelers}</span>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="trav-hero__title">{accentRing(page.title, titleAccent)}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="trav-hero__lead">{page.lead}</p>
          </Reveal>
        </div>
      </section>

      <section className="home-panel home-panel--white trav-journey" aria-labelledby="journey-title">
        <div className="trav-journey__grid">
          <Reveal className="trav-journey__intro">
            <div className="trav-journey__sticky">
              <p className="trav-journey__badge">
                <span aria-hidden="true">{stepCount}</span>
                {page.stepsLabel}
              </p>
              <h2 id="journey-title" className="trav-journey__title">
                {accentSerif(page.journeyTitle, journeyAccent)}
              </h2>
              <nav className="trav-journey__roles" aria-label="Role pages">
                {roleLinks.map((role, i) => (
                  <span key={role.to} className="trav-journey__role-item">
                    <Link
                      className={`trav-journey__role${role.current ? ' is-current' : ''}`}
                      to={role.to}
                      aria-current={role.current ? 'page' : undefined}
                    >
                      {role.label}
                    </Link>
                    {i < roleLinks.length - 1 ? (
                      <span className="trav-journey__role-arrow" aria-hidden="true">
                        <ArrowIcon />
                      </span>
                    ) : null}
                  </span>
                ))}
              </nav>
            </div>
          </Reveal>

          <ol className="trav-steps">
            {page.steps.map((step, i) => {
              const n = String(i + 1).padStart(2, '0');
              const filled = i === 0 || i === page.steps.length - 1;
              return (
                <Reveal as="li" key={step.title} className="trav-step" delay={Math.min(i * 0.03, 0.24)}>
                  {i < page.steps.length - 1 ? <span className="trav-step__line" aria-hidden="true" /> : null}
                  <span className={`trav-step__num${filled ? ' trav-step__num--filled' : ''}`}>{n}</span>
                  <div className="trav-step__body">
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="home-panel home-panel--dark trav-why" aria-labelledby="why-title">
        <div className="trav-why__bg" aria-hidden="true" />
        <div className="trav-why__inner">
          <Reveal>
            <h2 id="why-title" className="trav-why__title">
              {accentSerif(page.benefitsTitle, whyAccent)}
            </h2>
          </Reveal>
          <div className="trav-why__grid">
            {page.benefits.map((b, i) => (
              <Reveal key={b.title} className="trav-why__card" delay={i * 0.05}>
                <span className="trav-why__icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    {benefitIcons[i]}
                  </svg>
                </span>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-panel home-panel--white trav-faq" aria-labelledby="tfaq-title">
        <div className="trav-faq__grid">
          <Reveal>
            <h2 id="tfaq-title" className="trav-faq__title">
              {accentSerif(page.faqTitle, faqAccent)}
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <Accordion items={page.faqs} />
          </Reveal>
        </div>
      </section>

      <DownloadCta />
    </div>
  );
}
