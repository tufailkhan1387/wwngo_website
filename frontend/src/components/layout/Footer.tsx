import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { BrandLogoIcon } from '../ui/BrandLogoIcon';
import { StoreBadges } from '../ui/StoreBadges';

function LangSwitch() {
  const { lang, setLang, t } = useLanguage();
  return (
    <div className="lang-switch lang-switch--footer" role="group" aria-label={t.nav.language}>
      <button type="button" className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>
        EN
      </button>
      <button type="button" className={lang === 'fr' ? 'active' : ''} onClick={() => setLang('fr')}>
        FR
      </button>
    </div>
  );
}

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="site-logo" to="/" aria-label={`${t.common.brand} home`}>
              <span className="site-logo__icon">
                <BrandLogoIcon size={28} />
              </span>
              <span className="site-logo__text">{t.common.brand}</span>
            </Link>
            <p>{t.footer.tagline}</p>
            <div className="footer-brand__stores">
              <StoreBadges variant="footer" />
            </div>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            <div className="footer-col">
              <h4>{t.footer.quickLinks}</h4>
              <ul>
                <li>
                  <Link to="/about">{t.nav.about}</Link>
                </li>
                <li>
                  <Link to="/how-it-works">{t.nav.howItWorks}</Link>
                </li>
                <li>
                  <Link to="/features">{t.nav.features}</Link>
                </li>
                <li>
                  <Link to="/safety">{t.nav.safety}</Link>
                </li>
                <li>
                  <Link to="/faq">{t.nav.faq}</Link>
                </li>
                <li>
                  <Link to="/contact">{t.nav.contact}</Link>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>{t.footer.customerLinks}</h4>
              <ul>
                <li>
                  <Link to="/customers">{t.nav.forCustomers}</Link>
                </li>
              </ul>
              <h4 className="footer-col__spaced">{t.footer.travelerLinks}</h4>
              <ul>
                <li>
                  <Link to="/travelers">{t.nav.forTravelers}</Link>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>{t.footer.receiverLinks}</h4>
              <ul>
                <li>
                  <Link to="/receivers">{t.nav.forReceivers}</Link>
                </li>
              </ul>
              <h4 className="footer-col__spaced">{t.footer.legal}</h4>
              <ul>
                <li>
                  <Link to="/legal/privacy">{t.footer.privacy}</Link>
                </li>
                <li>
                  <Link to="/legal/terms">{t.footer.terms}</Link>
                </li>
                <li>
                  <Link to="/legal/cookies">{t.footer.cookies}</Link>
                </li>
              </ul>
            </div>

            <div className="footer-col footer-contact">
              <h4>{t.footer.contactInfo}</h4>
              <ul>
                <li>
                  <strong>{t.footer.supportEmail}:</strong> {t.footer.supportEmailPlaceholder}
                </li>
                <li>
                  <strong>{t.footer.businessEmail}:</strong> {t.footer.businessEmailPlaceholder}
                </li>
                <li>
                  <strong>{t.footer.address}:</strong> {t.footer.addressPlaceholder}
                </li>
              </ul>
              <p className="footer-social-note">{t.footer.socialPlaceholder}</p>
            </div>
          </nav>
        </div>

        <p className="footer-wordmark" aria-hidden="true">
          {t.common.brand}
        </p>

        <div className="footer-bottom">
          <span>
            © {year} {t.common.brand}. {t.footer.rights}
          </span>
          <div className="footer-legal">
            <Link to="/legal/safety-rules">{t.footer.safetyRules}</Link>
            <Link to="/legal/prohibited">{t.footer.prohibited}</Link>
            <Link to="/legal/refund">{t.footer.refund}</Link>
          </div>
          <LangSwitch />
        </div>
      </div>
    </footer>
  );
}
