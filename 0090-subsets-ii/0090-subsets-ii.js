/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsetsWithDup = function(nums) {
    nums.sort()
    const res = []
    backtrack(0, [], nums, res)
    return res
};

function backtrack(index, subset, nums, res) {
    if (index > nums.length) return
    
    // console.log("res: ",res)
    // console.log("subset: ",subset)
    
    res.push([...subset])
    
    for (let i = index; i < nums.length; i++) {
        if(i > index && nums[i] === nums[i - 1]) continue
        
        subset.push(nums[i])
        backtrack(i+1, subset, nums, res)
        
        subset.pop()
    }
    
    return res
}

// var subsetsWithDup = function(nums) {
//     const result = [];
//     nums.sort();
    
//     const dfs = (arr, i) => {
//         if (i === nums.length) {
//             result.push(arr);
//             return;
//         }
//         // take the current number
//         dfs([...arr, nums[i]], i+1);
//         // while not at end of array and duplicate after current number
//         while (i+1 < nums.length && nums[i] === nums[i + 1]) {
//             i++;
//         }
//         // leave the current number
//         dfs([...arr], i+1);
//     }
    
//     dfs([], 0);
//     return result;
// };