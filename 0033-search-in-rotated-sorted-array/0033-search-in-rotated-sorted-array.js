/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
O(n)
    look @ first ele
    look @ last ele
    if last < first - rotate by one til it's true
    return number of times you rotated
    shift() + push()

O(logn) - binary search?
    find the smallest value, idx
    

*/

const search = (nums, target) => {
    const smallestIdx = findPivot(nums)
    
    let left = 0
    let right = nums.length-1
    
    if (smallestIdx >= 0) {
        if (target > nums[nums.length-1]) {
            // look to left of target idx
            left = 0
            right = smallestIdx-1
        } else {
            // look to right of target idx
            left = smallestIdx
            right = nums.length-1
        }
    }
    
    while (left <= right) {
        let mid = Math.floor((left+right) / 2)
        
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] > target) {
            right = mid - 1 // we looked @ mid already
       } else {
            left = mid + 1 // we looked @ mid already dont forget zack!
       }
    }
    
    return -1
};

const findPivot = (nums) => {
    // return smallest val's idx
    if (nums.length === 1) return -1
    // if (nums[0] < nums[nums.length-1]) return -1
    
    let left = 1
    let right = nums.length-1
    
    while (left <= right) {
        let mid = Math.floor((left+right) / 2)
        let leftVal = nums[mid-1]
        let midVal = nums[mid]
        
        if (leftVal > midVal) {
            return mid
        } else if (midVal > nums[0]) {
            // we go right
            left = mid+1
       } else {
            right = mid-1
       }
    }
    
    return -1   // arr is sorted
}