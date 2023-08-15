/**
 * @param {number[]} nums
 * @return {number}
 */

const rob = (nums) => {
    const memo = new Array(nums.length).fill(0)
    
    memo[0] = nums[0]
    memo[1] = Math.max(nums[0], nums[1])
    
    for (let i=2; i<nums.length; i++) {
        memo[i] = Math.max(memo[i-2] + nums[i], memo[i-1])
    }
    
    return memo[nums.length-1]
}

// var rob = function(nums) {
//     const memo = {}
//     return dfs(nums, memo, 0)
// };

// const dfs = (nums, memo, n) => {
//     if (memo[n]) return memo[n]
//     if (n >= nums.length) return 0
    
//     let robbed = nums[n] + dfs(nums, memo, n+2)
//     let notRobbed = dfs(nums, memo, n+1)
    
//     memo[n] = Math.max(robbed, notRobbed)
    
//     return memo[n]
// }


// no 2 adjacent houses
// nums[i] = amount of money in each house
// return max amount of money without alerting police
// var rob = function(nums, i=0) {    
//     if (!nums.length) return 0

//     let [ left, mid ] = [ 0, 0 ]

//     for (const right of nums) { /* Time O(N) */
//         const temp = mid
//         const house = left + right

//         mid = Math.max(mid, house)
//         left = temp
//     }

//     return mid
// }