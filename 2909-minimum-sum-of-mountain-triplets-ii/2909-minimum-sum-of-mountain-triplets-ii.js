/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
    let n = nums.length;

    let leftMin = new Array(n);
    let rightMin = new Array(n);

    // Smallest element to the left
    leftMin[0] = Infinity;

    for (let i = 1; i < n; i++) {
        leftMin[i] = Math.min(leftMin[i - 1], nums[i - 1]);
    }

    // Smallest element to the right
    rightMin[n - 1] = Infinity;

    for (let i = n - 2; i >= 0; i--) {
        rightMin[i] = Math.min(rightMin[i + 1], nums[i + 1]);
    }

    let ans = Infinity;

    // Treat nums[j] as the peak
    for (let j = 1; j < n - 1; j++) {
        if (leftMin[j] < nums[j] && rightMin[j] < nums[j]) {
            ans = Math.min(
                ans,
                leftMin[j] + nums[j] + rightMin[j]
            );
        }
    }

    return ans === Infinity ? -1 : ans;
};