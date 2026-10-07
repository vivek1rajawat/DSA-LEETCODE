var isSubstringPresent = function(s) {
    for (let i = 0; i < s.length - 1; i++) {
        let pair = s[i] + s[i + 1];
        let reversePair = s[i + 1] + s[i];

        if (s.includes(reversePair)) {
            return true;
        }
    }

    return false;
};