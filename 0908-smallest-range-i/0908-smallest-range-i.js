/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    // 0 <= i < nums.length
    // change nums[i] to nums[i] + x
    // x is [-k, k]
    // apply op at most once for each i
    
    // score of nums is difference between max and min
    // in nums
    
    const abs = Math.max(...nums) - Math.min(...nums)
    return abs <= k*2 ? 0 : abs-k*2
};