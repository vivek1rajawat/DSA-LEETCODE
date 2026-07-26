/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let  x= 0;
    let count = 0;
    for(let i = 0; i<nums.length; i++){
        if(count == 0){
            x = nums[i]
        } if( nums[i] == x){
            count++;
        }else {
            count--;
        }
    }
    return x;
};