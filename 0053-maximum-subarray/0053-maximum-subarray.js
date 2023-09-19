/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0]
    let currSum = 0
    
    for (const n of nums) {
        currSum = Math.max(currSum, 0) + n
        maxSum = Math.max(currSum, maxSum)
    }
    
    return maxSum
};