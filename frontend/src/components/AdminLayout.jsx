import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const navSections = [
  {
    label: 'Overview',
    items: [
      { to: '/admin/dashboard', label: 'Dashboard', icon: DashboardIcon, match: 'exact' },
    ],
  },
  {
    label: 'Management',
    items: [
      { to: '/admin/users', label: 'Users', icon: UsersIcon, match: 'users' },
      { to: '/admin/trips', label: 'Trips', icon: TripsIcon, match: 'exact' },
      {
        to: '/admin/deliveries',
        label: 'Delivery Requests',
        icon: DeliveriesIcon,
        match: 'deliveries',
      },
      { to: '/admin/escrows', label: 'Escrows', icon: EscrowIcon, match: 'exact' },
      {
        to: '/admin/nfc-audit',
        label: 'NFC Audit',
        icon: NfcIcon,
        match: 'exact',
      },
      { to: '/admin/disputes', label: 'Disputes', icon: DisputeIcon, match: 'exact' },
      {
        to: '/admin/cancelled',
        label: 'Cancelled',
        icon: CancelledIcon,
        match: 'exact',
      },
    ],
  },
];

const pageMeta = {
  '/admin/dashboard': {
    title: 'Dashboard',
    subtitle: 'Live snapshot of users, deliveries, escrows, and trust signals',
  },
  '/admin/users': {
    title: 'User Management',
    subtitle: 'Review accounts, KYC status, and access controls',
  },
  '/admin/trips': {
    title: 'Trips',
    subtitle: 'Traveler trips — list, filter, and cancel open bids',
  },
  '/admin/deliveries': {
    title: 'Delivery Requests',
    subtitle: 'Monitor posted parcels, routes, budgets, and delivery status',
  },
  '/admin/escrows': {
    title: 'Escrows',
    subtitle: 'Held funds, release status, and admin refunds',
  },
  '/admin/nfc-audit': {
    title: 'NFC Audit',
    subtitle: 'Handoff confirmations and fraud-flagged scans',
  },
  '/admin/disputes': {
    title: 'Disputes',
    subtitle: 'Review, resolve, or dismiss open delivery disputes',
  },
  '/admin/cancelled': {
    title: 'Cancelled Deliveries',
    subtitle: 'Browse deliveries that were cancelled by users or the system',
  },
};

function resolvePageMeta(pathname) {
  if (pathname.startsWith('/admin/users/') && pathname !== '/admin/users') {
    return {
      title: 'User Detail',
      subtitle: 'Profile, wallet, deliveries, and trips for this account',
    };
  }
  if (pathname.startsWith('/admin/deliveries/')) {
    return {
      title: 'Delivery Details',
      subtitle: 'Full shipment, parties, meetup, and timeline information',
    };
  }
  return pageMeta[pathname] || pageMeta['/admin/dashboard'];
}

function isNavActive(item, pathname) {
  if (item.match === 'users') {
    return pathname === '/admin/users' || pathname.startsWith('/admin/users/');
  }
  if (item.match === 'deliveries') {
    return pathname === '/admin/deliveries' || pathname.startsWith('/admin/deliveries/');
  }
  return pathname === item.to;
}

export default function AdminLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const meta = resolvePageMeta(location.pathname);

  function handleLogout() {
    logout();
    navigate('/admin/login', { replace: true });
  }

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <div className="flex min-h-screen">
        <aside className="hidden w-[248px] shrink-0 bg-sidebar text-white lg:flex lg:flex-col">
          <div className="border-b border-white/10 px-5 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-sm font-bold">
                W
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sidebar-muted">
                  WWNGO
                </div>
                <div className="text-sm font-semibold tracking-tight">Admin Console</div>
              </div>
            </div>
          </div>

          <nav className="flex-1 px-3 py-4">
            {navSections.map((section) => (
              <div key={section.label} className="mb-5">
                <div className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-sidebar-muted">
                  {section.label}
                </div>
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const active = isNavActive(item, location.pathname);
                    return (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        className={[
                          'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition',
                          active
                            ? 'bg-brand text-white shadow-sm shadow-brand/30'
                            : 'text-sidebar-muted hover:bg-sidebar-hover hover:text-white',
                        ].join(' ')}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>

          <div className="border-t border-white/10 p-4">
            <div className="rounded-xl bg-white/5 px-3 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/20 text-xs font-semibold text-white">
                  {(user?.name || 'A').charAt(0).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium text-white">
                    {user?.name || 'Admin'}
                  </div>
                  <div className="truncate text-[11px] text-sidebar-muted">{user?.email}</div>
                </div>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="mt-3 w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 text-xs font-semibold text-sidebar-muted transition hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                Sign out
              </button>
            </div>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-20 border-b border-line bg-white/95 backdrop-blur">
            <div className="flex items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted lg:hidden">
                  WWNGO Admin
                </div>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg font-semibold tracking-tight text-ink">{meta.title}</h1>
                  <span className="hidden rounded-full border border-line bg-canvas px-2 py-0.5 text-[11px] font-medium text-muted sm:inline">
                    Live
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-muted">{meta.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-lg border border-line bg-white px-3 py-2 text-xs font-semibold text-ink lg:hidden"
              >
                Sign out
              </button>
            </div>
          </header>

          <main className="flex-1 px-4 py-5 sm:px-6 lg:px-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

function UsersIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4.5 20.2a7.5 7.5 0 0 1 15 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DashboardIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 4.5h7v7H4v-7ZM13 4.5h7v4h-7v-4ZM13 11.5h7v8h-7v-8ZM4 14.5h7v5H4v-5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DeliveriesIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 8.5 12 3 3 8.5v7L12 21l9-5.5v-7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M12 12v9M3 8.5l9 3.5 9-3.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function DisputeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 9v4M12 17h.01M10.3 4.3 2.8 17.2A2 2 0 0 0 4.5 20h15a2 2 0 0 0 1.7-2.8L13.7 4.3a2 2 0 0 0-3.4 0Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CancelledIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path d="m8.5 8.5 7 7M15.5 8.5l-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function TripsIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3.5 17.5 9 12l3.5 3.5L20.5 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 6H20.5V12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EscrowIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="4"
        y="7"
        width="16"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 7V5.5A4 4 0 0 1 16 5.5V7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M12 11v4M10 13h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function NfcIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 8.5a5 5 0 0 1 0 7M10 10a2.8 2.8 0 0 1 0 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M17 8.5a5 5 0 0 0 0 7M14 10a2.8 2.8 0 0 0 0 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    </svg>
  );
}
