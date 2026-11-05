import { useLanguage } from '../../context/LanguageContext';
import { LegalDocument } from './LegalDocument';

export function Prohibited() {
  const { t, lang } = useLanguage();
  return (
    <LegalDocument
      copy={t.legal.prohibited}
      centered
      crumb={t.footer.prohibited}
      titleAccent={lang === 'fr' ? 'interdits' : 'Items'}
    />
  );
}
