# WWNGO (Website + Admin)

Single React + Vite project:

| Surface | URL | Code |
|---------|-----|------|
| Marketing website | http://localhost:5173/ | `src/site/` |
| Admin portal | http://localhost:5173/admin | `src/pages/`, `src/components/` |

APIs come from `wwngo_backend` (port 3000). Vite proxies `/api` → `:3000`.

## Setup

```bash
npm install
```

## Run

```bash
npm run dev
```

- Website: http://localhost:5173/
- Admin login: http://localhost:5173/admin/login

## Env (root `.env`)

```
VITE_API_URL=http://localhost:3000/api/v1
# Optional override for contact form (defaults to VITE_API_URL without /api/v1)
# VITE_SITE_API_URL=http://localhost:3000
```
