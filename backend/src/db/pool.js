const path = require('path');
const { Pool } = require('pg');

// Always load backend/.env regardless of process cwd
require('dotenv').config({
  path: path.resolve(__dirname, '../../.env'),
});

function requireDatabaseUrl() {
  const raw = process.env.DATABASE_URL;
  if (typeof raw !== 'string' || !raw.trim()) {
    throw new Error(
      'DATABASE_URL is missing or empty. Copy backend/.env.example to backend/.env and set a valid PostgreSQL URL (password must be a non-empty string).',
    );
  }
  return raw.trim();
}

function buildPoolConfig() {
  const databaseUrl = requireDatabaseUrl();

  let parsed;
  try {
    parsed = new URL(databaseUrl);
  } catch {
    throw new Error(
      'DATABASE_URL is invalid. Expected format: postgresql://USER:PASSWORD@HOST:PORT/DATABASE',
    );
  }

  if (!['postgres:', 'postgresql:'].includes(parsed.protocol)) {
    throw new Error('DATABASE_URL must use the postgresql:// or postgres:// scheme.');
  }

  // Prefer discrete env overrides when present; otherwise use DATABASE_URL parts.
  // Always coerce password to a string so pg SCRAM never receives undefined/null.
  const passwordFromUrl = parsed.password ? decodeURIComponent(parsed.password) : '';
  const password = String(
    process.env.PGPASSWORD !== undefined && process.env.PGPASSWORD !== ''
      ? process.env.PGPASSWORD
      : passwordFromUrl,
  );

  if (!password) {
    throw new Error(
      'PostgreSQL password is empty. Set a non-empty password in DATABASE_URL (…://user:PASSWORD@…) or PGPASSWORD. Empty passwords cause SCRAM SASL errors.',
    );
  }

  const user = String(
    process.env.PGUSER || decodeURIComponent(parsed.username || '') || 'postgres',
  );
  const host = String(process.env.PGHOST || parsed.hostname || 'localhost');
  const port = Number(process.env.PGPORT || parsed.port || 5432);
  const database = String(
    process.env.PGDATABASE || (parsed.pathname || '/').replace(/^\//, '') || 'wwngo',
  );

  return {
    user,
    password,
    host,
    port,
    database,
  };
}

const pool = new Pool(buildPoolConfig());

pool.on('error', (err) => {
  console.error('Unexpected PostgreSQL pool error', err);
});

module.exports = pool;
