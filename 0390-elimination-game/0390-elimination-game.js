/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {

    let head = 1;
    let step = 1;
    let remaining = n;
    let left = true;

    while (remaining > 1) {

        // Head changes if:
        // 1. Eliminating from left
        // 2. Eliminating from right with odd count
        if (left || remaining % 2 === 1) {
            head += step;
        }

        // After every round:
        // gap between remaining numbers doubles
        step *= 2;

        // Half the numbers are removed
        remaining = Math.floor(remaining / 2);

        // Change direction
        left = !left;
    }

    return head;
};