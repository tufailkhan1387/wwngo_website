import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiError, listEscrows, refundEscrow } from '../lib/api';
import {
  badgeClass,
  deliveryRouteLabel,
  formatCents,
  formatDateTime,
  formatLabel,
} from '../lib/format';

export default function EscrowsPage() {
  const [escrows, setEscrows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('held');
  const [actionId, setActionId] = useState(null);
  const [toast, setToast] = useState('');
  const [refundTarget, setRefundTarget] = useState(null);
  const [reason, setReason] = useState('Admin refund');

  const loadEscrows = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await listEscrows({
        limit: 100,
        status: statusFilter === 'all' ? undefined : statusFilter,
      });
      setEscrows(Array.isArray(data?.escrows) ? data.escrows : []);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Failed to load escrows.');
    } finally {
      setLoading(false);
    }
  }, [statusFilter]);

  useEffect(() => {
    loadEscrows();
  }, [loadEscrows]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(''), 2800);
    return () => clearTimeout(timer);
  }, [toast]);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return escrows.filter((row) => {
      const haystack = [
        row.shipment_id,
        row.user_name,
        row.user_email,
        row.status,
        row.from_city,
        row.to_city,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return !needle || haystack.includes(needle);
    });
  }, [escrows, query]);

  const stats = useMemo(() => {
    const heldCents = escrows
      .filter((e) => e.status === 'held')
      .reduce((sum, e) => sum + Number(e.amount_cents || 0), 0);
    const frozenCents = escrows
      .filter((e) => e.status === 'frozen')
      .reduce((sum, e) => sum + Number(e.amount_cents || 0), 0);
    return {
      count: escrows.length,
      heldCents,
      frozenCents,
      refundable: escrows.filter((e) => ['held', 'frozen'].includes(e.status)).length,
    };
  }, [escrows]);

  async function handleRefund() {
    if (!refundTarget) return;
    setActionId(refundTarget.shipment_id);
    try {
      const result = await refundEscrow(refundTarget.shipment_id, {
        reason: reason.trim() || 'Admin refund',
      });
      if (result?.refunded) {
        setToast(`Refunded ${formatCents(result.amountCents)} for ${refundTarget.shipment_id}`);
      } else {
        setToast(result?.reason === 'no_escrow' ? 'No refundable escrow found' : 'Refund skipped');
      }
      setRefundTarget(null);
      await loadEscrows();
    } catch (err) {
      setToast(err instanceof ApiError ? err.message : 'Refund failed');
    } finally {
      setActionId(null);
    }
  }

  return (
    <div className="space-y-5">
      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Records" value={stats.count} hint="Loaded escrows" />
        <StatCard label="Held" value={formatCents(stats.heldCents)} hint="In escrow" tone="warning" />
        <StatCard label="Frozen" value={formatCents(stats.frozenCents)} hint="Locked funds" tone="brand" />
        <StatCard label="Refundable" value={stats.refundable} hint="Held or frozen" tone="danger" />
      </section>

      <section className="overflow-hidden rounded-xl border border-line bg-white">
        <div className="flex flex-col gap-3 border-b border-line px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div>
            <h2 className="text-sm font-semibold text-ink">Shipment escrows</h2>
            <p className="mt-0.5 text-xs text-muted">
              Showing {filtered.length} of {escrows.length} records
            </p>
          </div>
          <button
            type="button"
            onClick={loadEscrows}
            className="rounded-lg border border-line px-3 py-2 text-xs font-semibold text-ink hover:bg-canvas"
          >
            Refresh
          </button>
        </div>

        <div className="grid gap-2.5 border-b border-line bg-slate-50/70 px-4 py-3 sm:grid-cols-[1fr_180px] sm:px-5">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search shipment, user, route…"
            className="w-full rounded-lg border border-line bg-white px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-lg border border-line bg-white px-3 py-2 text-sm outline-none focus:border-brand"
          >
            <option value="held">Held</option>
            <option value="frozen">Frozen</option>
            <option value="refunded">Refunded</option>
            <option value="released">Released</option>
            <option value="all">All statuses</option>
          </select>
        </div>

        {error ? (
          <div className="m-4 rounded-lg border border-danger/20 bg-red-50 px-4 py-3 text-sm text-danger">
            {error}
          </div>
        ) : null}

        {loading ? (
          <div className="p-12 text-center text-sm text-muted">Loading escrows…</div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center text-sm text-muted">No escrow records found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-line text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
                <tr>
                  <th className="px-4 py-3 sm:px-5">Shipment</th>
                  <th className="px-4 py-3 sm:px-5">Holder</th>
                  <th className="px-4 py-3 sm:px-5">Amount</th>
                  <th className="px-4 py-3 sm:px-5">Status</th>
                  <th className="px-4 py-3 sm:px-5">Updated</th>
                  <th className="px-4 py-3 text-right sm:px-5">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {filtered.map((row) => {
                  const canRefund = ['held', 'frozen'].includes(row.status);
                  return (
                    <tr key={`${row.shipment_id}-${row.user_id}`} className="hover:bg-slate-50/80">
                      <td className="px-4 py-3.5 sm:px-5">
                        {row.delivery_uuid ? (
                          <Link
                            to={`/admin/deliveries/${row.delivery_uuid}`}
                            className="font-semibold text-brand hover:underline"
                          >
                            {row.shipment_id}
                          </Link>
                        ) : (
                          <div className="font-semibold text-ink">{row.shipment_id}</div>
                        )}
                        <div className="text-xs text-muted">{deliveryRouteLabel(row)}</div>
                        {row.delivery_status ? (
                          <div className="mt-1 text-[11px] capitalize text-slate-400">
                            Delivery: {formatLabel(row.delivery_status)}
                          </div>
                        ) : null}
                      </td>
                      <td className="px-4 py-3.5 sm:px-5">
                        <Link
                          to={`/admin/users/${row.user_id}`}
                          className="font-medium text-brand hover:underline"
                        >
                          {row.user_name || 'Unknown'}
                        </Link>
                        <div className="truncate text-xs text-muted">{row.user_email}</div>
                        <div className="text-[11px] capitalize text-slate-400">{row.role}</div>
                      </td>
                      <td className="px-4 py-3.5 font-semibold text-ink sm:px-5">
                        {formatCents(row.amount_cents)}
                      </td>
                      <td className="px-4 py-3.5 sm:px-5">
                        <span
                          className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize ${badgeClass('escrow', row.status)}`}
                        >
                          {formatLabel(row.status)}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 text-xs text-muted sm:px-5">
                        {formatDateTime(row.updated_at)}
                      </td>
                      <td className="px-4 py-3.5 text-right sm:px-5">
                        {canRefund ? (
                          <button
                            type="button"
                            onClick={() => {
                              setReason('Admin refund');
                              setRefundTarget(row);
                            }}
                            className="rounded-lg bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-danger hover:bg-red-100"
                          >
                            Refund
                          </button>
                        ) : (
                          <span className="text-xs text-muted">—</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {refundTarget ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4">
          <div className="w-full max-w-md rounded-2xl border border-line bg-white shadow-2xl">
            <div className="border-b border-line px-5 py-4">
              <h3 className="text-lg font-semibold text-ink">Refund escrow</h3>
              <p className="mt-1 text-sm text-muted">
                {refundTarget.shipment_id} · {formatCents(refundTarget.amount_cents)}
              </p>
            </div>
            <div className="space-y-4 px-5 py-5">
              <p className="text-sm text-muted">
                Funds return to the sender wallet available balance and escrow status becomes
                refunded.
              </p>
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold tracking-wide text-ink uppercase">
                  Reason
                </span>
                <input
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full rounded-lg border border-line px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
                />
              </label>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setRefundTarget(null)}
                  className="rounded-lg border border-line px-3 py-2 text-xs font-semibold text-ink"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={actionId === refundTarget.shipment_id}
                  onClick={handleRefund}
                  className="rounded-lg bg-danger px-3 py-2 text-xs font-semibold text-white disabled:opacity-50"
                >
                  {actionId === refundTarget.shipment_id ? 'Refunding…' : 'Confirm refund'}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {toast ? (
        <div className="fixed right-5 bottom-5 z-50 rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-white shadow-xl">
          {toast}
        </div>
      ) : null}
    </div>
  );
}

function StatCard({ label, value, hint, tone = 'default' }) {
  const tones = {
    default: { value: 'text-ink', bar: 'bg-slate-300' },
    brand: { value: 'text-brand', bar: 'bg-brand' },
    warning: { value: 'text-warning', bar: 'bg-warning' },
    danger: { value: 'text-danger', bar: 'bg-danger' },
  };
  const style = tones[tone] || tones.default;
  return (
    <div className="relative overflow-hidden rounded-xl border border-line bg-white p-4">
      <div className={`absolute top-0 left-0 h-full w-1 ${style.bar}`} />
      <div className="pl-2">
        <div className="text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
          {label}
        </div>
        <div className={`mt-1.5 text-2xl font-semibold ${style.value}`}>{value}</div>
        <div className="mt-1 text-xs text-muted">{hint}</div>
      </div>
    </div>
  );
}
