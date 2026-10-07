/**
 * @param {number} n
 * @return {number}
 */
let d = [];
var climbStairs = function (n) {
    if (n <= 2) return n;
    if (d[n]) {
        return d[n]
    }
    d[n] = climbStairs(n - 1) + climbStairs(n - 2);

    return d[n];


};