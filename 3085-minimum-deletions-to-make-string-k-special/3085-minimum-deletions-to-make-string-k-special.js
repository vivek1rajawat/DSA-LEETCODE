/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function(word, k) {
    let freq = new Array(26).fill(0);

    // Count frequency of each character
    for (let ch of word) {
        freq[ch.charCodeAt(0) - 97]++;
    }

    // Remove characters that don't exist
    freq = freq.filter(x => x > 0);

    let ans = Infinity;

    // Assume freq[i] is the minimum frequency
    for (let minFreq of freq) {
        let deletions = 0;

        for (let f of freq) {
            if (f < minFreq) {
                // Delete this character completely
                deletions += f;
            } 
            else if (f > minFreq + k) {
                // Reduce frequency to minFreq + k
                deletions += f - (minFreq + k);
            }
        }

        ans = Math.min(ans, deletions);
    }

    return ans;
};