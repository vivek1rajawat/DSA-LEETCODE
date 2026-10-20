/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var minCost = function(nums, queries) {
    const n = nums.length;
    const s1 = new Array(n).fill(0);
    const s2 = new Array(n).fill(0);

    for (let i = 1; i < n; i++) {
        // Cost to move from i-1 to i (forward)
        let c1 = (i > 1 && nums[i - 1] - nums[i - 2] <= nums[i] - nums[i - 1]) ? nums[i] - nums[i - 1] : 1;
        // Cost to move from i to i-1 (backward)
        let c2 = (i < n - 1 && nums[i] - nums[i - 1] > nums[i + 1] - nums[i]) ? nums[i] - nums[i - 1] : 1;
        
        s1[i] = s1[i - 1] + c1;
        s2[i] = s2[i - 1] + c2;
    }

    const ans = [];
    for (const q of queries) {
        const l = q[0], r = q[1];
        if (l < r) {
            ans.push(s1[r] - s1[l]);
        } else {
            ans.push(s2[l] - s2[r]);
        }
    }

    return ans;
};