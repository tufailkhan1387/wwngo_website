import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { DownloadCta } from '../components/ui/DownloadCta';
import { Reveal } from '../components/ui/Reveal';
import { useLanguage } from '../context/LanguageContext';
import '../styles/home.css';
import '../styles/how-it-works.css';

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
        <span className="hiw-hero__accent">{accent}</span>
      </LimeRing>
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

export function HowItWorks() {
  const { t, lang } = useLanguage();
  const w = t.howItWorks;
  const titleAccent = lang === 'fr' ? 'fonctionne' : 'works';
  const flowAccent = lang === 'fr' ? 'destinataire' : 'receiver';

  const roleLinks = [
    { to: '/customers', label: t.nav.forCustomers },
    { to: '/travelers', label: t.nav.forTravelers },
    { to: '/receivers', label: t.nav.forReceivers },
  ];

  const detailCards = [
    {
      key: 'escrow',
      title: w.escrowTitle,
      body: w.escrowBody,
      icon: (
        <>
          <rect x="4" y="10" width="16" height="11" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14.5v2.5" />
        </>
      ),
    },
    {
      key: 'nfc',
      title: w.nfcTitle,
      body: w.nfcBody,
      icon: <path d="M6 8.5a6 6 0 0 1 0 7M9.5 6a10 10 0 0 1 0 12M13 3.5a14 14 0 0 1 0 17" />,
    },
    {
      key: 'payment',
      title: w.paymentTitle,
      body: w.paymentBody,
      icon: (
        <>
          <rect x="2.5" y="5" width="19" height="14" rx="2" />
          <path d="M2.5 10h19M6 15h4" />
        </>
      ),
    },
  ];

  const renderFlowTitle = () => {
    const idx = w.flowTitle.lastIndexOf(flowAccent);
    if (idx === -1) return w.flowTitle;
    const before = w.flowTitle.slice(0, idx);
    const after = w.flowTitle.slice(idx + flowAccent.length);
    return (
      <>
        {before.split('→').map((part, i, arr) => (
          <span key={`flow-${i}`}>
            {part}
            {i < arr.length - 1 ? <span className="hiw-flow__arrow">→</span> : null}
          </span>
        ))}
        <em className="serif-accent">{flowAccent}</em>
        {after}
      </>
    );
  };

  return (
    <div className="hiw-page">
      <section className="home-panel home-panel--dark hiw-hero" aria-label="How it works hero">
        <div className="hiw-hero__bg" aria-hidden="true" />
        <div className="hiw-hero__inner">
          <Reveal>
            <nav className="hiw-hero__crumbs" aria-label="Breadcrumb">
              <Link to="/">{t.nav.home}</Link>
              <span aria-hidden="true">/</span>
              <span>{t.nav.howItWorks}</span>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="hiw-hero__title">{accentRing(w.title, titleAccent)}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="hiw-hero__lead">{w.lead}</p>
          </Reveal>
        </div>
      </section>

      <section className="home-panel home-panel--white hiw-flow" aria-labelledby="flow-title">
        <div className="hiw-flow__grid">
          <Reveal className="hiw-flow__intro">
            <div className="hiw-flow__sticky">
              <h2 id="flow-title" className="hiw-flow__title">
                {renderFlowTitle()}
              </h2>
              <p className="hiw-flow__lead">{w.flowLead}</p>
              <nav className="hiw-flow__roles" aria-label="Role pages">
                {roleLinks.map((role, i) => (
                  <span key={role.to} className="hiw-flow__role-item">
                    <Link className="hiw-flow__role" to={role.to}>
                      {role.label}
                    </Link>
                    {i < roleLinks.length - 1 ? (
                      <span className="hiw-flow__role-arrow" aria-hidden="true">
                        <ArrowIcon />
                      </span>
                    ) : null}
                  </span>
                ))}
              </nav>
            </div>
          </Reveal>

          <ol className="hiw-steps">
            {w.steps.map((step, i) => {
              const n = String(i + 1).padStart(2, '0');
              const filled = i === 0 || i === w.steps.length - 1;
              return (
                <Reveal as="li" key={step.title} className="hiw-step" delay={i * 0.04}>
                  {i < w.steps.length - 1 ? <span className="hiw-step__line" aria-hidden="true" /> : null}
                  <span className={`hiw-step__num${filled ? ' hiw-step__num--filled' : ''}`}>{n}</span>
                  <div className="hiw-step__body">
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="home-panel home-panel--dark hiw-details" aria-label="Payments and confirmation details">
        <div className="hiw-details__bg" aria-hidden="true" />
        <div className="hiw-details__grid">
          {detailCards.map((card, i) => (
            <Reveal key={card.key} className="hiw-detail" delay={i * 0.05}>
              <span className="hiw-detail__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  {card.icon}
                </svg>
              </span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <DownloadCta />
    </div>
  );
}
