/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {

    let ans = [];

    function backtrack(start, path, sum) {

        // Base case
        if (path.length === k) {

            if (sum === n) {
                ans.push([...path]);
            }

            return;
        }

        // Try every number from start to 9
        for (let i = start; i <= 9; i++) {

            path.push(i);

            backtrack(i + 1, path, sum + i);

            path.pop(); // Backtrack
        }
    }

    backtrack(1, [], 0);

    return ans;
};