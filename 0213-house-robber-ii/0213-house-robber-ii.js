/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = (nums) => {
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]

    const left = search(nums, 0, (nums.length - 2))   /* Time O(N) */
    const right = search(nums, 1, (nums.length - 1))  /* Time O(N) */

    return Math.max(left, right)
};

const search = (nums, start, end) => {
    let [ left, mid ] = [ 0, 0 ]

    for (let i = start; i <= end; i++) {  /* Time O(N) */
        const temp = mid
        const right = nums[i]
        const house = left + right

        mid = Math.max(mid, house)
        left = temp
    }

    return mid
}