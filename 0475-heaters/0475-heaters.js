/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    houses.sort((a, b) => a - b);
    heaters.sort((a, b) => a - b);

    let answer = 0;

    for (let house of houses) {
        let left = 0;
        let right = heaters.length - 1;

        // Find the first heater >= house
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (heaters[mid] < house) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        // left = first heater >= house
        let rightDistance = left < heaters.length
            ? heaters[left] - house
            : Infinity;

        // right = last heater < house
        let leftDistance = right >= 0
            ? house - heaters[right]
            : Infinity;

        let nearestDistance = Math.min(leftDistance, rightDistance);

        answer = Math.max(answer, nearestDistance);
    }

    return answer;
};