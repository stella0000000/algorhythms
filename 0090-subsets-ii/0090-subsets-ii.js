/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
                   []
           /                 \
           1                  []
        /     \             /   \
   [1, 2]     [1]        [2]      []
     / \      /   \      /  \     /  \
  [122] [12] [12]* [1]*  [22] [2] [2]* []*
  
  * skipping
*/
// var subsetsWithDup = function(nums) {
//     nums.sort()
//     const res = []
//     backtrack(0, [], nums, res)
//     return res
// };

// function backtrack(index, subset, nums, res) {
//     // reached end base case
//     if (index > nums.length) return
    
//     res.push([...subset])
    
//     for (let i = index; i < nums.length; i++) {
//         // if i is past index, or two adjacent values are equal
//         if (i > index && nums[i] === nums[i - 1]) continue
        
//         // include
//         let num = nums[i]
//         subset.push(num)
//         backtrack(i+1, subset, nums, res)
        
//         subset.pop()
//     }
    
//     return res
// }

// 1, 2, 2
// res = [ [1, 2, 2], [1, 2], [1], [2, 2], [2], [] ]


var subsetsWithDup = function(nums) {
    const result = []
    nums.sort()
    
    const dfs = (subset, i) => {
        // reached end base case
        if (i === nums.length) {
            result.push([...subset])
            return
        }
        
        // All subsets that include nums[i]
        let num = nums[i]
        subset.push(num)
        dfs(subset, i+1)
        
        // All subsets that don't include nums[i]
        subset.pop()
        
        // exclude all duplicates of that number
        // just skip that branch
        while (i+1 < nums.length && nums[i] === nums[i + 1]) {
            i++
        }
        
        // leave the current number
        dfs(subset, i+1)
    }
    
    dfs([], 0)
    return result
};