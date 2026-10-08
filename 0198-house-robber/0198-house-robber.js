/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(val) {
    let dp = [val[0], Math.max(val[0], val[1])];
    for(let i = 2 ; i<val.length; i++){
        dp[i] = Math.max(dp[i-2]+val[i], dp[i-1]);
    }
    return dp[val.length-1];
    
};