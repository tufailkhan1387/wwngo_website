export function formatDate(value) {
  if (!value) return '—';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '—';
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function formatDateTime(value) {
  if (!value) return '—';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '—';
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

export function formatMoney(value) {
  const amount = Number(value);
  if (!Number.isFinite(amount)) return '—';
  return `$${amount.toFixed(2)}`;
}

export function formatLabel(value) {
  return String(value || 'unknown').replaceAll('_', ' ');
}

export function routeLabel(delivery) {
  if (!delivery) return '—';
  if (delivery.delivery_type === 'country_to_country') {
    const from = delivery.origin_country || 'Origin';
    const to = delivery.destination_country || 'Destination';
    return `${from} → ${to}`;
  }
  const from = delivery.from_city || delivery.from_code || 'From';
  const to = delivery.to_city || delivery.to_code || 'To';
  return `${from} → ${to}`;
}

export function statusBadgeClass(status) {
  const normalized = String(status || 'unknown').toLowerCase();
  const styles = {
    posted: 'bg-sky-50 text-sky-700 ring-1 ring-inset ring-sky-600/15',
    matched: 'bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-600/15',
    bid_accepted: 'bg-violet-50 text-violet-700 ring-1 ring-inset ring-violet-600/15',
    waiting_receiver: 'bg-amber-50 text-warning ring-1 ring-inset ring-amber-600/15',
    ready_for_handoff: 'bg-cyan-50 text-cyan-700 ring-1 ring-inset ring-cyan-600/15',
    collected: 'bg-blue-50 text-brand ring-1 ring-inset ring-blue-600/15',
    in_transit: 'bg-brand-soft text-brand ring-1 ring-inset ring-brand/20',
    delivered: 'bg-emerald-50 text-success ring-1 ring-inset ring-emerald-600/15',
    cancelled: 'bg-slate-100 text-slate-600 ring-1 ring-inset ring-slate-500/15',
    disputed: 'bg-red-50 text-danger ring-1 ring-inset ring-red-600/15',
  };
  return styles[normalized] || 'bg-slate-50 text-muted ring-1 ring-inset ring-slate-500/10';
}
