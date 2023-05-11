/**
 * @param {number[]} nums
 * @return {number}
 */

// no 2 adjacent houses
// nums[i] = amount of money in each house
// return max amount of money without alerting police

var rob = function(nums) {    
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]
    
    // Keep track of max money we can make with x amount of houses available
    let dp = [ nums[0], Math.max(nums[0], nums[1]) ]

    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1])
    }
    
    return dp[nums.length - 1]
}