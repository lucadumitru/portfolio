function serializeValue(value: unknown): unknown {
	if (value === null || value === undefined) return value;
	if (typeof value !== 'object') return value;
	if (value instanceof Date) return value.toISOString();
	if (value instanceof RegExp) return value.source;
	if (value instanceof URL) return value.href;
	if (Array.isArray(value)) return value.map(serializeValue);

	const instance = value as Record<string, unknown>;
	const result: Record<string, unknown> = {};

	const keys = new Set<string>();

	for (const key of Object.keys(instance)) {
		keys.add(key);
	}

	let proto = Object.getPrototypeOf(instance);
	while (proto && proto !== Object.prototype) {
		for (const key of Object.getOwnPropertyNames(proto)) {
			const descriptor = Object.getOwnPropertyDescriptor(proto, key);
			if (descriptor?.get) {
				keys.add(key);
			}
		}
		proto = Object.getPrototypeOf(proto);
	}

	for (const key of keys) {
		try {
			result[key] = serializeValue(instance[key]);
		} catch {
			// skip
		}
	}

	return result;
}

export function serialize<T>(value: T): T {
	return serializeValue(value) as T;
}
