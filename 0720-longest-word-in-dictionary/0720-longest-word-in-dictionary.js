/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {

    let set = new Set(words);
    let ans = "";

    for (let i = 0; i < words.length; i++) {

        let word = words[i];
        let valid = true;

        // Check every prefix
        for (let j = 1; j < word.length; j++) {

            let prefix = word.substring(0, j);

            if (!set.has(prefix)) {
                valid = false;
                break;
            }
        }

        if (valid) {

            if (
                word.length > ans.length ||
                (word.length === ans.length && word < ans)
            ) {
                ans = word;
            }
        }
    }

    return ans;
};