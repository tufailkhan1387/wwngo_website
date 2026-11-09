import { localizeNotificationText } from '../src/i18n/notification_i18n.js';

function assertEq(actual, expected, label) {
  if (actual !== expected) {
    throw new Error(`${label}\n  expected: ${expected}\n  actual:   ${actual}`);
  }
}

const fr = localizeNotificationText({
  title: 'Incoming Parcel Request',
  body: 'A sender wants to send a parcel through you. Please review the request and accept or decline it.',
  language: 'fr',
});
assertEq(fr.title, 'Demande de colis entrante', 'fr title');
assertEq(
  fr.body,
  'Un expéditeur souhaite envoyer un colis via vous. Veuillez examiner la demande et l’accepter ou la refuser.',
  'fr body'
);

const ar = localizeNotificationText({
  title: 'Parcel in transit',
  body: 'Parcel WW-123 is now in transit.',
  language: 'ar',
});
assertEq(ar.title, 'الطرد قيد النقل', 'ar title');
assertEq(ar.body, 'الطرد WW-123 قيد النقل الآن.', 'ar body');

const fee = localizeNotificationText({
  title: 'Platform fee paid',
  body: '$2.50 platform fee deducted from your wallet for WW-9.',
  language: 'de',
});
assertEq(fee.title, 'Plattformgebühr bezahlt', 'de fee title');
assertEq(
  fee.body,
  'Plattformgebühr von $2.50 von deinem Wallet für WW-9 abgebucht.',
  'de fee body'
);

const chat = localizeNotificationText({
  title: 'Alice',
  body: '📷 Photo',
  language: 'es',
});
assertEq(chat.title, 'Alice', 'chat title passthrough');
assertEq(chat.body, '📷 Foto', 'chat photo body');

const en = localizeNotificationText({
  title: 'Delivery complete',
  body: 'Parcel WW-1 was delivered successfully.',
  language: 'en',
});
assertEq(en.title, 'Delivery complete', 'en title');
assertEq(en.body, 'Parcel WW-1 was delivered successfully.', 'en body');

console.log('notification_i18n smoke tests passed');
