// Fibonacci: synchronous and asynchronous
// I used a regular Fibonacci function without memoization to establish a baseline:

export function syncFib(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  return syncFib(n - 1) + syncFib(n - 2);
}
