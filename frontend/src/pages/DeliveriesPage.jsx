import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ApiError,
  listDeliveries,
  listDisputes,
  resolveDispute,
} from '../lib/api';
import {
  formatDate,
  formatLabel,
  formatMoney,
  routeLabel,
  statusBadgeClass,
} from '../lib/deliveryFormat';

const PAGE_SIZE = 50;

export default function DeliveriesPage() {
  return <DeliveriesList mode="all" />;
}

export function CancelledDeliveriesPage() {
  return <DeliveriesList mode="cancelled" />;
}

export function DisputesPage() {
  return <DisputesList />;
}

function DeliveriesList({ mode }) {
  const [deliveries, setDeliveries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');

  const loadDeliveries = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await listDeliveries({
        limit: PAGE_SIZE,
        offset: 0,
        filter: mode === 'cancelled' ? 'cancelled' : undefined,
      });
      setDeliveries(Array.isArray(data?.deliveries) ? data.deliveries : []);
    } catch (err) {
      setError(
        err instanceof ApiError
          ? err.message
          : 'Failed to load delivery requests. Is the API running?',
      );
    } finally {
      setLoading(false);
    }
  }, [mode]);

  useEffect(() => {
    loadDeliveries();
  }, [loadDeliveries]);

  const filteredDeliveries = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return deliveries.filter((delivery) => {
      const matchesType =
        typeFilter === 'all' || delivery.delivery_type === typeFilter;

      const haystack = [
        delivery.public_id,
        delivery.sender_name,
        delivery.sender_email,
        delivery.traveler_name,
        delivery.receiver_name,
        delivery.receiver_email,
        delivery.from_city,
        delivery.to_city,
        delivery.origin_country,
        delivery.destination_country,
        delivery.parcel_category,
        delivery.status,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      return matchesType && (!needle || haystack.includes(needle));
    });
  }, [deliveries, query, typeFilter]);

  const stats = useMemo(() => {
    if (mode === 'cancelled') {
      return {
        cards: [
          { label: 'Cancelled', value: deliveries.length, hint: 'Closed by cancel', tone: 'danger' },
          {
            label: 'City routes',
            value: deliveries.filter((d) => d.delivery_type === 'city_to_city').length,
            hint: 'City to city',
            tone: 'brand',
          },
          {
            label: 'Country routes',
            value: deliveries.filter((d) => d.delivery_type === 'country_to_country').length,
            hint: 'Country to country',
          },
          {
            label: 'Showing',
            value: filteredDeliveries.length,
            hint: 'After filters',
            tone: 'success',
          },
        ],
      };
    }

    const posted = deliveries.filter((d) => d.status === 'posted').length;
    const active = deliveries.filter(
      (d) => !['posted', 'delivered', 'cancelled'].includes(d.status),
    ).length;
    const delivered = deliveries.filter((d) => d.status === 'delivered').length;
    return {
      cards: [
        { label: 'Loaded', value: deliveries.length, hint: 'Delivery requests' },
        { label: 'Posted', value: posted, hint: 'Awaiting match', tone: 'brand' },
        { label: 'In progress', value: active, hint: 'Matched to delivered', tone: 'warning' },
        { label: 'Delivered', value: delivered, hint: 'Completed', tone: 'success' },
      ],
    };
  }, [deliveries, filteredDeliveries.length, mode]);

  return (
    <div className="space-y-5">
      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {stats.cards.map((card) => (
          <StatCard key={card.label} {...card} />
        ))}
      </section>

      <DeliveriesTable
        title={mode === 'cancelled' ? 'Cancelled deliveries' : 'Delivery requests'}
        subtitle={`Showing ${filteredDeliveries.length} of ${deliveries.length}`}
        loading={loading}
        error={error}
        deliveries={filteredDeliveries}
        query={query}
        onQueryChange={setQuery}
        typeFilter={typeFilter}
        onTypeFilterChange={setTypeFilter}
        onRefresh={loadDeliveries}
        emptyLabel={
          mode === 'cancelled'
            ? 'No cancelled deliveries found.'
            : 'No delivery requests match your filters.'
        }
      />
    </div>
  );
}

