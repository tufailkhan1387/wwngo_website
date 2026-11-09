import { useEffect, useMemo, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import {
  ApiError,
  getUserDetail,
  suspendUser,
  unsuspendUser,
  updateUser,
} from '../lib/api';
import TestNotificationModal from '../components/TestNotificationModal';
import {
  badgeClass,
  deliveryRouteLabel,
  formatCents,
  formatDate,
  formatDateTime,
  formatLabel,
  formatMoney,
  tripRouteLabel,
} from '../lib/format';

const ROLE_OPTIONS = ['sender', 'traveler', 'receiver'];
const KYC_OPTIONS = ['pending', 'submitted', 'approved', 'rejected'];
const ACCOUNT_OPTIONS = ['active', 'suspended'];

function formFromUser(user) {
  return {
    name: user.name || '',
    email: user.email || '',
    phone: user.phone || '',
    country_code: (user.country_code || '').toUpperCase(),
    bio: user.bio || '',
    role: user.role || '',
    kyc_status: user.kyc_status || 'pending',
    account_status: user.account_status || 'active',
    is_verified: Boolean(user.is_verified),
    email_verified: Boolean(user.email_verified),
    phone_verified: Boolean(user.phone_verified),
    is_admin: Boolean(user.is_admin),
    password: '',
    confirmPassword: '',
  };
}

export default function UserDetailPage() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionLoading, setActionLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState('');
  const [editing, setEditing] = useState(searchParams.get('edit') === '1');
  const [form, setForm] = useState(null);
  const [formError, setFormError] = useState('');
  const [notifyOpen, setNotifyOpen] = useState(searchParams.get('notify') === '1');

  async function load() {
    setLoading(true);
    setError('');
    try {
      const data = await getUserDetail(id);
      setDetail(data);
      setForm(formFromUser(data.user));
    } catch (err) {
      setDetail(null);
      setForm(null);
      setError(err instanceof ApiError ? err.message : 'Failed to load user.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, [id]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(''), 2800);
    return () => clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    setEditing(searchParams.get('edit') === '1');
    setNotifyOpen(searchParams.get('notify') === '1');
  }, [searchParams]);

  function openNotify() {
    setNotifyOpen(true);
    const next = new URLSearchParams(searchParams);
    next.set('notify', '1');
    next.delete('edit');
    setSearchParams(next, { replace: true });
  }

  function closeNotify() {
    setNotifyOpen(false);
    const next = new URLSearchParams(searchParams);
    next.delete('notify');
    setSearchParams(next, { replace: true });
  }

  function startEdit() {
    if (!detail?.user) return;
    setForm(formFromUser(detail.user));
    setFormError('');
    setEditing(true);
    setNotifyOpen(false);
    setSearchParams({ edit: '1' }, { replace: true });
  }

  function cancelEdit() {
    if (detail?.user) setForm(formFromUser(detail.user));
    setFormError('');
    setEditing(false);
    setSearchParams({}, { replace: true });
  }

  function setField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  const dirty = useMemo(() => {
    if (!detail?.user || !form) return false;
    const baseline = formFromUser(detail.user);
    const profileDirty = Object.keys(baseline).some((key) => {
      if (key === 'password' || key === 'confirmPassword') return false;
      return baseline[key] !== form[key];
    });
    const passwordDirty = Boolean(form.password || form.confirmPassword);
    return profileDirty || passwordDirty;
  }, [detail, form]);

  async function saveEdit(event) {
    event.preventDefault();
    if (!detail?.user || !form) return;

    if (form.password || form.confirmPassword) {
      if (form.password.length < 8) {
        setFormError('Password must be at least 8 characters.');
        return;
      }
      if (form.password !== form.confirmPassword) {
        setFormError('Password and confirmation do not match.');
        return;
      }
    }

    setSaving(true);
    setFormError('');
    try {
      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        country_code: String(form.country_code || '').trim().toUpperCase(),
        bio: form.bio,
        role: form.role || null,
        kyc_status: form.kyc_status,
        account_status: form.account_status,
        is_verified: form.is_verified,
        email_verified: form.email_verified,
        phone_verified: form.phone_verified,
        is_admin: form.is_admin,
      };
      if (form.password) {
        payload.password = form.password;
      }
      const data = await updateUser(detail.user.id, payload);
      setEditing(false);
      setSearchParams({}, { replace: true });
      setToast(
        data?.user?.password_updated || form.password
          ? 'User and password updated'
          : 'User updated',
      );
      await load();
    } catch (err) {
      setFormError(err instanceof ApiError ? err.message : 'Failed to save user.');
    } finally {
      setSaving(false);
    }
  }

  async function toggleSuspend() {
    if (!detail?.user || detail.user.is_admin) return;
    setActionLoading(true);
    try {
      if (detail.user.account_status === 'suspended') {
        await unsuspendUser(detail.user.id);
        setToast('User reactivated');
      } else {
        await suspendUser(detail.user.id);
        setToast('User suspended');
      }
      await load();
    } catch (err) {
      setToast(err instanceof ApiError ? err.message : 'Action failed');
    } finally {
      setActionLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="rounded-xl border border-line bg-white p-10 text-center text-sm text-muted">
        Loading user details…
      </div>
    );
  }

  if (error || !detail?.user) {
    return (
      <div className="space-y-4">
        <BackLink />
        <div className="rounded-xl border border-danger/20 bg-red-50 px-4 py-3 text-sm text-danger">
          {error || 'User not found.'}
        </div>
      </div>
    );
  }

  const { user, wallets = [], ledger = [], deliveries = [], trips = [] } = detail;
  const suspended = user.account_status === 'suspended';
  const deviceTokens = detail.device_token_count ?? 0;

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <BackLink />
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <h2 className="text-xl font-semibold tracking-tight text-ink">{user.name}</h2>
            {user.is_admin ? (
              <span className="rounded bg-brand-soft px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-brand uppercase">
                Admin
              </span>
            ) : null}
            <span
              className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold capitalize ${badgeClass('account', user.account_status)}`}
            >
              {formatLabel(user.account_status)}
            </span>
          </div>
          <p className="mt-1 text-sm text-muted">
            {user.email} · Joined {formatDate(user.created_at)}
          </p>
          <p className="mt-1 text-xs text-muted">
            Push devices: {deviceTokens}
            {detail.fcm_configured === false ? ' · FCM not configured' : ''}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {!editing ? (
            <>
              <button
                type="button"
                onClick={openNotify}
                className="rounded-lg border border-brand/20 bg-brand-soft px-3 py-2 text-xs font-semibold text-brand hover:bg-brand/15"
              >
                Test notification
              </button>
              <button
                type="button"
                onClick={startEdit}
                className="rounded-lg bg-brand px-3 py-2 text-xs font-semibold text-white shadow-sm shadow-brand/25 hover:bg-brand/90"
              >
                Edit user
              </button>
            </>
          ) : null}
          {!user.is_admin ? (
            <button
              type="button"
              disabled={actionLoading || editing}
              onClick={toggleSuspend}
              className={[
                'rounded-lg px-3 py-2 text-xs font-semibold disabled:opacity-50',
                suspended
                  ? 'bg-emerald-50 text-success hover:bg-emerald-100'
                  : 'bg-red-50 text-danger hover:bg-red-100',
              ].join(' ')}
            >
              {actionLoading ? 'Working…' : suspended ? 'Unsuspend user' : 'Suspend user'}
            </button>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <section className="space-y-4 xl:col-span-2">
          <Card
            title={editing ? 'Edit profile' : 'Profile'}
            action={
              editing ? (
                <span className="text-[11px] font-medium text-muted">
                  {dirty ? 'Unsaved changes' : 'No changes yet'}
                </span>
              ) : null
            }
          >
            {editing && form ? (
              <form className="space-y-4" onSubmit={saveEdit}>
                {formError ? (
                  <div className="rounded-lg border border-danger/20 bg-red-50 px-3 py-2 text-sm text-danger">
                    {formError}
                  </div>
                ) : null}

                <div className="grid gap-3 sm:grid-cols-2">
                  <Field label="Name">
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setField('name', e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setField('email', e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Phone">
                    <input
                      required
                      value={form.phone}
                      onChange={(e) => setField('phone', e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Country code">
                    <input
                      required
                      maxLength={2}
                      value={form.country_code}
                      onChange={(e) =>
                        setField('country_code', e.target.value.toUpperCase())
                      }
                      className={inputClass}
                      placeholder="US"
                    />
                  </Field>
                  <Field label="Primary role">
                    <select
                      value={form.role}
                      onChange={(e) => setField('role', e.target.value)}
                      className={inputClass}
                    >
                      <option value="">—</option>
                      {ROLE_OPTIONS.map((role) => (
                        <option key={role} value={role}>
                          {formatLabel(role)}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="KYC status">
                    <select
                      value={form.kyc_status}
                      onChange={(e) => setField('kyc_status', e.target.value)}
                      className={inputClass}
                    >
                      {KYC_OPTIONS.map((status) => (
                        <option key={status} value={status}>
                          {formatLabel(status)}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Account status">
                    <select
                      value={form.account_status}
                      onChange={(e) => setField('account_status', e.target.value)}
                      className={inputClass}
                    >
                      {ACCOUNT_OPTIONS.map((status) => (
                        <option key={status} value={status}>
                          {formatLabel(status)}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Bio">
                  <textarea
                    rows={3}
                    value={form.bio}
                    onChange={(e) => setField('bio', e.target.value)}
                    className={`${inputClass} resize-y`}
                  />
                </Field>

                <div className="rounded-lg border border-line bg-slate-50 p-4">
                  <div className="text-xs font-semibold tracking-[0.08em] text-muted uppercase">
                    Password
                  </div>
                  <p className="mt-1 text-xs text-muted">
                    Leave blank to keep the current password. Updating password signs the user out
                    of existing sessions.
                  </p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <Field label="New password">
                      <input
                        type="password"
                        autoComplete="new-password"
                        value={form.password}
                        onChange={(e) => setField('password', e.target.value)}
                        className={inputClass}
                        placeholder="Min. 8 characters"
                      />
                    </Field>
                    <Field label="Confirm password">
                      <input
                        type="password"
                        autoComplete="new-password"
                        value={form.confirmPassword}
                        onChange={(e) => setField('confirmPassword', e.target.value)}
                        className={inputClass}
                        placeholder="Repeat password"
                      />
                    </Field>
                  </div>
                </div>

                <div className="grid gap-2 sm:grid-cols-2">
                  <Toggle
                    label="Platform verified"
                    checked={form.is_verified}
                    onChange={(v) => setField('is_verified', v)}
                  />
                  <Toggle
                    label="Email verified"
                    checked={form.email_verified}
                    onChange={(v) => setField('email_verified', v)}
                  />
                  <Toggle
                    label="Phone verified"
                    checked={form.phone_verified}
                    onChange={(v) => setField('phone_verified', v)}
                  />
                  <Toggle
                    label="Admin access"
                    checked={form.is_admin}
                    onChange={(v) => setField('is_admin', v)}
                  />
                </div>

                <div className="flex flex-wrap items-center justify-end gap-2 border-t border-line pt-4">
                  <button
                    type="button"
                    onClick={cancelEdit}
                    disabled={saving}
                    className="rounded-lg border border-line bg-white px-3 py-2 text-xs font-semibold text-ink hover:bg-slate-50 disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving || !dirty}
                    className="rounded-lg bg-brand px-3 py-2 text-xs font-semibold text-white shadow-sm shadow-brand/25 hover:bg-brand/90 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {saving ? 'Saving…' : 'Save changes'}
                  </button>
                </div>
              </form>
            ) : (
              <>
                <InfoGrid
                  items={[
                    ['Phone', user.phone || '—'],
                    ['Country', user.country_code || '—'],
                    ['Primary role', formatLabel(user.role)],
                    ['KYC', formatLabel(user.kyc_status)],
                    ['Verified', user.is_verified ? 'Yes' : 'No'],
                    ['Email verified', user.email_verified ? 'Yes' : 'No'],
                    ['Phone verified', user.phone_verified ? 'Yes' : 'No'],
                    [
                      'Rating',
                      `${Number(user.rating || 0).toFixed(1)} (${user.review_count || 0})`,
                    ],
                    ['Legacy wallet', formatMoney(user.wallet_balance)],
                  ]}
                />
                {user.bio ? (
                  <div className="mt-4 border-t border-line pt-4">
                    <div className="text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
                      Bio
                    </div>
                    <p className="mt-1.5 text-sm text-ink">{user.bio}</p>
                  </div>
                ) : null}
              </>
            )}
          </Card>

          <Card title="Delivery history">
            {deliveries.length === 0 ? (
              <Empty text="No deliveries linked to this user." />
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
                    <tr>
                      <th className="pb-2 pr-3">Delivery</th>
                      <th className="pb-2 pr-3">Role</th>
                      <th className="pb-2 pr-3">Route</th>
                      <th className="pb-2 pr-3">Status</th>
                      <th className="pb-2">Created</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {deliveries.map((delivery) => (
                      <tr key={delivery.id}>
                        <td className="py-2.5 pr-3">
                          <Link
                            to={`/admin/deliveries/${delivery.id}`}
                            className="font-semibold text-brand hover:underline"
                          >
                            {delivery.public_id}
                          </Link>
                        </td>
                        <td className="py-2.5 pr-3 capitalize text-muted">
                          {delivery.user_role_in_delivery || '—'}
                        </td>
                        <td className="py-2.5 pr-3 text-ink">{deliveryRouteLabel(delivery)}</td>
                        <td className="py-2.5 pr-3">
                          <span
                            className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize ${badgeClass('delivery', delivery.status)}`}
                          >
                            {formatLabel(delivery.status)}
                          </span>
                        </td>
                        <td className="py-2.5 text-xs text-muted">
                          {formatDate(delivery.created_at)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Card>

          <Card title="Trip history">
            {trips.length === 0 ? (
              <Empty text="No traveler trips for this user." />
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
                    <tr>
                      <th className="pb-2 pr-3">Trip</th>
                      <th className="pb-2 pr-3">Route</th>
                      <th className="pb-2 pr-3">Travel</th>
                      <th className="pb-2">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {trips.map((trip) => (
                      <tr key={trip.id}>
                        <td className="py-2.5 pr-3 font-semibold text-ink">{trip.public_id}</td>
                        <td className="py-2.5 pr-3">{tripRouteLabel(trip)}</td>
                        <td className="py-2.5 pr-3 text-xs text-muted">
                          {formatDate(trip.travel_date)}
                        </td>
                        <td className="py-2.5">
                          <span
                            className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize ${badgeClass('trip', trip.status)}`}
                          >
                            {formatLabel(trip.status)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Card>
        </section>

        <section className="space-y-4">
          <Card title="Wallet">
            {wallets.length === 0 ? (
              <Empty text="No wallet yet." />
            ) : (
              <div className="rounded-lg border border-line bg-slate-50 px-3 py-3">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <div className="text-[11px] text-muted">Available</div>
                    <div className="font-semibold text-ink">
                      {formatCents(wallets[0].available_cents)}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-muted">Escrow</div>
                    <div className="font-semibold text-ink">
                      {formatCents(wallets[0].escrow_cents)}
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-[11px] text-muted">
                  Single wallet shared across sender, traveler, and receiver roles.
                </p>
              </div>
            )}
          </Card>

          <Card title="Recent ledger">
            {ledger.length === 0 ? (
              <Empty text="No ledger activity." />
            ) : (
              <ul className="space-y-3">
                {ledger.map((entry) => (
                  <li key={entry.id} className="border-b border-line pb-3 last:border-0 last:pb-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-sm font-medium capitalize text-ink">
                          {formatLabel(entry.type)}
                        </div>
                        <div className="text-xs text-muted">{entry.description}</div>
                        <div className="mt-1 text-[11px] text-slate-400">
                          {formatLabel(entry.role)}
                          {entry.shipment_id ? ` · ${entry.shipment_id}` : ''}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-ink">
                          {formatCents(entry.amount_cents)}
                        </div>
                        <div className="text-[11px] text-muted">
                          {formatDateTime(entry.created_at)}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </Card>
        </section>
      </div>

      {toast ? (
        <div className="fixed right-5 bottom-5 z-50 rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-white shadow-xl">
          {toast}
        </div>
      ) : null}

      <TestNotificationModal
        open={notifyOpen}
        user={user}
        onClose={closeNotify}
        onSent={(message) => setToast(message)}
      />
    </div>
  );
}

const inputClass =
  'w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20';

function BackLink() {
  return (
    <Link
      to="/admin/users"
      className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted transition hover:text-brand"
    >
      <span aria-hidden="true">←</span>
      Back to users
    </Link>
  );
}

function Card({ title, children, action }) {
  return (
    <section className="rounded-xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-ink">{title}</h3>
        {action}
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
        {label}
      </span>
      {children}
    </label>
  );
}

function Toggle({ label, checked, onChange }) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-3 rounded-lg border border-line bg-slate-50 px-3 py-2.5">
      <span className="text-sm font-medium text-ink">{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 rounded border-line text-brand focus:ring-brand/30"
      />
    </label>
  );
}

function InfoGrid({ items }) {
  return (
    <dl className="grid gap-3 sm:grid-cols-2">
      {items.map(([label, value]) => (
        <div key={label}>
          <dt className="text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
            {label}
          </dt>
          <dd className="mt-1 text-sm text-ink">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function Empty({ text }) {
  return <div className="text-sm text-muted">{text}</div>;
}
