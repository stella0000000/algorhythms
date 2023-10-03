/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

// input: root of a BT, targetSum
// output: boolean if tree has root to leaf path s/t sum === targetSum
var hasPathSum = function(root, targetSum) {
    if (!root) return false
    if (!root.left && !root.right) return root.val === targetSum

    let left = hasPathSum(root.left, targetSum-root.val)
    let right = hasPathSum(root.right, targetSum-root.val)

    return left || right
};