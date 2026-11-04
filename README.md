# WWNGO Website

Marketing website for **WWNGO**, a peer-to-peer international parcel delivery marketplace connecting customers (senders), travelers, and receivers.

Stack: React + TypeScript (Vite) · Node.js + Express · PostgreSQL

## Project structure

```
wwngo_website/
├── frontend/          # React marketing site (EN / FR)
└── backend/           # Express API + PostgreSQL contact form
```

## Quick start

### 1. Frontend

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

App runs at `http://localhost:5173`.

Optional env vars in `frontend/.env`:

- `VITE_API_URL` — backend base URL (default `http://localhost:5000`)
- `VITE_PLAY_STORE_URL` — Google Play listing URL (placeholder until set)
- `VITE_APP_STORE_URL` — App Store listing URL (placeholder until set)

### 2. Backend

```bash
cd backend
copy .env.example .env   # Windows
# Then edit backend/.env — DATABASE_URL password MUST be a non-empty string
npm install
npm run db:init
npm run dev
```

API runs at `http://localhost:5000`.

Required `backend/.env` variables:

| Variable | Purpose | Example (temporary local placeholder) |
|----------|---------|----------------------------------------|
| `PORT` | API port | `5000` |
| `CORS_ORIGIN` | Allowed frontend origin | `http://localhost:5173` |
| `DATABASE_URL` | PostgreSQL connection URL | `postgresql://USER:PASSWORD@localhost:5432/wwngo_website` |

Use database **`wwngo_website` only** (marketing site). Do not point the backend at the mobile app database.

`DATABASE_URL` format: `postgresql://USER:PASSWORD@HOST:PORT/DATABASE`  
Never leave the password empty — that causes the SCRAM SASL “password must be a string” error.

Endpoints:

- `GET /api/health`
- `POST /api/contact` — stores contact form submissions

Migrations: add numbered SQL files to `backend/migrations/` (e.g. `002_add_phone.sql`). `npm run migrate` applies pending ones once each, tracked in `schema_migrations`.

## Deployment (GitHub Actions)

- `frontend/**` changes → `deploy-frontend.yml` builds and FTP-uploads to `public_html/`.
- `backend/**` changes → `deploy-backend.yml` uploads the API over SSH to `~/wwngo-backend`, runs `npm ci` + `npm run migrate`, restarts it with pm2 (port `5055`), and proxies `https://wwngo.com/backend/*` to it via `public_html/backend/.htaccess`.

Required repo secrets for the backend: `SSH_PRIVATE_KEY` (key authorized for the `wwngo` user) and `DATABASE_URL`.
Optional repo variables: `SSH_HOST`, `SSH_USER`, `SSH_PORT`, `BACKEND_PORT`, `CORS_ORIGIN`, `BACKEND_PUBLIC_URL`.
Set the frontend variable `VITE_API_URL=https://wwngo.com/backend` so the contact form calls the live API.

## Pages

Home · About · How It Works · For Customers · For Travelers · For Receivers · Features · Safety & Security · FAQ · Contact · Download App · Legal (Privacy, Terms, Cookies, Safety Rules, Prohibited Items, Refund)

## Design notes

- Primary brand color: `#1E5AE6`
- Typography: Outfit (display) + Plus Jakarta Sans (body)
- Official Google Play and Apple App Store badges in `frontend/public/badges/`
- No in-browser booking, bidding, escrow, or NFC — those belong in the mobile app
- Company emails, store URLs, social links, and legal text use clearly marked placeholders until real content is provided

## R&D summary

Researched comparable P2P / crowdshipping platforms (CarryOn, Piggyback, CarryBuddies, Shiply, Roadie patterns, Send It case study). Site IA prioritizes three equal user roles, trust/security storytelling (KYC, escrow, NFC), and app-download CTAs rather than web transactions.
