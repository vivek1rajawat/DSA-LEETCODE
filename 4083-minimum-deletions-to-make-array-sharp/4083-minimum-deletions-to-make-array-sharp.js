/**
 * @param {number[]} nums
 * @return {number}
 */
var minDeletions = function(nums) {
    const n = nums.length;
    // dp[prev_val] = max length of a valid sharp array ending with prev_val
    // Since nums[i] <= 100, we can use a direct lookup array initialized to -1.
    let dp = new Array(101).fill(-1);
    
    for (let x of nums) {
        let maxLen = 1; // We can always start a new sequence with x (length 1)
        for (let prev = 1; prev <= 100; prev++) {
            if (prev !== x && dp[prev] !== -1) {
                maxLen = Math.max(maxLen, dp[prev] + 1);
            }
        }
        dp[x] = Math.max(dp[x], maxLen);
    }
    
    // The maximum length of a sharp subarray we can form
    let maxSharpLength = 0;
    for (let prev = 1; prev <= 100; prev++) {
        maxSharpLength = Math.max(maxSharpLength, dp[prev]);
    }
    
    // Minimum deletions = total length - maximum length of a valid sharp array
    return n - maxSharpLength;
};