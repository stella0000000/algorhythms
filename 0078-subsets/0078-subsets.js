/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const subsets = (nums) => {
    const res = []
    const subset = []
    
    const backtrack = (i) => {
        if (i >= nums.length) {
            res.push([...subset])
            return
        }
        
        let num = nums[i]
        
        subset.push(num)
        backtrack(i+1)
        
        subset.pop()
        backtrack(i+1)
    }
    
    backtrack(0)
    return res
}


// dfs recursion
// base case nums.length === 0 return [[]]
// char nums[0]
// remainder nums.slice(1)

// const subsets = (nums) => {
//     const res = []
//     const subset = []
    
//     const dfs = (i) => {
//         if (i >= nums.length) {
//             res.push([...subset])
//             return
//         }
        
//         const currNum = nums[i]
        
//         subset.push(currNum)
//         dfs(i+1)
        
//         subset.pop()
//         dfs(i+1)
//     }
    
//     dfs(0)
//     return res
// }

// const subsets = (nums) => {
//     if (nums.length === 0) return [[]]
    
//     const char = nums[0]
//     const remainder = nums.slice(1)
    
//     const exclude = subsets(remainder)
//     const include = exclude.map(subset => [char, ...subset])
    
//     return [...include, ...exclude]
// }

// var subsets = function(nums) {
//     // include or exclude
//     // return dfs(nums, [[]])
     
//     return dfs(nums, [[]])
    
    
// //     // bottom up approach return empty away all the way at bottom
// //     // build up coming back .. up
// // //     if (nums.length === 0) return [[]]
    
// // //     let char = nums[0]
// // //     let remainder = nums.slice(1)
    
// // //     let excludes = subsets(remainder)
// // //     let includes = excludes.map(sub => [...sub, char])
    
// // //     return [...excludes, ...includes]
// };

// const dfs = (nums, currSubsets) => {
//     // base case
//     if (nums.length === 0) return currSubsets
    
//     let remainder = nums.slice(1)
//     // let currCurrSubsets = currSubsets.map(subset => [...subset, nums[0]])
//     let exclude = dfs(remainder, currSubsets)
//     // exclude doesn't have anything to do with currCurrSubsets
//     currSubsets = currSubsets.map(subset => [...subset, nums[0]])
//     let include = dfs(remainder, currSubsets)
//     // let include = dfs(remainder, currCurrSubsets)
    
//     return [...include, ...exclude]
// }

// return all possible subsets
// no dupes, any order

// dfs backtracking
// unique solutions