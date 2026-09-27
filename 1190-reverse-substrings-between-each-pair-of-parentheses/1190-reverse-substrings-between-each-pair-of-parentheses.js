/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {

    let stack = [""];
    
    for (let ch of s) {

        if (ch === "(") {
            // Start a new substring
            stack.push("");
        }

        else if (ch === ")") {
            // Get current substring
            let current = stack.pop();

            // Reverse it
            current = current.split("").reverse().join("");

            // Add it to previous level
            stack[stack.length - 1] += current;
        }

        else {
            // Normal character
            stack[stack.length - 1] += ch;
        }
    }

    return stack[0];
};