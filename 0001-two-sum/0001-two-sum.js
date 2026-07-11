/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {
    let n = arr.length;
    let map = {};
    for(let i = 0; i<n; i++){
        map[arr[i]] = i;
    }
    for(let i = 0; i<n; i++){
        let pair = target - arr[i];
        if(map[pair] && map[pair]!= i){
            return[i, map[pair]];
        }
    }
};