import pg from 'pg';

const client = new pg.Client({
  connectionString: 'postgresql://postgres:123456@localhost:5432/wwngo',
});

await client.connect();
const r = await client.query(
  `SELECT email, name FROM users
   WHERE email ILIKE '%sajid%' OR email ILIKE '%222817%' OR email ILIKE '%ali%'
   ORDER BY email`,
);
console.log(JSON.stringify(r.rows, null, 2));
await client.end();
