/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let map = new Map();
    map.set(0,-1);
    let sum = 0;
    for(let i = 0;i <nums.length; i++){
        sum+=nums[i];
        let rem = sum % k;
        if(map.has(rem)){
            if(i-map.get(rem)>=2){
                return true
            } 
            }
        else{
                map.set(rem,i);
            }
        
    }
    return false
};