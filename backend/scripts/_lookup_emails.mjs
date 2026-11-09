import 'dotenv/config';
import pg from 'pg';

const emails = [
  'tufailkhan5093@gmail.com',
  'amjadkhan5093@gmail.com',
  'wacpacademy@gmail.com',
  'sajidali222817@gmail.com',
  'mwork5925@gmail.com',
];

const url = process.env.DATABASE_URL;
if (!url) {
  console.error('DATABASE_URL missing');
  process.exit(1);
}

const client = new pg.Client({ connectionString: url });
await client.connect();
console.log('DB:', url.replace(/:[^:@/]+@/, ':***@'));

const found = await client.query(
  `SELECT id, email, name, role, created_at
   FROM users
   WHERE lower(email) = ANY($1::text[])
   ORDER BY email`,
  [emails.map((e) => e.toLowerCase())]
);
console.log('FOUND', found.rowCount);
for (const row of found.rows) {
  console.log(JSON.stringify(row));
}
const missing = emails.filter(
  (e) => !found.rows.some((r) => r.email.toLowerCase() === e.toLowerCase())
);
if (missing.length) console.log('NOT_IN_DB', missing);
await client.end();
