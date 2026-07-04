/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let R = L = count = 0;
    for (let i = 0; i<s.length; i++){
        if(s[i] === "R"){
            R++;
        } else {
            L++
        }
        if(L == R){
            count++;
            L=R=0;        }
    }
    return count;
};