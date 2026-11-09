import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dartPath = path.resolve(__dirname, '../../lib/l10n/string_tables_extra.dart');
const outPath = path.resolve(__dirname, '../src/i18n/notification_strings.generated.js');

const keys = [
  'incomingParcelRequest',
  'parcelCollected',
  'counterOfferDeclined',
  'counterOfferAcceptedTitle',
  'newCounterOfferTitle',
  'counterOfferUpdatedTitle',
  'offerAcceptedTitle',
  'newSenderRequestTitle',
  'matchingTravelerAvailable',
  'receiverAcceptedTitle',
  'receiverPaidFeeShare',
  'deliveryCancelledTitle',
  'deliveryAutoCancelled',
  'travelerDidNotRespondInTime',
  'senderRequestExpired',
  'newReviewReceived',
  'incomingParcelRequestBody',
  'parcelCollectedBody',
  'platformFeeDeductedWalletBody',
  'platformFeePaidMixedBody',
  'senderAcceptedCounterOfferBody',
  'senderDeclinedCounterOfferBody',
  'travelerAcceptedOfferBody',
  'travelerUpdatedCounterOfferBody',
  'travelerSentCounterOfferBody',
  'nfcMatchSenderCp1Body',
  'nfcMatchTravelerCp1Body',
  'nfcMatchTravelerCp2Body',
  'nfcMatchReceiverCp2Body',
  'matchingTravelerAvailableBody',
  'newSenderRequestBody',
  'receiverAcceptedBody',
  'receiverPaidFeeShareBody',
  'senderCancelledParcelRequestBody',
  'parcelCancelledBySenderBody',
  'deliveryAutoCancelledBody',
  'travelerDidNotRespondBody',
  'senderRequestExpiredBody',
  'newReviewReceivedBody',
  'parcelDeliveredBody',
  'parcelInTransitBody',
  'platformFeeDeductedBody',
  'platformFeePaid',
  'deliveryComplete',
  'parcelInTransit',
  'nfcVerificationSuccessful',
];

const keySet = new Set(keys);
const src = fs.readFileSync(dartPath, 'utf8');
const langs = {};
const mapRe = /const Map<String, String> _(\w+)Extra = \{([\s\S]*?)\n\};/g;
let m;
while ((m = mapRe.exec(src))) {
  const lang = m[1];
  const body = m[2];
  const entries = {};
  const entryRe = /'([^']+)':\s*'((?:\\'|[^'])*)'/g;
  let e;
  while ((e = entryRe.exec(body))) {
    if (keySet.has(e[1])) entries[e[1]] = e[2].replace(/\\'/g, "'");
  }
  langs[lang] = entries;
}

for (const k of keys) {
  const missing = Object.keys(langs).filter((l) => !langs[l][k]);
  if (missing.length) {
    console.warn('MISSING', k, missing.join(','));
  }
}

// Extra chat-only strings not in Flutter notification catalog yet.
const chatExtras = {
  en: { newMessage: 'New message', photoMessage: '📷 Photo' },
  fr: { newMessage: 'Nouveau message', photoMessage: '📷 Photo' },
  es: { newMessage: 'Nuevo mensaje', photoMessage: '📷 Foto' },
  it: { newMessage: 'Nuovo messaggio', photoMessage: '📷 Foto' },
  nl: { newMessage: 'Nieuw bericht', photoMessage: '📷 Foto' },
  de: { newMessage: 'Neue Nachricht', photoMessage: '📷 Foto' },
  ar: { newMessage: 'رسالة جديدة', photoMessage: '📷 صورة' },
  hi: { newMessage: 'नया संदेश', photoMessage: '📷 फ़ोटो' },
  zh: { newMessage: '新消息', photoMessage: '📷 照片' },
  tr: { newMessage: 'Yeni mesaj', photoMessage: '📷 Fotoğraf' },
  ru: { newMessage: 'Новое сообщение', photoMessage: '📷 Фото' },
};

for (const [lang, extra] of Object.entries(chatExtras)) {
  langs[lang] = { ...(langs[lang] || {}), ...extra };
}

const file = `/** Auto-generated from lib/l10n/string_tables_extra.dart — do not edit by hand. */
export const NOTIFICATION_STRINGS = ${JSON.stringify(langs, null, 2)};
`;

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, file);
console.log('Wrote', outPath);
console.log('langs', Object.keys(langs).join(', '));
console.log('en keys', Object.keys(langs.en || {}).length);
