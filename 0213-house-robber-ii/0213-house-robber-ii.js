/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length == 1) return nums[0];

    let n = nums.length;
    function helper(start, end) {
        let p2 = p1 = 0;
        for (let i = start; i <= end; i++) {
            let curr = Math.max(nums[i] + p2, p1);
            let temp = p1;
            p1 = curr;
            p2 = temp
            curr++;

        }
        return p1;
    }
    return Math.max(helper(0, n - 2), helper(1, n - 1))
}