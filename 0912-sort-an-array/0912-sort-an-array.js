/**
 * @param {number[]} nums
 * @return {number[]}
 */

const sortArray = (nums) => {
    if (nums.length <= 1) return nums
    
    let mid = Math.floor(nums.length / 2)
    
    let left = sortArray(nums.slice(0, mid))
    let right = sortArray(nums.slice(mid))
    
    return merge(left, right)
}

const merge = (left, right) => {
    const sorted = []
    
    while (left.length || right.length) {
        if (!left.length) {
            return [...sorted, ...right]
        }
        
        if (!right.length) {
            return [...sorted, ...left]
        }
        
        if (left[0] > right[0]) {
            sorted.push(right.shift())
        } else {
            sorted.push(left.shift())
        }
    }
    
    return sorted
}