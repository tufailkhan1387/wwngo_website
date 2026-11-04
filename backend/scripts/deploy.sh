#!/usr/bin/env bash
# Runs ON THE SERVER after GitHub Actions uploads the backend (see .github/workflows/deploy-backend.yml).
# Installs deps, runs DB migrations, (re)starts the API with pm2 and points public_html/backend at it.
set -euo pipefail

APP_NAME="wwngo-backend"
APP_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PORT="${PORT:-5055}"
PROXY_DIR="${PROXY_DIR:-public_html/backend}"
case "$PROXY_DIR" in /*) ;; *) PROXY_DIR="$HOME/$PROXY_DIR" ;; esac

cd "$APP_DIR"
[ -f .env ] || { echo "ERROR: $APP_DIR/.env is missing"; exit 1; }
chmod 600 .env

# --- Node.js: use the server's node if present, otherwise install a private copy in ~/.local/node
export PATH="$HOME/.local/node/bin:$HOME/.npm-global/bin:$PATH"
for d in /usr/local/apps/nodejs*/bin /opt/nodejs*/bin; do [ -x "$d/node" ] && PATH="$PATH:$d"; done
if ! command -v node >/dev/null 2>&1; then
  echo "Node.js not found - installing latest v22 into ~/.local/node"
  base="https://nodejs.org/dist/latest-v22.x"
  file="$(curl -fsSL "$base/SHASUMS256.txt" | awk '/linux-x64\.tar\.xz$/ {print $2}')"
  tmp="$(mktemp -d)"
  curl -fsSL "$base/$file" -o "$tmp/$file"
  (cd "$tmp" && curl -fsSL "$base/SHASUMS256.txt" | grep " $file\$" | sha256sum -c -)
  rm -rf "$HOME/.local/node" && mkdir -p "$HOME/.local/node"
  tar -xJf "$tmp/$file" -C "$HOME/.local/node" --strip-components=1
  rm -rf "$tmp"
fi
echo "Using node $(node -v) at $(command -v node)"

# --- Dependencies + migrations
npm ci --omit=dev --no-audit --no-fund
npm run migrate

# --- Process manager (pm2, installed per-user)
if ! command -v pm2 >/dev/null 2>&1; then
  npm install -g pm2 --prefix "$HOME/.npm-global" --no-audit --no-fund
fi
if pm2 describe "$APP_NAME" >/dev/null 2>&1; then
  PORT="$PORT" pm2 restart "$APP_NAME" --update-env
else
  PORT="$PORT" pm2 start src/index.js --name "$APP_NAME" --cwd "$APP_DIR"
fi
pm2 save

# Start again after a server reboot
PM2_BIN="$(command -v pm2)"
CRON_LINE="@reboot PATH=$(dirname "$(command -v node)"):\$PATH $PM2_BIN resurrect # $APP_NAME"
( crontab -l 2>/dev/null | grep -v "# $APP_NAME\$" || true; echo "$CRON_LINE" ) | crontab - \
  || echo "WARNING: could not install @reboot cron entry"

# --- Apache: proxy https://<domain>/backend/* -> http://127.0.0.1:$PORT/*
mkdir -p "$PROXY_DIR"
cat > "$PROXY_DIR/.htaccess" <<EOF
# Managed by backend/scripts/deploy.sh - do not edit by hand.
DirectoryIndex disabled
RewriteEngine On
RewriteRule ^(.*)\$ http://127.0.0.1:$PORT/\$1 [P,L]
EOF

# --- Health check
for i in $(seq 1 15); do
  if curl -fsS "http://127.0.0.1:$PORT/api/health"; then echo; echo "Backend is up on port $PORT"; exit 0; fi
  sleep 2
done
echo "ERROR: backend did not become healthy"; pm2 logs "$APP_NAME" --lines 50 --nostream || true
exit 1
