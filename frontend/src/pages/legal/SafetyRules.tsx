import { useLanguage } from '../../context/LanguageContext';
import { LegalDocument } from './LegalDocument';

export function SafetyRules() {
  const { t } = useLanguage();
  return <LegalDocument copy={t.legal.safetyRules} />;
}
