#!/usr/bin/env bash
# Serve the static site locally for preview.
# Usage: ./start.sh [--port PORT]   (default port: 8000)
set -euo pipefail

PORT=8000

usage() {
  echo "Usage: $0 [--port PORT]" >&2
  exit 1
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --port)
      [[ $# -ge 2 ]] || usage
      PORT="$2"
      shift 2
      ;;
    --port=*)
      PORT="${1#*=}"
      shift
      ;;
    -h|--help)
      usage
      ;;
    *)
      echo "Unknown argument: $1" >&2
      usage
      ;;
  esac
done

if ! [[ "$PORT" =~ ^[0-9]+$ ]] || (( PORT < 1 || PORT > 65535 )); then
  echo "Invalid port: $PORT" >&2
  exit 1
fi

if ! command -v python3 >/dev/null 2>&1; then
  echo "python3 is required to run the preview server." >&2
  exit 1
fi

SITE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/site"

echo "Serving $SITE_DIR"
echo "  ES: http://localhost:$PORT/"
echo "  PT: http://localhost:$PORT/pt/"
echo "Press Ctrl+C to stop."

exec python3 -m http.server "$PORT" --directory "$SITE_DIR"
