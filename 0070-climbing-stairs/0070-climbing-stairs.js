/**
 * @param {number} n
 * @return {number}
 */

const memo = {
    1: 1,
    2: 2,
}

var climbStairs = function(n) {
    if (n in memo) return memo[n]
    // if (n < 0) return 0
    // if (n === 0) return 1
    // if (n === 2) return 2
    
    const left = climbStairs(n-2, memo)
    memo[n-2] = left
    const right = climbStairs(n-1, memo)
    memo[n-1] = right
    
    return left + right
};