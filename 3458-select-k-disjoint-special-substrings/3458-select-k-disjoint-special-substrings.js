/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var maxSubstringLength = function(s, k) {
    if (k === 0) return true;
    
    const n = s.length;
    const first = new Array(26).fill(-1);
    const last = new Array(26).fill(-1);

    // Step 1: Record first and last occurrence of each character
    for (let i = 0; i < n; i++) {
        const code = s.charCodeAt(i) - 97;
        if (first[code] === -1) first[code] = i;
        last[code] = i;
    }

    const intervals = [];

    // Step 2: Expand intervals for each character
    for (let i = 0; i < 26; i++) {
        if (first[i] === -1) continue;

        let l = first[i];
        let r = last[i];
        let isValid = true;

        for (let j = l; j <= r; j++) {
            const code = s.charCodeAt(j) - 97;
            if (first[code] < l) {
                // If a character's start index is before 'l', we can't start at 'l'
                // because it wouldn't fully enclose that character's occurrences.
                isValid = false;
                break;
            }
            r = Math.max(r, last[code]);
        }

        // Substring cannot be the entire string s
        if (isValid && (l !== 0 || r !== n - 1)) {
            intervals.push([l, r]);
        }
    }

    // Step 3: Greedy Interval Scheduling
    // Sort intervals by their end index
    intervals.sort((a, b) => a[1] - b[1]);

    let count = 0;
    let prevEnd = -1;

    for (const [start, end] of intervals) {
        if (start > prevEnd) {
            count++;
            prevEnd = end;
        }
    }

    return count >= k;
};