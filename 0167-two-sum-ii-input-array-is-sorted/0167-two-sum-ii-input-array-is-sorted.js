/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// input: numbers[], target: Number
// output: resultIndices[]

// we start at index 1
var twoSum = function(numbers, target) {
    let left = 0
    let right = numbers.length-1
    
    while (left < right) {
        let sum = numbers[left] + numbers[right]
        
        if (sum > target) {
            right--
        } else if (sum < target) {
            left++
        } else {
            return [left+1, right+1]
        }
    }
    
//     const map = {}

//     for (let i=0; i<numbers.length; i++) {
//         let complement = target - numbers[i]
//         if (complement in map) {
//             let lower = Math.min(i+1, map[complement]+1)
//             let higher = Math.max(i+1, map[complement]+1)
//             return [ lower, higher ]
//         }

//         map[numbers[i]] = i
//     }
};