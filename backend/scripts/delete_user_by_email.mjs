import pg from 'pg';

const emails = process.argv.slice(2);
if (!emails.length) {
  console.error('Usage: node delete_user_by_email.mjs email1 [email2 ...]');
  process.exit(1);
}

const url =
  process.env.DATABASE_URL ||
  'postgresql://postgres:123456@localhost:5432/wwngo';

const client = new pg.Client({ connectionString: url });

async function deleteOne(email) {
  const found = await client.query(
    `SELECT id, email, name, role FROM users WHERE lower(email) = lower($1)`,
    [email],
  );

  if (!found.rowCount) {
    console.log(`NOT_FOUND: ${email}`);
    return;
  }

  const user = found.rows[0];
  await client.query('BEGIN');
  try {
    await client.query(`DELETE FROM otp_codes WHERE lower(contact) = lower($1)`, [
      email,
    ]);
    const del = await client.query(
      `DELETE FROM users WHERE id = $1 RETURNING id, email`,
      [user.id],
    );
    await client.query('COMMIT');
    console.log(`DELETED: ${del.rows[0].email} (${user.name || '—'})`);
  } catch (e) {
    await client.query('ROLLBACK');
    console.error(`FAILED: ${email} — ${e.message}`);
  }
}

async function main() {
  await client.connect();
  console.log('DB:', url.replace(/:[^:@/]+@/, ':***@'));
  for (const email of emails) {
    await deleteOne(email);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => client.end().catch(() => {}));
