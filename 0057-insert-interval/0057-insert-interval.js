/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(arr, x) {
    let ans = [];
    let n = arr.length;
    let i = 0;
    while(i<n && arr[i][1] < x[0]){
        ans.push(arr[i]);
        i++;
    }

    while(i<n && arr[i][0] <= x[1]){
        x[0] = Math.min(arr[i][0], x[0]);
        x[1] = Math.max(arr[i][1], x[1]);
        i++;
    }
    ans.push(x);
    while(i<n){
        ans.push(arr[i]);
        i++;
    }
    return ans;
    
};