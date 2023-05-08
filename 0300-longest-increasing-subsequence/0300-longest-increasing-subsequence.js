/**
 * @param {number[]} nums
 * @return {number}
 */

var lengthOfLIS = function(nums) {
    let sub = [nums[0]]
    
    for (let i = 1; i< nums.length; i++) {
        let curr = nums[i]
        let prev = sub[i-1]
        
        if (curr > prev) {
            sub.push(curr)
        } else {
            let j = 0
            while (curr > sub[j]) j++
            sub[j] = curr
        }
        
    }
    return sub.length
}

// var lengthOfLIS = function(nums) {
//     let sub = [nums[0]]
    
//     for (let i = 1; i< nums.length; i++) {
//         let currVal = nums[i]
// 		// important, this is from sub
//         let prevVal = sub[i-1]
        
//         if (currVal > prevVal) {
//             // there is increasing
//             // push into subsequence array
//             sub.push(currVal)
//         } else {
//             // currVal < prev
//             // not continously increasing value
//             // check from the beginning of sub array
//             let j = 0
//             while (currVal > sub[j]) j++
//             sub[j] = currVal
//         }
        
//     }
//     return sub.length
// }