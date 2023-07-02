type Func<T extends any[], R> = (...args: T) => R;

function memoize<T extends any[], R>(func: Func<T, R>): Func<T, R> {
  const cache = new Map<string, R>();

  return (...args: T): R => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key)!;
    }

    const result = func(...args);
    cache.set(key, result);
    return result;
  };
}
