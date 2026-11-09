import { useEffect, useState } from 'react';
import { ApiError, sendTestNotification } from '../lib/api';

const DEFAULT_TITLE = 'WWNGO Test';
const DEFAULT_BODY =
  'This is a test notification from the WWNGO admin panel.';

export default function TestNotificationModal({
  open,
  user,
  onClose,
  onSent,
}) {
  const [title, setTitle] = useState(DEFAULT_TITLE);
  const [body, setBody] = useState(DEFAULT_BODY);
  const [role, setRole] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!open) return;
    setTitle(DEFAULT_TITLE);
    setBody(DEFAULT_BODY);
    setRole(user?.role || '');
    setError('');
    setSending(false);
  }, [open, user]);

  if (!open || !user) return null;

  async function handleSubmit(event) {
    event.preventDefault();
    setSending(true);
    setError('');
    try {
      const result = await sendTestNotification(user.id, {
        title: title.trim(),
        body: body.trim(),
        role: role || undefined,
      });

      const push = result?.push || {};
      let message = 'In-app notification created';
      if (push.sent) {
        message = `Push sent to ${push.count || 0} device(s)`;
      } else if (result?.deviceTokens === 0) {
        message = 'In-app saved, but user has no registered device tokens';
      } else if (push.reason === 'not_configured' || result?.fcmConfigured === false) {
        message = 'In-app saved, but FCM is not configured on the server';
      } else if (push.reason) {
        message = `In-app saved; push failed (${push.reason})`;
      }

      onSent?.(message, result);
      onClose?.();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Failed to send notification.');
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="test-notification-title"
        className="w-full max-w-md rounded-xl border border-line bg-white p-5 shadow-xl"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 id="test-notification-title" className="text-sm font-semibold text-ink">
              Send test notification
            </h3>
            <p className="mt-1 text-xs text-muted">
              {user.name || 'User'} · {user.email}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md px-2 py-1 text-xs font-semibold text-muted hover:bg-slate-50 hover:text-ink"
          >
            Close
          </button>
        </div>

        <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
          {error ? (
            <div className="rounded-lg border border-danger/20 bg-red-50 px-3 py-2 text-sm text-danger">
              {error}
            </div>
          ) : null}

          <label className="block">
            <span className="mb-1.5 block text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
              Title
            </span>
            <input
              required
              maxLength={120}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border border-line bg-white px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
              Body
            </span>
            <textarea
              required
              rows={3}
              maxLength={500}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full resize-y rounded-lg border border-line bg-white px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
              In-app role
            </span>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-lg border border-line bg-white px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            >
              <option value="">Auto ({user.role || 'sender'})</option>
              <option value="sender">Sender</option>
              <option value="traveler">Traveler</option>
              <option value="receiver">Receiver</option>
            </select>
          </label>

          <p className="text-[11px] text-muted">
            Creates an in-app notification and sends an FCM push to all registered
            devices for this user.
          </p>

          <div className="flex justify-end gap-2 border-t border-line pt-3">
            <button
              type="button"
              onClick={onClose}
              disabled={sending}
              className="rounded-lg border border-line bg-white px-3 py-2 text-xs font-semibold text-ink hover:bg-slate-50 disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={sending}
              className="rounded-lg bg-brand px-3 py-2 text-xs font-semibold text-white hover:bg-brand/90 disabled:opacity-50"
            >
              {sending ? 'Sending…' : 'Send test'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
