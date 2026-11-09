import pg from 'pg';

const urls = [
  'postgresql://postgres:123456@localhost:5432/wwngo',
  'postgresql://postgres:123456@172.16.11.14:5432/wwngo',
];

async function search(url) {
  const client = new pg.Client({
    connectionString: url,
    connectionTimeoutMillis: 4000,
  });
  try {
    await client.connect();
    console.log('CONNECTED:', url);
    const exact = await client.query(
      `SELECT id, email, name, role FROM users WHERE lower(email) = lower($1)`,
      ['tchvanta@gmail.com'],
    );
    console.log('EXACT:', JSON.stringify(exact.rows));
    const like = await client.query(
      `SELECT email FROM users
       WHERE email ILIKE '%tch%' OR email ILIKE '%vanta%'
       ORDER BY created_at DESC NULLS LAST
       LIMIT 40`,
    );
    console.log('LIKE:', JSON.stringify(like.rows));
    await client.end();
    return exact.rows;
  } catch (e) {
    console.log('FAIL:', url, e.message);
    try {
      await client.end();
    } catch (_) {}
    return null;
  }
}

for (const url of urls) {
  await search(url);
}
