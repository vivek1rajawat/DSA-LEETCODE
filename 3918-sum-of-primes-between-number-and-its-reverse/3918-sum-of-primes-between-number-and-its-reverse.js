/**
 * @param {number} n
 * @return {number}
 */
var sumOfPrimesInRange = function(n) {
    // Helper function to reverse the digits of a number
    const reverseNumber = (num) => {
        return parseInt(num.toString().split('').reverse().join(''), 10);
    };

    // Helper function to check if a number is prime
    const isPrime = (num) => {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    };

    const r = reverseNumber(n);
    const start = Math.min(n, r);
    const end = Math.max(n, r);

    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    return sum;
};