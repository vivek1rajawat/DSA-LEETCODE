var countSubstrings = function(s, c) {
    let count = 0;
    let ans = 0;

    for (let ch of s) {
        if (ch === c) {
            count++;
            ans += count;
        }
    }

    return ans;
};