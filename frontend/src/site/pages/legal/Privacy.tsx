import { useLanguage } from '../../context/LanguageContext';
import { LegalDocument } from './LegalDocument';

export function Privacy() {
  const { t } = useLanguage();
  return <LegalDocument copy={t.legal.privacy} />;
}
