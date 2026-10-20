/**
 * @param {string} num
 * @return {number[]}
 */
var splitIntoFibonacci = function(num) {
    const result = [];
    const n = num.length;
    const MAX_INT = 2147483647; // 2^31 - 1

    function backtrack(index, path) {
        // If we reach the end of the string and have at least 3 numbers, we found a valid sequence
        if (index === n && path.length >= 3) {
            return true;
        }

        for (let i = index; i < n; i++) {
            // Numbers cannot have leading zeros (e.g., "05" is invalid, but "0" is valid)
            if (num[index] === '0' && i > index) {
                break;
            }

            const subStr = num.slice(index, i + 1);
            const numVal = Number(subStr);

            // Check 32-bit signed integer limit
            if (numVal > MAX_INT) {
                break;
            }

            // If we have at least 2 numbers, the next number must equal the sum of the previous two
            const len = path.length;
            if (len >= 2 && numVal > path[len - 1] + path[len - 2]) {
                // Since numbers are only growing, if it exceeds the sum, further substrings will also exceed
                break;
            }
            if (len >= 2 && numVal < path[len - 1] + path[len - 2]) {
                continue;
            }

            path.push(numVal);
            if (backtrack(i + 1, path)) {
                return true;
            }
            path.pop();
        }

        return false;
    }

    backtrack(0, result);
    return result;
};