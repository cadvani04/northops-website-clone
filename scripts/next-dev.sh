#!/usr/bin/env bash
set -euo pipefail
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
exec bash "$DIR/with-clean-node-env.sh" dev -H 0.0.0.0 --turbopack
