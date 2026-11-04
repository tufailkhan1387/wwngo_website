import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import logoBlue from '../../images/wwngo Logo Design Blue.png';
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

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1Z" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.7 3H20.8l-7.1 8.1L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.6-8.7L2 3h6.3l4.4 5.8L17.7 3Zm-1.1 16.2h1.7L7.5 4.7H5.7l10.9 14.5Z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 9.5H3.7V20h2.8V9.5ZM5.1 4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2ZM20.3 20h-2.8v-5.6c0-1.5-.5-2.5-1.8-2.5-.9 0-1.5.6-1.7 1.2-.1.2-.1.6-.1.9V20h-2.8s0-9.1 0-10.5h2.8v1.5c.4-.6 1.2-1.7 3-1.7 2.2 0 3.8 1.4 3.8 4.5V20Z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15.2V8.8L15.5 12 10 15.2Z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="3.5"
          y="3.5"
          width="17"
          height="17"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.1" cy="6.9" r="1.15" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
] as const;

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
                <img src={logoBlue} alt="" width={40} height={40} />
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
              <div className="footer-social" aria-label={t.footer.social}>
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    className="footer-social__link"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
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
