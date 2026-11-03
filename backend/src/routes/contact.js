const express = require('express');
const pool = require('../db/pool');

const router = express.Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INQUIRY_TYPES = new Set(['general', 'support', 'business']);

function validatePayload(body) {
  const errors = {};
  const name = String(body.name || '').trim();
  const email = String(body.email || '').trim();
  const subject = String(body.subject || '').trim();
  const message = String(body.message || '').trim();
  const inquiryType = String(body.inquiryType || 'general').trim().toLowerCase();

  if (!name || name.length < 2) errors.name = 'Name is required.';
  if (!email || !EMAIL_RE.test(email)) errors.email = 'A valid email is required.';
  if (!subject || subject.length < 3) errors.subject = 'Subject is required.';
  if (!message || message.length < 10) errors.message = 'Message must be at least 10 characters.';
  if (!INQUIRY_TYPES.has(inquiryType)) errors.inquiryType = 'Invalid inquiry type.';

  return {
    errors,
    data: { name, email, subject, message, inquiryType },
    ok: Object.keys(errors).length === 0,
  };
}

router.post('/', async (req, res) => {
  const { ok, errors, data } = validatePayload(req.body || {});
  if (!ok) {
    return res.status(400).json({ success: false, errors });
  }

  try {
    const result = await pool.query(
      `INSERT INTO contact_submissions (name, email, subject, message, inquiry_type)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, created_at`,
      [data.name, data.email, data.subject, data.message, data.inquiryType],
    );

    return res.status(201).json({
      success: true,
      id: result.rows[0].id,
      createdAt: result.rows[0].created_at,
    });
  } catch (err) {
    console.error('Contact submit failed:', err.message);
    return res.status(500).json({
      success: false,
      message: 'Unable to save your message. Please try again later.',
    });
  }
});

module.exports = router;
