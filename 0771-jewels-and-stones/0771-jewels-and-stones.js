/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jSet = new Set();
    for(let i = 0; i<jewels.length; i++){
        jSet.add(jewels[i])
    }
    let count  = 0;
    for(j = 0; j<stones.length; j++){
        if(jSet.has(stones[j])){
            count++;
        }
    }
    return count;
};