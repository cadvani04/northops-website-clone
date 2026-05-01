/**
 * Cursor / Electron sometimes exposes a broken Node Web Storage shim (missing
 * getItem) when NODE_OPTIONS leaks an invalid `--localstorage-file`. Replace it
 * with an in-memory Storage so SSR does not crash.
 */
export function register() {
	if (typeof window !== "undefined") return;

	const g = globalThis as typeof globalThis & { localStorage?: unknown };
	const ls = g.localStorage;

	const broken =
		ls != null &&
		typeof ls === "object" &&
		typeof (ls as { getItem?: unknown }).getItem !== "function";

	if (!broken) return;

	const store = new Map<string, string>();

	const memoryStorage: Storage = {
		clear() {
			store.clear();
		},
		get length() {
			return store.size;
		},
		getItem(key: string) {
			const k = String(key);
			return store.has(k) ? (store.get(k) as string) : null;
		},
		key(index: number) {
			return [...store.keys()][index] ?? null;
		},
		removeItem(key: string) {
			store.delete(String(key));
		},
		setItem(key: string, value: string) {
			store.set(String(key), String(value));
		},
	};

	Object.defineProperty(g, "localStorage", {
		configurable: true,
		enumerable: true,
		value: memoryStorage,
	});
}
