#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
if command -v python3 >/dev/null 2>&1; then
  python3 -m http.server 7777
elif command -v python >/dev/null 2>&1; then
  python -m http.server 7777
else
  echo "Python is required to run a local server on port 7777." >&2
  exit 1
fi
