/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var resilientSubarray = function(nums, k) {
    const n = nums.length;
    let maxLen = 0;

    for (let l = 0; l < n; l++) {
        let rem = nums[l] % k;
        for (let r = l; r < n; r++) {
            // Condition 1: All elements must have the same remainder modulo k
            if (nums[r] % k !== rem) {
                break;
            }
            
            // Condition 2: rem is 0, or (r - l) * rem is a multiple of k
            if (rem === 0 || ((r - l) * rem) % k === 0) {
                maxLen = Math.max(maxLen, r - l + 1);
            }
        }
    }

    return maxLen;
};