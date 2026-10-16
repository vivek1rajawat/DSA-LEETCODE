/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let dp = {};
    function fn(remS){
        let n = remS.length;
        if(remS in dp) return dp[remS];
        if(remS === '')return 1;
        let oneDigit = remS.substring(n-1);
        let twoDigit = remS.substring(n-2);
        let ans = 0;
        if(oneDigit !=0){
            ans+=fn(remS.substring(0,n-1));
        }
        if(twoDigit >=10 && twoDigit <=26){
            ans+=fn(remS.substring(0,n-2))
        }
        dp[remS] = ans;
        return ans;

    }
    return fn(s);
};