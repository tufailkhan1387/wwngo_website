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

export function formatCents(value) {
  if (value == null || value === '') return '—';
  const amount = Number(value) / 100;
  if (!Number.isFinite(amount)) return '—';
  return `$${amount.toFixed(2)}`;
}

export function formatMoney(value) {
  const amount = Number(value);
  if (!Number.isFinite(amount)) return '—';
  return `$${amount.toFixed(2)}`;
}

export function formatLabel(value) {
  return String(value || 'unknown').replaceAll('_', ' ');
}

export function badgeClass(kind, value) {
  const normalized = String(value || 'unknown').toLowerCase();
  const maps = {
    account: {
      active: 'bg-emerald-50 text-success ring-1 ring-inset ring-emerald-600/15',
      suspended: 'bg-red-50 text-danger ring-1 ring-inset ring-red-600/15',
    },
    trip: {
      open_bid: 'bg-sky-50 text-sky-700 ring-1 ring-inset ring-sky-600/15',
      in_transit: 'bg-brand-soft text-brand ring-1 ring-inset ring-brand/20',
      delivered: 'bg-emerald-50 text-success ring-1 ring-inset ring-emerald-600/15',
      cancelled: 'bg-slate-100 text-slate-600 ring-1 ring-inset ring-slate-500/15',
    },
    escrow: {
      held: 'bg-amber-50 text-warning ring-1 ring-inset ring-amber-600/15',
      frozen: 'bg-violet-50 text-violet-700 ring-1 ring-inset ring-violet-600/15',
      refunded: 'bg-slate-100 text-slate-600 ring-1 ring-inset ring-slate-500/15',
      released: 'bg-emerald-50 text-success ring-1 ring-inset ring-emerald-600/15',
    },
    delivery: {
      posted: 'bg-sky-50 text-sky-700 ring-1 ring-inset ring-sky-600/15',
      matched: 'bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-600/15',
      in_transit: 'bg-brand-soft text-brand ring-1 ring-inset ring-brand/20',
      delivered: 'bg-emerald-50 text-success ring-1 ring-inset ring-emerald-600/15',
      cancelled: 'bg-slate-100 text-slate-600 ring-1 ring-inset ring-slate-500/15',
      disputed: 'bg-red-50 text-danger ring-1 ring-inset ring-red-600/15',
    },
    dispute: {
      open: 'bg-amber-50 text-warning ring-1 ring-inset ring-amber-600/15',
      under_review: 'bg-brand-soft text-brand ring-1 ring-inset ring-brand/20',
      resolved: 'bg-emerald-50 text-success ring-1 ring-inset ring-emerald-600/15',
      dismissed: 'bg-slate-100 text-slate-600 ring-1 ring-inset ring-slate-500/15',
    },
  };
  return (
    maps[kind]?.[normalized] ||
    'bg-slate-50 text-muted ring-1 ring-inset ring-slate-500/10'
  );
}

export function tripRouteLabel(trip) {
  if (!trip) return '—';
  if (trip.trip_type === 'country_to_country') {
    return `${trip.origin_country || 'Origin'} → ${trip.destination_country || 'Destination'}`;
  }
  return `${trip.from_city || 'From'} → ${trip.to_city || 'To'}`;
}

export function deliveryRouteLabel(item) {
  if (!item) return '—';
  if (item.origin_country || item.destination_country) {
    return `${item.origin_country || 'Origin'} → ${item.destination_country || 'Destination'}`;
  }
  return `${item.from_city || 'From'} → ${item.to_city || 'To'}`;
}
