/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countOppositeParity = function(nums) {
    const n = nums.length;
    const answer = new Array(n).fill(0);

    // Iterate backwards from the end of the array to count opposite parity elements efficiently
    let oddCount = 0;
    let evenCount = 0;

    for (let i = n - 1; i >= 0; i--) {
        // For the current index i, the number of future elements with opposite parity
        // is the count of evens if nums[i] is odd, or the count of odds if nums[i] is even.
        if (nums[i] % 2 === 0) {
            answer[i] = oddCount;
            evenCount++;
        } else {
            answer[i] = evenCount;
            oddCount++;
        }
    }

    return answer;
};