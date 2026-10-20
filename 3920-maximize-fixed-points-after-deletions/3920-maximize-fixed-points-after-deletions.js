/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFixedPoints = function(nums) {
    const pairs = [];
    for (let i = 0; i < nums.length; i++) {
        if (i >= nums[i]) {
            pairs.push([i - nums[i], nums[i]]);
        }
    }

    // Sort by key 0 ascending, then key 1 ascending
    pairs.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        return a[1] - b[1];
    });

    const arr = pairs.map(p => p[1]);

    // Find the length of the Longest Increasing Subsequence (LIS)
    const lis = [];
    for (const x of arr) {
        let left = 0, right = lis.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (lis[mid] < x) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        if (left === lis.length) {
            lis.push(x);
        } else {
            lis[left] = x;
        }
    }

    return lis.length;
};