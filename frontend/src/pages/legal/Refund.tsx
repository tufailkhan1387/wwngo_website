import { useLanguage } from '../../context/LanguageContext';
import { LegalDocument } from './LegalDocument';

export function Refund() {
  const { t } = useLanguage();
  return <LegalDocument copy={t.legal.refund} />;
}
