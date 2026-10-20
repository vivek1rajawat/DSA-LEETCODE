/**
 * @param {number} n
 * @return {boolean}
 */
var threeFibonacciSum = function(n) {
    // The sum of three consecutive Fibonacci numbers is always even (2 * F_{k+2})
    if (n % 2 !== 0) return false;
    
    const target = n / 2;
    const fibs = new Set();
    
    let a = 0, b = 1;
    fibs.add(a);
    fibs.add(b);
    
    while (b <= target) {
        let c = a + b;
        fibs.add(c);
        a = b;
        b = c;
    }
    
    return fibs.has(target);
};