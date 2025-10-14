export function omitNullishAndUndefined<T extends Record<string, unknown>>(
  obj: T
): Partial<{ [K in keyof T]: Exclude<T[K], null | undefined> }> {
  const out: Partial<Record<keyof T, unknown>> = {};
  for (const [k, v] of Object.entries(obj) as [keyof T, T[keyof T]][]) {
    if (v != null) out[k] = v; // keeps 0, false, ""
  }
  return out as Partial<{ [K in keyof T]: Exclude<T[K], null | undefined> }>;
}
