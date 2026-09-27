/**
 * @param {number[]} prices
 * @param {number} k
 * @return {number}
 */
var maximumProfit = function(prices, k) {

    const NEG = -Infinity;

    // flat[t]  = max profit with t completed transactions,
    //             currently not in a transaction
    // long[t]  = currently in a normal transaction
    // short[t] = currently in a short transaction

    let flat = Array(k + 1).fill(NEG);
    let long = Array(k + 1).fill(NEG);
    let short = Array(k + 1).fill(NEG);

    flat[0] = 0;

    for (let price of prices) {

        let newFlat = [...flat];
        let newLong = [...long];
        let newShort = [...short];

        for (let t = 0; t <= k; t++) {

            // Start a normal transaction: buy today
            newLong[t] = Math.max(
                newLong[t],
                flat[t] - price
            );

            // Start a short transaction: sell today
            newShort[t] = Math.max(
                newShort[t],
                flat[t] + price
            );

            // Complete normal transaction: sell today
            if (t < k) {
                newFlat[t + 1] = Math.max(
                    newFlat[t + 1],
                    long[t] + price
                );

                // Complete short transaction: buy back today
                newFlat[t + 1] = Math.max(
                    newFlat[t + 1],
                    short[t] - price
                );
            }
        }

        flat = newFlat;
        long = newLong;
        short = newShort;
    }

    // We must finish with no active transaction.
    let answer = 0;

    for (let t = 0; t <= k; t++) {
        answer = Math.max(answer, flat[t]);
    }

    return answer;
};