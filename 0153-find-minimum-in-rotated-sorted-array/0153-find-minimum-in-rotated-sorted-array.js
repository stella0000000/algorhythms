/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = (nums) => {
    let [left, right] = [0, nums.length - 1]
    
    while (left < right) {
        const mid = (left + right) >> 1
        const guess = nums[mid]
        const [leftNum, rightNum] = [nums[left], nums[right]]

        const isTarget = leftNum < rightNum
        if (isTarget) return leftNum // base case we had

        const isTargetGreater = leftNum <= guess
        if (isTargetGreater) left = mid + 1

        const isTargetLess = guess < leftNum
        if (isTargetLess) right = mid
    }

    return nums[left]
    
//     if (nums.length === 1) return nums[0]
//     if (nums[nums.length-1] > nums[0]) return nums[0]
//     let minVal = nums[nums.length-1]
//     let left = 0
//     let right = nums.length-1
//     let mid = Math.floor((nums.length-1) / 2)
    
//     while (left < right) {
//         if (nums[mid-1] > nums[mid]) return nums[mid]
        
//         if (minVal <= nums[mid]) {
//             // keep checking right side
//             left = mid+1
//         } else if (minVal > nums[mid]) {
//             // keep checking left side
//             minVal = nums[mid]
//             right = mid
//         }
//     }
}

// need to find where left neighbor is > curr.val