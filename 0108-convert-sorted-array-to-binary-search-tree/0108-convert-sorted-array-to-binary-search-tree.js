/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (!nums || !nums.length) return null
    
    const mid = Math.floor(nums.length/2)
    const node = new TreeNode(nums[mid])

    node.left = sortedArrayToBST(nums.slice(0, mid))
    node.right = sortedArrayToBST(nums.slice(mid + 1, nums.length))
    
    return node
};


// input: nums array sorted in ascending order
// height balanced BST
// BST = left child < parent < right child

