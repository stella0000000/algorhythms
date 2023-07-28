/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    // include or exclude
    // return dfs(nums, [[]])
    
    if (nums.length === 0) return [[]]
    
    let char = nums[0]
    let remainder = nums.slice(1)
    
    let excludes = subsets(remainder)
    let includes = excludes.map(sub => [...sub, char])
    
    return [...excludes, ...includes]
};

// const dfs = (nums, currSubsets) => {
//     // base case
//     if (nums.length === 0) return currSubsets
    
//     // what am i returning
//     // currSubsets.push(nums[0], currSubsets)
    
//     let right = dfs(nums.slice(1), currSubsets)  // exclude
    
//     currSubsets.map(subset => subset.push(nums[0]))
//     // for (const subset of currSubsets) {
//     //     subset.push(nums[0])
//     // }
    
//     let left = dfs(nums.slice(1), currSubsets) // include
    
//     // console.log(nums.slice(1))
//     // console.log({ left, right, currSubsets })
    
//     return [...left, ...right]
// }

// return all possible subsets
// no dupes, any order

// dfs backtracking
// unique solutions