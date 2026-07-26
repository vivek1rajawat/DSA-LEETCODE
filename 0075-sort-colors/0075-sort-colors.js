/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let zero = 0;
    let one = 0;
    let two = 0;
    for(let i = 0; i<nums.length; i++){
        if(nums[i]===0){
            zero++;
        }
        else if(nums[i] === 1){
            one++;
        }
        else{
            two++;
        }
    }
    let x = 0;
    while(zero > 0){
        nums[x] = 0;
        x++;
        zero--;
    }
    while(one > 0){
        nums[x] = 1;
        x++;
        one--;
    }
    while(two > 0){
        nums[x] = 2;
        x++;
        two--;
    }
};