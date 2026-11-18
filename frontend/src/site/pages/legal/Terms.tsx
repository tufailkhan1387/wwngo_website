import { useLanguage } from '../../context/LanguageContext';
import { LegalDocument } from './LegalDocument';

export function Terms() {
  const { t, lang } = useLanguage();
  return (
    <LegalDocument
      copy={t.legal.terms}
      centered
      hideSectionNumbers
      crumb={t.footer.terms}
      titleAccent={lang === 'fr' ? 'utilisation' : 'service'}
    />
  );
}
