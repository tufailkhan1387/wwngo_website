import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { BrandLogoIcon } from '../ui/BrandLogoIcon';
import '../../styles/layout.css';

function LangSwitch({ variant = 'default' }: { variant?: 'default' | 'home' | 'footer' }) {
  const { lang, setLang, t } = useLanguage();
  return (
    <div className={`lang-switch lang-switch--${variant}`} role="group" aria-label={t.nav.language}>
      <button type="button" className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>
        EN
      </button>
      <button type="button" className={lang === 'fr' ? 'active' : ''} onClick={() => setLang('fr')}>
        FR
      </button>
    </div>
  );
}

function SolutionsDropdown({ mobile }: { mobile?: boolean }) {
  const { t } = useLanguage();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isActive = ['/customers', '/travelers', '/receivers'].some((p) => pathname.startsWith(p));

  useEffect(() => {
    if (mobile) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, [mobile]);

  return (
    <div className={`nav-dropdown ${open ? 'open' : ''}${isActive ? ' is-active' : ''}`} ref={ref}>
      <button
        type="button"
        className={`nav-dropdown__trigger${isActive ? ' active' : ''}`}
        aria-expanded={open}
        aria-current={isActive ? 'page' : undefined}
        onClick={() => setOpen((v) => !v)}
      >
        {t.nav.solutions}
        <svg className="nav-dropdown__chev" width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" />
        </svg>
      </button>
      <div className="nav-dropdown__menu">
        <NavLink to="/customers" onClick={() => setOpen(false)}>
          <span className="nav-dropdown__title">{t.nav.forCustomers}</span>
        </NavLink>
        <NavLink to="/travelers" onClick={() => setOpen(false)}>
          <span className="nav-dropdown__title">{t.nav.forTravelers}</span>
        </NavLink>
        <NavLink to="/receivers" onClick={() => setOpen(false)}>
          <span className="nav-dropdown__title">{t.nav.forReceivers}</span>
        </NavLink>
      </div>
    </div>
  );
}

export function Header() {
  const { t } = useLanguage();
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const isOverlayNav =
    isHome ||
    pathname === '/about' ||
    pathname === '/faq' ||
    pathname === '/features' ||
    pathname === '/contact' ||
    pathname === '/how-it-works' ||
    pathname === '/safety' ||
    pathname === '/customers' ||
    pathname === '/travelers' ||
    pathname === '/receivers';
  const [mobileOpen, setMobileOpen] = useState(false);

  const navClass = ({ isActive }: { isActive: boolean }) => (isActive ? 'active' : undefined);

  return (
    <header className={`site-header${isOverlayNav ? ' site-header--home' : ''}`}>
      <div className="container site-header__inner">
        <Link className="site-logo" to="/" aria-label={`${t.common.brand} home`}>
          <span className="site-logo__icon">
            <BrandLogoIcon size={28} />
          </span>
          <span className="site-logo__text">{t.common.brand}</span>
        </Link>

        <nav className="site-nav" aria-label="Main">
          <NavLink to="/" end className={navClass}>
            {t.nav.home}
          </NavLink>
          <NavLink to="/about" className={navClass}>
            {t.nav.about}
          </NavLink>
          <NavLink to="/how-it-works" className={navClass}>
            {t.nav.howItWorks}
          </NavLink>
          <SolutionsDropdown />
          <NavLink to="/features" className={navClass}>
            {t.nav.features}
          </NavLink>
          <NavLink to="/safety" className={navClass}>
            {t.nav.safety}
          </NavLink>
          <NavLink to="/faq" className={navClass}>
            {t.nav.faq}
          </NavLink>
          <NavLink to="/contact" className={navClass}>
            {t.nav.contact}
          </NavLink>
        </nav>

        <div className="header-actions">
          <LangSwitch variant={isOverlayNav ? 'home' : 'default'} />
          <Link className="btn btn--primary header-download-btn" to="/download">
            {t.nav.downloadApp}
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t.nav.menuClose : t.nav.menuOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`mobile-nav-panel ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-nav">
          <NavLink to="/" end onClick={() => setMobileOpen(false)}>
            {t.nav.home}
          </NavLink>
          <NavLink to="/about" onClick={() => setMobileOpen(false)}>
            {t.nav.about}
          </NavLink>
          <NavLink to="/how-it-works" onClick={() => setMobileOpen(false)}>
            {t.nav.howItWorks}
          </NavLink>
          <p className="mobile-nav__label">{t.nav.solutions}</p>
          <NavLink to="/customers" onClick={() => setMobileOpen(false)}>
            {t.nav.forCustomers}
          </NavLink>
          <NavLink to="/travelers" onClick={() => setMobileOpen(false)}>
            {t.nav.forTravelers}
          </NavLink>
          <NavLink to="/receivers" onClick={() => setMobileOpen(false)}>
            {t.nav.forReceivers}
          </NavLink>
          <NavLink to="/features" onClick={() => setMobileOpen(false)}>
            {t.nav.features}
          </NavLink>
          <NavLink to="/safety" onClick={() => setMobileOpen(false)}>
            {t.nav.safety}
          </NavLink>
          <NavLink to="/faq" onClick={() => setMobileOpen(false)}>
            {t.nav.faq}
          </NavLink>
          <NavLink to="/contact" onClick={() => setMobileOpen(false)}>
            {t.nav.contact}
          </NavLink>
          <div className="mobile-nav__footer">
            <LangSwitch variant={isHome ? 'home' : 'default'} />
            <Link className="btn btn--primary" to="/download" onClick={() => setMobileOpen(false)}>
              {t.nav.downloadApp}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
