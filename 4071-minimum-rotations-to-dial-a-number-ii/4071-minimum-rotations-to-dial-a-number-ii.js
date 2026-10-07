/**
 * @param {number} n
 * @param {string} s
 * @return {number}
 */
var minRotations = function(n, s) {
    const dist = (a, b) => {
        const d = Math.abs(a - b);
        return Math.min(d, 10 - d);
    };

    const a = Array.from(s, Number);

    // prefix[i] = cost of:
    // 0 -> a[0] -> ... -> a[i]
    const prefix = new Array(n);

    prefix[0] = dist(0, a[0]);

    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + dist(a[i - 1], a[i]);
    }

    // suffix[i] = cost of:
    // a[i] -> a[i+1] -> ... -> a[n-1]
    const suffix = new Array(n).fill(0);

    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] + dist(a[i], a[i + 1]);
    }

    // Don't reverse
    let ans = prefix[n - 1];

    // Reverse suffix starting at k
    for (let k = 0; k < n; k++) {
        let current;

        if (k === 0) {
            // Entire string is reversed:
            // a[n-1], a[n-2], ..., a[0]
            current = dist(0, a[n - 1]) + suffix[0];
        } else {
            // Prefix up to a[k-1]
            let before = prefix[k - 1];

            // New boundary:
            // a[k-1] -> a[n-1]
            let boundary = dist(a[k - 1], a[n - 1]);

            // Reversed suffix has same internal cost as original suffix
            let after = suffix[k];

            current = before + boundary + after;
        }

        ans = Math.min(ans, current);
    }

    return ans;
};