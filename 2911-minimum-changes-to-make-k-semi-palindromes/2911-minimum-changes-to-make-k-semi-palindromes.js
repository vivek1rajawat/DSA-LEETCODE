/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumChanges = function(s, k) {
    let n = s.length;

    // cost[l][r] = minimum changes to make s[l...r]
    // a semi-palindrome
    let cost = Array.from({ length: n }, () => Array(n).fill(Infinity));

    // Try every substring
    for (let l = 0; l < n; l++) {
        for (let r = l + 1; r < n; r++) {

            let len = r - l + 1;

            // Try every proper divisor d of len
            for (let d = 1; d < len; d++) {
                if (len % d !== 0) continue;

                let changes = 0;

                // There are d groups.
                // Each group is a palindrome.
                for (let start = 0; start < d; start++) {
                    let left = l + start;
                    let right = l + start + len - d;

                    while (left < right) {
                        if (s[left] !== s[right]) {
                            changes++;
                        }

                        left += d;
                        right -= d;
                    }
                }

                cost[l][r] = Math.min(cost[l][r], changes);
            }
        }
    }

    // dp[g][i] =
    // minimum changes to divide first i characters
    // into exactly g semi-palindromes
    let dp = Array.from(
        { length: k + 1 },
        () => Array(n + 1).fill(Infinity)
    );

    dp[0][0] = 0;

    for (let groups = 1; groups <= k; groups++) {

        for (let i = 1; i <= n; i++) {

            // Last substring starts at j
            // We need enough characters for remaining groups.
            for (let j = groups - 1; j < i; j++) {

                if (dp[groups - 1][j] === Infinity) {
                    continue;
                }

                if (cost[j][i - 1] === Infinity) {
                    continue;
                }

                dp[groups][i] = Math.min(
                    dp[groups][i],
                    dp[groups - 1][j] + cost[j][i - 1]
                );
            }
        }
    }

    return dp[k][n];
};