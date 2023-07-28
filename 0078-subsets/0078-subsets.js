/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    // include or exclude
    // return dfs(nums, [[]])
    
    return dfs(nums, [[]])
    
    
    // bottom up approach return empty away all the way at bottom
    // build up coming back .. up
//     if (nums.length === 0) return [[]]
    
//     let char = nums[0]
//     let remainder = nums.slice(1)
    
//     let excludes = subsets(remainder)
//     let includes = excludes.map(sub => [...sub, char])
    
//     return [...excludes, ...includes]
};

const dfs = (nums, currSubsets) => {
    // base case
    if (nums.length === 0) return currSubsets
    
    let remainder = nums.slice(1)
    // let currCurrSubsets = currSubsets.map(x => [...x, nums[0]])
    let exclude = dfs(remainder, currSubsets)
    // 33 doesn't have anything to do with 31
    currSubsets = currSubsets.map(x => [...x, nums[0]])
    let include = dfs(remainder, currSubsets)
    // let include = dfs(remainder, currCurrSubsets)
    
    return [...include, ...exclude]
}

// return all possible subsets
// no dupes, any order

// dfs backtracking
// unique solutions