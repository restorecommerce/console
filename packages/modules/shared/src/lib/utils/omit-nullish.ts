// Deep type helper: strips null/undefined and recurses into objects/arrays.
// (Note: "emptiness" is a runtime concern; the type can’t know that ahead of time.)
type DeepClean<T> = T extends null | undefined
  ? never
  : T extends (infer U)[]
  ? DeepClean<U>[]
  : T extends object
  ? {
      [K in keyof T as T[K] extends null | undefined ? never : K]?: DeepClean<
        T[K]
      >;
    }
  : T;

const isPlainObject = (v: unknown): v is Record<string, unknown> =>
  typeof v === 'object' && v !== null && (v as object).constructor === Object;

function _cleanDeep<V>(value: V): unknown {
  // Remove null/undefined
  if (value == null) return undefined;

  // Arrays: clean each item, drop undefineds, drop if empty
  if (Array.isArray(value)) {
    const cleaned = value
      .map((x) => _cleanDeep(x))
      .filter((x) => x !== undefined);
    return cleaned.length ? cleaned : undefined;
  }

  // Plain objects: clean each prop, drop if no keys remain
  if (isPlainObject(value)) {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) {
      const cleaned = _cleanDeep(v as unknown);
      if (cleaned !== undefined) out[k] = cleaned;
    }
    return Object.keys(out).length ? out : undefined;
  }

  // Non-plain objects (Date, Map, Set, class instances, etc.): keep as-is
  return value;
}

/**
 * Recursively remove null/undefined, empty arrays, and empty plain objects.
 * Keeps 0, false, and "".
 */
export function omitNullishAndEmpty<T extends Record<string, unknown>>(
  obj: T
): Partial<DeepClean<T>> {
  const cleaned = _cleanDeep(obj);
  // If the entire object became empty, return {} (typed) instead of undefined
  return cleaned && typeof cleaned === 'object'
    ? (cleaned as Partial<DeepClean<T>>)
    : ({} as Partial<DeepClean<T>>);
}
