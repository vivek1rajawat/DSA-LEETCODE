/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} maxChanges
 * @return {number}
 */
var minimumMoves = function(nums, k, maxChanges) {
    let n = nums.length;

    // Find the longest consecutive sequence of 1s.
    let maxAdj = 0;
    let count = 0;
    let totalOnes = 0;

    for (let x of nums) {
        if (x === 1) {
            count++;
            totalOnes++;
        } else {
            maxAdj = Math.max(maxAdj, count);
            count = 0;
        }
    }

    maxAdj = Math.max(maxAdj, count);

    // We only care about up to 3 consecutive ones.
    maxAdj = Math.min(maxAdj, 3);

    // If nearby ones + created ones are enough,
    // use the nearby consecutive ones first.
    if (maxAdj + maxChanges >= k) {
        if (maxAdj >= k) {
            // k consecutive ones:
            // start at one of them, then move the other k-1 ones.
            return k - 1;
        }

        return Math.max(0, maxAdj - 1) +
               (k - maxAdj) * 2;
    }

    // Positions of all existing ones
    let ones = [];

    for (let i = 0; i < n; i++) {
        if (nums[i] === 1) {
            ones.push(i);
        }
    }

    // We MUST use this many existing ones.
    let need = k - maxChanges;

    // Prefix sum of positions
    let prefix = new Array(ones.length + 1).fill(0);

    for (let i = 0; i < ones.length; i++) {
        prefix[i + 1] = prefix[i] + ones[i];
    }

    let ans = Infinity;

    // Try every group of 'need' existing ones.
    for (let left = 0; left + need <= ones.length; left++) {
        let right = left + need - 1;

        // Median gives minimum movement cost.
        let mid = Math.floor((left + right) / 2);
        let median = ones[mid];

        // Left side cost
        let leftCount = mid - left + 1;
        let leftSum = prefix[mid + 1] - prefix[left];

        let leftCost =
            leftCount * median - leftSum;

        // Right side cost
        let rightCount = right - mid;
        let rightSum = prefix[right + 1] - prefix[mid + 1];

        let rightCost =
            rightSum - rightCount * median;

        let moveCost = leftCost + rightCost;

        // Remaining k - need ones are created.
        let changeCost = maxChanges * 2;

        ans = Math.min(
            ans,
            moveCost + changeCost
        );
    }

    return ans;
};