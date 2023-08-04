/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// backtracking generates all solutions one ele @ a time
// use an arr => curr[] => curr permutation we're building
// add first ele in nums
// now curr = [nums[0]]
// locking in first value @ now find all permutations starting with [nums[0]
    // start by adding next ele nums[1]
// curr = [nums[0], nums[1]]
// etc...
// base case: use all nums => curr.len === nums.len
// now backtrack removing nums[1] => curr = [nums[0]]
// add nums[2] => curr = [nums[0], nums[2]]...

// now backtrack popping nums[0]


// [[], [1], [2], []]
const permute = (nums) => {
    const ans = []
    backtrack([], nums, ans)
    return ans
}

const backtrack = (curr, nums, ans) => {
    if (curr.length === nums.length) {
        ans.push([...curr]) // add copy of curr return to ans
        return
    }
    
    for (let i=0; i<nums.length; i++) {
        let num = nums[i]
        
        if (!curr.includes(num)) {
            curr.push(num)
            backtrack(curr, nums, ans)
            curr.pop(num)
        }
    }    
}


// nums[], distinct integers
// return all possible permutations
// any order

// const permute = (nums) => {
//     if (nums.length === 0) return [[]]
    
//     const firstChar = nums[0]
    
//     const exclude = permute(nums.slice(1))
    
//     let permutations = []
//     for (let perm of exclude) {
//         for (let i=0; i<=perm.length; i++) {
//             permutations.push([...perm.slice(0, i), firstChar, ...perm.slice(i)])
//         }
//     }
    
//     return permutations
// }


// const permute = (nums) => {
//     const res = []
    
//     const dfs = (idx, res) => {
//         if (nums.length === 1) return [...nums]
        
//         for (let i=0; i<nums.length; i++) {
//             let n = nums.pop()
//             let perms = permute(nums)
//             // [2, 3], [3, 2] => push n
            
//             for (let perm in perms) {
//                 perm.push(n)
//                 res.push(perm)
//             }
            
//             nums.unshift(n)
//         }
//     }
    
//     dfs(0, res)
//     return res
// }