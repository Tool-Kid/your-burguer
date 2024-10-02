export function deepMerge<T extends object>(target: T, source: Partial<T>): T {
  for (const key in source) {
    if (source[key] !== undefined) {
      if (
        typeof source[key] === 'object' &&
        source[key] !== null &&
        !Array.isArray(source[key])
      ) {
        target[key] = deepMerge(target[key] as any, source[key] as any);
      } else {
        target[key] = source[key] as any;
      }
    }
  }
  return target;
}
