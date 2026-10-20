/**
 * @param {number} n
 * @param {number} s
 * @return {number[]}
 */
var maxPrimes = function(n, s) {
    if (n < 2) return [];
    
    // 1. Sieve of Eratosthenes to find all primes up to n
    const isPrime = new Uint8Array(n + 1);
    isPrime.fill(1);
    isPrime[0] = 0;
    isPrime[1] = 0;
    
    for (let p = 2; p * p <= n; p++) {
        if (isPrime[p]) {
            for (let i = p * p; i <= n; i += p) {
                isPrime[i] = 0;
            }
        }
    }
    
    // 2. Greedily select the smallest primes while keeping the sum <= s
    const primes = [];
    let currentSum = 0;
    
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            if (currentSum + i <= s) {
                currentSum += i;
                primes.push(i);
            } else {
                break; // Since primes are sorted, any subsequent prime will also exceed the limit
            }
        }
    }
    
    return primes;
};