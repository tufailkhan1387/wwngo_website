import { PageHero } from '../components/ui/PageHero';
import { StoreBadges } from '../components/ui/StoreBadges';
import { useLanguage } from '../context/LanguageContext';

export function Download() {
  const { t } = useLanguage();
  const d = t.download;

  return (
    <>
      <PageHero title={d.title} lead={d.lead} />
      <section className="section">
        <div className="container split-highlight fade-up">
          <div>
            <h2>{d.introTitle}</h2>
            <p>{d.introBody}</p>
            <StoreBadges />
            <p className="placeholder-note">{d.webNote}</p>
          </div>
          <div>
            <h3>{d.qrTitle}</h3>
            <div className="qr-placeholder">{d.qrNote}</div>
          </div>
        </div>
      </section>
      <section className="section section--tight" style={{ background: 'var(--surface-alt)' }}>
        <div className="container fade-up">
          <h2>{d.benefitsTitle}</h2>
          <div className="grid-2">
            {d.benefits.map((b) => (
              <div className="feature-tile" key={b.title}>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
