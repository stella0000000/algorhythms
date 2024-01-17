/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 1 1 1 ==> 2


var subarraySum = function(nums, k) {
    // { prefixSum : count }
    const hashmap = { 0: 1 }
    let count = 0
    let sum = 0
    
    for (const num of nums) {
        sum += num
        let prefixSum = sum - k
        if (hashmap[prefixSum]) count += hashmap[prefixSum]
        
        hashmap[sum] ? hashmap[sum]++ : hashmap[sum] = 1
    }
    return count
};