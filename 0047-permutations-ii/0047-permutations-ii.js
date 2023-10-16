/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 // backtracking algorithm
 
var permuteUnique = function(nums) {
    const res = []
    const map = {} // as a counter for every num in nums, branch @ every nonzero in map
    
    // build hash counter for each num
    // bc we have duplicate vals in nums[]
    for (let num of nums) {
        if (!map[num]) map[num] = 0
        map[num]++
    }
    
    const dfs = (map, currPerm) => {
        if (currPerm.length === nums.length) {
            res.push([...currPerm])
            return
        }
        
        // loop map keys for unique nums
        for (let num in map) {
            if (map[num] > 0) {        // we have num available
                currPerm.push(num)
                map[num]--
                
                // COPY OBJ TOO! OR IT WILL BE CHANGED IN SUBSEQ CALLS
                dfs({...map}, [...currPerm])
                
                currPerm.pop()
                map[num]++
            }            
        }
    }
    
    dfs(map, [])
    return res
};


// PERMUTATIONS I
// const permute = (nums) => {
//     const res = []
//     const n = nums.length
    
//     const dfs = (nums, currPerm) => {
//         if (currPerm.length === n) {
//             res.push([...currPerm])
//             return
//         }
        
//         for (let i=0; i<nums.length; i++) {
//             let curr = [...currPerm]
//             curr.push(nums[i])
            
//             dfs([...nums.slice(0,i), ...nums.slice(i+1)], curr)
//         }
//     }
    
//     return res
// }