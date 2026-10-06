/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasSpecialSubstring = function(s, k) {
    let n = s.length;

    for (let i = 0; i <= n - k; i++) {
        let ch = s[i];
        let valid = true;

        // Check all k characters are same
        for (let j = i; j < i + k; j++) {
            if (s[j] !== ch) {
                valid = false;
                break;
            }
        }

        if (!valid) continue;

        // Character before substring
        if (i > 0 && s[i - 1] === ch) {
            continue;
        }

        // Character after substring
        if (i + k < n && s[i + k] === ch) {
            continue;
        }

        return true;
    }

    return false;
};