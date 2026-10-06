/**
 * @param {number[]} pizzas
 * @return {number}
 */
var maxWeight = function(pizzas) {
    pizzas.sort((a, b) => a - b);

    let days = pizzas.length / 4;
    let oddDays = Math.ceil(days / 2);
    let evenDays = Math.floor(days / 2);

    let left = 0;
    let right = pizzas.length - 1;
    let ans = 0;

    // Odd days
    for (let i = 0; i < oddDays; i++) {
        ans += pizzas[right];
        right--;
        left += 3;
    }

    // Even days
    for (let i = 0; i < evenDays; i++) {
        ans += pizzas[right - 1];
        right -= 2;
        left += 2;
    }

    return ans;
};