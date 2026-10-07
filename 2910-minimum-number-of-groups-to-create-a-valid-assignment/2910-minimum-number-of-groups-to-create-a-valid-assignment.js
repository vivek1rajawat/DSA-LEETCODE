/**
 * @param {number[]} balls
 * @return {number}
 */
var minGroupsForValidAssignment = function(balls) {
    let freq = new Map();

    // Count frequency of every number
    for (let x of balls) {
        freq.set(x, (freq.get(x) || 0) + 1);
    }

    let counts = [...freq.values()];

    // Minimum frequency
    let minFreq = Math.min(...counts);

    // Try the largest possible minimum group size first
    for (let size = minFreq; size >= 1; size--) {
        let groups = 0;
        let possible = true;

        for (let count of counts) {
            // Minimum number of groups needed if
            // every group has size at most size + 1
            let g = Math.ceil(count / (size + 1));

            // Can g groups contain 'count' elements
            // if every group has size size or size + 1?
            if (g * size > count) {
                possible = false;
                break;
            }

            groups += g;
        }

        if (possible) {
            return groups;
        }
    }

    return -1;
};