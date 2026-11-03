import { useLanguage } from '../../context/LanguageContext';
import { LegalDocument } from './LegalDocument';

export function Cookies() {
  const { t } = useLanguage();
  return <LegalDocument copy={t.legal.cookies} />;
}