function DisputesList() {
  const [disputes, setDisputes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('open');
  const [actionId, setActionId] = useState(null);
  const [toast, setToast] = useState('');
  const [resolveForm, setResolveForm] = useState(null);

  const loadDisputes = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await listDisputes({
        limit: PAGE_SIZE,
        status: statusFilter === 'all' ? undefined : statusFilter,
      });
      setDisputes(Array.isArray(data?.disputes) ? data.disputes : []);
    } catch (err) {
      setError(
        err instanceof ApiError
          ? err.message
          : 'Failed to load disputes. Is the API running?',
      );
    } finally {
      setLoading(false);
    }
  }, [statusFilter]);

  useEffect(() => {
    loadDisputes();
  }, [loadDisputes]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(''), 2800);
    return () => clearTimeout(timer);
  }, [toast]);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return disputes.filter((dispute) => {
      const haystack = [
        dispute.delivery_public_id,
        dispute.reason,
        dispute.opened_by_name,
        dispute.opened_by_email,
        dispute.sender_name,
        dispute.sender_email,
        dispute.status,
        dispute.resolution,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return !needle || haystack.includes(needle);
    });
  }, [disputes, query]);

  const stats = useMemo(() => {
    const open = disputes.filter((d) => d.status === 'open' || d.status === 'under_review').length;
    const resolved = disputes.filter((d) => d.status === 'resolved').length;
    const dismissed = disputes.filter((d) => d.status === 'dismissed').length;
    return { total: disputes.length, open, resolved, dismissed };
  }, [disputes]);

  async function submitResolve({ dismiss }) {
    if (!resolveForm) return;
    const resolution = resolveForm.resolution.trim();
    if (!resolution) {
      setToast('Resolution note is required');
      return;
    }

    setActionId(resolveForm.id);
    try {
      await resolveDispute(resolveForm.id, {
        resolution,
        dismiss,
        closeAs: resolveForm.closeAs || null,
      });
      setToast(dismiss ? 'Dispute dismissed' : 'Dispute resolved');
      setResolveForm(null);
      await loadDisputes();
    } catch (err) {
      setToast(err instanceof ApiError ? err.message : 'Failed to update dispute');
    } finally {
      setActionId(null);
    }
  }

  return (
    <div className="space-y-5">
      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Loaded" value={stats.total} hint="Dispute cases" />
        <StatCard label="Open" value={stats.open} hint="Needs review" tone="warning" />
        <StatCard label="Resolved" value={stats.resolved} hint="Closed by admin" tone="success" />
        <StatCard label="Dismissed" value={stats.dismissed} hint="Not upheld" tone="danger" />
      </section>

      <section className="overflow-hidden rounded-xl border border-line bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
        <div className="flex flex-col gap-3 border-b border-line px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div>
            <h2 className="text-sm font-semibold text-ink">Disputed deliveries</h2>
            <p className="mt-0.5 text-xs text-muted">
              Showing {filtered.length} of {disputes.length} disputes
            </p>
          </div>
          <button
            type="button"
            onClick={loadDisputes}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-white px-3 py-2 text-xs font-semibold text-ink transition hover:bg-canvas"
          >
            Refresh
          </button>
        </div>

        <div className="grid gap-2.5 border-b border-line bg-slate-50/70 px-4 py-3 sm:grid-cols-[1fr_180px] sm:px-5">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search delivery ID, reason, opener…"
            className="w-full rounded-lg border border-line bg-white px-3 py-2 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-lg border border-line bg-white px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
          >
            <option value="open">Open / under review</option>
            <option value="resolved">Resolved</option>
            <option value="dismissed">Dismissed</option>
            <option value="all">All disputes</option>
          </select>
        </div>

        {error ? (
          <div className="m-4 rounded-lg border border-danger/20 bg-red-50 px-4 py-3 text-sm text-danger sm:m-5">
            {error}
          </div>
        ) : null}

        {loading ? (
          <div className="p-12 text-center text-sm text-muted">Loading disputes…</div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center text-sm text-muted">No disputes found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-line text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
                <tr>
                  <th className="px-4 py-3 sm:px-5">Delivery</th>
                  <th className="px-4 py-3 sm:px-5">Opened by</th>
                  <th className="px-4 py-3 sm:px-5">Reason</th>
                  <th className="px-4 py-3 sm:px-5">Dispute</th>
                  <th className="px-4 py-3 sm:px-5">Opened</th>
                  <th className="px-4 py-3 text-right sm:px-5">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {filtered.map((dispute) => {
                  const open = dispute.status === 'open' || dispute.status === 'under_review';
                  return (
                    <tr key={dispute.id} className="hover:bg-slate-50/80">
                      <td className="px-4 py-3.5 sm:px-5">
                        <div className="font-semibold text-ink">{dispute.delivery_public_id}</div>
                        <div className="text-xs text-muted">
                          {dispute.sender_name} · {formatMoney(dispute.max_budget)}
                        </div>
                        <span
                          className={`mt-1 inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize ${statusBadgeClass(dispute.delivery_status)}`}
                        >
                          {formatLabel(dispute.delivery_status)}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 sm:px-5">
                        <div className="font-medium text-ink">
                          {dispute.opened_by_name || 'Unknown'}
                        </div>
                        <div className="text-xs text-muted">{dispute.opened_by_email}</div>
                      </td>
                      <td className="max-w-xs px-4 py-3.5 sm:px-5">
                        <div className="line-clamp-3 text-sm text-ink">{dispute.reason}</div>
                      </td>
                      <td className="px-4 py-3.5 sm:px-5">
                        <span className="inline-flex rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-semibold capitalize text-warning ring-1 ring-inset ring-amber-600/15">
                          {formatLabel(dispute.status)}
                        </span>
                        {dispute.resolution ? (
                          <div className="mt-1 line-clamp-2 text-[11px] text-muted">
                            {dispute.resolution}
                          </div>
                        ) : null}
                      </td>
                      <td className="px-4 py-3.5 text-xs text-muted sm:px-5">
                        {formatDate(dispute.created_at)}
                      </td>
                      <td className="px-4 py-3.5 text-right sm:px-5">
                        <div className="inline-flex flex-col items-end gap-1.5">
                          <Link
                            to={`/admin/deliveries/${dispute.delivery_uuid || dispute.delivery_id}`}
                            className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-200"
                          >
                            View delivery
                          </Link>
                          {open ? (
                            <button
                              type="button"
                              onClick={() =>
                                setResolveForm({
                                  id: dispute.id,
                                  publicId: dispute.delivery_public_id,
                                  resolution: '',
                                  closeAs: 'cancelled',
                                })
                              }
                              className="rounded-lg bg-brand-soft px-2.5 py-1.5 text-xs font-semibold text-brand hover:bg-brand/15"
                            >
                              Manage
                            </button>
                          ) : null}
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

      {resolveForm ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4">
          <div className="w-full max-w-md rounded-2xl border border-line bg-white shadow-2xl">
            <div className="border-b border-line px-5 py-4">
              <div className="text-[11px] font-semibold tracking-[0.12em] text-muted uppercase">
                Manage dispute
              </div>
              <h3 className="mt-1 text-lg font-semibold text-ink">{resolveForm.publicId}</h3>
            </div>
            <div className="space-y-4 px-5 py-5">
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold tracking-wide text-ink uppercase">
                  Resolution note
                </span>
                <textarea
                  rows={4}
                  value={resolveForm.resolution}
                  onChange={(e) =>
                    setResolveForm((current) => ({
                      ...current,
                      resolution: e.target.value,
                    }))
                  }
                  className="w-full rounded-lg border border-line px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
                  placeholder="Explain the admin decision…"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold tracking-wide text-ink uppercase">
                  Close delivery as
                </span>
                <select
                  value={resolveForm.closeAs}
                  onChange={(e) =>
                    setResolveForm((current) => ({
                      ...current,
                      closeAs: e.target.value,
                    }))
                  }
                  className="w-full rounded-lg border border-line px-3 py-2 text-sm outline-none focus:border-brand"
                >
                  <option value="cancelled">Cancelled</option>
                  <option value="delivered">Delivered</option>
                  <option value="">Keep disputed status</option>
                </select>
              </label>
              <div className="flex flex-wrap justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setResolveForm(null)}
                  className="rounded-lg border border-line px-3 py-2 text-xs font-semibold text-ink"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={actionId === resolveForm.id}
                  onClick={() => submitResolve({ dismiss: true })}
                  className="rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-danger hover:bg-red-100 disabled:opacity-50"
                >
                  Dismiss
                </button>
                <button
                  type="button"
                  disabled={actionId === resolveForm.id}
                  onClick={() => submitResolve({ dismiss: false })}
                  className="rounded-lg bg-brand px-3 py-2 text-xs font-semibold text-white hover:bg-brand-dark disabled:opacity-50"
                >
                  Resolve
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

function DeliveriesTable({
  title,
  subtitle,
  loading,
  error,
  deliveries,
  query,
  onQueryChange,
  typeFilter,
  onTypeFilterChange,
  onRefresh,
  emptyLabel,
}) {
  return (
    <section className="overflow-hidden rounded-xl border border-line bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <div className="flex flex-col gap-3 border-b border-line px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <div>
          <h2 className="text-sm font-semibold text-ink">{title}</h2>
          <p className="mt-0.5 text-xs text-muted">{subtitle}</p>
        </div>
        <button
          type="button"
          onClick={onRefresh}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-white px-3 py-2 text-xs font-semibold text-ink transition hover:bg-canvas"
        >
          Refresh
        </button>
      </div>

      <div className="grid gap-2.5 border-b border-line bg-slate-50/70 px-4 py-3 sm:grid-cols-[1fr_180px] sm:px-5">
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search ID, sender, route, parcel…"
          className="w-full rounded-lg border border-line bg-white px-3 py-2 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
        />
        <select
          value={typeFilter}
          onChange={(e) => onTypeFilterChange(e.target.value)}
          className="rounded-lg border border-line bg-white px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
        >
          <option value="all">All types</option>
          <option value="city_to_city">City to city</option>
          <option value="country_to_country">Country to country</option>
        </select>
      </div>

      {error ? (
        <div className="m-4 rounded-lg border border-danger/20 bg-red-50 px-4 py-3 text-sm text-danger sm:m-5">
          {error}
        </div>
      ) : null}

      {loading ? (
        <div className="p-12 text-center text-sm text-muted">Loading…</div>
      ) : deliveries.length === 0 ? (
        <div className="p-12 text-center text-sm text-muted">{emptyLabel}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-line text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
              <tr>
                <th className="px-4 py-3 sm:px-5">Request</th>
                <th className="px-4 py-3 sm:px-5">Route</th>
                <th className="px-4 py-3 sm:px-5">Sender</th>
                <th className="px-4 py-3 sm:px-5">Budget</th>
                <th className="px-4 py-3 sm:px-5">Status</th>
                <th className="px-4 py-3 sm:px-5">Created</th>
                <th className="px-4 py-3 text-right sm:px-5">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {deliveries.map((delivery) => (
                <tr key={delivery.id} className="hover:bg-slate-50/80">
                  <td className="px-4 py-3.5 sm:px-5">
                    <div className="font-semibold text-ink">{delivery.public_id}</div>
                    <div className="mt-0.5 text-xs capitalize text-muted">
                      {formatLabel(delivery.delivery_type)} · {delivery.parcel_category}
                    </div>
                  </td>
                  <td className="px-4 py-3.5 sm:px-5">
                    <div className="font-medium text-ink">{routeLabel(delivery)}</div>
                    <div className="text-xs text-muted">
                      Travel {formatDate(delivery.travel_date)}
                    </div>
                  </td>
                  <td className="px-4 py-3.5 sm:px-5">
                    <div className="font-medium text-ink">{delivery.sender_name || 'Unknown'}</div>
                    <div className="truncate text-xs text-muted">{delivery.sender_email}</div>
                  </td>
                  <td className="px-4 py-3.5 font-semibold text-ink sm:px-5">
                    {formatMoney(delivery.max_budget)}
                  </td>
                  <td className="px-4 py-3.5 sm:px-5">
                    <span
                      className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize ${statusBadgeClass(delivery.status)}`}
                    >
                      {formatLabel(delivery.status)}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-xs text-muted sm:px-5">
                    {formatDate(delivery.created_at)}
                  </td>
                  <td className="px-4 py-3.5 text-right sm:px-5">
                    <Link
                      to={`/admin/deliveries/${delivery.id}`}
                      className="inline-flex rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-200"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

function StatCard({ label, value, hint, tone = 'default' }) {
  const tones = {
    default: { value: 'text-ink', bar: 'bg-slate-300' },
    success: { value: 'text-success', bar: 'bg-success' },
    warning: { value: 'text-warning', bar: 'bg-warning' },
    danger: { value: 'text-danger', bar: 'bg-danger' },
    brand: { value: 'text-brand', bar: 'bg-brand' },
  };
  const style = tones[tone] || tones.default;

  return (
    <div className="relative overflow-hidden rounded-xl border border-line bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <div className={`absolute top-0 left-0 h-full w-1 ${style.bar}`} />
      <div className="pl-2">
        <div className="text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
          {label}
        </div>
        <div className={`mt-1.5 text-2xl font-semibold tracking-tight ${style.value}`}>
          {value}
        </div>
        <div className="mt-1 text-xs text-muted">{hint}</div>
      </div>
    </div>
  );
}
