#!/usr/bin/env bash
set -euo pipefail
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# Turbopack can race or look for stale pages/_app manifests → ENOENT errors.
# Default to webpack dev. Opt in: DEV_TURBOPACK=1 bun run dev
args=(dev -H 0.0.0.0)
[[ "${DEV_TURBOPACK:-}" == "1" ]] && args+=(--turbopack)
exec bash "$DIR/with-clean-node-env.sh" "${args[@]}"
