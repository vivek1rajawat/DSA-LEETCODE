/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(s) {
     n = s.length;
    while(n>=0){
        if(Number(s[n]) % 2 ==1 ){
            return s.substring(0, n+1);
        }
        n--;
    }
    return "";

};