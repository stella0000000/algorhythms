/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const pivot = findPivot(nums)
    
    let left = 0
    let right = nums.length-1
    
    while (left <= right) {
        let mid = (left + right) >> 1
        let shiftedIdx =  (mid + pivot) % nums.length
        let midVal = nums[shiftedIdx]
        
        if (midVal === target) {
            return shiftedIdx
        } else if (midVal < target) {
            // go up
            left = mid + 1
        } else if (midVal > target) {
            right = mid - 1
        }
    }
    
    return -1
};


// find pivot index
// map idx after that
// left = 0
// right is length

const findPivot = (nums) => {
    let [left, right] = [0, nums.length - 1]
    
    // guaranteed to find target
    while (left < right) {
        const mid = (left + right) >> 1
        const guess = nums[mid]
        const [leftNum, rightNum] = [nums[left], nums[right]]

        const isTarget = leftNum < rightNum
        if (isTarget) return left

        // right chunk
        const isTargetGreater = leftNum <= guess
        if (isTargetGreater) left = mid + 1

        // left chunk
        const isTargetLess = guess < leftNum
        if (isTargetLess) right = mid
    }

    return left
}