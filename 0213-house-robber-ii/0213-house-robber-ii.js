/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * @param {number[]} nums
 * @return {number}
 */




// 2 - 3 - 2 => 2 - 


const rob = (nums) => {
    if (nums.length === 1) return nums[0]
    const withFirst = helper(nums.slice(0, nums.length-1)) // withoutLAST
    const withoutFirst = helper(nums.slice(1))
    
    return Math.max(withFirst, withoutFirst)
}

const helper = (nums) => {
    if (nums.length === 1) return nums[0]
    
    let prevPrev = nums[0]
    let prev = Math.max(nums[0], nums[1])
    
    for (let i=2; i<nums.length; i++) {
        let currNum = Math.max(nums[i]+prevPrev, prev)
        prevPrev = prev
        prev = currNum
    }
    
    return prev
}

// const helper = (nums) => {
//     if (nums.length === 1) return nums[0]
//     const memo = {}
//     memo[0] = nums[0]
//     memo[1] = Math.max(nums[0], nums[1])
    
//     for (let i=2; i<nums.length; i++) {
//         let currNum = nums[i]
//         memo[i] = Math.max(currNum+memo[i-2], memo[i-1])
//     }
    
//     return memo[memo.length-1]
// }




















// var rob = (nums) => {
//     if (nums.length === 0) return 0
//     if (nums.length === 1) return nums[0]

//     const left = search(nums, 0, (nums.length - 2))   /* Time O(N) */
//     const right = search(nums, 1, (nums.length - 1))  /* Time O(N) */

//     return Math.max(left, right)
// };

// const search = (nums, start, end) => {
//     let [ left, mid ] = [ 0, 0 ]

//     for (let i = start; i <= end; i++) {  /* Time O(N) */
//         const temp = mid
//         const right = nums[i]
//         const house = left + right

//         mid = Math.max(mid, house)
//         left = temp
//     }

//     return mid
// }