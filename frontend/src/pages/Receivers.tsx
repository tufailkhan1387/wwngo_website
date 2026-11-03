import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from '../components/ui/Accordion';
import { DownloadCta } from '../components/ui/DownloadCta';
import { Reveal } from '../components/ui/Reveal';
import { useLanguage } from '../context/LanguageContext';
import '../styles/home.css';
import '../styles/faq.css';
import '../styles/receivers.css';

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
        <span className="recv-hero__accent">{accent}</span>
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
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
  </>,
  <>
    <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </>,
  <>
    <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />
    <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
  </>,
  <>
    <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
    <path d="M10.5 18.5h3" />
  </>,
];

export function Receivers() {
  const { t, lang } = useLanguage();
  const page = t.receivers;
  const titleAccent = lang === 'fr' ? 'destinataires' : 'receivers';
  const journeyAccent = lang === 'fr' ? 'destinataire' : 'receiver';
  const whyAccent = 'WWNGO';
  const faqAccent = 'FAQ';

  const roleLinks = [
    { to: '/customers', label: t.nav.forCustomers, current: false },
    { to: '/travelers', label: t.nav.forTravelers, current: false },
    { to: '/receivers', label: t.nav.forReceivers, current: true },
  ];

  return (
    <div className="recv-page">
      <section className="home-panel home-panel--dark recv-hero" aria-label="Receivers hero">
        <div className="recv-hero__bg" aria-hidden="true" />
        <div className="recv-hero__inner">
          <Reveal>
            <nav className="recv-hero__crumbs" aria-label="Breadcrumb">
              <Link to="/">{t.nav.home}</Link>
              <span aria-hidden="true">/</span>
              <span>{t.nav.solutions}</span>
              <span aria-hidden="true">/</span>
              <span>{t.nav.forReceivers}</span>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="recv-hero__title">{accentRing(page.title, titleAccent)}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="recv-hero__lead">{page.lead}</p>
          </Reveal>
        </div>
      </section>

      <section className="home-panel home-panel--white recv-journey" aria-labelledby="journey-title">
        <div className="recv-journey__grid">
          <Reveal className="recv-journey__intro">
            <div className="recv-journey__sticky">
              <p className="recv-journey__eyebrow">{page.flowVisualLabel}</p>
              <h2 id="journey-title" className="recv-journey__title">
                {accentSerif(page.journeyTitle, journeyAccent)}
              </h2>
              <nav className="recv-journey__roles" aria-label="Role pages">
                {roleLinks.map((role, i) => (
                  <span key={role.to} className="recv-journey__role-item">
                    <Link
                      className={`recv-journey__role${role.current ? ' is-current' : ''}`}
                      to={role.to}
                      aria-current={role.current ? 'page' : undefined}
                    >
                      {role.label}
                    </Link>
                    {i < roleLinks.length - 1 ? (
                      <span className="recv-journey__role-arrow" aria-hidden="true">
                        <ArrowIcon />
                      </span>
                    ) : null}
                  </span>
                ))}
              </nav>
            </div>
          </Reveal>

          <ol className="recv-steps">
            {page.steps.map((step, i) => {
              const n = String(i + 1).padStart(2, '0');
              const filled = i === 0 || i === page.steps.length - 1;
              return (
                <Reveal as="li" key={step.title} className="recv-step" delay={Math.min(i * 0.03, 0.24)}>
                  {i < page.steps.length - 1 ? <span className="recv-step__line" aria-hidden="true" /> : null}
                  <span className={`recv-step__num${filled ? ' recv-step__num--filled' : ''}`}>{n}</span>
                  <div className="recv-step__body">
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="home-panel home-panel--dark recv-why" aria-labelledby="why-title">
        <div className="recv-why__bg" aria-hidden="true" />
        <div className="recv-why__inner">
          <Reveal>
            <h2 id="why-title" className="recv-why__title">
              {accentSerif(page.benefitsTitle, whyAccent)}
            </h2>
          </Reveal>
          <div className="recv-why__grid">
            {page.benefits.map((b, i) => (
              <Reveal key={b.title} className="recv-why__card" delay={i * 0.05}>
                <span className="recv-why__icon" aria-hidden="true">
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

      <section className="home-panel home-panel--white recv-faq" aria-labelledby="rfaq-title">
        <div className="recv-faq__grid">
          <Reveal>
            <h2 id="rfaq-title" className="recv-faq__title">
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
