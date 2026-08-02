/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {

    let map = new Map();

    // Count frequency
    for (let i = 0; i < arr1.length; i++) {
        map.set(arr1[i], (map.get(arr1[i]) || 0) + 1);
    }

    let ans = [];

    // Place elements according to arr2
    for (let i = 0; i < arr2.length; i++) {

        let num = arr2[i];
        let count = map.get(num);

        while (count > 0) {
            ans.push(num);
            count--;
        }

        map.delete(num);
    }

    // Remaining elements
    let remaining = [];

    for (let [num, count] of map) {

        while (count > 0) {
            remaining.push(num);
            count--;
        }
    }

    remaining.sort((a, b) => a - b);

    return ans.concat(remaining);
};