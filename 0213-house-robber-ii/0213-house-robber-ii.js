/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]
    const withFirst = helper(nums.slice(0, nums.length-1))
    console.log(nums.slice(0, nums.length-1))
    const withoutFirst = helper(nums.slice(1))
    return Math.max(withFirst, withoutFirst)
};

const helper = (arr) => {
    const memo = new Array(arr.length).fill(0)
    memo[0] = arr[0]
    memo[1] = Math.max(arr[0], arr[1])
    
    for (let i=2; i<arr.length; i++) {
        memo[i] = Math.max(memo[i-2]+arr[i], memo[i-1])
    }
    
    return memo[arr.length-1]
}