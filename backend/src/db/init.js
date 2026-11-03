const pool = require('./pool');

async function init() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(120) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(200) NOT NULL,
        message TEXT NOT NULL,
        inquiry_type VARCHAR(80) NOT NULL DEFAULT 'general',
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
    console.log('contact_submissions table is ready.');
  } finally {
    client.release();
    await pool.end();
  }
}

init().catch((err) => {
  console.error('Database init failed:', err.message);
  process.exit(1);
});
