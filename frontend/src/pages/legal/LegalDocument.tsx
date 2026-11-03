import { PageHero } from '../../components/ui/PageHero';
import type { LegalPageCopy } from '../../i18n/types';

export function LegalDocument({ copy }: { copy: LegalPageCopy }) {
  return (
    <>
      <PageHero title={copy.title} lead={copy.lead} compact />
      <section className="section section--tight">
        <div className="container legal-content fade-up">
          <div className="legal-draft-banner">{copy.draftNotice}</div>
          <p className="placeholder-note">
            {copy.lastUpdatedLabel}: {copy.lastUpdatedValue}
          </p>
          {copy.sections.map((section) => (
            <div key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
              {section.list ? (
                <ul>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
