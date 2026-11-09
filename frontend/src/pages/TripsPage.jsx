import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiError, cancelTrip, listTrips } from '../lib/api';
import {
  badgeClass,
  formatDate,
  formatLabel,
  tripRouteLabel,
} from '../lib/format';

const PAGE_SIZE = 50;

export default function TripsPage() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [actionId, setActionId] = useState(null);
  const [toast, setToast] = useState('');
  const [confirmTrip, setConfirmTrip] = useState(null);

  const loadTrips = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await listTrips({
        limit: PAGE_SIZE,
        status: statusFilter === 'all' ? undefined : statusFilter,
      });
      setTrips(Array.isArray(data?.trips) ? data.trips : []);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Failed to load trips.');
    } finally {
      setLoading(false);
    }
  }, [statusFilter]);

  useEffect(() => {
    loadTrips();
  }, [loadTrips]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(''), 2800);
    return () => clearTimeout(timer);
  }, [toast]);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return trips.filter((trip) => {
      const haystack = [
        trip.public_id,
        trip.traveler_name,
        trip.traveler_email,
        trip.from_city,
        trip.to_city,
        trip.origin_country,
        trip.destination_country,
        trip.flight_number,
        trip.status,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return !needle || haystack.includes(needle);
    });
  }, [trips, query]);

  const stats = useMemo(() => {
    const open = trips.filter((t) => t.status === 'open_bid').length;
    const inTransit = trips.filter((t) => t.status === 'in_transit').length;
    const cancelled = trips.filter((t) => t.status === 'cancelled').length;
    return { total: trips.length, open, inTransit, cancelled };
  }, [trips]);

  async function handleCancel() {
    if (!confirmTrip) return;
    setActionId(confirmTrip.id);
    try {
      await cancelTrip(confirmTrip.id, { reason: 'Cancelled by admin' });
      setToast(`${confirmTrip.public_id} cancelled`);
      setConfirmTrip(null);
      await loadTrips();
    } catch (err) {
      setToast(err instanceof ApiError ? err.message : 'Cancel failed');
    } finally {
      setActionId(null);
    }
  }

  return (
    <div className="space-y-5">
      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Loaded" value={stats.total} hint="Traveler trips" />
        <StatCard label="Open" value={stats.open} hint="Accepting bids" tone="brand" />
        <StatCard label="In transit" value={stats.inTransit} hint="Active travel" tone="warning" />
        <StatCard label="Cancelled" value={stats.cancelled} hint="Closed trips" tone="danger" />
      </section>

      <section className="overflow-hidden rounded-xl border border-line bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
        <div className="flex flex-col gap-3 border-b border-line px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div>
            <h2 className="text-sm font-semibold text-ink">Traveler trips</h2>
            <p className="mt-0.5 text-xs text-muted">
              Showing {filtered.length} of {trips.length} trips
            </p>
          </div>
          <button
            type="button"
            onClick={loadTrips}
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
            placeholder="Search trip ID, traveler, route…"
            className="w-full rounded-lg border border-line bg-white px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-lg border border-line bg-white px-3 py-2 text-sm outline-none focus:border-brand"
          >
            <option value="all">All statuses</option>
            <option value="open_bid">Open bid</option>
            <option value="in_transit">In transit</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        {error ? (
          <div className="m-4 rounded-lg border border-danger/20 bg-red-50 px-4 py-3 text-sm text-danger">
            {error}
          </div>
        ) : null}

        {loading ? (
          <div className="p-12 text-center text-sm text-muted">Loading trips…</div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center text-sm text-muted">No trips found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-line text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
                <tr>
                  <th className="px-4 py-3 sm:px-5">Trip</th>
                  <th className="px-4 py-3 sm:px-5">Traveler</th>
                  <th className="px-4 py-3 sm:px-5">Route</th>
                  <th className="px-4 py-3 sm:px-5">Travel</th>
                  <th className="px-4 py-3 sm:px-5">Status</th>
                  <th className="px-4 py-3 text-right sm:px-5">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {filtered.map((trip) => (
                  <tr key={trip.id} className="hover:bg-slate-50/80">
                    <td className="px-4 py-3.5 sm:px-5">
                      <div className="font-semibold text-ink">{trip.public_id}</div>
                      <div className="text-xs capitalize text-muted">
                        {formatLabel(trip.trip_type)} · {Number(trip.luggage_capacity_kg)} kg
                      </div>
                      {trip.pending_request_count > 0 ? (
                        <div className="mt-1 text-[11px] font-semibold text-warning">
                          {trip.pending_request_count} pending request
                          {trip.pending_request_count === 1 ? '' : 's'}
                        </div>
                      ) : null}
                    </td>
                    <td className="px-4 py-3.5 sm:px-5">
                      <Link
                        to={`/admin/users/${trip.traveler_id}`}
                        className="font-medium text-brand hover:underline"
                      >
                        {trip.traveler_name || 'Unknown'}
                      </Link>
                      <div className="truncate text-xs text-muted">{trip.traveler_email}</div>
                    </td>
                    <td className="px-4 py-3.5 sm:px-5">
                      <div className="font-medium text-ink">{tripRouteLabel(trip)}</div>
                      {trip.flight_number ? (
                        <div className="text-xs text-muted">Flight {trip.flight_number}</div>
                      ) : null}
                    </td>
                    <td className="px-4 py-3.5 text-xs text-muted sm:px-5">
                      {formatDate(trip.travel_date)}
                    </td>
                    <td className="px-4 py-3.5 sm:px-5">
                      <span
                        className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize ${badgeClass('trip', trip.status)}`}
                      >
                        {formatLabel(trip.status)}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-right sm:px-5">
                      {trip.status === 'open_bid' ? (
                        <button
                          type="button"
                          onClick={() => setConfirmTrip(trip)}
                          className="rounded-lg bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-danger hover:bg-red-100"
                        >
                          Cancel
                        </button>
                      ) : (
                        <span className="text-xs text-muted">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {confirmTrip ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4">
          <div className="w-full max-w-md rounded-2xl border border-line bg-white shadow-2xl">
            <div className="border-b border-line px-5 py-4">
              <h3 className="text-lg font-semibold text-ink">Cancel trip?</h3>
              <p className="mt-1 text-sm text-muted">
                {confirmTrip.public_id} · {tripRouteLabel(confirmTrip)}
              </p>
            </div>
            <div className="space-y-4 px-5 py-5 text-sm text-muted">
              <p>
                This cancels the open trip and pending sender match requests. Trips already in
                transit cannot be cancelled here.
              </p>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setConfirmTrip(null)}
                  className="rounded-lg border border-line px-3 py-2 text-xs font-semibold text-ink"
                >
                  Keep trip
                </button>
                <button
                  type="button"
                  disabled={actionId === confirmTrip.id}
                  onClick={handleCancel}
                  className="rounded-lg bg-danger px-3 py-2 text-xs font-semibold text-white disabled:opacity-50"
                >
                  {actionId === confirmTrip.id ? 'Cancelling…' : 'Confirm cancel'}
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
