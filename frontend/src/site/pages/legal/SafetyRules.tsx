import { useLanguage } from '../../context/LanguageContext';
import { LegalDocument } from './LegalDocument';

export function SafetyRules() {
  const { t, lang } = useLanguage();
  return (
    <LegalDocument
      copy={t.legal.safetyRules}
      centered
      crumb={t.footer.safetyRules}
      titleAccent={lang === 'fr' ? 'sécurité' : 'Rules'}
    />
  );
}
