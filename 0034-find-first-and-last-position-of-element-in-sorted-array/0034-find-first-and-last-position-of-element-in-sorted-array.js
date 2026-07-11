/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(arr, target) {
    let l = 0;
    let r = arr.length -1;
    let ans = [-1,-1];
    if(arr.length === 0) return ans;
    while(l<r){
        let m = Math.floor((l+r)/2);
        if( arr[m]>=target){

            r = m;
        }
        else {
            l = m+1;
        }
    }if(arr[l]!= target){
        return ans;
    }
    ans[0] = r
    l = 0;
    r = arr.length-1;
    while(l<r){
        let m = Math.ceil((l+r)/2);
        if(arr[m]<=target){
            l = m;
        }else {
            r = m-1
        }
    }ans[1] = r
    return ans;
};