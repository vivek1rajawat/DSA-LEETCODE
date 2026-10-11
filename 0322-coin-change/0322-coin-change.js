var coinChange = function(coins, amount) {
    let n = coins.length;
    let dp = {};
    let fn = (remAmount) => {
        if (remAmount === 0) return 0;
        if (remAmount < 0) return -1;

        if (remAmount in dp) {
            return dp[remAmount];
        }

        let minCoins = Infinity;
        for (let i = 0; i < n; i++) {
            let res = fn(remAmount - coins[i]);
            if (res != -1) {
                minCoins = Math.min(minCoins, 1 + res);
            }
        }
        dp[remAmount] = (minCoins === Infinity) ? -1 : minCoins;
        return dp[remAmount];
    };
    return fn(amount);
};