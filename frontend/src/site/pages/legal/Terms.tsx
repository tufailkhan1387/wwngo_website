import { useLanguage } from '../../context/LanguageContext';
import { LegalDocument } from './LegalDocument';

export function Terms() {
  const { t } = useLanguage();
  return <LegalDocument copy={t.legal.terms} />;
}
