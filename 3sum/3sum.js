/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// nums[], return triplets [nums[i], nums[j], nums[k]] === 0, i!==j!==k
var threeSum = function(nums) {
    const res = []
    nums.sort((a,b) => a-b)
    
    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i]
        const prevNum = nums[i-1]
        if (currNum > 0) break
        // not first val in input arr & same value as before.. don't wanna reuse
        if (i > 0 && currNum === prevNum) continue

        let left = i + 1
        let right = nums.length - 1
        
        while (left < right) {
            const sum = currNum + nums[left] + nums[right]
            
            if (sum > 0) {
                right--
            } else if (sum < 0) {
                left++
            } else {
                res.push([currNum, nums[left], nums[right]])
                // update pointers
                left++
                right--
                while (nums[left] === nums[left - 1] && left < right) left++
            }
        }
    }
    
    return res
};