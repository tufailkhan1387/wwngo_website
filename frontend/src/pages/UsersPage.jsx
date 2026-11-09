import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import TestNotificationModal from '../components/TestNotificationModal';
import {
  ApiError,
  listUsers,
  suspendUser,
  unsuspendUser,
} from '../lib/api';

const PAGE_SIZE = 50;

function formatDate(value) {
  if (!value) return '—';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '—';
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function statusBadge(status) {
  const normalized = String(status || 'unknown').toLowerCase();
  const styles = {
    active: 'bg-emerald-50 text-success ring-1 ring-inset ring-emerald-600/15',
    suspended: 'bg-red-50 text-danger ring-1 ring-inset ring-red-600/15',
    pending: 'bg-amber-50 text-warning ring-1 ring-inset ring-amber-600/15',
  };
  return styles[normalized] || 'bg-slate-50 text-muted ring-1 ring-inset ring-slate-500/10';
}

function kycBadge(status) {
  const normalized = String(status || 'unknown').toLowerCase();
  const styles = {
    approved: 'bg-emerald-50 text-success ring-1 ring-inset ring-emerald-600/15',
    pending: 'bg-amber-50 text-warning ring-1 ring-inset ring-amber-600/15',
    rejected: 'bg-red-50 text-danger ring-1 ring-inset ring-red-600/15',
    not_started: 'bg-slate-50 text-muted ring-1 ring-inset ring-slate-500/10',
  };
  return styles[normalized] || 'bg-slate-50 text-muted ring-1 ring-inset ring-slate-500/10';
}

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [kycFilter, setKycFilter] = useState('all');
  const [actionId, setActionId] = useState(null);
  const [toast, setToast] = useState('');
  const [notifyUser, setNotifyUser] = useState(null);

  const loadUsers = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await listUsers({ limit: PAGE_SIZE, offset: 0 });
      setUsers(Array.isArray(data?.users) ? data.users : []);
    } catch (err) {
      setError(
        err instanceof ApiError
          ? err.message
          : 'Failed to load users. Is the API running?',
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(''), 2800);
    return () => clearTimeout(timer);
  }, [toast]);

  const filteredUsers = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return users.filter((user) => {
      const matchesQuery =
        !needle ||
        [user.name, user.email, user.phone, user.role]
          .filter(Boolean)
          .some((value) => String(value).toLowerCase().includes(needle));

      const matchesStatus =
        statusFilter === 'all' ||
        String(user.account_status || '').toLowerCase() === statusFilter;

      const matchesKyc =
        kycFilter === 'all' ||
        String(user.kyc_status || '').toLowerCase() === kycFilter;

      return matchesQuery && matchesStatus && matchesKyc;
    });
  }, [users, query, statusFilter, kycFilter]);

  const stats = useMemo(() => {
    const total = users.length;
    const active = users.filter((u) => u.account_status === 'active').length;
    const suspended = users.filter((u) => u.account_status === 'suspended').length;
    const verified = users.filter((u) => u.kyc_status === 'approved').length;
    return { total, active, suspended, verified };
  }, [users]);

  async function toggleSuspend(user) {
    const isSuspended = user.account_status === 'suspended';
    setActionId(user.id);
    try {
      const data = isSuspended
        ? await unsuspendUser(user.id)
        : await suspendUser(user.id);

      const nextStatus = data?.user?.account_status || (isSuspended ? 'active' : 'suspended');
      setUsers((current) =>
        current.map((item) =>
          item.id === user.id ? { ...item, account_status: nextStatus } : item,
        ),
      );
      setToast(
        isSuspended
          ? `${user.name || user.email} reactivated`
          : `${user.name || user.email} suspended`,
      );
    } catch (err) {
      setToast(err instanceof ApiError ? err.message : 'Action failed');
    } finally {
      setActionId(null);
    }
  }

  return (
    <div className="space-y-5">
      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total users"
          value={stats.total}
          hint="Currently loaded"
          icon={<UsersStatIcon />}
        />
        <StatCard
          label="Active"
          value={stats.active}
          hint="Can access the app"
          tone="success"
          icon={<CheckStatIcon />}
        />
        <StatCard
          label="Suspended"
          value={stats.suspended}
          hint="Access blocked"
          tone="danger"
          icon={<BanStatIcon />}
        />
        <StatCard
          label="KYC approved"
          value={stats.verified}
          hint="Identity verified"
          tone="brand"
          icon={<ShieldStatIcon />}
        />
      </section>

      <section className="overflow-hidden rounded-xl border border-line bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
        <div className="flex flex-col gap-3 border-b border-line px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div>
            <h2 className="text-sm font-semibold text-ink">All users</h2>
            <p className="mt-0.5 text-xs text-muted">
              Showing {filteredUsers.length} of {users.length} accounts
            </p>
          </div>
          <button
            type="button"
            onClick={loadUsers}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-white px-3 py-2 text-xs font-semibold text-ink transition hover:bg-canvas"
          >
            <RefreshIcon className="h-3.5 w-3.5" />
            Refresh
          </button>
        </div>

        <div className="grid gap-2.5 border-b border-line bg-slate-50/70 px-4 py-3 sm:grid-cols-[1fr_150px_150px] sm:px-5">
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search name, email, phone, role…"
              className="w-full rounded-lg border border-line bg-white py-2 pr-3 pl-9 text-sm outline-none transition placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/15"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-lg border border-line bg-white px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
          >
            <option value="all">All statuses</option>
            <option value="active">Active</option>
            <option value="suspended">Suspended</option>
          </select>
          <select
            value={kycFilter}
            onChange={(e) => setKycFilter(e.target.value)}
            className="rounded-lg border border-line bg-white px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
          >
            <option value="all">All KYC</option>
            <option value="approved">Approved</option>
            <option value="pending">Pending</option>
            <option value="rejected">Rejected</option>
            <option value="not_started">Not started</option>
          </select>
        </div>

        {error ? (
          <div className="m-4 rounded-lg border border-danger/20 bg-red-50 px-4 py-3 text-sm text-danger sm:m-5">
            {error}
          </div>
        ) : null}

        {loading ? (
          <div className="p-12 text-center text-sm text-muted">Loading users…</div>
        ) : filteredUsers.length === 0 ? (
          <div className="p-12 text-center text-sm text-muted">No users match your filters.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-line bg-white text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
                <tr>
                  <th className="px-4 py-3 sm:px-5">User</th>
                  <th className="px-4 py-3 sm:px-5">Role</th>
                  <th className="px-4 py-3 sm:px-5">KYC</th>
                  <th className="px-4 py-3 sm:px-5">Status</th>
                  <th className="px-4 py-3 sm:px-5">Joined</th>
                  <th className="px-4 py-3 text-right sm:px-5">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {filteredUsers.map((user) => {
                  const suspended = user.account_status === 'suspended';
                  return (
                    <tr key={user.id} className="transition hover:bg-slate-50/80">
                      <td className="px-4 py-3.5 sm:px-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                            {(user.name || user.email || '?').charAt(0).toUpperCase()}
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <Link
                                to={`/admin/users/${user.id}`}
                                className="truncate font-medium text-ink hover:text-brand hover:underline"
                              >
                                {user.name || 'Unnamed'}
                              </Link>
                              {user.is_admin ? (
                                <span className="rounded bg-brand-soft px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-brand uppercase">
                                  Admin
                                </span>
                              ) : null}
                            </div>
                            <div className="truncate text-xs text-muted">{user.email}</div>
                            <div className="truncate text-[11px] text-slate-400">
                              {user.phone || 'No phone'}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3.5 capitalize sm:px-5">
                        <span className="inline-flex rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200">
                          {user.role || '—'}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 sm:px-5">
                        <span
                          className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize ${kycBadge(user.kyc_status)}`}
                        >
                          {String(user.kyc_status || 'unknown').replaceAll('_', ' ')}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 sm:px-5">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize ${statusBadge(user.account_status)}`}
                        >
                          <span
                            className={[
                              'h-1.5 w-1.5 rounded-full',
                              suspended ? 'bg-danger' : 'bg-success',
                            ].join(' ')}
                          />
                          {user.account_status || 'unknown'}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 text-xs text-muted sm:px-5">
                        {formatDate(user.created_at)}
                      </td>
                      <td className="px-4 py-3.5 text-right sm:px-5">
                        <div className="inline-flex items-center gap-2">
                          <Link
                            to={`/admin/users/${user.id}`}
                            className="rounded-lg bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-slate-200 transition hover:bg-slate-100"
                          >
                            View
                          </Link>
                          <Link
                            to={`/admin/users/${user.id}?edit=1`}
                            className="rounded-lg bg-brand/10 px-2.5 py-1.5 text-xs font-semibold text-brand ring-1 ring-inset ring-brand/20 transition hover:bg-brand/15"
                          >
                            Edit
                          </Link>
                          <button
                            type="button"
                            onClick={() => setNotifyUser(user)}
                            className="rounded-lg bg-sky-50 px-2.5 py-1.5 text-xs font-semibold text-sky-700 ring-1 ring-inset ring-sky-600/15 transition hover:bg-sky-100"
                          >
                            Notify
                          </button>
                          <button
                            type="button"
                            disabled={actionId === user.id || user.is_admin}
                            onClick={() => toggleSuspend(user)}
                            className={[
                              'rounded-lg px-2.5 py-1.5 text-xs font-semibold transition disabled:cursor-not-allowed disabled:opacity-40',
                              suspended
                                ? 'bg-emerald-50 text-success hover:bg-emerald-100'
                                : 'bg-red-50 text-danger hover:bg-red-100',
                            ].join(' ')}
                            title={
                              user.is_admin
                                ? 'Admin accounts cannot be suspended here'
                                : undefined
                            }
                          >
                            {actionId === user.id
                              ? 'Working…'
                              : suspended
                                ? 'Unsuspend'
                                : 'Suspend'}
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {toast ? (
        <div className="fixed right-5 bottom-5 z-50 rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-white shadow-xl shadow-slate-900/20">
          {toast}
        </div>
      ) : null}

      <TestNotificationModal
        open={Boolean(notifyUser)}
        user={notifyUser}
        onClose={() => setNotifyUser(null)}
        onSent={(message) => setToast(message)}
      />
    </div>
  );
}

function StatCard({ label, value, hint, tone = 'default', icon }) {
  const tones = {
    default: {
      value: 'text-ink',
      iconWrap: 'bg-slate-100 text-slate-600',
      bar: 'bg-slate-300',
    },
    success: {
      value: 'text-success',
      iconWrap: 'bg-emerald-50 text-success',
      bar: 'bg-success',
    },
    danger: {
      value: 'text-danger',
      iconWrap: 'bg-red-50 text-danger',
      bar: 'bg-danger',
    },
    brand: {
      value: 'text-brand',
      iconWrap: 'bg-brand-soft text-brand',
      bar: 'bg-brand',
    },
  };
  const style = tones[tone];

  return (
    <div className="relative overflow-hidden rounded-xl border border-line bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <div className={`absolute top-0 left-0 h-full w-1 ${style.bar}`} />
      <div className="flex items-start justify-between gap-3 pl-2">
        <div>
          <div className="text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
            {label}
          </div>
          <div className={`mt-1.5 text-2xl font-semibold tracking-tight ${style.value}`}>
            {value}
          </div>
          <div className="mt-1 text-xs text-muted">{hint}</div>
        </div>
        <div className={`rounded-lg p-2 ${style.iconWrap}`}>{icon}</div>
      </div>
    </div>
  );
}

function SearchIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function RefreshIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 12a8 8 0 1 1-2.3-5.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M20 4v5h-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UsersStatIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4.5 20.2a7.5 7.5 0 0 1 15 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CheckStatIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BanStatIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path d="m7.5 7.5 9 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ShieldStatIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3 5 6v5c0 4.5 3 7.8 7 9 4-1.2 7-4.5 7-9V6l-7-3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
