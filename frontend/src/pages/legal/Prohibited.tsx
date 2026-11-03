import { useLanguage } from '../../context/LanguageContext';
import { LegalDocument } from './LegalDocument';

export function Prohibited() {
  const { t } = useLanguage();
  return <LegalDocument copy={t.legal.prohibited} />;
}
