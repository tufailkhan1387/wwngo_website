import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiError, clearOperationalData, getDashboardStats } from '../lib/api';
import {
  badgeClass,
  deliveryRouteLabel,
  formatCents,
  formatDate,
  formatDateTime,
  formatLabel,
  formatMoney,
} from '../lib/format';

export default function DashboardPage() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [clearing, setClearing] = useState(false);
  const [clearMessage, setClearMessage] = useState('');

  const load = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getDashboardStats();
      setStats(data || null);
    } catch (err) {
      setStats(null);
      setError(err instanceof ApiError ? err.message : 'Failed to load dashboard.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function handleClearData() {
    const confirmed = window.confirm(
      'Clear all deliveries, trips, messages, notifications, reviews, and FCM tokens?\n\n' +
        'Wallet and escrow balances will be set to zero.\n' +
        'This cannot be undone. User accounts will be kept.',
    );
    if (!confirmed) return;

    const typed = window.prompt('Type CLEAR to confirm:');
    if (typed !== 'CLEAR') {
      setClearMessage('Clear cancelled — confirmation text did not match.');
      return;
    }

    setClearing(true);
    setClearMessage('');
    try {
      const result = await clearOperationalData();
      const deleted = result?.deleted || {};
      setClearMessage(
        `Cleared ${deleted.deliveries ?? 0} deliveries, ${deleted.trips ?? 0} trips, ` +
          `${deleted.chatMessages ?? 0} messages, ${deleted.notifications ?? 0} notifications, ` +
          `${deleted.reviews ?? 0} reviews, ${deleted.deviceTokens ?? 0} FCM tokens. ` +
          `Wallets zeroed.`,
      );
      await load();
    } catch (err) {
      setClearMessage(
        err instanceof ApiError ? err.message : 'Failed to clear data.',
      );
    } finally {
      setClearing(false);
    }
  }

  if (loading) {
    return (
      <div className="rounded-xl border border-line bg-white p-10 text-center text-sm text-muted">
        Loading dashboard…
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="space-y-4">
        <div className="rounded-xl border border-danger/20 bg-red-50 px-4 py-3 text-sm text-danger">
          {error || 'Dashboard data unavailable.'}
        </div>
        <button
          type="button"
          onClick={load}
          className="rounded-lg bg-brand px-3 py-2 text-xs font-semibold text-white"
        >
          Retry
        </button>
      </div>
    );
  }

  const kpiCards = [
    {
      label: 'Users',
      value: stats.users,
      hint: `${stats.suspended_users || 0} suspended`,
      to: '/users',
    },
    {
      label: 'Active deliveries',
      value: stats.active_deliveries,
      hint: `${stats.delivered || 0} delivered`,
      to: '/deliveries',
    },
    {
      label: 'Open disputes',
      value: stats.open_disputes,
      hint: 'Needs review',
      to: '/disputes',
      tone: Number(stats.open_disputes) > 0 ? 'warn' : 'ok',
    },
    {
      label: 'Escrow held',
      value: formatCents(stats.escrow_held_cents),
      hint: `${stats.escrows_held || 0} held · ${stats.escrows_frozen || 0} frozen`,
      to: '/escrows',
    },
  ];

  const secondary = [
    { label: 'Trips open', value: stats.trips_open, to: '/trips' },
    { label: 'Trips in transit', value: stats.trips_in_transit, to: '/trips' },
    { label: 'Cancelled', value: stats.cancelled_deliveries, to: '/cancelled' },
    { label: 'KYC pending', value: stats.kyc_pending, to: '/users' },
    { label: 'KYC approved', value: stats.kyc_approved, to: '/users' },
    {
      label: 'NFC fraud flags',
      value: stats.nfc_fraud_flags,
      to: '/nfc-audit',
    },
    { label: 'NFC scans (7d)', value: stats.nfc_scans_7d, to: '/nfc-audit' },
    { label: 'Total trips', value: stats.trips, to: '/trips' },
  ];

  const shortcuts = [
    { to: '/users', label: 'Users' },
    { to: '/trips', label: 'Trips' },
    { to: '/deliveries', label: 'Deliveries' },
    { to: '/escrows', label: 'Escrows' },
    { to: '/nfc-audit', label: 'NFC Audit' },
    { to: '/disputes', label: 'Disputes' },
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          Platform overview across users, shipments, money, and trust signals.
        </p>
        <div className="flex flex-wrap gap-2 self-start">
          <button
            type="button"
            onClick={load}
            className="rounded-lg border border-line bg-white px-3 py-2 text-xs font-semibold text-ink hover:bg-slate-50"
          >
            Refresh
          </button>
          <button
            type="button"
            onClick={handleClearData}
            disabled={clearing}
            className="rounded-lg border border-danger/30 bg-red-50 px-3 py-2 text-xs font-semibold text-danger hover:bg-red-100 disabled:opacity-60"
          >
            {clearing ? 'Clearing…' : 'Clear Data'}
          </button>
        </div>
      </div>

      {clearMessage ? (
        <div className="rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink">
          {clearMessage}
        </div>
      ) : null}

      <div className="rounded-xl border border-danger/20 bg-red-50/60 px-4 py-3 text-xs text-danger">
        <strong>Clear Data</strong> deletes deliveries, trips, chat messages,
        notifications, reviews, FCM tokens, and escrow rows, and zeros all
        wallet/escrow balances. User accounts are kept.
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {kpiCards.map((card) => (
          <Link
            key={card.label}
            to={card.to}
            className="rounded-xl border border-line bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition hover:border-brand/30 hover:shadow-sm"
          >
            <div className="text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
              {card.label}
            </div>
            <div
              className={[
                'mt-2 text-2xl font-semibold tracking-tight',
                card.tone === 'warn' ? 'text-warning' : 'text-ink',
              ].join(' ')}
            >
              {card.value ?? '—'}
            </div>
            <div className="mt-1 text-xs text-muted">{card.hint}</div>
          </Link>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {secondary.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className="flex items-center justify-between rounded-xl border border-line bg-white px-4 py-3 text-sm transition hover:border-brand/30"
          >
            <span className="text-muted">{item.label}</span>
            <span className="font-semibold text-ink">{item.value ?? 0}</span>
          </Link>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {shortcuts.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="rounded-lg bg-brand-soft px-3 py-1.5 text-xs font-semibold text-brand hover:bg-brand/15"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <section className="rounded-xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] xl:col-span-2">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-sm font-semibold text-ink">Recent deliveries</h3>
            <Link to="/admin/deliveries" className="text-xs font-semibold text-brand hover:underline">
              View all
            </Link>
          </div>
          {(stats.recent_deliveries || []).length === 0 ? (
            <p className="mt-4 text-sm text-muted">No deliveries yet.</p>
          ) : (
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
                  <tr>
                    <th className="pb-2 pr-3">Delivery</th>
                    <th className="pb-2 pr-3">Route</th>
                    <th className="pb-2 pr-3">Parties</th>
                    <th className="pb-2 pr-3">Budget</th>
                    <th className="pb-2">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {stats.recent_deliveries.map((delivery) => (
                    <tr key={delivery.id}>
                      <td className="py-2.5 pr-3">
                        <Link
                          to={`/admin/deliveries/${delivery.id}`}
                          className="font-semibold text-brand hover:underline"
                        >
                          {delivery.public_id}
                        </Link>
                        <div className="text-[11px] text-slate-400">
                          {formatDate(delivery.created_at)}
                        </div>
                      </td>
                      <td className="py-2.5 pr-3 text-ink">
                        {deliveryRouteLabel(delivery)}
                      </td>
                      <td className="py-2.5 pr-3 text-xs text-muted">
                        <div>{delivery.sender_name || '—'}</div>
                        <div>{delivery.traveler_name || 'No traveler'}</div>
                      </td>
                      <td className="py-2.5 pr-3 text-ink">
                        {formatMoney(delivery.max_budget)}
                      </td>
                      <td className="py-2.5">
                        <span
                          className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize ${badgeClass('delivery', delivery.status)}`}
                        >
                          {formatLabel(delivery.status)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section className="space-y-4">
          <div className="rounded-xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-ink">Open disputes</h3>
              <Link to="/admin/disputes" className="text-xs font-semibold text-brand hover:underline">
                View all
              </Link>
            </div>
            {(stats.recent_disputes || []).length === 0 ? (
              <p className="mt-4 text-sm text-muted">No open disputes.</p>
            ) : (
              <ul className="mt-4 space-y-3">
                {stats.recent_disputes.map((dispute) => (
                  <li key={dispute.id} className="border-b border-line pb-3 last:border-0 last:pb-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Link
                          to={`/admin/deliveries/${dispute.delivery_uuid}`}
                          className="text-sm font-semibold text-brand hover:underline"
                        >
                          {dispute.delivery_public_id}
                        </Link>
                        <div className="mt-0.5 line-clamp-2 text-xs text-muted">
                          {dispute.reason || 'No reason provided'}
                        </div>
                        <div className="mt-1 text-[11px] text-slate-400">
                          {dispute.opened_by_name || 'Unknown'} ·{' '}
                          {formatDateTime(dispute.created_at)}
                        </div>
                      </div>
                      <span
                        className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize ${badgeClass('dispute', dispute.status)}`}
                      >
                        {formatLabel(dispute.status)}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="rounded-xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-ink">New users</h3>
              <Link to="/admin/users" className="text-xs font-semibold text-brand hover:underline">
                View all
              </Link>
            </div>
            {(stats.recent_users || []).length === 0 ? (
              <p className="mt-4 text-sm text-muted">No users yet.</p>
            ) : (
              <ul className="mt-4 space-y-3">
                {stats.recent_users.map((user) => (
                  <li key={user.id} className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <Link
                        to={`/admin/users/${user.id}`}
                        className="truncate text-sm font-medium text-ink hover:text-brand"
                      >
                        {user.name || 'Unnamed'}
                      </Link>
                      <div className="truncate text-xs text-muted">{user.email}</div>
                    </div>
                    <div className="shrink-0 text-right">
                      <span
                        className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize ${badgeClass('account', user.account_status)}`}
                      >
                        {formatLabel(user.account_status)}
                      </span>
                      <div className="mt-1 text-[11px] text-slate-400">
                        {formatDate(user.created_at)}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
