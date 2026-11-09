import { Reveal } from './Reveal';
import { StoreBadges } from './StoreBadges';
import { useLanguage } from '../../context/LanguageContext';
import '../../styles/home.css';

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

/** Shared download CTA — same design as Home on every page. */
export function DownloadCta() {
  const { t } = useLanguage();

  return (
    <section id="download" className="home-panel home-panel--brand home-download" aria-labelledby="app-title">
      <div className="home-download__bg" aria-hidden="true" />
      <Reveal className="home-download__inner">
        <p className="home-download__badge">
          <span className="home-download__badge-icon" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
            </svg>
          </span>
          {t.common.appLabel}
        </p>
        <h2 id="app-title" className="home-section-title" style={{ marginTop: '1.5rem' }}>
          {accentSerif(t.common.downloadTitle, 'app')}
        </h2>
        <p className="home-section-lead" style={{ marginTop: '1.25rem' }}>
          {t.common.downloadLead}
        </p>
        <div className="home-download__badges">
          <StoreBadges variant="cta" />
        </div>
      </Reveal>
    </section>
  );
}
