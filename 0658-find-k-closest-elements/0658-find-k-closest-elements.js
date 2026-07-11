/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let l = 0;
    let r = arr.length - k;
    while(l<r){
        let m = Math.floor((l+r)/2);
        if( x - arr[m] <= arr[m+k]-x){
            r = m;
        }
        else {
            l = m+1;
        }
    }
    return arr.slice(l, l+k);
};