/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
    let n = nums.length;
    let ans = Infinity;

    for (let j = 1; j < n - 1; j++) {
        let left = Infinity;
        let right = Infinity;

        // Find smallest nums[i] where i < j and nums[i] < nums[j]
        for (let i = 0; i < j; i++) {
            if (nums[i] < nums[j]) {
                left = Math.min(left, nums[i]);
            }
        }

        // Find smallest nums[k] where k > j and nums[k] < nums[j]
        for (let k = j + 1; k < n; k++) {
            if (nums[k] < nums[j]) {
                right = Math.min(right, nums[k]);
            }
        }

        // Valid mountain exists with j as peak
        if (left !== Infinity && right !== Infinity) {
            ans = Math.min(ans, left + nums[j] + right);
        }
    }

    return ans === Infinity ? -1 : ans;
};