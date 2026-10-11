var longestPalindrome = function(s) {
    let n = s.length;
    if (n === 0) return "";
    // dp[i][j] will be true if s[i..j] is a palindrome
    let dp = Array.from({ length: n }, () => Array(n).fill(false));
    let ans = [0, 0];
    // Base cases: length 1 and length 2
    for (let i = 0; i < n; i++) {
        dp[i][i] = true; // single char
        if (i < n - 1 && s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            ans = [i, i + 1];
        }
    }
    // Check lengths from 3 to n
    for (let len = 3; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            let j = i + len - 1;
            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                ans = [i, j];
            }
        }
    }
    return s.substring(ans[0], ans[1] + 1);
};