/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var maxProductPair = function(nums, target) {
    let bestPair = [-1, -1];
    let maxProduct = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] + nums[j] === target && nums[i] > nums[j]) {
                const prod = nums[i] * nums[j];
                if (prod > maxProduct) {
                    maxProduct = prod;
                    bestPair = [i, j];
                }
            }
        }
    }

    return bestPair;
};