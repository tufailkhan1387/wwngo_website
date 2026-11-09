import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { DownloadCta } from '../components/ui/DownloadCta';
import { Reveal } from '../components/ui/Reveal';
import { useLanguage } from '../context/LanguageContext';
import '../styles/home.css';
import '../styles/features.css';

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
      <LimeRing>
        <span className="feat-hero__accent">{accent}</span>
      </LimeRing>
      {text.slice(idx + accent.length)}
    </>
  );
}

function FeatureIcon({ index }: { index: number }) {
  const icons: ReactNode[] = [
    // ID card / KYC
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="9" cy="12" r="2.2" />
      <path d="M14 10h5M14 14h4" />
    </>,
    // star / ratings
    <path key="b" d="m12 3 2.4 4.9L20 9l-4 3.9.9 5.4L12 15.8 7.1 18.3 8 12.9 4 9l5.6-1.1L12 3Z" />,
    // prohibited
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M6.5 6.5 17.5 17.5" />
    </>,
    // card / stripe
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="2.5" />
      <path d="M2.5 10h19" />
      <path d="M6 15h4" />
    </>,
    // lock / escrow
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>,
    // wallet (distinct from card)
    <>
      <path d="M4 8.5C4 7.1 5.1 6 6.5 6h11c.8 0 1.5.7 1.5 1.5V9H7.2C5.4 9 4 10.3 4 12v4.5C4 18.4 5.6 20 7.5 20h11c.8 0 1.5-.7 1.5-1.5v-7c0-.8-.7-1.5-1.5-1.5" />
      <path d="M20 12.5h-3.2a1.8 1.8 0 0 0 0 3.6H20" />
      <circle cx="16.8" cy="14.3" r="0.7" fill="currentColor" stroke="none" />
    </>,
    // route
    <path key="g" d="M4 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-3h6a4 4 0 0 0 4-4V6a3 3 0 1 1 6 0" />,
    // tracking / pin
    <path key="h" d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />,
    // nfc
    <path key="i" d="M7 8a8 8 0 0 1 0 8M10 10a4.5 4.5 0 0 1 0 4M13 12h.01" />,
    // chat
    <path key="j" d="M5 5h14v10H8l-3 3V5Z" />,
    // bell
    <path key="k" d="M12 3a5 5 0 0 1 5 5v3.5l1.5 2.5H5.5L7 11.5V8a5 5 0 0 1 5-5Zm-2 14a2 2 0 0 0 4 0" />,
  ];
  return (
    <span className="feat-card__icon" aria-hidden="true">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {icons[index % icons.length]}
      </svg>
    </span>
  );
}

function Chevron() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" />
    </svg>
  );
}

const GROUP_IDS = ['trust', 'payments', 'delivery'] as const;

export function Features() {
  const { t, lang } = useLanguage();
  const f = t.features;

  const titleAccent = lang === 'fr' ? 'Fonctionnalités' : 'features';
  const groupAccents =
    lang === 'fr'
      ? ['conformité', 'portefeuille', 'livraison']
      : ['compliance', 'wallet', 'experience'];

  let iconIndex = 0;

  return (
    <div className="feat-page">
      {/* Hero */}
      <section className="home-panel home-panel--dark feat-hero" aria-label="Features hero">
        <div className="feat-hero__bg" aria-hidden="true" />
        <div className="feat-hero__inner">
          <div className="feat-hero__copy">
            <Reveal>
              <nav className="feat-hero__crumbs" aria-label="Breadcrumb">
                <Link to="/">{t.nav.home}</Link>
                <span aria-hidden="true">/</span>
                <span>{t.nav.features}</span>
              </nav>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="feat-hero__title">{accentRing(f.title, titleAccent)}</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="feat-hero__lead">{f.lead}</p>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="feat-hero__nav">
            <ul>
              {f.groups.map((group, i) => (
                <li key={group.title}>
                  <a href={`#${GROUP_IDS[i]}`}>
                    <span className="feat-hero__nav-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="feat-hero__nav-label">{group.title}</span>
                    <Chevron />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Feature groups */}
      {f.groups.map((group, gi) => {
        const dark = gi % 2 === 1;
        return (
          <section
            key={group.title}
            id={GROUP_IDS[gi]}
            className={`home-panel feat-group${dark ? ' feat-group--dark home-panel--dark' : ' home-panel--white'}`}
            aria-labelledby={`${GROUP_IDS[gi]}-title`}
          >
            <div className="feat-group__inner">
              <Reveal className="feat-group__intro">
                <p className={`feat-group__eyebrow${dark ? ' feat-group__eyebrow--dark' : ''}`}>
                  <span className="feat-group__eyebrow-num">{String(gi + 1).padStart(2, '0')}</span>
                  <span className="feat-group__eyebrow-label">{f.eyebrow}</span>
                </p>
                <h2 id={`${GROUP_IDS[gi]}-title`} className="feat-group__title">
                  {accentSerif(group.title, groupAccents[gi])}
                </h2>
              </Reveal>

              <div className="feat-group__grid">
                {group.items.map((item) => {
                  const idx = iconIndex++;
                  return (
                    <Reveal key={item.title} delay={(idx % 5) * 0.04} className="feat-card">
                      <FeatureIcon index={idx} />
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      <DownloadCta />
    </div>
  );
}
