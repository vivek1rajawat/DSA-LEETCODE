/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let arr = [...nums, ...nums];
    let stack = [];
    let n = arr.length;
    let ans = [];
    stack.push(arr[n-1]);
    ans[n-1] = -1;
    for(let i = n-2; i>=0; i--){
        while(stack.length){
            if(stack[stack.length-1] <= arr[i]){
                stack.pop();
            }
            else{
                ans[i] = stack[stack.length-1];
                break;
            }
        }
        if(stack.length == 0){
            ans[i] = -1
        }stack.push(arr[i]);
    }
    return ans.slice(0, ans.length/2);

};