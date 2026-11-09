import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiError, listNfcAudit } from '../lib/api';
import {
  badgeClass,
  formatDateTime,
  formatLabel,
} from '../lib/format';

export default function NfcAuditPage() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [fraudOnly, setFraudOnly] = useState(false);

  const loadLogs = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await listNfcAudit({ limit: 100, fraudOnly });
      setLogs(Array.isArray(data?.logs) ? data.logs : []);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Failed to load NFC audit logs.');
    } finally {
      setLoading(false);
    }
  }, [fraudOnly]);

  useEffect(() => {
    loadLogs();
  }, [loadLogs]);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return logs.filter((row) => {
      const haystack = [
        row.delivery_public_id,
        row.checkpoint,
        row.initiator_name,
        row.initiator_email,
        row.confirmer_name,
        row.confirmer_email,
        row.device_hash,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return !needle || haystack.includes(needle);
    });
  }, [logs, query]);

  const stats = useMemo(() => {
    const confirmed = logs.filter((l) => l.confirmed_at).length;
    const pending = logs.filter((l) => !l.confirmed_at).length;
    const fraud = logs.filter((l) => l.fraud_flag).length;
    return { total: logs.length, confirmed, pending, fraud };
  }, [logs]);

  return (
    <div className="space-y-5">
      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Checkpoints" value={stats.total} hint="Loaded events" />
        <StatCard label="Confirmed" value={stats.confirmed} hint="Both parties" tone="success" />
        <StatCard label="Pending" value={stats.pending} hint="Awaiting confirm" tone="warning" />
        <StatCard label="Fraud flags" value={stats.fraud} hint="Needs review" tone="danger" />
      </section>

      <section className="overflow-hidden rounded-xl border border-line bg-white">
        <div className="flex flex-col gap-3 border-b border-line px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div>
            <h2 className="text-sm font-semibold text-ink">NFC handoff audit</h2>
            <p className="mt-0.5 text-xs text-muted">
              Showing {filtered.length} of {logs.length} checkpoint events
            </p>
          </div>
          <div className="flex items-center gap-2">
            <label className="inline-flex items-center gap-2 rounded-lg border border-line px-3 py-2 text-xs font-semibold text-ink">
              <input
                type="checkbox"
                checked={fraudOnly}
                onChange={(e) => setFraudOnly(e.target.checked)}
              />
              Fraud only
            </label>
            <button
              type="button"
              onClick={loadLogs}
              className="rounded-lg border border-line px-3 py-2 text-xs font-semibold text-ink hover:bg-canvas"
            >
              Refresh
            </button>
          </div>
        </div>

        <div className="border-b border-line bg-slate-50/70 px-4 py-3 sm:px-5">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search delivery, checkpoint, initiator, confirmer…"
            className="w-full rounded-lg border border-line bg-white px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
          />
        </div>

        {error ? (
          <div className="m-4 rounded-lg border border-danger/20 bg-red-50 px-4 py-3 text-sm text-danger">
            {error}
          </div>
        ) : null}

        {loading ? (
          <div className="p-12 text-center text-sm text-muted">Loading NFC audit…</div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center text-sm text-muted">No NFC checkpoints found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-line text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
                <tr>
                  <th className="px-4 py-3 sm:px-5">Delivery</th>
                  <th className="px-4 py-3 sm:px-5">Checkpoint</th>
                  <th className="px-4 py-3 sm:px-5">Initiator</th>
                  <th className="px-4 py-3 sm:px-5">Confirmer</th>
                  <th className="px-4 py-3 sm:px-5">Location</th>
                  <th className="px-4 py-3 sm:px-5">Timing</th>
                  <th className="px-4 py-3 sm:px-5">Flags</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {filtered.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/80">
                    <td className="px-4 py-3.5 sm:px-5">
                      <Link
                        to={`/admin/deliveries/${row.delivery_uuid || row.delivery_id}`}
                        className="font-semibold text-brand hover:underline"
                      >
                        {row.delivery_public_id}
                      </Link>
                      <div className="mt-1">
                        <span
                          className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize ${badgeClass('delivery', row.delivery_status)}`}
                        >
                          {formatLabel(row.delivery_status)}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 sm:px-5">
                      <div className="font-medium capitalize text-ink">
                        {formatLabel(row.checkpoint)}
                      </div>
                      {row.device_hash ? (
                        <div className="truncate text-[11px] text-slate-400">
                          Device {String(row.device_hash).slice(0, 12)}…
                        </div>
                      ) : null}
                    </td>
                    <td className="px-4 py-3.5 sm:px-5">
                      <Link
                        to={`/admin/users/${row.initiator_id}`}
                        className="font-medium text-brand hover:underline"
                      >
                        {row.initiator_name || 'Unknown'}
                      </Link>
                      <div className="truncate text-xs text-muted">{row.initiator_email}</div>
                    </td>
                    <td className="px-4 py-3.5 sm:px-5">
                      {row.confirmer_id ? (
                        <>
                          <Link
                            to={`/admin/users/${row.confirmer_id}`}
                            className="font-medium text-brand hover:underline"
                          >
                            {row.confirmer_name || 'Unknown'}
                          </Link>
                          <div className="truncate text-xs text-muted">{row.confirmer_email}</div>
                        </>
                      ) : (
                        <span className="text-xs text-muted">Awaiting confirm</span>
                      )}
                    </td>
                    <td className="px-4 py-3.5 text-xs text-muted sm:px-5">
                      {row.gps_lat != null && row.gps_lng != null
                        ? `${Number(row.gps_lat).toFixed(5)}, ${Number(row.gps_lng).toFixed(5)}`
                        : 'No GPS'}
                    </td>
                    <td className="px-4 py-3.5 text-xs text-muted sm:px-5">
                      <div>Started {formatDateTime(row.created_at)}</div>
                      <div>
                        Confirmed {row.confirmed_at ? formatDateTime(row.confirmed_at) : '—'}
                      </div>
                    </td>
                    <td className="px-4 py-3.5 sm:px-5">
                      {row.fraud_flag ? (
                        <span className="inline-flex rounded-full bg-red-50 px-2 py-0.5 text-[11px] font-semibold text-danger ring-1 ring-inset ring-red-600/15">
                          Fraud flag
                        </span>
                      ) : (
                        <span className="inline-flex rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-success ring-1 ring-inset ring-emerald-600/15">
                          Clean
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

function StatCard({ label, value, hint, tone = 'default' }) {
  const tones = {
    default: { value: 'text-ink', bar: 'bg-slate-300' },
    success: { value: 'text-success', bar: 'bg-success' },
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
