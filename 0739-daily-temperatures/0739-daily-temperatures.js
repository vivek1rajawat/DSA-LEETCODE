/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(arr) {
    let stack = [];
    let ans = [];
    let n = arr.length;
    stack.push(n-1);
    ans[n-1] = 0;
    for(let i = n-2; i>=0; i--){
        while(stack.length){
            if(arr[stack[stack.length-1]] <= arr[i]){
                stack.pop();
            }
            else{
                ans[i] = ((stack[stack.length-1])-i);
                break;
            }
        }if(stack.length == 0){
            ans[i] = 0;
        }
        stack.push(i);
    }
    return ans;
};