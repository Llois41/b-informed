export type KeysFromMap<TMap> = TMap extends ReadonlyMap<infer K, unknown> ? K : unknown;
