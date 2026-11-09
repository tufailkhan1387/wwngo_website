const API_BASE = import.meta.env.VITE_API_URL || '/api/v1';

export class ApiError extends Error {
  constructor(message, { status, code } = {}) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
  }
}

function getToken() {
  return localStorage.getItem('wwngo_admin_token');
}

export function setSession({ accessToken, refreshToken, user }) {
  if (accessToken) localStorage.setItem('wwngo_admin_token', accessToken);
  if (refreshToken) localStorage.setItem('wwngo_admin_refresh', refreshToken);
  if (user) localStorage.setItem('wwngo_admin_user', JSON.stringify(user));
}

export function clearSession() {
  localStorage.removeItem('wwngo_admin_token');
  localStorage.removeItem('wwngo_admin_refresh');
  localStorage.removeItem('wwngo_admin_user');
}

export function getStoredUser() {
  try {
    const raw = localStorage.getItem('wwngo_admin_user');
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function isAuthenticated() {
  return Boolean(getToken());
}

export async function apiRequest(path, { method = 'GET', body, auth = true } = {}) {
  const headers = {
    Accept: 'application/json',
  };

  if (body !== undefined) {
    headers['Content-Type'] = 'application/json';
  }

  if (auth) {
    const token = getToken();
    if (!token) {
      throw new ApiError('Not authenticated', { status: 401, code: 'UNAUTHORIZED' });
    }
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE}${path}`, {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  let payload = null;
  try {
    payload = await response.json();
  } catch {
    payload = null;
  }

  if (!response.ok || payload?.success === false) {
    throw new ApiError(
      payload?.error?.message || `Request failed (${response.status})`,
      {
        status: response.status,
        code: payload?.error?.code,
      },
    );
  }

  return payload?.data ?? payload;
}

export async function login(email, password) {
  const data = await apiRequest('/auth/login', {
    method: 'POST',
    auth: false,
    body: { email, password },
  });

  if (data?.requiresLoginOtp) {
    throw new ApiError(
      'This account requires a login OTP. Use an admin account, or complete OTP verification in the app first.',
      { status: 401, code: 'LOGIN_OTP_REQUIRED' },
    );
  }

  const accessToken = data.accessToken || data.token;
  if (!accessToken) {
    throw new ApiError('Login succeeded but no access token was returned.', {
      status: 500,
      code: 'NO_TOKEN',
    });
  }

  setSession({
    accessToken,
    refreshToken: data.refreshToken,
    user: data.user,
  });

  // Verify admin access before allowing the session to stick.
  try {
    await apiRequest('/admin/users?limit=1');
  } catch (err) {
    clearSession();
    if (err instanceof ApiError && err.status === 403) {
      throw new ApiError('This account does not have admin access.', {
        status: 403,
        code: 'FORBIDDEN',
      });
    }
    throw err;
  }

  return data.user;
}

export async function listUsers({ limit = 50, offset = 0 } = {}) {
  return apiRequest(`/admin/users?limit=${limit}&offset=${offset}`);
}

export async function getUserDetail(id) {
  return apiRequest(`/admin/users/${encodeURIComponent(id)}`);
}

export async function getDashboardStats() {
  return apiRequest('/admin/stats');
}

export async function updateUser(id, patch) {
  return apiRequest(`/admin/users/${encodeURIComponent(id)}`, {
    method: 'PATCH',
    body: patch,
  });
}

export async function sendTestNotification(id, { title, body, role } = {}) {
  return apiRequest(`/admin/users/${encodeURIComponent(id)}/test-notification`, {
    method: 'POST',
    body: { title, body, role },
  });
}

export async function listDeliveries({ limit = 50, offset = 0, status, filter } = {}) {
  const params = new URLSearchParams({
    limit: String(limit),
    offset: String(offset),
  });
  if (status) params.set('status', status);
  if (filter) params.set('filter', filter);
  return apiRequest(`/admin/deliveries?${params.toString()}`);
}

export async function getDelivery(id) {
  return apiRequest(`/admin/deliveries/${encodeURIComponent(id)}`);
}

export async function listDisputes({ status, limit = 50 } = {}) {
  const params = new URLSearchParams({ limit: String(limit) });
  if (status) params.set('status', status);
  return apiRequest(`/admin/disputes?${params.toString()}`);
}

export async function resolveDispute(disputeId, { resolution, dismiss = false, closeAs } = {}) {
  return apiRequest(`/admin/disputes/${encodeURIComponent(disputeId)}/resolve`, {
    method: 'POST',
    body: { resolution, dismiss, closeAs },
  });
}

export async function listTrips({ limit = 50, offset = 0, status } = {}) {
  const params = new URLSearchParams({
    limit: String(limit),
    offset: String(offset),
  });
  if (status) params.set('status', status);
  return apiRequest(`/admin/trips?${params.toString()}`);
}

export async function cancelTrip(id, { reason } = {}) {
  return apiRequest(`/admin/trips/${encodeURIComponent(id)}/cancel`, {
    method: 'POST',
    body: { reason },
  });
}

export async function listEscrows({ limit = 50, status } = {}) {
  const params = new URLSearchParams({ limit: String(limit) });
  if (status) params.set('status', status);
  return apiRequest(`/admin/escrows?${params.toString()}`);
}

export async function refundEscrow(shipmentId, { reason } = {}) {
  return apiRequest(`/admin/escrows/${encodeURIComponent(shipmentId)}/refund`, {
    method: 'POST',
    body: { reason },
  });
}

export async function listNfcAudit({ limit = 100, fraudOnly = false } = {}) {
  const params = new URLSearchParams({ limit: String(limit) });
  if (fraudOnly) params.set('fraudOnly', 'true');
  return apiRequest(`/admin/nfc-audit?${params.toString()}`);
}

export async function suspendUser(userId) {
  return apiRequest(`/admin/users/${userId}/suspend`, { method: 'POST' });
}

export async function unsuspendUser(userId) {
  return apiRequest(`/admin/users/${userId}/unsuspend`, { method: 'POST' });
}

export async function clearOperationalData() {
  return apiRequest('/admin/clear-data', { method: 'POST' });
}
