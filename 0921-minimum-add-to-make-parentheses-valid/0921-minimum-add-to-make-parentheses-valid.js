/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let openCount = 0;
    let addCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            openCount++;
        } else {
            if (openCount > 0) {
                openCount--;
            } else {
                addCount++;
            }
        }
    }

    return openCount + addCount;
};