// Sends a WhatsApp text via the Wati API. Disabled unless WATI_API_KEY and WATI_NOTIFY_TO are set.
const WATI_API_URL =
  process.env.WATI_API_URL || 'https://live-mt-server.wati.io/api/ext/v3/conversations/messages/text';

function isWhatsAppEnabled() {
  return Boolean(process.env.WATI_API_KEY && process.env.WATI_NOTIFY_TO);
}

async function sendWhatsAppText(target, text) {
  const res = await fetch(WATI_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.WATI_API_KEY}`,
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

// Fire-and-forget alert to WATI_NOTIFY_TO; never throws.
function notifyWhatsApp(text) {
  if (!isWhatsAppEnabled()) return;
  sendWhatsAppText(process.env.WATI_NOTIFY_TO, text)
    .then(() => console.log('WhatsApp alert sent.'))
    .catch((err) => console.error('WhatsApp alert failed:', err.message));
}

module.exports = { notifyWhatsApp };
