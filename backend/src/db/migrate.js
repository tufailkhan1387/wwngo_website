// Applies pending SQL files from backend/migrations in filename order.
// Each file runs once (tracked in schema_migrations) inside a transaction.
const fs = require('fs');
const path = require('path');
const { Client } = require('pg');
const pool = require('./pool');

const MIGRATIONS_DIR = path.resolve(__dirname, '../../migrations');

// Create the target database if it does not exist yet (needs CREATEDB privilege).
async function ensureDatabase() {
  try {
    const client = await pool.connect();
    client.release();
    return;
  } catch (err) {
    if (err.code !== '3D000') throw err; // 3D000 = database does not exist
  }

  const { user, password, host, port, database } = pool.options;
  const admin = new Client({ user, password, host, port, database: 'postgres' });
  await admin.connect();
  try {
    await admin.query(`CREATE DATABASE "${database.replace(/"/g, '""')}"`);
    console.log(`Created database ${database}.`);
  } finally {
    await admin.end();
  }
}

async function migrate() {
  await ensureDatabase();

  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS schema_migrations (
        name VARCHAR(255) PRIMARY KEY,
        applied_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);

    const { rows } = await client.query('SELECT name FROM schema_migrations');
    const applied = new Set(rows.map((r) => r.name));
    const pending = fs
      .readdirSync(MIGRATIONS_DIR)
      .filter((f) => f.endsWith('.sql') && !applied.has(f))
      .sort();

    for (const file of pending) {
      const sql = fs.readFileSync(path.join(MIGRATIONS_DIR, file), 'utf8');
      await client.query('BEGIN');
      try {
        await client.query(sql);
        await client.query('INSERT INTO schema_migrations (name) VALUES ($1)', [file]);
        await client.query('COMMIT');
        console.log(`Applied ${file}`);
      } catch (err) {
        await client.query('ROLLBACK');
        throw new Error(`${file}: ${err.message}`);
      }
    }

    console.log(pending.length ? `${pending.length} migration(s) applied.` : 'Database is up to date.');
  } finally {
    client.release();
    await pool.end();
  }
}

migrate().catch((err) => {
  console.error('Migration failed:', err.message);
  process.exit(1);
});
