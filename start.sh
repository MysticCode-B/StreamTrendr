#!/bin/bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "Starting StreamTrendr..."

echo "Starting backend server..."
(
  cd "$ROOT_DIR/backend"
  npm run dev
) &
BACKEND_PID=$!

sleep 3

echo "Starting frontend server..."
(
  cd "$ROOT_DIR/frontend"
  npm run dev
) &
FRONTEND_PID=$!

cleanup() {
  echo ""
  echo "Stopping servers..."
  kill "$BACKEND_PID" "$FRONTEND_PID" 2>/dev/null || true
}

trap cleanup INT TERM EXIT

echo ""
echo "Both servers are starting up!"
echo "Backend API: http://localhost:3001"
echo "Frontend App: http://localhost:5173 or http://localhost:5174"
echo ""
echo "Press Ctrl+C to stop both servers"

wait "$BACKEND_PID" "$FRONTEND_PID"
