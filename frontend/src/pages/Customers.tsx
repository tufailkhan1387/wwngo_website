import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from '../components/ui/Accordion';
import { DownloadCta } from '../components/ui/DownloadCta';
import { Reveal } from '../components/ui/Reveal';
import { useLanguage } from '../context/LanguageContext';
import '../styles/home.css';
import '../styles/faq.css';
import '../styles/customers.css';

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
        <span className="senders-hero__accent">{accent}</span>
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

const benefitIcons: ReactNode[] = [
  <>
    <circle cx="6" cy="18" r="2.5" />
    <circle cx="18" cy="6" r="2.5" />
    <path d="M8.5 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.5" />
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
];

export function Customers() {
  const { t, lang } = useLanguage();
  const page = t.customers;
  const titleAccent = lang === 'fr' ? 'expéditeurs' : 'senders';
  const journeyAccent = lang === 'fr' ? 'expéditeur' : 'sender';
  const whyAccent = 'WWNGO';
  const faqAccent = 'FAQ';
  const stepCount = String(page.steps.length).padStart(2, '0');

  return (
    <div className="senders-page">
      <section className="home-panel home-panel--dark senders-hero" aria-label="Senders hero">
        <div className="senders-hero__bg" aria-hidden="true" />
        <div className="senders-hero__inner">
          <Reveal>
            <nav className="senders-hero__crumbs" aria-label="Breadcrumb">
              <Link to="/">{t.nav.home}</Link>
              <span aria-hidden="true">/</span>
              <span>{t.nav.solutions}</span>
              <span aria-hidden="true">/</span>
              <span>{t.nav.forCustomers}</span>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="senders-hero__title">{accentRing(page.title, titleAccent)}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="senders-hero__lead">{page.lead}</p>
          </Reveal>
        </div>
      </section>

      <section className="home-panel home-panel--white senders-journey" aria-labelledby="journey-title">
        <div className="senders-journey__grid">
          <Reveal className="senders-journey__intro">
            <div className="senders-journey__sticky">
              <p className="senders-journey__badge">
                <span aria-hidden="true">{stepCount}</span>
                {page.stepsLabel}
              </p>
              <h2 id="journey-title" className="senders-journey__title">
                {accentSerif(page.journeyTitle, journeyAccent)}
              </h2>
            </div>
          </Reveal>

          <ol className="senders-steps">
            {page.steps.map((step, i) => {
              const n = String(i + 1).padStart(2, '0');
              const filled = i === 0 || i === 8 || i === page.steps.length - 1;
              return (
                <Reveal as="li" key={step.title} className="senders-step" delay={Math.min(i * 0.03, 0.24)}>
                  {i < page.steps.length - 1 ? <span className="senders-step__line" aria-hidden="true" /> : null}
                  <span className={`senders-step__num${filled ? ' senders-step__num--filled' : ''}`}>{n}</span>
                  <div className="senders-step__body">
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="home-panel home-panel--dark senders-why" aria-labelledby="why-title">
        <div className="senders-why__bg" aria-hidden="true" />
        <div className="senders-why__inner">
          <Reveal>
            <h2 id="why-title" className="senders-why__title">
              {accentSerif(page.benefitsTitle, whyAccent)}
            </h2>
          </Reveal>
          <div className="senders-why__grid">
            {page.benefits.map((b, i) => (
              <Reveal key={b.title} className="senders-why__card" delay={i * 0.05}>
                <span className="senders-why__icon" aria-hidden="true">
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

      <section className="home-panel home-panel--white senders-faq" aria-labelledby="sfaq-title">
        <div className="senders-faq__grid">
          <Reveal>
            <h2 id="sfaq-title" className="senders-faq__title">
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
