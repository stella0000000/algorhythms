/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// nums[], return triplets [nums[i], nums[j], nums[k]] === 0, i!==j!==k
var threeSum = function(nums) {
    const res = [];
    nums.sort((a,b) => a-b)

    for (let i = 0; i < nums.length; i++) {
        const a = nums[i]
        if (a > 0) break
        // not first val in input arr & same value as before.. don't wanna reuse
        if (i > 0 && a === nums[i - 1]) continue

        let left = i + 1
        let right = nums.length - 1
        
        while (left < right) {
            const sum = a + nums[left] + nums[right]
            
            if (sum > 0) {
                right--
            } else if (sum < 0) {
                left++
            } else {
                res.push([a, nums[left], nums[right]])
                // update pointers
                left++
                while (nums[left] === nums[left - 1] && left < right) left++
            }
        }
    }
    return res
};