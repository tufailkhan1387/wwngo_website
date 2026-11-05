import { useLanguage } from '../../context/LanguageContext';
import { LegalDocument } from './LegalDocument';

export function Refund() {
  const { t, lang } = useLanguage();
  return (
    <LegalDocument
      copy={t.legal.refund}
      centered
      crumb={t.footer.refund}
      titleAccent={lang === 'fr' ? 'remboursement' : 'Policy'}
    />
  );
}
