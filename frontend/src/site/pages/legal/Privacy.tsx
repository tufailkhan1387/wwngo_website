import { useLanguage } from '../../context/LanguageContext';
import { LegalDocument } from './LegalDocument';

export function Privacy() {
  const { t, lang } = useLanguage();
  return (
    <LegalDocument
      copy={t.legal.privacy}
      centered
      hideSectionNumbers
      crumb={t.footer.privacy}
      titleAccent={lang === 'fr' ? 'confidentialité' : 'policy'}
    />
  );
}
