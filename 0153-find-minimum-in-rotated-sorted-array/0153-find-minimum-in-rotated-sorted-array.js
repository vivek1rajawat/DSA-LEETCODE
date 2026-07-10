/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(a) {
    let l = 0;
    let r = a.length - 1;
    while(l<=r){
        let m = Math.floor((l+r)/2)
        if(a[l]<=a[r]){
            return a[l];
        }
        if(a[m] < a[m-1]){
            return a[m];
        }
        else if(a[l] > a[m]){
            r = m-1;
        }
        else {
            l = m+1;
        }
    }
};