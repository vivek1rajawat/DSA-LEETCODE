/**
 * @param {string} s
 * @return {number}
 */
var minRotations = function(s) {
    let ans = 0;
    let current = 0;

    for (let ch of s) {
        let digit = Number(ch);

        let diff = Math.abs(current - digit);

        ans += Math.min(diff, 10 - diff);

        current = digit;
    }

    return ans;
};