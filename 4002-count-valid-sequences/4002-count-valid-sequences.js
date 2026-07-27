/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var countValidSequences = function(n, k) {

    const MOD = 1000000007n;

    const fact = new Array(n + 1).fill(1n);
    const invFact = new Array(n + 1).fill(1n);

    // factorial
    for (let i = 1; i <= n; i++) {
        fact[i] = fact[i - 1] * BigInt(i) % MOD;
    }

    // fast power
    function power(a, b) {
        let ans = 1n;
        while (b > 0n) {
            if (b & 1n)
                ans = ans * a % MOD;
            a = a * a % MOD;
            b >>= 1n;
        }
        return ans;
    }

    // inverse factorial
    invFact[n] = power(fact[n], MOD - 2n);

    for (let i = n; i >= 1; i--) {
        invFact[i - 1] = invFact[i] * BigInt(i) % MOD;
    }

    function nCr(N, R) {
        if (R < 0 || R > N) return 0n;

        return fact[N] * invFact[R] % MOD * invFact[N - R] % MOD;
    }

    let total = nCr(n - 1, k - 1);

    let odd = 0n;

    if ((n - k) % 2 === 0) {
        let N = (n + k - 2) / 2;
        odd = nCr(N, k - 1);
    }

    let ans = (total - odd + MOD) % MOD;

    return Number(ans);
};