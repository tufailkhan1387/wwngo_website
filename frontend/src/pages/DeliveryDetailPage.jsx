import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ApiError, getDelivery } from '../lib/api';
import {
  formatDate,
  formatDateTime,
  formatLabel,
  formatMoney,
  routeLabel,
  statusBadgeClass,
} from '../lib/deliveryFormat';

export default function DeliveryDetailPage() {
  const { id } = useParams();
  const [delivery, setDelivery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError('');
      try {
        const data = await getDelivery(id);
        if (!cancelled) {
          setDelivery(data?.delivery || null);
        }
      } catch (err) {
        if (!cancelled) {
          setDelivery(null);
          setError(
            err instanceof ApiError
              ? err.message
              : 'Failed to load delivery details.',
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="rounded-xl border border-line bg-white p-10 text-center text-sm text-muted">
        Loading delivery details…
      </div>
    );
  }

  if (error || !delivery) {
    return (
      <div className="space-y-4">
        <BackLink />
        <div className="rounded-xl border border-danger/20 bg-red-50 px-4 py-3 text-sm text-danger">
          {error || 'Delivery not found.'}
        </div>
      </div>
    );
  }

  const meetupLocations = Array.isArray(delivery.preferred_meetup_locations)
    ? delivery.preferred_meetup_locations
    : [];

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <BackLink />
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <h2 className="text-xl font-semibold tracking-tight text-ink">
              {delivery.public_id}
            </h2>
            <span
              className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold capitalize ${statusBadgeClass(delivery.status)}`}
            >
              {formatLabel(delivery.status)}
            </span>
            {delivery.disputed ? (
              <span className="inline-flex rounded-full bg-red-50 px-2.5 py-0.5 text-[11px] font-semibold text-danger ring-1 ring-inset ring-red-600/15">
                Disputed
              </span>
            ) : null}
          </div>
          <p className="mt-1 text-sm text-muted">
            {routeLabel(delivery)} · Created {formatDate(delivery.created_at)}
          </p>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <section className="space-y-4 xl:col-span-2">
          <Card title="Shipment overview">
            <InfoGrid
              items={[
                ['Type', formatLabel(delivery.delivery_type)],
                ['Route', routeLabel(delivery)],
                ['Travel date', formatDate(delivery.travel_date)],
                ['Parcel', `${delivery.parcel_category} · ${delivery.parcel_size}`],
                ['Weight', `${Number(delivery.weight_kg)} kg`],
                ['Max budget', formatMoney(delivery.max_budget)],
                ['Accepted bid', delivery.bid_amount ? formatMoney(delivery.bid_amount) : '—'],
                ['Platform fee', formatMoney(delivery.platform_fee)],
              ]}
            />
            {delivery.description ? (
              <div className="mt-4 border-t border-line pt-4">
                <div className="text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
                  Description
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-ink">{delivery.description}</p>
              </div>
            ) : null}
          </Card>

          <Card title="Route details">
            {delivery.delivery_type === 'country_to_country' ? (
              <InfoGrid
                items={[
                  ['Origin country', delivery.origin_country || '—'],
                  ['Origin airport', delivery.origin_airport || '—'],
                  ['Destination country', delivery.destination_country || '—'],
                  ['Destination airport', delivery.destination_airport || '—'],
                ]}
              />
            ) : (
              <InfoGrid
                items={[
                  ['From city', delivery.from_city || '—'],
                  ['From code', delivery.from_code || '—'],
                  ['To city', delivery.to_city || '—'],
                  ['To code', delivery.to_code || '—'],
                ]}
              />
            )}
          </Card>

          <Card title="Meetup & handoff">
            <InfoGrid
              items={[
                ['Meetup location', delivery.meetup_location || '—'],
                ['Receiver meetup', delivery.receiver_meetup_location || '—'],
                [
                  'Sender agreed meetup',
                  delivery.meetup_agreed_by_sender ? 'Yes' : 'No',
                ],
                [
                  'Traveler agreed meetup',
                  delivery.meetup_agreed_by_traveler ? 'Yes' : 'No',
                ],
                ['Chat unlocked', delivery.chat_unlocked ? 'Yes' : 'No'],
                ['Collected at', formatDateTime(delivery.collected_at)],
                ['In transit at', formatDateTime(delivery.in_transit_at)],
                ['Delivered at', formatDateTime(delivery.delivered_at)],
              ]}
            />
            {meetupLocations.length > 0 ? (
              <div className="mt-4 border-t border-line pt-4">
                <div className="text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
                  Preferred meetup locations
                </div>
                <ul className="mt-2 space-y-1.5">
                  {meetupLocations.map((location) => (
                    <li
                      key={location}
                      className="rounded-lg bg-slate-50 px-3 py-2 text-sm text-ink ring-1 ring-slate-200"
                    >
                      {location}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </Card>
        </section>

        <section className="space-y-4">
          <Card title="People">
            <PersonBlock
              role="Sender"
              name={delivery.sender_name}
              email={delivery.sender_email}
              phone={delivery.sender_phone}
            />
            <div className="my-3 border-t border-line" />
            <PersonBlock
              role="Traveler"
              name={delivery.traveler_name}
              email={delivery.traveler_email}
              phone={delivery.traveler_phone}
              empty="Not assigned yet"
            />
            <div className="my-3 border-t border-line" />
            <PersonBlock
              role="Receiver"
              name={delivery.receiver_name}
              email={delivery.receiver_email}
              phone={delivery.receiver_phone}
              empty="Not set"
            />
          </Card>

          <Card title="Timeline">
            <InfoGrid
              items={[
                ['Created', formatDateTime(delivery.created_at)],
                ['Updated', formatDateTime(delivery.updated_at)],
                ['Matched', formatDateTime(delivery.matched_at)],
                ['Receiver accepted', formatDateTime(delivery.receiver_accepted_at)],
                ['Receiver paid', formatDateTime(delivery.receiver_paid_at)],
                ['Payment due', formatDateTime(delivery.receiver_payment_due_at)],
              ]}
            />
          </Card>

          <Card title="Fees">
            <InfoGrid
              items={[
                ['Receiver fee', formatCents(delivery.receiver_fee_cents)],
                ['Platform fee share', formatMoney(delivery.platform_fee_share)],
              ]}
            />
          </Card>
        </section>
      </div>
    </div>
  );
}

function formatCents(value) {
  if (value == null || value === '') return '—';
  const amount = Number(value) / 100;
  if (!Number.isFinite(amount)) return '—';
  return `$${amount.toFixed(2)}`;
}

function BackLink() {
  return (
    <Link
      to="/admin/deliveries"
      className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted transition hover:text-brand"
    >
      <span aria-hidden="true">←</span>
      Back to delivery requests
    </Link>
  );
}

function Card({ title, children }) {
  return (
    <section className="rounded-xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <h3 className="text-sm font-semibold text-ink">{title}</h3>
      <div className="mt-4">{children}</div>
    </section>
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

function PersonBlock({ role, name, email, phone, empty = '—' }) {
  if (!name && !email && !phone) {
    return (
      <div>
        <div className="text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
          {role}
        </div>
        <div className="mt-1 text-sm text-muted">{empty}</div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
        {(name || email || '?').charAt(0).toUpperCase()}
      </div>
      <div className="min-w-0">
        <div className="text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
          {role}
        </div>
        <div className="mt-0.5 truncate text-sm font-medium text-ink">{name || 'Unnamed'}</div>
        {email ? <div className="truncate text-xs text-muted">{email}</div> : null}
        {phone ? <div className="truncate text-[11px] text-slate-400">{phone}</div> : null}
      </div>
    </div>
  );
}
