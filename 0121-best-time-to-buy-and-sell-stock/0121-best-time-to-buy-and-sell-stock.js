/**
 * @param {number[]} prices
 * @return {number}
 */

// choose a day to buy a stock
// sell it in future
// max profit : 0

var maxProfit = function(prices) {
    let l = 0
    let r = 1
    let maxProfit = 0

    while (r < prices.length) {
        if (prices[r] < prices[l]) {
            l = r
        } else {
            let profit = prices[r] - prices[l]
            maxProfit = Math.max(maxProfit, profit)
        }
        r++
    }

    return maxProfit
};