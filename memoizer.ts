type Func<T extends any[], R> = (...args: T) => R;

function memoize<T extends any[], R>(func: Func<T, R>): Func<T, R> {
  // Create a cache using a Map to store computed results
  const cache = new Map<string, R>();

  // Return a memoized version of the input function
  return (...args: T): R => {
    // Generate a unique key based on the function arguments
    const key = JSON.stringify(args);

    // Check if the result is already cached
    if (cache.has(key)) {
      // Return the cached result
      return cache.get(key)!;
    }

    // Call the original function with the provided arguments
    const result = func(...args);

    // Cache the result for future use
    cache.set(key, result);

    // Return the computed result
    return result;
  };
}
