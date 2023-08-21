/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var subarraySum = function(nums, k) {
    const hashmap = { 0: 1 }
    let count = 0
    let total = 0
    
    for(const num of nums) {
        total += num
        if (hashmap[total - k]) count += hashmap[total - k]
        hashmap[total] ? hashmap[total]++ : hashmap[total] = 1
    }
    return count
    
//     const map = new Map([[0, 1]])
//     let sum = 0
//     let total = 0
    
//     for (let num of nums) {
//         sum = sum + num
//         total += (map.get(sum - k) || 0)
//         map.set(sum, (map.get(sum) || 0) + 1)
//     }
    
//     return total
};