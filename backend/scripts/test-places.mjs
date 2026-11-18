import 'dotenv/config';
import * as places from '../src/services/places.service.js';

const queries = [
  { q: 'Lahore', mode: 'cities' },
  { q: 'Karachi', mode: 'cities' },
  { q: 'Paris', mode: 'cities' },
  { q: 'London', mode: 'cities' },
  { q: 'Dubai', mode: 'cities' },
  { q: 'Toronto', mode: 'cities' },
  { q: 'Pakistan', mode: 'cities' },
  { q: 'France', mode: 'cities' },
  { q: 'Pakistan', mode: 'places' },
  { q: 'France', mode: 'places' },
];

const key = process.env.GOOGLE_MAPS_API_KEY || '';
console.log('KEY_PRESENT:', Boolean(key));
console.log('KEY_LEN:', key.length);

let failed = 0;
for (const { q, mode } of queries) {
  try {
    const data = await places.autocomplete(q, mode);
    const count = data.predictions?.length ?? 0;
    const sample = data.predictions?.[0]?.address || data.predictions?.[0]?.name || '';
    if (count < 1) {
      failed += 1;
      console.log(`EMPTY [${mode}] "${q}"`);
    } else {
      console.log(`OK  [${mode}] "${q}" → ${count}; first=${JSON.stringify(sample)}`);
    }
  } catch (err) {
    failed += 1;
    console.log(`FAIL [${mode}] "${q}" → ${err.code || ''} ${err.message}`);
  }
}

if (failed > 0) {
  console.error(`FAILED_COUNT=${failed}`);
  process.exit(1);
}
console.log('ALL_PASSED');
