const path = require('path');
const express = require('express');
const cors = require('cors');

// Load backend/.env before any DB modules (pool also loads it as a safeguard)
require('dotenv').config({
  path: path.resolve(__dirname, '../.env'),
});

const contactRouter = require('./routes/contact');
const pool = require('./db/pool');

const app = express();
const PORT = process.env.PORT || 5000;
// Comma-separated list, e.g. "https://wwngo.com,https://www.wwngo.com"
const CORS_ORIGINS = (process.env.CORS_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: CORS_ORIGINS,
  }),
);
app.use(express.json({ limit: '100kb' }));

app.get('/api/health', async (_req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ ok: true, db: true });
  } catch {
    res.status(503).json({ ok: false, db: false });
  }
});

app.use('/api/contact', contactRouter);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ success: false, message: 'Unexpected server error.' });
});

app.listen(PORT, () => {
  console.log(`WWNGO API listening on http://localhost:${PORT}`);
});
