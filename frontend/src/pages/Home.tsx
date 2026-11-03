import { useEffect, useRef, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { DownloadCta } from '../components/ui/DownloadCta';
import { Reveal } from '../components/ui/Reveal';
import { useLanguage } from '../context/LanguageContext';
import '../styles/home.css';

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M10.3 4.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4L13.6 11H4a1 1 0 1 1 0-2h9.6l-3.3-3.3a1 1 0 0 1 0-1.4Z" />
    </svg>
  );
}

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

function accentSplit(text: string, accent: string, mode: 'ring' | 'serif' = 'serif') {
  const idx = text.lastIndexOf(accent);
  if (idx === -1) return text;
  const before = text.slice(0, idx);
  const after = text.slice(idx + accent.length);
  const wrapped =
    mode === 'ring' ? (
      <LimeRing>{accent}</LimeRing>
    ) : (
      <em className="serif-accent">{accent}</em>
    );
  return (
    <>
      {before}
      {wrapped}
      {after}
    </>
  );
}

function HomeFaqList({ items }: { items: { q: string; a: string }[] }) {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = listRef.current;
    if (!root) return;
    const details = root.querySelectorAll('details');
    const onToggle = (e: Event) => {
      const target = e.target as HTMLDetailsElement;
      if (!target.open) return;
      details.forEach((d) => {
        if (d !== target) d.open = false;
      });
    };
    details.forEach((d) => d.addEventListener('toggle', onToggle));
    return () => details.forEach((d) => d.removeEventListener('toggle', onToggle));
  }, [items]);

  return (
    <div className="home-faq-list" ref={listRef}>
      {items.map((item, i) => (
        <details className="home-faq-details" key={item.q} open={i === 0}>
          <summary>
            {item.q}
            <span className="home-faq-plus" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 4a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H5a1 1 0 1 1 0-2h4V5a1 1 0 0 1 1-1Z" />
              </svg>
            </span>
          </summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function Home() {
  const { t, lang } = useLanguage();
  const h = t.home;

  const rolesAccent = lang === 'fr' ? 'trajet' : 'journey';
  const featuresAccent = lang === 'fr' ? 'confiance' : 'trust';
  const whyAccent = lang === 'fr' ? 'pair à pair' : 'peer-to-peer';
  const faqAccent = lang === 'fr' ? 'fréquentes' : 'questions';
  const whatRing = lang === 'fr' ? 'vrais trajets' : 'real journeys';
  const flowRing = lang === 'fr' ? 'flux connecté' : 'connected flow';
  const safetyRing = lang === 'fr' ? 'place de marché' : 'marketplace';

  const heroTail = lang === 'fr' ? 'voyageurs de confiance' : 'you can trust';
  const heroTailIdx = h.heroHeadline.lastIndexOf(heroTail);
  const heroHead =
    heroTailIdx === -1 ? h.heroHeadline : h.heroHeadline.slice(0, heroTailIdx).trimEnd();
  const heroTailText = heroTailIdx === -1 ? '' : heroTail;

  const HeroIcons = (
    <span className="home-hero__icons" aria-hidden="true">
      <span className="home-hero__icon-a">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5Z" />
        </svg>
      </span>
      <span className="home-hero__icon-b">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 8l-9-5-9 5 9 5 9-5Z" />
          <path d="M3 8v8l9 5 9-5V8M12 13v8" />
        </svg>
      </span>
    </span>
  );

  return (
    <div className="home-page">
      <section className="home-panel home-hero home-panel--dark" aria-label="Hero">
        <div className="home-hero__bg" aria-hidden="true" />

        <div className="home-hero__copy">
          <Reveal>
            <p className="home-hero__badge">
              {h.heroBadge} · <span className="home-hero__badge-accent">{h.heroBadgeAccent}</span>
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1>
              {heroHead}
              {heroTailText ? (
                <>
                  {' '}
                  <span className="home-hero__trust">
                    {heroTailText}
                    {HeroIcons}
                  </span>
                </>
              ) : (
                HeroIcons
              )}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="home-hero__lead">{h.heroLead}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="home-hero__ctas">
              <Link className="home-btn-pill home-btn-pill--brand" to="/download">
                {h.heroCtaDownload}
                <span className="home-btn-pill__icon">
                  <ArrowIcon />
                </span>
              </Link>
              <Link className="home-btn-pill home-btn-pill--outline-light" to="/how-it-works">
                {h.heroCtaHow}
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="home-hero__product">
          <div className="home-hero__product-stage">
            <div className="home-hero__side-left" aria-hidden="true">
              <div className="home-hero__float-a home-glass home-hero__glass-card">
                <div className="home-hero__card-row">
                  <p className="home-hero__card-label">Traveler profile</p>
                  <span className="home-hero__verified">Verified</span>
                </div>
                <div className="home-hero__kyc">
                  <span className="home-hero__kyc-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </span>
                  <div>
                    <p className="home-hero__kyc-title">KYC complete</p>
                    <p className="home-hero__kyc-sub">Identity checked before carrying</p>
                  </div>
                </div>
              </div>
              <div className="home-glass home-hero__skeleton">
                <span className="home-hero__skel-avatar home-hero__skel-avatar--brand" />
                <span className="home-hero__skel-lines">
                  <span />
                  <span />
                </span>
              </div>
              <div className="home-glass home-hero__skeleton home-hero__skeleton--offset">
                <span className="home-hero__skel-avatar home-hero__skel-avatar--ink" />
                <span className="home-hero__skel-lines">
                  <span />
                  <span />
                </span>
              </div>
            </div>

            <div className="home-hero__phone" aria-hidden="true">
              <div className="home-hero__phone-inner">
                <div className="home-hero__phone-top">
                  <span className="home-hero__phone-brand">WWNGO</span>
                  <span className="home-hero__phone-island" />
                  <span className="home-hero__phone-avatar" />
                </div>
                <div className="home-hero__phone-tab">My delivery</div>
                <p className="home-hero__phone-title">
                  Parcel <span>in transit</span>
                </p>
                <div className="home-hero__route">
                  <span>Origin</span>
                  <span className="home-hero__route-line">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5Z" />
                    </svg>
                  </span>
                  <span>Destination</span>
                </div>
                <div className="home-hero__status">
                  <span className="home-hero__progress">3/4</span>
                  <p>
                    Traveler updated tracking. Next: <strong>receiver handoff</strong> via NFC or in-app.
                  </p>
                </div>
                <div className="home-hero__phone-sky home-sky">
                  <span className="home-hero__cloud home-hero__cloud--a" />
                  <span className="home-hero__cloud home-hero__cloud--b" />
                  <span className="home-hero__cloud home-hero__cloud--c" />
                  <svg className="home-hero__plane" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5Z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="home-hero__side-right" aria-hidden="true">
              <div className="home-hero__float-b home-glass-blue home-hero__glass-card home-hero__escrow">
                <span className="home-hero__escrow-badge">
                  <span>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <rect x="5" y="11" width="14" height="10" rx="2" />
                      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                    </svg>
                  </span>
                  Escrow
                </span>
                <p className="home-hero__escrow-label">Sender payment</p>
                <p className="home-hero__escrow-title">Held until delivery</p>
                <div className="home-hero__escrow-steps">
                  <span>Paid</span>
                  <i />
                  <span className="is-active">Held</span>
                  <i />
                  <span>Released</span>
                </div>
                <svg className="home-dash home-hero__escrow-chart" viewBox="0 0 200 56" fill="none">
                  <path className="home-dash" d="M6 50C40 6 150 0 194 40" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="6" cy="50" r="3" fill="currentColor" />
                  <circle cx="194" cy="40" r="3" fill="currentColor" />
                </svg>
                <p className="home-hero__escrow-note">Processed securely with Stripe</p>
              </div>
              <div className="home-hero__nfc">
                <span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M6 8.5a6 6 0 0 1 0 7M9.5 6a10 10 0 0 1 0 12M13 3.5a14 14 0 0 1 0 17" />
                  </svg>
                </span>
                NFC handoff ready
              </div>
            </div>
          </div>
        </div>

        <svg className="home-hero__notch" viewBox="0 0 760 64" fill="currentColor" aria-hidden="true">
          <path d="M0 64C70 64 90 0 170 0h420c80 0 100 64 170 64Z" />
        </svg>
      </section>

      <section className="home-panel home-panel--brand" aria-labelledby="what-title">
        <div className="home-what-grid">
          <Reveal className="home-what-copy">
            <p className="home-eyebrow home-eyebrow--dark">
              <span className="home-eyebrow__num">01</span>
              {h.whatIsEyebrow}
            </p>
            <h2 id="what-title" className="home-section-title home-what-title" style={{ marginTop: '1.5rem' }}>
              {accentSplit(h.whatIsTitle, whatRing, 'ring')}
            </h2>
            <p className="home-what-lead">{h.whatIsLead}</p>
            <p className="home-what-body">{h.whatIsBody}</p>
          </Reveal>
          <Reveal className="home-what-visual" delay={0.08}>
            <div className="home-what-scene home-sky" aria-hidden="true">
              <span className="home-what-cloud home-what-cloud--a" />
              <span className="home-what-cloud home-what-cloud--b" />
              <span className="home-what-cloud home-what-cloud--c" />
              <svg className="home-what-path" viewBox="0 0 400 200" fill="none" preserveAspectRatio="none">
                <path
                  className="home-dash"
                  d="M10 180C90 20 300 10 390 120"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              <svg className="home-what-plane" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5Z" />
              </svg>
              <span className="home-what-parcel">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M21 8l-9-5-9 5 9 5 9-5Z" />
                  <path d="M3 8v8l9 5 9-5V8M12 13v8" />
                </svg>
              </span>
            </div>
            <div className="home-what-float-card">
              <span className="home-what-float-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2Z" />
                </svg>
              </span>
              <div>
                <p className="home-what-float-title">Real trips, agreed limits</p>
                <p className="home-what-float-body">
                  Travelers flying or driving carry parcels within terms agreed in the app.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="home-panel home-panel--white" aria-labelledby="flow-title">
        <div className="home-panel__inner">
          <Reveal className="home-flow-head">
            <p className="home-eyebrow home-eyebrow--light">
              <span className="home-eyebrow__num">02</span>
              {h.howWorksEyebrow}
            </p>
            <h2 id="flow-title" className="home-section-title" style={{ marginTop: '1.5rem', maxWidth: '48rem', marginInline: 'auto' }}>
              {accentSplit(h.howWorksTitle, flowRing, 'ring')}
            </h2>
            <p className="home-section-lead" style={{ marginTop: '1.5rem', marginInline: 'auto', textAlign: 'center' }}>
              {h.howWorksLead}
            </p>
          </Reveal>

          <ol className="home-flow-steps">
            {h.howWorksSteps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 0.06}>
                <p className="home-flow-num">{String(i + 1).padStart(2, '0')}</p>
                <p className="home-flow-role">
                  {[h.flowRoleSender, h.flowRoleTraveler, h.flowRoleReceiver][i]}
                </p>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </Reveal>
            ))}
          </ol>

          <Reveal className="home-flow-cta">
            <Link className="home-btn-pill home-btn-pill--ink" to="/how-it-works">
              {t.common.learnHow}
              <span className="home-btn-pill__icon">
                <ArrowIcon />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="home-panel home-panel--white" aria-labelledby="roles-title">
        <div className="home-panel__inner">
          <Reveal className="home-roles-head">
            <div>
              <p className="home-eyebrow home-eyebrow--light">
                <span className="home-eyebrow__num">03</span>
                {h.rolesEyebrow}
              </p>
              <h2 id="roles-title" className="home-section-title" style={{ marginTop: '1.5rem', maxWidth: '28rem' }}>
                {accentSplit(h.rolesTitle, rolesAccent, 'serif')}
              </h2>
            </div>
            <p className="home-section-lead">{h.rolesLead}</p>
          </Reveal>

          <div className="home-bento">
            <Reveal>
              <Link className="home-bento-card home-bento-card--brand" to="/customers">
                <svg width="56" height="56" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" aria-hidden="true">
                  <path d="M24 4v40M4 24h40M9.9 9.9l28.2 28.2M38.1 9.9 9.9 38.1" />
                </svg>
                <h3>{h.roleCustomerTitle}</h3>
                <p>{h.roleCustomerLead}</p>
                <span className="home-bento-link">
                  {t.common.learnMore}
                  <span className="home-bento-link__arrow" style={{ background: 'white', color: 'var(--brand)' }}>
                    <ArrowIcon />
                  </span>
                </span>
              </Link>
            </Reveal>
            <Reveal delay={0.06}>
              <Link className="home-bento-card home-bento-card--gradient" to="/travelers">
                <span className="home-bento-glow" aria-hidden="true" />
                <span className="home-bento-suitcase" aria-hidden="true">
                  <span className="home-bento-suitcase__handle" />
                  <span className="home-bento-suitcase__line" />
                  <span className="home-bento-suitcase__strap" />
                  <span className="home-bento-suitcase__wheel home-bento-suitcase__wheel--l" />
                  <span className="home-bento-suitcase__wheel home-bento-suitcase__wheel--r" />
                </span>
                <span className="home-bento-chip">Carriers</span>
                <h3>{h.roleTravelerTitle}</h3>
                <p>{h.roleTravelerLead}</p>
                <span className="home-bento-link">
                  {t.common.learnMore}
                  <span className="home-bento-link__arrow" style={{ background: 'white', color: 'var(--brand)' }}>
                    <ArrowIcon />
                  </span>
                </span>
              </Link>
            </Reveal>
            <Reveal delay={0.12}>
              <Link className="home-bento-card home-bento-card--lilac" to="/receivers">
                <div className="home-bento-notifs" aria-hidden="true">
                  <div className="home-bento-notif home-bento-notif--a">
                    <span className="home-bento-notif__icon home-bento-notif__icon--ink">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.9 1.9 0 0 0 3.4 0" />
                      </svg>
                    </span>
                    <div>
                      <p className="home-bento-notif__title">Parcel on its way</p>
                      <p className="home-bento-notif__sub">Status updates in the app</p>
                    </div>
                  </div>
                  <div className="home-bento-notif home-bento-notif--b">
                    <span className="home-bento-notif__icon home-bento-notif__icon--brand">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <div>
                      <p className="home-bento-notif__title">Confirm handoff</p>
                      <p className="home-bento-notif__sub">Secure in-app confirmation</p>
                    </div>
                  </div>
                </div>
                <h3>{h.roleReceiverTitle}</h3>
                <p>{h.roleReceiverLead}</p>
                <span className="home-bento-link">
                  {t.common.learnMore}
                  <span className="home-bento-link__arrow" style={{ background: 'var(--ink)', color: 'white' }}>
                    <ArrowIcon />
                  </span>
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="home-panel home-panel--lilac" aria-labelledby="platform-title">
        <div className="home-panel__inner">
          <Reveal className="home-flow-head">
            <p className="home-eyebrow home-eyebrow--white-pill" style={{ marginInline: 'auto' }}>
              <span className="home-eyebrow__num">04</span>
              {h.featuresEyebrow}
            </p>
            <h2 id="platform-title" className="home-section-title" style={{ marginTop: '1.5rem', maxWidth: '48rem', marginInline: 'auto' }}>
              {accentSplit(h.featuresTitle, featuresAccent, 'serif')}
            </h2>
            <p className="home-section-lead" style={{ marginTop: '1.25rem', marginInline: 'auto', textAlign: 'center' }}>
              {h.featuresLead}
            </p>
          </Reveal>

          <div className="home-platform-grid">
            {h.featuresItems.map((item, i) => (
              <Reveal
                as="article"
                key={item.title}
                delay={i * 0.05}
                className={`home-platform-card ${i === 0 ? 'home-platform-card--featured' : 'home-platform-card--white'}`}
              >
                <span className={`home-platform-icon ${i === 0 ? 'home-platform-icon--featured' : ''}`}>
                  {i === 0 && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <circle cx="9" cy="11" r="2.2" />
                      <path d="M5.8 16c.6-1.6 1.8-2.4 3.2-2.4s2.6.8 3.2 2.4M14.5 10h4M14.5 13.5h3" />
                    </svg>
                  )}
                  {i === 1 && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                      <rect x="4" y="10" width="16" height="11" rx="2" />
                      <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14.5v2.5" />
                    </svg>
                  )}
                  {i === 2 && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                      <path d="M6 8.5a6 6 0 0 1 0 7M9.5 6a10 10 0 0 1 0 12M13 3.5a14 14 0 0 1 0 17" />
                    </svg>
                  )}
                  {i === 3 && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />
                      <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
                    </svg>
                  )}
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="home-flow-cta">
            <Link className="home-btn-pill home-btn-pill--platform" to="/features">
              {t.common.learnMore}
              <span className="home-btn-pill__icon">
                <ArrowIcon />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="home-panel home-panel--dark" aria-labelledby="safety-title">
        <div className="home-safety-bg" aria-hidden="true" />
        <div className="home-panel__inner home-safety-grid">
          <Reveal>
            <p className="home-eyebrow home-eyebrow--dark">
              <span className="home-eyebrow__num">05</span>
              {h.safetyEyebrow}
            </p>
            <h2 id="safety-title" className="home-section-title" style={{ marginTop: '1.5rem' }}>
              {accentSplit(h.safetyTitle, safetyRing, 'ring')}
            </h2>
            <p className="home-section-lead" style={{ marginTop: '1.75rem' }}>
              {h.safetyLead}
            </p>
            <Link className="home-btn-pill home-btn-pill--white" to="/safety" style={{ marginTop: '2rem' }}>
              {t.nav.safety}
              <span className="home-btn-pill__icon">
                <ArrowIcon />
              </span>
            </Link>
          </Reveal>

          <ul className="home-safety-points">
            {h.safetyPoints.map((point, i) => (
              <Reveal as="li" key={point} delay={i * 0.05} className="home-safety-point home-glass-blue">
                <span className="home-safety-point__icon">
                  {i === 0 && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  )}
                  {i === 1 && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <rect x="4" y="10" width="16" height="11" rx="2" />
                      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                    </svg>
                  )}
                  {i === 2 && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="m5.6 5.6 12.8 12.8" />
                    </svg>
                  )}
                  {i === 3 && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
                    </svg>
                  )}
                </span>
                <p>{point}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="home-panel home-panel--white" aria-labelledby="why-title">
        <div className="home-panel__inner">
          <Reveal className="home-flow-head">
            <p className="home-eyebrow home-eyebrow--light" style={{ marginInline: 'auto' }}>
              <span className="home-eyebrow__num">06</span>
              {h.whyEyebrow}
            </p>
            <h2 id="why-title" className="home-section-title" style={{ marginTop: '1.5rem', maxWidth: '48rem', marginInline: 'auto' }}>
              {accentSplit(h.whyTitle, whyAccent, 'serif')}
            </h2>
          </Reveal>

          <div className="home-why-grid">
            {h.whyItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05} className="home-why-item">
                <span className="home-why-icon">
                  {i === 0 && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                      <path d="M3 17c4-9 14-9 18 0" />
                      <circle cx="3" cy="17" r="1.6" />
                      <circle cx="21" cy="17" r="1.6" />
                    </svg>
                  )}
                  {i === 1 && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                      <path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z" />
                      <circle cx="7.5" cy="7.5" r="1.5" />
                    </svg>
                  )}
                  {i === 2 && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z" />
                    </svg>
                  )}
                  {i === 3 && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
                      <path d="M10.5 18.5h3" />
                    </svg>
                  )}
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-panel home-panel--white" aria-labelledby="faq-title">
        <div className="home-panel__inner home-faq-grid">
          <Reveal>
            <p className="home-eyebrow home-eyebrow--light">
              <span className="home-eyebrow__num">07</span>
              {h.faqEyebrow}
            </p>
            <h2 id="faq-title" className="home-section-title" style={{ marginTop: '1.5rem' }}>
              {accentSplit(h.faqTitle, faqAccent, 'serif')}
            </h2>
            <Link className="home-btn-pill home-btn-pill--ink" to="/faq" style={{ marginTop: '2rem' }}>
              {t.common.viewAllFaq}
              <span className="home-btn-pill__icon">
                <ArrowIcon />
              </span>
            </Link>
          </Reveal>

          <Reveal delay={0.06}>
            <HomeFaqList items={h.faqPreview} />
            <p className="home-testimonials-note">
              <span className="home-testimonials-dot" aria-hidden="true" />
              {h.testimonialsNote}
            </p>
          </Reveal>
        </div>
      </section>

      <DownloadCta />
    </div>
  );
}
