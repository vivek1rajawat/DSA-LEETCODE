/**
 * @param {number[]} x
 * @param {number[]} y
 * @return {number}
 */
var maxSumDistinctTriplet = function(x, y) {

    let map = new Map();

    // Store maximum y for every x
    for (let i = 0; i < x.length; i++) {

        if (!map.has(x[i])) {
            map.set(x[i], y[i]);
        } else {
            map.set(x[i], Math.max(map.get(x[i]), y[i]));
        }
    }

    // Need at least 3 distinct x values
    if (map.size < 3) {
        return -1;
    }

    // Get maximum y for each distinct x
    let values = [...map.values()];

    // Sort descending
    values.sort((a, b) => b - a);

    return values[0] + values[1] + values[2];
};