import { Router } from 'express';
import { pool } from '../db/pool.js';
import { notifyWhatsApp } from '../services/whatsapp.service.js';

const router = Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validatePayload(body) {
  const errors = {};
  const name = String(body.name || '').trim();
  const email = String(body.email || '').trim();
  const phone = String(body.phone || '').trim();
  const reason = String(body.reason || '').trim();
  const confirm = body.confirm === true || body.confirm === 'true';

  if (!name || name.length < 2) errors.name = 'Name is required.';
  if (!email || !EMAIL_RE.test(email)) errors.email = 'A valid account email is required.';
  if (!confirm) errors.confirm = 'Confirmation is required.';
  if (reason.length > 2000) errors.reason = 'Reason is too long.';
  if (phone.length > 40) errors.phone = 'Phone number is too long.';

  return {
    errors,
    data: { name, email, phone, reason, confirm },
    ok: Object.keys(errors).length === 0,
  };
}

/** POST /api/delete-account — marketing site account deletion request form. */
router.post('/', async (req, res) => {
  const { ok, errors, data } = validatePayload(req.body || {});
  if (!ok) {
    return res.status(400).json({ success: false, errors });
  }

  const subject = 'Account deletion request';
  const message = [
    'User requested permanent WWNGO account deletion.',
    data.phone ? `Phone: ${data.phone}` : 'Phone: (not provided)',
    '',
    data.reason ? `Reason:\n${data.reason}` : 'Reason: (not provided)',
  ].join('\n');

  try {
    const result = await pool.query(
      `INSERT INTO contact_submissions (name, email, subject, message, inquiry_type)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, created_at`,
      [data.name, data.email, subject, message, 'support']
    );

    notifyWhatsApp(
      [
        'WWNGO account deletion request',
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        data.phone ? `Phone: ${data.phone}` : null,
        '',
        data.reason ? data.reason.slice(0, 1000) : '(no reason provided)',
      ]
        .filter(Boolean)
        .join('\n')
    );

    return res.status(201).json({
      success: true,
      id: result.rows[0].id,
      createdAt: result.rows[0].created_at,
    });
  } catch (err) {
    console.error('Delete-account submit failed:', err.message);
    return res.status(500).json({
      success: false,
      message: 'Unable to save your deletion request. Please try again later.',
    });
  }
});

export default router;
