import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const isPanelPage =
    pathname === '/about' ||
    pathname === '/faq' ||
    pathname === '/features' ||
    pathname === '/contact' ||
    pathname === '/how-it-works' ||
    pathname === '/safety' ||
    pathname === '/customers' ||
    pathname === '/travelers' ||
    pathname === '/receivers';
  /** Same overlay shell as Home: transparent nav on dark hero, no light gap above. */
  const isOverlayShell = isHome || isPanelPage;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={`site-shell${isOverlayShell ? ' site-shell--home' : ''}${isPanelPage ? ' site-shell--panels' : ''}`}>
      <Header />
      <main className={isOverlayShell ? 'home-main' : 'page'}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
