import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ApiError } from '../lib/api';

const DEMO_ADMIN = {
  email: 'admin@admin.com',
  password: '11223344',
};

export default function LoginPage() {
  const { authenticated, login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState(DEMO_ADMIN.email);
  const [password, setPassword] = useState(DEMO_ADMIN.password);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (authenticated) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email.trim(), password);
      navigate('/admin/dashboard', { replace: true });
    } catch (err) {
      setError(
        err instanceof ApiError
          ? err.message
          : 'Unable to sign in. Check the API server and try again.',
      );
    } finally {
      setLoading(false);
    }
  }

  function fillDemoCredentials() {
    setEmail(DEMO_ADMIN.email);
    setPassword(DEMO_ADMIN.password);
    setError('');
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-sidebar px-4">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(26,86,219,0.28),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.9),transparent_45%)]" />

      <div className="relative w-full max-w-[420px] overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl shadow-black/30">
        <div className="border-b border-line bg-slate-50 px-7 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-sm font-bold text-white">
              W
            </div>
            <div>
              <div className="text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">
                WWNGO
              </div>
              <h1 className="text-lg font-semibold tracking-tight text-ink">Admin Console</h1>
            </div>
          </div>
        </div>

        <div className="px-7 py-6">
          <p className="text-sm text-muted">
            Sign in to manage users, KYC, and account access.
          </p>

          <div className="mt-5 rounded-xl border border-line bg-slate-50 px-4 py-3">
            <div className="text-[11px] font-semibold tracking-[0.12em] text-muted uppercase">
              Demo credentials
            </div>
            <div className="mt-2 space-y-1 text-sm">
              <div className="flex justify-between gap-3">
                <span className="text-muted">Email</span>
                <span className="font-medium text-ink">{DEMO_ADMIN.email}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-muted">Password</span>
                <span className="font-medium text-ink">{DEMO_ADMIN.password}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={fillDemoCredentials}
              className="mt-3 text-xs font-semibold text-brand hover:underline"
            >
              Use these credentials
            </button>
          </div>

          <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold tracking-wide text-ink uppercase">
                Email
              </span>
              <input
                type="email"
                required
                autoComplete="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
                placeholder={DEMO_ADMIN.email}
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold tracking-wide text-ink uppercase">
                Password
              </span>
              <input
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
                placeholder="••••••••"
              />
            </label>

            {error ? (
              <div className="rounded-lg border border-danger/20 bg-red-50 px-3.5 py-3 text-sm text-danger">
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'Signing in…' : 'Sign in to console'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
