#!/usr/bin/env bash
# Strip invalid --localstorage-file from NODE_OPTIONS (often from Cursor), then set
# a valid path under .next so Node's Web Storage shim is real; avoids
# "localStorage.getItem is not a function" during SSR / Next tooling.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

strip_localstorage_from_node_options() {
	local o="$1"
	local prev=""
	until [[ "$o" == "$prev" ]]; do
		prev="$o"
		o=$(echo "$o" | sed -E \
			-e 's/[[:space:]]+--localstorage-file=[^[:space:]]*//g' \
			-e 's/^[[:space:]]*--localstorage-file=[^[:space:]]*//' \
			-e 's/[[:space:]]+--localstorage-file([[:space:]]|$)/ /g' \
			-e 's/^--localstorage-file([[:space:]]|$)//g')
	done
	o=$(echo "$o" | xargs 2>/dev/null || echo "$o")
	echo "$o"
}

LS_FILE="${ROOT}/.next/node-localstorage-db"
mkdir -p "${ROOT}/.next"

CLEAN_OPTS="$(strip_localstorage_from_node_options "${NODE_OPTIONS:-}")"
if [[ -n "$CLEAN_OPTS" ]]; then
	export NODE_OPTIONS="${CLEAN_OPTS} --localstorage-file=${LS_FILE}"
else
	export NODE_OPTIONS="--localstorage-file=${LS_FILE}"
fi

exec node "$ROOT/node_modules/next/dist/bin/next" "$@"
