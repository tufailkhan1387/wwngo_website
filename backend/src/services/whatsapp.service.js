/**
 * WhatsApp text alerts via Wati API.
 * Disabled unless WATI_API_KEY and WATI_NOTIFY_TO are set.
 */
import { env } from '../config/env.js';

function isWhatsAppEnabled() {
  return Boolean(env.wati.apiKey && env.wati.notifyTo);
}

async function sendWhatsAppText(target, text) {
  const res = await fetch(env.wati.apiUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.wati.apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ target, text }),
    signal: AbortSignal.timeout(10000),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Wati API ${res.status}: ${body.slice(0, 300)}`);
  }
}

/** Fire-and-forget alert to WATI_NOTIFY_TO; never throws. */
export function notifyWhatsApp(text) {
  if (!isWhatsAppEnabled()) return;
  sendWhatsAppText(env.wati.notifyTo, text)
    .then(() => console.log('WhatsApp alert sent.'))
    .catch((err) => console.error('WhatsApp alert failed:', err.message));
}
