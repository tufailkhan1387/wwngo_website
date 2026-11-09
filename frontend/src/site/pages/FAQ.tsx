import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from '../components/ui/Accordion';
import { DownloadCta } from '../components/ui/DownloadCta';
import { Reveal } from '../components/ui/Reveal';
import { useLanguage } from '../context/LanguageContext';
import '../styles/home.css';
import '../styles/faq.css';

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
      <LimeRing>{accent}</LimeRing>
      {text.slice(idx + accent.length)}
    </>
  );
}

export function FAQ() {
  const { t, lang } = useLanguage();
  const f = t.faq;
  const [query, setQuery] = useState('');
  const [activeId, setActiveId] = useState(f.categories[0]?.id ?? 'general');

  const titleAccent = 'questions';

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return f.categories;
    return f.categories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q),
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [f.categories, query]);

  useEffect(() => {
    setActiveId(filtered[0]?.id ?? f.categories[0]?.id ?? 'general');
  }, [lang, f.categories, filtered]);

  useEffect(() => {
    const ids = f.categories.map((c) => c.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.1, 0.4, 0.7] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [f.categories, filtered]);

  return (
    <div className="faq-page">
      {/* Hero — centered */}
      <section className="home-panel home-panel--dark faq-hero" aria-label="FAQ hero">
        <div className="faq-hero__bg" aria-hidden="true" />
        <div className="faq-hero__inner">
          <Reveal>
            <nav className="faq-hero__crumbs" aria-label="Breadcrumb">
              <Link to="/">{t.nav.home}</Link>
              <span aria-hidden="true">/</span>
              <span>{t.nav.faq}</span>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="faq-hero__title">{accentRing(f.title, titleAccent)}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="faq-hero__lead">{f.lead}</p>
          </Reveal>
          <Reveal delay={0.15} className="faq-hero__search-wrap">
            <label className="faq-hero__search">
              <span className="sr-only">{f.searchPlaceholder}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={f.searchPlaceholder}
                autoComplete="off"
              />
            </label>
          </Reveal>
        </div>
      </section>

      {/* Topics + accordions */}
      <section className="home-panel home-panel--white faq-body" aria-label="Questions">
        <div className="faq-body__grid">
          <aside className="faq-topics" aria-label="FAQ categories">
            <p className="faq-topics__label">{f.topicsLabel}</p>
            <ul className="faq-topics__list">
              {f.categories.map((cat) => (
                <li key={cat.id}>
                  <a
                    href={`#${cat.id}`}
                    className={`faq-topics__link${activeId === cat.id ? ' is-active' : ''}`}
                    onClick={() => setActiveId(cat.id)}
                  >
                    {cat.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="faq-groups">
            {filtered.length === 0 ? (
              <p className="faq-empty">{lang === 'fr' ? 'Aucun résultat.' : 'No matching questions.'}</p>
            ) : (
              filtered.map((cat, i) => {
                const num = f.categories.findIndex((c) => c.id === cat.id) + 1;
                return (
                  <div id={cat.id} className="faq-group" key={cat.id}>
                    <h2 className="faq-group__title">
                      <span className="faq-group__num">{String(num).padStart(2, '0')}</span>
                      {cat.title}
                    </h2>
                    <Accordion
                      key={`${cat.id}-${query}`}
                      items={cat.items}
                      defaultOpen={i === 0 && !query ? 0 : null}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      <DownloadCta />
    </div>
  );
}
