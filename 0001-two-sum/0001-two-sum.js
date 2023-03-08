/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = {}

    for (let i=0; i<nums.length; i++) {
        let complement = target - nums[i]
        if (complement in hash) return [i, hash[complement]]
        hash[nums[i]] = i
    }
};