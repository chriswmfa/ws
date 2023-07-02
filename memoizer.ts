function memoize<T extends (...args: any[]) => any>(func: T): T {
    // Create a cache object to store the computed results
    const cache: Map<string, any> = new Map();
  
    // Return a new function that acts as the memoized version of the input function
    return function (...args: any[]): any {
      // Generate a unique key based on the function arguments
      const key: string = JSON.stringify(args);
  
      // Check if the result is already cached
      if (cache.has(key)) {
        // Return the cached result
        return cache.get(key);
      }
  
      // Call the original function with the provided arguments
      const result: any = func.apply(this, args);
  
      // Cache the result for future use
      cache.set(key, result);
  
      // Return the computed result
      return result;
    } as T;
  }
  